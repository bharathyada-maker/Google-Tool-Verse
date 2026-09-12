import React, { useState, useEffect, useRef } from 'react';
import { ECOSYSTEM_NODES, ECOSYSTEM_EDGES, EcosystemNode } from '../data/ecosystemGraph';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  Sparkles, 
  Network, 
  Radio, 
  Play, 
  Pause, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Activity, 
  Cpu, 
  Share2, 
  Radar,
  Zap,
  Target,
  Orbit,
  Boxes,
  Layers
} from 'lucide-react';

export type ConstellationViewMode = 'synapse' | 'orbit' | 'stack';

// Pre-computed positions for 3 distinct architectural views
const ORBIT_POSITIONS: Record<string, { x: number; y: number }> = {
  // Center Sun: Gemini
  'gemini': { x: 50, y: 50 },

  // Orbit 1: Intelligence Core (Radius 16%)
  'gemma': { x: 50, y: 34 },
  'google-ai-studio': { x: 63.8, y: 42.0 },
  'gemini-api': { x: 63.8, y: 58.0 },
  'notebooklm': { x: 50, y: 66 },
  'vertex-ai': { x: 36.2, y: 58.0 },
  'tensorflow': { x: 36.2, y: 42.0 },

  // Orbit 2: Cloud & Backend Runtime (Radius 28%)
  'cloud-run': { x: 64.0, y: 25.7 },
  'firebase': { x: 78.0, y: 50.0 },
  'cloud-storage': { x: 59.6, y: 76.3 },
  'kubernetes-engine': { x: 32.0, y: 71.4 },
  'google-cloud': { x: 25.7, y: 36.0 },

  // Orbit 3: Clients, Data & Workspace (Radius 42%)
  'bigquery': { x: 35.6, y: 89.5 },
  'looker-studio': { x: 57.3, y: 91.4 },
  'google-sheets': { x: 77.0, y: 82.2 },
  'flutter': { x: 89.5, y: 64.4 },
  'dart': { x: 91.4, y: 42.7 },
  'android-studio': { x: 82.2, y: 23.0 },
  'google-workspace': { x: 60.9, y: 9.4 },
  'google-docs': { x: 39.1, y: 9.4 },
  'chrome-devtools': { x: 17.8, y: 23.0 },
  'lighthouse': { x: 8.1, y: 46.3 }
};

const STACK_POSITIONS: Record<string, { x: number; y: number }> = {
  // Tier 1: Client & Touchpoints (Y = 16)
  'google-workspace': { x: 9, y: 16 },
  'google-docs': { x: 20, y: 16 },
  'google-sheets': { x: 32, y: 16 },
  'flutter': { x: 44, y: 16 },
  'dart': { x: 56, y: 16 },
  'android-studio': { x: 68, y: 16 },
  'chrome-devtools': { x: 80, y: 16 },
  'lighthouse': { x: 91, y: 16 },

  // Tier 2: Compute & Backend Runtime (Y = 38)
  'google-cloud': { x: 18, y: 38 },
  'kubernetes-engine': { x: 38, y: 38 },
  'cloud-run': { x: 60, y: 38 },
  'firebase': { x: 82, y: 38 },

  // Tier 3: Foundation AI & Model Serving (Y = 62)
  'gemini': { x: 14, y: 62 },
  'vertex-ai': { x: 28, y: 62 },
  'google-ai-studio': { x: 42, y: 62 },
  'gemini-api': { x: 56, y: 62 },
  'gemma': { x: 69, y: 62 },
  'notebooklm': { x: 81, y: 62 },
  'tensorflow': { x: 92, y: 62 },

  // Tier 4: Data Lake & Warehousing (Y = 85)
  'cloud-storage': { x: 24, y: 85 },
  'bigquery': { x: 50, y: 85 },
  'looker-studio': { x: 76, y: 85 }
};

