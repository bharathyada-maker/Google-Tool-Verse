import React, { createContext, useContext, useState, useEffect } from 'react';
import { GoogleTool, DiscrepancyReport, LearningPath } from '../types';
import { ALL_TOOLS } from '../data/toolsData';
import { LEARNING_PATHS_DATA } from '../data/learningPathsData';

export type PageRoute = 
  | 'home'
  | 'catalog'
  | 'categories'
  | 'tool-detail'
  | 'how-it-works'
  | 'compare'
  | 'wizard'
  | 'learning-paths'
  | 'learning-path-detail'
  | 'saved'
  | 'admin'
  | 'about';

interface AppContextType {
  // Navigation & Routing
  currentRoute: PageRoute;
  setCurrentRoute: (route: PageRoute) => void;
  selectedToolId: string | null;
  setSelectedToolId: (id: string | null) => void;
  selectedPathId: string | null;
  setSelectedPathId: (id: string | null) => void;
  navigateToTool: (toolId: string) => void;
  navigateToPath: (pathId: string) => void;

  // Tools & Custom Tools Data
  allTools: GoogleTool[];
  addCustomTool: (tool: GoogleTool) => void;
  updateTool: (tool: GoogleTool) => void;
  deleteTool: (toolId: string) => void;
  resetToolsToDefault: () => void;

  // Search & Global Filtering
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedSkillLevel: string | null;
  setSelectedSkillLevel: (level: string | null) => void;
  selectedPricing: string | null;
  setSelectedPricing: (pricing: string | null) => void;
  clearFilters: () => void;

  // Saved Tools (Bookmarks)
  savedToolIds: string[];
  toggleSaveTool: (toolId: string) => void;
  isToolSaved: (toolId: string) => boolean;

  // Recently Viewed History
  recentlyViewedIds: string[];
  addToRecentlyViewed: (toolId: string) => void;
  clearRecentlyViewed: () => void;

  // Comparison Tool IDs (up to 4)
  compareToolIds: string[];
  toggleCompareTool: (toolId: string) => void;
  removeCompareTool: (toolId: string) => void;
  clearCompareTools: () => void;
  isToolInCompare: (toolId: string) => boolean;

  // Learning Path Progress Tracking
  completedSteps: Record<string, number[]>; // pathId -> array of completed stepNumbers
  toggleStepComplete: (pathId: string, stepNumber: number) => void;
  isStepCompleted: (pathId: string, stepNumber: number) => boolean;
  earnedBadges: string[];

  // Theme Management
  isDarkMode: boolean;
  toggleDarkMode: () => void;

