export interface NavLink {
  label: string;
  href: string;
}

export interface HighlightStat {
  value: string;
  label: string;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  location?: string;
  dates: string;
  current?: boolean;
  summary?: string;
  responsibilities: string[];
}

export interface AdditionalExperienceItem {
  title: string;
  organization: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  status?: string;
  score?: string;
  focus?: string;
  highlight?: string;
}

export interface Publication {
  citation: string;
  year: string;
  journal: string;
  description?: string;
  doi?: string;
}

export interface ConferenceItem {
  year: string;
  title: string;
  event: string;
  venue: string;
  dates: string;
}

export interface ProficiencyItem {
  name: string;
  level: "Advanced" | "Proficient";
}

export interface LanguageItem {
  name: string;
  level: "Excellent" | "Reading/Writing";
}

export interface CertificationItem {
  name: string;
  issuer: string;
  grade: string;
}

export interface AchievementItem {
  title: string;
  description?: string;
  prominent?: boolean;
}

export interface WorkshopCategory {
  category: string;
  items: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
