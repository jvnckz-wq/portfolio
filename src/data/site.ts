import type { NavLink, SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "John Vincent Amar",
  title: "John Vincent | Portfolio",
  tagline: "Designer and developer building thoughtful, accessible web experiences.",
  bio: "Write a short bio here: who you are, what you design and build, and what you care about.",
  description: "Personal portfolio showcasing projects, skills, experience and certifications.",
  email: "amarjohnvincent77@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/jvnckz-wq" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/john-vincent-57842044b/" },
    { label: "Instagram", href: "https://www.instagram.com/jvnckz_/" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
