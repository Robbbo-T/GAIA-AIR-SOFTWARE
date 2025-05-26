import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export enum ClassificationLevel {
  UNCLASSIFIED = 'UNCLASSIFIED',
  CUI = 'CONTROLLED_UNCLASSIFIED_INFORMATION',
  SECRET = 'SECRET',
  TOP_SECRET = 'TOP_SECRET',
  NATO_RESTRICTED = 'NATO_RESTRICTED',
  NATO_CONFIDENTIAL = 'NATO_CONFIDENTIAL',
  NATO_SECRET = 'NATO_SECRET'
}

export enum DataDomain {
  CIVILIAN = 'CIVILIAN',
  MILITARY = 'MILITARY',
  DUAL_USE = 'DUAL_USE'
}

interface MLSWrapperProps {
  requiredClearance: ClassificationLevel;
  dataDomain: DataDomain;
  children: React.ReactNode;
}

export const MLSWrapper: React.FC<MLSWrapperProps> = ({
  requiredClearance,
  dataDomain,
  children
}) => {
  const { data: session } = useSession();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    validateAccess();
  }, [session, requiredClearance, dataDomain]);
  
  const validateAccess = async () => {
    if (!session?.user) {
      setIsAuthorized(false);
      setIsLoading(false);
      return;
    }
    
    try {
      // Validate clearance level
      const response = await fetch('/api/security/validate-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Classification': requiredClearance,
          'X-Domain': dataDomain
        },
        body: JSON.stringify({
          userId: session.user.id,
          requestedClassification: requiredClearance,
          dataDomain: dataDomain,
          context: {
            timestamp: new Date().toISOString(),
            sourceIP: window.location.hostname,
            sessionId: session.sessionId
          }
        })
      });
      
      const result = await response.json();
      
      // Log access attempt for audit
      await logAccessAttempt({
        userId: session.user.id,
        classification: requiredClearance,
        domain: dataDomain,
        granted: result.authorized,
        reason: result.reason
      });
      
      setIsAuthorized(result.authorized);
    } catch (error) {
      console.error('Access validation error:', error);
      setIsAuthorized(false);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isLoading) {
    return <SecurityLoadingScreen classification={requiredClearance} />;
  }
  
  if (!isAuthorized) {
    return <AccessDeniedScreen 
      requiredClearance={requiredClearance}
      userClearance={session?.user?.clearanceLevel}
      dataDomain={dataDomain}
    />;
  }
  
  return (
    <div className={`mls-container ${getClassificationStyle(requiredClearance)}`}>
      <ClassificationBanner 
        level={requiredClearance}
        domain={dataDomain}
      />
      {children}
    </div>
  );
};

// Classification visual indicators
const getClassificationStyle = (level: ClassificationLevel): string => {
  const styles = {
    [ClassificationLevel.UNCLASSIFIED]: 'border-green-500',
    [ClassificationLevel.CUI]: 'border-yellow-500',
    [ClassificationLevel.SECRET]: 'border-red-500',
    [ClassificationLevel.TOP_SECRET]: 'border-red-700',
    [ClassificationLevel.NATO_RESTRICTED]: 'border-blue-500',
    [ClassificationLevel.NATO_CONFIDENTIAL]: 'border-blue-600',
    [ClassificationLevel.NATO_SECRET]: 'border-blue-700'
  };
  
  return `border-t-4 ${styles[level]}`;
};
