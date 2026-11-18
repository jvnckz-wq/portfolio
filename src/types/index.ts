export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Optional project image shown at the top of its card. Alt text is required. */
  image?: { src: string; alt: string };
  /** Awards shown as medal icons; the name appears on hover/focus. */
  awards?: string[];
  /** Shown large, with its screenshot in a browser frame. */
  featured?: boolean;
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

export type Accomplishment = {
  event: string;
  /** Label the entry is listed under, e.g. "Local Level Competitor". */
  group: string;
  year: string;
  /** Shown as a highlighted card with a medal instead of a list row. */
  award?: boolean;
};

export type Certification = {
  name: string;
  year: string;
  /** Makes the name a link (opens in a new tab). */
  url?: string;
  /** Badge image from public/, shown before the name. */
  badge?: { src: string; alt: string };
};

export type SiteConfig = {
  name: string;
  /** Short name used in the footer. */
  shortName: string;
  title: string;
  /** Fixed start of the intro tagline. */
  taglineLead: string;
  /** Words that rotate at the end of the tagline (the first one is shown without JavaScript). */
  taglineWords: string[];
  /** Image revealed when hovering the profile photo, and shown in full when it is clicked (flipped). */
  hoverPhoto?: { src: string; alt: string };
  bio: string;
  /** Profile photo shown beside the name. Without it, initials are shown. */
  photo?: { src: string; alt: string };
  description: string;
  email: string;
  /** PDFs in public/ linked from the Contact section (open in a new tab). */
  documents: { label: string; href: string }[];
};

export type Social = {
  label: string;
  href: string;
  icon: SkillIcon;
};

export type NavLink = {
  label: string;
  href: string;
};
