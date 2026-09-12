import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Sparkles, 
  Database, 
  Cloud, 
  Terminal, 
  Flame, 
  Check, 
  RefreshCw, 
  Code, 
  Layers, 
  ShieldCheck, 
  HardDrive, 
  CheckCircle2, 
  Lock, 
  User, 
  ArrowRight,
  Sliders
} from 'lucide-react';

// ==========================================
// 1. GEMINI PROMPT & REASONING SIMULATOR
// ==========================================
export const GeminiDemo: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('Explain how Gemini processes multimodal video and text in 3 concise bullet points.');
  const [modelTier, setModelTier] = useState<'flash' | 'pro'>('flash');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [streamedText, setStreamedText] = useState<string>('');
  const [temperature, setTemperature] = useState<number>(0.7);
  const [reasoningStep, setReasoningStep] = useState<number>(0);

  const presets = [
    { label: 'Multimodal Video Analysis', text: 'Explain how Gemini processes multimodal video and text in 3 concise bullet points.' },
    { label: 'Structured JSON Schema', text: 'Extract item, price, and warranty from receipt: "Purchased Pixel 9 Pro for $999 on Oct 12 with 2-year warranty".' },
    { label: 'Function Calling Tool Spec', text: 'Define a function call schema for `check_weather(city: string, unit: "C"|"F")` and simulate tool arguments.' }
  ];

  const simulatedOutputs: Record<string, { steps: string[]; response: string }> = {
    'Explain how Gemini processes multimodal video and text in 3 concise bullet points.': {
      steps: [
        'Decoding multimodal tokens into shared vector space...',
        'Attending across 2M token context memory graph...',
        'Synthesizing factual points with grounding guardrails...'
      ],
      response: `• **Shared Multimodal Latent Space**: Video frames and text prompts are encoded into unified continuous representations, eliminating separate speech/vision pipelines.
• **Long-Context Cross-Attention**: The transformer attends across hours of video footage and text queries simultaneously in its 2M+ working token memory.
• **Low-Latency Streaming**: Pre-trained sparse attention models generate fast responses with real-time token streaming and citation verification.`
    },
    'Extract item, price, and warranty from receipt: "Purchased Pixel 9 Pro for $999 on Oct 12 with 2-year warranty".': {
      steps: [
        'Parsing natural language entities...',
        'Validating against strict target JSON schema...',
        'Formatting serialized JSON payload...'
      ],
      response: `{\n  "status": "success",\n  "receipt": {\n    "item": "Pixel 9 Pro",\n    "price": 999.00,\n    "currency": "USD",\n    "purchase_date": "2024-10-12",\n    "warranty_duration_years": 2\n  }\n}`
    },
    'Define a function call schema for `check_weather(city: string, unit: "C"|"F")` and simulate tool arguments.': {
      steps: [
        'Inspecting tool declaration signature...',
        'Extracting query parameters (city, unit)...',
        'Emitting structured function invocation token...'
      ],
      response: `// Model emitted tool call:\n{\n  "functionCall": {\n    "name": "check_weather",\n    "args": {\n      "city": "Tokyo, Japan",\n      "unit": "C"\n    }\n  }\n}`
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setStreamedText('');
    setReasoningStep(1);

    // Get preset response or intelligently synthesize response based on user input
    let targetOutput = simulatedOutputs[prompt.trim()];
    if (!targetOutput) {
      const lower = prompt.toLowerCase();
      if (lower.includes('code') || lower.includes('python') || lower.includes('function') || lower.includes('script')) {
        targetOutput = {
          steps: ['Parsing programming intent...', 'Synthesizing syntax-validated AST...', 'Validating execution type safety...'],
          response: `# Gemini ${modelTier === 'flash' ? '1.5 Flash' : '1.5 Pro'} Code Generation (Temp: ${temperature})\ndef analyze_multimodal_stream(video_uri: str, query: str) -> dict:\n    """\n    Streams video chunks to Gemini multimodal encoder and queries with cross-attention.\n    """\n    response = gemini_client.models.generate_content(\n        model="gemini-1.5-${modelTier}",\n        contents=[Part.from_uri(video_uri), query]\n    )\n    return {"status": "success", "result": response.text}`
        };
      } else if (lower.includes('json') || lower.includes('schema') || lower.includes('extract')) {
        targetOutput = {
          steps: ['Identifying named entities...', 'Enforcing JSON schema constraints...', 'Serializing response...'],
          response: `{\n  "query": ${JSON.stringify(prompt)},\n  "confidence_score": 0.98,\n  "model": "gemini-1.5-${modelTier}",\n  "structured_entities": [\n    {"type": "domain_concept", "value": "Google Cloud & AI"},\n    {"type": "execution_mode", "value": "low-latency streaming"}\n  ]\n}`
        };
      } else {
        targetOutput = {
          steps: [
            'Tokenizing semantic input representations...',
            'Querying multimodal 2M context memory...',
            'Filtering safety guardrails and streaming response...'
          ],
          response: `• **Core Understanding**: Processed "${prompt.slice(0, 60)}${prompt.length > 60 ? '...' : ''}" using ${modelTier === 'flash' ? 'Gemini 1.5 Flash (low latency)' : 'Gemini 1.5 Pro (deep reasoning)'} with temperature ${temperature}.
• **Multimodal Cross-Attention**: Synthesizes inputs across text, video, audio, and code in a native shared embedding space with up to 2M tokens context.
• **Grounded Synthesis**: Delivers verified, low-latency reasoning output with built-in safety filtering and source attribution.`
        };
      }
    }

    // Step 1: Tokenize
    setTimeout(() => {
      setReasoningStep(2);
      // Step 2: Cross-Attention Memory
      setTimeout(() => {
        setReasoningStep(3);
        // Step 3: Stream Output
        setTimeout(() => {
          setReasoningStep(4);
          const fullText = targetOutput.response;
          let charIndex = 0;
          const streamInterval = setInterval(() => {
            // Advance by 3 characters per tick for smooth, authentic LLM streaming
            charIndex += 3;
            if (charIndex < fullText.length) {
              setStreamedText(fullText.slice(0, charIndex));
            } else {
              setStreamedText(fullText);
              clearInterval(streamInterval);
              setIsGenerating(false);
            }
          }, 15);
        }, 500);
      }, 500);
    }, 500);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white shadow-2xl space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">Gemini Interactive Model Sandbox</h4>
            <p className="text-[11px] text-slate-400">Live prompt testing & multimodal reasoning simulator</p>
          </div>
        </div>

        {/* Model Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
          <button
            onClick={() => setModelTier('flash')}
            className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              modelTier === 'flash' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Gemini 1.5 Flash
          </button>
          <button
            onClick={() => setModelTier('pro')}
            className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              modelTier === 'pro' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Gemini 1.5 Pro
          </button>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-semibold text-slate-400">Preset Prompts:</span>
        {presets.map((p, i) => (
          <button
            key={i}
            onClick={() => { setPrompt(p.text); setStreamedText(''); setReasoningStep(0); }}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700/60 cursor-pointer"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Prompt Textarea */}
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={3}
          className="w-full bg-slate-950/80 border border-slate-700 rounded-2xl p-3.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
          placeholder="Enter a prompt for Gemini..."
        />
        <div className="flex flex-wrap items-center justify-between gap-3 mt-2 px-1 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>Temperature: {temperature}</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-20 accent-blue-500 cursor-pointer"
            />
          </div>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold text-xs flex items-center gap-1.5 shadow-md cursor-pointer transition-all"
          >
            {isGenerating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-white" />}
            <span>{isGenerating ? 'Inferencing...' : 'Run Prompt'}</span>
          </button>
        </div>
      </div>

      {/* Reasoning Trace Stages */}
      {reasoningStep > 0 && (
        <div className="bg-slate-950/50 rounded-2xl p-3.5 border border-slate-800 space-y-2 text-xs">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Model Internal Execution & Reasoning Trace</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
            <div className={`p-2 rounded-xl border transition-colors ${
              reasoningStep >= 1 ? 'border-blue-500/50 bg-blue-950/30 text-blue-300' : 'border-slate-800 text-slate-600'
            }`}>
              1. Tokenize Multimodal Encoders
            </div>
            <div className={`p-2 rounded-xl border transition-colors ${
              reasoningStep >= 2 ? 'border-indigo-500/50 bg-indigo-950/30 text-indigo-300' : 'border-slate-800 text-slate-600'
            }`}>
              2. Cross-Attention Working Memory
            </div>
            <div className={`p-2 rounded-xl border transition-colors ${
              reasoningStep >= 3 ? 'border-emerald-500/50 bg-emerald-950/30 text-emerald-300' : 'border-slate-800 text-slate-600'
            }`}>
              3. Safety Filter & SSE Stream
            </div>
          </div>
        </div>
      )}

      {/* Output Stream Box */}
      {(streamedText || isGenerating) && (
        <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed shadow-inner">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[10px] text-slate-400">
            <span>Model Output Stream ({modelTier === 'flash' ? 'Gemini 1.5 Flash' : 'Gemini 1.5 Pro'})</span>
            <span className="text-emerald-400 font-semibold">Status: 200 OK</span>
          </div>
          {streamedText}
          {isGenerating && <span className="inline-block w-2 h-4 bg-blue-400 ml-1 animate-pulse" />}
        </div>
      )}
    </div>
  );
};

// ==========================================
// 2. BIGQUERY SQL PLAYGROUND DEMO
// ==========================================
export const BigQueryDemo: React.FC = () => {
  const [selectedDataset, setSelectedDataset] = useState<'wikipedia' | 'ecommerce'>('wikipedia');
  const [isQuerying, setIsQuerying] = useState<boolean>(false);
  const [executionStats, setExecutionStats] = useState<{ bytes: string; time: string; rows: number } | null>({
    bytes: '142.8 MB',
    time: '410 ms',
    rows: 5
  });

  const queries = {
    wikipedia: `SELECT \n  title,\n  views,\n  language_code,\n  DATE(date) AS view_date\nFROM \`bigquery-public-data.wikipedia.pageviews_2024\`\nWHERE views > 15000\nORDER BY views DESC\nLIMIT 5;`,
    ecommerce: `SELECT \n  product_category,\n  COUNT(order_id) AS total_orders,\n  ROUND(SUM(sale_price), 2) AS total_revenue_usd\nFROM \`bigquery-public-data.thelook_ecommerce.orders\`\nGROUP BY product_category\nORDER BY total_revenue_usd DESC\nLIMIT 5;`
  };

  const [queryCode, setQueryCode] = useState<string>(queries.wikipedia);

  const resultsData = {
    wikipedia: [
      { title: 'Artificial intelligence', views: '284,910', language: 'en', date: '2024-05-14' },
      { title: 'Generative pre-trained transformer', views: '198,240', language: 'en', date: '2024-05-14' },
      { title: 'Quantum computing', views: '142,510', language: 'en', date: '2024-05-14' },
      { title: 'Google Gemini', views: '121,800', language: 'en', date: '2024-05-14' },
      { title: 'Kubernetes', views: '89,450', language: 'en', date: '2024-05-14' },
    ],
    ecommerce: [
      { category: 'Outerwear & Coats', orders: '12,840', revenue: '$1,482,900.00' },
      { category: 'Jeans & Denim', orders: '18,210', revenue: '$1,290,400.00' },
      { category: 'Sweaters & Cardigans', orders: '15,640', revenue: '$984,320.00' },
      { category: 'Accessories & Bags', orders: '24,190', revenue: '$874,100.00' },
      { category: 'Footwear & Boots', orders: '9,810', revenue: '$742,000.00' },
    ]
  };

  const handleDatasetChange = (ds: 'wikipedia' | 'ecommerce') => {
    setSelectedDataset(ds);
    setQueryCode(queries[ds]);
  };

  const handleRunQuery = () => {
    setIsQuerying(true);
    setExecutionStats(null);
    setTimeout(() => {
      setIsQuerying(false);
      setExecutionStats({
        bytes: selectedDataset === 'wikipedia' ? '142.8 MB' : '88.4 MB',
        time: selectedDataset === 'wikipedia' ? '410 ms' : '290 ms',
        rows: 5
      });
    }, 700);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white shadow-2xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">BigQuery SQL Studio Simulator</h4>
            <p className="text-[11px] text-slate-400">Serverless query engine over Google Cloud public datasets</p>
          </div>
        </div>

        {/* Dataset selector */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
          <button
            onClick={() => handleDatasetChange('wikipedia')}
            className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              selectedDataset === 'wikipedia' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Wikipedia Pageviews
          </button>
          <button
            onClick={() => handleDatasetChange('ecommerce')}
            className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              selectedDataset === 'ecommerce' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            E-Commerce Global Orders
          </button>
        </div>
      </div>

      {/* SQL Editor */}
      <div className="relative">
        <textarea
          value={queryCode}
          onChange={(e) => setQueryCode(e.target.value)}
          rows={5}
          className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-3 text-xs text-blue-300 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center justify-between mt-2">
          <div className="text-[11px] text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Syntax Valid. Estimated to process {selectedDataset === 'wikipedia' ? '142.8 MB' : '88.4 MB'}</span>
          </div>

          <button
            onClick={handleRunQuery}
            disabled={isQuerying}
            className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer shadow-md transition-colors"
          >
            {isQuerying ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-white" />}
            <span>{isQuerying ? 'Executing on Dremel...' : 'Execute Query'}</span>
          </button>
        </div>
      </div>

      {/* Execution Stats Pill */}
      {executionStats && (
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] bg-slate-950/80 px-4 py-2.5 rounded-xl border border-slate-800/80 text-slate-300">
          <div><span className="text-slate-500">Bytes Processed:</span> <strong className="text-white">{executionStats.bytes}</strong></div>
          <div><span className="text-slate-500">Slot Latency:</span> <strong className="text-white">{executionStats.time}</strong></div>
          <div><span className="text-slate-500">Rows Returned:</span> <strong className="text-emerald-400">{executionStats.rows}</strong></div>
        </div>
      )}

      {/* Result Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 touch-scroll">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800">
            {selectedDataset === 'wikipedia' ? (
              <tr>
                <th className="p-2.5">Title</th>
                <th className="p-2.5">Views</th>
                <th className="p-2.5">Language</th>
                <th className="p-2.5">Date</th>
              </tr>
            ) : (
              <tr>
                <th className="p-2.5">Product Category</th>
                <th className="p-2.5">Total Orders</th>
                <th className="p-2.5">Total Revenue (USD)</th>
              </tr>
            )}
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {selectedDataset === 'wikipedia' ? (
              resultsData.wikipedia.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40">
                  <td className="p-2.5 text-blue-400 font-semibold">{row.title}</td>
                  <td className="p-2.5 text-slate-200">{row.views}</td>
                  <td className="p-2.5 text-slate-400">{row.language}</td>
                  <td className="p-2.5 text-slate-400">{row.date}</td>
                </tr>
              ))
            ) : (
              resultsData.ecommerce.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40">
                  <td className="p-2.5 text-amber-400 font-semibold">{row.category}</td>
                  <td className="p-2.5 text-slate-200">{row.orders}</td>
                  <td className="p-2.5 text-emerald-400 font-bold">{row.revenue}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ==========================================
// 3. FIREBASE ARCHITECTURE DEMO
// ==========================================
export const FirebaseDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'auth' | 'firestore' | 'storage' | 'functions'>('auth');
  const [logs, setLogs] = useState<string[]>([
    'Initialized Firebase App [DEFAULT]',
    'Connected to Cloud Firestore (multi-region us-central1)',
    'Security rules loaded: request.auth != null enforced'
  ]);

  const addLog = (msg: string) => {
    setLogs(prev => [msg, ...prev.slice(0, 4)]);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white shadow-2xl space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">Firebase Architecture & Service Hub</h4>
            <p className="text-[11px] text-slate-400">Interactive client-to-cloud reactive services</p>
          </div>
        </div>
      </div>

      {/* Module Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          onClick={() => setActiveTab('auth')}
          className={`p-3 rounded-2xl border text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
            activeTab === 'auth' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>Authentication</span>
        </button>

        <button
          onClick={() => setActiveTab('firestore')}
          className={`p-3 rounded-2xl border text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
            activeTab === 'firestore' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>Firestore NoSQL</span>
        </button>

        <button
          onClick={() => setActiveTab('storage')}
          className={`p-3 rounded-2xl border text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
            activeTab === 'storage' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          <HardDrive className="w-4 h-4" />
          <span>Cloud Storage</span>
        </button>

        <button
          onClick={() => setActiveTab('functions')}
          className={`p-3 rounded-2xl border text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
            activeTab === 'functions' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>Cloud Functions</span>
        </button>
      </div>

      {/* Active Tab Simulation Playground */}
      <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 min-h-[140px] flex flex-col justify-between">
        {activeTab === 'auth' && (
          <div className="space-y-3 text-xs">
            <div className="text-slate-300">
              Simulate Google Identity OAuth token issuance and JWT claims:
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => addLog('Auth: signInWithPopup(GoogleAuthProvider) -> JWT token issued (uid: usr_8923a)')}
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-xs cursor-pointer transition-colors"
              >
                Simulate Google Sign-In
              </button>
              <button
                onClick={() => addLog('Auth: signOut() -> Cleared local session token cache')}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}

        {activeTab === 'firestore' && (
          <div className="space-y-3 text-xs">
            <div className="text-slate-300">
              Simulate real-time document write and `onSnapshot()` subscription broadcast:
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => addLog('Firestore: setDoc(doc(db, "chats/m_102"), { text: "Hello from Toolverse!" }) -> Emitted snapshot')}
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-xs cursor-pointer transition-colors"
              >
                Write Message Document
              </button>
              <button
                onClick={() => addLog('Firestore: Query cache refreshed (50 items cached in IndexedDB)')}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs cursor-pointer"
              >
                Trigger Offline Cache Sync
              </button>
            </div>
          </div>
        )}

        {activeTab === 'storage' && (
          <div className="space-y-3 text-xs">
            <div className="text-slate-300">
              Upload object to Cloud Storage bucket with client security rules verification:
            </div>
            <button
              onClick={() => addLog('Storage: uploadBytesResumable(ref, "avatar.png") -> 100% Uploaded in 84ms')}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-xs cursor-pointer transition-colors w-fit"
            >
              Simulate Image Upload
            </button>
          </div>
        )}

        {activeTab === 'functions' && (
          <div className="space-y-3 text-xs">
            <div className="text-slate-300">
              Serverless Eventarc trigger executing Node.js 20 runtime on Cloud Run:
            </div>
            <button
              onClick={() => addLog('Cloud Functions: onDocumentCreated("orders/{id}") triggered -> Dispatched welcome email in 120ms')}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-xs cursor-pointer transition-colors w-fit"
            >
              Invoke Backend Webhook
            </button>
          </div>
        )}

        {/* Live Event Stream */}
        <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 space-y-1">
          <div className="text-[10px] uppercase font-bold text-slate-500">Live Firebase Client Log:</div>
          {logs.map((log, i) => (
            <div key={i} className="truncate text-emerald-400">
              &gt; {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. CLOUD RUN DEPLOYMENT PIPELINE DEMO
// ==========================================
export const CloudDeployDemo: React.FC = () => {
  const [deployStep, setDeployStep] = useState<number>(0);
  const [isDeploying, setIsDeploying] = useState<boolean>(false);

  const startDeployment = () => {
    setIsDeploying(true);
    setDeployStep(1);

    setTimeout(() => {
      setDeployStep(2);
      setTimeout(() => {
        setDeployStep(3);
        setTimeout(() => {
          setDeployStep(4);
          setIsDeploying(false);
        }, 800);
      }, 800);
    }, 800);
  };

  const steps = [
    { num: 1, title: 'Build Source', desc: 'Docker / Buildpack compiles source files into container image' },
    { num: 2, title: 'Security Scan', desc: 'Artifact Registry scans image for CVE vulnerabilities' },
    { num: 3, title: 'Knative Provisioning', desc: 'Allocates serverless micro-VMs in selected region' },
    { num: 4, title: 'Route Ingress', desc: 'Provisions TLS certificate and routes global HTTPS URL' }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white shadow-2xl space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
            <Cloud className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">Cloud Run Serverless Deployment Pipeline</h4>
            <p className="text-[11px] text-slate-400">From local Git commit to autoscaling HTTPS endpoint</p>
          </div>
        </div>

        <button
          onClick={startDeployment}
          disabled={isDeploying}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer transition-all"
        >
          {isDeploying ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-white" />}
          <span>{isDeploying ? 'Deploying...' : 'Deploy to Cloud Run'}</span>
        </button>
      </div>

      {/* Step Pipeline Visualization */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        {steps.map((s) => {
          const isDone = deployStep > s.num || (deployStep === 4 && s.num === 4);
          const isCurrent = deployStep === s.num && isDeploying;

          return (
            <div
              key={s.num}
              className={`p-3.5 rounded-2xl border transition-all ${
                isDone 
                  ? 'border-emerald-500/50 bg-emerald-950/20 text-emerald-300' 
                  : isCurrent 
                  ? 'border-blue-500/80 bg-blue-950/40 text-blue-200 animate-pulse' 
                  : 'border-slate-800 bg-slate-950/60 text-slate-500'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-xs">Stage {s.num}</span>
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : isCurrent ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-400" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                )}
              </div>
              <h5 className="font-bold text-xs text-white mb-1">{s.title}</h5>
              <p className="text-[10px] leading-tight opacity-80">{s.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Terminal Output */}
      {deployStep > 0 && (
        <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
          <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">gcloud run deploy execution log:</div>
          <div className="text-slate-400">$ gcloud run deploy my-service --source . --region=us-central1</div>
          {deployStep >= 1 && <div className="text-blue-400">&gt; Building container image with Google Cloud Build... OK</div>}
          {deployStep >= 2 && <div className="text-blue-400">&gt; Container vulnerability scan completed (0 critical vulnerabilities)</div>}
          {deployStep >= 3 && <div className="text-blue-400">&gt; Setting traffic configuration to 100% on revision my-service-0001</div>}
          {deployStep >= 4 && (
            <div className="text-emerald-400 font-bold pt-2 border-t border-slate-800">
              ✔ Service [my-service] has been deployed and is serving 100% traffic at:
              <br />
              <a href="https://my-service-7128a-uc.a.run.app" target="_blank" rel="noreferrer" className="underline text-blue-400 break-all">
                https://my-service-7128a-uc.a.run.app
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
