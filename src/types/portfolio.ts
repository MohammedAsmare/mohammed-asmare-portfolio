export type SkillCategory = 
  | 'Programming' 
  | 'Frontend' 
  | 'Backend' 
  | 'Database' 
  | 'QA & Testing' 
  | 'DevOps' 
  | 'Enterprise Integration' 
  | 'Monitoring';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  proficiency?: number; // percentage 1-100
  iconName?: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  tagline?: string;
  highlights: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problemSolved: string;
  technologies: string[];
  keyResponsibilities: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
  architectureType: 'Microservice' | 'Modernization' | 'CI/CD' | 'QA Framework';
  impactMetrics: { label: string; value: string }[];
}

export interface SdlcStep {
  step: number;
  title: string;
  description: string;
  tools: string[];
  qaIntegration: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period?: string;
  details?: string;
}

export interface QaPillar {
  title: string;
  description: string;
  icon: string;
  details: string[];
}
