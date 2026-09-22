import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EcosystemConstellation } from '../components/EcosystemConstellation';
import { ToolCard } from '../components/ToolCard';
import { GeminiDemo } from '../components/InteractiveDemos';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { LAST_SYNCED_TIMESTAMP } from '../data/liveUpdates';
import { LiveEcosystemRadar } from '../components/LiveEcosystemRadar';
import { 
  Compass, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Code, 
  Cpu, 
  Cloud, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Lightbulb, 
  GraduationCap,
  Play
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    allTools, 
    setCurrentRoute, 
    setSelectedCategory, 
    setSearchQuery, 
    navigateToTool 
  } = useApp();

  const [isRadarOpen, setIsRadarOpen] = useState(false);

  const formatSyncTime = (iso: string) => {
    try {
      const d = new Date(iso);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' today';
    } catch {
      return 'Active';
    }
  };

  const trendingTools = allTools.filter(t => t.isTrending).slice(0, 4);
  const beginnerTools = allTools.filter(t => t.skillLevel === 'Beginner').slice(0, 4);

  const goalCards = [
    {
      goal: 'Build an App',
      icon: Code,
      color: '#EA4335',
      desc: 'Create native multi-platform iOS, Android, and web apps.',
      tools: ['Flutter', 'Android Studio', 'Firebase'],
      action: () => { setSelectedCategory('software-dev'); setCurrentRoute('catalog'); }
    },
    {
      goal: 'Integrate GenAI',
      icon: Cpu,
      color: '#4285F4',
      desc: 'Build with Gemini 1.5, Google AI Studio, and Gemma models.',
      tools: ['Gemini', 'Google AI Studio', 'Gemini API'],
      action: () => { setSelectedCategory('ai-ml'); setCurrentRoute('catalog'); }
    },
    {
      goal: 'Deploy to Cloud',
      icon: Cloud,
      color: '#34A853',
      desc: 'Serverless containers, object storage, and global infrastructure.',
      tools: ['Cloud Run', 'Google Cloud', 'Cloud Storage'],
      action: () => { setSelectedCategory('cloud-platforms'); setCurrentRoute('catalog'); }
    },
    {
      goal: 'Analyse Big Data',
      icon: BarChart3,
      color: '#FBBC05',
      desc: 'Petabyte data warehousing and executive BI dashboards.',
      tools: ['BigQuery', 'Looker Studio', 'Google Sheets'],
      action: () => { setSelectedCategory('data-analytics'); setCurrentRoute('catalog'); }
    }
  ];

  const buildTodayProjects = [
    {
      title: 'Build a Smart AI Chatbot',
      difficulty: 'Beginner',
      duration: '30 mins',
      toolId: 'google-ai-studio',
      desc: 'Define custom system instructions in Google AI Studio and export ready-to-use TypeScript code for a full-stack chatbot.',
      tags: ['Generative AI', 'Zero Setup', 'Fast Prototyping']
    },
    {
      title: 'Deploy an API on Cloud Run',
      difficulty: 'Intermediate',
      duration: '15 mins',
      toolId: 'cloud-run',
      desc: 'Package any Node.js, Python, or Go microservice into a container and scale to zero with a custom HTTPS URL.',
      tags: ['Serverless', 'Containers', 'Free Tier']
    },
    {
      title: 'Analyze 50M Rows in BigQuery',
      difficulty: 'Beginner',
      duration: '20 mins',
      toolId: 'bigquery',
      desc: 'Query public Wikipedia and NOAA climate datasets with standard SQL and visualize in Looker Studio in 1 click.',
      tags: ['SQL', 'Data Science', 'Zero Ops']
    },
    {
      title: 'Audio Podcast from Your Notes',
      difficulty: 'Beginner',
      duration: '10 mins',
      toolId: 'notebooklm',
      desc: 'Upload PDFs and lecture notes to generate a source-grounded 2-host conversational AI podcast study guide.',
      tags: ['Research', 'Grounded AI', 'Audio Overviews']
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative pt-8 pb-4 text-center max-w-4xl mx-auto px-4">
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span>The Definitive Interactive Directory for Google Technologies</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
          Discover the Google Tools <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent">
            Behind the Future
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Explore Google’s AI, cloud, developer, productivity, research, and creative technologies through simple explanations, interactive demonstrations, and practical learning paths.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={() => setCurrentRoute('catalog')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all cursor-pointer group"
          >
            <Compass className="w-4 h-4" />
            <span>Explore All Tools</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setCurrentRoute('wizard')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Find the Right Tool</span>
          </button>
        </div>

        {/* Dynamic Site Telemetry Dashboard */}
        <div className="mt-10 max-w-3xl mx-auto pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            
            {/* 1. Dynamic Verified Products */}
            <button
              onClick={() => setCurrentRoute('catalog')}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 hover:bg-blue-50/60 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all text-left cursor-pointer group shadow-sm"
              title="Explore all verified Google products"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {allTools.length}
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  Live
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">Verified Products</div>
              <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                {allTools.filter(t => t.skillLevel === 'Beginner').length} beginner • {allTools.filter(t => t.pricingType.includes('Free')).length} free
              </div>
            </button>

            {/* 2. Dynamic Categories */}
            <button
              onClick={() => setCurrentRoute('categories')}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 hover:bg-blue-50/60 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all text-left cursor-pointer group shadow-sm"
              title="Browse tools by category"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">
                  {CATEGORIES_DATA.length}
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  Pillars
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">Core Categories</div>
              <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                AI, Cloud, Dev, Data & more
              </div>
            </button>

            {/* 3. Dynamic Interactive Simulators & Flows */}
            <button
              onClick={() => setCurrentRoute('how-it-works')}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 hover:bg-blue-50/60 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all text-left cursor-pointer group shadow-sm"
              title="Inspect interactive simulators and architectural flows"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-amber-500 dark:text-amber-400">
                  {allTools.filter(t => t.howItWorks).length}
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300">
                  4 Demos
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">Interactive Flows</div>
              <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                Clickable system architectures
              </div>
            </button>

            {/* 4. Dynamic Live Sync Telemetry */}
            <button
              onClick={() => setIsRadarOpen(true)}
              className="p-3.5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-950/20 hover:bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all text-left cursor-pointer group shadow-sm"
              title="Open Google Living Ecosystem Radar"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs sm:text-sm font-black text-emerald-600 dark:text-emerald-400">
                    Live Synced
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  6h Cron
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Official Radar</div>
              <div className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80 mt-0.5 font-mono truncate">
                Updated {formatSyncTime(LAST_SYNCED_TIMESTAMP)}
              </div>
            </button>
          </div>

          {/* Dynamic Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs pt-1">
            <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mr-1">Quick Filters:</span>
            <button
              onClick={() => { setSelectedCategory('ai-ml'); setCurrentRoute('catalog'); }}
              className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 hover:text-blue-600 text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>🤖 AI & ML</span>
              <span className="font-bold text-slate-400 dark:text-slate-500">
                ({allTools.filter(t => t.category.includes('Artificial Intelligence')).length})
              </span>
            </button>
            <button
              onClick={() => { setSelectedCategory('cloud-platforms'); setCurrentRoute('catalog'); }}
              className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 hover:text-blue-600 text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>☁️ Cloud & Compute</span>
              <span className="font-bold text-slate-400 dark:text-slate-500">
                ({allTools.filter(t => t.category.includes('Cloud')).length})
              </span>
            </button>
            <button
              onClick={() => { setSelectedCategory('software-dev'); setCurrentRoute('catalog'); }}
              className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 hover:text-blue-600 text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>💻 Software & Dev</span>
              <span className="font-bold text-slate-400 dark:text-slate-500">
                ({allTools.filter(t => t.category.includes('Software')).length})
              </span>
            </button>
            <button
              onClick={() => { setSelectedCategory('data-analytics'); setCurrentRoute('catalog'); }}
              className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 hover:text-blue-600 text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>🗄️ Data & Storage</span>
              <span className="font-bold text-slate-400 dark:text-slate-500">
                ({allTools.filter(t => t.category.includes('Data')).length})
              </span>
            </button>
            <button
              onClick={() => { setCurrentRoute('catalog'); }}
              className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 hover:text-blue-600 text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>✨ Free Tier</span>
              <span className="font-bold text-slate-400 dark:text-slate-500">
                ({allTools.filter(t => t.pricingType.includes('Free')).length})
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. INTERACTIVE CONSTELLATION ECOSYSTEM GRAPH */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EcosystemConstellation />
      </section>

      {/* ======================================================== */}
      {/* 3. EXPLORE BY GOAL */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 mb-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              Start with your objective
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Explore by Goal
            </h2>
          </div>
          <button
            onClick={() => setCurrentRoute('catalog')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Browse Full Tool Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {goalCards.map((g, idx) => {
            const Icon = g.icon;
            return (
              <div
                key={idx}
                onClick={g.action}
                className="group p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${g.color}15`, color: g.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {g.goal}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {g.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Key Google Tools</div>
                  <div className="flex flex-wrap gap-1">
                    {g.tools.map((t, i) => (
                      <span key={i} className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. TRENDING TOOLS */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 mb-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Highest developer adoption</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Trending Google Technologies
            </h2>
          </div>
          <button
            onClick={() => setCurrentRoute('catalog')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>View all ({allTools.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trendingTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. LIVE INTERACTIVE SANDBOX SPOTLIGHT */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
            Zero setup in-browser testing
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Interactive AI Sandbox
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Experience how Google’s Gemini foundation models parse prompts, maintain context, and execute multimodal reasoning.
          </p>
        </div>

        <GeminiDemo />
      </section>

      {/* ======================================================== */}
      {/* 6. BUILD SOMETHING TODAY */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 mb-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Actionable Quickstarts</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Build Something Today
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Select a practical project idea with step-by-step guides and recommended Google packages.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {buildTodayProjects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => navigateToTool(proj.toolId)}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                      {proj.difficulty}
                    </span>
                    <span className="text-[10px] text-slate-500">Est. {proj.duration}</span>
                  </div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                    Start Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {proj.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. BEGINNER FRIENDLY PICKS */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 mb-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              Gentle learning curve
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Beginner Friendly Tools
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Zero coding or minimal setup needed to achieve immediate results.
            </p>
          </div>
          <button
            onClick={() => setCurrentRoute('learning-paths')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Explore Guided Learning Paths</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {beginnerTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. LEARNING PATH BANNER */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold backdrop-blur-sm">
              <GraduationCap className="w-4 h-4" />
              <span>Structured Skill Paths</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Master the Google Tech Stack?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Follow step-by-step curricula in Generative AI, Mobile Development, Cloud Infrastructure, and Data Warehousing with completion badges.
            </p>
          </div>

          <button
            onClick={() => setCurrentRoute('learning-paths')}
            className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-lg shrink-0 flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
          >
            <span>View All Learning Paths</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Live Ecosystem Radar Modal */}
      <LiveEcosystemRadar
        isOpen={isRadarOpen}
        onClose={() => setIsRadarOpen(false)}
        onNavigateToTool={navigateToTool}
      />

    </div>
  );
};
