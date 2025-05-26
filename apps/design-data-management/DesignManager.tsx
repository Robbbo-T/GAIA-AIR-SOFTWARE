import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TransformControls } from '@react-three/drei';
import { MLSWrapper, ClassificationLevel, DataDomain } from '../../components/security/MLSWrapper';
import { FileTree } from '../../components/file-browser/FileTree';
import { VersionTimeline } from '../../components/version-history/VersionTimeline';
import { CADModel } from '../../components/viewer/CADModel';
import { AssemblyTreeView } from '../../components/viewer/AssemblyTreeView';
import { MetadataEditor } from '../../components/metadata/MetadataEditor';
import { Button } from '../../components/ui/Button';
import { ScrollArea } from '../../components/ui/ScrollArea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';
import { DesignProperties } from '../../components/properties/DesignProperties';
import { ComplianceTracker } from '../../components/compliance/ComplianceTracker';
import { LifecycleStatus } from '../../components/lifecycle/LifecycleStatus';
import { ExportControlIndicator } from '../../components/security/ExportControlIndicator';
import { CollaborationStatus } from '../../components/collaboration/CollaborationStatus';
import { FileFormatFilter } from '../../components/file-browser/FileFormatFilter';
import { SecurityLoadingScreen } from '../../components/security/SecurityLoadingScreen';
import { AccessDeniedScreen } from '../../components/security/AccessDeniedScreen';
import { ClassificationBanner } from '../../components/security/ClassificationBanner';
import { GridHelper } from '../../components/viewer/GridHelper';
import { Cube, GitBranch, FileText, Upload } from 'react-feather';

export const DesignDataManager: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<DesignFile | null>(null);
  const [viewMode, setViewMode] = useState<'3d' | 'tree' | 'metadata'>('3d');
  const { designs, loadDesign, updateMetadata } = useDesignStore();

  return (
    <MLSWrapper 
      requiredClearance={ClassificationLevel.CUI}
      dataDomain={DataDomain.DUAL_USE}
    >
      <div className="flex h-screen">
        {/* File Browser */}
        <aside className="w-80 border-r bg-white dark:bg-slate-950">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Design Files</h2>
              <Button size="sm" variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Import
              </Button>
            </div>
            
            <FileFormatFilter />
            
            <ScrollArea className="h-[calc(100vh-200px)]">
              <FileTree 
                files={designs}
                onSelect={setSelectedFile}
                supportedFormats={['STEP', 'IGES', 'CATIA', 'SolidWorks', 'JT']}
              />
            </ScrollArea>
          </div>
          
          {/* Version History */}
          <div className="p-4 border-t">
            <h3 className="text-sm font-medium mb-2">Version History</h3>
            <VersionTimeline file={selectedFile} />
          </div>
        </aside>
        
        {/* Main Viewer */}
        <main className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="border-b p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === '3d' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('3d')}
                >
                  <Cube className="h-4 w-4 mr-2" />
                  3D View
                </Button>
                <Button
                  variant={viewMode === 'tree' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('tree')}
                >
                  <GitBranch className="h-4 w-4 mr-2" />
                  Assembly Tree
                </Button>
                <Button
                  variant={viewMode === 'metadata' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('metadata')}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Metadata
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <ExportControlIndicator file={selectedFile} />
                <CollaborationStatus file={selectedFile} />
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="flex-1 relative">
            {viewMode === '3d' && (
              <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <CADModel file={selectedFile} />
                <OrbitControls makeDefault />
                <TransformControls mode="translate" />
                <GridHelper args={[10, 10]} />
              </Canvas>
            )}
            
            {viewMode === 'tree' && (
              <AssemblyTreeView 
                file={selectedFile}
                onNodeSelect={(node) => highlightInModel(node)}
              />
            )}
            
            {viewMode === 'metadata' && (
              <MetadataEditor 
                file={selectedFile}
                onUpdate={updateMetadata}
                complianceRules={['ITAR', 'EAR', 'GDPR']}
              />
            )}
          </div>
        </main>
        
        {/* Properties Panel */}
        <aside className="w-96 border-l bg-white dark:bg-slate-950">
          <Tabs defaultValue="properties" className="h-full">
            <TabsList className="w-full">
              <TabsTrigger value="properties" className="flex-1">Properties</TabsTrigger>
              <TabsTrigger value="compliance" className="flex-1">Compliance</TabsTrigger>
              <TabsTrigger value="lifecycle" className="flex-1">Lifecycle</TabsTrigger>
            </TabsList>
            
            <TabsContent value="properties" className="p-4">
              <DesignProperties file={selectedFile} />
            </TabsContent>
            
            <TabsContent value="compliance" className="p-4">
              <ComplianceTracker 
                file={selectedFile}
                regulations={['ITAR', 'EAR', 'NATO STANAG']}
              />
            </TabsContent>
            
            <TabsContent value="lifecycle" className="p-4">
              <LifecycleStatus 
                file={selectedFile}
                stages={['Design', 'Validation', 'Production', 'Operation', 'EOL']}
              />
            </TabsContent>
          </Tabs>
        </aside>
      </div>
    </MLSWrapper>
  );
};
