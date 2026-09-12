import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GoogleTool, SkillLevel, PricingType, ToolStatus } from '../types';
import { 
  ShieldCheck, 
  Plus, 
  Edit3, 
  Trash2, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  Flag, 
  ExternalLink,
  Search,
  X
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const { 
    allTools, 
    addCustomTool, 
    updateTool, 
    deleteTool, 
    resetToolsToDefault,
    discrepancyReports,
    updateReportStatus,
    navigateToTool
  } = useApp();

  const [searchFilter, setSearchFilter] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'tools' | 'reports'>('tools');
  const [editingTool, setEditingTool] = useState<GoogleTool | null>(null);
  const [isNewToolModalOpen, setIsNewToolModalOpen] = useState<boolean>(false);

  // Form state for creating/editing tool
  const [formData, setFormData] = useState<Partial<GoogleTool>>({
    name: '',
    tagline: '',
    category: 'Artificial Intelligence & Machine Learning',
    skillLevel: 'Beginner',
    pricingType: 'Free',
    pricingDetails: '',
    status: 'Active',
    overview: '',
    problemSolved: '',
    color: '#4285F4',
    resources: { website: '', docs: '' },
    bestFor: ['Prototyping', 'Learning'],
    capabilities: ['Cloud Integration'],
    whatYouCanBuild: [{ title: 'Sample Project', description: 'Description of project' }],
    personas: [{ name: 'Alex', role: 'Developer', avatar: '💻', reason: 'Fast workflow' }],
    gettingStarted: [{ step: 1, title: 'Open website', description: 'Sign in with Google' }],
    howItWorks: {
      title: 'Workflow Architecture',
      summary: 'Data transformation pipeline',
      steps: [{ id: 's1', label: 'Input', sublabel: 'Client data', description: 'Processes payload' }]
    }
  });

  const handleEditClick = (tool: GoogleTool) => {
    setEditingTool(tool);
    setFormData(tool);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    if (editingTool) {
      updateTool({
        ...(editingTool),
        ...(formData as GoogleTool),
        lastVerified: new Date().toISOString().split('T')[0]
      });
      setEditingTool(null);
    } else {
      const newTool: GoogleTool = {
        ...(formData as GoogleTool),
        id: formData.name.toLowerCase().replace(/\s+/g, '-'),
        lastVerified: new Date().toISOString().split('T')[0],
        verifiedSource: formData.resources?.website || 'https://google.com',
        demoType: 'none',
        relatedToolIds: []
      };
      addCustomTool(newTool);
      setIsNewToolModalOpen(false);
    }
  };

  const markVerifiedToday = (tool: GoogleTool) => {
    const today = new Date().toISOString().split('T')[0];
    updateTool({
      ...tool,
      lastVerified: today
    });
  };

  const filteredTools = allTools.filter(t => 
    t.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    t.category.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Catalogue Administration & Audit Portal</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Data Governance & Admin Console
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Audit official sources, manage product schemas, update "Last Verified" dates, and resolve user discrepancy reports.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setEditingTool(null);
              setFormData({
                name: '',
                tagline: '',
                category: 'Artificial Intelligence & Machine Learning',
                skillLevel: 'Beginner',
                pricingType: 'Free',
                pricingDetails: 'Free tier available',
                status: 'Active',
                overview: '',
                problemSolved: '',
                color: '#4285F4',
                resources: { website: '', docs: '' },
                bestFor: ['Learning', 'Prototyping'],
                capabilities: ['Google Cloud Service'],
                whatYouCanBuild: [{ title: 'App', description: 'Application' }],
                personas: [{ name: 'Sam', role: 'Engineer', avatar: '👨‍💻', reason: 'High speed' }],
                gettingStarted: [{ step: 1, title: 'Visit Site', description: 'Sign in' }],
                howItWorks: {
                  title: 'Core Architecture',
                  summary: 'Process flow',
                  steps: [{ id: 's1', label: 'Start', sublabel: 'Input', description: 'Data input' }]
                }
              });
              setIsNewToolModalOpen(true);
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Tool</span>
          </button>

          <button
            onClick={resetToolsToDefault}
            title="Reset to default seed data"
            className="p-2 rounded-xl text-slate-500 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer border border-slate-200 dark:border-slate-800"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('tools')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            activeTab === 'tools' 
              ? 'bg-blue-600 text-white' 
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Tools Catalogue ({allTools.length})
        </button>

        <button
          onClick={() => setActiveTab('reports')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'reports' 
              ? 'bg-blue-600 text-white' 
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Flag className="w-3.5 h-3.5 text-amber-500" />
          <span>Discrepancy Reports ({discrepancyReports.length})</span>
        </button>
      </div>

      {/* TAB 1: TOOLS CATALOGUE MANAGEMENT */}
      {activeTab === 'tools' && (
        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter products by name or category..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3.5">Product</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Skill Level</th>
                  <th className="p-3.5">Pricing</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5">Last Verified</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {filteredTools.map(tool => (
                  <tr key={tool.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-950/30">
                    <td className="p-3.5">
                      <div className="font-bold text-slate-900 dark:text-white">{tool.name}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 max-w-xs">{tool.tagline}</div>
                    </td>
                    <td className="p-3.5 text-slate-500">{tool.category}</td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold">
                        {tool.skillLevel}
                      </span>
                    </td>
                    <td className="p-3.5">{tool.pricingType}</td>
                    <td className="p-3.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        tool.status === 'Active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {tool.status}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono text-[11px] text-slate-500">
                      {tool.lastVerified}
                    </td>
                    <td className="p-3.5 text-right space-x-1">
                      <button
                        onClick={() => markVerifiedToday(tool)}
                        title="Mark Verified Today"
                        className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 cursor-pointer"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleEditClick(tool)}
                        title="Edit Details"
                        className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteTool(tool.id)}
                        title="Delete Tool"
                        className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: DISCREPANCY REPORTS */}
      {activeTab === 'reports' && (
        <div className="space-y-4">
          {discrepancyReports.length === 0 ? (
            <div className="py-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Discrepancy Queue Empty</h4>
              <p className="text-xs text-slate-500">All user-submitted reports have been investigated and resolved.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {discrepancyReports.map(rep => (
                <div 
                  key={rep.id}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-900 dark:text-white">{rep.toolName}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                        Field: {rep.field}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        rep.status === 'Verified' ? 'bg-emerald-100 text-emerald-800' :
                        rep.status === 'Dismissed' ? 'bg-slate-200 text-slate-700' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {rep.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      "{rep.issueDescription}"
                    </p>
                    {rep.sourceUrl && (
                      <a href={rep.sourceUrl} target="_blank" rel="noreferrer" className="text-[11px] text-blue-500 hover:underline flex items-center gap-1">
                        Submitted Source URL <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => updateReportStatus(rep.id, 'Verified')}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold cursor-pointer"
                    >
                      Resolve / Verified
                    </button>
                    <button
                      onClick={() => updateReportStatus(rep.id, 'Dismissed')}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-400 text-xs font-semibold cursor-pointer"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* CREATE / EDIT TOOL MODAL */}
      {(editingTool || isNewToolModalOpen) && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-4 shadow-2xl animate-in zoom-in-95 my-8">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {editingTool ? `Edit ${editingTool.name}` : 'Add New Google Product'}
              </h3>
              <button
                onClick={() => { setEditingTool(null); setIsNewToolModalOpen(false); }}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 mb-1 block">Product Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 mb-1 block">Category</label>
                  <select
                    value={formData.category || ''}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                  >
                    <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & Machine Learning</option>
                    <option value="Cloud & Developer Platforms">Cloud & Developer Platforms</option>
                    <option value="Software Development & Frameworks">Software Development & Frameworks</option>
                    <option value="Data & Analytics">Data & Analytics</option>
                    <option value="Productivity & Collaboration">Productivity & Collaboration</option>
                    <option value="Search, Web & Ecosystem">Search, Web & Ecosystem</option>
                    <option value="Creative & Media Technologies">Creative & Media Technologies</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 mb-1 block">One-Line Tagline</label>
                <input
                  type="text"
                  required
                  value={formData.tagline || ''}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 mb-1 block">Skill Level</label>
                  <select
                    value={formData.skillLevel || 'Beginner'}
                    onChange={(e) => setFormData({ ...formData, skillLevel: e.target.value as SkillLevel })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 mb-1 block">Pricing Type</label>
                  <select
                    value={formData.pricingType || 'Free'}
                    onChange={(e) => setFormData({ ...formData, pricingType: e.target.value as PricingType })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                  >
                    <option value="Free">Free</option>
                    <option value="Freemium / Free Tier">Freemium / Free Tier</option>
                    <option value="Pay-as-you-go">Pay-as-you-go</option>
                    <option value="Paid / Enterprise">Paid / Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 mb-1 block">Status</label>
                  <select
                    value={formData.status || 'Active'}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as ToolStatus })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                  >
                    <option value="Active">Active</option>
                    <option value="Preview / Experimental">Preview / Experimental</option>
                    <option value="Deprecated / Discontinued">Deprecated / Discontinued</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 mb-1 block">Pricing Quota & Limits Details</label>
                <input
                  type="text"
                  value={formData.pricingDetails || ''}
                  onChange={(e) => setFormData({ ...formData, pricingDetails: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 mb-1 block">Official Website URL</label>
                  <input
                    type="url"
                    value={formData.resources?.website || ''}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      resources: { ...(formData.resources || { docs: '' }), website: e.target.value } 
                    })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 mb-1 block">Documentation URL</label>
                  <input
                    type="url"
                    value={formData.resources?.docs || ''}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      resources: { ...(formData.resources || { website: '' }), docs: e.target.value } 
                    })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 mb-1 block">Overview (Plain English)</label>
                <textarea
                  rows={3}
                  value={formData.overview || ''}
                  onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => { setEditingTool(null); setIsNewToolModalOpen(false); }}
                  className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold cursor-pointer hover:bg-blue-500 shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