  // Verification & Discrepancy Reports
  discrepancyReports: DiscrepancyReport[];
  submitReport: (report: Omit<DiscrepancyReport, 'id' | 'submittedAt' | 'status'>) => void;
  updateReportStatus: (reportId: string, status: 'Pending' | 'Verified' | 'Dismissed') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedToolId, setSelectedToolId] = useState<string | null>('gemini');
  const [selectedPathId, setSelectedPathId] = useState<string | null>('ai-beginner-path');

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string | null>(null);
  const [selectedPricing, setSelectedPricing] = useState<string | null>(null);

  // Theme
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('gtv_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('gtv_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('gtv_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // Tools Storage
  const [allTools, setAllTools] = useState<GoogleTool[]>(() => {
    const saved = localStorage.getItem('gtv_custom_tools');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch {
        // fallback
      }
    }
    return ALL_TOOLS;
  });

  useEffect(() => {
    localStorage.setItem('gtv_custom_tools', JSON.stringify(allTools));
  }, [allTools]);

  const addCustomTool = (tool: GoogleTool) => {
    setAllTools(prev => [tool, ...prev]);
  };

  const updateTool = (updatedTool: GoogleTool) => {
    setAllTools(prev => prev.map(t => t.id === updatedTool.id ? updatedTool : t));
  };

  const deleteTool = (toolId: string) => {
    setAllTools(prev => prev.filter(t => t.id !== toolId));
    setSavedToolIds(prev => prev.filter(id => id !== toolId));
    setCompareToolIds(prev => prev.filter(id => id !== toolId));
  };

  const resetToolsToDefault = () => {
    setAllTools(ALL_TOOLS);
    localStorage.removeItem('gtv_custom_tools');
  };

  // Saved Bookmarks
  const [savedToolIds, setSavedToolIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('gtv_saved_tools');
    return saved ? JSON.parse(saved) : ['gemini', 'firebase', 'bigquery'];
  });

  useEffect(() => {
    localStorage.setItem('gtv_saved_tools', JSON.stringify(savedToolIds));
  }, [savedToolIds]);

  const toggleSaveTool = (toolId: string) => {
    setSavedToolIds(prev => 
      prev.includes(toolId) ? prev.filter(id => id !== toolId) : [...prev, toolId]
    );
  };

  const isToolSaved = (toolId: string) => savedToolIds.includes(toolId);

  // Recently Viewed
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('gtv_recent_tools');
    return saved ? JSON.parse(saved) : ['gemini', 'google-ai-studio', 'cloud-run'];
  });

  const addToRecentlyViewed = (toolId: string) => {
    setRecentlyViewedIds(prev => {
      const filtered = prev.filter(id => id !== toolId);
      const updated = [toolId, ...filtered].slice(0, 10);
      localStorage.setItem('gtv_recent_tools', JSON.stringify(updated));
      return updated;
    });
  };

  const clearRecentlyViewed = () => {
    setRecentlyViewedIds([]);
    localStorage.removeItem('gtv_recent_tools');
  };

  // Compare Tool IDs (up to 4)
  const [compareToolIds, setCompareToolIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('gtv_compare_tools');
    return saved ? JSON.parse(saved) : ['google-ai-studio', 'vertex-ai'];
  });

  useEffect(() => {
    localStorage.setItem('gtv_compare_tools', JSON.stringify(compareToolIds));
  }, [compareToolIds]);

  const toggleCompareTool = (toolId: string) => {
    setCompareToolIds(prev => {
      if (prev.includes(toolId)) {
        return prev.filter(id => id !== toolId);
      }
      if (prev.length >= 4) {
        return [...prev.slice(1), toolId]; // keep last 3 + new
      }
      return [...prev, toolId];
    });
  };

  const removeCompareTool = (toolId: string) => {
    setCompareToolIds(prev => prev.filter(id => id !== toolId));
  };

  const clearCompareTools = () => {
    setCompareToolIds([]);
  };

  const isToolInCompare = (toolId: string) => compareToolIds.includes(toolId);

  // Learning Path Progress
  const [completedSteps, setCompletedSteps] = useState<Record<string, number[]>>(() => {
    const saved = localStorage.getItem('gtv_completed_steps');
    return saved ? JSON.parse(saved) : { 'ai-beginner-path': [1] };
  });

  useEffect(() => {
    localStorage.setItem('gtv_completed_steps', JSON.stringify(completedSteps));
  }, [completedSteps]);

  const toggleStepComplete = (pathId: string, stepNumber: number) => {
    setCompletedSteps(prev => {
      const current = prev[pathId] || [];
      const updated = current.includes(stepNumber)
        ? current.filter(s => s !== stepNumber)
        : [...current, stepNumber];
      return { ...prev, [pathId]: updated };
    });
  };

  const isStepCompleted = (pathId: string, stepNumber: number) => {
    return (completedSteps[pathId] || []).includes(stepNumber);
  };

  // Badges calculation
  const earnedBadges = LEARNING_PATHS_DATA.filter((path: LearningPath) => {
    const completed = completedSteps[path.id] || [];
    return path.steps.length > 0 && completed.length === path.steps.length;
  }).map((path: LearningPath) => path.badgeName);

  // Discrepancy Reports
  const [discrepancyReports, setDiscrepancyReports] = useState<DiscrepancyReport[]>(() => {
    const saved = localStorage.getItem('gtv_reports');
    return saved ? JSON.parse(saved) : [
      {
        id: 'rep-1',
        toolId: 'veo',
        toolName: 'Veo Video Model',
        field: 'pricingDetails',
        issueDescription: 'Updated pricing tiers released at Google I/O need verification.',
        sourceUrl: 'https://cloud.google.com/vertex-ai',
        submittedAt: '2025-06-14',
        status: 'Pending'
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('gtv_reports', JSON.stringify(discrepancyReports));
  }, [discrepancyReports]);

  const submitReport = (report: Omit<DiscrepancyReport, 'id' | 'submittedAt' | 'status'>) => {
    const newReport: DiscrepancyReport = {
      ...report,
      id: `rep-${Date.now()}`,
      submittedAt: new Date().toISOString().split('T')[0],
      status: 'Pending'
    };
    setDiscrepancyReports(prev => [newReport, ...prev]);
  };

  const updateReportStatus = (reportId: string, status: 'Pending' | 'Verified' | 'Dismissed') => {
    setDiscrepancyReports(prev => 
      prev.map(r => r.id === reportId ? { ...r, status } : r)
    );
  };

  // Filter Clearer
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedSkillLevel(null);
    setSelectedPricing(null);
  };

  // Navigators
  const navigateToTool = (toolId: string) => {
    setSelectedToolId(toolId);
    addToRecentlyViewed(toolId);
    setCurrentRoute('tool-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPath = (pathId: string) => {
    setSelectedPathId(pathId);
    setCurrentRoute('learning-path-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        currentRoute,
        setCurrentRoute: (route) => {
          setCurrentRoute(route);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        selectedToolId,
        setSelectedToolId,
        selectedPathId,
        setSelectedPathId,
        navigateToTool,
        navigateToPath,
        allTools,
        addCustomTool,
        updateTool,
        deleteTool,
        resetToolsToDefault,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedSkillLevel,
        setSelectedSkillLevel,
        selectedPricing,
        setSelectedPricing,
        clearFilters,
        savedToolIds,
        toggleSaveTool,
        isToolSaved,
        recentlyViewedIds,
        addToRecentlyViewed,
        clearRecentlyViewed,
        compareToolIds,
        toggleCompareTool,
        removeCompareTool,
        clearCompareTools,
        isToolInCompare,
        completedSteps,
        toggleStepComplete,
        isStepCompleted,
        earnedBadges,
        isDarkMode,
        toggleDarkMode,
        discrepancyReports,
        submitReport,
        updateReportStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
