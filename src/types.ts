export interface Project {
  id: string;
  title: string;
  category: 'Product Ads' | 'Lifestyle' | 'Technology' | 'Brand Films';
  concept: string;
  image: string;
  aspectRatio: string;
  duration: string;
  clientType: string;
  description: string;
  creativeHook: string;
  techHighlights: string[];
  deliverables: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  headline: string;
  description: string;
  outputs: string[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  targetMarket: string;
  details: string;
}
