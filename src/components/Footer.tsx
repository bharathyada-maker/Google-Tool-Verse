import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, ExternalLink, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentRoute, setSelectedCategory } = useApp();

  return (
    <footer className="bg-white dark:bg-[#090D16] border-t border-slate-200 dark:border-slate-800/80 transition-colors pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white font-black text-sm shadow">
                GTV
              </div>
              <span className="font-extrabold text-lg text-slate-900 dark:text-white">Google Toolverse</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              An intelligent, interactive product discovery platform helping developers, creators, students, and businesses understand, compare, and build with Google technologies.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-full w-fit border border-emerald-200 dark:border-emerald-800/40">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Officially Verified Google Technologies</span>
            </div>
          </div>

          {/* Col 2: Categories Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Ecosystem Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button 
                  onClick={() => { setSelectedCategory('ai-ml'); setCurrentRoute('catalog'); }}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Artificial Intelligence & ML
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setSelectedCategory('cloud-platforms'); setCurrentRoute('catalog'); }}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Cloud & Developer Platforms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setSelectedCategory('software-dev'); setCurrentRoute('catalog'); }}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Software Development & UI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setSelectedCategory('data-analytics'); setCurrentRoute('catalog'); }}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Data Warehousing & BI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setSelectedCategory('productivity-collab'); setCurrentRoute('catalog'); }}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Productivity & Workspace
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setSelectedCategory('search-web'); setCurrentRoute('catalog'); }}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Search, Web & Geospatial
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Discovery Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Interactive Features
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button 
                  onClick={() => setCurrentRoute('how-it-works')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-indigo-500" />
                  "How It Works" Visual Workflows
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentRoute('wizard')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  "Find the Right Tool" Wizard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentRoute('compare')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Tool Matrix & Side-by-Side Comparison
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentRoute('learning-paths')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Curated Step-by-Step Learning Paths
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentRoute('saved')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Saved Bookmarks & Progress Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentRoute('admin')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-slate-500"
                >
                  Admin Verification & Discrepancy Queue
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Resources & Verification */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Official Google Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a 
                  href="https://ai.google.dev" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  Google AI for Developers <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://cloud.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  Google Cloud Console <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://developer.android.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  Android Developers <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://firebase.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  Firebase Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentRoute('about')}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline pt-2 inline-block cursor-pointer"
                >
                  Methodology & Data Verification Rules →
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
          <p>
            Google, Gemini, Android, Flutter, Firebase, and BigQuery are registered trademarks of Google LLC. Google Toolverse is an educational discovery reference directory and is not officially affiliated with or endorsed by Google LLC.
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <span>Built with precision for the Google ecosystem</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for developers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
