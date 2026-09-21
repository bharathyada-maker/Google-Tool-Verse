import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GeminiDemo, BigQueryDemo, FirebaseDemo, CloudDeployDemo } from './InteractiveDemos';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Code, 
  Play, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  X, 
  GraduationCap, 
  Scale, 
  ExternalLink,
  Bot,
  Database,
  Cloud,
  Smartphone,
  BarChart3,
  Globe
} from 'lucide-react';

interface IntentBlueprintConfig {
  intentKey: string;
  icon: React.ElementType;
  color: string;
  title: string;
  tagline: string;
  recommendedStack: {
    role: string;
    toolId: string;
    toolName: string;
    description: string;
    iconColor: string;
  }[];
  interactiveDemoType: 'gemini' | 'bigquery' | 'firebase' | 'cloud-deploy';
  demoTitle: string;
  steps: {
    step: number;
    title: string;
    description: string;
    codeSnippet?: string;
    actionLabel?: string;
    actionToolId?: string;
  }[];
  learningPathId: string;
  learningPathTitle: string;
  comparePreset?: {
    tool1Id: string;
    tool2Id: string;
    label: string;
  };
}

const INTENT_BLUEPRINTS: Record<string, IntentBlueprintConfig> = {
  chatbot: {
    intentKey: 'chatbot',
    icon: Bot,
    color: '#4285F4',
    title: 'Building an AI Chatbot with Google Technologies',
    tagline: 'Recommended full-stack architecture combining multimodal reasoning, low-latency streaming, and real-time session persistence.',
    recommendedStack: [
      {
        role: 'AI Brain & Reasoning',
        toolId: 'gemini',
        toolName: 'Gemini 1.5 Flash',
        description: 'Fast, sub-second multimodal inference with 1M+ token context window.',
        iconColor: '#4285F4'
      },
      {
        role: 'Prototyping & System Prompt',
        toolId: 'google-ai-studio',
        toolName: 'Google AI Studio',
        description: 'Design chatbot personas, test temperature, and export clean API keys.',
        iconColor: '#1A73E8'
      },
      {
        role: 'Backend & Chat History',
        toolId: 'firebase',
        toolName: 'Firebase Firestore',
        description: 'Real-time NoSQL database to store conversation history and manage auth.',
        iconColor: '#FFA000'
      }
    ],
    interactiveDemoType: 'gemini',
    demoTitle: 'Test Your Chatbot Prompt in Gemini Sandbox',
    steps: [
      {
        step: 1,
        title: 'Design System Instructions in Google AI Studio',
        description: 'Set your chatbot persona (e.g. "You are an expert customer support agent for Google Cloud. Answer concisely.").',
        codeSnippet: `// Gemini 1.5 Flash Chatbot System Instruction:
const chat = ai.chats.create({
  model: 'gemini-1.5-flash',
  config: {
    systemInstruction: 'You are a helpful Google Toolverse technical assistant.',
    temperature: 0.7,
  }
});`
      },
      {
        step: 2,
        title: 'Send Conversational Messages with Streaming',
        description: 'Use the official Google Gen AI SDK to stream responses token-by-token for high user responsiveness.',
        codeSnippet: `const responseStream = await chat.sendMessageStream({
  message: 'How do I deploy a container to Cloud Run?'
});
for await (const chunk of responseStream) {
  process.stdout.write(chunk.text);
}`
      },
      {
        step: 3,
        title: 'Store User Sessions in Cloud Firestore',
        description: 'Save user query history in Firebase to support multi-turn conversations and context retrieval.',
        actionLabel: 'Explore Firebase Firestore',
        actionToolId: 'firebase'
      },
      {
        step: 4,
        title: 'Deploy Chatbot UI on Firebase Hosting or Cloud Run',
        description: 'Deploy your frontend with 1 command and connect a custom HTTPS domain with auto-renewing SSL.',
        actionLabel: 'Explore Cloud Run',
        actionToolId: 'cloud-run'
      }
    ],
    learningPathId: 'ai-beginner-path',
    learningPathTitle: 'Generative AI Practitioner Track',
    comparePreset: {
      tool1Id: 'google-ai-studio',
      tool2Id: 'vertex-ai',
      label: 'Compare AI Studio vs Vertex AI for Chatbots'
    }
  },

  database: {
    intentKey: 'database',
    icon: Database,
    color: '#34A853',
    title: 'Selecting & Implementing a Google Cloud Database',
    tagline: 'Architectural breakdown: Cloud Firestore for real-time mobile/web apps vs BigQuery for petabyte analytics.',
    recommendedStack: [
      {
        role: 'Real-Time App Database',
        toolId: 'firebase',
        toolName: 'Cloud Firestore',
        description: 'Document NoSQL with offline synchronization and client SDKs.',
        iconColor: '#FFA000'
      },
      {
        role: 'Analytical Data Warehouse',
        toolId: 'bigquery',
        toolName: 'BigQuery',
        description: 'Serverless petabyte SQL engine for reporting and business intelligence.',
        iconColor: '#4285F4'
      },
      {
        role: 'Unstructured File Storage',
        toolId: 'cloud-storage',
        toolName: 'Cloud Storage',
        description: 'Global object storage for images, videos, backups, and data lakes.',
        iconColor: '#34A853'
      }
    ],
    interactiveDemoType: 'bigquery',
    demoTitle: 'Run Live SQL Queries in BigQuery Studio',
    steps: [
      {
        step: 1,
        title: 'Determine Workload Type (OLTP vs OLAP)',
        description: 'Use Firestore if your app reads/writes individual user records. Use BigQuery if you run aggregate queries over millions of rows.'
      },
      {
        step: 2,
        title: 'Initialize Firestore in 3 Lines of Code',
        description: 'Set up real-time document listeners that trigger automatic UI updates when database records change.',
        codeSnippet: `import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
const db = getFirestore();
onSnapshot(collection(db, 'products'), (snapshot) => {
  const items = snapshot.docs.map(doc => doc.data());
  console.log('Live items:', items);
});`
      },
      {
        step: 3,
        title: 'Stream Events to BigQuery for Long-Term Insights',
        description: 'Export Firestore collections directly into BigQuery using the official Firebase extension for zero-code ETL.',
        actionLabel: 'Explore BigQuery Package',
        actionToolId: 'bigquery'
      }
    ],
    learningPathId: 'data-analyst-path',
    learningPathTitle: 'Modern Cloud Data Analyst Track',
    comparePreset: {
      tool1Id: 'firebase',
      tool2Id: 'google-cloud',
      label: 'Compare Firebase vs Google Cloud'
    }
  },

  deploy: {
    intentKey: 'deploy',
    icon: Cloud,
    color: '#4285F4',
    title: 'Deploying & Hosting Applications on Google Cloud',
    tagline: 'Modern serverless container deployment with scale-to-zero capability and automated HTTPS routing.',
    recommendedStack: [
      {
        role: 'Serverless Container Runtime',
        toolId: 'cloud-run',
        toolName: 'Cloud Run',
        description: 'Deploy any Docker container with automatic horizontal autoscaling.',
        iconColor: '#4285F4'
      },
      {
        role: 'Frontend & Static Hosting',
        toolId: 'firebase',
        toolName: 'Firebase Hosting',
        description: 'Global edge CDN for Single Page Apps (React, Flutter, Vue).',
        iconColor: '#FFA000'
      },
      {
        role: 'Enterprise Orchestration',
        toolId: 'kubernetes-engine',
        toolName: 'Google Kubernetes Engine',
        description: 'Managed Kubernetes for large-scale microservice clusters.',
        iconColor: '#34A853'
      }
    ],
    interactiveDemoType: 'cloud-deploy',
    demoTitle: 'Simulate Cloud Run Deployment Pipeline',
    steps: [
      {
        step: 1,
        title: 'Package Your Application in a Container',
        description: 'Write a standard Dockerfile or use Google Cloud Buildpacks to build an image automatically from source.',
        codeSnippet: `# Cloud Run CLI One-Liner Deploy:
gcloud run deploy my-api \\
  --source . \\
  --platform managed \\
  --region us-central1 \\
  --allow-unauthenticated`
      },
      {
        step: 2,
        title: 'Configure Traffic Splitting & Canary Rollouts',
        description: 'Safely test new container versions by splitting 10% of user traffic to revision 2 before 100% rollout.'
      },
      {
        step: 3,
        title: 'Connect Custom Domain with Managed SSL',
        description: 'Map your company domain with Google Cloud managing certificates and DNS resolution.'
      }
    ],
    learningPathId: 'cloud-architect-path',
    learningPathTitle: 'Serverless Cloud Architect Track'
  },

  mobile: {
    intentKey: 'mobile',
    icon: Smartphone,
    color: '#02569B',
    title: 'Building Cross-Platform Mobile Apps with Google',
    tagline: 'Single codebase targeting iOS, Android, Web, and Desktop with native performance.',
    recommendedStack: [
      {
        role: 'Multi-Platform UI Framework',
        toolId: 'flutter',
        toolName: 'Flutter',
        description: 'Declarative UI toolkit compiling to ARM machine code.',
        iconColor: '#02569B'
      },
      {
        role: 'Mobile Backend Services',
        toolId: 'firebase',
        toolName: 'Firebase (FlutterFire)',
        description: 'Authentication, Push Notifications, Crashlytics, and Remote Config.',
        iconColor: '#FFA000'
      },
      {
        role: 'Native Android IDE',
        toolId: 'android-studio',
        toolName: 'Android Studio',
        description: 'Official development environment with fast emulators and profilers.',
        iconColor: '#34A853'
      }
    ],
    interactiveDemoType: 'firebase',
    demoTitle: 'Interactive Firebase Backend Service Hub',
    steps: [
      {
        step: 1,
        title: 'Create a Flutter Project with 1 Command',
        description: 'Initialize a new project with built-in Material 3 and Cupertino iOS widgets.',
        codeSnippet: `flutter create my_super_app
cd my_super_app
flutter run`
      },
      {
        step: 2,
        title: 'Add Firebase Authentication & Firestore',
        description: 'Install FlutterFire CLI to automatically configure iOS and Android native credentials.',
        codeSnippet: `flutter pub add firebase_core firebase_auth cloud_firestore`
      },
      {
        step: 3,
        title: 'Test on Android Studio Device Emulators',
        description: 'Run on pixel-perfect virtual devices with stateful Hot Reload in under 500 milliseconds.'
      }
    ],
    learningPathId: 'mobile-dev-path',
    learningPathTitle: 'Cross-Platform App Developer Track',
    comparePreset: {
      tool1Id: 'flutter',
      tool2Id: 'android-studio',
      label: 'Compare Flutter vs Android Studio'
    }
  },

  data: {
    intentKey: 'data',
    icon: BarChart3,
    color: '#FBBC05',
    title: 'Analyzing & Visualizing Data with Google Technologies',
    tagline: 'Process billions of records in seconds with zero cluster management, and build executive dashboards.',
    recommendedStack: [
      {
        role: 'Serverless Data Warehouse',
        toolId: 'bigquery',
        toolName: 'BigQuery',
        description: 'Standard ANSI SQL querying petabyte datasets with built-in ML.',
        iconColor: '#4285F4'
      },
      {
        role: 'Interactive BI Dashboards',
        toolId: 'looker-studio',
        toolName: 'Looker Studio',
        description: 'Zero-code visual report designer with 800+ data connectors.',
        iconColor: '#FBBC05'
      },
      {
        role: 'Spreadsheet Integration',
        toolId: 'google-sheets',
        toolName: 'Connected Sheets',
        description: 'Analyze 10B+ BigQuery rows directly inside familiar Google Sheets.',
        iconColor: '#34A853'
      }
    ],
    interactiveDemoType: 'bigquery',
    demoTitle: 'Interactive BigQuery SQL Studio Playground',
    steps: [
      {
        step: 1,
        title: 'Query Public BigQuery Datasets',
        description: 'Run SQL over Google public datasets (Wikipedia pageviews, NOAA weather, crypto transactions) for free.'
      },
      {
        step: 2,
        title: 'Connect BigQuery to Looker Studio in 1 Click',
        description: 'Click "Explore with Looker Studio" from BigQuery to create bar charts, geographical maps, and KPI cards.'
      }
    ],
    learningPathId: 'data-analyst-path',
    learningPathTitle: 'Modern Cloud Data Analyst Track',
    comparePreset: {
      tool1Id: 'bigquery',
      tool2Id: 'looker-studio',
      label: 'Compare BigQuery vs Looker Studio'
    }
  },

  website: {
    intentKey: 'website',
    icon: Globe,
    color: '#EA4335',
    title: 'Building & Hosting Websites with Google Technologies',
    tagline: 'Fast, secure, globally distributed web hosting with serverless API microservices.',
    recommendedStack: [
      {
        role: 'Global Edge Hosting',
        toolId: 'firebase',
        toolName: 'Firebase Hosting',
        description: 'Ultra-fast SSD-backed edge CDN with free SSL and microservice rewrites.',
        iconColor: '#FFA000'
      },
      {
        role: 'Serverless Dynamic Backend',
        toolId: 'cloud-run',
        toolName: 'Cloud Run',
        description: 'Handles server-side rendering (Next.js, Nuxt) and dynamic APIs.',
        iconColor: '#4285F4'
      },
      {
        role: 'Performance Auditing',
        toolId: 'lighthouse',
        toolName: 'Google Lighthouse',
        description: 'Automated auditing for Core Web Vitals, SEO, and accessibility.',
        iconColor: '#0F9D58'
      }
    ],
    interactiveDemoType: 'cloud-deploy',
    demoTitle: 'Simulate Web Deployment Pipeline',
    steps: [
      {
        step: 1,
        title: 'Deploy Static Assets to Firebase Hosting',
        description: 'Publish your build folder to Google worldwide CDN with a single CLI command.',
        codeSnippet: `npm run build
firebase deploy --only hosting`
      },
      {
        step: 2,
        title: 'Audit Performance with Lighthouse',
        description: 'Inspect Core Web Vitals directly in Chrome DevTools to ensure 90+ performance scores.'
      }
    ],
    learningPathId: 'cloud-architect-path',
    learningPathTitle: 'Serverless Cloud Architect Track'
  }
};

