import React from 'react';
import { useApp } from '../context/AppContext';
import { LEARNING_PATHS_DATA } from '../data/learningPathsData';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  Circle, 
  Award, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Code,
  Check
} from 'lucide-react';

export const LearningPathDetailPage: React.FC = () => {
  const { 
    selectedPathId, 
    setCurrentRoute, 
    navigateToTool, 
    allTools, 
    completedSteps, 
    toggleStepComplete,
    isStepCompleted
  } = useApp();

  const path = LEARNING_PATHS_DATA.find(p => p.id === selectedPathId) || LEARNING_PATHS_DATA[0];
  const finishedSteps = completedSteps[path.id] || [];
  const progressPercent = Math.round((finishedSteps.length / path.steps.length) * 100);
  const isFinished = finishedSteps.length === path.steps.length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Back button */}
      <button
        onClick={() => setCurrentRoute('learning-paths')}
        className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1.5 cursor-pointer group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to All Learning Paths</span>
      </button>

      {/* Hero Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {path.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300">
                {path.skillLevel}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {path.title}
            </h1>
            <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold">
              {path.subtitle}
            </p>
          </div>

          {/* Badge Indicator */}
          <div className="p-4 rounded-2xl bg-gradient-to-tr from-amber-500/15 to-orange-500/15 border border-amber-500/30 flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400">Completion Badge</div>
              <div className="font-extrabold text-xs text-slate-900 dark:text-white">{path.badgeName}</div>
              <div className="text-[10px] text-slate-500">{isFinished ? 'Status: Unlocked! 🎉' : 'Status: In Progress'}</div>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {path.description}
        </p>

        {/* Prerequisites */}
        {path.prerequisites?.length > 0 && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1 text-xs">
            <div className="font-bold text-slate-400 uppercase text-[11px] tracking-wider">
              Prerequisites
            </div>
            <ul className="flex flex-wrap gap-2 text-slate-600 dark:text-slate-400">
              {path.prerequisites.map((p, i) => (
                <li key={i} className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                  <Check className="w-3 h-3 text-blue-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Progress Bar */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-600 dark:text-slate-400">Curriculum Progress</span>
            <span className={isFinished ? 'text-emerald-500' : 'text-blue-600'}>
              {finishedSteps.length} of {path.steps.length} Modules Completed ({progressPercent}%)
            </span>
          </div>
          <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${
                isFinished ? 'bg-emerald-500' : 'bg-blue-600'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Steps List */}
      <div className="space-y-4">
        <h2 className="text-xl font-black text-slate-900 dark:text-white">
          Step-by-Step Curriculum
        </h2>

        <div className="space-y-4">
          {path.steps.map((step) => {
            const isCompleted = isStepCompleted(path.id, step.stepNumber);
            const tool = allTools.find(t => t.id === step.toolId);

            return (
              <div
                key={step.stepNumber}
                className={`p-6 rounded-3xl border transition-all ${
                  isCompleted
                    ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-500/40'
                    : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  {/* Left content */}
                  <div className="flex items-start gap-4 flex-1">
                    <button
                      onClick={() => toggleStepComplete(path.id, step.stepNumber)}
                      className="cursor-pointer shrink-0 mt-0.5 text-emerald-500"
                      title={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 fill-emerald-500 text-white" />
                      ) : (
                        <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600 hover:text-blue-500" />
                      )}
                    </button>

                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-slate-400">
                          Step {step.stepNumber}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {step.durationMinutes} mins
                        </span>
                        {tool && (
                          <button
                            onClick={() => navigateToTool(tool.id)}
                            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer ml-auto sm:ml-2"
                          >
                            <span>Explore {tool.name}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>

                      <h3 className={`text-base font-bold ${
                        isCompleted ? 'text-slate-900 dark:text-white line-through opacity-80' : 'text-slate-900 dark:text-white'
                      }`}>
                        {step.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Mini Project Box */}
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-1.5 mt-3">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                          <Code className="w-3.5 h-3.5" />
                          <span>Mini Project: {step.miniProjectTitle}</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {step.miniProjectTask}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Toggle button */}
                  <button
                    onClick={() => toggleStepComplete(path.id, step.stepNumber)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer shrink-0 transition-colors ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {isCompleted ? 'Completed ✓' : 'Mark Done'}
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
