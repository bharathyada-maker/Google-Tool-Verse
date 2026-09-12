export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export type PricingType = 'Free' | 'Freemium / Free Tier' | 'Pay-as-you-go' | 'Paid / Enterprise';

export type ToolStatus = 'Active' | 'Preview / Experimental' | 'Deprecated / Discontinued';

export interface PersonaTarget {
  name: string;
  role: string;
  avatar: string;
  reason: string;
}

export interface GettingStartedStep {
  step: number;
  title: string;
  description: string;
  actionSnippet?: string;
}

export interface FlowStep {
  id: string;
  label: string;
  sublabel: string;
  description: string;
  technicalDetails?: string;
  icon?: string;
}

export interface HowItWorksFlow {
  title: string;
  summary: string;
  steps: FlowStep[];
}

export interface OfficialResources {
  website: string;
  docs: string;
  tutorials?: string;
  apiReference?: string;
  github?: string;
  community?: string;
}

export type DemoType = 'gemini-sandbox' | 'bigquery-sql' | 'firebase-arch' | 'cloud-deploy' | 'none';

export interface GoogleTool {
  id: string;
  name: string;
  tagline: string;
  category: string;
  iconName: string;
  color: string; // e.g. '#4285F4'
  overview: string;
  problemSolved: string;
  skillLevel: SkillLevel;
  pricingType: PricingType;
  pricingDetails: string;
  status: ToolStatus;
  lastVerified: string;
  verifiedSource: string;
  
  bestFor: string[];
  capabilities: string[];
  whatYouCanBuild: {
    title: string;
    description: string;
    icon?: string;
  }[];
  
  personas: PersonaTarget[];
  gettingStarted: GettingStartedStep[];
  howItWorks: HowItWorksFlow;
  
  demoType: DemoType;
  relatedToolIds: string[];
  
  resources: OfficialResources;
  
  isTrending?: boolean;
  isBeginnerFriendly?: boolean;
  isNewOrUpdated?: boolean;
  featuredProjectIdea?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  color: string;
  bgGradient: string;
  featuredTools: string[];
}

export interface LearningPathStep {
  stepNumber: number;
  toolId: string;
  title: string;
  description: string;
  durationMinutes: number;
  miniProjectTitle: string;
  miniProjectTask: string;
}

export interface LearningPath {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  estimatedHours: number;
  skillLevel: SkillLevel;
  iconName: string;
  badgeName: string;
  badgeIcon: string;
  description: string;
  prerequisites: string[];
  steps: LearningPathStep[];
}

export interface ConstellationNode {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

export interface ConstellationEdge {
  source: string;
  target: string;
  label?: string;
}

export interface WizardAnswers {
  goal: string;
  experience: SkillLevel;
  platform: string;
  priority: string;
}

export interface RecommendationResult {
  tool: GoogleTool;
  matchScore: number;
  reasons: string[];
  alternatives: GoogleTool[];
  suggestedLearningPath?: LearningPath;
}

export interface DiscrepancyReport {
  id: string;
  toolId: string;
  toolName: string;
  field: string;
  issueDescription: string;
  sourceUrl?: string;
  submittedAt: string;
  status: 'Pending' | 'Verified' | 'Dismissed';
}
