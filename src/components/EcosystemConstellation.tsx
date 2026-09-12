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
  ShieldCheck, 
  Radar,
  Zap,
  Target
} from 'lucide-react';

export const EcosystemConstellation: React.FC = () => {
  const { navigateToTool } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>('gemini');
  const [activeNodeId, setActiveNodeId] = useState<string>('gemini');

  // Futuristic Interactive Features
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isAutoTouring, setIsAutoTouring] = useState<boolean>(false);
  const [isRadarScanning, setIsRadarScanning] = useState<boolean>(false);
  const [dataPacketActive, setDataPacketActive] = useState<boolean>(false);
  const [telemetryLog, setTelemetryLog] = useState<string[]>(['INITIALIZED QUANTUM GRAPH MATRIX', 'NODES SYNCHRONIZED: 22 / 22']);
  
  // 3D Parallax Tilt state
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

  const getNodeCoordinates = (nodeId: string) => {
    const node = ECOSYSTEM_NODES.find(n => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 50, y: 50 };
  };

  // Parallax mouse move handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Trigger Radar Ping
  const triggerRadarPulse = () => {
    setIsRadarScanning(true);
    addLog(`RADAR PULSE INITIATED: SCANNING SECTOR [${activeNode.category.toUpperCase()}]`);
    setTimeout(() => setIsRadarScanning(false), 2400);
  };

  // Dispatch Quantum Data Packet
  const dispatchDataPacket = () => {
    setDataPacketActive(true);
    addLog(`DATA PACKET STREAMING: ${activeNode.name.toUpperCase()} -> ${connectedEdges.length} SYNERGIES`);
    setTimeout(() => {
      setDataPacketActive(false);
      addLog(`DATA PACKET ACKNOWLEDGED (RTT: 8.4ms)`);
    }, 2800);
  };

  const addLog = (msg: string) => {
    setTelemetryLog(prev => [msg, ...prev.slice(0, 3)]);
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

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-[#070A13] text-white rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden transition-all duration-300"
    >
      {/* ======================================================== */}
      {/* 1. SCI-FI CYBERNETIC BACKGROUND GRID & NEON ORBS */}
      {/* ======================================================== */}
      {/* Cyber Grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
          transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`
        }}
      />

      {/* Floating deep-space nebula glow orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Top HUD Telemetry Status Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-cyan-500/20 font-mono text-[11px] text-cyan-400">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-bold">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>SYS.MATRIX: ONLINE</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <span>LOCK: <strong className="text-white">[{activeNode.name.toUpperCase()}]</strong></span>
            <span>•</span>
            <span>CHANNELS: <strong className="text-emerald-400">{connectedEdges.length} ACTIVE</strong></span>
          </div>
        </div>

        {/* HUD Quick Tools */}
        <div className="flex items-center gap-2">
          {/* Radar scan button */}
          <button
            onClick={triggerRadarPulse}
            disabled={isRadarScanning}
            className="px-3 py-1 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm hover:shadow-cyan-500/20"
          >
            <Radar className={`w-3.5 h-3.5 ${isRadarScanning ? 'animate-spin text-cyan-200' : 'text-cyan-400'}`} />
            <span>{isRadarScanning ? 'Scanning...' : 'Sonar Pulse'}</span>
          </button>

          {/* Simulate Data Packet */}
          <button
            onClick={dispatchDataPacket}
            disabled={dataPacketActive}
            className="px-3 py-1 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-500/40 text-indigo-300 font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
          >
            <Zap className={`w-3.5 h-3.5 ${dataPacketActive ? 'text-amber-300 animate-bounce' : 'text-indigo-400'}`} />
            <span>{dataPacketActive ? 'Streaming...' : 'Send Packet'}</span>
          </button>

          {/* Autopilot Tour */}
          <button
            onClick={() => setIsAutoTouring(!isAutoTouring)}
            className={`px-3 py-1 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              isAutoTouring 
                ? 'bg-amber-500/20 border-amber-500 text-amber-300' 
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            {isAutoTouring ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isAutoTouring ? 'Pause Tour' : 'Auto Tour'}</span>
          </button>
        </div>
      </div>

      {/* Headline & Filter Header */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
            <Network className="w-4 h-4 text-cyan-400" />
            <span>Holographic Google Synapse Grid</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
            <span>Interactive Constellation</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono">
              LIVE 3D RETICLE
            </span>
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Navigate the interconnected topology of Google technologies. Hover to inspect neural data flows or lock targets to inspect enterprise integrations.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-cyan-500/20 backdrop-blur-md">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MAIN HOLOGRAPHIC CANVAS WITH 3D TILT */}
      {/* ======================================================== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Canvas Area with Zoom Controls */}
        <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#050811]/90 rounded-3xl border border-cyan-500/30 p-4 select-none overflow-hidden shadow-inner group">
          
          {/* Zoom controls floating buttons */}
          <div className="absolute top-3 right-3 z-30 flex flex-col gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md">
            <button 
              onClick={() => setZoomLevel(prev => Math.min(1.4, prev + 0.1))} 
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => setZoomLevel(prev => Math.max(0.8, prev - 0.1))} 
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => { setZoomLevel(1); setMousePos({ x: 0, y: 0 }); }} 
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              title="Reset View"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Radar scanning circular shockwave animation */}
          {isRadarScanning && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-cyan-400 animate-ping opacity-75" />
              <div className="w-36 h-36 rounded-full border border-cyan-400/50 animate-ping opacity-50 duration-1000" />
              <div className="w-72 h-72 rounded-full border border-cyan-400/30 animate-ping opacity-25 duration-1500" />
            </div>
          )}

          {/* SVG Vector Canvas */}
          <div 
            className="w-full h-full transition-transform duration-200 ease-out"
            style={{
              transform: `scale(${zoomLevel}) translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
              transformOrigin: 'center center'
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                {/* Futuristic neon glow filters */}
                <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="0.8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glow-laser" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="1.2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Gradients */}
                <linearGradient id="laser-edge" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#8A2BE2" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#00FF88" stopOpacity="0.9" />
                </linearGradient>

                <linearGradient id="idle-edge" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E293B" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#334155" stopOpacity="0.5" />
                </linearGradient>
              </defs>

              {/* Background Crosshair Coordinates */}
              <g opacity="0.15" stroke="#00F0FF" strokeWidth="0.2">
                <line x1="10" y1="50" x2="90" y2="50" strokeDasharray="1 3" />
                <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="1 3" />
                <circle cx="50" cy="50" r="30" fill="none" strokeDasharray="1 4" />
                <circle cx="50" cy="50" r="45" fill="none" strokeDasharray="2 6" />
              </g>

              {/* Render Edges */}
              {ECOSYSTEM_EDGES.map((edge, idx) => {
                const from = getNodeCoordinates(edge.source);
                const to = getNodeCoordinates(edge.target);
                const highlighted = isEdgeHighlighted(edge.source, edge.target);

                return (
                  <g key={idx}>
                    {/* Underlying line */}
                    <line
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke={highlighted ? 'url(#laser-edge)' : '#1E293B'}
                      strokeWidth={highlighted ? 0.9 : 0.25}
                      strokeDasharray={highlighted ? 'none' : '0.8 0.8'}
                      filter={highlighted ? 'url(#glow-laser)' : 'none'}
                      className={`transition-all duration-300 ${highlighted ? 'opacity-100' : 'opacity-30'}`}
                    />

                    {/* Animated Energy Photons traveling along highlighted edges */}
                    {highlighted && (
                      <g>
                        {/* Photon 1 */}
                        <circle r="0.75" fill="#00F0FF" filter="url(#glow-cyan)">
                          <animateMotion
                            path={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                            dur="2.4s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        {/* Photon 2 opposite */}
                        <circle r="0.55" fill="#00FF88">
                          <animateMotion
                            path={`M ${to.x} ${to.y} L ${from.x} ${from.y}`}
                            dur="3.2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>
                    )}

                    {/* Additional Packet streaming pulse when user triggers "Send Packet" */}
                    {dataPacketActive && highlighted && (
                      <circle r="1.2" fill="#FFD700" filter="url(#glow-laser)">
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

              {/* Render Nodes */}
              {filteredNodes.map((node: EcosystemNode) => {
                const isCurrent = node.id === activeNode.id;
                const isConnected = connectedEdges.some(e => e.source === node.id || e.target === node.id);

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    className="cursor-pointer transition-transform duration-200"
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onClick={() => { setActiveNodeId(node.id); setHoveredNodeId(node.id); }}
                  >
                    {/* Futuristic Target Reticle Bracket for Active Node */}
                    {isCurrent && (
                      <g stroke="#00F0FF" strokeWidth="0.3" fill="none" opacity="0.9">
                        {/* Rotating Outer Hex/Circle */}
                        <circle
                          r="4.8"
                          strokeDasharray="1.2 0.8"
                          className="animate-spin-slow"
                        />
                        {/* Corner Reticles */}
                        <path d="M -5.5 -3.5 L -5.5 -5.5 L -3.5 -5.5" />
                        <path d="M 5.5 -3.5 L 5.5 -5.5 L 3.5 -5.5" />
                        <path d="M -5.5 3.5 L -5.5 5.5 L -3.5 5.5" />
                        <path d="M 5.5 3.5 L 5.5 5.5 L 3.5 5.5" />
                      </g>
                    )}

                    {/* Orbiting Electron Satellite for connected nodes */}
                    {isConnected && !isCurrent && (
                      <circle
                        r="3.4"
                        fill="none"
                        stroke={node.color}
                        strokeWidth="0.2"
                        strokeDasharray="0.6 0.6"
                        opacity="0.5"
                      />
                    )}

                    {/* Glow backdrop circle */}
                    <circle
                      r={isCurrent ? 3.2 : isConnected ? 2.5 : 2.0}
                      fill={node.color}
                      opacity={isCurrent ? 0.9 : isConnected ? 0.7 : 0.4}
                      filter="url(#glow-cyan)"
                      className="transition-all hover:scale-125"
                    />

                    {/* Solid center core */}
                    <circle
                      r={isCurrent ? 1.6 : 1.2}
                      fill="#FFFFFF"
                    />

                    {/* Node Text Label with Cyber drop shadow */}
                    <text
                      x="0"
                      y={isCurrent ? 4.6 : 3.8}
                      textAnchor="middle"
                      fill={isCurrent ? '#00F0FF' : isConnected ? '#FFFFFF' : '#94A3B8'}
                      fontSize={isCurrent ? 2.4 : 1.8}
                      fontWeight={isCurrent ? 'bold' : 'normal'}
                      fontFamily="monospace"
                      letterSpacing="0.05px"
                      className="pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none"
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Bottom HUD Coordinates Telemetry */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-cyan-500/80 pointer-events-none border-t border-cyan-500/20 pt-1.5">
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>POS: [X: {activeNode.x.toFixed(1)}%, Y: {activeNode.y.toFixed(1)}%]</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">FREQUENCY: 5.2 GHz</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Target className="w-3 h-3 text-cyan-400" />
              <span>CLICK TO LOCK RETICLE</span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. FUTURISTIC RETICLE TELEMETRY SIDEBAR */}
        {/* ======================================================== */}
        <div className="lg:col-span-4 bg-[#0B101E]/90 border border-cyan-500/30 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between space-y-4 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
          <div className="space-y-4">
            
            {/* Holographic Header Card */}
            <div className="border-b border-cyan-500/20 pb-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                  SECTOR: {activeNode.category.toUpperCase()}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: activeNode.color }} />
                  <span className="text-[10px] font-mono text-emerald-400">STATUS: OPTIMAL</span>
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
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Share2 className="w-3 h-3" />
                  <span>Verified Neural Links ({connectedEdges.length})</span>
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
                        className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/60 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-white mb-0.5">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: otherNode?.color || '#00F0FF' }} />
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

            {/* Live Telemetry Log Terminal */}
            <div className="p-3 rounded-2xl bg-[#050811] border border-cyan-500/20 font-mono text-[10px] text-slate-400 space-y-1">
              <div className="text-[9px] uppercase font-bold text-cyan-500">Live Telemetry Terminal:</div>
              {telemetryLog.map((log, i) => (
                <div key={i} className="truncate text-cyan-300/90">
                  &gt; {log}
                </div>
              ))}
            </div>
          </div>

          {/* CTA to open full package page */}
          <button
            onClick={() => navigateToTool(activeNode.id)}
            className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer hover:scale-[1.02]"
          >
            <span>Open {activeNode.name} Package Engine</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
