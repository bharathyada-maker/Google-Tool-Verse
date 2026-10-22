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

export const LAST_SYNCED_TIMESTAMP = '2026-10-22T10:46:22.581Z';
export const SYNC_STATUS: 'ONLINE' | 'SYNCING' | 'MAINTENANCE' = 'ONLINE';

export const LIVE_UPDATES_DATA: GoogleLiveUpdate[] = [
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
  },
  {
    "id": "up-firebase-mv047aq6-hux4",
    "toolId": "firebase",
    "toolName": "Firebase",
    "category": "Cloud",
    "title": "Building an iOS app in 6 hours with Firebase and Antigravity",
    "summary": "We built a production-ready iOS app with Firebase, including authentication, Firestore, Cloud Messaging, Cloud Functions and App Check, in just six hours using Google&apos;s Antigr",
    "pubDate": "2026-10-08",
    "badge": "Feature Drop",
    "officialUrl": "https://firebase.blog/posts/2026/09/build-ios-app-firebase-antigravity",
    "isRecent": true
  },
  {
    "id": "up-gemini-mux7zatc-o1fz",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "Bring multimodal semantic search to the edge with EmbeddingGemma 2",
    "summary": "EmbeddingGemma 2 is a new 740M open-weight multimodal model that maps text, images, video, and audio into a unified vector space for privacy-first, on-device retrieval. Developers ",
    "pubDate": "2026-10-06",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/google-ai-edge-with-embeddinggemma-2/",
    "isRecent": true
  },
  {
    "id": "up-gemini-mux7zatc-9nze",
    "toolId": "gemini",
    "toolName": "Gemini",
    "category": "AI & ML",
    "title": "EmbeddingGemma 2: The Developer Guide",
    "summary": "EmbeddingGemma 2 is a compact, open-source multimodal embedding model that maps text, code, images, video, and audio into a unified 768-dimensional space. Developers can use the se",
    "pubDate": "2026-10-06",
    "badge": "Feature Drop",
    "officialUrl": "https://developers.googleblog.com/embeddinggemma-2-the-developer-guide/",
    "isRecent": true
  },
  {
    "id": "up-firebase-mursa8hd-5o4a",
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
    "id": "up-firebase-mulu1ygy-o5ys",
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
    "id": "up-firebase-mulu1ygy-70t1",
    "toolId": "firebase",
    "toolName": "Firebase",
    "category": "Cloud",
    "title": "New regions and networks: Firebase Phone Number Verification adds more networks",
    "summary": "Official update published on Firebase Blog.",
    "pubDate": "2026-09-28",
    "badge": "Feature Drop",
    "officialUrl": "https://firebase.blog/posts/2026/09/firebase-pnv-more-networks",
    "isRecent": true
  },
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
  }
];
