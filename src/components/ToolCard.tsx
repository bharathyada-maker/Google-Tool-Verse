import React from 'react';
import { GoogleTool } from '../types';
import { useApp } from '../context/AppContext';
import { 
  Bookmark, 
  Scale, 
  ExternalLink, 
  ArrowRight, 
  Workflow, 
  Sparkles, 
  Cpu, 
  Cloud, 
  Code2, 
  BarChart3, 
  Briefcase, 
  Globe, 
  HardDrive, 
  Terminal, 
  Smartphone, 
  Server, 
  Flame, 
  Database,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface ToolCardProps {
  tool: GoogleTool;
  viewMode?: 'grid' | 'list';
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, viewMode = 'grid' }) => {
  const { 
    navigateToTool, 
    setCurrentRoute, 
    setSelectedToolId,
    toggleSaveTool, 
    isToolSaved, 
    toggleCompareTool, 
    isToolInCompare 
  } = useApp();

  const isSaved = isToolSaved(tool.id);
  const isInCompare = isToolInCompare(tool.id);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Intelligence') || category.includes('AI')) return <Cpu className="w-4 h-4" />;
    if (category.includes('Cloud')) return <Cloud className="w-4 h-4" />;
    if (category.includes('Software') || category.includes('Frameworks')) return <Code2 className="w-4 h-4" />;
    if (category.includes('Data')) return <BarChart3 className="w-4 h-4" />;
    if (category.includes('Productivity')) return <Briefcase className="w-4 h-4" />;
    if (category.includes('Creative')) return <Sparkles className="w-4 h-4" />;
    return <Globe className="w-4 h-4" />;
  };

  const getSkillBadgeColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50';
      case 'Intermediate':
        return 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50';
      case 'Advanced':
        return 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/50';
      default:
        return 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  const getPricingBadgeColor = (type: string) => {
    if (type.includes('Free') && !type.includes('Freemium')) {
      return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/30';
    }
    if (type.includes('Freemium')) {
      return 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/30';
    }
    return 'text-amber-600 dark:text-amber-400 bg-amber-50/80 dark:bg-amber-950/30';
  };

  const handleHowItWorksClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedToolId(tool.id);
    setCurrentRoute('how-it-works');
  };

  if (viewMode === 'list') {
    return (
      <div 
        onClick={() => navigateToTool(tool.id)}
        className="group relative bg-white dark:bg-slate-900/90 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 cursor-pointer"
      >
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105"
            style={{ backgroundColor: `${tool.color}15`, color: tool.color }}
          >
            {getCategoryIcon(tool.category)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tool.name}
              </h3>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getSkillBadgeColor(tool.skillLevel)}`}>
                {tool.skillLevel}
              </span>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${getPricingBadgeColor(tool.pricingType)}`}>
                {tool.pricingType}
              </span>
              {tool.status !== 'Active' && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                  {tool.status}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-1 mb-2">
              {tool.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-1.5">
              {tool.bestFor.slice(0, 3).map((useCase, idx) => (
                <span key={idx} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md">
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end md:self-center shrink-0" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => toggleSaveTool(tool.id)}
            title={isSaved ? 'Remove from Saved' : 'Save Tool'}
            className={`p-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
              isSaved 
                ? 'bg-emerald-50 text-emerald-600 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-700' 
                : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-emerald-600' : ''}`} />
          </button>

          <button
            onClick={() => toggleCompareTool(tool.id)}
            title={isInCompare ? 'Remove from Comparison' : 'Add to Comparison'}
            className={`p-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
              isInCompare 
                ? 'bg-blue-50 text-blue-600 border-blue-300 dark:bg-blue-950/40 dark:border-blue-700' 
                : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Scale className="w-4 h-4" />
          </button>

          <button
            onClick={handleHowItWorksClick}
            className="px-3 py-2 rounded-xl text-xs font-semibold border border-indigo-200 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Workflow className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">How It Works</span>
          </button>

          <button
            onClick={() => navigateToTool(tool.id)}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  // Grid Package Card View
  return (
    <div 
      onClick={() => navigateToTool(tool.id)}
      className="group relative bg-white dark:bg-[#111726] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform"
              style={{ backgroundColor: `${tool.color}15`, color: tool.color }}
            >
              {getCategoryIcon(tool.category)}
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                {tool.name}
              </h3>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 line-clamp-1">
                {tool.category.split('&')[0]}
              </p>
            </div>
          </div>

          {/* Top Quick Actions */}
          <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => toggleCompareTool(tool.id)}
              title={isInCompare ? 'Remove from comparison' : 'Compare tool'}
              className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                isInCompare 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' 
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => toggleSaveTool(tool.id)}
              title={isSaved ? 'Saved to bookmarks' : 'Save tool'}
              className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                isSaved 
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300' 
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-emerald-600 dark:fill-emerald-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Tagline / One-line Description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-4 leading-relaxed font-normal">
          {tool.tagline}
        </p>

        {/* Skill level & Pricing badges */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getSkillBadgeColor(tool.skillLevel)}`}>
            {tool.skillLevel}
          </span>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${getPricingBadgeColor(tool.pricingType)}`}>
            {tool.pricingType}
          </span>
          {tool.isTrending && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Trending
            </span>
          )}
        </div>

        {/* Best For Tags */}
        <div className="space-y-1.5 mb-5">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Primary Use Cases
          </div>
          <div className="flex flex-wrap gap-1">
            {tool.bestFor.slice(0, 3).map((useCase, idx) => (
              <span 
                key={idx}
                className="text-[10px] bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md font-medium"
              >
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Bottom */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/70 flex items-center justify-between gap-2" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleHowItWorksClick}
          className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-1.5 px-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Workflow className="w-3.5 h-3.5 text-indigo-500" />
          <span>How It Works</span>
        </button>

        <div className="flex items-center gap-1.5">
          {tool.resources?.docs && (
            <a
              href={tool.resources.docs}
              target="_blank"
              rel="noreferrer"
              title="Official Documentation"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            onClick={() => navigateToTool(tool.id)}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white dark:group-hover:text-white transition-all flex items-center gap-1 cursor-pointer shadow-sm"
          >
            <span>Explore</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
