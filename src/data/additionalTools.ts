import { GoogleTool } from '../types';

export const ADDITIONAL_TOOLS: GoogleTool[] = [
  {
    id: 'gemini-api',
    name: 'Gemini API',
    tagline: 'Developer REST and SDK access to integrate Google’s most capable multimodal AI models into apps.',
    category: 'Artificial Intelligence & Machine Learning',
    iconName: 'Code2',
    color: '#4285F4',
    overview: 'The Gemini API gives software developers programmatic access to Google’s Gemini multimodal models. Available through official SDKs for Python, TypeScript/JavaScript, Go, Swift, and Kotlin, the API supports chat completions, streaming responses, structured JSON output mode, embeddings, code execution, and native function calling.',
    problemSolved: 'Integrating large multimodal AI models into existing production apps previously meant dealing with complex self-hosted GPU inference setups. The Gemini API provides sub-second managed endpoints with flexible rate limits.',
    skillLevel: 'Beginner',
    pricingType: 'Freemium / Free Tier',
    pricingDetails: 'Free tier available via Google AI Studio (up to 15 RPM for Flash). Pay-as-you-go available with billing enabled on Google Cloud ($0.075 / 1M input tokens for Flash 1.5).',
    status: 'Active',
    lastVerified: '2025-06-12',
    verifiedSource: 'https://ai.google.dev/gemini-api/docs',
    bestFor: ['App backend AI integrations', 'Automated document processing pipelines', 'Function calling & agent workflows', 'Multimodal analysis (audio/video/image)'],
    capabilities: [
      'Native function calling with automated schema validation',
      'System instructions support',
      'Code execution sandbox inside model inference',
      'Structured JSON schema enforcement',
      'High-throughput asynchronous batch processing'
    ],
    whatYouCanBuild: [
      { title: 'Customer Support AI Agent', description: 'Integrate the Gemini API into your web app with function calling to check order tracking in your SQL database.' },
      { title: 'Automated Receipt Auditor', description: 'Pass receipt photos to extract merchant, total, date, and tax into structured JSON.' }
    ],
    personas: [
      { name: 'Devon', role: 'Full-Stack Developer', avatar: '💻', reason: 'Integrates AI capabilities into React and Node.js applications with 10 lines of code.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Get API Key', description: 'Generate a key from Google AI Studio at aistudio.google.com.', actionSnippet: 'export GEMINI_API_KEY="AIzaSy..."' },
      { step: 2, title: 'Install Official SDK', description: 'Install the official Google Gen AI SDK for your environment.', actionSnippet: 'npm install @google/genai\n# or\npip install google-genai' },
      { step: 3, title: 'Initialize Client', description: 'Instantiate the client with your API key.', actionSnippet: 'import { GoogleGenAI } from "@google/genai";\nconst ai = new GoogleGenAI();' },
      { step: 4, title: 'Generate Content', description: 'Call generateContent with your desired model and prompt.', actionSnippet: 'const response = await ai.models.generateContent({ model: "gemini-1.5-flash", contents: "Explain quantum computing in 2 sentences" });' },
      { step: 5, title: 'Enable Streaming', description: 'Use generateContentStream for real-time token rendering.' },
      { step: 6, title: 'Implement Function Calling', description: 'Provide JSON function declarations for the model to invoke external tools.' }
    ],
    howItWorks: {
      title: 'REST / gRPC Request to Foundation Model Inference',
      summary: 'Authorized client requests travel over HTTP/2 to Google’s inference fleet and stream back tokens.',
      steps: [
        { id: 'api1', label: 'SDK Client Request', sublabel: 'Payload Serialization', description: 'Request parameters, prompt tokens, and media bytes are serialized into JSON/Protobuf.' },
        { id: 'api2', label: 'Authentication & Quota Gateway', sublabel: 'API Key Check', description: 'Validates API key and verifies per-minute rate limits.' },
        { id: 'api3', label: 'Inference Accelerator Cluster', sublabel: 'Cloud TPU v5e', description: 'Prompt is processed on high-throughput TPU clusters executing parallel matrix operations.' },
        { id: 'api4', label: 'Chunked SSE Streaming', sublabel: 'Server-Sent Events', description: 'Generated token chunks stream back to the client application as they are computed.' }
      ]
    },
    demoType: 'gemini-sandbox',
    relatedToolIds: ['gemini', 'google-ai-studio', 'vertex-ai', 'cloud-run'],
    resources: {
      website: 'https://ai.google.dev',
      docs: 'https://ai.google.dev/gemini-api/docs',
      tutorials: 'https://ai.google.dev/tutorials'
    },
    isTrending: true,
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Build an automated email triage service that classifies incoming support tickets by urgency and sentiment.'
  },

  {
    id: 'imagen',
    name: 'Imagen',
    tagline: 'Google DeepMind’s photorealistic text-to-image diffusion model with exceptional typography and fidelity.',
    category: 'Artificial Intelligence & Machine Learning',
    iconName: 'Image',
    color: '#AA3BFF',
    overview: 'Imagen is Google DeepMind’s advanced text-to-image generative diffusion model family. Known for its photorealism, high prompt adherence, and ability to generate clear, legible typography within images, Imagen is integrated across Google Workspace, Vertex AI, and Google Cloud creative tools.',
    problemSolved: 'Early image generators struggled with distorted human hands, illegible text rendering, and low fidelity. Imagen delivers photorealistic details with precise typographic rendering and built-in responsible AI safety guardrails.',
    skillLevel: 'Beginner',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Priced per generated image via Vertex AI (approximately $0.03 per standard resolution image). Free trials available in Google Labs ImageFX.',
    status: 'Active',
    lastVerified: '2025-06-10',
    verifiedSource: 'https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview',
    bestFor: ['Commercial graphic design & marketing assets', 'In-image text & typography rendering', 'Visual concept art and moodboarding', 'Image editing (inpainting and outpainting)'],
    capabilities: [
      'High-fidelity photorealistic rendering and rich artistic styles',
      'Accurate text and typography rendering inside images',
      'Inpainting (editing specific regions) and outpainting (canvas expansion)',
      'Digital provenance watermarking with Google DeepMind SynthID',
      'Fine-tuning with custom brand style references on Vertex AI'
    ],
    whatYouCanBuild: [
      { title: 'Automated Social Media Ad Studio', description: 'Generate branded product display ads with accurate custom text overlays in seconds.' },
      { title: 'Concept Art Generator', description: 'Create visual moodboards for game design and architectural spaces.' }
    ],
    personas: [
      { name: 'Diana', role: 'Creative Director', avatar: '🎨', reason: 'Generates commercial marketing visuals that faithfully depict brand typography.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Try ImageFX', description: 'Experience Imagen 3 for free at labs.google/fx/tools/imagefx.', actionSnippet: 'https://labs.google/fx/tools/imagefx' },
      { step: 2, title: 'Write Descriptive Prompt', description: 'Detail subject, style, lighting, camera angle, and exact text in quotes.' },
      { step: 3, title: 'Tune Expressive Chips', description: 'Use interactive drop-down chips to test different artistic movements and lenses.' },
      { step: 4, title: 'Generate & Select', description: 'Inspect the 4 generated candidates and choose the highest-fidelity variant.' },
      { step: 5, title: 'Inpaint Specific Details', description: 'Brush over any area you wish to swap or refine.' },
      { step: 6, title: 'Integrate via Vertex AI', description: 'Call the Imagen API in Python using Google Cloud Vertex AI SDK.' }
    ],
    howItWorks: {
      title: 'Diffusion Denoising with Text Grounding',
      summary: 'A deep frozen language model encodes prompt nuances to guide a cascaded diffusion architecture that denoises random Gaussian noise into crisp images.',
      steps: [
        { id: 'im1', label: 'T5 Language Encoding', sublabel: 'Deep Text Comprehension', description: 'Large language model processes text prompt to capture complex spatial and attribute relationships.' },
        { id: 'im2', label: 'Latent Diffusion Process', sublabel: 'Gaussian Denoising Loop', description: 'A U-Net / Diffusion Transformer removes noise iteratively conditioned on the text embeddings.' },
        { id: 'im3', label: 'Super-Resolution Cascades', sublabel: 'Upscaling Architecture', description: 'Lower-resolution base image is progressively upsampled into crisp 2048x2048 resolution.' },
        { id: 'im4', label: 'SynthID Provenance', sublabel: 'Digital Watermark', description: 'DeepMind SynthID watermarks are injected into pixel frequencies to facilitate responsible AI detection.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['veo', 'gemini', 'vertex-ai'],
    resources: {
      website: 'https://deepmind.google/technologies/imagen-3',
      docs: 'https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview'
    },
    isTrending: true,
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Build an automated blog banner generator that produces custom header illustrations for published markdown posts.'
  },

  {
    id: 'cloud-storage',
    name: 'Cloud Storage',
    tagline: 'Google Cloud’s unified object storage service with worldwide edge caching and 11 nines of durability.',
    category: 'Cloud & Developer Platforms',
    iconName: 'HardDrive',
    color: '#34A853',
    overview: 'Cloud Storage is Google Cloud’s globally distributed object storage service for storing and serving any amount of unstructured data (images, videos, backups, machine learning training sets, analytics data). It offers industry-leading 99.999999999% (11 9’s) durability, automatic lifecycle management across storage classes (Standard, Nearline, Coldline, Archive), and instant global availability.',
    problemSolved: 'Storing files on local hard drives or virtual machine disks causes capacity bottlenecks, risk of hardware failure, and poor multi-region download speeds. Cloud Storage delivers infinitely scalable, highly durable object storage.',
    skillLevel: 'Beginner',
    pricingType: 'Freemium / Free Tier',
    pricingDetails: 'Always-free tier includes 5GB-months of regional storage in us-central1/us-east1/us-west1, plus 5,000 Class A and 50,000 Class B operations. Additional storage starts at ~$0.02/GB/month.',
    status: 'Active',
    lastVerified: '2025-06-10',
    verifiedSource: 'https://cloud.google.com/storage',
    bestFor: ['Static website assets (images, audio, video)', 'Machine learning training datasets & model checkpoints', 'Secure disaster recovery backups and archives', 'Data lake ingestion for BigQuery analytics'],
    capabilities: [
      '11 nines of annual data durability',
      'Dual-region and multi-region replication options for high availability',
      'Object lifecycle management (auto-transition to Coldline/Archive)',
      'Customer-Managed Encryption Keys (CMEK) and signed URLs for secure downloads',
      'Direct integration with BigQuery external tables and Cloud Run'
    ],
    whatYouCanBuild: [
      { title: 'Global Media Delivery Backend', description: 'Store millions of user avatar images with instant worldwide CDN caching and thumbnail generation.' },
      { title: 'Automated Database Backup Archive', description: 'Archive nightly SQL dumps with lifecycle policies moving data to penny-per-gigabyte Coldline after 30 days.' }
    ],
    personas: [
      { name: 'Marcus', role: 'DevOps Engineer', avatar: '⚙️', reason: 'Automates regulatory log archiving with immutable bucket retention locks.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Open Cloud Storage Console', description: 'Navigate to console.cloud.google.com/storage in GCP.', actionSnippet: 'https://console.cloud.google.com/storage' },
      { step: 2, title: 'Create a Bucket', description: 'Choose a globally unique bucket name, region, and storage class.', actionSnippet: 'gcloud storage buckets create gs://my-unique-bucket-name --location=us-central1' },
      { step: 3, title: 'Upload Objects', description: 'Upload files via web drag-and-drop or command line.', actionSnippet: 'gcloud storage cp my-photo.jpg gs://my-unique-bucket-name/' },
      { step: 4, title: 'Configure Access Permissions', description: 'Use Uniform bucket-level access and grant Cloud Storage Viewer roles via IAM.' },
      { step: 5, title: 'Generate Signed URLs', description: 'Create temporary, secure download URLs for private client downloads without opening public access.', actionSnippet: 'gcloud storage sign-url gs://my-unique-bucket-name/report.pdf --duration=10m' },
      { step: 6, title: 'Set Lifecycle Rules', description: 'Add JSON rules to auto-delete temporary files or down-tier objects after 90 days.' }
    ],
    howItWorks: {
      title: 'Colossus Distributed File System Architecture',
      summary: 'Files are sharded, erasure-coded across independent racks and power zones, and cached via Google’s edge CDN.',
      steps: [
        { id: 'cs1', label: 'Object Ingestion', sublabel: 'HTTPS REST / gRPC Ingest', description: 'Data streams into the nearest Google edge PoP and reaches the regional storage cluster.' },
        { id: 'cs2', label: 'Erasure Coding & Sharding', sublabel: 'Colossus Storage Nodes', description: 'Objects are broken into fragments with Reed-Solomon parity stripes across independent power grids.' },
        { id: 'cs3', label: 'Metadata & Indexing', sublabel: 'Spanner / Megastore', description: 'Object metadata and access control policies are recorded in Google Spanner with strict consistency.' },
        { id: 'cs4', label: 'Global CDN Delivery', sublabel: 'Cloud CDN Integration', description: 'Public or signed requests are served from edge caches closest to users.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['google-cloud', 'cloud-run', 'firebase', 'bigquery'],
    resources: {
      website: 'https://cloud.google.com/storage',
      docs: 'https://cloud.google.com/storage/docs'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Build a secure document dropbox where clients upload tax documents via presigned URLs.'
  },

  {
    id: 'pub-sub',
    name: 'Pub/Sub',
    tagline: 'Google Cloud’s fully managed real-time messaging service for streaming analytics and event-driven microservices.',
    category: 'Cloud & Developer Platforms',
    iconName: 'Share2',
    color: '#4285F4',
    overview: 'Pub/Sub is an asynchronous and scalable messaging service that decouples services that produce messages from services that process those messages. Designed for 99.999% availability and millisecond latency at millions of messages per second, Pub/Sub acts as the event-driven backbone of modern cloud architectures and streaming pipelines into BigQuery.',
    problemSolved: 'Direct point-to-point HTTP calls between microservices create tight coupling and cascade failures when one service slows down. Pub/Sub provides durable buffering and asynchronous fan-out.',
    skillLevel: 'Intermediate',
    pricingType: 'Freemium / Free Tier',
    pricingDetails: 'First 10GB of message throughput per month is free. $40 per TB thereafter.',
    status: 'Active',
    lastVerified: '2025-06-08',
    verifiedSource: 'https://cloud.google.com/pubsub',
    bestFor: ['Event-driven microservice orchestration', 'High-throughput IoT device telemetry streaming', 'Real-time clickstream ingestion into BigQuery', 'Reliable asynchronous task queues'],
    capabilities: [
      'At-least-once message delivery with strict ordering options',
      'Automatic horizontal scaling to millions of events per second with zero provisioning',
      'Direct push to Cloud Run or Cloud Functions endpoints via HTTP webhooks',
      'BigQuery and Cloud Storage direct write subscriptions (no coding required)',
      'Dead-letter topics for failed message inspection'
    ],
    whatYouCanBuild: [
      { title: 'Global IoT Fleet Telemetry Stream', description: 'Ingest sensor readings from 50,000 delivery vehicles directly into BigQuery without running server clusters.' },
      { title: 'Microservice Event Mesh', description: 'Publish "order_placed" events that simultaneously notify Inventory, Shipping, and Payment services.' }
    ],
    personas: [
      { name: 'Ken', role: 'Distributed Systems Engineer', avatar: '💻', reason: 'Decouples high-volume payment processing pipelines to avoid database lock contention.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create Topic', description: 'Create a topic where publishers will push messages.', actionSnippet: 'gcloud pubsub topics create order-events' },
      { step: 2, title: 'Create Subscription', description: 'Create a pull or push subscription to consume messages.', actionSnippet: 'gcloud pubsub subscriptions create order-sub --topic=order-events' },
      { step: 3, title: 'Publish Message', description: 'Send a test message from CLI or SDK.', actionSnippet: 'gcloud pubsub topics publish order-events --message="Order #1042 created"' },
      { step: 4, title: 'Pull & Acknowledge', description: 'Read messages and acknowledge them to remove from queue.', actionSnippet: 'gcloud pubsub subscriptions pull order-sub --auto-ack' },
      { step: 5, title: 'Configure BigQuery Direct Write', description: 'Route messages straight to a BigQuery table with zero intermediate code.' },
      { step: 6, title: 'Set Dead Letter Topic', description: 'Route unprocessable messages to a dead-letter queue after 5 failed retry attempts.' }
    ],
    howItWorks: {
      title: 'Decoupled Publish-Subscribe Distributed Messaging',
      summary: 'Publishers send messages to topics; Pub/Sub replicates messages across multiple zones and routes to individual subscribers.',
      steps: [
        { id: 'ps1', label: 'Message Publication', sublabel: 'Publisher Client', description: 'Publishers send batched messages with custom attributes to a designated topic.' },
        { id: 'ps2', label: 'Multi-Zone Replication', sublabel: 'Durable Write Log', description: 'Messages are synchronously persisted to storage across multiple datacenter availability zones.' },
        { id: 'ps3', label: 'Routing to Subscriptions', sublabel: 'Fan-Out Engine', description: 'Each active subscription receives a dedicated pointer to the published message.' },
        { id: 'ps4', label: 'Delivery & Ack Resolution', sublabel: 'Push / Pull Handshake', description: 'Subscriber receives message and sends an ACK; Pub/Sub marks the message delivered.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['google-cloud', 'bigquery', 'cloud-run', 'cloud-storage'],
    resources: {
      website: 'https://cloud.google.com/pubsub',
      docs: 'https://cloud.google.com/pubsub/docs'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Create a serverless audit logging system that captures security events and streams them directly into BigQuery.'
  },

  {
    id: 'google-cloud-shell',
    name: 'Google Cloud Shell',
    tagline: 'An interactive command-line environment and browser-based code editor with pre-installed developer tools.',
    category: 'Cloud & Developer Platforms',
    iconName: 'Terminal',
    color: '#4285F4',
    overview: 'Google Cloud Shell is a free, browser-accessible Debian Linux virtual machine equipped with 5GB of persistent home directory storage. Accessible from any web browser with zero local installation, it comes pre-loaded with the Google Cloud CLI (gcloud), Docker, kubectl, Git, Python, Go, Java, and a full-featured online Cloud Shell Editor based on Eclipse Theia/VS Code.',
    problemSolved: 'Setting up developer workstations with correct cloud credentials, CLI tools, and runtime compilers takes hours and differs across Windows, Mac, and Linux. Cloud Shell gives you an instant, cloud-authenticated developer workstation in any browser.',
    skillLevel: 'Beginner',
    pricingType: 'Free',
    pricingDetails: '100% Free for anyone with a Google Cloud account (includes 5GB persistent storage and up to 50 hours of usage per week).',
    status: 'Active',
    lastVerified: '2025-06-08',
    verifiedSource: 'https://cloud.google.com/shell',
    bestFor: ['Managing Google Cloud resources without local CLI setup', 'Quick web development and code editing in the browser', 'Running tutorials, workshops, and lab demos', 'Git operations and quick container builds'],
    capabilities: [
      'Free 5GB persistent disk storage in $HOME',
      'Pre-installed gcloud, docker, terraform, kubectl, node, python, and git',
      'Integrated Web Preview tool to preview web applications on ports 8080-8084',
      'Built-in full-featured Cloud Shell Editor with VS Code extension support',
      'Pre-authenticated to your active Google Cloud account'
    ],
    whatYouCanBuild: [
      { title: 'Zero-Install Cloud Admin Console', description: 'Run deployment scripts and manage Kubernetes clusters from a Chromebook or tablet.' },
      { title: 'Interactive Developer Tutorial Guide', description: 'Create markdown guides that launch automated command buttons inside user Cloud Shell environments.' }
    ],
    personas: [
      { name: 'Aditya', role: 'DevRel Advocate', avatar: '🎓', reason: 'Runs developer workshops where students follow hands-on labs with zero local configuration issues.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Open Cloud Shell', description: 'Visit shell.cloud.google.com or click the terminal icon in GCP Console.', actionSnippet: 'https://shell.cloud.google.com' },
      { step: 2, title: 'Explore Pre-installed Tools', description: 'Check that gcloud, git, and docker are ready to use immediately.', actionSnippet: 'gcloud version && docker --version' },
      { step: 3, title: 'Open the Code Editor', description: 'Click the "Open Editor" button on the toolbar to launch the VS Code-style IDE.' },
      { step: 4, title: 'Clone a Repository', description: 'Clone your Git repository directly into your 5GB persistent home directory.', actionSnippet: 'git clone https://github.com/googlecloudplatform/cloud-run-hello.git' },
      { step: 5, title: 'Preview Web App', description: 'Start your local web server and click "Web preview" > "Preview on port 8080".' },
      { step: 6, title: 'Deploy to Cloud Run', description: 'Deploy your project directly to production with zero credential configuration.', actionSnippet: 'gcloud run deploy --source .' }
    ],
    howItWorks: {
      title: 'Ephemeral Container VM with Persistent Volume',
      summary: 'Google provisions an ephemeral Docker container backed by a persistent Cloud Storage volume mounted at $HOME.',
      steps: [
        { id: 'sh1', label: 'Browser WebSocket Connect', sublabel: 'HTTPS Terminal Stream', description: 'Browser connects to Google’s Cloud Shell frontend gateway over secure WebSockets.' },
        { id: 'sh2', label: 'Container Instantiation', sublabel: 'Debian Container Image', description: 'Spins up an isolated container pre-baked with hundreds of cloud SDKs and tools.' },
        { id: 'sh3', label: 'Persistent $HOME Mount', sublabel: '5GB Persistent Disk', description: 'User’s persistent home disk is attached, preserving files and SSH keys between sessions.' },
        { id: 'sh4', label: 'OAuth Token Injection', sublabel: 'GCP IAM Credentials', description: 'The VM receives pre-authorized short-lived OAuth credentials matching the signed-in user.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['google-cloud', 'cloud-run', 'kubernetes-engine'],
    resources: {
      website: 'https://cloud.google.com/shell',
      docs: 'https://cloud.google.com/shell/docs'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Build and deploy an entire web app to Cloud Run without installing a single file on your computer.'
  },

  {
    id: 'jetpack-compose',
    name: 'Jetpack Compose',
    tagline: 'Android’s modern, declarative UI toolkit for building native Android apps with less code and powerful tools.',
    category: 'Software Development & Frameworks',
    iconName: 'Smartphone',
    color: '#34A853',
    overview: 'Jetpack Compose is Android’s recommended modern toolkit for building native user interfaces. Replacing legacy XML layouts, Compose uses a declarative programming model in Kotlin that lets developers describe the UI with composable functions, dramatically accelerating app development and eliminating boilerplate.',
    problemSolved: 'Legacy Android UI required juggling XML layout files, `findViewById`, and manual state synchronization, leading to view-state desynchronization and crashes. Compose ensures UI automatically updates when state changes.',
    skillLevel: 'Intermediate',
    pricingType: 'Free',
    pricingDetails: '100% Free and Open Source.',
    status: 'Active',
    lastVerified: '2025-06-10',
    verifiedSource: 'https://developer.android.com/compose',
    bestFor: ['Modern native Android app development', 'Design system implementation in Kotlin', 'Reactive UI state management', 'Multiplatform UI with Compose Multiplatform'],
    capabilities: [
      'Declarative `@Composable` Kotlin functions',
      'Built-in Material 3 dynamic color theming and typography',
      'State hoisting and reactive recomposition',
      'Full backwards interoperability with legacy Android Views',
      'Compose Multiplatform: Run same UI code on iOS, Desktop, and Web'
    ],
    whatYouCanBuild: [
      { title: 'Material 3 Music Player UI', description: 'Create an album browser with dynamic wallpaper-extracted theme colors and fluid gestures.' },
      { title: 'Real-Time Crypto Ticker', description: 'Build an animated crypto price list with smooth card reordering and spring physics animations.' }
    ],
    personas: [
      { name: 'Siddharth', role: 'Android Engineer', avatar: '📱', reason: 'Writes 60% less boilerplate code compared to legacy XML layout architectures.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Open Android Studio', description: 'Start a new project with the "Empty Compose Activity" template.' },
      { step: 2, title: 'Write Composable Function', description: 'Annotate a Kotlin function with `@Composable`.', actionSnippet: '@Composable\nfun Greeting(name: String) {\n  Text(text = "Hello, $name!")\n}' },
      { step: 3, title: 'Add State', description: 'Manage reactive state with `remember` and `mutableStateOf`.', actionSnippet: 'var count by remember { mutableStateOf(0) }' },
      { step: 4, title: 'Inspect in Live Preview', description: 'Add `@Preview` annotation to see visual changes update instantly in the editor.' },
      { step: 5, title: 'Style with MaterialTheme', description: 'Wrap components with `MaterialTheme` for automatic light and dark mode styling.' },
      { step: 6, title: 'Run on Device', description: 'Hit Run to execute the natively compiled UI on your phone or emulator.' }
    ],
    howItWorks: {
      title: 'Declarative State Recomposition Engine',
      summary: 'UI is expressed as pure functions of state; mutations trigger intelligent recomposition of only affected tree nodes.',
      steps: [
        { id: 'jc1', label: 'Initial Composition', sublabel: 'Tree of UI Nodes', description: 'Executes composable functions to build an in-memory description of the UI hierarchy.' },
        { id: 'jc2', label: 'State Mutation', sublabel: 'State<T> Change', description: 'User action or network event updates a observed MutableState property.' },
        { id: 'jc3', label: 'Smart Recomposition', sublabel: 'Selective Re-execution', description: 'Compose intelligently skips unaffected functions and re-executes only functions reading the changed state.' },
        { id: 'jc4', label: 'Layout & Drawing', sublabel: 'Measure and Paint', description: 'Passes measured pixel coordinates to the Android hardware-accelerated canvas.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['android-studio', 'dart', 'flutter'],
    resources: {
      website: 'https://developer.android.com/compose',
      docs: 'https://developer.android.com/develop/ui/compose/documentation',
      tutorials: 'https://developer.android.com/courses/pathways/compose'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Build a habit tracker app featuring interactive checklist animations and progress progress bars.'
  },

  {
    id: 'blockly',
    name: 'Blockly',
    tagline: 'Google’s open-source library for building visual, drag-and-drop block-based programming editors.',
    category: 'Software Development & Frameworks',
    iconName: 'Puzzle',
    color: '#FBBC05',
    overview: 'Blockly is an open-source visual programming library created by Google. It adds a drag-and-drop block coding interface to web, Android, and iOS apps. Users drag graphical interlocking blocks representing code concepts (loops, logic, variables, math) and Blockly outputs syntactically correct code in JavaScript, Python, PHP, Lua, or Dart.',
    problemSolved: 'Teaching programming syntax (missing semicolons, unmatched parentheses) creates huge frustration for beginners and young learners. Blockly removes syntax frustration, allowing learners to focus on computational logic.',
    skillLevel: 'Beginner',
    pricingType: 'Free',
    pricingDetails: '100% Free and Open Source (Apache 2.0 license).',
    status: 'Active',
    lastVerified: '2025-06-08',
    verifiedSource: 'https://developers.google.com/blockly',
    bestFor: ['Educational coding platforms (powers Scratch, Code.org)', 'Low-code / no-code business rule builders', 'Robotics and IoT visual scripting', 'Gamified learning applications'],
    capabilities: [
      'Visual interlocking puzzle-piece blocks enforcing type safety',
      'Generates clean, readable code in Python, JavaScript, Dart, Lua, and PHP',
      'Custom block designer tool for defining proprietary APIs',
      'Full touch and mobile gesture support',
      '100% client-side JavaScript execution with zero backend required'
    ],
    whatYouCanBuild: [
      { title: 'Visual Home Automation Rule Engine', description: 'Allow non-technical smart home users to build automated rules (e.g. "IF time > 8pm AND temperature < 68 THEN turn on heater").' },
      { title: 'Kids Game Programming Sandbox', description: 'Build an educational web game where players program character movements using visual drag-and-drop blocks.' }
    ],
    personas: [
      { name: 'Elena', role: 'EdTech Developer', avatar: '👩‍🏫', reason: 'Creates interactive coding lessons for elementary school computer science curricula.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Install Blockly', description: 'Install the blockly npm package in your web app.', actionSnippet: 'npm install blockly' },
      { step: 2, title: 'Create Container Div', description: 'Add a target `div` in your HTML for the Blockly workspace.', actionSnippet: '<div id="blocklyDiv" style="height: 480px; width: 600px;"></div>' },
      { step: 3, title: 'Inject Workspace', description: 'Inject the workspace into your DOM element using JavaScript.', actionSnippet: 'import * as Blockly from "blockly";\nconst workspace = Blockly.inject("blocklyDiv", { toolbox: toolboxXml });' },
      { step: 4, title: 'Design Custom Blocks', description: 'Use the Blockly Developer Tools to define new block shapes and inputs.' },
      { step: 5, title: 'Generate Code', description: 'Convert the workspace blocks into executable Python or JavaScript.', actionSnippet: 'import { javascriptGenerator } from "blockly/javascript";\nconst code = javascriptGenerator.workspaceToCode(workspace);' },
      { step: 6, title: 'Execute Generated Code', description: 'Safely execute or display the generated output in your application.' }
    ],
    howItWorks: {
      title: 'Abstract Syntax Tree (AST) Visual Block Composition',
      summary: 'Interlocking visual shapes represent semantic grammar rules; Blockly parses connected blocks into an AST and generates target language code.',
      steps: [
        { id: 'bl1', label: 'SVG Block Interaction', sublabel: 'Canvas Drag & Drop', description: 'Blocks snap together using SVG connector points that enforce type matching.' },
        { id: 'bl2', label: 'XML / JSON Workspace State', sublabel: 'State Serialization', description: 'The layout of blocks is serialized into a lightweight JSON tree structure.' },
        { id: 'bl3', label: 'Generator Parsing', sublabel: 'Language Generator', description: 'Walks the block tree recursively and evaluates each block’s code generator function.' },
        { id: 'bl4', label: 'Source Code Emission', sublabel: 'JS / Python / Dart', description: 'Emits cleanly indented, syntactically correct source code ready for execution.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['dart', 'chrome-devtools'],
    resources: {
      website: 'https://developers.google.com/blockly',
      docs: 'https://developers.google.com/blockly/guides/overview',
      github: 'https://github.com/google/blockly'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Build an educational web sandbox where users drag blocks to steer an animated turtle across a canvas.'
  },

  {
    id: 'angular',
    name: 'Angular',
    tagline: 'Google’s enterprise web framework for building performant, modern single-page web applications.',
    category: 'Software Development & Frameworks',
    iconName: 'Globe',
    color: '#DD0031',
    overview: 'Angular is a TypeScript-based open-source web application framework maintained by the Angular team at Google. Designed for high-scale enterprise applications, Angular offers built-in routing, state management, dependency injection, client-side hydration, and Signals for fine-grained reactivity with zero compilation surprises.',
    problemSolved: 'Large enterprise teams building web applications often struggle with chaotic architectures when assembling unopinionated libraries. Angular provides a robust, batteries-included engineering framework with guaranteed best practices.',
    skillLevel: 'Intermediate',
    pricingType: 'Free',
    pricingDetails: '100% Free and Open Source (MIT License).',
    status: 'Active',
    lastVerified: '2025-06-08',
    verifiedSource: 'https://angular.dev',
    bestFor: ['Large-scale enterprise web applications', 'High-reliability mission-critical portals', 'Teams requiring strict architectural conventions', 'Progressive Web Apps with SSR and Hydration'],
    capabilities: [
      'Signals-based fine-grained reactivity for lightning-fast DOM updates',
      'Built-in dependency injection system and modular service architecture',
      'Modern standalone components without NgModule boilerplate',
      'Server-Side Rendering (SSR) and partial hydration with hydration replay',
      'Comprehensive Angular CLI with automated migration schematics'
    ],
    whatYouCanBuild: [
      { title: 'Enterprise Healthcare Portal', description: 'Build a compliant medical records dashboard with role-based routing and secure forms.' },
      { title: 'Global Banking Operations Dashboard', description: 'Create high-throughput financial trading monitors with fine-grained Signal updates.' }
    ],
    personas: [
      { name: 'Vikram', role: 'Enterprise Frontend Architect', avatar: '🏢', reason: 'Enforces strict code patterns across 50 developers building enterprise CRM tools.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Install Angular CLI', description: 'Install the official CLI using npm globally.', actionSnippet: 'npm install -g @angular/cli' },
      { step: 2, title: 'Create New Project', description: 'Initialize a new standalone Angular project with SSR enabled.', actionSnippet: 'ng new my-angular-app' },
      { step: 3, title: 'Serve Locally', description: 'Start the Vite-powered development server.', actionSnippet: 'cd my-angular-app\nng serve' },
      { step: 4, title: 'Generate Components', description: 'Use CLI generators to scaffold components with TypeScript, HTML, and CSS.', actionSnippet: 'ng generate component user-profile' },
      { step: 5, title: 'Use Angular Signals', description: 'Define reactive state using signals for fine-grained rendering.', actionSnippet: 'count = signal(0);\nincrement() { this.count.update(v => v + 1); }' },
      { step: 6, title: 'Build for Production', description: 'Compile an optimized production bundle with tree-shaking.', actionSnippet: 'ng build' }
    ],
    howItWorks: {
      title: 'Signals Reactivity & Ivy Compiler Architecture',
      summary: 'TypeScript components compile into optimized instruction sets where Signals propagate direct DOM mutations without zone-wide tree diffing.',
      steps: [
        { id: 'ng1', label: 'Ivy Compilation', sublabel: 'AOT Template Compilation', description: 'HTML templates are converted into concise JavaScript DOM generation instructions.' },
        { id: 'ng2', label: 'Signals Graph', sublabel: 'Fine-Grained Reactivity', description: 'State reads automatically subscribe to reactive Signals nodes.' },
        { id: 'ng3', label: 'Targeted DOM Patching', sublabel: 'Direct Element Updates', description: 'When a Signal value changes, Angular surgically updates only the exact DOM node.' },
        { id: 'ng4', label: 'Hydration & Deferrable Views', sublabel: '@defer Blocks', description: 'Components load lazily as they scroll into view and seamlessly rehydrate server markup.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['chrome-devtools', 'firebase'],
    resources: {
      website: 'https://angular.dev',
      docs: 'https://angular.dev/overview',
      tutorials: 'https://angular.dev/tutorials',
      github: 'https://github.com/angular/angular'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Build an enterprise inventory management dashboard with filtering and real-time stock alert Signals.'
  },

  {
    id: 'google-docs',
    name: 'Google Docs',
    tagline: 'Google’s collaborative, cloud-native word processor for drafting and editing documents in real time.',
    category: 'Productivity & Collaboration',
    iconName: 'FileText',
    color: '#4285F4',
    overview: 'Google Docs is an online word processor that lets users create and format text documents while collaborating with other people in real time. Features include smart canvas chips, suggested edits, version history, document outline generation, and Gemini AI writing assistance ("Help me write").',
    problemSolved: 'Attaching word processor files over email causes fragmentation and conflicting versions. Google Docs provides a single source of truth in the cloud with live cursor collaboration.',
    skillLevel: 'Beginner',
    pricingType: 'Free',
    pricingDetails: '100% Free for personal Google accounts. Included with Google Workspace business tiers.',
    status: 'Active',
    lastVerified: '2025-06-12',
    verifiedSource: 'https://docs.google.com',
    bestFor: ['Real-time collaborative drafting', 'Meeting notes with smart chips', 'Research papers with citation tools', 'Publishing public web documents'],
    capabilities: [
      'Multiplayer co-authoring with live avatars and cursor positions',
      'Smart Canvas chips: @ mentions for people, files, dates, and dropdown menus',
      'Gemini AI writing assistant for drafting and summarizing text',
      'Full revision history with ability to name and restore prior snapshots',
      'Offline editing mode via Chrome extension'
    ],
    whatYouCanBuild: [
      { title: 'Collaborative Product Requirements Document (PRD)', description: 'Draft a software feature spec with embedded Jira/GitHub smart chips and inline comments.' },
      { title: 'Interactive Meeting Agenda', description: 'Create an ongoing team agenda with action item checkboxes and assignee tags.' }
    ],
    personas: [
      { name: 'Maria', role: 'Technical Writer', avatar: '📝', reason: 'Collects feedback from 10 engineers simultaneously using Suggesting mode.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Open Google Docs', description: 'Navigate to docs.new in any web browser to instantly create a new document.', actionSnippet: 'https://docs.new' },
      { step: 2, title: 'Use Markdown Shortcuts', description: 'Type `# ` for Heading 1, `* ` for bullet lists, or `[] ` for checklists.' },
      { step: 3, title: 'Tag with Smart Chips', description: 'Type `@` to mention colleagues, embed Google Drive files, or set calendar dates.' },
      { step: 4, title: 'Collaborate & Comment', description: 'Highlight any passage and click the comment icon or press Ctrl+Alt+M.' },
      { step: 5, title: 'Review Suggested Edits', description: 'Switch the top-right mode from "Editing" to "Suggesting" to propose non-destructive changes.' },
      { step: 6, title: 'Export or Download', description: 'File > Download as PDF, Microsoft Word (.docx), or EPUB.' }
    ],
    howItWorks: {
      title: 'Canvas Rendering & Real-Time Sync',
      summary: 'Text runs are rendered using custom canvas layouts while concurrent edits are synced via Operational Transformation.',
      steps: [
        { id: 'gd1', label: 'Canvas Text Rendering', sublabel: 'Custom WebGL/Canvas', description: 'Text glyphs are painted directly for identical typography across operating systems.' },
        { id: 'gd2', label: 'OT Mutation Stream', sublabel: 'Atomic Keystrokes', description: 'Character insertions are streamed over secure WebSockets.' },
        { id: 'gd3', label: 'Collaborator Cursor Sync', sublabel: 'Presence Heartbeats', description: 'Remote collaborators’ selection ranges and cursor coordinates update in real time.' },
        { id: 'gd4', label: 'Continuous Cloud Save', sublabel: 'Google Drive Storage', description: 'Every character mutation is automatically journaled and committed to Google Drive.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['google-workspace', 'google-drive', 'notebooklm'],
    resources: {
      website: 'https://docs.google.com',
      docs: 'https://support.google.com/docs'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Create an automated weekly team retro document template complete with action item smart chips.'
  },

  {
    id: 'google-search-console',
    name: 'Google Search Console',
    tagline: 'Google’s official webmaster tool to monitor, maintain, and troubleshoot your site’s presence in Google Search results.',
    category: 'Search, Web & Ecosystem',
    iconName: 'Search',
    color: '#4285F4',
    overview: 'Google Search Console (GSC) is a free service offered by Google that helps web developers, site owners, and SEO specialists monitor, maintain, and troubleshoot their website’s presence in Google Search results. It reveals which search queries bring traffic, crawl errors, sitemap submission status, and Core Web Vitals health.',
    problemSolved: 'Webmasters had no visibility into how Google’s search crawler (Googlebot) viewed their websites, why pages were indexed or de-indexed, or what queries brought organic traffic. GSC provides direct diagnostic transparency from Google Search.',
    skillLevel: 'Beginner',
    pricingType: 'Free',
    pricingDetails: '100% Free for all verified website owners.',
    status: 'Active',
    lastVerified: '2025-06-08',
    verifiedSource: 'https://search.google.com/search-console',
    bestFor: ['Tracking Google Search impressions & clicks', 'Inspecting index status of individual URLs', 'Submitting XML sitemaps to Googlebot', 'Troubleshooting Core Web Vitals mobile usability errors'],
    capabilities: [
      'Performance report showing Impressions, Clicks, Click-Through Rate (CTR), and average Position',
      'URL Inspection tool showing live crawl status, canonical URL, and index eligibility',
      'Sitemaps submission and indexing coverage diagnostics',
      'Page Experience and Core Web Vitals real-user metric dashboards',
      'Security issues and manual penalty notices'
    ],
    whatYouCanBuild: [
      { title: 'Organic Search Growth Tracker', description: 'Identify high-impression, low-CTR keywords and rewrite page meta titles to double organic search traffic.' },
      { title: 'Automated 404 & Indexing Monitor', description: 'Detect and resolve broken crawl errors before they impact search rankings.' }
    ],
    personas: [
      { name: 'Tanya', role: 'SEO & Content Strategist', avatar: '🔍', reason: 'Discovers high-intent search queries that customers use to find her software products.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Open Search Console', description: 'Visit search.google.com/search-console and sign in with your Google account.', actionSnippet: 'https://search.google.com/search-console' },
      { step: 2, title: 'Verify Ownership', description: 'Add your domain and verify via DNS TXT record, HTML file upload, or Google Tag Manager.' },
      { step: 3, title: 'Submit Sitemap', description: 'Under Sitemaps, submit your `sitemap.xml` URL so Googlebot discovers all pages.', actionSnippet: 'https://example.com/sitemap.xml' },
      { step: 4, title: 'Inspect Key URLs', description: 'Paste a specific page URL into the top search bar to check its index status.' },
      { step: 5, title: 'Analyze Performance', description: 'Open the Performance tab to view top queries, pages, countries, and devices.' },
      { step: 6, title: 'Review Core Web Vitals', description: 'Check the Experience reports to fix pages that fail mobile LCP or CLS thresholds.' }
    ],
    howItWorks: {
      title: 'Googlebot Crawl, Indexing & Search Query Telemetry',
      summary: 'Googlebot indexes web pages and records impression and click telemetry from live Google Search query results.',
      steps: [
        { id: 'sc1', label: 'Crawl Scheduling', sublabel: 'Googlebot Queue', description: 'Googlebot schedules URLs discovered from sitemaps and external hyperlinks for crawling.' },
        { id: 'sc2', label: 'Rendering & Indexing', sublabel: 'Headless Chromium', description: 'Googlebot renders JavaScript and extracts text, structured schema markup, and canonical tags.' },
        { id: 'sc3', label: 'Serving & Query Logging', sublabel: 'Google Search Results', description: 'Search impressions and user click actions are logged with rank position and search terms.' },
        { id: 'sc4', label: 'Console Aggregate Reporting', sublabel: 'Performance Dashboard', description: 'Data is aggregated and presented in Search Console reports with 16-month historical trends.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['lighthouse', 'pagespeed-insights', 'google-analytics'],
    resources: {
      website: 'https://search.google.com/search-console',
      docs: 'https://support.google.com/webmasters'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Perform a comprehensive SEO audit to resolve indexing errors on your personal portfolio website.'
  },

  {
    id: 'google-analytics',
    name: 'Google Analytics (GA4)',
    tagline: 'Google’s enterprise web and app analytics service for measuring traffic, engagement, and user journeys.',
    category: 'Search, Web & Ecosystem',
    iconName: 'BarChart2',
    color: '#FBBC05',
    overview: 'Google Analytics 4 (GA4) is Google’s next-generation measurement platform. Built around an event-based data model rather than legacy session-based pageviews, GA4 unifies cross-platform tracking across web and mobile apps. It utilizes machine learning to fill data gaps (predictive metrics), provides native export to BigQuery, and respects modern privacy regulations.',
    problemSolved: 'Legacy web analytics tracked desktop sessions with cookies, failing to track users moving across mobile apps, tablets, and web browsers. GA4 offers privacy-first, event-driven cross-device customer journey tracking.',
    skillLevel: 'Beginner',
    pricingType: 'Freemium / Free Tier',
    pricingDetails: 'Free for standard web properties. GA4 360 is available for enterprise organizations with massive monthly hit volumes.',
    status: 'Active',
    lastVerified: '2025-06-10',
    verifiedSource: 'https://analytics.google.com',
    bestFor: ['E-commerce funnel conversion tracking', 'Cross-platform web and mobile app measurement', 'Free streaming raw data export to BigQuery', 'Audience segmentation for Google Ads'],
    capabilities: [
      'Event-based tracking model (page_view, scroll, click, file_download, purchase)',
      'Free raw event export directly into Google BigQuery',
      'Exploration reports: Funnel exploration, Path exploration, and Cohort analysis',
      'AI-powered predictive metrics (churn probability, purchase probability)',
      'Consent Mode integration for GDPR and privacy compliance'
    ],
    whatYouCanBuild: [
      { title: 'E-Commerce Checkout Drop-off Funnel', description: 'Identify the exact step in the checkout flow where users abandon their shopping carts.' },
      { title: 'BigQuery User Retention Pipeline', description: 'Stream GA4 events to BigQuery to calculate 90-day retention curves and customer lifetime value.' }
    ],
    personas: [
      { name: 'Chloe', role: 'Growth Marketer', avatar: '📈', reason: 'Tracks conversion rates from paid ad campaigns to checkout completion.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create GA4 Property', description: 'Go to analytics.google.com and set up an account and property.', actionSnippet: 'https://analytics.google.com' },
      { step: 2, title: 'Create Data Stream', description: 'Add a Web, iOS, or Android data stream to receive your Measurement ID (`G-XXXXXXXXXX`).' },
      { step: 3, title: 'Install Tracking Tag', description: 'Add the Google tag snippet to your site header or deploy via Google Tag Manager.', actionSnippet: '<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>' },
      { step: 4, title: 'Test Realtime Report', description: 'Open your website in another tab and watch real-time active users and events appear in the Realtime dashboard.' },
      { step: 5, title: 'Link to BigQuery', description: 'Admin > BigQuery Links > Link your Google Cloud project to receive daily raw event tables for free.' },
      { step: 6, title: 'Build Funnel Explorations', description: 'Navigate to Explore > Funnel Exploration to analyze multi-step conversion funnels.' }
    ],
    howItWorks: {
      title: 'Event Telemetry to BigQuery Streaming Pipeline',
      summary: 'Client-side events collect on user action, batch send to Google telemetry endpoints, and stream into BigQuery.',
      steps: [
        { id: 'ga1', label: 'Client Event Dispatch', sublabel: 'gtag.js / Firebase SDK', description: 'User interactions trigger structured event objects with parameters and timestamps.' },
        { id: 'ga2', label: 'Measurement Protocol Ingest', sublabel: 'Google Telemetry Ingest', description: 'Events transmit via beacon HTTP POST to Google analytics collection endpoints.' },
        { id: 'ga3', label: 'Identity Stitching & Modeling', sublabel: 'User ID & ML Modeling', description: 'Stitches cross-device actions and models conversions for users without cookie consent.' },
        { id: 'ga4', label: 'BigQuery Export & Dashboards', sublabel: 'Real-time Streaming Mart', description: 'Raw event rows stream into BigQuery tables for ad-hoc SQL analysis.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['bigquery', 'looker-studio', 'google-search-console'],
    resources: {
      website: 'https://analytics.google.com',
      docs: 'https://developers.google.com/analytics'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Set up an e-commerce event funnel to track product views, add-to-cart clicks, and final purchases.'
  },

  {
    id: 'google-trends',
    name: 'Google Trends',
    tagline: 'Google’s public tool for analyzing the popularity of search queries across regions, languages, and time.',
    category: 'Search, Web & Ecosystem',
    iconName: 'TrendingUp',
    color: '#4285F4',
    overview: 'Google Trends is a public analytics portal that analyzes the popularity of top search queries in Google Search across various regions and languages. The website uses graphs to compare the search volume of different queries over time, revealing seasonal cycles, cultural shifts, and viral phenomena.',
    problemSolved: 'Entrepreneurs, researchers, and marketers often guess whether consumer interest in a topic is growing or dying. Google Trends provides real-time search demand data directly from the world’s most used search engine.',
    skillLevel: 'Beginner',
    pricingType: 'Free',
    pricingDetails: '100% Free and open to the public.',
    status: 'Active',
    lastVerified: '2025-06-08',
    verifiedSource: 'https://trends.google.com',
    bestFor: ['Market demand research', 'Keyword seasonality tracking', 'Comparing competing brand popularity', 'Discovering breakout trending news topics'],
    capabilities: [
      'Comparative search interest graphs from 2004 to present day',
      'Geographic breakdown by country, state, and metropolitan DMA',
      'Related topics and "Breakout" rising search queries (+5000% surge)',
      'Sub-category filtering (Web search, Image search, News, Google Shopping, YouTube)',
      'Embeddable interactive charts and CSV data downloads'
    ],
    whatYouCanBuild: [
      { title: 'Product Market Demand Validator', description: 'Compare consumer search volume for three new product ideas before investing in manufacturing.' },
      { title: 'Content Editorial Calendar', description: 'Identify the exact calendar week when seasonal searches for "holiday recipes" spike.' }
    ],
    personas: [
      { name: 'Maya', role: 'Startup Founder', avatar: '🚀', reason: 'Validates whether market demand for her industry is growing or declining before raising venture capital.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Visit Google Trends', description: 'Navigate to trends.google.com in your web browser.', actionSnippet: 'https://trends.google.com' },
      { step: 2, title: 'Enter Search Term', description: 'Type a topic (e.g. "Artificial Intelligence") into the search bar.' },
      { step: 3, title: 'Add Comparison Term', description: 'Click "+ Compare" to add a rival term (e.g. "Quantum Computing") side-by-side.' },
      { step: 4, title: 'Filter by Geography & Time', description: 'Adjust the timeframe (Past 5 years, Past 30 days) and location (Worldwide or specific country).' },
      { step: 5, title: 'Inspect Regional Interest', description: 'Scroll to the regional heat map to see which states or nations have the highest interest.' },
      { step: 6, title: 'Explore Rising Queries', description: 'Examine "Related queries" to find rising topics tagged as "Breakout".' }
    ],
    howItWorks: {
      title: 'Search Index Sampling & Normalization',
      summary: 'Google samples billions of search queries, eliminates duplicates, and normalizes counts on a 0-100 relative index.',
      steps: [
        { id: 'gt1', label: 'Query Log Sampling', sublabel: 'Google Search Fleet', description: 'Samples anonymized, categorized search queries from Google’s global search index.' },
        { id: 'gt2', label: 'Noise & Bot Filtering', sublabel: 'Anti-Spam Filter', description: 'Removes automated bot traffic and repeated queries from the same user.' },
        { id: 'gt3', label: 'Relative Normalization', sublabel: '0 to 100 Index', description: 'Divides count by total searches in that region and time; scales the peak point to 100.' },
        { id: 'gt4', label: 'Vector Aggregation', sublabel: 'Geo & Time Series', description: 'Aggregates normalized indices into interactive geo maps and downloadable time series.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['google-search-console', 'google-analytics', 'bigquery'],
    resources: {
      website: 'https://trends.google.com',
      docs: 'https://support.google.com/trends'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Analyze 10 years of search data to identify which renewable energy technologies have gained the fastest public interest.'
  },

  {
    id: 'google-photos',
    name: 'Google Photos',
    tagline: 'Google’s intelligent photo and video storage and sharing service with state-of-the-art computer vision search and AI editing.',
    category: 'Creative & Media Technologies',
    iconName: 'Image',
    color: '#4285F4',
    overview: 'Google Photos is Google’s photo and video storage service that automatically organizes your visual memories. Utilizing advanced computer vision and generative AI, Google Photos enables searching photos by faces, landmarks, pets, and objects without manual tagging, and features AI tools like Magic Eraser, Photo Unblur, and Magic Editor.',
    problemSolved: 'Manually tagging and organizing thousands of smartphone photos into albums is time-consuming, and fixing imperfect shots (unwanted tourists in background, blur) used to require complex desktop photo editors. Google Photos automates organization and editing with AI.',
    skillLevel: 'Beginner',
    pricingType: 'Freemium / Free Tier',
    pricingDetails: '15GB free storage shared across Google account (Drive, Gmail, Photos). Google One subscriptions expand storage starting at $1.99/mo for 100GB.',
    status: 'Active',
    lastVerified: '2025-06-08',
    verifiedSource: 'https://photos.google.com',
    bestFor: ['Automatic photo & video cloud backup', 'Searching photos by concept or face ("photos of dad on a boat")', 'AI photo editing (Magic Editor, Magic Eraser, Best Take)', 'Collaborative family albums'],
    capabilities: [
      'Semantic visual search (search for "dog with red collar" or "eiffel tower sunset")',
      'Magic Eraser for 1-tap removal of unwanted background objects',
      'Magic Editor powered by generative AI to reposition subjects or change the sky',
      'Shared albums with real-time family updates',
      'Photo Unblur and Portrait Light adjustments'
    ],
    whatYouCanBuild: [
      { title: 'Curated Family Archive', description: 'Create an automated shared album that automatically adds every new photo of your children for grandparents to see.' }
    ],
    personas: [
      { name: 'Sarah', role: 'Parent & Creator', avatar: '📸', reason: 'Finds photos of her vacation from 4 years ago in 2 seconds by typing "beach campfire".' }
    ],
    gettingStarted: [
      { step: 1, title: 'Open Google Photos', description: 'Install the app on iOS/Android or visit photos.google.com.', actionSnippet: 'https://photos.google.com' },
      { step: 2, title: 'Turn on Backup', description: 'Enable automatic backup to keep memories safe in your Google Account.' },
      { step: 3, title: 'Search with Natural Language', description: 'Type anything into the search bar: "hiking in Colorado", "cats", "receipts".' },
      { step: 4, title: 'Use Magic Eraser', description: 'Open any photo, click Edit > Tools > Magic Eraser, and circle distractions to remove them.' },
      { step: 5, title: 'Try Magic Editor', description: 'Tap the generative AI Magic Editor icon to pinch, reposition, and relight subjects.' },
      { step: 6, title: 'Create Shared Album', description: 'Select photos, click Share, and invite friends to contribute their photos.' }
    ],
    howItWorks: {
      title: 'Visual Embedding & Generative Inpainting Pipeline',
      summary: 'Photos are analyzed by computer vision models extracting facial embeddings and object tags, with generative inpainting fixing selected edits.',
      steps: [
        { id: 'gp1', label: 'Cloud Ingestion', sublabel: 'Encrypted Upload', description: 'Photos stream over Wi-Fi and save securely in Google Cloud storage.' },
        { id: 'gp2', label: 'Visual Feature Extraction', sublabel: 'Deep Vision Transformer', description: 'Generates high-dimensional vector embeddings representing visual concepts, colors, and faces.' },
        { id: 'gp3', label: 'Face Clustering', sublabel: 'Private Facial Recognition', description: 'Privately clusters matching faces together on your personal account.' },
        { id: 'gp4', label: 'Generative Inpainting', sublabel: 'Diffusion Model', description: 'Magic Editor replaces removed objects by generating realistic contextual background pixels.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['imagen', 'youtube-studio'],
    resources: {
      website: 'https://photos.google.com',
      docs: 'https://support.google.com/photos'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Organize your entire travel history into automated geolocated albums with AI-enhanced photography.'
  }
];
