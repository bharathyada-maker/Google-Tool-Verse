import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Flag, 
  ExternalLink, 
  BookOpen, 
  Info,
  Scale,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentRoute } = useApp();

  const verificationRules = [
    {
      rule: '1. Official Product Lineage',
      desc: 'Only tools, platforms, frameworks, and open-source models created by Google, Google DeepMind, Google Labs, or officially maintained by Google engineering teams are included.'
    },
    {
      rule: '2. Verifiable Source Citation',
      desc: 'Every tool entry is strictly backed by an official Google domain link (e.g. cloud.google.com, ai.google.dev, flutter.dev, tensorflow.org).'
    },
    {
      rule: '3. Factual Pricing & Limits',
      desc: 'Pricing details specify free tier thresholds, billing models, and credit quotas directly from current Google Cloud and Workspace documentation without speculative estimates.'
    },
    {
      rule: '4. Continuous Audit & "Last Verified" Timestamping',
      desc: 'Every product card features an explicit "Last Verified" date stamped against official releases and Google I/O announcements.'
    },
    {
      rule: '5. Transparent Lifecycle & Status Tagging',
      desc: 'Experimental projects (e.g. Veo) and preview releases are explicitly labelled to distinguish them from generally available (GA) enterprise services.'
    },
    {
      rule: '6. Community Discrepancy Reporting',
      desc: 'Users can click the dispute flag on any product package to submit corrections or report broken links, which are reviewed and verified in the Admin portal.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Integrity & Verification Pledge</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          About Google Toolverse
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Google Toolverse was created to convert Google’s vast, multi-layered technological ecosystem into simple, interactive discovery and learning experiences for students, engineers, founders, and creators.
        </p>
      </div>

      {/* Product Vision & Core Mission */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-sm">
        <h2 className="text-xl font-black text-slate-900 dark:text-white">
          The Problem We Solve
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Google has created hundreds of world-class technologies—from foundation AI models (Gemini, Gemma) and cloud infrastructure (Cloud Run, BigQuery) to mobile frameworks (Flutter, Jetpack Compose). However, navigating through documentation often feels overwhelming.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold text-blue-600 dark:text-blue-400">
          “Google has created so many tools and technologies. Which one should I use, what does it do, and how can I start using it?”
        </p>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Google Toolverse answers this question by packaging every tool with plain-English problem statements, target personas, interactive step-by-step architectural workflows, 6-step beginner tutorials, and side-by-side comparisons.
        </p>
      </div>

      {/* 6 Rules of Data Authenticity */}
      <div className="space-y-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            Data Integrity Standards
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Authenticity & Verification Methodology
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {verificationRules.map((rule, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2"
            >
              <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{rule.rule}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trademark Disclaimer */}
      <div className="p-4 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-500 leading-relaxed">
        <h4 className="font-bold text-slate-700 dark:text-slate-300 text-xs uppercase tracking-wider">
          Legal & Trademark Disclaimer
        </h4>
        <p>
          Google, Gemini, Android, Flutter, Firebase, BigQuery, TensorFlow, Angular, and Google Workspace are trademarks or registered trademarks of Google LLC.
        </p>
        <p>
          Google Toolverse is an independent educational product discovery project. It is not affiliated with, sponsored by, or endorsed by Google LLC. All product documentation and brand links direct users to official Google websites.
        </p>
      </div>

      {/* Bottom Quick Links */}
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          onClick={() => setCurrentRoute('catalog')}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer transition-colors"
        >
          <span>Explore All Tools</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => setCurrentRoute('how-it-works')}
          className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
        >
          <span>View How It Works Flows</span>
        </button>
      </div>

    </div>
  );
};