export const getMatchingIntent = (query: string): IntentBlueprintConfig | null => {
  if (!query) return null;
  const q = query.toLowerCase();
  if (q.includes('chatbot') || q.includes('chat bot') || q.includes('ai bot') || q.includes('assistant')) {
    return INTENT_BLUEPRINTS.chatbot;
  }
  if (q.includes('database') || q.includes('store data') || q.includes('sql') || q.includes('nosql')) {
    return INTENT_BLUEPRINTS.database;
  }
  if (q.includes('deploy') || q.includes('hosting') || q.includes('cloud run') || q.includes('container')) {
    return INTENT_BLUEPRINTS.deploy;
  }
  if (q.includes('mobile') || q.includes('android') || q.includes('ios') || q.includes('flutter')) {
    return INTENT_BLUEPRINTS.mobile;
  }
  if (q.includes('data') || q.includes('analyse') || q.includes('analyze') || q.includes('analytics') || q.includes('dashboard')) {
    return INTENT_BLUEPRINTS.data;
  }
  if (q.includes('website') || q.includes('web app') || q.includes('web page')) {
    return INTENT_BLUEPRINTS.website;
  }
  return null;
};

interface InteractiveIntentBlueprintProps {
  intent: IntentBlueprintConfig;
  onClear: () => void;
}

