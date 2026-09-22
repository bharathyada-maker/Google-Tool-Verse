import { GoogleTool } from '../types';

export const EXPANDED_TOOLS: GoogleTool[] = [
  // ==================== ARTIFICIAL INTELLIGENCE & MACHINE LEARNING ====================
  {
    id: 'google-vids',
    name: 'Google Vids',
    tagline: 'Google’s AI-powered video creation and collaborative storytelling app for Google Workspace, powered by Gemini.',
    category: 'Artificial Intelligence & Machine Learning',
    iconName: 'Video',
    color: '#1A73E8',
    overview: 'Google Vids is an AI-powered video creation app designed specifically for work and business teams within Google Workspace. Powered by Gemini, Vids helps anyone generate high-impact pitch decks, training videos, product recaps, project updates, and onboarding walkthroughs from a simple text prompt or existing Docs and Slides.',
    problemSolved: 'Creating professional workplace videos previously required expensive specialized editing software, specialized video editing skills, and fragmented workflows between documents, scripts, and video renders. Google Vids integrates video creation directly into Google Workspace with automated storyboarding, AI voiceovers, and real-time team collaboration.',
    skillLevel: 'Beginner',
    pricingType: 'Paid / Enterprise',
    pricingDetails: 'Included with Google Workspace plans that feature Gemini for Google Workspace add-on (Business, Enterprise, and Education tiers).',
    status: 'Active',
    lastVerified: '2025-06-20',
    verifiedSource: 'https://workspace.google.com/products/vids/',
    bestFor: ['Corporate onboarding & employee training videos', 'Product demo recaps & executive updates', 'Customer pitch decks & sales enablement', 'Team sprint reviews & asynchronous updates'],
    capabilities: [
      'Gemini-powered storyboard and script generation from text prompts or Google Docs',
      'Studio-grade AI voiceovers with customizable tones and pacing',
      'Built-in recording studio for screen capture, webcam, and audio',
      'Curated royalty-free stock library with millions of video clips, images, and audio tracks',
      'Real-time Google Workspace co-authoring, comments, and granular sharing permissions'
    ],
    whatYouCanBuild: [
      { title: 'Interactive Employee Onboarding Video', description: 'Transform employee handbook Docs into an engaging 3-minute video overview with chapters and voiceover.' },
      { title: 'Product Launch Pitch Video', description: 'Convert a Google Slides feature deck into an animated customer video with professional voiceover.' },
      { title: 'Weekly Engineering Sprint Recap', description: 'Record screen walkthroughs of new software features and stitch them with AI title cards for executive stakeholders.' }
    ],
    personas: [
      { name: 'Elena', role: 'Head of People & HR', avatar: '👩‍💼', reason: 'Creates interactive onboarding modules from policy documents in minutes without hiring video editors.' },
      { name: 'Marcus', role: 'Product Manager', avatar: '📱', reason: 'Publishes bi-weekly asynchronous sprint release videos to keep global engineering and sales aligned.' },
      { name: 'Sophia', role: 'Sales Enablement Lead', avatar: '💼', reason: 'Generates polished customer pitch videos customized for target enterprise prospects.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Open Google Vids', description: 'Navigate to vids.google.com or click New > Google Vids from Google Drive.', actionSnippet: 'https://vids.google.com' },
      { step: 2, title: 'Input Prompt or Source Doc', description: 'Type your video concept or attach an existing Google Doc or Google Slides presentation.', actionSnippet: 'Prompt: "Create a 2-minute product overview for our new mobile app"' },
      { step: 3, title: 'Review Gemini Storyboard', description: 'Gemini generates a scene-by-scene outline with suggested visual layouts, text overlays, and scripts.' },
      { step: 4, title: 'Select Voiceover & Stock Media', description: 'Choose an AI voice preset or record your own narration using the built-in recording booth.' },
      { step: 5, title: 'Collaborate with Team', description: 'Share the video draft with colleagues to leave comments, adjust timing, or swap scenes in real time.' },
      { step: 6, title: 'Export & Embed', description: 'Export as high-definition MP4 or embed seamlessly into Google Sites, Classroom, or Drive.' }
    ],
    howItWorks: {
      title: 'Prompt-to-Storyboard & Workspace Video Synthesis',
      summary: 'Gemini analyzes text inputs and source documents to generate scene pacing, media matching, and synthesized speech.',
      steps: [
        { id: 'v1', label: 'Document & Prompt Analysis', sublabel: 'Gemini Semantics', description: 'Extracts key narratives, headings, and bullet points from your prompt or attached Google Docs/Slides.', technicalDetails: 'Gemini 1.5 multimodal parsing identifying narrative arc and core thematic concepts.' },
        { id: 'v2', label: 'Storyboard Generation', sublabel: 'Scene Sequencing', description: 'Automatically maps narrative beats into individual visual scenes with recommended transition timings.', technicalDetails: 'Generates JSON scene descriptor specifying asset types, text placement, and duration.' },
        { id: 'v3', label: 'Asset Match & Ingest', sublabel: 'Stock & User Media', description: 'Pulls matching high-res b-roll from the royalty-free media library and aligns user uploaded media.', technicalDetails: 'Semantic asset retrieval matching scene keywords with high-definition video clips.' },
        { id: 'v4', label: 'Neural Voiceover Synthesis', sublabel: 'Text-to-Speech Engine', description: 'Generates studio-grade voice narration synchronized with scene keyframes.', technicalDetails: 'Cloud Text-to-Speech neural vocoder delivering natural inflection and pacing.' },
        { id: 'v5', label: 'Workspace Real-Time Render', sublabel: 'WebAssembly & WebGL', description: 'Renders the video canvas in browser with real-time multi-user collaborative editing.', technicalDetails: 'Cloud-assisted WebGL composition supporting instant playback without long export waits.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['gemini', 'google-workspace', 'google-docs', 'google-drive', 'veo'],
    resources: {
      website: 'https://workspace.google.com/products/vids/',
      docs: 'https://support.google.com/vids/'
    },
    isTrending: true,
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Turn your quarterly project roadmap document into a 90-second animated video presentation for your team.'
  },

  {
    id: 'vertex-agent-builder',
    name: 'Vertex AI Agent Builder',
    tagline: 'No-code and code-first enterprise platform to build, ground, and deploy generative AI agents and RAG search.',
    category: 'Artificial Intelligence & Machine Learning',
    iconName: 'Bot',
    color: '#1A73E8',
    overview: 'Vertex AI Agent Builder (combining Vertex AI Search and Conversation) enables developers and enterprises to build conversational generative AI agents and intelligent search applications with enterprise-grade grounding on their own data and Google Search.',
    problemSolved: 'Building enterprise agents previously required manual chunking, embedding generation, vector database tuning, orchestrating LLM tool calling, and implementing safety guards. Agent Builder provides a unified managed platform with built-in RAG and grounding.',
    skillLevel: 'Intermediate',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Priced per search query ($10.70 / 1,000 queries for generative search) and chat session on Google Cloud.',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://cloud.google.com/vertex-ai/docs/agent-builder',
    bestFor: ['Customer support AI agents', 'Internal enterprise knowledge search', 'Grounded conversational assistants', 'Automated workflow execution via API tool calling'],
    capabilities: [
      'Grounded RAG search across PDFs, websites, BigQuery, and enterprise datastores',
      'Google Search grounding for live factual accuracy and citation attribution',
      'Natural language goal-driven agent orchestration with tool calling',
      'Zero-setup semantic vector search with automated chunking and embeddings',
      'Enterprise access controls, VPC-SC compliance, and private data isolation'
    ],
    whatYouCanBuild: [
      { title: 'Enterprise Policy Assistant', description: 'A conversational agent that answers HR and compliance questions citing exact employee handbook pages.' },
      { title: 'Support Ticket Triage Agent', description: 'An automated agent that diagnoses customer issues, searches internal knowledge, and executes refunds via API.' }
    ],
    personas: [
      { name: 'Ravi', role: 'Enterprise AI Architect', avatar: '👔', reason: 'Deploys grounded customer support agents with verified citations in under a week.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Open Vertex AI Console', description: 'Navigate to console.cloud.google.com/gen-app-builder.', actionSnippet: 'https://console.cloud.google.com/gen-app-builder' },
      { step: 2, title: 'Create Data Store', description: 'Connect Cloud Storage buckets containing company PDFs, websites, or BigQuery tables.' },
      { step: 3, title: 'Define Agent Goals', description: 'Specify system instructions, user personas, and conversation guidelines.' },
      { step: 4, title: 'Add OpenAPI Tools', description: 'Upload OpenAPI specs to empower the agent to execute real-time backend actions.' },
      { step: 5, title: 'Test in Preview Sandbox', description: 'Interact with the agent in the console to verify grounding citations and tool trigger accuracy.' },
      { step: 6, title: 'Deploy via SDK or Web Widget', description: 'Embed the conversational widget into your portal or connect via Python/Node.js SDKs.' }
    ],
    howItWorks: {
      title: 'Grounded Agent Orchestration & RAG Pipeline',
      summary: 'Queries are semantically matched against indexed enterprise datastores, evaluated by Gemini, and validated for citations.',
      steps: [
        { id: 'ab1', label: 'Datastore Ingestion & Chunking', sublabel: 'Document Indexing', description: 'Connects to PDFs, HTML, or databases, parsing and embedding content into vector indices.', technicalDetails: 'Google text-embedding-gecko models indexing chunks with semantic vector representations.' },
        { id: 'ab2', label: 'Hybrid Vector & Keyword Retrieval', sublabel: 'High-Recall Search', description: 'Combines dense neural embeddings with BM25 lexical search for maximum precision.', technicalDetails: 'RankBrain and ScaNN vector nearest neighbor algorithms executing in sub-50ms.' },
        { id: 'ab3', label: 'Gemini Context Synthesis', sublabel: 'Grounded Reasoning', description: 'Relevant chunks are passed into Gemini along with the user conversation history.', technicalDetails: 'System prompt enforces strict attribution, preventing hallucination by citing chunk IDs.' },
        { id: 'ab4', label: 'Tool Invocation & Response', sublabel: 'Action Execution', description: 'If an action is required, the agent triggers external REST endpoints and returns verified answers.', technicalDetails: 'Validates JSON output against OpenAPI parameters before executing API calls.' }
      ]
    },
    demoType: 'gemini-sandbox',
    relatedToolIds: ['gemini', 'vertex-ai', 'google-cloud', 'cloud-storage'],
    resources: {
      website: 'https://cloud.google.com/products/agent-builder',
      docs: 'https://cloud.google.com/vertex-ai/docs/agent-builder'
    },
    isTrending: true,
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Build a customer service agent that answers shipping questions grounded in your logistics database with live tracking links.'
  },

  {
    id: 'mediapipe',
    name: 'MediaPipe',
    tagline: 'Google’s open-source framework for building cross-platform, on-device machine learning pipelines for vision, audio, and text.',
    category: 'Artificial Intelligence & Machine Learning',
    iconName: 'Cpu',
    color: '#00796B',
    overview: 'MediaPipe is an open-source, cross-platform framework developed by Google for running customizable machine learning solutions on-device. It powers real-time computer vision, hand tracking, face mesh, pose estimation, and on-device LLM inference across Android, iOS, Web (WebAssembly/WebGL), and desktop.',
    problemSolved: 'Running complex ML models on client devices previously suffered from high latency, heavy battery drain, and difficult cross-platform compilation. MediaPipe offers pre-optimized, GPU-accelerated pipelines that run at 60+ FPS locally without cloud network calls.',
    skillLevel: 'Intermediate',
    pricingType: 'Free',
    pricingDetails: '100% Free and open-source under the Apache 2.0 license.',
    status: 'Active',
    lastVerified: '2025-06-18',
    verifiedSource: 'https://ai.google.dev/edge/mediapipe/solutions/guide',
    bestFor: ['Real-time hand and gesture tracking', 'Face mesh and facial landmark detection', 'On-device GenAI (Gemma) execution', 'Interactive AR web and mobile applications'],
    capabilities: [
      'Real-time 21-point 3D hand landmark detection',
      '468-point 3D Face Mesh with blendshapes for realistic avatar driving',
      'Pose estimation (33 body keypoints) for fitness tracking',
      'MediaPipe GenAI task for on-device LLM inference (Gemma 2B, Phi-2)',
      'Cross-platform support for Web (JS/Wasm), Android, iOS, and Python'
    ],
    whatYouCanBuild: [
      { title: 'Air-Canvas Gesture Drawing App', description: 'Draw on screen in real time using webcam finger tracking without touching keyboard or mouse.' },
      { title: 'Real-Time Workout Form Coach', description: 'Analyze body joint angles during squats and pushups to provide immediate audio posture corrections.' }
    ],
    personas: [
      { name: 'Liam', role: 'Creative Web Developer', avatar: '🚀', reason: 'Builds interactive webcam-based browser games that run smoothly at 60 FPS using WebAssembly.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Install MediaPipe Package', description: 'Install via npm for web or pip for Python.', actionSnippet: 'npm install @mediapipe/tasks-vision\n# or\npip install mediapipe' },
      { step: 2, title: 'Download Task Model', description: 'Download the pre-trained .task model file (e.g. hand_landmarker.task).' },
      { step: 3, title: 'Initialize Vision Task', description: 'Create an instance of HandLandmarker with Wasm files.', actionSnippet: 'const handLandmarker = await HandLandmarker.createFromOptions(vision, { baseOptions: { modelAssetPath: "hand_landmarker.task" }, runningMode: "VIDEO" });' },
      { step: 4, title: 'Stream Video Frames', description: 'Pass requestAnimationFrame video frames into detectForVideo.' },
      { step: 5, title: 'Render Landmarks', description: 'Draw keypoints and skeleton connectors onto an HTML5 canvas overlay.' }
    ],
    howItWorks: {
      title: 'Graph-Based On-Device ML Pipeline',
      summary: 'Raw camera frames pass through GPU-accelerated subgraphs that detect regions of interest and calculate 3D coordinates.',
      steps: [
        { id: 'mp1', label: 'Camera Stream Capture', sublabel: 'Video Frame Ingestion', description: 'Captures live webcam or video frames and normalizes dimensions and color space.', technicalDetails: 'WebGL or OpenGL textures passed directly to GPU without CPU roundtrips.' },
        { id: 'mp2', label: 'Palm / Face Detector', sublabel: 'Region of Interest (ROI)', description: 'A lightweight detector scans the full image to locate bounding boxes of hands or faces.', technicalDetails: 'Single-shot detector (SSD) optimized for mobile GPU execution.' },
        { id: 'mp3', label: 'Landmark Regression Model', sublabel: '3D Keypoint Extraction', description: 'Crops the ROI and executes the deep landmark network to predict 3D coordinate keypoints.', technicalDetails: 'TFLite quantized model computing x, y, z coordinates with millimeter precision.' },
        { id: 'mp4', label: 'Temporal Smoothing & Output', sublabel: 'Kalman Filter', description: 'Smooths keypoint jitter across consecutive frames to produce stable tracking coordinates.', technicalDetails: 'One-euro or Kalman filter preventing high-frequency frame flicker.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['tensorflow', 'gemma', 'flutter', 'android-studio'],
    resources: {
      website: 'https://ai.google.dev/edge/mediapipe/solutions/guide',
      docs: 'https://developers.google.com/mediapipe',
      github: 'https://github.com/google/mediapipe'
    },
    isTrending: true,
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Build a browser-based virtual try-on app that tracks face landmarks to accurately position sunglasses and hats.'
  },

  {
    id: 'document-ai',
    name: 'Google Cloud Document AI',
    tagline: 'Unified document processing suite powered by machine learning and Gemini to automate structured data extraction from PDFs and scans.',
    category: 'Artificial Intelligence & Machine Learning',
    iconName: 'FileText',
    color: '#1A73E8',
    overview: 'Google Cloud Document AI is a machine learning platform that transforms unstructured documents (PDFs, scanned forms, invoices, contracts, receipts) into structured, queryable data. Powered by specialized models and Gemini foundation intelligence, it automates end-to-end document workflows.',
    problemSolved: 'Manual data entry from invoices, tax forms, and contracts is slow, error-prone, and expensive. Document AI extracts key-value pairs, tables, and entities with high accuracy, reducing manual verification time by up to 80%.',
    skillLevel: 'Intermediate',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Priced per page processed ($1.50 to $65 per 1,000 pages depending on general OCR vs specialized invoice/tax parsers).',
    status: 'Active',
    lastVerified: '2025-06-10',
    verifiedSource: 'https://cloud.google.com/document-ai',
    bestFor: ['Automated invoice and receipt processing', 'Tax form & W-2 parsing', 'Contract entity extraction & compliance analysis', 'Large-scale enterprise paper digitizing'],
    capabilities: [
      'Pre-trained specialized processors for Invoices, Receipts, W-2s, Driver Licenses, and Passports',
      'Generative AI Document Extractor powered by Gemini for custom zero-shot document types',
      'High-precision Optical Character Recognition (OCR) supporting 200+ languages',
      'Human-in-the-loop (HITL) review console for confidence threshold verification',
      'Automated table detection and structured key-value pair mapping'
    ],
    whatYouCanBuild: [
      { title: 'Automated Accounts Payable Pipeline', description: 'Ingest vendor PDF invoices from email, extract line items into BigQuery, and trigger payments automatically.' },
      { title: 'Mortgage Application Parser', description: 'Extract borrower income, W-2 details, and bank statements into loan underwriting software.' }
    ],
    personas: [
      { name: 'Kavita', role: 'FinTech Software Architect', avatar: '💳', reason: 'Processes 50,000 monthly invoices automatically with 98% line-item extraction accuracy.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Enable Document AI API', description: 'Enable the API in your Google Cloud project console.', actionSnippet: 'gcloud services enable documentai.googleapis.com' },
      { step: 2, title: 'Create a Processor', description: 'Select an Invoice Parser, Form Parser, or Custom Extractor in the console.' },
      { step: 3, title: 'Install Google Cloud Client', description: 'Install the Python or Node.js client library.', actionSnippet: 'pip install google-cloud-documentai' },
      { step: 4, title: 'Process Document', description: 'Send document bytes to the processor endpoint.', actionSnippet: 'document = client.process_document(request={"name": processor_name, "raw_document": raw_doc})' },
      { step: 5, title: 'Inspect Extracted Entities', description: 'Read structured fields such as total_amount, supplier_name, and line_items.' }
    ],
    howItWorks: {
      title: 'Multimodal OCR & Entity Recognition Pipeline',
      summary: 'Documents undergo visual layout analysis, OCR text extraction, and deep transformer entity classification.',
      steps: [
        { id: 'doc1', label: 'Document Ingestion', sublabel: 'PDF / Image Ingestion', description: 'Accepts PDF, TIFF, or image files and decomposes multi-page documents into individual page canvases.' },
        { id: 'doc2', label: 'Layout & OCR Analysis', sublabel: 'Spatial Text Recognition', description: 'Detects text tokens, bounding boxes, paragraphs, and tabular grid structures across all pages.' },
        { id: 'doc3', label: 'Entity & Key-Value Parsing', sublabel: 'Transformer Classification', description: 'Specialized ML models identify semantic fields (e.g. net_due_date, invoice_id, tax_amount).' },
        { id: 'doc4', label: 'Confidence Scoring & Output', sublabel: 'JSON Schema Delivery', description: 'Produces clean JSON output with confidence scores; flags low-confidence pages for human review.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['gemini', 'google-cloud', 'bigquery', 'cloud-storage'],
    resources: {
      website: 'https://cloud.google.com/document-ai',
      docs: 'https://cloud.google.com/document-ai/docs'
    },
    isTrending: false,
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Build an automated receipt scanner that logs business meal deductions into Google Sheets with attached PDF links.'
  },

  {
    id: 'speech-ai',
    name: 'Google Cloud Speech AI',
    tagline: 'Enterprise Speech-to-Text and Text-to-Speech APIs with studio-quality neural voices and real-time streaming recognition.',
    category: 'Artificial Intelligence & Machine Learning',
    iconName: 'Mic',
    color: '#34A853',
    overview: 'Google Cloud Speech AI encompasses Google’s industry-leading Speech-to-Text (STT) and Text-to-Speech (TTS) services. Powered by DeepMind’s Chirp foundation models and Journey voices, it delivers high-accuracy speech transcription and human-quality voice synthesis in 125+ languages.',
    problemSolved: 'Legacy speech recognition models struggled with background noise, varying accents, and multi-speaker overlapping conversations. Speech AI provides low-latency streaming transcription and expressive neural voice generation with studio clarity.',
    skillLevel: 'Beginner',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Speech-to-Text: $0.016 to $0.024 per minute. Text-to-Speech: First 1M characters free/month; $4.00 per 1M characters for Neural2 voices.',
    status: 'Active',
    lastVerified: '2025-06-12',
    verifiedSource: 'https://cloud.google.com/speech-to-text',
    bestFor: ['Real-time live captioning & voice commands', 'Call center conversational analytics', 'Podcast & audiobook synthetic voice generation', 'Multi-speaker meeting transcription (diarization)'],
    capabilities: [
      'Chirp speech foundation model with state-of-the-art accuracy across 125+ languages and dialects',
      'Speaker diarization (identifying who spoke when in multi-person audio)',
      'Custom Journey and Neural2 voices with emotion, pitch, and cadence control via SSML',
      'Real-time bi-directional streaming transcription over gRPC',
      'Custom speech adaptation with domain-specific vocabulary and phrase biasing'
    ],
    whatYouCanBuild: [
      { title: 'Live Meeting Scribe', description: 'Stream microphone audio to generate real-time meeting notes with speaker tags and timestamps.' },
      { title: 'Interactive Voice Assistant', description: 'Combine Speech-to-Text with Gemini API and Text-to-Speech for a natural, two-way conversational voice bot.' }
    ],
    personas: [
      { name: 'Chloe', role: 'Accessibility Engineer', avatar: '🎙️', reason: 'Generates real-time closed captions with 99% accuracy for streaming university lectures.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Install Cloud Speech SDK', description: 'Install the official Google Cloud Speech library.', actionSnippet: 'pip install google-cloud-speech google-cloud-texttospeech' },
      { step: 2, title: 'Configure Audio Request', description: 'Specify audio encoding, sample rate, and target language code (e.g. en-US).' },
      { step: 3, title: 'Run Transcription', description: 'Send audio file or stream to the speech recognition endpoint.', actionSnippet: 'response = client.recognize(config=config, audio=audio)' },
      { step: 4, title: 'Synthesize Neural Voice', description: 'Convert text strings into high-fidelity MP3 audio using Journey voices.' }
    ],
    howItWorks: {
      title: 'Neural Acoustic Encoding & Conformer Decoding',
      summary: 'Raw audio waveforms pass through neural acoustic filters and conformer transformers to produce text tokens.',
      steps: [
        { id: 'sp1', label: 'Audio Ingestion & Preprocessing', sublabel: 'Spectral Decomposition', description: 'Raw audio waveforms are transformed into mel-spectrogram frequencies and normalized.' },
        { id: 'sp2', label: 'Chirp Conformer Network', sublabel: 'Deep Acoustic Modeling', description: 'Conformer architecture combines convolution and self-attention to capture phonemes.' },
        { id: 'sp3', label: 'Language Model Beam Search', sublabel: 'Contextual Decoding', description: 'Resolves homophones and syntax using probabilistic language models and phrase biasing.' },
        { id: 'sp4', label: 'Diarization & Punctuation', sublabel: 'Post-Processing', description: 'Inserts commas, periods, and capitalization while tagging speaker 1 vs speaker 2.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['gemini', 'google-cloud', 'vertex-ai'],
    resources: {
      website: 'https://cloud.google.com/speech-to-text',
      docs: 'https://cloud.google.com/speech-to-text/docs'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Build an automated podcast transcriber that creates searchable show notes and chapters from audio files.'
  },

  {
    id: 'vision-ai',
    name: 'Google Cloud Vision AI',
    tagline: 'Pre-trained and custom computer vision models to detect objects, read text (OCR), recognize landmarks, and filter explicit content.',
    category: 'Artificial Intelligence & Machine Learning',
    iconName: 'Eye',
    color: '#4285F4',
    overview: 'Google Cloud Vision AI enables developers to integrate image analysis features into applications including image labeling, face and landmark detection, optical character recognition (OCR), object localization, and explicit content moderation.',
    problemSolved: 'Training computer vision models from scratch requires millions of labeled images and expensive GPU clusters. Vision AI provides production-ready APIs that accurately classify images and extract visual intelligence in milliseconds.',
    skillLevel: 'Beginner',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'First 1,000 units/month free. $1.50 per 1,000 images for label and text detection.',
    status: 'Active',
    lastVerified: '2025-06-14',
    verifiedSource: 'https://cloud.google.com/vision',
    bestFor: ['Automated image tagging and catalog indexing', 'Optical character recognition (OCR) on photos', 'Content moderation and safe search filtering', 'Landmark and logo identification'],
    capabilities: [
      'Dense object detection with bounding box coordinates',
      'Document and photo OCR in over 50 languages',
      'SafeSearch moderation detecting adult, violent, or spoof content',
      'Landmark and popular brand logo recognition',
      'Facial feature detection with emotion likelihood indicators'
    ],
    whatYouCanBuild: [
      { title: 'Automated E-Commerce Image Tagger', description: 'Automatically label product photos with color, category, style, and brand tags upon upload.' },
      { title: 'User Content Moderation Shield', description: 'Filter user-submitted profile pictures and community forum uploads for policy violations before publishing.' }
    ],
    personas: [
      { name: 'Daniel', role: 'Full-Stack Developer', avatar: '💻', reason: 'Integrates automated receipt scanning and image moderation into a mobile marketplace in an afternoon.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Install Vision Library', description: 'Install the Google Cloud Vision client library.', actionSnippet: 'npm install @google-cloud/vision\n# or\npip install google-cloud-vision' },
      { step: 2, title: 'Initialize Client', description: 'Create an ImageAnnotatorClient with credentials.' },
      { step: 3, title: 'Analyze Image', description: 'Call labelDetection or textDetection on any local file or Cloud Storage URL.', actionSnippet: 'const [result] = await client.labelDetection("./photo.jpg");\nconst labels = result.labelAnnotations;' },
      { step: 4, title: 'Iterate Labels', description: 'Log extracted descriptions and confidence scores.' }
    ],
    howItWorks: {
      title: 'Convolutional Deep Neural Image Processing',
      summary: 'Images are analyzed across parallel neural network heads to detect labels, text, faces, and coordinates.',
      steps: [
        { id: 'vi1', label: 'Image Normalization', sublabel: 'Resolution Scaling', description: 'Images are resized and converted into standardized RGB tensors.' },
        { id: 'vi2', label: 'Feature Extraction Backbone', sublabel: 'Residual Vision Networks', description: 'Extracts hierarchical visual features from low-level edges to complex object semantics.' },
        { id: 'vi3', label: 'Multi-Task Classification Heads', sublabel: 'Parallel Task Inference', description: 'Executes parallel classifiers for labels, text OCR, landmarks, and SafeSearch attributes.' },
        { id: 'vi4', label: 'Spatial Bounding Box Output', sublabel: 'JSON Output Delivery', description: 'Returns structured JSON with normalized polygon coordinates and confidence percentages.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['document-ai', 'google-cloud', 'cloud-storage', 'vertex-ai'],
    resources: {
      website: 'https://cloud.google.com/vision',
      docs: 'https://cloud.google.com/vision/docs'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Build a photo organizer app that automatically groups pictures into albums based on detected landmarks and objects.'
  },

  // ==================== SOFTWARE DEVELOPMENT & FRAMEWORKS ====================
  {
    id: 'project-idx',
    name: 'Project IDX',
    tagline: 'Google’s AI-assisted, cloud-based multiplatform development environment built on Code-OSS with Gemini integration.',
    category: 'Software Development & Frameworks',
    iconName: 'Code2',
    color: '#4285F4',
    overview: 'Project IDX is an experimental web-based workspace designed by Google to streamline full-stack and multiplatform application development. Built on Code-OSS (the open-source foundation of VS Code) and powered by Linux VMs running Nix, IDX integrates Gemini AI code completion, multiplatform device previews (Android emulators and web), and one-click cloud hosting.',
    problemSolved: 'Setting up local developer environments for full-stack apps (Flutter, Node.js, Go, Python, React) requires downloading gigabytes of SDKs, configuring emulator paths, and troubleshooting OS-specific dependencies. Project IDX provisions a configured cloud VM in seconds accessible from any browser.',
    skillLevel: 'Beginner',
    pricingType: 'Free',
    pricingDetails: 'Currently free in public preview.',
    status: 'Preview / Experimental',
    lastVerified: '2025-06-18',
    verifiedSource: 'https://idx.dev',
    bestFor: ['Full-stack web and mobile prototyping', 'Developing Flutter apps directly in the browser', 'AI-assisted coding with Gemini', 'Instant reproducible onboarding for engineering teams'],
    capabilities: [
      'Cloud Linux VM per workspace managed by Nix environment configurations',
      'Built-in Gemini Code Assist for inline completions, code explanations, and chat',
      'Live multi-screen previews with embedded Android emulators and web viewports',
      'Pre-configured templates for Flutter, Next.js, Angular, React, Go, and Python',
      'Direct integration with Firebase Hosting and GitHub repositories'
    ],
    whatYouCanBuild: [
      { title: 'Cross-Platform Flutter E-Commerce App', description: 'Build and preview a complete Flutter mobile and web shopping app entirely within Chrome.' },
      { title: 'Full-Stack GenAI Web Portal', description: 'Scaffold a Next.js frontend with Gemini API integration and deploy live to Firebase Hosting with 1 click.' }
    ],
    personas: [
      { name: 'Aiden', role: 'Full-Stack Developer', avatar: '💻', reason: 'Codes from a Chromebook with access to full Android emulators and Linux VMs without installing local tools.' },
      { name: 'Priya', role: 'Computer Science Educator', avatar: '👩‍🏫', reason: 'Gives students instant, identical coding environments that work on any laptop without installation errors.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Visit Project IDX', description: 'Navigate to idx.dev and sign in with your Google account.', actionSnippet: 'https://idx.dev' },
      { step: 2, title: 'Create Workspace', description: 'Select a template (e.g. Flutter, Next.js, or Go) or import a GitHub repo.' },
      { step: 3, title: 'Configure Environment with Nix', description: 'Inspect .idx/dev.nix to declare exact packages and extensions needed.' },
      { step: 4, title: 'Code with Gemini', description: 'Press Alt+/ or open the Gemini side panel for code generation and refactoring.' },
      { step: 5, title: 'Launch Live Previews', description: 'Click the preview tab to test your web app or run the Android emulator in browser.' },
      { step: 6, title: 'Deploy with 1 Click', description: 'Click the Firebase icon to publish your web app to a live global CDN.' }
    ],
    howItWorks: {
      title: 'Cloud Containerized VM & Remote Language Server Architecture',
      summary: 'Each workspace boots an isolated Linux container with Nix package caching and remote browser-streamed previews.',
      steps: [
        { id: 'idx1', label: 'Cloud Container Provisioning', sublabel: 'Google Cloud Linux VM', description: 'Spins up an isolated container configured with declared Nix packages and system libraries.' },
        { id: 'idx2', label: 'Code-OSS Web Interface', sublabel: 'Monaco Editor in Browser', description: 'Connects the browser to the remote VM over secure WebSockets with low typing latency.' },
        { id: 'idx3', label: 'Gemini Code Intelligence', sublabel: 'Context-Aware AI Model', description: 'Gemini indexes repository symbols to provide semantic completions, tests, and documentation.' },
        { id: 'idx4', label: 'Remote Preview Rendering', sublabel: 'Android & Web Viewports', description: 'Runs hot-reloading app servers and streams interactive Android emulator frames to the browser.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['flutter', 'gemini', 'firebase', 'android-studio', 'chrome-devtools'],
    resources: {
      website: 'https://idx.dev',
      docs: 'https://developers.google.com/idx'
    },
    isTrending: true,
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Spin up a Flutter mobile app project in Project IDX and test the user interface on an in-browser Android emulator.'
  },

  {
    id: 'go-lang',
    name: 'Go (Golang)',
    tagline: 'Google’s open-source, statically-typed programming language engineered for simplicity, high concurrency, and massive scale.',
    category: 'Software Development & Frameworks',
    iconName: 'Terminal',
    color: '#00ADD8',
    overview: 'Go (often referred to as Golang) is an open-source programming language created at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Designed to solve software engineering challenges at Google scale, Go combines the efficiency of compiled languages like C++ with the readability and usability of Python.',
    problemSolved: 'Building large-scale networked systems previously meant dealing with complex C++ memory leaks or slow, memory-hungry dynamic languages. Go offers fast compilation to a single static binary, lightweight goroutines for massive concurrency, and built-in garbage collection.',
    skillLevel: 'Intermediate',
    pricingType: 'Free',
    pricingDetails: '100% Free and open-source under a BSD-style license.',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://go.dev',
    bestFor: ['High-throughput cloud microservices & APIs', 'Distributed systems & networking tools (Docker, Kubernetes are built in Go)', 'Command-line tools (CLIs)', 'Concurrent real-time data streaming engines'],
    capabilities: [
      'Goroutines: ultra-lightweight threads (costing only ~2KB memory per routine)',
      'Channels for safe, lock-free communication between concurrent processes',
      'Fast compilation to a single static binary with zero external runtime dependencies',
      'Comprehensive standard library including a production-grade HTTP/2 server',
      'Built-in tooling for testing, benchmarking, profiling (pprof), and documentation'
    ],
    whatYouCanBuild: [
      { title: 'High-Throughput REST/gRPC API Gateway', description: 'Handle 100,000 requests per second with sub-5ms response latency using standard net/http.' },
      { title: 'Distributed Cache Service', description: 'Build an in-memory key-value cache with concurrent read-write locks and automated eviction.' }
    ],
    personas: [
      { name: 'Tate', role: 'Backend Systems Engineer', avatar: '⚙️', reason: 'Builds microservices that deploy as 15MB static binaries and use 90% less memory than Java equivalents.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Download Go', description: 'Download the official installer from go.dev/dl.', actionSnippet: 'https://go.dev/dl' },
      { step: 2, title: 'Initialize Module', description: 'Create a new Go module.', actionSnippet: 'mkdir myapp && cd myapp\ngo mod init example/myapp' },
      { step: 3, title: 'Write Hello World', description: 'Create main.go with a package main and main function.', actionSnippet: 'package main\nimport "fmt"\nfunc main() {\n  fmt.Println("Hello, Google Toolverse!")\n}' },
      { step: 4, title: 'Run Application', description: 'Run the program instantly with the go run command.', actionSnippet: 'go run main.go' },
      { step: 5, title: 'Build Static Binary', description: 'Compile into a standalone executable.', actionSnippet: 'go build -o myapp' }
    ],
    howItWorks: {
      title: 'M:N Scheduler & Garbage-Collected Concurrency',
      summary: 'Go compiles directly to machine code and manages thousands of goroutines over a small pool of OS threads.',
      steps: [
        { id: 'go1', label: 'Compilation to Native Code', sublabel: 'Single Static Binary', description: 'Direct compiler converts source code into native machine instructions without byte-code or VM layer.' },
        { id: 'go2', label: 'Go Runtime & M:N Scheduler', sublabel: 'Work-Stealing Scheduler', description: 'Multiplexes M goroutines onto N operating system threads with cooperative preemption.' },
        { id: 'go3', label: 'Concurrent Channels', sublabel: 'CSP Communication', description: 'Implements Communicating Sequential Processes (CSP) to share memory by communicating via typed channels.' },
        { id: 'go4', label: 'Concurrent Garbage Collector', sublabel: 'Sub-Millisecond Pauses', description: 'Tri-color mark-and-sweep collector executes concurrently with application threads with sub-millisecond stop-the-world pauses.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['grpc', 'protobuf', 'cloud-run', 'kubernetes-engine'],
    resources: {
      website: 'https://go.dev',
      docs: 'https://go.dev/doc/',
      github: 'https://github.com/golang/go'
    },
    isTrending: true,
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Build a lightning-fast CLI tool that queries the GitHub API and outputs formatted terminal tables in Go.'
  },

  {
    id: 'android-jetpack',
    name: 'Android Jetpack',
    tagline: 'Google’s official suite of Android libraries, tools, and architectural guidance to write robust, maintainable modern mobile apps.',
    category: 'Software Development & Frameworks',
    iconName: 'Smartphone',
    color: '#3DDC84',
    overview: 'Android Jetpack is a comprehensive suite of libraries, tools, and architectural guidance created by Google to help developers write high-quality Android apps. It encompasses Room (database), WorkManager (background tasks), Navigation, Lifecycle, ViewModel, and CameraX.',
    problemSolved: 'Managing Android lifecycles, background execution limits, database migrations, and fragmented device hardware previously required thousands of lines of boilerplate and caused crashes. Jetpack abstracts Android OS complexity into predictable, backwards-compatible components.',
    skillLevel: 'Intermediate',
    pricingType: 'Free',
    pricingDetails: '100% Free and open-source under Apache 2.0.',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://developer.android.com/jetpack',
    bestFor: ['Modern native Android architecture', 'SQLite database persistence with Room', 'Guaranteed background task execution with WorkManager', 'Camera integration with CameraX'],
    capabilities: [
      'Room persistence library providing compile-time verified SQLite queries',
      'WorkManager for battery-friendly, deferrable, guaranteed background processing',
      'Lifecycle-aware components (ViewModel, LiveData, Flow) preventing memory leaks',
      'Navigation component with safe-args for fragment and Compose screen transitions',
      'CameraX providing unified camera control across 95%+ of Android devices'
    ],
    whatYouCanBuild: [
      { title: 'Offline-First Note Taking App', description: 'Store notes in Room SQLite with real-time UI updates via Kotlin Flow and cloud sync via WorkManager.' },
      { title: 'Document Scanner Camera', description: 'Use CameraX to capture high-res document photos with automatic rotation correction and edge detection.' }
    ],
    personas: [
      { name: 'Lucas', role: 'Senior Android Engineer', avatar: '🤖', reason: 'Uses Room and ViewModel to build apps that survive screen rotations and process death without losing user data.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Add Dependencies', description: 'Add Jetpack libraries to your build.gradle.kts file.', actionSnippet: 'implementation("androidx.lifecycle:lifecycle-viewmodel-ktx:2.8.0")\nimplementation("androidx.room:room-runtime:2.6.1")' },
      { step: 2, title: 'Create Room Entity', description: 'Define database tables using Kotlin data classes with @Entity annotations.' },
      { step: 3, title: 'Define DAO', description: 'Write type-safe SQL queries using @Dao and @Query annotations.' },
      { step: 4, title: 'Build ViewModel', description: 'Expose data to the UI using a ViewModel and StateFlow.' }
    ],
    howItWorks: {
      title: 'Lifecycle-Aware Architecture Pipeline',
      summary: 'Jetpack connects UI components to persistent data layers through lifecycle observers and background task schedulers.',
      steps: [
        { id: 'jp1', label: 'Activity/Fragment Lifecycle', sublabel: 'Lifecycle Registry', description: 'Monitors Android activity states (CREATED, STARTED, RESUMED, DESTROYED).' },
        { id: 'jp2', label: 'ViewModel Survival', sublabel: 'Configuration Change Hold', description: 'Retains UI state in memory across configuration changes such as screen rotations.' },
        { id: 'jp3', label: 'Room SQL Compilation', sublabel: 'Type-Safe SQLite', description: 'Validates SQL queries during compile time, returning reactive Flow streams to the UI.' },
        { id: 'jp4', label: 'WorkManager Execution', sublabel: 'JobScheduler & AlarmManager', description: 'Executes background tasks when network and battery constraints are satisfied.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['android-studio', 'jetpack-compose', 'kotlin', 'firebase'],
    resources: {
      website: 'https://developer.android.com/jetpack',
      docs: 'https://developer.android.com/jetpack/getting-started'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Build an offline-first habit tracker that schedules daily notification reminders using WorkManager and stores data in Room.'
  },

  {
    id: 'google-play-console',
    name: 'Google Play Console',
    tagline: 'The mission-control portal to publish, test, analyze vitals, and monetize Android applications to 3+ billion active devices.',
    category: 'Software Development & Frameworks',
    iconName: 'PlayCircle',
    color: '#01875F',
    overview: 'The Google Play Console is the official management platform for Android app developers. It enables developers to publish apps and games to Google Play, manage release tracks (internal, closed, open, production), monitor Android Vitals (crashes and ANRs), configure in-app purchases, and analyze user acquisition metrics.',
    problemSolved: 'Distributing mobile software globally requires managing multiple device architectures, screen densities, staged testing cohorts, and security compliance. Google Play Console automates app packaging, global CDN delivery, and user feedback loops.',
    skillLevel: 'Beginner',
    pricingType: 'Paid / Enterprise',
    pricingDetails: 'One-time $25 developer registration fee. Google takes a 15% service fee on the first $1M of annual earnings (30% thereafter).',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://play.google.com/console',
    bestFor: ['Publishing Android apps to 3B+ global users', 'Beta testing and staged production rollouts', 'Monitoring app stability and crash rates via Android Vitals', 'A/B testing store listings and icons to optimize conversions'],
    capabilities: [
      'Android App Bundle (AAB) dynamic delivery for smaller download sizes',
      'Multi-track testing: Internal test (100 testers), Closed beta, and Open testing',
      'Android Vitals: Real-time crash rate, ANR (Application Not Responding) rates, and battery wake locks',
      'Store listing experiments: A/B test app icons, screenshots, and descriptions',
      'Google Play In-App Billing and subscription management with grace period handling'
    ],
    whatYouCanBuild: [
      { title: 'Global Mobile Subscription App', description: 'Publish a subscription fitness app with regional pricing and a 7-day free trial across 170+ countries.' },
      { title: 'Staged Beta Testing Pipeline', description: 'Roll out a major app redesign to 5% of users first, monitoring crash metrics before full rollout.' }
    ],
    personas: [
      { name: 'Oscar', role: 'Mobile Growth Lead', avatar: '📈', reason: 'Runs A/B experiments on store screenshots that increased conversion rate by 18%.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create Developer Account', description: 'Register at play.google.com/console with a $25 one-time fee.', actionSnippet: 'https://play.google.com/console' },
      { step: 2, title: 'Create Application', description: 'Enter app title, default language, and app/game designation.' },
      { step: 3, title: 'Upload Android App Bundle', description: 'Build your release AAB file in Android Studio and upload to the Internal Testing track.' },
      { step: 4, title: 'Complete Store Listing', description: 'Upload icon (512x512), feature graphic (1024x500), and phone/tablet screenshots.' },
      { step: 5, title: 'Fill Content Rating & Privacy Policy', description: 'Complete the age-rating questionnaire and declare data safety policies.' },
      { step: 6, title: 'Roll Out to Production', description: 'Submit for Google Play review and start a 10% staged rollout.' }
    ],
    howItWorks: {
      title: 'AAB Dynamic Delivery & Global Play Distribution',
      summary: 'App bundles are optimized into device-specific APKs and distributed across Google edge caches globally.',
      steps: [
        { id: 'pc1', label: 'App Bundle (AAB) Upload', sublabel: 'Source Compilation', description: 'Developer uploads a single .aab file containing all screen densities, languages, and CPU architectures.' },
        { id: 'pc2', label: 'Google Play App Signing', sublabel: 'Cloud Key Management', description: 'Google verifies the upload key and signs generated APKs with the secure app signing key.' },
        { id: 'pc3', label: 'Dynamic APK Generation', sublabel: 'Tailored Delivery', description: 'Generates optimized split APKs delivering only the code and assets required for the user’s specific device.' },
        { id: 'pc4', label: 'Android Vitals Telemetry', sublabel: 'Telemetry Aggregation', description: 'Aggregates crash reports, ANRs, and startup times into actionable quality scores.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['android-studio', 'flutter', 'android-jetpack', 'firebase'],
    resources: {
      website: 'https://play.google.com/console',
      docs: 'https://support.google.com/googleplay/android-developer/'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Prepare a complete Google Play Store listing with localized descriptions and screenshots for international audiences.'
  },

  {
    id: 'firebase-emulator-suite',
    name: 'Firebase Emulator Suite',
    tagline: 'Local developer environment to develop and test Firebase Auth, Cloud Firestore, Realtime DB, Storage, and Cloud Functions offline.',
    category: 'Software Development & Frameworks',
    iconName: 'Flame',
    color: '#FFA000',
    overview: 'The Firebase Local Emulator Suite is a set of advanced developer tools that simulate Firebase products locally on your machine. It allows you to build, test, and run automated CI/CD tests for Cloud Firestore, Authentication, Realtime Database, Cloud Functions, and Cloud Storage without connecting to live Google Cloud servers.',
    problemSolved: 'Testing cloud database rules and serverless functions directly in live production accounts risks data corruption, accidental billing spikes, and slow development feedback loops. The Emulator Suite provides an isolated, zero-cost sandbox with an interactive local Web UI.',
    skillLevel: 'Beginner',
    pricingType: 'Free',
    pricingDetails: '100% Free. Runs locally on your computer with zero cloud quota usage.',
    status: 'Active',
    lastVerified: '2025-06-12',
    verifiedSource: 'https://firebase.google.com/docs/emulator-suite',
    bestFor: ['Offline local full-stack development', 'Automated unit and integration testing in CI/CD', 'Writing and verifying Firestore security rules safely', 'Testing Cloud Functions triggers without deploying to the cloud'],
    capabilities: [
      'Local emulation of Firestore, Auth, Storage, Functions, and Realtime Database',
      'Interactive Emulator UI (runs on localhost:4000) to inspect and edit local data',
      'Instant security rules evaluation and unit testing with @firebase/rules-unit-testing',
      'State export and import to save and reload mock database snapshots',
      'Seamless connection with Firebase Client SDKs via connectFirestoreEmulator'
    ],
    whatYouCanBuild: [
      { title: 'Automated CI Test Suite for Firestore Rules', description: 'Run 100+ security rules assertions in GitHub Actions in seconds without cloud credentials.' },
      { title: 'Offline Mobile App Backend', description: 'Develop and demo your entire Flutter or React Native mobile app on a flight with zero internet connection.' }
    ],
    personas: [
      { name: 'Nadia', role: 'Full-Stack Developer', avatar: '💻', reason: 'Tests complex multi-document Firestore transaction logic locally without spending a dime.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Install Firebase CLI', description: 'Install the global Firebase command line tool.', actionSnippet: 'npm install -g firebase-tools' },
      { step: 2, title: 'Initialize Emulators', description: 'Select which emulators you wish to download and configure.', actionSnippet: 'firebase init emulators' },
      { step: 3, title: 'Start Local Emulators', description: 'Launch all emulators and the Web UI on localhost:4000.', actionSnippet: 'firebase emulators:start' },
      { step: 4, title: 'Connect Client App', description: 'Point your web or mobile app to the local ports.', actionSnippet: 'import { connectFirestoreEmulator } from "firebase/firestore";\nconnectFirestoreEmulator(db, "127.0.0.1", 8080);' }
    ],
    howItWorks: {
      title: 'Local Port-Forwarded Service Emulation',
      summary: 'Local Java and Node.js processes mimic Google Cloud APIs, routing SDK calls to memory-backed databases.',
      steps: [
        { id: 'fe1', label: 'Local Port Binding', sublabel: 'Localhost Servers', description: 'Binds individual ports for Auth (9099), Firestore (8080), Functions (5001), and UI (4000).' },
        { id: 'fe2', label: 'SDK Redirection', sublabel: 'Client Configuration', description: 'Firebase client SDKs redirect gRPC and HTTP calls from googleapis.com to localhost.' },
        { id: 'fe3', label: 'Security Rule Evaluation', sublabel: 'Rule Engine Sandbox', description: 'Evaluates firestore.rules locally, outputting detailed permission denied debug traces in the console.' },
        { id: 'fe4', label: 'State Export / Snapshot', sublabel: 'Mock Persistence', description: 'Dumps database state to local JSON/binary files to reload test states across team members.' }
      ]
    },
    demoType: 'firebase-arch',
    relatedToolIds: ['firebase', 'cloud-firestore', 'cloud-functions', 'flutter'],
    resources: {
      website: 'https://firebase.google.com/docs/emulator-suite',
      docs: 'https://firebase.google.com/docs/emulator-suite/connect_and_prototype'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Set up an automated GitHub Actions workflow that boots the Firebase Emulator Suite and runs integration tests.'
  },

  {
    id: 'google-apps-script',
    name: 'Google Apps Script',
    tagline: 'Rapid cloud development scripting platform based on JavaScript to automate, customize, and extend Google Workspace.',
    category: 'Software Development & Frameworks',
    iconName: 'FileCode2',
    color: '#4285F4',
    overview: 'Google Apps Script is a cloud-based JavaScript development platform that makes it easy to integrate with and automate tasks across Google Workspace products (Docs, Sheets, Slides, Forms, Drive, and Gmail). It requires zero installation and runs directly on Google’s infrastructure.',
    problemSolved: 'Repetitive workplace tasks (sending weekly report emails, formatting spreadsheet data, syncing Google Forms with databases) waste hours of manual effort. Apps Script automates these tasks with a few lines of cloud-hosted JavaScript.',
    skillLevel: 'Beginner',
    pricingType: 'Free',
    pricingDetails: '100% Free with any Google account (subject to daily Workspace quota limits like 100 emails/day for consumer accounts, 1,500 for Workspace).',
    status: 'Active',
    lastVerified: '2025-06-12',
    verifiedSource: 'https://developers.google.com/apps-script',
    bestFor: ['Automating Google Sheets data pipelines', 'Custom Gmail automated mail merges', 'Triggering webhooks on Google Forms submissions', 'Building custom sidebar add-ons in Google Docs and Sheets'],
    capabilities: [
      'Direct native JavaScript access to SpreadsheetApp, DocumentApp, GmailApp, and DriveApp',
      'Time-driven triggers (cron schedules) and event-driven triggers (onEdit, onFormSubmit)',
      'UrlFetchApp to call external REST APIs and webhooks directly from spreadsheets',
      'HTML Service to build custom modal dialogues and sidebars using HTML/CSS/JS',
      'Deploy as Web App to serve custom JSON APIs or interactive web interfaces'
    ],
    whatYouCanBuild: [
      { title: 'Automated Invoice Generator from Sheets', description: 'Generate personalized PDF invoices from spreadsheet rows and email them automatically via Gmail.' },
      { title: 'Google Forms to Slack Webhook Notifier', description: 'Instantly notify a team Slack channel whenever a user submits a Google Form survey.' }
    ],
    personas: [
      { name: 'Sam', role: 'Business Operations Analyst', avatar: '📊', reason: 'Automates weekly executive reporting, saving 4 hours of manual data copying every Monday morning.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Open Script Editor', description: 'In any Google Sheet, click Extensions > Apps Script.', actionSnippet: 'https://script.google.com' },
      { step: 2, title: 'Write Automation Function', description: 'Write standard modern JavaScript using Google Workspace services.', actionSnippet: 'function sendEmailAlert() {\n  const sheet = SpreadsheetApp.getActiveSheet();\n  GmailApp.sendEmail("team@example.com", "Alert", "Data updated!");\n}' },
      { step: 3, title: 'Run and Authorize', description: 'Click the Run button and grant permissions to access your Google Sheet and Gmail.' },
      { step: 4, title: 'Set Up Trigger', description: 'Click the clock icon (Triggers) to schedule execution daily or upon form submission.' }
    ],
    howItWorks: {
      title: 'Serverless V8 JavaScript Execution on Google Cloud',
      summary: 'Scripts execute in isolated V8 JavaScript containers with direct RPC access to Google Workspace service backends.',
      steps: [
        { id: 'as1', label: 'Trigger Event Dispatch', sublabel: 'Timer or User Action', description: 'An event trigger (e.g. daily 9 AM or spreadsheet edit) dispatches an execution request.' },
        { id: 'as2', label: 'V8 Container Sandbox', sublabel: 'Google Infrastructure', description: 'Boots a lightweight V8 runtime container loaded with the user script and OAuth credentials.' },
        { id: 'as3', label: 'Workspace API Gateway', sublabel: 'Direct RPC Calls', description: 'Calls native internal APIs (Gmail, Drive, Sheets) without generating external HTTP overhead.' },
        { id: 'as4', label: 'External Webhook Sync', sublabel: 'UrlFetch Service', description: 'Optionally executes external HTTP REST requests to external systems before shutting down.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['google-sheets', 'google-workspace', 'google-docs', 'gemini'],
    resources: {
      website: 'https://developers.google.com/apps-script',
      docs: 'https://developers.google.com/apps-script/overview'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Build a personalized mail merge tool that reads names and email addresses from Google Sheets and sends customized emails.'
  },

  {
    id: 'protobuf',
    name: 'Protocol Buffers (Protobuf)',
    tagline: 'Google’s language-neutral, platform-neutral, extensible mechanism for serializing structured data with extreme speed and compactness.',
    category: 'Software Development & Frameworks',
    iconName: 'Boxes',
    color: '#4285F4',
    overview: 'Protocol Buffers (Protobuf) is Google’s open-source serialization mechanism for structured data. Much like XML or JSON, but smaller, faster, and simpler, Protobuf allows you to define how you want your data to be structured once, then use generated source code to easily write and read your data to and from a variety of data streams and languages.',
    problemSolved: 'Text-based formats like JSON and XML are verbose, computationally expensive to parse, and lack strict schema enforcement across polyglot microservices. Protobuf provides compact binary serialization that parses up to 10x faster with backwards compatibility guarantees.',
    skillLevel: 'Intermediate',
    pricingType: 'Free',
    pricingDetails: '100% Free and open-source under BSD-3-Clause.',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://protobuf.dev',
    bestFor: ['High-performance microservice communication', 'Data storage serialization for distributed systems', 'Strict API contract definitions between teams', 'Mobile network payloads where bandwidth is critical'],
    capabilities: [
      'Compact binary wire format up to 3x to 10x smaller than JSON',
      'Code generator (protoc) compiling .proto schemas into C++, Java, Python, Go, TypeScript, C#, and Dart',
      'Field tags ensuring robust forward and backwards schema compatibility',
      'Native integration as the Interface Definition Language (IDL) for gRPC',
      'Well-known types for timestamps, durations, and dynamic payloads (Any)'
    ],
    whatYouCanBuild: [
      { title: 'High-Speed IoT Sensor Pipeline', description: 'Serialize millions of sensor telemetry events into compact binary packets transmitted over cellular networks.' },
      { title: 'Universal Data Contract', description: 'Define user profile schemas once and generate client models across iOS (Swift), Android (Kotlin), and web (TypeScript).' }
    ],
    personas: [
      { name: 'Ethan', role: 'Distributed Systems Architect', avatar: '💻', reason: 'Replaced JSON payloads with Protobuf, slashing inter-service network bandwidth by 72%.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Define .proto File', description: 'Create user.proto with typed fields and numerical tags.', actionSnippet: 'syntax = "proto3";\nmessage User {\n  int32 id = 1;\n  string name = 2;\n  string email = 3;\n}' },
      { step: 2, title: 'Install protoc Compiler', description: 'Download protoc from protobuf.dev or install via your package manager.', actionSnippet: 'brew install protobuf\n# or\napt install protobuf-compiler' },
      { step: 3, title: 'Generate Language Code', description: 'Compile the proto file into your desired programming language.', actionSnippet: 'protoc --go_out=. --go_opt=paths=source_relative user.proto' },
      { step: 4, title: 'Serialize & Deserialize', description: 'Use the generated struct methods to marshal into binary bytes and unmarshal back.' }
    ],
    howItWorks: {
      title: 'Varint Encoding & Tag-Length-Value Wire Format',
      summary: 'Data is encoded using binary varints and field tags without repeating field names, achieving maximum compression.',
      steps: [
        { id: 'pb1', label: 'Schema Compilation', sublabel: 'protoc Compiler', description: 'Parses .proto files and generates strongly-typed data structures and binary serializer methods.' },
        { id: 'pb2', label: 'Field Tag Mapping', sublabel: 'Numerical Key Assignment', description: 'Instead of field strings ("email"), Protobuf writes a single numerical tag and wire type byte.' },
        { id: 'pb3', label: 'Varint & ZigZag Encoding', sublabel: 'Bitwise Compression', description: 'Encodes integers using variable bytes (e.g. small integers take 1 byte instead of 4 or 8).' },
        { id: 'pb4', label: 'Fast Binary Deserialization', sublabel: 'Zero-Copy Parsing', description: 'Target memory buffers are populated directly from binary bytes with minimal memory allocation.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['grpc', 'go-lang', 'bigquery'],
    resources: {
      website: 'https://protobuf.dev',
      docs: 'https://protobuf.dev/getting-started/',
      github: 'https://github.com/protocolbuffers/protobuf'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Design a cross-platform gaming state protocol using Protobuf to sync player positions between Unity and a Go server.'
  },

  {
    id: 'grpc',
    name: 'gRPC',
    tagline: 'High-performance, open-source universal RPC framework developed by Google that connects services across polyglot microservices.',
    category: 'Software Development & Frameworks',
    iconName: 'Network',
    color: '#244c5a',
    overview: 'gRPC is a modern, open-source, high-performance Remote Procedure Call (RPC) framework created by Google. It enables client and server applications to communicate transparently as if the remote server was a local object, powered by HTTP/2 transport and Protocol Buffers.',
    problemSolved: 'REST APIs over HTTP/1.1 suffer from head-of-line blocking, high JSON serialization overhead, and lack of bidirectional streaming. gRPC delivers low-latency multiplexed communication with strongly typed API contracts across different programming languages.',
    skillLevel: 'Intermediate',
    pricingType: 'Free',
    pricingDetails: '100% Free and open-source under Apache 2.0.',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://grpc.io',
    bestFor: ['Microservices architecture in cloud environments', 'Real-time bidirectional streaming (chat, financial tickers)', 'Polyglot environments connecting Go, Java, Python, C++, and Node.js', 'Low-power mobile and IoT client-to-server communication'],
    capabilities: [
      'HTTP/2 transport with binary framing, multiplexing, and header compression',
      '4 streaming patterns: Unary, Server Streaming, Client Streaming, and Bidirectional Streaming',
      'Language-neutral interface definition using Protocol Buffers',
      'Built-in support for authentication, load balancing, deadline propagation, and tracing',
      'Code generation across 10+ programming languages'
    ],
    whatYouCanBuild: [
      { title: 'Real-Time Financial Ticker Service', description: 'Stream millions of stock price updates continuously to connected client dashboards over a single TCP connection.' },
      { title: 'Polyglot Microservices Mesh', description: 'Connect a Python machine learning inference service seamlessly to a Go web backend.' }
    ],
    personas: [
      { name: 'Arun', role: 'Cloud Infrastructure Lead', avatar: '🌐', reason: 'Reduced internal microservice latency from 45ms to 4ms by migrating from REST/JSON to gRPC.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Define Service in .proto', description: 'Declare your RPC methods and message types in a service definition.', actionSnippet: 'service Greeter {\n  rpc SayHello (HelloRequest) returns (HelloReply);\n}' },
      { step: 2, title: 'Generate Server & Client Stubs', description: 'Compile the proto file with gRPC plugins enabled.', actionSnippet: 'protoc --go_out=. --go-grpc_out=. helloworld.proto' },
      { step: 3, title: 'Implement Server Logic', description: 'Implement the generated interface in Go, Python, or Java and start the gRPC listener.' },
      { step: 4, title: 'Invoke from Client', description: 'Create a client channel and invoke the remote method directly.' }
    ],
    howItWorks: {
      title: 'HTTP/2 Multiplexed Binary RPC Protocol',
      summary: 'RPC calls are serialized into Protobuf frames, multiplexed across a single TCP connection, and handled with streaming semantics.',
      steps: [
        { id: 'gr1', label: 'Client Stub Invocation', sublabel: 'Local Method Call', description: 'Application code invokes a generated client method just like a local in-memory function.' },
        { id: 'gr2', label: 'Protobuf Serialization', sublabel: 'Binary Framing', description: 'Parameters are serialized into compact Protobuf byte buffers and wrapped in HTTP/2 DATA frames.' },
        { id: 'gr3', label: 'HTTP/2 Multiplexed Transport', sublabel: 'Single TCP Connection', description: 'Multiple concurrent RPC requests share a single persistent TCP connection without blocking.' },
        { id: 'gr4', label: 'Server Unmarshaling & Execution', sublabel: 'Service Handling', description: 'The gRPC server routes the stream to the registered handler and streams response frames back.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['protobuf', 'go-lang', 'cloud-run', 'kubernetes-engine'],
    resources: {
      website: 'https://grpc.io',
      docs: 'https://grpc.io/docs/',
      github: 'https://github.com/grpc/grpc'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Build a bidirectional streaming chat server connecting a Flutter mobile app with a Go backend using gRPC.'
  },

  {
    id: 'bazel',
    name: 'Bazel',
    tagline: 'Google’s fast, scalable, multi-language build and test tool designed to handle massive monorepos with hermetic caching.',
    category: 'Software Development & Frameworks',
    iconName: 'Wrench',
    color: '#43A047',
    overview: 'Bazel is Google’s open-source version of its internal build system (Blaze). Engineered to support Google’s massive multi-language codebase, Bazel provides fast, correct, and reproducible builds through hermetic sandboxing and distributed remote caching.',
    problemSolved: 'Large codebases combining multiple languages (C++, Java, Go, Python, TypeScript) suffer from slow build times, flaky tests, and "it works on my machine" inconsistencies. Bazel rebuilds only what is strictly necessary and guarantees identical outputs.',
    skillLevel: 'Advanced',
    pricingType: 'Free',
    pricingDetails: '100% Free and open-source under Apache 2.0.',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://bazel.build',
    bestFor: ['Massive multi-language monorepos', 'Reproducible hermetic CI/CD pipelines', 'Distributed build execution & remote caching', 'Cross-compiling C++, Go, Java, and Android targets'],
    capabilities: [
      'Hermetic builds: builds run in isolated sandboxes preventing undeclared system dependencies',
      'Advanced dependency graph analysis compiling only changed targets and their dependents',
      'Remote caching and execution allowing teams to share pre-compiled build artifacts globally',
      'Extensible Starlark configuration language (a dialect of Python)',
      'First-class support for C++, Java, Go, Python, Rust, Android, and iOS'
    ],
    whatYouCanBuild: [
      { title: 'Enterprise Monorepo Build Pipeline', description: 'Build and test an entire company monorepo containing microservices, mobile apps, and frontend web in 3 minutes.' },
      { title: 'Cross-Platform C++ & Android Pipeline', description: 'Cross-compile native C++ libraries and package them into Android APKs with deterministic bit-for-bit accuracy.' }
    ],
    personas: [
      { name: 'Klaus', role: 'Staff DevOps Architect', avatar: '🏗️', reason: 'Cut company CI build times from 45 minutes to 4 minutes by implementing Bazel remote caching.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Install Bazel', description: 'Install Bazel via Bazelisk (the official version manager).', actionSnippet: 'npm install -g @bazel/bazelisk\n# or\nbrew install bazelisk' },
      { step: 2, title: 'Create WORKSPACE File', description: 'Create a WORKSPACE.bazel file at the root of your project.' },
      { step: 3, title: 'Define BUILD.bazel', description: 'Declare targets using built-in build rules.', actionSnippet: 'cc_binary(\n    name = "hello-world",\n    srcs = ["hello-world.cc"],\n)' },
      { step: 4, title: 'Build and Run', description: 'Execute the build and run commands.', actionSnippet: 'bazel build //...\nbazel run //:hello-world' }
    ],
    howItWorks: {
      title: 'Hermetic Action Graph & Remote Cache Execution',
      summary: 'Bazel models your codebase as an acyclic dependency graph, sandboxing build actions and caching output hashes.',
      steps: [
        { id: 'bz1', label: 'Loading & Analysis Phase', sublabel: 'Dependency Graph Construction', description: 'Evaluates BUILD files to construct an action graph of all inputs, tools, and outputs.' },
        { id: 'bz2', label: 'Cache Lookup', sublabel: 'Content-Addressable Storage', description: 'Hashes input files and compiler flags to check if exact outputs already exist in the local or remote cache.' },
        { id: 'bz3', label: 'Hermetic Sandboxed Execution', sublabel: 'Isolated Container Action', description: 'Executes build actions inside an isolated sandbox with access only to declared dependencies.' },
        { id: 'bz4', label: 'Output Artifact Storage', sublabel: 'Deterministic Delivery', description: 'Stores deterministic build outputs and populates remote caches for other team members.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['go-lang', 'android-studio', 'kubernetes-engine'],
    resources: {
      website: 'https://bazel.build',
      docs: 'https://bazel.build/start',
      github: 'https://github.com/bazelbuild/bazel'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Set up a multi-language Bazel build with remote caching in GitHub Actions for a Go backend and TypeScript frontend.'
  },

  // ==================== DEPLOYMENT & CLOUD COMPUTE ====================
  {
    id: 'compute-engine',
    name: 'Google Compute Engine (GCE)',
    tagline: 'Scalable, high-performance Virtual Machines running on Google’s worldwide network and custom titanium security infrastructure.',
    category: 'Cloud & Developer Platforms',
    iconName: 'Server',
    color: '#4285F4',
    overview: 'Google Compute Engine (GCE) delivers configurable Virtual Machines (VMs) running on Google’s global infrastructure. Offering pre-defined and custom machine types (up to 896 vCPUs and 32TB RAM), live migration, persistent SSDs, and access to NVIDIA GPUs and Google TPUs, GCE provides the raw compute power behind enterprise workloads.',
    problemSolved: 'On-premises hardware is rigid, expensive to maintain, and takes weeks to provision. GCE boots production-ready VMs in under 30 seconds with per-second billing, automated live migration during maintenance, and global private networking.',
    skillLevel: 'Intermediate',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Per-second billing with a 1-minute minimum. Sustained use discounts automatically apply up to 30% for steady-state workloads.',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://cloud.google.com/compute',
    bestFor: ['Custom Linux and Windows enterprise server hosting', 'High-performance computing (HPC) and batch rendering', 'Large in-memory databases (SAP HANA)', 'GPU-accelerated deep learning training and inference'],
    capabilities: [
      'Custom Machine Types: tailor exact vCPU and RAM ratios to avoid overpaying',
      'Live Migration: Google patches host hardware and hypervisors without rebooting your VMs',
      'Spot VMs: save 60-91% on fault-tolerant batch and container workloads',
      'Titanium System: custom silicon security microprocessors offloading networking and security',
      'Persistent Disk (PD) and Hyperdisk delivering up to 350,000 IOPS per instance'
    ],
    whatYouCanBuild: [
      { title: 'High-Availability Web Cluster', description: 'Deploy an autoscaled Managed Instance Group (MIG) behind a global load balancer that scales from 2 to 200 VMs during traffic spikes.' },
      { title: 'Distributed GPU Rendering Farm', description: 'Spin up 50 Spot VMs with attached NVIDIA GPUs to render 3D animation scenes overnight.' }
    ],
    personas: [
      { name: 'Javier', role: 'DevOps Infrastructure Lead', avatar: '⚙️', reason: 'Runs legacy enterprise enterprise workloads with zero downtime thanks to GCE live migration.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Install gcloud CLI', description: 'Install and authenticate the Google Cloud CLI.', actionSnippet: 'gcloud init' },
      { step: 2, title: 'Create VM Instance', description: 'Launch a Debian Linux VM in seconds.', actionSnippet: 'gcloud compute instances create my-vm \\\n    --zone=us-central1-a \\\n    --machine-type=e2-medium' },
      { step: 3, title: 'SSH into VM', description: 'Connect securely without managing SSH keys manually.', actionSnippet: 'gcloud compute ssh my-vm --zone=us-central1-a' },
      { step: 4, title: 'Attach Persistent Storage', description: 'Dynamically resize or attach extra SSD persistent disks without stopping the VM.' }
    ],
    howItWorks: {
      title: 'KVM Virtualization & Live Migration Infrastructure',
      summary: 'VMs execute on Google custom server racks connected to Andromeda software-defined networking and Colossus storage.',
      steps: [
        { id: 'gce1', label: 'Borg Resource Scheduling', sublabel: 'Cluster Orchestration', description: 'Google Borg orchestrator allocates host CPU cores, memory, and NUMA nodes across global datacenters.' },
        { id: 'gce2', label: 'KVM Hypervisor Boot', sublabel: 'Sub-30s Instance Startup', description: 'Boots the operating system image loaded from networked Colossus persistent disk storage.' },
        { id: 'gce3', label: 'Andromeda SDN Routing', sublabel: 'High-Throughput VPC', description: 'Virtual network interface cards connect directly to Google Andromeda software-defined network.' },
        { id: 'gce4', label: 'Transparent Live Migration', sublabel: 'Zero-Downtime Maintenance', description: 'Pre-copies VM memory pages to a new host when hardware updates occur, completing cutover in milliseconds.' }
      ]
    },
    demoType: 'cloud-deploy',
    relatedToolIds: ['google-cloud', 'cloud-storage', 'kubernetes-engine', 'cloud-load-balancing'],
    resources: {
      website: 'https://cloud.google.com/compute',
      docs: 'https://cloud.google.com/compute/docs'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Configure an automated Managed Instance Group that auto-heals failed VMs and scales based on CPU utilization.'
  },

  {
    id: 'cloud-functions',
    name: 'Google Cloud Functions / Cloud Run Functions',
    tagline: 'Event-driven serverless compute platform to execute microservices and code in response to cloud events without server management.',
    category: 'Cloud & Developer Platforms',
    iconName: 'Zap',
    color: '#4285F4',
    overview: 'Google Cloud Functions (now also unified under Cloud Run functions) is Google’s event-driven serverless compute platform. It enables developers to write single-purpose functions in Node.js, Python, Go, Java, or .NET that trigger automatically from HTTP requests, Cloud Storage uploads, Pub/Sub messages, or Firestore database changes.',
    problemSolved: 'Running microservices on traditional servers requires provisioning VMs, managing operating system updates, configuring auto-scalers, and paying for idle compute when traffic drops. Cloud Functions scales automatically to zero and only bills for exact execution time.',
    skillLevel: 'Beginner',
    pricingType: 'Freemium / Free Tier',
    pricingDetails: 'Generous free tier: 2 million invocations, 400,000 GB-seconds, and 200,000 GHz-seconds free every month.',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://cloud.google.com/functions',
    bestFor: ['Event-driven backend triggers (image resizing upon upload)', 'Serverless webhook endpoints for Stripe, Slack, and GitHub', 'Asynchronous data pipelines and ETL workflows', 'Lightweight REST microservice APIs'],
    capabilities: [
      'Scale to zero: pay nothing when your functions are not receiving traffic',
      'Automatic instant concurrency scaling handling thousands of requests in seconds',
      'Eventarc integration: trigger functions from 125+ Google Cloud and third-party SaaS event sources',
      'Direct integration with Cloud Storage, Pub/Sub, Firebase Auth, and Firestore',
      'Built on open-source Cloud Native Buildpacks (deploy source code directly)'
    ],
    whatYouCanBuild: [
      { title: 'Automated Image Thumbnail Resizer', description: 'Trigger a function whenever a user uploads a photo to Cloud Storage to generate 3 resized thumbnails and save them to a public bucket.' },
      { title: 'Stripe Webhook Payment Processor', description: 'Listen to Stripe payment events, verify cryptographic signatures, and upgrade user subscription status in Cloud SQL.' }
    ],
    personas: [
      { name: 'Mei', role: 'Full-Stack Developer', avatar: '💻', reason: 'Deploys serverless backend APIs in 20 lines of Python without provisioning or managing a single server.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Write Function Code', description: 'Create main.py with an HTTP or CloudEvent handler.', actionSnippet: 'def hello_world(request):\n    return "Hello from Cloud Functions!"' },
      { step: 2, title: 'Deploy via CLI', description: 'Deploy with a single gcloud command.', actionSnippet: 'gcloud functions deploy hello-world \\\n    --runtime python311 \\\n    --trigger-http \\\n    --allow-unauthenticated' },
      { step: 3, title: 'Invoke Endpoint', description: 'Test the live HTTPS URL provided in the deployment output.' },
      { step: 4, title: 'Monitor in Cloud Logging', description: 'View real-time execution logs, latency metrics, and error rates in the console.' }
    ],
    howItWorks: {
      title: 'Event-Driven Serverless Container Lifecyle',
      summary: 'Code is packaged into container images, booted on demand by Knative/Borg, and scaled down to zero when idle.',
      steps: [
        { id: 'cf1', label: 'Event Emission', sublabel: 'HTTP or CloudEvent', description: 'An event occurs (e.g. file upload to Cloud Storage or incoming HTTPS webhook).' },
        { id: 'cf2', label: 'Container Instance Provisioning', sublabel: 'Fast Cold-Start Boot', description: 'If no idle container exists, the platform boots a micro-container running your runtime.' },
        { id: 'cf3', label: 'Function Invocation', sublabel: 'Synchronous / Asynchronous', description: 'Executes the declared handler with event payload parameters and context metadata.' },
        { id: 'cf4', label: 'Scale-to-Zero Standby', sublabel: 'Zero Idle Billing', description: 'Instance stays warm for 15 minutes to handle subsequent traffic, then scales to zero.' }
      ]
    },
    demoType: 'cloud-deploy',
    relatedToolIds: ['cloud-run', 'google-cloud', 'pub-sub', 'cloud-storage', 'firebase'],
    resources: {
      website: 'https://cloud.google.com/functions',
      docs: 'https://cloud.google.com/functions/docs'
    },
    isTrending: true,
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Build an automated PDF invoice generator triggered whenever a new order is inserted into Cloud Firestore.'
  },

  {
    id: 'cloud-build',
    name: 'Google Cloud Build',
    tagline: 'Serverless CI/CD platform that executes fast, automated container builds and deployments across all environments on Google Cloud.',
    category: 'Cloud & Developer Platforms',
    iconName: 'Workflow',
    color: '#4285F4',
    overview: 'Google Cloud Build is a serverless continuous integration and continuous delivery (CI/CD) platform that automates building, testing, and deploying code. It executes build steps inside isolated Docker containers on high-throughput Google Cloud compute infrastructure.',
    problemSolved: 'Maintaining self-hosted Jenkins or CI runners requires managing build agent servers, applying OS patches, and dealing with queue congestion during peak hours. Cloud Build scales up to hundreds of concurrent build workers automatically with zero server maintenance.',
    skillLevel: 'Intermediate',
    pricingType: 'Freemium / Free Tier',
    pricingDetails: 'First 120 build-minutes free per day. Beyond that, priced at $0.003 per build-minute for standard machines.',
    status: 'Active',
    lastVerified: '2025-06-12',
    verifiedSource: 'https://cloud.google.com/build',
    bestFor: ['Automated container builds from GitHub and GitLab commits', 'End-to-end CI/CD pipelines deploying to Cloud Run and GKE', 'Software Supply Chain Security (SLSA Level 3 compliance)', 'Automated container vulnerability scanning'],
    capabilities: [
      '120 free build-minutes every single day for all Google Cloud projects',
      'Native support for Docker, Cloud Native Buildpacks, Maven, Gradle, Go, and npm',
      'Automated triggers listening to GitHub, GitLab, Bitbucket, and Cloud Source Repositories',
      'Supply chain security with automatic generation of signed build provenance (SLSA)',
      'Private worker pools for secure access to VPC enterprise networks'
    ],
    whatYouCanBuild: [
      { title: 'Automated GitHub-to-Cloud Run Pipeline', description: 'Every git push to the main branch runs tests, builds a Docker image, and deploys to Cloud Run with zero downtime.' },
      { title: 'Multi-Architecture Docker Builder', description: 'Compile and push multi-architecture (linux/amd64 and linux/arm64) container images to Artifact Registry.' }
    ],
    personas: [
      { name: 'Devon', role: 'DevOps Engineer', avatar: '🛠️', reason: 'Automates our entire test-and-deploy cycle in a 25-line cloudbuild.yaml file without managing CI servers.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create cloudbuild.yaml', description: 'Define the build steps using container images.', actionSnippet: 'steps:\n- name: "gcr.io/cloud-builders/docker"\n  args: ["build", "-t", "gcr.io/$PROJECT_ID/myapp", "."]\n- name: "gcr.io/cloud-builders/docker"\n  args: ["push", "gcr.io/$PROJECT_ID/myapp"]' },
      { step: 2, title: 'Submit Manual Build', description: 'Trigger a build directly from local source.', actionSnippet: 'gcloud builds submit --config cloudbuild.yaml .' },
      { step: 3, title: 'Connect GitHub Repo', description: 'Set up an automated trigger in the Google Cloud Console to build on every git push.' },
      { step: 4, title: 'View Build Logs', description: 'Inspect real-time streaming build logs and artifact scan results in the console.' }
    ],
    howItWorks: {
      title: 'Containerized Pipeline Execution & Artifact Registry',
      summary: 'Build steps execute sequentially or in parallel inside isolated Docker containers sharing a mounted workspace volume.',
      steps: [
        { id: 'cb1', label: 'Trigger Event & Source Pull', sublabel: 'Webhook or CLI', description: 'Pull request or commit triggers a build; Cloud Build clones source code to an ephemeral workspace.' },
        { id: 'cb2', label: 'Containerized Step Execution', sublabel: 'Parallel Worker Nodes', description: 'Executes declared container steps (/workspace volume mounted across all steps).' },
        { id: 'cb3', label: 'Security & Vulnerability Scan', sublabel: 'Binary Authorization', description: 'Scans compiled container images for known CVEs and signs provenance metadata.' },
        { id: 'cb4', label: 'Artifact Registry Push', sublabel: 'Production Deployment', description: 'Pushes verified images to Artifact Registry and triggers Cloud Deploy or Cloud Run.' }
      ]
    },
    demoType: 'cloud-deploy',
    relatedToolIds: ['cloud-run', 'kubernetes-engine', 'google-cloud', 'cloud-deploy'],
    resources: {
      website: 'https://cloud.google.com/build',
      docs: 'https://cloud.google.com/build/docs'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Build an automated CI/CD pipeline that runs automated linting and tests on pull requests before allowing merge to main.'
  },

  {
    id: 'cloud-deploy',
    name: 'Google Cloud Deploy',
    tagline: 'Fully managed, continuous delivery service that simplifies, automates, and secures delivery pipelines to GKE, Cloud Run, and Anthos.',
    category: 'Cloud & Developer Platforms',
    iconName: 'Workflow',
    color: '#34A853',
    overview: 'Google Cloud Deploy is a managed, opinionated continuous delivery service that automates the release of applications to Google Kubernetes Engine (GKE), Cloud Run, and Anthos. It provides clear multi-target promotion pipelines, built-in approval gates, and 1-click rollbacks.',
    problemSolved: 'Managing multi-environment continuous delivery (dev -> staging -> production) often requires complex custom bash scripts or fragile CI tools. Cloud Deploy provides structured pipeline progression, canary rollouts, and audit trails out of the box.',
    skillLevel: 'Intermediate',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Priced at $15 per active delivery pipeline per month. Free tier includes your first delivery pipeline.',
    status: 'Active',
    lastVerified: '2025-06-12',
    verifiedSource: 'https://cloud.google.com/deploy',
    bestFor: ['Multi-stage continuous delivery (Dev -> Staging -> Prod)', 'Canary rollouts and blue/green deployments to Cloud Run and GKE', 'Enterprise deployment approval workflows', 'Instant 1-click rollback of failed releases'],
    capabilities: [
      'Progressive delivery with automated canary releases (e.g. 10% -> 25% -> 100%)',
      'Unified delivery across Google Kubernetes Engine (GKE), Cloud Run, and Anthos',
      'Built-in human approval gates before promoting releases to production',
      'Native 1-click rollback to any previously verified release state',
      'Audit logging and Cloud IAM security integration for compliance'
    ],
    whatYouCanBuild: [
      { title: 'Automated Multi-Stage Canary Pipeline', description: 'Deploy new container images to staging, run automated health checks, and promote to production with 10% canary traffic.' },
      { title: 'Enterprise GKE Continuous Release System', description: 'Deploy microservices across 3 global GKE clusters with required manager sign-offs.' }
    ],
    personas: [
      { name: 'Siddharth', role: 'Release Engineering Lead', avatar: '🚀', reason: 'Replaced 1,200 lines of fragile Jenkins deployment scripts with a single declarative Cloud Deploy pipeline.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create clouddeploy.yaml', description: 'Define pipeline stages and target clusters/services.', actionSnippet: 'apiVersion: deploy.cloud.google.com/v1\nkind: DeliveryPipeline\nmetadata:\n  name: my-pipeline\nserialPipeline:\n  stages:\n  - targetId: staging\n  - targetId: prod' },
      { step: 2, title: 'Register Pipeline', description: 'Apply the delivery pipeline configuration.', actionSnippet: 'gcloud deploy apply --file=clouddeploy.yaml --region=us-central1' },
      { step: 3, title: 'Create Release', description: 'Create a new release referencing your Skaffold configuration.', actionSnippet: 'gcloud deploy releases create release-001 \\\n    --delivery-pipeline=my-pipeline \\\n    --region=us-central1' },
      { step: 4, title: 'Promote to Production', description: 'Promote the release to the next stage via CLI or the Cloud Console.' }
    ],
    howItWorks: {
      title: 'Declarative Progressive Delivery & Skaffold Integration',
      summary: 'Cloud Deploy orchestrates Skaffold manifests, rendering configuration per stage and tracking rollouts.',
      steps: [
        { id: 'cd1', label: 'Release Creation', sublabel: 'Skaffold Render', description: 'Renders Kubernetes or Cloud Run manifests with specific image tags and stores the immutable release.' },
        { id: 'cd2', label: 'Stage Rollout', sublabel: 'Target Execution', description: 'Applies manifests to the target environment (e.g. Dev or Staging) using Cloud Build runners.' },
        { id: 'cd3', label: 'Canary Verification', sublabel: 'Automated Health Checks', description: 'Monitors error rates and latency while shifting percentage of user traffic to the new revision.' },
        { id: 'cd4', label: 'Promotion & Approval Gate', sublabel: 'Production Cutover', description: 'Requires IAM-authorized human approval before promoting the immutable release to production.' }
      ]
    },
    demoType: 'cloud-deploy',
    relatedToolIds: ['cloud-run', 'kubernetes-engine', 'cloud-build', 'google-cloud'],
    resources: {
      website: 'https://cloud.google.com/deploy',
      docs: 'https://cloud.google.com/deploy/docs'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Set up an automated canary release pipeline for a Cloud Run service that safely rolls back if error rate exceeds 1%.'
  },

  {
    id: 'cloud-load-balancing',
    name: 'Google Cloud Load Balancing',
    tagline: 'High-performance, ultra-low-latency global traffic distribution service backed by Google’s global Anycast fiber network.',
    category: 'Cloud & Developer Platforms',
    iconName: 'Network',
    color: '#4285F4',
    overview: 'Google Cloud Load Balancing is a fully distributed, software-defined managed traffic distribution service. Operating at the edge of Google’s global network across 100+ points of presence (POPs), it terminates user connections close to the user and distributes millions of requests per second across Compute Engine, GKE, and Cloud Run backends worldwide.',
    problemSolved: 'Traditional hardware or DNS load balancers require complex pre-warming, introduce latency, and can become single points of failure. Google Cloud Load Balancing scales instantly to 1M+ queries per second with a single global Anycast IP and zero pre-warming.',
    skillLevel: 'Intermediate',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Base service charge of $0.025/hour for the first 5 forwarding rules + $0.008 to $0.012 per GB of processed data.',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://cloud.google.com/load-balancing',
    bestFor: ['Global multi-region web applications', 'Ultra-low latency worldwide content delivery', 'Automated SSL certificate termination and management', 'High-volume DDoS defense via Google Cloud Armor integration'],
    capabilities: [
      'Single global Anycast IP address routing traffic to the nearest healthy backend region',
      'No pre-warming required: handles sudden spikes from 0 to 1,000,000+ QPS instantly',
      'Layer 7 (HTTP/HTTPS) and Layer 4 (TCP/UDP/SSL) load balancing',
      'Automated Google-managed SSL/TLS certificates with zero-downtime renewals',
      'Integrated with Cloud CDN for static asset caching and Cloud Armor for WAF security'
    ],
    whatYouCanBuild: [
      { title: 'Global Multi-Region E-Commerce Platform', description: 'Serve users in Europe, Asia, and the Americas from their closest backend region with instant automatic failover.' },
      { title: 'Microservices URL Masking Gateway', description: 'Route /api/users to GKE, /api/checkout to Cloud Run, and static assets to Cloud Storage under a single domain.' }
    ],
    personas: [
      { name: 'Kenji', role: 'Global Systems Architect', avatar: '🌐', reason: 'Routes 50 million daily gamers to their lowest-latency regional server with zero packet drops.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create Backend Service', description: 'Define backend service pointing to your GKE ingress, Cloud Run, or VM instance groups.' },
      { step: 2, title: 'Configure URL Map', description: 'Route paths (e.g. /api/*) to specific backend services.' },
      { step: 3, title: 'Create Managed SSL Certificate', description: 'Request a free Google-managed certificate for your domain.', actionSnippet: 'gcloud compute ssl-certificates create my-cert --domains=example.com' },
      { step: 4, title: 'Create Global Forwarding Rule', description: 'Assign a global external Anycast IPv4 address and bind port 443.' }
    ],
    howItWorks: {
      title: 'Global Anycast BGP & Maglev Software Load Balancing',
      summary: 'Traffic enters Google’s fiber backbone at the nearest edge POP and is routed by Maglev load balancers to regional instances.',
      steps: [
        { id: 'lb1', label: 'Global Anycast Edge Ingress', sublabel: 'Nearest Point of Presence', description: 'User DNS resolves to a single Anycast IP; BGP routes traffic to the physically closest Google edge node.' },
        { id: 'lb2', label: 'Edge SSL Termination', sublabel: 'BBR & TCP Optimization', description: 'Terminates TLS handshake at the edge, utilizing Google BBR congestion control over private fiber.' },
        { id: 'lb3', label: 'Maglev Packet Distribution', sublabel: 'Consistent Hashing', description: 'Google Maglev software routers distribute packets across healthy backend servers with zero state loss.' },
        { id: 'lb4', label: 'Backend Health Check & Failover', sublabel: 'Sub-Second Rerouting', description: 'Continuously polls backends; reroutes traffic to adjacent global regions in under 1 second if an outage occurs.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['cloud-run', 'kubernetes-engine', 'compute-engine', 'cloud-armor'],
    resources: {
      website: 'https://cloud.google.com/load-balancing',
      docs: 'https://cloud.google.com/load-balancing/docs'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Configure a Global External Application Load Balancer that routes static traffic to Cloud Storage and API calls to Cloud Run.'
  },

  {
    id: 'firebase-hosting',
    name: 'Firebase Hosting',
    tagline: 'Fast, secure, enterprise-grade web hosting backed by Google’s global CDN with automated SSL and serverless framework support.',
    category: 'Cloud & Developer Platforms',
    iconName: 'Globe',
    color: '#FFA000',
    overview: 'Firebase Hosting provides fast, secure, and reliable web hosting for static websites, single-page web apps (SPAs), and full-stack web frameworks (Next.js, Angular, React). Backed by Google’s global Content Delivery Network (CDN) with automated SSD caching and zero-config SSL certificates, Firebase Hosting deploys with a single CLI command.',
    problemSolved: 'Deploying modern web applications often involves configuring web servers, setting up SSL certificates, and configuring CDN cache invalidations manually. Firebase Hosting automates provisioning, SSL issuance, and global edge caching in seconds.',
    skillLevel: 'Beginner',
    pricingType: 'Freemium / Free Tier',
    pricingDetails: 'Generous free tier: 10 GB storage and 360 MB/day data transfer free. Pay-as-you-go thereafter ($0.026/GB storage, $0.15/GB transfer).',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://firebase.google.com/products/hosting',
    bestFor: ['Deploying React, Vue, Angular, and Vite single-page applications', 'Full-stack Next.js and server-rendered web frameworks', 'Free custom domain hosting with automated SSL', 'Micro-frontends and preview channels for pull requests'],
    capabilities: [
      'Global SSD-backed CDN caching content at edge locations worldwide',
      'Zero-config automated SSL certificates provisioned for custom domains for free',
      'Preview Channels: deploy ephemeral staging URLs for every GitHub pull request',
      '1-command rollback: instantly revert to any previous release in the Firebase console',
      'Deep integration with Cloud Run and Cloud Functions for server-side rendering (SSR)'
    ],
    whatYouCanBuild: [
      { title: 'Global Vite React Web Application', description: 'Deploy a responsive web app to a global CDN with custom domain and automated SSL in under 2 minutes.' },
      { title: 'Full-Stack Next.js SSR Web App', description: 'Host a Next.js application with server-side rendered dynamic routes powered by serverless backend integration.' }
    ],
    personas: [
      { name: 'Camila', role: 'Frontend Web Developer', avatar: '👩‍💻', reason: 'Deploys production updates in 15 seconds with "firebase deploy" and tests pull requests on preview channels.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Install Firebase CLI', description: 'Install the global CLI tool.', actionSnippet: 'npm install -g firebase-tools' },
      { step: 2, title: 'Initialize Hosting', description: 'Run init in your project directory and select your build folder (e.g. dist or build).', actionSnippet: 'firebase init hosting' },
      { step: 3, title: 'Build Web App', description: 'Generate your production build files.', actionSnippet: 'npm run build' },
      { step: 4, title: 'Deploy Live', description: 'Publish files to Google’s worldwide CDN.', actionSnippet: 'firebase deploy --only hosting' }
    ],
    howItWorks: {
      title: 'Global Anycast CDN & Atomic File Deployment',
      summary: 'Build assets are hashed, uploaded atomically to Cloud Storage, and cached across Google edge nodes globally.',
      steps: [
        { id: 'fh1', label: 'File Hash & Delta Upload', sublabel: 'Content-Addressable Upload', description: 'Calculates SHA-256 hashes of all assets; uploads only changed files to minimize deploy time.' },
        { id: 'fh2', label: 'Atomic Release Cutover', sublabel: 'Zero-Downtime Deployment', description: 'Creates an immutable release pointer, switching traffic atomically without partial deploy states.' },
        { id: 'fh3', label: 'Global CDN Caching', sublabel: 'Edge Distribution', description: 'Caches static files across Google edge POPs, terminating HTTPS with automated certificates.' },
        { id: 'fh4', label: 'Dynamic Cloud Run Rewrite', sublabel: 'Serverless SSR Routing', description: 'Routes dynamic SSR requests transparently to Cloud Run or Cloud Functions backends.' }
      ]
    },
    demoType: 'cloud-deploy',
    relatedToolIds: ['firebase', 'cloud-run', 'project-idx', 'angular'],
    resources: {
      website: 'https://firebase.google.com/products/hosting',
      docs: 'https://firebase.google.com/docs/hosting'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Deploy a modern portfolio web app with GitHub Actions that automatically publishes preview URLs on pull requests.'
  },

  {
    id: 'cloud-armor',
    name: 'Google Cloud Armor',
    tagline: 'Enterprise-grade DDoS mitigation and Web Application Firewall (WAF) leveraging the infrastructure protecting Google Search and YouTube.',
    category: 'Cloud & Developer Platforms',
    iconName: 'Shield',
    color: '#EA4335',
    overview: 'Google Cloud Armor delivers enterprise-grade Distributed Denial of Service (DDoS) defense and a Web Application Firewall (WAF) at the edge of Google’s global network. Built on the same infrastructure that protects Google.com, YouTube, and Google Search, Cloud Armor defends web apps from volumetric DDoS attacks, OWASP Top 10 exploits, and malicious bot traffic.',
    problemSolved: 'DDoS attacks and web exploits (SQL injection, cross-site scripting) can overwhelm web servers, cause catastrophic downtime, and expose sensitive customer data. Cloud Armor inspects and mitigates threats at Google’s global edge before traffic reaches your servers.',
    skillLevel: 'Intermediate',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Standard tier: $5/policy/month + $0.75 per million HTTP requests. Managed Protection Plus tier available for enterprise DDoS coverage.',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://cloud.google.com/armor',
    bestFor: ['Protecting web applications from multi-terabit DDoS attacks', 'Blocking OWASP Top 10 vulnerabilities (SQLi, XSS, RCE)', 'Rate limiting and geographic IP blocking', 'Bot management and fraud prevention with reCAPTCHA Enterprise'],
    capabilities: [
      'Multi-terabit volumetric DDoS defense at Google edge points of presence',
      'Pre-configured WAF rules for OWASP Top 10 (SQL injection, cross-site scripting, LFI)',
      'Adaptive Protection: machine learning anomaly detection analyzing traffic patterns',
      'Geographic filtering (allow or deny requests based on user country code)',
      'Granular rate limiting to prevent brute-force attacks and API scraping'
    ],
    whatYouCanBuild: [
      { title: 'Enterprise Banking Web Shield', description: 'Deploy OWASP WAF rules, rate limiting, and geographic restrictions protecting financial API endpoints.' },
      { title: 'Anti-Scraping API Defense', description: 'Enforce rate limits of 100 requests per minute per IP address on public search and catalog endpoints.' }
    ],
    personas: [
      { name: 'Sarah', role: 'Chief Information Security Officer', avatar: '🛡️', reason: 'Protects critical enterprise cloud infrastructure against layer 7 DDoS attacks with automated ML adaptive mitigation.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create Security Policy', description: 'Create a Cloud Armor security policy.', actionSnippet: 'gcloud compute security-policies create my-waf-policy' },
      { step: 2, title: 'Add OWASP Rule', description: 'Add a pre-configured SQL injection prevention rule.', actionSnippet: 'gcloud compute security-policies rules create 1000 \\\n    --security-policy=my-waf-policy \\\n    --expression="evaluatePreconfiguredExpr(\'sqli-stable\')" \\\n    --action=deny-403' },
      { step: 3, title: 'Attach to Backend Service', description: 'Attach the policy to your Google Cloud Load Balancer backend service.' },
      { step: 4, title: 'Monitor Blocked Requests', description: 'View real-time attack telemetry and blocked IP maps in Cloud Monitoring.' }
    ],
    howItWorks: {
      title: 'Global Edge Packet Filtering & ML Threat Mitigation',
      summary: 'Incoming requests are evaluated at Google edge nodes against WAF rule expressions and ML anomaly models.',
      steps: [
        { id: 'ca1', label: 'Edge Packet Ingestion', sublabel: 'Google Edge Network', description: 'Traffic arrives at the nearest global Anycast edge POP before entering internal VPC networks.' },
        { id: 'ca2', label: 'DDoS Volumetric Scrubbing', sublabel: 'Terabit-Scale Defense', description: 'Volumetric SYN floods, UDP amplification, and Layer 3/4 attacks are scrubbed automatically.' },
        { id: 'ca3', label: 'WAF Rule Evaluation', sublabel: 'OWASP & Regex Engine', description: 'Inspects HTTP headers, cookies, query parameters, and POST bodies for malicious payloads.' },
        { id: 'ca4', label: 'ML Adaptive Protection', sublabel: 'Anomaly Detection', description: 'Identifies signature patterns of application layer attacks and suggests tailored 1-click mitigation rules.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['cloud-load-balancing', 'google-cloud', 'kubernetes-engine', 'cloud-run'],
    resources: {
      website: 'https://cloud.google.com/armor',
      docs: 'https://cloud.google.com/armor/docs'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Configure Cloud Armor rate limiting rules to protect your login API endpoint from credential stuffing attacks.'
  },

  // ==================== STORAGE & DATABASES ====================
  {
    id: 'cloud-spanner',
    name: 'Cloud Spanner',
    tagline: 'The world’s first fully managed, mission-critical relational database with infinite scale, 99.999% SLA, and external consistency.',
    category: 'Data & Analytics',
    iconName: 'Database',
    color: '#4285F4',
    overview: 'Cloud Spanner is Google’s enterprise-grade, fully managed relational database service. It combines the benefits of relational database structure (ACID transactions, SQL queries, relational schemas) with the horizontal scalability of NoSQL databases. Powered by Google’s proprietary TrueTime API, Spanner delivers an unmatched 99.999% (five nines) availability SLA with external consistency globally.',
    problemSolved: 'Traditional relational databases (PostgreSQL, MySQL) require complex manual sharding to scale, which breaks transactions and creates operational nightmares. NoSQL databases offer scale but sacrifice ACID transactions. Cloud Spanner delivers both: global relational transactions with limitless scale.',
    skillLevel: 'Advanced',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Priced per Spanner compute node or processing unit (starting at ~$0.09/hour for 100 processing units) + storage ($0.30/GB/month).',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://cloud.google.com/spanner',
    bestFor: ['Global financial transactions and payment processing', 'Multi-region mission-critical systems requiring 99.999% SLA', 'Enterprise inventory and supply chain tracking', 'Large gaming backends requiring strict consistency'],
    capabilities: [
      'Industry-leading 99.999% availability SLA (under 5 minutes of downtime per year)',
      'TrueTime API utilizing atomic clocks and GPS receivers for global external consistency',
      'Full ACID transactions with standard ANSI SQL support and relational foreign keys',
      'Automatic transparent horizontal sharding without manual database partitioning',
      'Built-in vector search integration for generative AI embeddings'
    ],
    whatYouCanBuild: [
      { title: 'Global Multi-Currency Banking Ledger', description: 'Execute millions of debit/credit financial transactions across 4 continents with zero risk of double-spending.' },
      { title: 'Global Airline Reservation Engine', description: 'Manage seat inventory bookings across worldwide travel agencies with strict consistency and zero overbooking.' }
    ],
    personas: [
      { name: 'Vikram', role: 'Chief Enterprise Architect', avatar: '🏦', reason: 'Chose Spanner to power our core banking engine with 99.999% SLA and absolute transactional consistency.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create Spanner Instance', description: 'Provision an instance in the Google Cloud Console.', actionSnippet: 'gcloud spanner instances create my-instance \\\n    --config=regional-us-central1 \\\n    --description="Production Instance" \\\n    --processing-units=100' },
      { step: 2, title: 'Create Database', description: 'Create database with standard SQL dialect.', actionSnippet: 'gcloud spanner databases create my-db --instance=my-instance' },
      { step: 3, title: 'Define Schema', description: 'Create tables with primary keys and foreign keys.' },
      { step: 4, title: 'Execute ACID Transaction', description: 'Read and write data using official client SDKs with automatic transaction retries.' }
    ],
    howItWorks: {
      title: 'TrueTime API & Paxos Consensus Replication',
      summary: 'TrueTime atomic clocks synchronize distributed servers while Paxos groups achieve consensus across data splits.',
      steps: [
        { id: 'cs1', label: 'TrueTime Clock Synchronization', sublabel: 'GPS & Atomic Clocks', description: 'TrueTime API provides bounded clock uncertainty (under 7ms) across all global datacenters.' },
        { id: 'cs2', label: 'Automatic Data Split Sharding', sublabel: 'Transparent Partitioning', description: 'Tables are automatically split into contiguous key ranges and balanced across compute nodes.' },
        { id: 'cs3', label: 'Paxos Consensus Groups', sublabel: 'Quorum Replication', description: 'Each split is replicated across multiple zones; Paxos consensus handles writes with zero data loss.' },
        { id: 'cs4', label: 'Distributed Two-Phase Commit', sublabel: 'Global ACID Transactions', description: 'Executes cross-split and cross-region ACID transactions using TrueTime commit timestamps.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['cloud-sql', 'bigquery', 'cloud-storage', 'google-cloud'],
    resources: {
      website: 'https://cloud.google.com/spanner',
      docs: 'https://cloud.google.com/spanner/docs'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Design a globally distributed payment ledger schema in Cloud Spanner with strict foreign key constraints.'
  },

  {
    id: 'cloud-sql',
    name: 'Cloud SQL',
    tagline: 'Fully managed relational database service for MySQL, PostgreSQL, and SQL Server with automatic patching, backups, and replication.',
    category: 'Data & Analytics',
    iconName: 'Database',
    color: '#4285F4',
    overview: 'Cloud SQL is a fully managed relational database service that simplifies the setup, maintenance, management, and administration of MySQL, PostgreSQL, and Microsoft SQL Server databases in Google Cloud. It provides automated backups, high availability with automatic failover, storage auto-resize up to 64TB, and integrated pgvector AI search.',
    problemSolved: 'Self-hosting relational databases requires tedious routine maintenance: operating system patching, configuring replica lag, managing failovers, taking manual backups, and resizing disks when storage runs full. Cloud SQL automates all operational maintenance.',
    skillLevel: 'Beginner',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Priced per vCPU, memory, and storage provisioned. Free micro instances available for light development.',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://cloud.google.com/sql',
    bestFor: ['Traditional web application backends (WordPress, Django, Rails, Spring Boot)', 'Managed relational data storage (PostgreSQL, MySQL, SQL Server)', 'Vector search with PostgreSQL pgvector extension', 'Enterprise database migrations to the cloud'],
    capabilities: [
      'Fully managed MySQL, PostgreSQL, and SQL Server engines',
      'High availability (HA) with 99.99% SLA and automatic cross-zone failover',
      'Automatic storage capacity increase: expands disks dynamically as data grows up to 64TB',
      'Integrated pgvector extension for storing and querying AI vector embeddings in PostgreSQL',
      'Automated daily backups and point-in-time recovery (PITR) to the exact second'
    ],
    whatYouCanBuild: [
      { title: 'Enterprise E-Commerce Database', description: 'Run a PostgreSQL database powering an e-commerce catalog with read replicas handling search traffic and primary handling orders.' },
      { title: 'GenAI Vector Knowledge Store', description: 'Store company documentation embeddings in Cloud SQL for PostgreSQL using pgvector for semantic search.' }
    ],
    personas: [
      { name: 'Gabriel', role: 'Full-Stack Developer', avatar: '💻', reason: 'Deploys production PostgreSQL in 3 clicks with automated daily backups and zero maintenance headaches.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create Cloud SQL Instance', description: 'Choose PostgreSQL, MySQL, or SQL Server in the Google Cloud console.', actionSnippet: 'gcloud sql instances create my-pg-instance \\\n    --database-version=POSTGRES_15 \\\n    --cpu=2 --memory=8GB \\\n    --zone=us-central1-a' },
      { step: 2, title: 'Create Database & User', description: 'Add your application database and secure user credentials.' },
      { step: 3, title: 'Connect Securely', description: 'Connect using Cloud SQL Auth Proxy to eliminate managing authorized IP lists.', actionSnippet: 'cloud-sql-proxy my-project:us-central1:my-pg-instance' },
      { step: 4, title: 'Execute SQL Queries', description: 'Connect using any standard database client (psql, DBeaver, Prisma, TypeORM).' }
    ],
    howItWorks: {
      title: 'Automated Replication & Cross-Zone Failover',
      summary: 'Primary instance replicates synchronously to a standby instance in an alternate zone with automated health probing.',
      steps: [
        { id: 'csql1', label: 'Synchronous Storage Replication', sublabel: 'Regional Persistent Disk', description: 'Data written to the primary database is synchronously replicated to a standby zone.' },
        { id: 'csql2', label: 'Cloud SQL Auth Proxy', sublabel: 'Mutual TLS Tunnel', description: 'Client applications connect through a local proxy that establishes mTLS with automated IAM authentication.' },
        { id: 'csql3', label: 'Automated Health Monitoring', sublabel: 'Heartbeat Probing', description: 'Control plane continuously monitors database health and replica replication lag.' },
        { id: 'csql4', label: 'Automatic Zone Failover', sublabel: 'Sub-Minute Recovery', description: 'If the primary zone fails, traffic immediately switches to the standby instance with zero data loss.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['cloud-spanner', 'cloud-run', 'google-cloud', 'alloydb'],
    resources: {
      website: 'https://cloud.google.com/sql',
      docs: 'https://cloud.google.com/sql/docs'
    },
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Build a production REST API on Cloud Run connected securely to Cloud SQL PostgreSQL using Cloud SQL Auth Proxy.'
  },

  {
    id: 'cloud-bigtable',
    name: 'Cloud Bigtable',
    tagline: 'Petabyte-scale, ultra-low-latency NoSQL database engineered for high-throughput analytical and operational workloads at sub-10ms latency.',
    category: 'Data & Analytics',
    iconName: 'Database',
    color: '#4285F4',
    overview: 'Cloud Bigtable is Google’s enterprise-grade, sparsely populated NoSQL wide-column database. Engineered to handle massive analytical and operational workloads at petabyte scale, Bigtable powers Google’s largest internal products including Google Search, Google Maps, and YouTube. It delivers consistent sub-10ms latency and scales linearly with node count.',
    problemSolved: 'Traditional relational and document databases degrade when handling hundreds of thousands of writes per second or petabyte-scale datasets. Bigtable provides predictable sub-10ms response times at millions of reads and writes per second.',
    skillLevel: 'Advanced',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Priced per node hour (~$0.65/node/hour) + storage ($0.026/GB/month for HDD, $0.17/GB/month for SSD).',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://cloud.google.com/bigtable',
    bestFor: ['High-throughput IoT telemetry and time-series data', 'Financial market data feeds and trading tick stores', 'AdTech real-time bidding and user profiling', 'Large-scale graph analytics and machine learning feature stores'],
    capabilities: [
      'Sub-10ms latency for both read and write operations at scale',
      'Linear scalability: adding nodes linearly increases throughput (up to 10,000 QPS per SSD node)',
      'Apache HBase API compatibility for easy migration of existing big data stacks',
      'Seamless integration with BigQuery, Dataflow, and Apache Spark for real-time analytics',
      'Automated replication across up to 8 regions with 99.999% SLA'
    ],
    whatYouCanBuild: [
      { title: 'Global IoT Fleet Telemetry Ingestion', description: 'Ingest and store sensor readings from 500,000 connected vehicles reporting speed and diagnostics every second.' },
      { title: 'High-Frequency Financial Tick Store', description: 'Store sub-second stock trade order books with instantaneous historical range queries.' }
    ],
    personas: [
      { name: 'Artem', role: 'Big Data Architect', avatar: '📊', reason: 'Handles 800,000 write operations per second with sub-5ms latency for our real-time bidding platform.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create Bigtable Instance', description: 'Create an instance with SSD storage in the Google Cloud Console.', actionSnippet: 'gcloud bigtable instances create my-instance \\\n    --cluster-config=id=my-cluster,zone=us-central1-b,nodes=3 \\\n    --display-name="Production Bigtable"' },
      { step: 2, title: 'Design Row Key Schema', description: 'Design row keys carefully (e.g. deviceId#timestamp) to ensure uniform data distribution and avoid hotspots.' },
      { step: 3, title: 'Create Table & Column Families', description: 'Use the cbt CLI tool to create tables.', actionSnippet: 'cbt -instance=my-instance createtable my-table "cf1"' },
      { step: 4, title: 'Stream Reads & Writes', description: 'Interact with data using the official Python, Go, or Java Bigtable SDKs.' }
    ],
    howItWorks: {
      title: 'Wide-Column SSTable & Colossus Storage Architecture',
      summary: 'Compute nodes handle routing and caching while underlying immutable SSTable files reside in Colossus storage.',
      steps: [
        { id: 'bt1', label: 'Row Key Hash Routing', sublabel: 'Table Sharding', description: 'Tables are partitioned into sorted "tablets" mapped dynamically across Bigtable compute nodes.' },
        { id: 'bt2', label: 'MemTable & Commit Log Write', sublabel: 'Sequential Writes', description: 'Writes are appended to an on-disk commit log and buffered in an in-memory MemTable.' },
        { id: 'bt3', label: 'SSTable Colossus Flush', sublabel: 'Immutable File Storage', description: 'MemTables flush periodically into immutable SSTable files stored on Google Colossus distributed storage.' },
        { id: 'bt4', label: 'Compaction & Block Caching', sublabel: 'Sub-10ms Read Latency', description: 'Background compaction merges SSTables while block caches serve reads with sub-10ms latency.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['bigquery', 'cloud-storage', 'google-cloud', 'pub-sub'],
    resources: {
      website: 'https://cloud.google.com/bigtable',
      docs: 'https://cloud.google.com/bigtable/docs'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Build a time-series telemetry store that ingests temperature sensor data and integrates with BigQuery for analytics.'
  },

  {
    id: 'cloud-firestore',
    name: 'Cloud Firestore',
    tagline: 'Serverless NoSQL document database with real-time listeners, powerful querying, and offline data sync for web, mobile, and server.',
    category: 'Data & Analytics',
    iconName: 'Database',
    color: '#FFA000',
    overview: 'Cloud Firestore is a flexible, scalable, serverless NoSQL document database built on Google Cloud infrastructure. Available both as a standalone Google Cloud database and as part of Firebase, Firestore enables developers to store, sync, and query data for mobile, web, and server applications with real-time data listeners and automatic offline support.',
    problemSolved: 'Keeping client applications synchronized with backend data traditionally requires polling servers or building complex custom WebSocket infrastructure. Firestore automatically syncs data changes to connected web and mobile devices in real time.',
    skillLevel: 'Beginner',
    pricingType: 'Freemium / Free Tier',
    pricingDetails: 'Generous free tier: 1 GB storage, 50,000 reads, 20,000 writes, and 20,000 deletes free every day.',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://firebase.google.com/products/firestore',
    bestFor: ['Mobile and web applications needing real-time data sync', 'Collaborative multi-user tools (chat apps, shared documents)', 'Offline-first mobile applications with automatic local caching', 'Serverless application state and session storage'],
    capabilities: [
      'Real-time data synchronization to connected web, iOS, and Android clients',
      'Automatic offline data caching and local persistence across app restarts',
      'Expressive querying: filter and sort across multiple fields with automated indexing',
      'Multi-region replication with strong consistency and 99.999% availability SLA',
      'Granular client-side security rules enforcing authentication and validation'
    ],
    whatYouCanBuild: [
      { title: 'Real-Time Team Chat Application', description: 'Build a collaborative messaging app where new messages appear instantly on all team devices with zero page refresh.' },
      { title: 'Offline-First Field Inspection Tool', description: 'Inspectors record data in remote areas without internet; changes sync automatically when connectivity returns.' }
    ],
    personas: [
      { name: 'Zoe', role: 'Mobile App Developer', avatar: '📱', reason: 'Builds collaborative Flutter and React apps with real-time listeners in 10 lines of code.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Initialize Firestore', description: 'Enable Firestore in your Firebase or Google Cloud project console.' },
      { step: 2, title: 'Install Client SDK', description: 'Install the Firebase SDK for web, Flutter, Android, or iOS.', actionSnippet: 'npm install firebase' },
      { step: 3, title: 'Write Document', description: 'Save structured JSON documents to collections.', actionSnippet: 'import { doc, setDoc } from "firebase/firestore";\nawait setDoc(doc(db, "users", "alovelace"), { name: "Ada Lovelace", born: 1815 });' },
      { step: 4, title: 'Listen to Real-Time Updates', description: 'Attach an onSnapshot listener for instant live updates.', actionSnippet: 'onSnapshot(doc(db, "users", "alovelace"), (doc) => {\n  console.log("Current data: ", doc.data());\n});' }
    ],
    howItWorks: {
      title: 'Real-Time WebSocket Sync & Document Tree Architecture',
      summary: 'Documents are organized into hierarchical collections, indexed automatically, and streamed to clients over WebSockets.',
      steps: [
        { id: 'fs1', label: 'Document & Collection Hierarchy', sublabel: 'NoSQL Structure', description: 'Data is stored as JSON-like documents grouped into collections and subcollections.' },
        { id: 'fs2', label: 'Automatic Indexing Engine', sublabel: 'Single & Composite Indexes', description: 'Every field is indexed automatically, ensuring query performance depends on result set size, not total dataset size.' },
        { id: 'fs3', label: 'Multi-Region Spanner Backbone', sublabel: 'High-Durability Consensus', description: 'Backed by Cloud Spanner multi-region storage infrastructure ensuring strong consistency.' },
        { id: 'fs4', label: 'Real-Time WebSocket Streaming', sublabel: 'Reactive Client Updates', description: 'Changes are pushed reactively to client SDK listeners, updating local caches and triggering UI re-renders.' }
      ]
    },
    demoType: 'firebase-arch',
    relatedToolIds: ['firebase', 'firebase-emulator-suite', 'cloud-storage', 'cloud-functions'],
    resources: {
      website: 'https://firebase.google.com/products/firestore',
      docs: 'https://firebase.google.com/docs/firestore'
    },
    isTrending: true,
    isBeginnerFriendly: true,
    featuredProjectIdea: 'Build a collaborative kanban board app where cards move in real time across team members’ screens.'
  },

  {
    id: 'memorystore',
    name: 'Memorystore',
    tagline: 'Ultra-fast, fully managed in-memory data store service for Redis and Memcached delivering sub-millisecond data caching.',
    category: 'Data & Analytics',
    iconName: 'Cpu',
    color: '#EA4335',
    overview: 'Memorystore is a fully managed in-memory data store service for Google Cloud, supporting open-source Redis and Memcached. Delivering sub-millisecond latency for caching, session stores, real-time leaderboards, and pub/sub message brokering, Memorystore allows developers to build high-performance applications without managing Redis clusters.',
    problemSolved: 'Database queries to disk-backed relational databases (SQL) can take 50-200ms, creating bottlenecks during high traffic. Memorystore caches frequently accessed data in RAM, serving responses in under 1 millisecond and protecting backend databases.',
    skillLevel: 'Intermediate',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Priced per GB of in-memory capacity provisioned (~$0.049 per GB/hour for Basic Tier, $0.068 for Standard HA Tier).',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://cloud.google.com/memorystore',
    bestFor: ['Sub-millisecond application caching', 'User session management & token caching', 'Real-time gaming leaderboards', 'Rate limiting and real-time streaming pub/sub'],
    capabilities: [
      'Sub-millisecond latency for read and write operations',
      '100% open-source Redis and Memcached protocol compatibility (zero code changes)',
      'High Availability (HA) with automated cross-zone failover and 99.9% SLA',
      'Cluster support scaling up to 250 nodes and terabytes of memory capacity',
      'VPC Peering: private IP access with zero exposure to the public internet'
    ],
    whatYouCanBuild: [
      { title: 'Global E-Commerce Session Cache', description: 'Store user shopping carts and authentication tokens in Redis for instantaneous page transitions.' },
      { title: 'Live Gaming Leaderboard', description: 'Rank millions of active players in real time using Redis Sorted Sets (ZADD and ZREVRANGE).' }
    ],
    personas: [
      { name: 'Dante', role: 'Lead Backend Engineer', avatar: '⚡', reason: 'Reduced our API response times from 120ms to 4ms by caching SQL query results in Memorystore for Redis.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create Redis Instance', description: 'Provision an instance in the Google Cloud Console.', actionSnippet: 'gcloud redis instances create my-cache \\\n    --size=5 --region=us-central1 \\\n    --tier=standard' },
      { step: 2, title: 'Connect from Compute Engine / Cloud Run', description: 'Connect via private VPC IP using standard redis-cli or Node.js/Python redis libraries.' },
      { step: 3, title: 'Set and Get Keys', description: 'Cache data with Time-To-Live (TTL) expiration.', actionSnippet: 'import redis\nr = redis.Redis(host="10.0.0.3", port=6379)\nr.set("user:100", "Ada Lovelace", ex=3600)\nprint(r.get("user:100"))' }
    ],
    howItWorks: {
      title: 'In-Memory Key-Value Caching & Replica Failover',
      summary: 'Data resides entirely in high-speed RAM with synchronous replication to an alternate zone standby node.',
      steps: [
        { id: 'ms1', label: 'VPC Private IP Routing', sublabel: 'Low-Latency Internal Network', description: 'Traffic routes over Google private VPC networking directly to the Redis instance IP.' },
        { id: 'ms2', label: 'RAM Key-Value Operations', sublabel: 'Sub-Millisecond Execution', description: 'Executes operations directly in RAM using single-threaded event loops for deterministic sub-millisecond speed.' },
        { id: 'ms3', label: 'Synchronous Replica Sync', sublabel: 'Standard HA Tier', description: 'Primary node replicates state changes to a standby replica located in an alternate availability zone.' },
        { id: 'ms4', label: 'Automatic Failover Sentinel', sublabel: 'Sub-30s Recovery', description: 'If the primary node fails, Google health sentinels promote the standby replica with zero data loss.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['cloud-sql', 'cloud-run', 'compute-engine', 'google-cloud'],
    resources: {
      website: 'https://cloud.google.com/memorystore',
      docs: 'https://cloud.google.com/memorystore/docs'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Build a distributed rate limiter in Node.js using Memorystore Redis to protect your APIs against abuse.'
  },

  {
    id: 'alloydb',
    name: 'AlloyDB for PostgreSQL',
    tagline: 'Fully managed PostgreSQL-compatible database with 4x faster transactional processing and 100x faster analytical queries.',
    category: 'Data & Analytics',
    iconName: 'Database',
    color: '#34A853',
    overview: 'AlloyDB for PostgreSQL is a fully managed, PostgreSQL-compatible relational database service designed for enterprise database workloads. It offers 4x faster transactional processing (TP) and up to 100x faster analytical queries (AP) compared to standard PostgreSQL, backed by a disaggregated storage architecture, Google’s columnar engine, and integrated AlloyDB AI for vector search.',
    problemSolved: 'Scaling standard PostgreSQL for demanding enterprise workloads requires complex hardware tuning, read replica bottlenecks, and separate data warehouses for analytical queries. AlloyDB unifies high-speed transactional processing with real-time columnar analytics in a single 100% PostgreSQL-compatible engine.',
    skillLevel: 'Advanced',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Priced per vCPU and memory allocated to database instances + storage consumed ($0.08/GB/month).',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://cloud.google.com/alloydb',
    bestFor: ['High-throughput transactional enterprise applications', 'Hybrid transactional and analytical processing (HTAP)', 'Enterprise migrations off legacy proprietary databases (Oracle, SQL Server)', 'High-speed generative AI vector search and embeddings'],
    capabilities: [
      '100% PostgreSQL compatibility with full extension support',
      '4x faster transactional performance than standard PostgreSQL',
      'Up to 100x faster analytical queries with the Google Columnar Engine in RAM',
      'AlloyDB AI: up to 10x faster vector queries than standard pgvector for GenAI applications',
      'Disaggregated compute and storage architecture with automatic storage scaling up to 64TB'
    ],
    whatYouCanBuild: [
      { title: 'Real-Time Hybrid Financial Trading Platform', description: 'Process high-volume financial trades while simultaneously running real-time analytics reports without slowing down transactions.' },
      { title: 'Enterprise GenAI Knowledge Base', description: 'Store millions of 1536-dimension document embeddings and execute sub-second nearest-neighbor vector search queries.' }
    ],
    personas: [
      { name: 'Matteo', role: 'Principal Database Architect', avatar: '🏢', reason: 'Migrated our legacy Oracle databases to AlloyDB, gaining 4x speed and slashing licensing costs.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create AlloyDB Cluster', description: 'Create a cluster and primary instance in the Google Cloud Console.', actionSnippet: 'gcloud alloydb clusters create my-cluster \\\n    --region=us-central1 \\\n    --password=my-secure-password' },
      { step: 2, title: 'Create Primary Instance', description: 'Provision compute instances within the cluster.', actionSnippet: 'gcloud alloydb instances create my-instance \\\n    --cluster=my-cluster \\\n    --region=us-central1 \\\n    --cpu-count=4' },
      { step: 3, title: 'Connect via psql', description: 'Connect using standard PostgreSQL tools with zero code changes required.' },
      { step: 4, title: 'Enable AlloyDB AI & Vector Search', description: 'Install the pgvector extension and leverage the columnar engine for vector queries.' }
    ],
    howItWorks: {
      title: 'Disaggregated Compute & Google Columnar Engine Architecture',
      summary: 'Decouples compute from storage, utilizing a custom multi-node storage engine and in-memory columnar acceleration.',
      steps: [
        { id: 'al1', label: 'PostgreSQL Compatibility Layer', sublabel: '100% Drop-In Compatible', description: 'Speaks native PostgreSQL wire protocol; all tools, drivers, and ORMs connect seamlessly.' },
        { id: 'al2', label: 'Google Columnar Engine', sublabel: 'In-Memory Columnar Cache', description: 'Automatically identifies and converts analytical query tables into vectorized columnar formats in RAM.' },
        { id: 'al3', label: 'Disaggregated Storage Fleet', sublabel: 'Multi-Node Sharded Storage', description: 'Storage is handled by a distributed system offloading write-ahead logging (WAL) processing from compute instances.' },
        { id: 'al4', label: 'AlloyDB AI Vector Acceleration', sublabel: 'Approximate Nearest Neighbor', description: 'Accelerates vector search (ScaNN algorithms) directly inside SQL queries with sub-5ms latency.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['cloud-sql', 'cloud-spanner', 'bigquery', 'google-cloud'],
    resources: {
      website: 'https://cloud.google.com/alloydb',
      docs: 'https://cloud.google.com/alloydb/docs'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Set up an AlloyDB cluster that powers real-time business reporting alongside an AI vector search assistant.'
  },

  {
    id: 'cloud-filestore',
    name: 'Cloud Filestore',
    tagline: 'High-performance, fully managed NFS file storage service for Compute Engine and Google Kubernetes Engine workloads.',
    category: 'Cloud & Developer Platforms',
    iconName: 'HardDrive',
    color: '#34A853',
    overview: 'Cloud Filestore is a fully managed Network Attached Storage (NAS) service for Google Cloud users who require a filesystem interface and a shared filesystem for data. Supporting NFSv3, Filestore delivers low-latency file storage for Compute Engine VMs and Google Kubernetes Engine (GKE) clusters.',
    problemSolved: 'Legacy applications, content management systems (CMS), and media rendering pipelines expect standard POSIX filesystem semantics (read/write/mount) rather than object storage APIs. Filestore provides a shared, mountable NFS file system that scales up to 100TB with multi-gigabyte/sec throughput.',
    skillLevel: 'Intermediate',
    pricingType: 'Pay-as-you-go',
    pricingDetails: 'Priced per GB of allocated capacity per month (starting at ~$0.16/GB/month for Basic HDD, $0.20 for Basic SSD).',
    status: 'Active',
    lastVerified: '2025-06-15',
    verifiedSource: 'https://cloud.google.com/filestore',
    bestFor: ['Shared storage for WordPress, Drupal, and web CMS', 'Media rendering, video transcoding, and broadcast editing', 'Persistent Volumes for Google Kubernetes Engine (GKE) pods', 'Electronic Design Automation (EDA) and genomic pipelines'],
    capabilities: [
      'Fully managed POSIX-compliant NFSv3 shared file storage',
      'High performance: up to 26 GB/sec throughput and 450,000 IOPS on High Scale tiers',
      'Seamless multi-reader, multi-writer access across thousands of VMs and GKE pods',
      'Dynamic capacity expansion up to 100TB without downtime',
      'Built-in non-disruptive snapshotting and automated backups'
    ],
    whatYouCanBuild: [
      { title: 'High-Availability WordPress Media Storage', description: 'Mount a shared Filestore volume across 10 auto-scaled Compute Engine VMs serving a high-traffic news website.' },
      { title: 'Kubernetes Shared Workspace', description: 'Provide a shared PersistentVolumeClaim (ReadWriteMany) across a cluster of GKE data processing containers.' }
    ],
    personas: [
      { name: 'Nico', role: 'Media Systems Administrator', avatar: '🎬', reason: 'Mounts high-performance shared NFS storage across 30 video transcoding VMs with zero storage lag.' }
    ],
    gettingStarted: [
      { step: 1, title: 'Create Filestore Instance', description: 'Create an NFS instance via gcloud CLI.', actionSnippet: 'gcloud filestore instances create my-nas \\\n    --zone=us-central1-b \\\n    --tier=BASIC_HDD \\\n    --file-share=name="share1",capacity=1TB \\\n    --network=name="default"' },
      { step: 2, title: 'Get NFS Mount IP', description: 'Inspect the instance details to find the assigned private IP address.' },
      { step: 3, title: 'Mount on Linux VM', description: 'Install nfs-common and mount the share onto your filesystem.', actionSnippet: 'sudo apt-get install nfs-common\nsudo mkdir /mnt/shared\nsudo mount 10.0.0.5:/share1 /mnt/shared' }
    ],
    howItWorks: {
      title: 'POSIX NFSv3 Shared Storage & GKE CSI Driver',
      summary: 'Provisions dedicated SSD/HDD storage arrays connected over low-latency VPC networking to VM and GKE clients.',
      steps: [
        { id: 'cfs1', label: 'VPC Storage Provisioning', sublabel: 'Dedicated NAS Array', description: 'Allocates storage arrays within your Google Cloud VPC with a dedicated private IP.' },
        { id: 'cfs2', label: 'NFSv3 Mount Negotiation', sublabel: 'POSIX Semantics', description: 'Client VMs and GKE nodes mount the file share using standard POSIX NFSv3 protocols.' },
        { id: 'cfs3', label: 'Concurrent Multi-Client Read/Write', sublabel: 'ReadWriteMany (RWX)', description: 'Hundreds of clients read and write simultaneously to shared directory structures.' },
        { id: 'cfs4', label: 'Non-Disruptive Snapshotting', sublabel: 'Point-In-Time Backup', description: 'Captures consistent point-in-time snapshots of the file share without interrupting active operations.' }
      ]
    },
    demoType: 'none',
    relatedToolIds: ['cloud-storage', 'compute-engine', 'kubernetes-engine', 'google-cloud'],
    resources: {
      website: 'https://cloud.google.com/filestore',
      docs: 'https://cloud.google.com/filestore/docs'
    },
    isBeginnerFriendly: false,
    featuredProjectIdea: 'Configure a GKE deployment with a ReadWriteMany PersistentVolumeClaim backed by Cloud Filestore for shared uploads.'
  }
];
