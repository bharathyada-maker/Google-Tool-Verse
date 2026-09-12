import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GeminiDemo, BigQueryDemo, FirebaseDemo, CloudDeployDemo } from '../components/InteractiveDemos';
import { 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Database, 
  Flame, 
  Cloud, 
  Boxes, 
  Smartphone, 
  Info, 
  Code,
  Layers,
  ChevronRight
} from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const { allTools, selectedToolId, setSelectedToolId, navigateToTool } = useApp();

  // Selected tool for flow inspection
  const availableToolsWithFlows = allTools.filter(t => t.howItWorks && t.howItWorks.steps.length > 0);
  
  const currentTool = availableToolsWithFlows.find(t => t.id === selectedToolId) || availableToolsWithFlows[0];
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = currentTool.howItWorks.steps[activeStepIndex] || currentTool.howItWorks.steps[0];

  const handleToolSelect = (toolId: string) => {
    setSelectedToolId(toolId);
    setActiveStepIndex(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1 flex items-center gap-1.5">
          <Workflow className="w-3.5 h-3.5" />
          <span>Interactive Visual Architectural Explanations</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          How Google Technologies Work
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
          Don’t just read static docs. Click through step-by-step visual flows to understand how data moves from input to cloud infrastructure and back.
        </p>
      </div>

      {/* Tool Flow Selector Carousel/Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 touch-scroll no-scrollbar">
        {availableToolsWithFlows.map(tool => (
          <button
            key={tool.id}
            onClick={() => handleToolSelect(tool.id)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold shrink-0 whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              currentTool.id === tool.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tool.color }} />
            <span>{tool.name}</span>
          </button>
        ))}
      </div>

      {/* Interactive Visual Flow Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-8">
        
        {/* Active Tool Flow Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800/50">
                Visual Flow Architecture
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500 font-medium">{currentTool.category}</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              {currentTool.howItWorks.title}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              {currentTool.howItWorks.summary}
            </p>
          </div>

          <button
            onClick={() => navigateToTool(currentTool.id)}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs flex items-center gap-1.5 self-start sm:self-auto cursor-pointer shadow-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white dark:hover:text-white transition-colors"
          >
            <span>View Full Package</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Step-by-Step Interactive Pipeline Track */}
        <div className="space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Pipeline Stages (Click any stage to inspect)</span>
            <span>Stage {activeStepIndex + 1} of {currentTool.howItWorks.steps.length}</span>
          </div>

          {/* Interactive Step Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {currentTool.howItWorks.steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all cursor-pointer relative group ${
                    isActive
                      ? 'border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 shadow-md ring-2 ring-indigo-500/20'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                      isActive ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {idx + 1}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                    )}
                  </div>

                  <div className="font-extrabold text-xs text-slate-900 dark:text-white mb-0.5 line-clamp-1">
                    {step.label}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    {step.sublabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="bg-slate-50 dark:bg-slate-950/60 rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
              Stage {activeStepIndex + 1}: {activeStep.label}
            </span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-500 font-semibold">{activeStep.sublabel}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            {/* Plain English explanation */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                What Happens at this Step (Plain English)
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                {activeStep.description}
              </p>
            </div>

            {/* Technical under the hood details */}
            {activeStep.technicalDetails && (
              <div className="space-y-2 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5" />
                  <span>Under the Hood & Architecture</span>
                </div>
                <p className="text-xs font-mono text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeStep.technicalDetails}
                </p>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
              disabled={activeStepIndex === 0}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
            >
              ← Previous Stage
            </button>

            <button
              onClick={() => setActiveStepIndex(prev => Math.min(currentTool.howItWorks.steps.length - 1, prev + 1))}
              disabled={activeStepIndex === currentTool.howItWorks.steps.length - 1}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 cursor-pointer flex items-center gap-1.5"
            >
              <span>Next Stage</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Embedded Interactive Simulator if matched */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Live Sandbox Simulation
            </h3>
          </div>

          {currentTool.demoType === 'gemini-sandbox' && <GeminiDemo />}
          {currentTool.demoType === 'bigquery-sql' && <BigQueryDemo />}
          {currentTool.demoType === 'firebase-arch' && <FirebaseDemo />}
          {currentTool.demoType === 'cloud-deploy' && <CloudDeployDemo />}
          {currentTool.demoType === 'none' && (
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 text-center space-y-2">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Explore the complete code snippets and 6-step beginner instructions in the package page.
              </p>
              <button
                onClick={() => navigateToTool(currentTool.id)}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs cursor-pointer shadow-sm"
              >
                Open {currentTool.name} Package
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
