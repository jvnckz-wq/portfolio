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

export type SkillIcon = {
  viewBox: string;
  /** Outline icon (stroked) instead of a filled one. */
  stroke?: boolean;
  /** Each shape can carry its own brand colour, shown on hover. */
  paths: { d: string; color?: string; evenOdd?: boolean }[];
};

export type Skill = {
  name: string;
  icon?: SkillIcon;
  /** Short text shown in the tile when there is no icon. */
  short?: string;
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
  /** Profile photo shown beside the name. Without it, initials are shown. */
  photo?: { src: string; alt: string };
  description: string;
  email: string;
  socials: { label: string; href: string }[];
};

export type NavLink = {
  label: string;
  href: string;
};
