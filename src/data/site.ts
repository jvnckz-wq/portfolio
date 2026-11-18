import type { NavLink, SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "John Vincent Amar",
  shortName: "Vincent",
  title: "John Vincent | Portfolio",
  // Intro tagline: the lead stays put and the last words rotate through this list.
  taglineLead: "Designer and developer building thoughtful, accessible",
  taglineWords: ["web experiences", "interfaces", "dashboards", "websites"],
  // New file name when the photo changes: Next's image cache keys on the URL.
  photo: { src: "/profile-photo.png", alt: "Portrait of John Vincent Amar" },
  // Revealed through a spotlight when hovering the photo, and shown in full when it is clicked.
  hoverPhoto: { src: "/hover.jpg", alt: "My favourite anime character" },
  bio: "A fourth-year IT student at STI College Batangas who designs and builds web interfaces with Next.js, React, and Tailwind CSS. I focus on UI/UX and frontend development, turning ideas into responsive, role-based screens that work on both phones and laptops. I care about interfaces that are clear and easy to use for the people who rely on them every day.",
  description: "Personal portfolio showcasing projects, skills, experience, accomplishments and certifications.",
  email: "amarjohnvincent77@gmail.com",
  documents: [
    { label: "Resume", href: "/resume.pdf" },
    { label: "Cover letter", href: "/cover-letter.pdf" },
  ],
  // Social links (with icons) are in src/data/socials.ts.
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
