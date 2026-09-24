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

export const LAST_SYNCED_TIMESTAMP = '2026-09-24T20:52:25.077Z';
export const SYNC_STATUS: 'ONLINE' | 'SYNCING' | 'MAINTENANCE' = 'ONLINE';

export const LIVE_UPDATES_DATA: GoogleLiveUpdate[] = [
  {
    "id": "up-gemini-muevt967-eo9s",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Introducing Support for Local AI Models in the Antigravity SDK",
    "summary": "The Google Antigravity SDK now empowers developers to execute offline, agentic workflows locally using models like Gemma 4 26B A4B via LiteRT. This update facilitates powerful hybr",
    "pubDate": "2026-09-24",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/",
    "isRecent": true
  },
  {
    "id": "up-google-ai-studio-mub5i2fk-evds",
    "toolId": "google-ai-studio",
    "toolName": "Google Ai Studio",
    "category": "AI & ML",
    "title": "Why client SDK generation belongs in the open",
    "summary": "Google has partnered with Speakeasy to open-source their OpenAPI code generation suite under the AGPLv3 license, a strategic move prompted by the sudden shutdown of Google's previo",
    "pubDate": "2026-09-21",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mub5i2fk-4k2o",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Agent Anomaly Detection, now in Private Preview on the Gemini Enterprise Agent Platform",
    "summary": "Agent Anomaly Detection is a new, out-of-band oversight layer for the Gemini Enterprise Agent Platform that analyzes OpenTelemetry traces and tool calls to catch behavioral risks w",
    "pubDate": "2026-09-21",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mub5i2fk-siqj",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Build zero-trust AI agents that judge intent, not just syntax",
    "summary": "This blog post explores how to transition AI agents from static, build-time security controls to dynamic runtime governance using the Gemini Enterprise Agent Platform. It highlight",
    "pubDate": "2026-09-21",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mub5i2fl-9zzr",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Driving Developer Excellence: Inside the Program Sprints",
    "summary": "The Gemini Enterprise Developer Experience (DevEx) program conducts ongoing sprint testing of end-to-end developer workflows to identify and rapidly resolve friction points without",
    "pubDate": "2026-09-21",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/driving-developer-excellence-inside-the-program-sprints/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mub5i2fl-51bw",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Enterprise-Grade Precision for Long-Context Multimodal Embedding Inference on Cloud TPU",
    "summary": "Google Cloud has natively integrated TPU support into the vLLM serving engine, allowing developers to elastically scale high-demand embedding pipelines using Google Kubernetes Engi",
    "pubDate": "2026-09-21",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/enterprise-grade-precision-for-long-context-multimodal-embedding-inference-on-cloud-tpu/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mub5i2oc-d1wu",
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
    "id": "up-gemini-mub5i2oc-ehre",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "Cloud",
    "title": "5 ways to use Gemini text-to-speech (TTS) in your apps with Firebase AI Logic",
    "summary": "Official update published on Firebase Blog.",
    "pubDate": "2026-09-09",
    "badge": "Feature Drop",
    "officialUrl": "https://firebase.blog/posts/2026/09/ai-logic-text-to-speech",
    "isRecent": true
  },
  {
    "id": "up-firebase-mub5i2od-l8b8",
    "toolId": "firebase",
    "toolName": "Firebase",
    "category": "Cloud",
    "title": "Authentication made easy: Building a secure e-commerce shopping cart with Firebase",
    "summary": "Official update published on Firebase Blog.",
    "pubDate": "2026-09-01",
    "badge": "Feature Drop",
    "officialUrl": "https://firebase.blog/posts/2026/09/secure-shopping-cart-firebase",
    "isRecent": true
  },
  {
    "id": "up-firebase-mub5i2od-o3ab",
    "toolId": "firebase",
    "toolName": "Firebase",
    "category": "Cloud",
    "title": "3 ways to optimize Firebase Remote Config fetch usage",
    "summary": "Reduce network fetches, battery consumption and usage costs",
    "pubDate": "2026-08-31",
    "badge": "Feature Drop",
    "officialUrl": "https://firebase.blog/posts/2026/08/optimize-remote-config-usage",
    "isRecent": true
  },
  {
    "id": "up-firebase-mub5i2od-n79m",
    "toolId": "firebase",
    "toolName": "Firebase",
    "category": "Cloud",
    "title": "Eval-driven development: How we build better agent skills for Firebase",
    "summary": "How we build better agent skills for Firebase",
    "pubDate": "2026-08-11",
    "badge": "Feature Drop",
    "officialUrl": "https://firebase.blog/posts/2026/08/eval-driven-development-agent-skills",
    "isRecent": true
  },
  {
    "id": "up-gemini-15-flash",
    "toolId": "gemini",
    "toolName": "Gemini 1.5 Flash",
    "category": "AI & ML",
    "title": "Gemini 1.5 Flash Production Release & Rate Limit Upgrades",
    "summary": "Google upgraded Gemini 1.5 Flash with sub-second response times, 1M token context window by default, and multimodal audio/video streaming APIs.",
    "pubDate": "2025-06-18",
    "badge": "Model Release",
    "officialUrl": "https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/",
    "isRecent": true
  },
  {
    "id": "up-ai-studio-system-instructions",
    "toolId": "google-ai-studio",
    "toolName": "Google AI Studio",
    "category": "AI & ML",
    "title": "Structured Outputs & JSON Schema Enforcement in AI Studio",
    "summary": "Developers can now enforce strict JSON schema contracts directly within Google AI Studio for function calling and deterministic structured data extraction.",
    "pubDate": "2025-06-10",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/en/gemini-structured-outputs-json-schema/",
    "isRecent": true
  },
  {
    "id": "up-firebase-studio-genkit",
    "toolId": "firebase",
    "toolName": "Firebase",
    "category": "Cloud",
    "title": "Firebase Genkit & Serverless AI Integration Suite",
    "summary": "Firebase announced native Genkit support for building full-stack AI workflows with Firestore vector search, automated telemetry, and Gemini streaming.",
    "pubDate": "2025-06-05",
    "badge": "SDK Update",
    "officialUrl": "https://firebase.blog/posts/2024/05/introducing-genkit/",
    "isRecent": true
  },
  {
    "id": "up-cloud-run-gpus",
    "toolId": "cloud-run",
    "toolName": "Cloud Run",
    "category": "Cloud",
    "title": "NVIDIA GPU Acceleration on Cloud Run for Serverless AI Inference",
    "summary": "Cloud Run now supports NVIDIA L4 GPUs with scale-to-zero capability, allowing teams to deploy custom open-weights LLMs like Gemma with pay-as-you-go pricing.",
    "pubDate": "2025-05-28",
    "badge": "Architecture",
    "officialUrl": "https://cloud.google.com/blog/products/serverless/cloud-run-gpu-support-ai-inference",
    "isRecent": true
  },
  {
    "id": "up-bigquery-gemini-models",
    "toolId": "bigquery",
    "toolName": "BigQuery",
    "category": "Data",
    "title": "BigQuery Gemini Multimodal SQL Functions (ML.GENERATE_TEXT)",
    "summary": "Execute generative multimodal analysis directly within BigQuery SQL over petabyte datasets using native ML.GENERATE_TEXT integrated with Gemini 1.5.",
    "pubDate": "2025-05-20",
    "badge": "Feature Drop",
    "officialUrl": "https://cloud.google.com/blog/products/data-analytics/bigquery-gemini-multimodal-analytics",
    "isRecent": true
  },
  {
    "id": "up-flutter-wasm",
    "toolId": "flutter",
    "toolName": "Flutter",
    "category": "Dev",
    "title": "Flutter WebAssembly (Wasm) Compilation & Impeller Engine for Android",
    "summary": "Flutter 3.22 delivers production WebAssembly compilation for up to 3x faster web frame rates and full Vulkan Impeller rendering on Android.",
    "pubDate": "2025-05-15",
    "badge": "SDK Update",
    "officialUrl": "https://medium.com/flutter/whats-new-in-flutter-3-22-6b998cfb6b15",
    "isRecent": true
  },
  {
    "id": "up-notebooklm-audio-overviews",
    "toolId": "notebooklm",
    "toolName": "NotebookLM",
    "category": "AI & ML",
    "title": "Deep Research Audio Overviews with Conversational AI Hosts",
    "summary": "NotebookLM introduced conversational 2-host audio podcasts generated entirely from user-uploaded PDFs, research papers, and lecture notes.",
    "pubDate": "2025-05-02",
    "badge": "Feature Drop",
    "officialUrl": "https://blog.google/technology/ai/notebooklm-audio-overviews/",
    "isRecent": true
  }
];