export const InteractiveIntentBlueprint: React.FC<InteractiveIntentBlueprintProps> = ({
  intent,
  onClear
}) => {
  const { navigateToTool, navigateToPath, setCurrentRoute, toggleCompareTool, clearCompareTools } = useApp();
  const [showDemo, setShowDemo] = useState<boolean>(false);
  const [showSteps, setShowSteps] = useState<boolean>(true);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleComparePreset = () => {
    if (!intent.comparePreset) return;
    clearCompareTools();
    toggleCompareTool(intent.comparePreset.tool1Id);
    toggleCompareTool(intent.comparePreset.tool2Id);
    setCurrentRoute('compare');
  };

  const IconComponent = intent.icon;

  return (
    <div className="bg-gradient-to-br from-blue-900/20 via-slate-900 to-indigo-950/30 rounded-3xl border border-blue-500/30 p-5 sm:p-7 shadow-2xl space-y-6 animate-in fade-in slide-in-from-top-3 duration-200">
      
      {/* Blueprint Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-800">
        <div className="flex items-start gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0 shadow-inner">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                ⚡ Interactive Solution Blueprint
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {intent.title}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {intent.tagline}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-start shrink-0">
          <button
            onClick={onClear}
            className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
            <span>Clear Blueprint</span>
          </button>
        </div>
      </div>

      {/* Recommended 3-Stage Architecture Stack */}
      <div className="space-y-2.5">
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-blue-400" />
          <span>Recommended Google Production Stack:</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {intent.recommendedStack.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => navigateToTool(item.toolId)}
              className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all cursor-pointer group shadow-md"
            >
              <div className="text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                {item.role}
              </div>
              <div className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                <span>{item.toolName}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Live Action Controls */}
      <div className="flex flex-wrap items-center gap-2.5 pt-2">
        {/* Toggle Live Demo Button */}
        <button
          onClick={() => setShowDemo(!showDemo)}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer ${
            showDemo
              ? 'bg-blue-600 text-white shadow-blue-600/30'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
          }`}
        >
          <Play className={`w-3.5 h-3.5 fill-current ${showDemo ? 'text-white' : 'text-blue-400'}`} />
          <span>{showDemo ? 'Hide Live Sandbox Demo' : `⚡ Launch: ${intent.demoTitle}`}</span>
        </button>

        {/* Toggle Steps Guide */}
        <button
          onClick={() => setShowSteps(!showSteps)}
          className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Code className="w-3.5 h-3.5 text-emerald-400" />
          <span>Step-by-Step Implementation Guide</span>
          {showSteps ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {/* Learning Path Link */}
        <button
          onClick={() => navigateToPath(intent.learningPathId)}
          className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <GraduationCap className="w-3.5 h-3.5 text-rose-400" />
          <span>{intent.learningPathTitle}</span>
          <ArrowRight className="w-3 h-3" />
        </button>

        {/* Compare preset link */}
        {intent.comparePreset && (
          <button
            onClick={handleComparePreset}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Scale className="w-3.5 h-3.5 text-purple-400" />
            <span>{intent.comparePreset.label}</span>
          </button>
        )}
      </div>

      {/* Embedded Live Sandbox Demo */}
      {showDemo && (
        <div className="pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-[11px] font-mono text-blue-400 font-bold uppercase mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Interactive Sandbox Environment:</span>
          </div>
          {intent.interactiveDemoType === 'gemini' && <GeminiDemo />}
          {intent.interactiveDemoType === 'bigquery' && <BigQueryDemo />}
          {intent.interactiveDemoType === 'firebase' && <FirebaseDemo />}
          {intent.interactiveDemoType === 'cloud-deploy' && <CloudDeployDemo />}
        </div>
      )}

      {/* Expandable Step-by-Step Walkthrough */}
      {showSteps && (
        <div className="pt-2 space-y-3 animate-in fade-in duration-150">
          <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>4-Step Implementation Walkthrough:</span>
          </div>

          <div className="space-y-3">
            {intent.steps.map((s, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold flex items-center justify-center">
                      {s.step}
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-white">
                      {s.title}
                    </h4>
                  </div>

                  {s.actionToolId && (
                    <button
                      onClick={() => navigateToTool(s.actionToolId!)}
                      className="text-xs text-blue-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>{s.actionLabel}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>

                <p className="text-xs text-slate-400 pl-8 leading-relaxed">
                  {s.description}
                </p>

                {s.codeSnippet && (
                  <div className="ml-8 relative">
                    <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-blue-300 overflow-x-auto">
                      <code>{s.codeSnippet}</code>
                    </pre>
                    <button
                      onClick={() => handleCopy(s.codeSnippet!, idx)}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      title="Copy snippet"
                    >
                      {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
