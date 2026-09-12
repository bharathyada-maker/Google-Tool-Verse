import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GeminiDemo, BigQueryDemo, FirebaseDemo, CloudDeployDemo } from '../components/InteractiveDemos';
import { 
  Bookmark, 
  Scale, 
  ExternalLink, 
  Workflow, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  BookOpen, 
  Code, 
  Users, 
  Layers, 
  Check, 
  Copy, 
  Flag, 
  ShieldCheck, 
  Clock, 
  Zap,
  Globe,
  Sliders
} from 'lucide-react';

export const ToolDetailPage: React.FC = () => {
  const { 
    allTools, 
    selectedToolId, 
    setCurrentRoute, 
    navigateToTool, 
    toggleSaveTool, 
    isToolSaved, 
    toggleCompareTool, 
    isToolInCompare,
    submitReport 
  } = useApp();

  const tool = allTools.find(t => t.id === selectedToolId) || allTools[0];
  const isSaved = isToolSaved(tool.id);
  const isInCompare = isToolInCompare(tool.id);

  // Active step in "How It Works"
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Copy snippet feedback
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  // Dispute / Report Discrepancy Modal
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [reportField, setReportField] = useState<string>('pricingDetails');
  const [reportDesc, setReportDesc] = useState<string>('');
  const [reportUrl, setReportUrl] = useState<string>('');
  const [reportSubmitted, setReportSubmitted] = useState<boolean>(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(text);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportDesc.trim()) return;
    submitReport({
      toolId: tool.id,
      toolName: tool.name,
      field: reportField,
      issueDescription: reportDesc,
      sourceUrl: reportUrl
    });
    setReportSubmitted(true);
    setTimeout(() => {
      setReportSubmitted(false);
      setIsReportModalOpen(false);
      setReportDesc('');
      setReportUrl('');
    }, 1800);
  };

  const activeFlowStep = tool.howItWorks.steps[activeStepIndex] || tool.howItWorks.steps[0];

  const relatedTools = allTools.filter(t => tool.relatedToolIds?.includes(t.id));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Back Button & Top Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentRoute('catalog')}
          className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1.5 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Tools</span>
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => toggleCompareTool(tool.id)}
            title={isInCompare ? 'In Comparison' : 'Add to Compare'}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer flex items-center gap-1.5 ${
              isInCompare
                ? 'bg-blue-50 text-blue-600 border-blue-300 dark:bg-blue-950/40 dark:border-blue-700'
                : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Scale className="w-3.5 h-3.5 text-purple-500" />
            <span className="hidden sm:inline">{isInCompare ? 'In Comparison' : 'Compare'}</span>
          </button>

          <button
            onClick={() => toggleSaveTool(tool.id)}
            title={isSaved ? 'Saved to Bookmarks' : 'Save Tool'}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer flex items-center gap-1.5 ${
              isSaved
                ? 'bg-emerald-50 text-emerald-600 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-700'
                : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-emerald-600 text-emerald-500' : 'text-teal-500'}`} />
            <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
          </button>

          <button
            onClick={() => setIsReportModalOpen(true)}
            title="Report Incorrect Information"
            className="p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Flag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. HERO PACKAGE BANNER */}
      {/* ======================================================== */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div 
              className="w-16 h-16 rounded-3xl flex items-center justify-center font-black text-2xl shadow-md shrink-0"
              style={{ backgroundColor: `${tool.color}15`, color: tool.color }}
            >
              {tool.name.charAt(0)}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {tool.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                  {tool.skillLevel}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300">
                  {tool.pricingType}
                </span>
                {tool.status !== 'Active' && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                    {tool.status}
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {tool.name}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch sm:self-auto">
            {tool.resources.website && (
              <a
                href={tool.resources.website}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <span>Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {tool.resources.docs && (
              <a
                href={tool.resources.docs}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                <span>Docs</span>
              </a>
            )}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
          {tool.tagline}
        </p>

        {/* Verification Status & Date */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Officially Verified Google Product</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>Last Verified: {tool.lastVerified}</span>
          </div>
          <a
            href={tool.verifiedSource}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 hover:underline flex items-center gap-1"
          >
            Source Authority <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. OVERVIEW & PROBLEM SOLVED */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Plain English Overview */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Overview (Plain English)</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            What is {tool.name}?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {tool.overview}
          </p>
        </div>

        {/* Practical Problem Solved */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Problem Solved</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Why does it exist?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {tool.problemSolved}
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. INTERACTIVE "HOW IT WORKS" FLOW */}
      {/* ======================================================== */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1 flex items-center gap-1.5">
            <Workflow className="w-3.5 h-3.5" />
            <span>Interactive Visual Architecture</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            {tool.howItWorks.title}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {tool.howItWorks.summary} Click any stage below to inspect the transformation:
          </p>
        </div>

        {/* Step Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {tool.howItWorks.steps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/40 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                    isActive ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />}
                </div>
                <div className="font-bold text-xs text-slate-900 dark:text-white line-clamp-1">{step.label}</div>
                <div className="text-[10px] text-slate-500 line-clamp-1">{step.sublabel}</div>
              </button>
            );
          })}
        </div>

        {/* Step Deep Dive */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">
              Stage {activeStepIndex + 1}: {activeFlowStep.label}
            </span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-500">{activeFlowStep.sublabel}</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            {activeFlowStep.description}
          </p>

          {activeFlowStep.technicalDetails && (
            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-indigo-600 dark:text-indigo-300">
              {activeFlowStep.technicalDetails}
            </div>
          )}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. LIVE INTERACTIVE DEMO (IF AVAILABLE) */}
      {/* ======================================================== */}
      {tool.demoType !== 'none' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Try Interactive Sandbox
            </h3>
          </div>
          {tool.demoType === 'gemini-sandbox' && <GeminiDemo />}
          {tool.demoType === 'bigquery-sql' && <BigQueryDemo />}
          {tool.demoType === 'firebase-arch' && <FirebaseDemo />}
          {tool.demoType === 'cloud-deploy' && <CloudDeployDemo />}
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. WHAT CAN YOU BUILD? */}
      {/* ======================================================== */}
      <div className="space-y-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
            Real World Applications
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            What You Can Build with {tool.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {tool.whatYouCanBuild.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2 hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-xs">
                {idx + 1}
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 6. WHO SHOULD USE IT? (PERSONAS) */}
      {/* ======================================================== */}
      <div className="space-y-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            Ideal Roles & Personas
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Who Should Use It?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {tool.personas.map((persona, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl p-2 rounded-2xl bg-slate-100 dark:bg-slate-800">
                  {persona.avatar}
                </span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{persona.name}</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{persona.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                "{persona.reason}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 7. GETTING STARTED (6-STEP GUIDE) */}
      {/* ======================================================== */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            Beginner Onboarding
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Getting Started: Step-by-Step Guide
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Follow these six chronological steps to take your first project from concept to execution.
          </p>
        </div>

        <div className="space-y-4">
          {tool.gettingStarted.map((step) => (
            <div 
              key={step.step}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                {step.step}
              </div>
              <div className="flex-1 min-w-0 space-y-1.5">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
                {step.actionSnippet && (
                  <div className="relative group/copy mt-2">
                    <pre className="p-3 pr-12 rounded-xl bg-slate-900 text-blue-300 font-mono text-xs overflow-x-auto touch-scroll">
                      {step.actionSnippet}
                    </pre>
                    <button
                      onClick={() => handleCopy(step.actionSnippet!)}
                      className="absolute right-2 top-2 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                      title="Copy code snippet"
                    >
                      {copiedSnippet === step.actionSnippet ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 8. PRICING, LIMITS & DIFFICULTY */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pricing Details */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Pricing & Access</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {tool.pricingType}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {tool.pricingDetails}
          </p>
        </div>

        {/* Difficulty Gauge */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" />
            <span>Skill Level Required</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {tool.skillLevel}
          </h3>
          <div className="space-y-2">
            <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex">
              <div 
                className={`h-full transition-all ${
                  tool.skillLevel === 'Beginner' ? 'w-1/3 bg-emerald-500' :
                  tool.skillLevel === 'Intermediate' ? 'w-2/3 bg-blue-500' : 'w-full bg-purple-600'
                }`}
              />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Advanced</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 9. RELATED GOOGLE TOOLS */}
      {/* ======================================================== */}
      {relatedTools.length > 0 && (
        <div className="space-y-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              Synergistic Technologies
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Related Google Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedTools.map(rel => (
              <div
                key={rel.id}
                onClick={() => navigateToTool(rel.id)}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all cursor-pointer flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">{rel.name}</h4>
                  <p className="text-[10px] text-slate-400 line-clamp-1">{rel.category.split('&')[0]}</p>
                </div>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-bold">→</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 10. OFFICIAL RESOURCES */}
      {/* ======================================================== */}
      <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
          Official Google Links & Documentation
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {tool.resources.website && (
            <a
              href={tool.resources.website}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span>Official Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {tool.resources.docs && (
            <a
              href={tool.resources.docs}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
              <span>Documentation</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {tool.resources.tutorials && (
            <a
              href={tool.resources.tutorials}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Official Tutorials</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {tool.resources.github && (
            <a
              href={tool.resources.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Code className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODAL: REPORT DISCREPANCY */}
      {/* ======================================================== */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Flag className="w-4 h-4 text-amber-500" />
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Report Information Discrepancy
                </h3>
              </div>
              <button
                onClick={() => setIsReportModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {reportSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Report Submitted</h4>
                <p className="text-xs text-slate-500">
                  Thank you! Our verification team has queued this item for re-audit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300 mb-1 block">
                    Product
                  </label>
                  <input
                    type="text"
                    disabled
                    value={tool.name}
                    className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-600 dark:text-slate-300"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300 mb-1 block">
                    Field in question
                  </label>
                  <select
                    value={reportField}
                    onChange={(e) => setReportField(e.target.value)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                  >
                    <option value="pricingDetails">Pricing or Free Tier Limit</option>
                    <option value="status">Product Status (Deprecated/Active)</option>
                    <option value="official_url">Broken Official Link</option>
                    <option value="features">Capabilities or Features</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300 mb-1 block">
                    Discrepancy Details
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={reportDesc}
                    onChange={(e) => setReportDesc(e.target.value)}
                    placeholder="Describe what information needs updating..."
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300 mb-1 block">
                    Official Reference Link (Optional)
                  </label>
                  <input
                    type="url"
                    value={reportUrl}
                    onChange={(e) => setReportUrl(e.target.value)}
                    placeholder="https://cloud.google.com/..."
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsReportModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold cursor-pointer hover:bg-blue-500 transition-colors"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
