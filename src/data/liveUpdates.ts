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

export const LAST_SYNCED_TIMESTAMP = '2026-09-21T03:02:36.364Z';
export const SYNC_STATUS: 'ONLINE' | 'SYNCING' | 'MAINTENANCE' = 'ONLINE';

export const LIVE_UPDATES_DATA: GoogleLiveUpdate[] = [
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