export const EcosystemConstellation: React.FC = () => {
  const { navigateToTool } = useApp();
  const [viewMode, setViewMode] = useState<ConstellationViewMode>('synapse');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>('gemini');
  const [activeNodeId, setActiveNodeId] = useState<string>('gemini');

  // Interactive controls
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isAutoTouring, setIsAutoTouring] = useState<boolean>(false);
  const [isRadarScanning, setIsRadarScanning] = useState<boolean>(false);
  const [dataPacketActive, setDataPacketActive] = useState<boolean>(false);
  const [telemetryLog, setTelemetryLog] = useState<string[]>([
    'TOPOLOGY MATRIX INITIALIZED',
    'NODES ACTIVE: 22 / 22',
    'VIEW MODE: SYNAPSE MESH'
  ]);
  
  // 3D Parallax state
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'AI & ML', 'Cloud', 'Dev', 'Data', 'Productivity'];

  const filteredNodes = selectedCategory === 'All' 
    ? ECOSYSTEM_NODES 
    : ECOSYSTEM_NODES.filter(n => n.category === selectedCategory || n.id === activeNodeId);

  const activeNode = ECOSYSTEM_NODES.find(n => n.id === (hoveredNodeId || activeNodeId)) || ECOSYSTEM_NODES[0];

  // Connected edges for active node
  const connectedEdges = ECOSYSTEM_EDGES.filter(
    e => e.source === activeNode.id || e.target === activeNode.id
  );

  const isEdgeHighlighted = (sourceId: string, targetId: string) => {
    return activeNode.id === sourceId || activeNode.id === targetId;
  };

  // Get active coordinates according to current view mode
  const getNodeCoordinates = (nodeId: string): { x: number; y: number } => {
    if (viewMode === 'orbit' && ORBIT_POSITIONS[nodeId]) {
      return ORBIT_POSITIONS[nodeId];
    }
    if (viewMode === 'stack' && STACK_POSITIONS[nodeId]) {
      return STACK_POSITIONS[nodeId];
    }
    const node = ECOSYSTEM_NODES.find(n => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 50, y: 50 };
  };

  // Parallax mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const triggerRadarPulse = () => {
    setIsRadarScanning(true);
    addLog(`RADAR PULSE EMITTED: SCANNING [${activeNode.category.toUpperCase()}]`);
    setTimeout(() => setIsRadarScanning(false), 2200);
  };

  const dispatchDataPacket = () => {
    setDataPacketActive(true);
    addLog(`DISPATCHING PACKET: ${activeNode.name.toUpperCase()} -> ${connectedEdges.length} SYNERGIES`);
    setTimeout(() => {
      setDataPacketActive(false);
      addLog('DATA PACKET ACKNOWLEDGED (RTT: 4.8ms)');
    }, 2400);
  };

  const addLog = (msg: string) => {
    setTelemetryLog(prev => [msg, ...prev.slice(0, 3)]);
  };

  // Mode change handler
  const handleModeChange = (mode: ConstellationViewMode) => {
    setViewMode(mode);
    const modeLabel = mode === 'synapse' ? 'SYNAPSE MESH' : mode === 'orbit' ? 'ORBITAL GRAVITY' : 'STACK MATRIX';
    addLog(`TOPOLOGY SWITCH: ${modeLabel}`);
  };

  // Auto-Tour Mode
  useEffect(() => {
    if (!isAutoTouring) return;
    const tourNodes = ['gemini', 'vertex-ai', 'firebase', 'cloud-run', 'bigquery', 'flutter', 'google-workspace'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % tourNodes.length;
      const targetId = tourNodes[idx];
      setActiveNodeId(targetId);
      setHoveredNodeId(targetId);
      addLog(`AUTOPILOT TOUR: TARGET LOCKED -> [${targetId.toUpperCase()}]`);
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoTouring]);

  // Micro-Glyph Renderer for each Tool
  const renderGlyph = (nodeId: string, color: string) => {
    switch (nodeId) {
      case 'gemini':
      case 'google-ai-studio':
      case 'gemini-api':
        // Four-pointed Google AI Sparkle
        return (
          <path
            d="M 0 -1.5 Q 0 0 1.5 0 Q 0 0 0 1.5 Q 0 0 -1.5 0 Q 0 0 0 -1.5 Z"
            fill={color}
          />
        );
      case 'vertex-ai':
      case 'tensorflow':
      case 'gemma':
      case 'notebooklm':
        // Neural Lattice Nodes
        return (
          <g stroke={color} strokeWidth="0.3" fill={color}>
            <circle cx="-0.8" cy="-0.6" r="0.35" />
            <circle cx="0.8" cy="-0.6" r="0.35" />
            <circle cx="0" cy="0.8" r="0.4" />
            <line x1="-0.8" y1="-0.6" x2="0.8" y2="-0.6" />
            <line x1="-0.8" y1="-0.6" x2="0" y2="0.8" />
            <line x1="0.8" y1="-0.6" x2="0" y2="0.8" />
          </g>
        );
      case 'firebase':
        // Core Flame
        return (
          <path
            d="M 0 1.5 C -1.0 1.5 -1.3 0.6 -1.0 0 C -0.7 -0.6 -0.2 -1.1 0 -1.5 C 0.3 -1.0 1.1 -0.2 1.1 0.6 C 1.1 1.2 0.7 1.5 0 1.5 Z"
            fill={color}
          />
        );
      case 'bigquery':
      case 'looker-studio':
      case 'cloud-storage':
        // Cylindrical Database Stack
        return (
          <g stroke={color} strokeWidth="0.25" fill="none">
            <ellipse cx="0" cy="-0.8" rx="1.2" ry="0.4" fill={color} fillOpacity="0.4" />
            <path d="M -1.2 -0.8 L -1.2 0.8 A 1.2 0.4 0 0 0 1.2 0.8 L 1.2 -0.8" />
            <path d="M -1.2 0 A 1.2 0.4 0 0 0 1.2 0" />
          </g>
        );
      case 'cloud-run':
      case 'kubernetes-engine':
      case 'google-cloud':
        // Serverless Micro-Container Cube / Cloud
        return (
          <g stroke={color} strokeWidth="0.25" fill="none">
            <path d="M 0 -1.2 L 1.2 -0.5 L 1.2 0.8 L 0 1.5 L -1.2 0.8 L -1.2 -0.5 Z" fill={color} fillOpacity="0.3" />
            <line x1="0" y1="1.5" x2="0" y2="0.1" />
            <line x1="0" y1="0.1" x2="1.2" y2="-0.5" />
            <line x1="0" y1="0.1" x2="-1.2" y2="-0.5" />
          </g>
        );
      case 'flutter':
      case 'dart':
        // Flutter Aerodynamic Chevrons
        return (
          <g fill={color}>
            <polygon points="-1.0,-1.2 0.4,0.2 -0.3,0.9 -1.0,0.2" />
            <polygon points="0.0,-1.2 1.1,-0.1 0.4,0.6 -0.7,-0.5" opacity="0.8" />
          </g>
        );
      case 'android-studio':
        // Android Bot Glyph
        return (
          <g stroke={color} strokeWidth="0.2" fill={color}>
            <path d="M -1.0 0.5 A 1.0 0.8 0 0 1 1.0 0.5 Z" fillOpacity="0.4" />
            <circle cx="-0.4" cy="0.1" r="0.12" fill="#FFFFFF" />
            <circle cx="0.4" cy="0.1" r="0.12" fill="#FFFFFF" />
            <line x1="-0.6" y1="-0.1" x2="-0.9" y2="-0.6" />
            <line x1="0.6" y1="-0.1" x2="0.9" y2="-0.6" />
          </g>
        );
      default:
        // Document & Productivity Terminal Glyph
        return (
          <g stroke={color} strokeWidth="0.25" fill="none">
            <rect x="-0.9" y="-1.1" width="1.8" height="2.2" rx="0.3" fill={color} fillOpacity="0.2" />
            <line x1="-0.5" y1="-0.5" x2="0.5" y2="-0.5" />
            <line x1="-0.5" y1="0" x2="0.5" y2="0" />
            <line x1="-0.5" y1="0.5" x2="0.1" y2="0.5" />
          </g>
        );
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-[#070A13] text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-[0_0_50px_rgba(15,23,42,0.6)] overflow-hidden transition-all duration-300"
    >
      {/* Background Architectural Blueprint Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`
        }}
      />

      {/* Subtle Atmospheric Depth Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* ======================================================== */}
      {/* 1. TOP HUD STATUS & MULTI-VIEW MODE SWITCHER */}
      {/* ======================================================== */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800 font-mono text-[11px] text-slate-400">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 font-bold">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>TOPOLOGY MATRIX: READY</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span>TARGET: <strong className="text-white">[{activeNode.name.toUpperCase()}]</strong></span>
            <span>•</span>
            <span>SYNAPSE LINKS: <strong className="text-emerald-400">{connectedEdges.length}</strong></span>
          </div>
        </div>

        {/* View Mode Segmented Switcher (WOW Factor!) */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-2xl border border-slate-800">
          <button
            onClick={() => handleModeChange('synapse')}
            className={`px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 text-xs transition-all cursor-pointer ${
              viewMode === 'synapse'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>Synapse Mesh</span>
          </button>

          <button
            onClick={() => handleModeChange('orbit')}
            className={`px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 text-xs transition-all cursor-pointer ${
              viewMode === 'orbit'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Orbit className="w-3.5 h-3.5" />
            <span>Orbital Gravity</span>
          </button>

          <button
            onClick={() => handleModeChange('stack')}
            className={`px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 text-xs transition-all cursor-pointer ${
              viewMode === 'stack'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25 font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Stack Matrix</span>
          </button>
        </div>

        {/* Quick HUD Triggers */}
        <div className="flex items-center gap-2">
          <button
            onClick={triggerRadarPulse}
            disabled={isRadarScanning}
            className="px-2.5 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 font-semibold flex items-center gap-1.5 transition-all cursor-pointer text-xs"
          >
            <Radar className={`w-3.5 h-3.5 ${isRadarScanning ? 'animate-spin text-cyan-200' : 'text-cyan-400'}`} />
            <span className="hidden md:inline">{isRadarScanning ? 'Pulsing...' : 'Sonar Sweep'}</span>
          </button>

          <button
            onClick={dispatchDataPacket}
            disabled={dataPacketActive}
            className="px-2.5 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 font-semibold flex items-center gap-1.5 transition-all cursor-pointer text-xs"
          >
            <Zap className={`w-3.5 h-3.5 ${dataPacketActive ? 'text-amber-200 animate-bounce' : 'text-amber-400'}`} />
            <span className="hidden md:inline">{dataPacketActive ? 'Routing...' : 'Send Packet'}</span>
          </button>

          <button
            onClick={() => setIsAutoTouring(!isAutoTouring)}
            className={`px-2.5 py-1 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              isAutoTouring 
                ? 'bg-amber-500/20 border-amber-500 text-amber-300' 
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            {isAutoTouring ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{isAutoTouring ? 'Pause' : 'Tour'}</span>
          </button>
        </div>
      </div>

      {/* Header & Filter Controls */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
            <Boxes className="w-4 h-4" />
            <span>Interactive Google Ecosystem Matrix</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <span>
              {viewMode === 'synapse' && 'Neural Synapse Network'}
              {viewMode === 'orbit' && 'Planetary Orbital Gravity'}
              {viewMode === 'stack' && 'Enterprise Stack Architecture'}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 font-mono">
              MICRO-CHIP CORES
            </span>
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            {viewMode === 'synapse' && 'Interconnected neural topology of Google platforms. Hover or lock nodes to inspect real-time bus channels.'}
            {viewMode === 'orbit' && 'Gravitational planetary rings centered around Gemini AI Core. Observe how cloud and client platforms orbit foundational models.'}
            {viewMode === 'stack' && 'Layered enterprise architecture pipeline from client interfaces down to serverless compute, AI inference, and data lakes.'}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-800 text-white border border-slate-700 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MAIN ARCHITECTURAL CANVAS */}
      {/* ======================================================== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Canvas Area with Zoom Controls */}
        <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#050811] rounded-3xl border border-slate-800/80 p-3 select-none overflow-hidden shadow-2xl group">
          
          {/* Zoom floating controls */}
          <div className="absolute top-3 right-3 z-30 flex flex-col gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md shadow-lg">
            <button 
              onClick={() => setZoomLevel(prev => Math.min(1.4, prev + 0.1))} 
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => setZoomLevel(prev => Math.max(0.8, prev - 0.1))} 
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => { setZoomLevel(1); setMousePos({ x: 0, y: 0 }); }} 
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
              title="Reset View"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Radar shockwave animation */}
          {isRadarScanning && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-cyan-400 animate-ping opacity-60" />
              <div className="w-48 h-48 rounded-full border border-cyan-400/40 animate-ping opacity-40 duration-1000" />
              <div className="w-80 h-80 rounded-full border border-cyan-400/20 animate-ping opacity-20 duration-1500" />
            </div>
          )}

          {/* SVG Canvas with 3D Parallax & Zoom */}
          <div 
            className="w-full h-full transition-transform duration-200 ease-out"
            style={{
              transform: `scale(${zoomLevel}) translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
              transformOrigin: 'center center'
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                {/* Refined subtle glow filter */}
                <filter id="glow-subtle" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="0.6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Laser Edge Gradients */}
                <linearGradient id="active-bus" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#818CF8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#34D399" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* VIEW-SPECIFIC BACKGROUND TOPOLOGY GUIDES */}
              {viewMode === 'orbit' && (
                <g opacity="0.25" stroke="#38BDF8" fill="none" strokeWidth="0.25">
                  <circle cx="50" cy="50" r="16" strokeDasharray="1.5 2" />
                  <circle cx="50" cy="50" r="28" strokeDasharray="2 3" />
                  <circle cx="50" cy="50" r="42" strokeDasharray="3 4" />
                  <text x="50" y="32" textAnchor="middle" fill="#64748B" fontSize="1.3" fontFamily="monospace">ORBIT I: FOUNDATION INTELLIGENCE</text>
                  <text x="50" y="20.5" textAnchor="middle" fill="#64748B" fontSize="1.3" fontFamily="monospace">ORBIT II: SERVERLESS & CLOUD RUNTIME</text>
                  <text x="50" y="6.5" textAnchor="middle" fill="#64748B" fontSize="1.3" fontFamily="monospace">ORBIT III: CLIENTS, DATA & PRODUCTIVITY</text>
                </g>
              )}

              {viewMode === 'stack' && (
                <g opacity="0.4">
                  <rect x="4" y="9" width="92" height="14" rx="2" fill="#0B132B" stroke="#1E293B" strokeWidth="0.3" />
                  <text x="8" y="12.5" fill="#38BDF8" fontSize="1.3" fontFamily="monospace" fontWeight="bold">TIER 1: CLIENT APPLICATIONS & WORKSPACE</text>

                  <rect x="4" y="31" width="92" height="14" rx="2" fill="#0B132B" stroke="#1E293B" strokeWidth="0.3" />
                  <text x="8" y="34.5" fill="#34D399" fontSize="1.3" fontFamily="monospace" fontWeight="bold">TIER 2: BACKEND RUNTIME & COMPUTE ENGINES</text>

                  <rect x="4" y="55" width="92" height="14" rx="2" fill="#0B132B" stroke="#1E293B" strokeWidth="0.3" />
                  <text x="8" y="58.5" fill="#818CF8" fontSize="1.3" fontFamily="monospace" fontWeight="bold">TIER 3: FOUNDATION AI & MODEL INFERENCE</text>

                  <rect x="4" y="78" width="92" height="14" rx="2" fill="#0B132B" stroke="#1E293B" strokeWidth="0.3" />
                  <text x="8" y="81.5" fill="#FBBF24" fontSize="1.3" fontFamily="monospace" fontWeight="bold">TIER 4: ENTERPRISE DATA LAKE & STORAGE</text>
                </g>
              )}

              {viewMode === 'synapse' && (
                <g opacity="0.1" stroke="#38BDF8" strokeWidth="0.2">
                  <line x1="10" y1="50" x2="90" y2="50" strokeDasharray="1 3" />
                  <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="1 3" />
                  <circle cx="50" cy="50" r="28" fill="none" strokeDasharray="1 4" />
                </g>
              )}

              {/* NEURAL BUS CONNECTIONS */}
              {ECOSYSTEM_EDGES.map((edge, idx) => {
                const from = getNodeCoordinates(edge.source);
                const to = getNodeCoordinates(edge.target);
                const highlighted = isEdgeHighlighted(edge.source, edge.target);

                return (
                  <g key={idx}>
                    <line
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke={highlighted ? 'url(#active-bus)' : '#1E293B'}
                      strokeWidth={highlighted ? 0.75 : 0.2}
                      strokeDasharray={highlighted ? 'none' : '0.8 0.8'}
                      filter={highlighted ? 'url(#glow-subtle)' : 'none'}
                      className={`transition-all duration-500 ${highlighted ? 'opacity-100' : 'opacity-25'}`}
                    />

                    {highlighted && (
                      <g>
                        <circle r="0.65" fill="#38BDF8" filter="url(#glow-subtle)">
                          <animateMotion
                            path={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                            dur="2.2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        <circle r="0.5" fill="#34D399">
                          <animateMotion
                            path={`M ${to.x} ${to.y} L ${from.x} ${from.y}`}
                            dur="2.8s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>
                    )}

                    {dataPacketActive && highlighted && (
                      <circle r="1.1" fill="#FBBF24" filter="url(#glow-subtle)">
                        <animateMotion
                          path={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                          dur="1.2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* ARCHITECTURAL MICRO-POD CHIP NODES (NO MORE DOTS!) */}
              {filteredNodes.map((node: EcosystemNode) => {
                const isCurrent = node.id === activeNode.id;
                const isConnected = connectedEdges.some(e => e.source === node.id || e.target === node.id);
                const pos = getNodeCoordinates(node.id);

                return (
                  <g
                    key={node.id}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    className="cursor-pointer select-none transition-all duration-700 ease-out"
                    onClick={() => { setActiveNodeId(node.id); setHoveredNodeId(node.id); }}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                  >
                    {/* Active Reticle Hairline Aperture */}
                    {isCurrent && (
                      <g stroke={node.color} strokeWidth="0.25" fill="none" opacity="0.9">
                        <circle r="5.6" strokeDasharray="1.2 1" className="animate-spin-slow origin-center" />
                        <path d="M -5.8 -4.2 L -5.8 -5.8 L -4.2 -5.8" />
                        <path d="M 5.8 -4.2 L 5.8 -5.8 L 4.2 -5.8" />
                        <path d="M -5.8 4.2 L -5.8 5.8 L -4.2 5.8" />
                        <path d="M 5.8 4.2 L 5.8 5.8 L 4.2 5.8" />
                      </g>
                    )}

                    {/* Connected Orbit Ring */}
                    {isConnected && !isCurrent && (
                      <circle
                        r="4.8"
                        fill="none"
                        stroke={node.color}
                        strokeWidth="0.18"
                        strokeDasharray="0.6 0.6"
                        opacity="0.4"
                      />
                    )}

                    {/* Outer Ambient Border Frame */}
                    <rect
                      x="-3.8"
                      y="-2.6"
                      width="7.6"
                      height="5.2"
                      rx="1.3"
                      fill={isCurrent ? '#0F172A' : isConnected ? '#0A101D' : '#070C16'}
                      stroke={isCurrent ? node.color : isConnected ? `${node.color}90` : '#334155'}
                      strokeWidth={isCurrent ? 0.5 : isConnected ? 0.35 : 0.2}
                      filter={isCurrent ? 'url(#glow-subtle)' : 'none'}
                      className="transition-colors duration-300"
                    />

                    {/* Top Glyph Icon */}
                    <g transform="translate(0, -0.6)">
                      {renderGlyph(node.id, isCurrent ? node.color : isConnected ? '#E2E8F0' : '#94A3B8')}
                    </g>

                    {/* Heartbeat Status LED Pip (Top Right) */}
                    <circle
                      cx="2.6"
                      cy="-1.6"
                      r="0.4"
                      fill={node.color}
                      className={isCurrent ? 'animate-pulse' : ''}
                    />

                    {/* Integrated Micro-Typography Tool Name */}
                    <text
                      x="0"
                      y="1.8"
                      textAnchor="middle"
                      fill={isCurrent ? '#FFFFFF' : isConnected ? '#F8FAFC' : '#94A3B8'}
                      fontSize={node.name.length > 9 ? 0.95 : 1.1}
                      fontWeight={isCurrent ? 'bold' : '600'}
                      fontFamily="system-ui, -apple-system, sans-serif"
                      letterSpacing="0.01px"
                      className="pointer-events-none select-none"
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Bottom Canvas Telemetry Bar */}
          <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400 pointer-events-none border-t border-slate-800/80 pt-1.5">
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>COORDS: [X: {getNodeCoordinates(activeNode.id).x.toFixed(1)}%, Y: {getNodeCoordinates(activeNode.id).y.toFixed(1)}%]</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">MODE: {viewMode.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-1 text-cyan-400">
              <Target className="w-3 h-3" />
              <span>CLICK MODULE TO LOCK</span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. RETICLE TELEMETRY SIDEBAR */}
        {/* ======================================================== */}
        <div className="lg:col-span-4 bg-[#0A0E1A] border border-slate-800 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between space-y-4 shadow-xl">
          <div className="space-y-4">
            
            {/* Header Badge */}
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-cyan-300">
                  SECTOR: {activeNode.category.toUpperCase()}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: activeNode.color }} />
                  <span className="text-[10px] font-mono text-emerald-400">HEALTH: OPTIMAL</span>
                </div>
              </div>

              <h4 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span>{activeNode.name}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                  v-CORE
                </span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">
                {activeNode.description}
              </p>
            </div>

            {/* Neural Synergy Connections List */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Share2 className="w-3 h-3 text-cyan-400" />
                  <span>Verified Synapse Links ({connectedEdges.length})</span>
                </span>
                <span className="text-[10px] text-slate-500">BANDWIDTH: 100 Gbps</span>
              </div>

              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 scrollbar-none font-mono text-xs">
                {connectedEdges.length === 0 ? (
                  <p className="text-xs text-slate-500 italic">No direct connections mapped in current filter.</p>
                ) : (
                  connectedEdges.map((edge, idx) => {
                    const otherNodeId = edge.source === activeNode.id ? edge.target : edge.source;
                    const otherNode = ECOSYSTEM_NODES.find(n => n.id === otherNodeId);
                    const isOutbound = edge.source === activeNode.id;

                    return (
                      <div 
                        key={idx}
                        onClick={() => { setActiveNodeId(otherNodeId); setHoveredNodeId(otherNodeId); }}
                        className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-white mb-0.5">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: otherNode?.color || '#38BDF8' }} />
                            <span className="group-hover:text-cyan-300 transition-colors">{otherNode?.name}</span>
                          </div>
                          <span className="text-[10px] text-cyan-400 font-mono">
                            {isOutbound ? 'OUTBOUND →' : '← INBOUND'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-sans group-hover:text-slate-300 leading-tight">
                          {edge.relationship}
                        </p>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Live Telemetry Terminal */}
            <div className="p-3 rounded-2xl bg-[#050811] border border-slate-800/80 font-mono text-[10px] text-slate-400 space-y-1">
              <div className="text-[9px] uppercase font-bold text-slate-500">Telemetry Stream:</div>
              {telemetryLog.map((log, i) => (
                <div key={i} className="truncate text-cyan-300/90">
                  &gt; {log}
                </div>
              ))}
            </div>
          </div>

          {/* CTA to open package page */}
          <button
            onClick={() => navigateToTool(activeNode.id)}
            className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all cursor-pointer hover:scale-[1.02]"
          >
            <span>Open {activeNode.name} Package Engine</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
