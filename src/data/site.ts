import type { NavLink, SiteConfig } from "@/types";

// TODO: replace placeholder values with your own details.
export const site: SiteConfig = {
  name: "Your Name",
  title: "Your Name | Portfolio",
  tagline: "Designer and developer building thoughtful, accessible web experiences.",
  bio: "Write a short bio here: who you are, what you design and build, and what you care about.",
  // TODO: put your photo in public/ (e.g. public/profile.jpg) and uncomment:
  // photo: { src: "/profile.jpg", alt: "Portrait of Your Name" },
  description: "Personal portfolio showcasing projects, skills, experience and certifications.",
  // TODO: placeholders. Replace with your own public email and profile URLs.
  email: "your.email@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com" },
  ],
};

// Sticky header links: each jumps to a section on the one page.
export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
