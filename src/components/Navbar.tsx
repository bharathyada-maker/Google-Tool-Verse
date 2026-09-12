import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Bookmark, 
  Scale, 
  Compass, 
  Sparkles, 
  Layers, 
  GraduationCap, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ShieldCheck, 
  Info,
  Workflow
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentRoute,
    setCurrentRoute,
    searchQuery,
    setSearchQuery,
    savedToolIds,
    compareToolIds,
    isDarkMode,
    toggleDarkMode,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const sampleSearchPrompts = [
    'I want to build an AI chatbot',
    'I need a database',
    'I want to create a website',
    'I want to analyse data',
    'I want to build a mobile app',
    'I want to deploy an application'
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentRoute('catalog');
      setSearchFocused(false);
    }
  };

  const selectPrompt = (prompt: string) => {
    setSearchQuery(prompt);
    setCurrentRoute('catalog');
    setSearchFocused(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0f1422]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3 sm:gap-6">
          
          {/* Brand Logo */}
          <button 
            onClick={() => setCurrentRoute('home')}
            className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none shrink-0"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 p-0.5 shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white dark:bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                <div className="flex items-center justify-center font-black text-lg">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">T</span>
                  <span className="text-[#FBBC05]">V</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">Google</span>
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">Toolverse</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 -mt-1 font-medium hidden sm:block">
                Interactive Google Product Discovery
              </p>
            </div>
          </button>

          {/* Search Bar - Center Desktop */}
          <div className="flex-1 max-w-xl relative hidden md:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  placeholder="What do you want to build, learn, automate, or explore?"
                  className="w-full pl-10 pr-10 py-2 text-xs lg:text-sm rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-slate-900 dark:text-white placeholder-slate-400 transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>

            {/* Smart Search Dropdown Suggestions */}
            {searchFocused && (
              <div 
                className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseDown={(e) => e.preventDefault()} // prevent blur before click
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                    Popular Natural Language Queries
                  </span>
                  <button onClick={() => setSearchFocused(false)} className="text-slate-400 hover:text-slate-600 text-[11px]">
                    Close
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {sampleSearchPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectPrompt(prompt)}
                      className="text-left px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 group-hover:scale-125 transition-transform" />
                      <span className="truncate">{prompt}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => setCurrentRoute('catalog')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                currentRoute === 'catalog' 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              Explore Tools
            </button>

            <button
              onClick={() => setCurrentRoute('categories')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                currentRoute === 'categories' 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Categories
            </button>

            <button
              onClick={() => setCurrentRoute('how-it-works')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                currentRoute === 'how-it-works' 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Workflow className="w-3.5 h-3.5 text-indigo-500" />
              How It Works
            </button>

            <button
              onClick={() => setCurrentRoute('learning-paths')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                currentRoute === 'learning-paths' 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Learning Paths
            </button>

            <button
              onClick={() => setCurrentRoute('wizard')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                currentRoute === 'wizard' 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              AI Assistant
            </button>

            <button
              onClick={() => setCurrentRoute('compare')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer relative ${
                currentRoute === 'compare' 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              Compare
              {compareToolIds.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {compareToolIds.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setCurrentRoute('saved')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer relative ${
                currentRoute === 'saved' 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              Saved
              {savedToolIds.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {savedToolIds.length}
                </span>
              )}
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5">
            {/* Admin Portal */}
            <button
              onClick={() => setCurrentRoute('admin')}
              title="Admin & Verification Console"
              className={`p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
                currentRoute === 'admin' ? 'bg-slate-200 dark:bg-slate-800 text-blue-600' : ''
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
            </button>

            {/* About Page */}
            <button
              onClick={() => setCurrentRoute('about')}
              title="About & Methodology"
              className={`p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
                currentRoute === 'about' ? 'bg-slate-200 dark:bg-slate-800 text-blue-600' : ''
              }`}
            >
              <Info className="w-4 h-4" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar Row */}
        <div className="py-2.5 md:hidden border-t border-slate-100 dark:border-slate-800">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Google tools & technologies..."
              className="w-full pl-10 pr-8 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19] px-4 py-4 space-y-1 animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => { setCurrentRoute('home'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
          >
            <span>Home</span>
          </button>
          <button
            onClick={() => { setCurrentRoute('catalog'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-2"><Compass className="w-4 h-4 text-blue-500" /> Explore Tools</span>
          </button>
          <button
            onClick={() => { setCurrentRoute('categories'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-2"><Layers className="w-4 h-4 text-emerald-500" /> Categories</span>
          </button>
          <button
            onClick={() => { setCurrentRoute('how-it-works'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-2"><Workflow className="w-4 h-4 text-indigo-500" /> How It Works Flows</span>
          </button>
          <button
            onClick={() => { setCurrentRoute('wizard'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-amber-500" /> AI Recommendation Assistant</span>
          </button>
          <button
            onClick={() => { setCurrentRoute('learning-paths'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-red-500" /> Learning Paths</span>
          </button>
          <button
            onClick={() => { setCurrentRoute('compare'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-2"><Scale className="w-4 h-4 text-purple-500" /> Compare Tools</span>
            {compareToolIds.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                {compareToolIds.length}
              </span>
            )}
          </button>
          <button
            onClick={() => { setCurrentRoute('saved'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-2"><Bookmark className="w-4 h-4 text-teal-500" /> Saved Tools</span>
            {savedToolIds.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                {savedToolIds.length}
              </span>
            )}
          </button>
          <button
            onClick={() => { setCurrentRoute('admin'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-slate-500" /> Admin & Verification Console
          </button>
          <button
            onClick={() => { setCurrentRoute('about'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2"
          >
            <Info className="w-4 h-4 text-slate-500" /> About & Methodology
          </button>
        </div>
      )}
    </header>
  );
};
