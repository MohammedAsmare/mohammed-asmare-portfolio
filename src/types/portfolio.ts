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
  proficiency?: number;
  iconName?: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
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
  architectureType: 'Microservice' | 'Modernization' | 'CI/CD' | 'QA Framework' | 'Fintech Mobile App';
  impactMetrics: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period?: string;
  gpa?: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period?: string;
  category?: 'DevOps' | 'AI' | 'Docker' | 'Git' | 'Management';
}

export interface QaPillar {
  title: string;
  description: string;
  icon: string;
  details: string[];
}
