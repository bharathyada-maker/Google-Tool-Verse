import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ToolDetailPage } from './pages/ToolDetailPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ComparePage } from './pages/ComparePage';
import { WizardPage } from './pages/WizardPage';
import { LearningPathsPage } from './pages/LearningPathsPage';
import { LearningPathDetailPage } from './pages/LearningPathDetailPage';
import { SavedPage } from './pages/SavedPage';
import { AdminPage } from './pages/AdminPage';
import { AboutPage } from './pages/AboutPage';
import { Scale, ArrowRight, X } from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentRoute, setCurrentRoute, compareToolIds, removeCompareTool, clearCompareTools, allTools } = useApp();

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'catalog':
        return <CatalogPage />;
      case 'categories':
        return <CategoriesPage />;
      case 'tool-detail':
        return <ToolDetailPage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'compare':
        return <ComparePage />;
      case 'wizard':
        return <WizardPage />;
      case 'learning-paths':
        return <LearningPathsPage />;
      case 'learning-path-detail':
        return <LearningPathDetailPage />;
      case 'saved':
        return <SavedPage />;
      case 'admin':
        return <AdminPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  const compareTools = allTools.filter(t => compareToolIds.includes(t.id));

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Persistent Floating Compare Drawer if tools are queued */}
      {compareToolIds.length > 0 && currentRoute !== 'compare' && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 dark:bg-slate-900/95 text-white backdrop-blur-md px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl border border-slate-700 shadow-2xl flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3 max-w-[calc(100vw-24px)] w-max animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center gap-2 shrink-0">
            <Scale className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold whitespace-nowrap">Compare ({compareToolIds.length}/4):</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5">
            {compareTools.map(t => (
              <span 
                key={t.id}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-800 text-[11px] font-semibold border border-slate-700"
              >
                <span>{t.name}</span>
                <button onClick={() => removeCompareTool(t.id)} className="hover:text-red-400 cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setCurrentRoute('compare')}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1 shadow-sm cursor-pointer transition-colors"
            >
              <span>Compare Now</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            <button
              onClick={clearCompareTools}
              title="Close & discard comparison"
              aria-label="Close comparison window"
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700/60 hover:border-slate-600 ml-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
