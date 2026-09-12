import React from 'react';
import { LEARNING_PATHS_DATA } from '../data/learningPathsData';
import { useApp } from '../context/AppContext';
import { 
  GraduationCap, 
  Clock, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';

export const LearningPathsPage: React.FC = () => {
  const { navigateToPath, completedSteps } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1 flex items-center gap-1.5">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Curated Step-by-Step Journeys</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Guided Learning Paths
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
          Move sequentially from foundational concepts to production deployments. Complete hands-on mini projects with official Google technologies and earn verifiable badges.
        </p>
      </div>

      {/* Grid of Learning Paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LEARNING_PATHS_DATA.map((path) => {
          const finishedSteps = completedSteps[path.id] || [];
          const progressPercent = Math.round((finishedSteps.length / path.steps.length) * 100);
          const isFinished = finishedSteps.length === path.steps.length;

          return (
            <div
              key={path.id}
              onClick={() => navigateToPath(path.id)}
              className="group bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {path.category.split('&')[0]}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300">
                      {path.skillLevel}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>~{path.estimatedHours} hrs</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {path.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {path.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-[11px] font-semibold">
                    <span className="text-slate-500">Progress</span>
                    <span className={isFinished ? 'text-emerald-500 font-bold' : 'text-slate-700 dark:text-slate-300'}>
                      {finishedSteps.length} of {path.steps.length} Steps ({progressPercent}%)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        isFinished ? 'bg-emerald-500' : 'bg-blue-600'
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Badge preview */}
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Earnable Badge</div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">{path.badgeName}</div>
                    </div>
                  </div>
                  {isFinished && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Earned
                    </span>
                  )}
                </div>
              </div>

              {/* Start CTA */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500">{path.steps.length} guided modules</span>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>{progressPercent > 0 ? 'Continue Path' : 'Start Path'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
