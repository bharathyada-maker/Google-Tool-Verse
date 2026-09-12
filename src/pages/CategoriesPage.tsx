import React from 'react';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { useApp } from '../context/AppContext';
import { 
  Cpu, 
  Cloud, 
  Code2, 
  BarChart3, 
  Briefcase, 
  Globe, 
  Sparkles, 
  ArrowRight,
  Layers
} from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  const { allTools, setSelectedCategory, setCurrentRoute, navigateToTool } = useApp();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Cloud': return <Cloud className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentRoute('catalog');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" />
          <span>Technology Domains</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Explore by Category
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
          Google’s software and cloud technologies span seven primary disciplines. Click on any domain to inspect its toolchain and architectural synergies.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES_DATA.map(category => {
          const categoryTools = allTools.filter(t => 
            t.category.toLowerCase().includes(category.name.toLowerCase().split(' ')[0])
          );

          return (
            <div
              key={category.id}
              className="group bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${category.color}15`, color: category.color }}
                  >
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {categoryTools.length} Tools
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Featured Products */}
                <div className="space-y-2 mb-6">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {categoryTools.slice(0, 5).map(tool => (
                      <button
                        key={tool.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateToTool(tool.id);
                        }}
                        className="text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-xl transition-colors cursor-pointer"
                      >
                        {tool.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <button
                onClick={() => handleCategorySelect(category.id)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-200 hover:text-white dark:hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Browse All {category.name.split('&')[0]} Tools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
