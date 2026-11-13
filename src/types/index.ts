export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Optional project image shown on its route stop. Alt text is required. */
  image?: { src: string; alt: string };
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  description: string;
  email: string;
  socials: { label: string; href: string }[];
};

export type NavLink = {
  label: string;
  href: string;
};
