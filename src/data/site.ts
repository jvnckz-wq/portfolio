import type { NavLink, SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "John Vincent Amar",
  shortName: "Vincent",
  title: "John Vincent | Portfolio",
  tagline: "Designer and developer building thoughtful, accessible web experiences.",
  bio: "A fourth-year IT student at STI College Batangas who designs and builds web interfaces with Next.js, React, and Tailwind CSS. I focus on UI/UX and frontend development, turning ideas into responsive, role-based screens that work on both phones and laptops. I care about interfaces that are clear and easy to use for the people who rely on them every day.",
  description: "Personal portfolio showcasing projects, skills, experience, accomplishments and certifications.",
  email: "amarjohnvincent77@gmail.com",
  // Social links (with icons) are in src/data/socials.ts.
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
