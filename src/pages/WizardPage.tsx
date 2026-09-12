import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ToolCard } from '../components/ToolCard';
import { LEARNING_PATHS_DATA } from '../data/learningPathsData';
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Lightbulb, 
  HelpCircle, 
  Compass, 
  GraduationCap 
} from 'lucide-react';

export const WizardPage: React.FC = () => {
  const { allTools, navigateToTool, navigateToPath } = useApp();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [goal, setGoal] = useState<string>('Build an app');
  const [experience, setExperience] = useState<string>('Beginner');
  const [platform, setPlatform] = useState<string>('Browser');
  const [priority, setPriority] = useState<string>('Free tools');

  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  const goalOptions = [
    { label: 'Build a Mobile or Web App', value: 'Build an app', icon: '📱' },
    { label: 'Create AI Content or Chatbots', value: 'Create AI content', icon: '✨' },
    { label: 'Analyse & Visualize Data', value: 'Analyse data', icon: '📊' },
    { label: 'Deploy & Host Software in the Cloud', value: 'Deploy software', icon: '☁️' },
    { label: 'Learn Coding & Computer Science', value: 'Learn coding', icon: '🎓' },
    { label: 'Store Files & Database Records', value: 'Store data', icon: '💾' },
    { label: 'Automate Business Workflows', value: 'Automate work', icon: '⚡' },
    { label: 'Build & Optimize Websites', value: 'Build a website', icon: '🌐' },
  ];

  const experienceOptions = [
    { label: 'Beginner', desc: 'Little to no coding experience, prefers zero-setup UI tools' },
    { label: 'Intermediate', desc: 'Comfortable with programming (Python, JS) and CLI commands' },
    { label: 'Advanced', desc: 'Experienced software engineer or DevOps/ML specialist' },
  ];

  const platformOptions = [
    { label: 'Browser (Zero Local Setup)', value: 'Browser' },
    { label: 'Mobile (iOS & Android)', value: 'Mobile' },
    { label: 'Desktop / Terminal (Local Machine)', value: 'Desktop' },
    { label: 'Google Cloud Platform (Cloud VMs)', value: 'Cloud' },
    { label: 'REST / Programmatic SDK APIs', value: 'API' },
  ];

  const priorityOptions = [
    { label: '100% Free / Generous Free Tier', value: 'Free tools' },
    { label: 'Fastest & Easiest to Use', value: 'Easy to use' },
    { label: 'Professional Production Development', value: 'Professional development' },
    { label: 'Enterprise Security & Scale', value: 'Enterprise scale' },
    { label: 'Foundational Learning & Education', value: 'Learning' },
  ];

  // Recommendation Engine logic
  const calculateRecommendation = () => {
    let primaryToolId = 'google-ai-studio';
    let reasons: string[] = [];
    let altToolIds: string[] = [];
    let learningPathId = 'ai-beginner-path';

    if (goal === 'Create AI content') {
      if (experience === 'Beginner' && platform === 'Browser') {
        primaryToolId = 'gemini';
        reasons = [
          'Gemini offers zero-setup conversational multimodal AI in the browser.',
          'Processes text, documents, audio, and video directly with no API keys needed.',
          'Provides grounded Google Search verification and export to Google Docs.'
        ];
        altToolIds = ['notebooklm', 'google-ai-studio'];
        learningPathId = 'ai-beginner-path';
      } else if (priority === 'Enterprise scale' || experience === 'Advanced') {
        primaryToolId = 'vertex-ai';
        reasons = [
          'Vertex AI provides enterprise VPC governance, fine-tuning, and SLA guarantees.',
          'Hosts Gemini, Imagen, and open models with custom evaluation benchmarks.',
          'Seamlessly connects to BigQuery and corporate Cloud Storage data lakes.'
        ];
        altToolIds = ['gemini-api', 'google-ai-studio'];
        learningPathId = 'ai-beginner-path';
      } else {
        primaryToolId = 'google-ai-studio';
        reasons = [
          'AI Studio offers instant browser prototyping with temperature and system instructions.',
          'Free tier with rate limits and 1-click code export to Python and TypeScript.',
          'Allows testing structured JSON schemas and function calling signatures.'
        ];
        altToolIds = ['gemini-api', 'gemini'];
        learningPathId = 'ai-beginner-path';
      }
    } else if (goal === 'Build an app') {
      if (platform === 'Mobile' || priority === 'Professional development') {
        primaryToolId = 'flutter';
        reasons = [
          'Flutter builds natively compiled iOS, Android, Web, and Desktop apps from a single codebase.',
          'Sub-second Stateful Hot Reload accelerates UI experimentation dramatically.',
          'Includes official Material 3 and Cupertino widgets with 120 FPS Impeller graphics.'
        ];
        altToolIds = ['android-studio', 'firebase', 'dart'];
        learningPathId = 'app-developer-path';
      } else {
        primaryToolId = 'firebase';
        reasons = [
          'Firebase gives you instantaneous user authentication, real-time database, and hosting.',
          'Eliminates the need to maintain server infrastructure or write custom backend boilerplate.',
          'Includes generous always-free Spark plan tiers.'
        ];
        altToolIds = ['cloud-run', 'flutter'];
        learningPathId = 'app-developer-path';
      }
    } else if (goal === 'Analyse data') {
      if (experience === 'Beginner' || priority === 'Easy to use') {
        primaryToolId = 'looker-studio';
        reasons = [
          'Looker Studio is completely free and requires zero SQL or programming experience.',
          'Features drag-and-drop charts, scorecards, and interactive date filters.',
          'Connects directly to Google Sheets, BigQuery, and Google Analytics in seconds.'
        ];
        altToolIds = ['google-sheets', 'bigquery'];
        learningPathId = 'data-analyst-path';
      } else {
        primaryToolId = 'bigquery';
        reasons = [
          'BigQuery is Google’s serverless petabyte data warehouse with 1TB/month free query tier.',
          'Executes fast SQL queries over billions of rows without server provisioning.',
          'Features built-in BigQuery ML to train machine learning models using standard SQL.'
        ];
        altToolIds = ['looker-studio', 'google-colab'];
        learningPathId = 'data-analyst-path';
      }
    } else if (goal === 'Deploy software') {
      if (priority === 'Enterprise scale' || experience === 'Advanced') {
        primaryToolId = 'kubernetes-engine';
        reasons = [
          'GKE provides Google-grade managed Kubernetes with automated node upgrades and Autopilot.',
          'Handles multi-cluster enterprise deployments with seamless VPC networking.',
          'Offers container-native load balancing and multi-cloud Anthos meshes.'
        ];
        altToolIds = ['cloud-run', 'google-cloud'];
        learningPathId = 'cloud-developer-path';
      } else {
        primaryToolId = 'cloud-run';
        reasons = [
          'Cloud Run lets you run containers written in any language with automatic scale-to-zero.',
          'Pay zero dollars when idle with 2 million free monthly requests.',
          'Automatically provisions secure HTTPS URLs and integrates with Git CI/CD.'
        ];
        altToolIds = ['google-cloud', 'firebase'];
        learningPathId = 'cloud-developer-path';
      }
    } else if (goal === 'Learn coding') {
      if (experience === 'Beginner') {
        primaryToolId = 'blockly';
        reasons = [
          'Blockly eliminates syntax errors by using interlocking visual coding blocks.',
          'Generates clean, readable Python and JavaScript code automatically.',
          'Used by millions of learners worldwide to master computational thinking.'
        ];
        altToolIds = ['google-colab', 'dart'];
        learningPathId = 'app-developer-path';
      } else {
        primaryToolId = 'google-colab';
        reasons = [
          'Google Colab provides free hosted Jupyter notebooks with access to free GPUs and TPUs.',
          'Pre-installed with PyTorch, TensorFlow, Scikit-learn, and Pandas.',
          'Saves directly to Google Drive and integrates with GitHub repositories.'
        ];
        altToolIds = ['tensorflow', 'dart'];
        learningPathId = 'ai-beginner-path';
      }
    } else if (goal === 'Store data') {
      if (experience === 'Beginner') {
        primaryToolId = 'firebase';
        reasons = [
          'Cloud Firestore provides a real-time NoSQL database with offline caching for web and mobile apps.',
          'Includes declarative security rules and generous free tier quotas.',
          'Connects directly to client applications with zero backend servers.'
        ];
        altToolIds = ['cloud-storage', 'bigquery'];
        learningPathId = 'app-developer-path';
      } else {
        primaryToolId = 'cloud-storage';
        reasons = [
          'Cloud Storage provides 11 nines of durability for unstructured object storage.',
          'Features multi-region replication and automatic lifecycle cost optimization.',
          'Supports temporary signed URLs and direct streaming into BigQuery.'
        ];
        altToolIds = ['bigquery', 'firebase'];
        learningPathId = 'cloud-developer-path';
      }
    } else {
      // Default: Google Workspace or Google Cloud Shell
      primaryToolId = 'google-cloud-shell';
      reasons = [
        'Cloud Shell gives you an instant, pre-authenticated Linux terminal directly in your browser.',
        'Comes with 5GB of persistent storage and pre-installed developer SDKs.',
        'Requires zero local computer setup or administrative privileges.'
      ];
      altToolIds = ['google-workspace', 'firebase'];
      learningPathId = 'cloud-developer-path';
    }

    const primaryTool = allTools.find(t => t.id === primaryToolId) || allTools[0];
    const alternativeTools = allTools.filter(t => altToolIds.includes(t.id));
    const suggestedLearningPath = LEARNING_PATHS_DATA.find(p => p.id === learningPathId);

    return {
      tool: primaryTool,
      reasons,
      alternatives: alternativeTools,
      suggestedLearningPath
    };
  };

  const result = isCalculated ? calculateRecommendation() : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Smart Technology Recommendation Engine</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Find the Right Google Tool
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Answer 4 simple questions. Our transparent decision engine will match your exact project goals with the best Google technology package.
        </p>
      </div>

      {!isCalculated ? (
        /* ======================================================== */
        /* WIZARD QUESTIONNAIRE */
        /* ======================================================== */
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-8">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 text-xs font-bold text-slate-400">
            <span>Step {currentStep} of 4</span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map(s => (
                <span
                  key={s}
                  className={`w-2 h-2 rounded-full transition-all ${
                    s === currentStep ? 'w-6 bg-blue-600' : s < currentStep ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question 1: Goal */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  1. What do you want to accomplish?
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Select the core outcome you are trying to produce.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goalOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setGoal(opt.value)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                      goal === opt.value
                        ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 ring-2 ring-blue-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="font-bold text-xs">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 2: Experience */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  2. What is your technical experience level?
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">This ensures the tool recommendation matches your comfort zone.</p>
              </div>

              <div className="space-y-3">
                {experienceOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setExperience(opt.label)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      experience === opt.label
                        ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 ring-2 ring-blue-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="font-black text-sm text-slate-900 dark:text-white mb-1">{opt.label}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 3: Platform */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  3. What runtime platform do you prefer?
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Where do you want the tool or your project to operate?</p>
              </div>

              <div className="space-y-2.5">
                {platformOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setPlatform(opt.value)}
                    className={`w-full p-3.5 rounded-2xl border text-left font-bold text-xs transition-all cursor-pointer ${
                      platform === opt.value
                        ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 ring-2 ring-blue-500/20'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 4: Priority */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  4. What is your primary priority?
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">What matters most for this project right now?</p>
              </div>

              <div className="space-y-2.5">
                {priorityOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setPriority(opt.value)}
                    className={`w-full p-3.5 rounded-2xl border text-left font-bold text-xs transition-all cursor-pointer ${
                      priority === opt.value
                        ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 ring-2 ring-blue-500/20'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Back
              </button>
            ) : <div />}

            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep(prev => prev + 1)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-500/20"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => setIsCalculated(true)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-lg shadow-blue-500/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calculate Recommendation</span>
              </button>
            )}
          </div>

        </div>
      ) : (
        /* ======================================================== */
        /* RECOMMENDATION RESULTS VIEW */
        /* ======================================================== */
        result && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Recommendation Header Card */}
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  ★ Best Match Recommendation
                </span>
                <button
                  onClick={() => { setIsCalculated(false); setCurrentStep(1); }}
                  className="text-xs font-semibold text-white/80 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
                  {result.tool.name}
                </h2>
                <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
                  {result.tool.tagline}
                </p>
              </div>

              {/* Transparent Rationale */}
              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-md space-y-2 border border-white/15">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Why This Tool Matches Your Criteria</span>
                </div>
                <ul className="space-y-1.5 text-xs text-white/90">
                  {result.reasons.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-300 font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <button
                  onClick={() => navigateToTool(result.tool.id)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
                >
                  <span>Explore {result.tool.name} Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {result.suggestedLearningPath && (
                  <button
                    onClick={() => navigateToPath(result.suggestedLearningPath!.id)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold text-xs flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Follow Guided Path</span>
                  </button>
                )}
              </div>
            </div>

            {/* Alternative Tools */}
            {result.alternatives.length > 0 && (
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Other Worthwhile Options
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    Alternative Tools to Consider
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {result.alternatives.map(alt => (
                    <ToolCard key={alt.id} tool={alt} />
                  ))}
                </div>
              </div>
            )}

          </div>
        )
      )}

    </div>
  );
};
