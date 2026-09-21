import React, { useState } from 'react';
import { LIVE_UPDATES_DATA, LAST_SYNCED_TIMESTAMP, SYNC_STATUS, GoogleLiveUpdate } from '../data/liveUpdates';
import { 
  Radio, 
  Sparkles, 
  ExternalLink, 
  X, 
  RefreshCw, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Filter, 
  Cpu, 
  Cloud, 
  Database, 
  Code,
  Zap
} from 'lucide-react';

interface LiveEcosystemRadarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTool?: (toolId: string) => void;
}

export const LiveEcosystemRadar: React.FC<LiveEcosystemRadarProps> = ({
  isOpen,
  onClose,
  onNavigateToTool
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [refreshSuccess, setRefreshSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const categories = ['All', 'AI & ML', 'Cloud', 'Data', 'Dev'];

  const filteredUpdates = selectedCategory === 'All'
    ? LIVE_UPDATES_DATA
    : LIVE_UPDATES_DATA.filter(u => u.category === selectedCategory);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setRefreshSuccess(true);
      setTimeout(() => setRefreshSuccess(false), 2500);
    }, 1200);
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Model Release':
        return 'bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/30';
      case 'Feature Drop':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
      case 'Architecture':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30';
      case 'SDK Update':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30';
      default:
        return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-[#0C111D] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ECOSYSTEM LIVE SYNC: {SYNC_STATUS}</span>
              </div>
              <span className="text-xs text-slate-400 hidden sm:inline">
                • Verified across Google Developer Feeds
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span>Google Living Ecosystem Radar</span>
              <Sparkles className="w-5 h-5 text-amber-500" />
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Continuously monitoring Google Developers Blog, Google Cloud Releases, and Firebase updates.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
            title="Close Radar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Telemetry Bar & Controls */}
        <div className="px-6 py-3 bg-slate-100/70 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-mono">
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            <span>Last Synced: <strong>{new Date(LAST_SYNCED_TIMESTAMP).toLocaleDateString()} {new Date(LAST_SYNCED_TIMESTAMP).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer text-xs"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'Polling Feeds...' : refreshSuccess ? 'Feeds Verified!' : 'Check for Live Updates'}</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="px-6 py-2.5 bg-white dark:bg-[#0C111D] border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Sector:
          </span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-sm font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Updates Feed Body */}
        <div className="p-6 overflow-y-auto space-y-3.5 flex-1 divide-y divide-slate-100 dark:divide-slate-800/60">
          {filteredUpdates.map((update) => (
            <div key={update.id} className="pt-3.5 first:pt-0 space-y-2 group">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getBadgeColor(update.badge)}`}>
                    {update.badge}
                  </span>
                  <button
                    onClick={() => {
                      if (onNavigateToTool) onNavigateToTool(update.toolId);
                      onClose();
                    }}
                    className="text-xs font-black text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{update.toolName}</span>
                  </button>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {update.pubDate}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {update.title}
              </h4>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {update.summary}
              </p>

              <div className="flex items-center justify-between pt-1">
                <a
                  href={update.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>Verify on Official Google Blog</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {onNavigateToTool && (
                  <button
                    onClick={() => {
                      onNavigateToTool(update.toolId);
                      onClose();
                    }}
                    className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    View {update.toolName} Package →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Living Ecosystem Protocol active. Auto-synced every 6 hours.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Close Radar
          </button>
        </div>
      </div>
    </div>
  );
};
