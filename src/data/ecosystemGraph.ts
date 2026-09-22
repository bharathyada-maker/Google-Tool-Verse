export interface EcosystemNode {
  id: string;
  name: string;
  category: string;
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  size: number;
  color: string;
  description: string;
}

export interface EcosystemEdge {
  source: string;
  target: string;
  relationship: string;
}

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  // AI Hub
  { id: 'gemini', name: 'Gemini', category: 'AI & ML', x: 48, y: 32, size: 28, color: '#4285F4', description: 'Google’s flagship multimodal foundation model' },
  { id: 'google-ai-studio', name: 'AI Studio', category: 'AI & ML', x: 34, y: 22, size: 22, color: '#1A73E8', description: 'Fast web prototyping IDE for Gemini' },
  { id: 'gemini-api', name: 'Gemini API', category: 'AI & ML', x: 62, y: 20, size: 20, color: '#4285F4', description: 'Developer REST & SDK access for Gemini' },
  { id: 'vertex-ai', name: 'Vertex AI', category: 'AI & ML', x: 30, y: 40, size: 24, color: '#1A73E8', description: 'Enterprise MLOps and foundation model platform' },
  { id: 'notebooklm', name: 'NotebookLM', category: 'AI & ML', x: 64, y: 38, size: 20, color: '#34A853', description: 'Source-grounded research assistant' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'AI & ML', x: 18, y: 30, size: 20, color: '#FF6F00', description: 'Deep learning model framework' },
  { id: 'gemma', name: 'Gemma', category: 'AI & ML', x: 44, y: 15, size: 18, color: '#8AB4F8', description: 'Lightweight open-weights models' },
  
  // Cloud & Backend Hub
  { id: 'google-cloud', name: 'Google Cloud', category: 'Cloud', x: 26, y: 62, size: 26, color: '#34A853', description: 'Core enterprise cloud infrastructure' },
  { id: 'cloud-run', name: 'Cloud Run', category: 'Cloud', x: 40, y: 55, size: 24, color: '#4285F4', description: 'Serverless container deployment platform' },
  { id: 'firebase', name: 'Firebase', category: 'Cloud', x: 55, y: 52, size: 26, color: '#FFA000', description: 'App development platform & backend services' },
  { id: 'kubernetes-engine', name: 'GKE', category: 'Cloud', x: 16, y: 70, size: 20, color: '#34A853', description: 'Enterprise managed Kubernetes' },
  { id: 'cloud-storage', name: 'Cloud Storage', category: 'Cloud', x: 38, y: 72, size: 18, color: '#34A853', description: 'High-durability global object storage' },

  // Data & Analytics Hub
  { id: 'bigquery', name: 'BigQuery', category: 'Data', x: 30, y: 82, size: 24, color: '#4285F4', description: 'Serverless petabyte data warehouse' },
  { id: 'looker-studio', name: 'Looker Studio', category: 'Data', x: 48, y: 84, size: 20, color: '#FBBC05', description: 'Interactive BI dashboard visualizer' },

  // App Development Hub
  { id: 'flutter', name: 'Flutter', category: 'Dev', x: 74, y: 62, size: 24, color: '#02569B', description: 'Multi-platform UI framework' },
  { id: 'android-studio', name: 'Android Studio', category: 'Dev', x: 84, y: 50, size: 22, color: '#34A853', description: 'Official native Android IDE' },
  { id: 'dart', name: 'Dart', category: 'Dev', x: 84, y: 72, size: 18, color: '#0175C2', description: 'Client-optimized UI programming language' },

  // Productivity & Web
  { id: 'google-workspace', name: 'Workspace', category: 'Productivity', x: 72, y: 28, size: 22, color: '#4285F4', description: 'Cloud-native productivity suite' },
  { id: 'google-vids', name: 'Google Vids', category: 'AI & ML', x: 60, y: 30, size: 20, color: '#1A73E8', description: 'AI-powered video creation in Workspace' },
  { id: 'google-docs', name: 'Google Docs', category: 'Productivity', x: 86, y: 22, size: 18, color: '#4285F4', description: 'Real-time collaborative word processor' },
  { id: 'google-sheets', name: 'Google Sheets', category: 'Productivity', x: 65, y: 78, size: 20, color: '#34A853', description: 'Collaborative spreadsheets connected to BigQuery' },
  { id: 'chrome-devtools', name: 'DevTools', category: 'Web', x: 86, y: 38, size: 18, color: '#EA4335', description: 'Web debugging tools in Chrome' },
  { id: 'lighthouse', name: 'Lighthouse', category: 'Web', x: 92, y: 62, size: 18, color: '#4285F4', description: 'Automated web quality & performance auditing' },

  // New Core Flagships: Development, Deployment, Storage
  { id: 'project-idx', name: 'Project IDX', category: 'Dev', x: 78, y: 48, size: 22, color: '#4285F4', description: 'AI-assisted cloud multiplatform IDE' },
  { id: 'go-lang', name: 'Go (Golang)', category: 'Dev', x: 92, y: 76, size: 20, color: '#00ADD8', description: 'High-concurrency systems programming language' },
  { id: 'compute-engine', name: 'Compute Engine', category: 'Cloud', x: 14, y: 55, size: 22, color: '#4285F4', description: 'Scalable enterprise virtual machines' },
  { id: 'cloud-functions', name: 'Cloud Functions', category: 'Cloud', x: 46, y: 64, size: 20, color: '#4285F4', description: 'Event-driven serverless functions' },
  { id: 'cloud-spanner', name: 'Cloud Spanner', category: 'Data', x: 22, y: 88, size: 22, color: '#4285F4', description: 'Unlimited scale globally distributed SQL' },
  { id: 'cloud-sql', name: 'Cloud SQL', category: 'Data', x: 38, y: 90, size: 20, color: '#4285F4', description: 'Managed MySQL, PostgreSQL & SQL Server' }
];

