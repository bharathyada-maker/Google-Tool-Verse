import React from 'react';
import { useApp } from '../context/AppContext';
import { ToolCard } from '../components/ToolCard';
import { LEARNING_PATHS_DATA } from '../data/learningPathsData';
import { 
  Bookmark, 
  Clock, 
  Award, 
  ArrowRight, 
  Trash2, 
  GraduationCap, 
  Sparkles,
  Compass
} from 'lucide-react';

export const SavedPage: React.FC = () => {
  const { 
    allTools, 
    savedToolIds, 
    recentlyViewedIds, 
    clearRecentlyViewed, 
    completedSteps, 
    earnedBadges,
    setCurrentRoute,
    navigateToPath
  } = useApp();

  const savedTools = allTools.filter(t => savedToolIds.includes(t.id));
  const recentTools = allTools.filter(t => recentlyViewedIds.includes(t.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
          <Bookmark className="w-3.5 h-3.5" />
          <span>Personal Dashboard</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Saved Tools & Learning Progress
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
          Everything you bookmark and every learning path step you complete is stored locally in your browser with zero sign-in required.
        </p>
      </div>

      {/* Badges & Learning Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Badges Earned */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold uppercase text-amber-500 tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Earned Badges</span>
            </div>
            <span className="text-xl font-black text-slate-900 dark:text-white">
              {earnedBadges.length}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {earnedBadges.length === 0 ? (
              <p className="text-xs text-slate-400 italic">
                Complete all modules in any learning path to unlock verifiable badges.
              </p>
            ) : (
              earnedBadges.map((badge, idx) => (
                <span key={idx} className="px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-bold">
                  ★ {badge}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Card 2: Active Learning Paths */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3 md:col-span-2">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Active Learning Paths</span>
            </div>
            <button
              onClick={() => setCurrentRoute('learning-paths')}
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {LEARNING_PATHS_DATA.map(path => {
              const finished = completedSteps[path.id] || [];
              const percent = Math.round((finished.length / path.steps.length) * 100);

              return (
                <div
                  key={path.id}
                  onClick={() => navigateToPath(path.id)}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex justify-between items-center text-xs font-bold text-slate-900 dark:text-white mb-1">
                    <span className="truncate">{path.title}</span>
                    <span className="text-slate-400 text-[10px]">{percent}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* 1. BOOKMARKED / SAVED TOOLS */}
      {/* ======================================================== */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-emerald-500 fill-emerald-500" />
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Bookmarked Tools ({savedTools.length})
            </h2>
          </div>
          {savedTools.length === 0 && (
            <button
              onClick={() => setCurrentRoute('catalog')}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              Browse Catalog to Save Tools
            </button>
          )}
        </div>

        {savedTools.length === 0 ? (
          <div className="py-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <Bookmark className="w-8 h-8 text-slate-400 mx-auto" />
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">No saved tools yet</h4>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              Click the bookmark icon on any tool card or package page to save it for quick reference.
            </p>
            <button
              onClick={() => setCurrentRoute('catalog')}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs cursor-pointer shadow-sm"
            >
              Explore Tool Catalog
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {savedTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* 2. RECENTLY VIEWED HISTORY */}
      {/* ======================================================== */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Recently Viewed
            </h2>
          </div>
          {recentTools.length > 0 && (
            <button
              onClick={clearRecentlyViewed}
              className="text-xs text-slate-400 hover:text-red-500 flex items-center gap-1 font-semibold cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          )}
        </div>

        {recentTools.length === 0 ? (
          <p className="text-xs text-slate-500 italic">No recently viewed history.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
