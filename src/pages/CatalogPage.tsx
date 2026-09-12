import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ToolCard } from '../components/ToolCard';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  X, 
  RotateCcw, 
  Sparkles, 
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';

export const CatalogPage: React.FC = () => {
  const {
    allTools,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedSkillLevel,
    setSelectedSkillLevel,
    selectedPricing,
    setSelectedPricing,
    clearFilters
  } = useApp();

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'recommended' | 'name' | 'skill'>('recommended');
  const [quickFilter, setQuickFilter] = useState<'all' | 'free' | 'beginner' | 'trending'>('all');

  // Filtered tools pipeline
  const filteredTools = useMemo(() => {
    return allTools.filter(tool => {
      // Search query matching
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = tool.name.toLowerCase().includes(q);
        const matchTagline = tool.tagline.toLowerCase().includes(q);
        const matchOverview = tool.overview.toLowerCase().includes(q);
        const matchProblem = tool.problemSolved.toLowerCase().includes(q);
        const matchCapabilities = tool.capabilities.some(c => c.toLowerCase().includes(q));
        const matchBestFor = tool.bestFor.some(b => b.toLowerCase().includes(q));
        const matchCategory = tool.category.toLowerCase().includes(q);

        // Natural language query mapping
        const isChatbotQuery = q.includes('chatbot') && (tool.id === 'gemini' || tool.id === 'google-ai-studio' || tool.id === 'vertex-ai' || tool.id === 'firebase');
        const isDatabaseQuery = q.includes('database') && (tool.id === 'bigquery' || tool.id === 'firebase' || tool.id === 'cloud-storage');
        const isWebsiteQuery = (q.includes('website') || q.includes('web app')) && (tool.id === 'firebase' || tool.id === 'cloud-run' || tool.id === 'angular');
        const isMobileQuery = (q.includes('mobile') || q.includes('android')) && (tool.id === 'flutter' || tool.id === 'android-studio' || tool.id === 'jetpack-compose' || tool.id === 'firebase');
        const isDeployQuery = q.includes('deploy') && (tool.id === 'cloud-run' || tool.id === 'google-cloud' || tool.id === 'kubernetes-engine' || tool.id === 'firebase');
        const isDataQuery = (q.includes('analyse') || q.includes('data') || q.includes('analytics')) && (tool.id === 'bigquery' || tool.id === 'looker-studio' || tool.id === 'google-sheets' || tool.id === 'google-analytics');

        if (!(matchName || matchTagline || matchOverview || matchProblem || matchCapabilities || matchBestFor || matchCategory || isChatbotQuery || isDatabaseQuery || isWebsiteQuery || isMobileQuery || isDeployQuery || isDataQuery)) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory) {
        const catObj = CATEGORIES_DATA.find(c => c.id === selectedCategory || c.slug === selectedCategory);
        if (catObj && !tool.category.toLowerCase().includes(catObj.name.toLowerCase().split(' ')[0])) {
          return false;
        }
      }

      // Skill level filter
      if (selectedSkillLevel && tool.skillLevel !== selectedSkillLevel) {
        return false;
      }

      // Pricing filter
      if (selectedPricing) {
        if (selectedPricing === 'Free' && !tool.pricingType.includes('Free')) return false;
        if (selectedPricing === 'Freemium' && !tool.pricingType.includes('Freemium')) return false;
        if (selectedPricing === 'Pay-as-you-go' && !tool.pricingType.includes('Pay-as-you-go')) return false;
      }

      // Quick filter
      if (quickFilter === 'free' && (!tool.pricingType.includes('Free') && !tool.pricingType.includes('Freemium'))) return false;
      if (quickFilter === 'beginner' && tool.skillLevel !== 'Beginner') return false;
      if (quickFilter === 'trending' && !tool.isTrending) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'skill') {
        const order = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'All Levels': 0 };
        return (order[a.skillLevel] || 0) - (order[b.skillLevel] || 0);
      }
      // default: trending first
      return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
    });
  }, [allTools, searchQuery, selectedCategory, selectedSkillLevel, selectedPricing, quickFilter, sortBy]);

  const hasActiveFilters = searchQuery || selectedCategory || selectedSkillLevel || selectedPricing || quickFilter !== 'all';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Directory ({allTools.length} verified products)</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Explore Google Tools & Technologies
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Search, filter, and inspect verified package cards with how-it-works flows, use cases, and official documentation.
          </p>
        </div>

        {/* View Mode & Sorter */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          {/* Sorter */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-slate-900 dark:text-white font-bold focus:outline-none cursor-pointer"
            >
              <option value="recommended" className="bg-white dark:bg-slate-900">Recommended</option>
              <option value="name" className="bg-white dark:bg-slate-900">Name (A-Z)</option>
              <option value="skill" className="bg-white dark:bg-slate-900">Skill Level</option>
            </select>
          </div>

          {/* Grid / List View Toggle */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-white dark:bg-slate-900 text-blue-600 shadow-sm' : 'text-slate-400'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'list' ? 'bg-white dark:bg-slate-900 text-blue-600 shadow-sm' : 'text-slate-400'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, category, capability, or natural query (e.g. 'I want to build an AI chatbot')..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Multi-facet Filter Pills */}
        <div className="w-full overflow-x-auto touch-scroll no-scrollbar py-1">
          {/* Category Dropdown/Pills */}
          <div className="flex items-center gap-1.5 sm:flex-wrap w-max sm:w-full">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                !selectedCategory
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES_DATA.map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(selectedCategory === c.id ? null : c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {c.name.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Second Row: Skill Level & Pricing Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-semibold text-[11px]">Skill:</span>
            {['Beginner', 'Intermediate', 'Advanced'].map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedSkillLevel(selectedSkillLevel === lvl ? null : lvl)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                  selectedSkillLevel === lvl
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {lvl}
              </button>
            ))}

            <span className="text-slate-400 font-semibold text-[11px] ml-2">Pricing:</span>
            {['Free', 'Freemium', 'Pay-as-you-go'].map(p => (
              <button
                key={p}
                onClick={() => setSelectedPricing(selectedPricing === p ? null : p)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                  selectedPricing === p
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Quick Clear */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2">
        <span>Showing <strong>{filteredTools.length}</strong> matching products</span>
      </div>

      {/* Empty State */}
      {filteredTools.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            No Google tools matched your criteria
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search terms or resetting the category and skill level filters.
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs cursor-pointer shadow-sm"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        /* Tools Grid / List */
        <div className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'
            : 'space-y-3'
        }>
          {filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} viewMode={viewMode} />
          ))}
        </div>
      )}

    </div>
  );
};
