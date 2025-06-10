import React, { useState } from 'react';
import { useTechPubsStore } from '../../hooks/useTechPubsStore';
import { MLSWrapper, ClassificationLevel, DataDomain } from '../../components/security/MLSWrapper';
import { DocumentCard } from '../../components/document/DocumentCard';
import { S1000DEditor } from '../../components/editor/S1000DEditor';
import { PublicationPreview } from '../../components/preview/PublicationPreview';
import { AIPublicationAssistant } from '../../components/ai/AIPublicationAssistant';
import { Button } from '../../components/ui/Button';
import { ScrollArea } from '../../components/ui/ScrollArea';
import { Badge } from '../../components/ui/Badge';
import { Label } from '../../components/ui/Label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../components/ui/Select';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import { Sparkles, GitBranch, Languages, CheckCircle, FileDown } from 'react-feather';
import { EmptyState } from '../../components/ui/EmptyState';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';
import { BREXRuleManager } from '../../components/brex/BREXRuleManager';
import { CrossReferenceManager } from '../../components/cross-reference/CrossReferenceManager';

export const TechnicalPublicationsHub: React.FC = () => {
  const [activeDocument, setActiveDocument] = useState<TechDocument | null>(null);
  const [generationMode, setGenerationMode] = useState<'manual' | 'auto'>('auto');
  const { documents, generateDocument, validateS1000D } = useTechPubsStore();
  
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
      {/* Document Library */}
      <aside className="w-80 border-r bg-white dark:bg-slate-950">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Technical Publications</h2>
          
          {/* Document Type Filter */}
          <div className="mb-4">
            <Label className="text-sm mb-2">Document Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="amm">AMM - Aircraft Maintenance Manual</SelectItem>
                <SelectItem value="ipc">IPC - Illustrated Parts Catalog</SelectItem>
                <SelectItem value="tsm">TSM - Troubleshooting Manual</SelectItem>
                <SelectItem value="srm">SRM - Structural Repair Manual</SelectItem>
                <SelectItem value="wdm">WDM - Wiring Diagram Manual</SelectItem>
                <SelectItem value="sb">SB - Service Bulletin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Standards Compliance */}
          <div className="mb-4">
            <Label className="text-sm mb-2">Standard</Label>
            <RadioGroup defaultValue="s1000d">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="s1000d" id="s1000d" />
                <Label htmlFor="s1000d">S1000D v5.0</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ispec2200" id="ispec2200" />
                <Label htmlFor="ispec2200">ATA iSpec 2200</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Document List */}
          <ScrollArea className="h-[calc(100vh-400px)]">
            <div className="space-y-2">
              {documents.map(doc => (
                <DocumentCard 
                  key={doc.id}
                  document={doc}
                  onClick={() => setActiveDocument(doc)}
                  isActive={activeDocument?.id === doc.id}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
        
        {/* Generation Controls */}
        <div className="p-4 border-t">
          <Button 
            className="w-full" 
            variant="cyber"
            onClick={() => setShowGenerationWizard(true)}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Generate New Publication
          </Button>
        </div>
      </aside>
      
      {/* Main Editor/Viewer */}
      <main className="flex-1 flex flex-col">
        {activeDocument ? (
          <>
            {/* Document Header */}
            <header className="border-b p-4 bg-white dark:bg-slate-950">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-semibold">{activeDocument.title}</h1>
                  <div className="flex items-center gap-4 mt-1 text-sm text-slate-600">
                    <span>Issue: {activeDocument.issueNumber}</span>
                    <span>•</span>
                    <span>Date: {activeDocument.issueDate}</span>
                    <span>•</span>
                    <span>
                      <Badge variant={activeDocument.status === 'approved' ? 'success' : 'warning'}>
                        {activeDocument.status}
                      </Badge>
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <GitBranch className="h-4 w-4 mr-2" />
                    Version History
                  </Button>
                  <Button variant="outline" size="sm">
                    <Languages className="h-4 w-4 mr-2" />
                    Translations
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => validateS1000D(activeDocument)}>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Validate
                  </Button>
                  <Button variant="default" size="sm">
                    <FileDown className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </header>
            
            {/* Content Editor/Viewer */}
            <div className="flex-1 flex">
              {/* XML/Content Editor */}
              <div className="flex-1">
                <S1000DEditor 
                  document={activeDocument}
                  mode={generationMode}
                  onContentChange={(content) => updateDocument(activeDocument.id, content)}
                />
              </div>
              
              {/* Preview Panel */}
              <div className="w-1/2 border-l">
                <PublicationPreview 
                  document={activeDocument}
                  format="interactive"
                />
              </div>
            </div>
          </>
        ) : (
          <EmptyState 
            title="Select a document"
            description="Choose a document from the library or generate a new one"
            action={
              <Button onClick={() => setShowGenerationWizard(true)}>
                Generate Publication
              </Button>
            }
          />
        )}
      </main>
      
      {/* AI Assistant & Tools */}
      <aside className="w-96 border-l bg-white dark:bg-slate-950">
        <Tabs defaultValue="ai-assist" className="h-full">
          <TabsList className="w-full">
            <TabsTrigger value="ai-assist" className="flex-1">AI Assistant</TabsTrigger>
            <TabsTrigger value="brex" className="flex-1">BREX Rules</TabsTrigger>
            <TabsTrigger value="links" className="flex-1">Cross-Refs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ai-assist" className="p-4">
            <AIPublicationAssistant 
              document={activeDocument}
              capabilities={[
                'content-generation',
                'summarization',
                'translation',
                'compliance-check',
                'impact-analysis'
              ]}
            />
          </TabsContent>
          
          <TabsContent value="brex" className="p-4">
            <BREXRuleManager 
              document={activeDocument}
              onRuleViolation={(violations) => highlightViolations(violations)}
            />
          </TabsContent>
          
          <TabsContent value="links" className="p-4">
            <CrossReferenceManager 
              document={activeDocument}
              linkedDocuments={getLinkedDocuments(activeDocument)}
            />
          </TabsContent>
        </Tabs>
      </aside>
    </div>
  );
};
