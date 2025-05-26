import React, { useState } from 'react';
import { useUserPermissions } from '../../hooks/useUserPermissions';
import { DataDomain } from '../security/MLSWrapper';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import { Label } from '@radix-ui/react-label';
import { Badge } from '@radix-ui/react-badge';
import { SecurityIndicator } from '../security/SecurityIndicator';

export const DomainSelector: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<DataDomain>(DataDomain.CIVILIAN);
  const { userPermissions } = useUserPermissions();
  
  return (
    <div className="flex items-center gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
      <Label className="text-sm font-medium">Data Domain:</Label>
      <RadioGroup 
        value={selectedDomain} 
        onValueChange={(value) => setSelectedDomain(value as DataDomain)}
      >
        <div className="flex gap-4">
          {userPermissions.canAccessCivilian && (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={DataDomain.CIVILIAN} id="civilian" />
              <Label htmlFor="civilian" className="cursor-pointer">
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  Civilian
                </Badge>
              </Label>
            </div>
          )}
          
          {userPermissions.canAccessMilitary && (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={DataDomain.MILITARY} id="military" />
              <Label htmlFor="military" className="cursor-pointer">
                <Badge variant="outline" className="bg-red-50 text-red-700">
                  Military
                </Badge>
              </Label>
            </div>
          )}
          
          {userPermissions.canAccessDualUse && (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={DataDomain.DUAL_USE} id="dual-use" />
              <Label htmlFor="dual-use" className="cursor-pointer">
                <Badge variant="outline" className="bg-purple-50 text-purple-700">
                  Dual-Use
                </Badge>
              </Label>
            </div>
          )}
        </div>
      </RadioGroup>
      
      <div className="ml-auto">
        <SecurityIndicator domain={selectedDomain} />
      </div>
    </div>
  );
};
