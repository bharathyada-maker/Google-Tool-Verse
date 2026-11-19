export interface GoogleLiveUpdate {
  id: string;
  toolId: string;
  toolName: string;
  category: string;
  title: string;
  summary: string;
  pubDate: string;
  badge: 'Model Release' | 'Feature Drop' | 'Architecture' | 'SDK Update' | 'Security';
  officialUrl: string;
  isRecent?: boolean;
}

export const LAST_SYNCED_TIMESTAMP = '2026-11-19T23:58:39.111Z';
export const SYNC_STATUS: 'ONLINE' | 'SYNCING' | 'MAINTENANCE' = 'ONLINE';

export const LIVE_UPDATES_DATA: GoogleLiveUpdate[] = [
  {
    "id": "up-gemini-mwo7o6io-3tc8",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Multi-Turn Agentic Reinforcement Learning with Tunix and Gemma 4 on Google TPUs",
    "summary": "This post walks developers through training a multi-turn, tool-using LLM agent using Tunix and Gemma 4 on Cloud TPUs. By leveraging agentic Group Relative Policy Optimization (GRPO",
    "pubDate": "2026-11-19",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/multi-turn-agentic-reinforcement-learning-with-tunix-and-gemma-4-on-google-tpus/",
    "isRecent": true
  },
  {
    "id": "up-firebase-mwo7o6x2-zrur",
    "toolId": "firebase",
    "toolName": "Firebase",
    "category": "Cloud",
    "title": "Crashlytics for web is now in public preview",
    "summary": "Firebase Crashlytics now supports web apps: JavaScript error monitoring for Next.js, React, and Angular, with stack traces that point to the exact line.",
    "pubDate": "2026-11-19",
    "badge": "Feature Drop",
    "officialUrl": "https://firebase.blog/posts/2026/11/crashlytics-web-public-preview",
    "isRecent": true
  },
  {
    "id": "up-firebase-mwmrk8k9-0f5l",
    "toolId": "firebase",
    "toolName": "Firebase",
    "category": "Cloud",
    "title": "Google Analytics for Firebase iOS SDK outage on September 28, 2026",
    "summary": "Google&apos;s response to the Firebase iOS SDK outage on September 28, 2026.",
    "pubDate": "2026-10-02",
    "badge": "Feature Drop",
    "officialUrl": "https://firebase.blog/posts/2026/10/firebase-analytics-outage",
    "isRecent": true
  },
  {
    "id": "up-firebase-mwm8djdk-9knh",
    "toolId": "firebase",
    "toolName": "Firebase",
    "category": "Cloud",
    "title": "The Firebase plugin is now available in Codex",
    "summary": "The Firebase agent plugin provides access to Firebase agent skills, the Firebase MCP server, and the Firebase CLI, giving Codex the ability to build Firebase-powered apps with less",
    "pubDate": "2026-09-28",
    "badge": "Feature Drop",
    "officialUrl": "https://firebase.blog/posts/2026/09/firebase-plugin-for-codex",
    "isRecent": true
  },
  {
    "id": "up-gemini-mwld4hwa-fcuq",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Gemini 4 Hydrogen: a faster model for general purpose robotics",
    "summary": "Google's Gemini 4 Hydrogen brings strong spatial and embodied reasoning capabilities to a fast, efficient model built specifically for robotics. To help developers put these capabi",
    "pubDate": "2026-11-18",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/gemini-hydrogen-for-robotics/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mwld4hwa-xwc8",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Build full-stack Android apps with Gemini in Google AI Studio",
    "summary": "Google AI Studio now lets developers build, test, and ship full-stack Kotlin Android apps from a single prompt—complete with Cloud Firestore, Firebase Authentication, Firebase AI L",
    "pubDate": "2026-11-18",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/build-full-stack-android-apps-with-gemini-in-google-ai-studio/",
    "isRecent": true
  },
  {
    "id": "up-google-ai-studio-mwld4i35-ht32",
    "toolId": "google-ai-studio",
    "toolName": "Google Ai Studio",
    "category": "Cloud",
    "title": "Build full-stack Android apps with AI features using Google AI Studio and Firebase",
    "summary": "Official update published on Firebase Blog.",
    "pubDate": "2026-11-17",
    "badge": "Feature Drop",
    "officialUrl": "https://firebase.blog/posts/2026/11/full-stack-android-apps-ai-studio-integration",
    "isRecent": true
  },
  {
    "id": "up-gemini-mwk02376-nfng",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Securing Your Agents: A Hands-On Guide to Agent Anomaly Detection",
    "summary": "This guide walks developers through setting up Agent Anomaly Detection on the Gemini Enterprise Agent Platform to monitor AI agent telemetry and catch behavioral risks. It demonstr",
    "pubDate": "2026-11-17",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/securing-your-agents-a-hands-on-guide-to-agent-anomaly-detection/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mwe5d75o-2rz3",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Catch Go bugs that fuzzing misses with Gemini and a constraint solver",
    "summary": "How pairing Go's surviving compiler bounds-check traps with Gemini 4 Argon and the Z3 constraint solver catches latent out-of-bounds panics in Go code and uncovers a slice-capacity",
    "pubDate": "2026-11-12",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/catch-go-bugs-that-fuzzing-misses-with-gemini-and-a-constraint-solver/",
    "isRecent": true
  },
  {
    "id": "up-firebase-mwb9t0cm-u0pi",
    "toolId": "firebase",
    "toolName": "Firebase",
    "category": "Cloud",
    "title": "Introducing Firebase agent skills for Google Analytics",
    "summary": "Developers can equip coding agents with specialized Firebase skills to seamlessly initialize Google Analytics and instrument screenviews across modern UI frameworks.",
    "pubDate": "2026-11-10",
    "badge": "Feature Drop",
    "officialUrl": "https://firebase.blog/posts/2026/11/firebase-skills-for-google-analytics",
    "isRecent": true
  },
  {
    "id": "up-gemini-mw9zbsjy-vf63",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "From prompt to app: Build with Google Maps in AI Studio",
    "summary": "Developers can now build applications powered by Google Maps Platform directly within Google AI Studio by prompting Gemini with real-world geospatial concepts. The integration elim",
    "pubDate": "2026-11-10",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/from-prompt-to-app-build-with-google-maps-in-ai-studio/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mw1kjv1r-eyao",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "Cloud",
    "title": "Introducing Firebase spend caps",
    "summary": "Spend caps are designed to act as a circuit breaker for services like the Gemini API and Cloud Functions, reducing the risk of a financial surprise from a simple coding error or an",
    "pubDate": "2026-09-14",
    "badge": "Feature Drop",
    "officialUrl": "https://firebase.blog/posts/2026/09/firebase-spend-caps",
    "isRecent": true
  },
  {
    "id": "up-gemini-mw19sikr-i1pa",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Cost per task: Using cheap classifiers to route across Gemini models and thinking levels",
    "summary": "Per-token API prices keep falling, yet engineering bills for autonomous coding agents keep climbing....",
    "pubDate": "2026-11-03",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/cost-per-task-using-cheap-classifiers-to-route-across-gemini-models-and-thinking-levels/",
    "isRecent": true
  },
  {
    "id": "up-google-ai-studio-mvsno0xu-lh9w",
    "toolId": "google-ai-studio",
    "toolName": "Google Ai Studio",
    "category": "AI & ML",
    "title": "Hill-Climbing Agent Quality with Agents CLI Evaluation",
    "summary": "This post walks through the Agents CLI evaluation loop for systematically improving agent performance through continuous testing and grading. It demonstrates how to catch prompt re",
    "pubDate": "2026-10-28",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/hill-climbing-agent-quality-with-agents-cli-evaluation/",
    "isRecent": true
  },
  {
    "id": "up-google-workspace-mvpjuigl-t61i",
    "toolId": "google-workspace",
    "toolName": "Google Workspace",
    "category": "AI & ML",
    "title": "Preview, edit, and collaborate on markdown (.md) files natively in Google Docs and Drive",
    "summary": "Google Workspace now offers native support for Markdown (.md) files, allowing developers and AI agents to seamlessly collaborate on documentation directly in Google Docs without ma",
    "pubDate": "2026-10-26",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/preview-edit-and-collaborate-on-markdown-md-files-natively-in-google-docs-and-drive/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mvk0u5zs-06p0",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Architecting Governed, Self-Evolving AI Agents on Google Cloud",
    "summary": "Learn how Project Chrysalis combines Google Cloud's Gemini Enterprise Agent Platform, Agent Development Kit (ADK), BigQuery, and a four-gate defense-in-depth security stack (Model ",
    "pubDate": "2026-10-22",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/architecting-governed-self-evolving-ai-agents-on-gemini-agent-platform/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mvfjyfuh-d77m",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Step by Step guide: Build a Voice Agent That Never Goes Silent using ADK",
    "summary": "The open-source Agent Development Kit (ADK) and gemini-3.8-live enable developers to build responsive voice agents by implementing non-blocking tools in Python. Developers can use ",
    "pubDate": "2026-10-19",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/step-by-step-guide-build-a-voice-agent-that-never-goes-silent-using-adk/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mv9pxblm-uyjq",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Evaluating AI agents: moving past the vibe check",
    "summary": "A practical engineering guide and reference architecture for establishing continuous evaluation pipelines for multi-turn AI agents using Gemini Enterprise Agent Platform, Google AD",
    "pubDate": "2026-10-15",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/evaluating-ai-agents-moving-past-the-vibe-check/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mv788hhb-wo3a",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Gemini 4 Argon for Robotics",
    "summary": "Gemini 4 Argon is a general-purpose physical reasoning model designed to enhance workflows across the robotics stack with advanced capabilities in physical understanding, code gene",
    "pubDate": "2026-10-13",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/gemini-4-argon-for-robotics/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mv788hhc-efyy",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Optimizing a 200,000-line Python codebase overnight with Gemini 4 Argon",
    "summary": "How our engineering team ran Gemini 4 Argon unattended overnight with .agents/skills and /goal mode to cut in-memory session prep overhead by 40% in long sessions and speed up cold",
    "pubDate": "2026-10-13",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/optimizing-a-200000-line-python-codebase-overnight-with-gemini-4-argon/",
    "isRecent": true
  }
];