export const ECOSYSTEM_EDGES: EcosystemEdge[] = [
  // AI Connections
  { source: 'gemini', target: 'google-ai-studio', relationship: 'Rapid prototyping & API key generation' },
  { source: 'gemini', target: 'gemini-api', relationship: 'Direct programmatic developer access' },
  { source: 'gemini', target: 'vertex-ai', relationship: 'Enterprise governance & private VPC tuning' },
  { source: 'gemini', target: 'notebooklm', relationship: 'Powers grounded research & audio overviews' },
  { source: 'gemini', target: 'gemma', relationship: 'Open-weights architecture inspired by Gemini' },
  { source: 'gemini', target: 'google-vids', relationship: 'Powers AI storyboards, scripts & voiceovers' },
  { source: 'gemini', target: 'project-idx', relationship: 'Integrated Gemini Code Assist in cloud IDE' },
  { source: 'tensorflow', target: 'vertex-ai', relationship: 'Custom training pipelines on TPUs/GPUs' },

  // Cloud & Integration Connections
  { source: 'vertex-ai', target: 'google-cloud', relationship: 'Native enterprise GCP cloud service' },
  { source: 'google-cloud', target: 'compute-engine', relationship: 'Foundational IaaS virtual machine infrastructure' },
  { source: 'google-cloud', target: 'cloud-run', relationship: 'Managed serverless container service' },
  { source: 'google-cloud', target: 'kubernetes-engine', relationship: 'Enterprise Kubernetes orchestration' },
  { source: 'google-cloud', target: 'cloud-storage', relationship: 'Unified object storage foundation' },
  { source: 'google-cloud', target: 'cloud-functions', relationship: 'Event-driven serverless execution' },
  { source: 'cloud-run', target: 'firebase', relationship: 'Powers serverless backend triggers' },
  { source: 'google-ai-studio', target: 'firebase', relationship: 'Export prompt code to web & mobile backends' },

  // Data Pipeline & Storage Connections
  { source: 'google-cloud', target: 'bigquery', relationship: 'Managed enterprise analytical warehouse' },
  { source: 'google-cloud', target: 'cloud-spanner', relationship: 'Mission-critical 99.999% global SQL' },
  { source: 'google-cloud', target: 'cloud-sql', relationship: 'Managed relational MySQL & PostgreSQL' },
  { source: 'cloud-storage', target: 'bigquery', relationship: 'Direct batch and external table querying' },
  { source: 'bigquery', target: 'looker-studio', relationship: 'Native zero-code interactive BI reporting' },
  { source: 'bigquery', target: 'google-sheets', relationship: 'Connected Sheets analyzing billions of rows' },

  // Mobile & App Development
  { source: 'flutter', target: 'dart', relationship: 'Language foundation of Flutter framework' },
  { source: 'flutter', target: 'android-studio', relationship: 'Official IDE tooling, emulation & debugging' },
  { source: 'flutter', target: 'project-idx', relationship: 'Full-stack cloud IDE with live Android emulator' },
  { source: 'flutter', target: 'firebase', relationship: 'FlutterFire official auth & Firestore SDKs' },
  { source: 'android-studio', target: 'firebase', relationship: 'Crashlytics, FCM notifications & cloud storage' },
  { source: 'go-lang', target: 'cloud-run', relationship: 'Fast, lightweight container microservices' },

  // Productivity & AI
  { source: 'gemini', target: 'google-workspace', relationship: 'Powers Gemini in Docs, Gmail & Slides' },
  { source: 'google-workspace', target: 'google-vids', relationship: 'Collaborative AI video creation app' },
  { source: 'google-workspace', target: 'google-docs', relationship: 'Core document co-authoring tool' },
  { source: 'google-workspace', target: 'google-sheets', relationship: 'Cloud-native spreadsheet program' },
  { source: 'chrome-devtools', target: 'lighthouse', relationship: 'Built-in automated audit tab' }
];
