import { LearningPath } from '../types';

export const LEARNING_PATHS_DATA: LearningPath[] = [
  {
    id: 'ai-beginner-path',
    title: 'Generative AI Practitioner',
    subtitle: 'From prompt engineering fundamentals to full-stack AI app deployment.',
    category: 'Artificial Intelligence & Machine Learning',
    estimatedHours: 6,
    skillLevel: 'Beginner',
    iconName: 'Sparkles',
    badgeName: 'Gemini AI Pioneer',
    badgeIcon: 'Award',
    description: 'Master modern generative AI using Google’s state-of-the-art multimodal ecosystem. Learn how to prompt Gemini, tune system instructions in AI Studio, integrate the Gemini API into your code, and deploy an AI app with Firebase.',
    prerequisites: ['Basic web browsing', 'Curiosity about artificial intelligence', 'Basic JavaScript or Python knowledge helpful for step 5'],
    steps: [
      {
        stepNumber: 1,
        toolId: 'gemini',
        title: 'Understand Multimodal AI with Gemini',
        description: 'Learn how native multimodal LLMs reason across text, images, video, and audio simultaneously. Experiment with zero-shot and few-shot prompting.',
        durationMinutes: 45,
        miniProjectTitle: 'Video Document Synthesis',
        miniProjectTask: 'Upload a 10-minute video or PDF to Gemini and prompt it to generate an executive briefing with key action items.'
      },
      {
        stepNumber: 2,
        toolId: 'google-ai-studio',
        title: 'Prototype & Tune in Google AI Studio',
        description: 'Use the web-based IDE to set temperature, write system prompts, configure structured JSON schemas, and test corner-case inputs.',
        durationMinutes: 60,
        miniProjectTitle: 'Structured JSON Parser',
        miniProjectTask: 'Create a system prompt in AI Studio that extracts product warranty dates and claim details into a strict JSON schema.'
      },
      {
        stepNumber: 3,
        toolId: 'notebooklm',
        title: 'Source-Grounded Research with NotebookLM',
        description: 'Synthesize research papers and create conversational Audio Overviews grounded exclusively in your uploaded source materials.',
        durationMinutes: 45,
        miniProjectTitle: 'AI Research Study Guide',
        miniProjectTask: 'Upload 3 articles on a topic of interest and generate a 2-host audio podcast summary and study guide.'
      },
      {
        stepNumber: 4,
        toolId: 'gemini-api',
        title: 'Integrate the Gemini API in Code',
        description: 'Obtain an API key and write your first client code in Python or TypeScript with streaming responses and function calling.',
        durationMinutes: 75,
        miniProjectTitle: 'CLI Chat Assistant with Memory',
        miniProjectTask: 'Write a Node.js or Python CLI script that maintains chat history and streams responses from Gemini 1.5 Flash.'
      },
      {
        stepNumber: 5,
        toolId: 'firebase',
        title: 'Deploy Full-Stack AI App with Firebase',
        description: 'Host your web frontend on Firebase Hosting and protect your Gemini API keys using serverless Cloud Functions.',
        durationMinutes: 90,
        miniProjectTitle: 'Live AI Web App MVP',
        miniProjectTask: 'Deploy an interactive AI translation web app to a live Firebase .web.app domain with Google Auth.'
      }
    ]
  },

  {
    id: 'app-developer-path',
    title: 'Cross-Platform App Developer',
    subtitle: 'Craft native mobile, desktop, and web applications from a single codebase.',
    category: 'Software Development & Frameworks',
    estimatedHours: 10,
    skillLevel: 'Intermediate',
    iconName: 'Smartphone',
    badgeName: 'Flutter Master Builder',
    badgeIcon: 'Smartphone',
    description: 'Learn modern app engineering from scratch. Master Dart programming, build responsive UIs with Flutter, configure real-time Firebase backends, and prepare for store distribution.',
    prerequisites: ['Basic programming concepts (variables, loops, functions)', 'Computer with Android Studio or VS Code installed'],
    steps: [
      {
        stepNumber: 1,
        toolId: 'dart',
        title: 'Master Dart & Sound Null Safety',
        description: 'Learn Dart’s modern syntax, object-oriented principles, asynchronous futures/streams, and sound null safety guarantees.',
        durationMinutes: 60,
        miniProjectTitle: 'Async Weather CLI Utility',
        miniProjectTask: 'Write a Dart command-line application that fetches JSON weather data from a public REST API and parses it with type safety.'
      },
      {
        stepNumber: 2,
        toolId: 'flutter',
        title: 'Declarative UI with Flutter Widgets',
        description: 'Understand the widget tree, stateful vs stateless widgets, Material 3 design, and sub-second Stateful Hot Reload.',
        durationMinutes: 120,
        miniProjectTitle: 'Responsive Habit Tracker UI',
        miniProjectTask: 'Build a 3-screen mobile UI with navigation, custom animated progress bars, and dark mode toggles.'
      },
      {
        stepNumber: 3,
        toolId: 'android-studio',
        title: 'Android Studio Tooling & Emulation',
        description: 'Configure high-performance Android Virtual Devices (AVD), run memory profilers, and debug device-specific hardware features.',
        durationMinutes: 60,
        miniProjectTitle: 'Hardware Emulator Diagnostics',
        miniProjectTask: 'Run your Flutter app on an emulated Pixel 8 Pro and use the CPU/Memory profiler to identify memory allocations.'
      },
      {
        stepNumber: 4,
        toolId: 'firebase',
        title: 'Connect Cloud Firestore & Auth',
        description: 'Integrate the FlutterFire SDK to provide Google Sign-In, real-time database queries, and cloud file storage.',
        durationMinutes: 90,
        miniProjectTitle: 'Real-time Multiplayer Todo App',
        miniProjectTask: 'Connect your Flutter app to Cloud Firestore so tasks sync in real time across two running emulator instances.'
      }
    ]
  },

  {
    id: 'data-analyst-path',
    title: 'Modern Cloud Data Analyst',
    subtitle: 'From spreadsheet modeling to petabyte-scale BigQuery data warehousing and Looker dashboards.',
    category: 'Data & Analytics',
    estimatedHours: 8,
    skillLevel: 'Beginner',
    iconName: 'BarChart3',
    badgeName: 'Data Insights Architect',
    badgeIcon: 'TrendingUp',
    description: 'Transition from basic spreadsheets to enterprise cloud analytics. Master collaborative Google Sheets, write lightning-fast SQL in BigQuery, and build executive dashboards in Looker Studio.',
    prerequisites: ['Basic spreadsheet familiarity', 'No prior SQL experience required'],
    steps: [
      {
        stepNumber: 1,
        toolId: 'google-sheets',
        title: 'Collaborative Data Cleanup & Modeling',
        description: 'Master advanced spreadsheet functions (XLOOKUP, FILTER, UNIQUE), pivot tables, smart chips, and Connected Sheets.',
        durationMinutes: 60,
        miniProjectTitle: 'Sales Commission Model',
        miniProjectTask: 'Build a multi-tab spreadsheet that calculates tiered sales commissions and highlights top performers with conditional rules.'
      },
      {
        stepNumber: 2,
        toolId: 'bigquery',
        title: 'Serverless SQL at Petabyte Scale',
        description: 'Learn SQL fundamentals (SELECT, GROUP BY, WINDOW functions, JOINs) on massive public datasets with zero server management.',
        durationMinutes: 120,
        miniProjectTitle: 'Global Aviation On-Time Analysis',
        miniProjectTask: 'Query 50 million flight departure records in `bigquery-public-data` to determine which airline had the lowest delay percentage.'
      },
      {
        stepNumber: 3,
        toolId: 'looker-studio',
        title: 'Executive BI Dashboard Creation',
        description: 'Connect Looker Studio to BigQuery and Google Sheets. Add time-series charts, geo maps, scorecards, and interactive date pickers.',
        durationMinutes: 75,
        miniProjectTitle: 'Live Executive KPI Dashboard',
        miniProjectTask: 'Build a shareable 2-page dashboard with dynamic customer segment filters and automated scheduled email reports.'
      },
      {
        stepNumber: 4,
        toolId: 'google-analytics',
        title: 'Event-Driven Customer Journey Tracking',
        description: 'Analyze GA4 funnel exploration reports and configure automatic raw event streaming into BigQuery.',
        durationMinutes: 60,
        miniProjectTitle: 'E-Commerce Conversion Audit',
        miniProjectTask: 'Analyze user checkout funnel drop-offs and export the raw session events to BigQuery for SQL cohort analysis.'
      }
    ]
  },

  {
    id: 'cloud-developer-path',
    title: 'Serverless Cloud Architect',
    subtitle: 'Build, containerize, and deploy resilient global services on Google Cloud.',
    category: 'Cloud & Developer Platforms',
    estimatedHours: 8,
    skillLevel: 'Intermediate',
    iconName: 'Cloud',
    badgeName: 'Google Cloud Specialist',
    badgeIcon: 'Cloud',
    description: 'Learn the principles of modern cloud infrastructure. Work directly in Cloud Shell, store files in Cloud Storage, deploy containerized APIs on Cloud Run, and orchestrate with Pub/Sub.',
    prerequisites: ['Basic command line literacy', 'Familiarity with web servers (Node.js, Python, or Go)'],
    steps: [
      {
        stepNumber: 1,
        toolId: 'google-cloud-shell',
        title: 'Zero-Install Cloud Shell Terminal',
        description: 'Navigate the GCP console and manage resources using the gcloud CLI from your pre-configured browser terminal.',
        durationMinutes: 45,
        miniProjectTitle: 'CLI Cloud Resource Inventory',
        miniProjectTask: 'Use `gcloud` commands in Cloud Shell to query active project regions, IAM service accounts, and enabled APIs.'
      },
      {
        stepNumber: 2,
        toolId: 'cloud-storage',
        title: 'High-Durability Object Storage & CDN',
        description: 'Create multi-region buckets, configure lifecycle policies, and generate secure temporary signed URLs for client uploads.',
        durationMinutes: 60,
        miniProjectTitle: 'Secure File Ingest Gateway',
        miniProjectTask: 'Create an automated lifecycle bucket that archives raw images to Coldline after 30 days and issues 10-minute signed URLs.'
      },
      {
        stepNumber: 3,
        toolId: 'cloud-run',
        title: 'Serverless Container Deployment',
        description: 'Package an HTTP microservice into a standard Docker container and deploy with automatic scale-to-zero autoscaling.',
        durationMinutes: 90,
        miniProjectTitle: 'Scalable REST API Microservice',
        miniProjectTask: 'Deploy a Node.js or Python FastAPI container to Cloud Run with custom concurrency limits and healthcheck probes.'
      },
      {
        stepNumber: 4,
        toolId: 'pub-sub',
        title: 'Event-Driven Asynchronous Messaging',
        description: 'Decouple services using topics and subscriptions, with automatic direct-write integration into BigQuery and Cloud Storage.',
        durationMinutes: 75,
        miniProjectTitle: 'Asynchronous Event Pipeline',
        miniProjectTask: 'Publish order event messages from a Cloud Run service to a Pub/Sub topic that automatically writes records to BigQuery.'
      }
    ]
  }
];
