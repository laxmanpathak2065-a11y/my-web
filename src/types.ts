export type ProjectCategory = 'all' | 'full-stack' | 'cloud-infra' | 'systems-data' | 'creative-tools';

export interface CaseStudy {
  challenge: string;
  architecture: string;
  solutionHighlights: string[];
  impactMetrics: { label: string; value: string; detail: string }[];
  technicalLearnings: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'full-stack' | 'cloud-infra' | 'systems-data' | 'creative-tools';
  categoryLabel: string;
  year: string;
  tagline: string;
  summary: string;
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: CaseStudy;
  keyMetric: { value: string; label: string };
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  impacts: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend & Architecture' | 'Backend & Cloud Systems' | 'Databases & Storage' | 'DevOps & Observability';
  years: number;
  highlight: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  context: string;
}
