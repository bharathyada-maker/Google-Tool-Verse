import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Scale, 
  X, 
  Plus, 
  ExternalLink, 
  Check, 
  ArrowRight, 
  Sparkles,
  Info
} from 'lucide-react';

export const ComparePage: React.FC = () => {
  const { 
    allTools, 
    compareToolIds, 
    toggleCompareTool, 
    removeCompareTool, 
    clearCompareTools,
    navigateToTool 
  } = useApp();

  const [toolPickerOpen, setToolPickerOpen] = useState<boolean>(false);
  const toolPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolPickerRef.current && !toolPickerRef.current.contains(event.target as Node)) {
        setToolPickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedTools = allTools.filter(t => compareToolIds.includes(t.id));

  const presetComparisons = [
    {
      title: 'Google AI Studio vs Vertex AI',
      desc: 'Rapid GenAI prototyping vs Enterprise secure MLOps',
      toolIds: ['google-ai-studio', 'vertex-ai']
    },
    {
      title: 'Firebase vs Google Cloud',
      desc: 'App developer platform vs Core enterprise cloud infra',
      toolIds: ['firebase', 'google-cloud']
    },
    {
      title: 'BigQuery vs Looker Studio',
      desc: 'Petabyte data warehouse vs Visual business intelligence',
      toolIds: ['bigquery', 'looker-studio']
    },
    {
      title: 'Flutter vs Android Studio',
      desc: 'Multi-platform UI framework vs Native Android IDE',
      toolIds: ['flutter', 'android-studio']
    }
  ];

  const applyPreset = (ids: string[]) => {
    clearCompareTools();
    ids.forEach(id => toggleCompareTool(id));
  };

  // Static/factual comparison rows
  const getFactualComparisonData = (toolId: string) => {
    switch (toolId) {
      case 'google-ai-studio':
        return {
          apiAvailability: 'Yes (REST, Python, Node.js, Swift, Kotlin)',
          deploymentOptions: 'Web browser prototype & API key export',
          learningCurve: 'Gentle (10-15 minutes)',
          integrationEcosystem: 'Gemini models, Google Cloud project billing',
          docQuality: 'Excellent (interactive quickstarts & recipes)',
          recUseCase: 'Fast prototyping, system prompt testing, structured JSON'
        };
      case 'vertex-ai':
        return {
          apiAvailability: 'Yes (Enterprise SDKs, Private VPC Endpoints)',
          deploymentOptions: 'Managed GKE/Compute autoscaling endpoints',
          learningCurve: 'Steep (Enterprise MLOps knowledge needed)',
          integrationEcosystem: 'BigQuery, Cloud Storage, Model Garden, IAM',
          docQuality: 'Extensive (detailed enterprise compliance & MLOps)',
          recUseCase: 'Enterprise governance, LoRA tuning, large-scale RAG'
        };
      case 'firebase':
        return {
          apiAvailability: 'Yes (Web, iOS, Android, Unity, Flutter SDKs)',
          deploymentOptions: 'Managed serverless hosting & Cloud Functions',
          learningCurve: 'Low to Medium (rapid mobile/web onboarding)',
          integrationEcosystem: 'Google Cloud, Google Sign-In, Stripe, Flutter',
          docQuality: 'Top-tier (comprehensive tutorials & sample code)',
          recUseCase: 'Full-stack mobile MVPs, real-time apps, user auth'
        };
      case 'google-cloud':
        return {
          apiAvailability: 'Yes (gcloud CLI, Terraform, REST, client libs)',
          deploymentOptions: 'VMs, Kubernetes, Containers, Serverless',
          learningCurve: 'Medium to High (Cloud networking & IAM)',
          integrationEcosystem: 'Global Google infrastructure & fiber network',
          docQuality: 'Comprehensive (thousands of reference docs)',
          recUseCase: 'Enterprise migration, scalable microservices, global network'
        };
      case 'bigquery':
        return {
          apiAvailability: 'Yes (SQL, Storage Read API, Python, JDBC/ODBC)',
          deploymentOptions: 'Fully serverless (zero cluster provisioning)',
          learningCurve: 'Low (if familiar with standard ANSI SQL)',
          integrationEcosystem: 'Looker Studio, Sheets, Pub/Sub, Vertex AI',
          docQuality: 'Industry benchmark for data warehouse documentation',
          recUseCase: 'Ad-hoc petabyte SQL queries, BI mart aggregation'
        };
      case 'looker-studio':
        return {
          apiAvailability: 'Community connectors API',
          deploymentOptions: 'Zero-install browser SaaS',
          learningCurve: 'Very Gentle (drag-and-drop report builder)',
          integrationEcosystem: 'BigQuery, Google Sheets, GA4, 800+ connectors',
          docQuality: 'User-friendly help center articles and videos',
          recUseCase: 'Executive dashboards, client weekly marketing reports'
        };
      case 'flutter':
        return {
          apiAvailability: 'Dart packages & platform channel interop',
          deploymentOptions: 'Natively compiled iOS, Android, Web, Desktop',
          learningCurve: 'Moderate (declarative widget state model)',
          integrationEcosystem: 'pub.dev ecosystem, Firebase, Material 3',
          docQuality: 'Outstanding (official Flutter documentation & codelabs)',
          recUseCase: 'Cross-platform native mobile apps from 1 codebase'
        };
      case 'android-studio':
        return {
          apiAvailability: 'Android SDK, Jetpack Compose, Gradle plugins',
          deploymentOptions: 'Native APK, Android App Bundle (AAB)',
          learningCurve: 'Moderate to Advanced (Android lifecycle & Gradle)',
          integrationEcosystem: 'Google Play Console, Jetpack, Firebase',
          docQuality: 'Extensive (official developer.android.com guides)',
          recUseCase: 'Deep native Android apps, hardware sensor integration'
        };
      default:
        return {
          apiAvailability: 'Official SDKs & HTTP endpoints',
          deploymentOptions: 'Google Cloud managed infrastructure',
          learningCurve: 'Moderate',
          integrationEcosystem: 'Google Cloud & Workspace ecosystem',
          docQuality: 'Comprehensive Google Developer Docs',
          recUseCase: 'Standard recommended product workflows'
        };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1 flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5" />
            <span>Factual Side-by-Side Evaluation</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Compare Google Tools
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Compare up to 4 Google technologies simultaneously across architecture, pricing, skill level, deployment, and synergies.
          </p>
        </div>

        {selectedTools.length > 0 && (
          <button
            onClick={clearCompareTools}
            className="text-xs text-red-600 dark:text-red-400 hover:underline font-semibold self-start md:self-auto cursor-pointer"
          >
            Clear All Selections
          </button>
        )}
      </div>

      {/* Preset Comparisons */}
      <div className="space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Popular Comparison Matchups
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {presetComparisons.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => applyPreset(preset.toolIds)}
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-md transition-all cursor-pointer group"
            >
              <h4 className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
                {preset.title}
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-1">{preset.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Add Tool Selector Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
          Comparing ({selectedTools.length}/4):
        </span>
        {selectedTools.map(t => (
          <span
            key={t.id}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-semibold"
          >
            <span>{t.name}</span>
            <button onClick={() => removeCompareTool(t.id)} className="hover:text-red-500 cursor-pointer">
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}

        {selectedTools.length < 4 && (
          <div ref={toolPickerRef} className="relative">
            <button
              onClick={() => setToolPickerOpen(!toolPickerOpen)}
              className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Tool</span>
            </button>

            {toolPickerOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-50">
                {allTools.filter(t => !compareToolIds.includes(t.id)).map(t => (
                  <button
                    key={t.id}
                    onClick={() => { toggleCompareTool(t.id); setToolPickerOpen(false); }}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer truncate"
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Comparison Table */}
      {selectedTools.length === 0 ? (
        <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <Scale className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            No tools selected for comparison
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Choose from the popular matchups above or click "Add Tool" to evaluate specs side-by-side.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
                <th className="p-4 w-48 text-slate-400 font-bold uppercase text-[11px] tracking-wider">
                  Product Details
                </th>
                {selectedTools.map(tool => (
                  <th key={tool.id} className="p-4 min-w-[240px] align-top">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="font-black text-sm text-slate-900 dark:text-white">
                        {tool.name}
                      </div>
                      <button
                        onClick={() => removeCompareTool(tool.id)}
                        className="text-slate-400 hover:text-red-500 p-0.5 cursor-pointer"
                        title="Remove from comparison"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <button
                      onClick={() => navigateToTool(tool.id)}
                      className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Package</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {/* Category */}
              <tr>
                <td className="p-4 font-bold text-slate-400 text-[11px] uppercase tracking-wider bg-slate-50/40 dark:bg-slate-950/30">
                  Category
                </td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="p-4 font-semibold text-slate-900 dark:text-white">
                    {tool.category}
                  </td>
                ))}
              </tr>

              {/* Purpose / Core Vision */}
              <tr>
                <td className="p-4 font-bold text-slate-400 text-[11px] uppercase tracking-wider bg-slate-50/40 dark:bg-slate-950/30">
                  Core Purpose
                </td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="p-4 leading-relaxed text-xs">
                    {tool.tagline}
                  </td>
                ))}
              </tr>

              {/* Skill Level */}
              <tr>
                <td className="p-4 font-bold text-slate-400 text-[11px] uppercase tracking-wider bg-slate-50/40 dark:bg-slate-950/30">
                  Skill Level
                </td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="p-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      {tool.skillLevel}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Pricing & Free Tier */}
              <tr>
                <td className="p-4 font-bold text-slate-400 text-[11px] uppercase tracking-wider bg-slate-50/40 dark:bg-slate-950/30">
                  Free Availability
                </td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="p-4 space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white">{tool.pricingType}</div>
                    <div className="text-[11px] text-slate-500 leading-tight">{tool.pricingDetails}</div>
                  </td>
                ))}
              </tr>

              {/* API Availability */}
              <tr>
                <td className="p-4 font-bold text-slate-400 text-[11px] uppercase tracking-wider bg-slate-50/40 dark:bg-slate-950/30">
                  API & SDK Access
                </td>
                {selectedTools.map(tool => {
                  const factual = getFactualComparisonData(tool.id);
                  return (
                    <td key={tool.id} className="p-4 text-xs font-mono text-slate-600 dark:text-slate-300">
                      {factual.apiAvailability}
                    </td>
                  );
                })}
              </tr>

              {/* Deployment Options */}
              <tr>
                <td className="p-4 font-bold text-slate-400 text-[11px] uppercase tracking-wider bg-slate-50/40 dark:bg-slate-950/30">
                  Deployment Models
                </td>
                {selectedTools.map(tool => {
                  const factual = getFactualComparisonData(tool.id);
                  return (
                    <td key={tool.id} className="p-4 text-xs">
                      {factual.deploymentOptions}
                    </td>
                  );
                })}
              </tr>

              {/* Learning Curve */}
              <tr>
                <td className="p-4 font-bold text-slate-400 text-[11px] uppercase tracking-wider bg-slate-50/40 dark:bg-slate-950/30">
                  Learning Curve
                </td>
                {selectedTools.map(tool => {
                  const factual = getFactualComparisonData(tool.id);
                  return (
                    <td key={tool.id} className="p-4 text-xs font-medium">
                      {factual.learningCurve}
                    </td>
                  );
                })}
              </tr>

              {/* Integration Ecosystem */}
              <tr>
                <td className="p-4 font-bold text-slate-400 text-[11px] uppercase tracking-wider bg-slate-50/40 dark:bg-slate-950/30">
                  Ecosystem Synergy
                </td>
                {selectedTools.map(tool => {
                  const factual = getFactualComparisonData(tool.id);
                  return (
                    <td key={tool.id} className="p-4 text-xs text-blue-600 dark:text-blue-400">
                      {factual.integrationEcosystem}
                    </td>
                  );
                })}
              </tr>

              {/* Recommended Use Case */}
              <tr>
                <td className="p-4 font-bold text-slate-400 text-[11px] uppercase tracking-wider bg-slate-50/40 dark:bg-slate-950/30">
                  When to Choose
                </td>
                {selectedTools.map(tool => {
                  const factual = getFactualComparisonData(tool.id);
                  return (
                    <td key={tool.id} className="p-4 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {factual.recUseCase}
                    </td>
                  );
                })}
              </tr>

              {/* Official Link */}
              <tr>
                <td className="p-4 font-bold text-slate-400 text-[11px] uppercase tracking-wider bg-slate-50/40 dark:bg-slate-950/30">
                  Official Links
                </td>
                {selectedTools.map(tool => (
                  <td key={tool.id} className="p-4">
                    <a
                      href={tool.resources.website || tool.resources.docs}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <span>Official Documentation</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};
