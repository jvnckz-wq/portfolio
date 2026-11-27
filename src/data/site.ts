import type { NavLink, SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "John Vincent Amar",
  shortName: "Vincent",
  title: "John Vincent | Portfolio",
  // Intro tagline: the lead stays put and the last words rotate through this list.
  taglineLead: "Aspiring frontend developer learning to build",
  taglineWords: ["web interfaces", "responsive layouts", "accessible pages", "websites"],
  // New file name when the photo changes: Next's image cache keys on the URL.
  photo: { src: "/profile-photo.png", alt: "Portrait of John Vincent Amar" },
  // Revealed through a spotlight when hovering the photo, and shown in full when it is clicked.
  hoverPhoto: { src: "/hover.jpg", alt: "My favourite anime character" },
  bio: "A fourth-year Information Technology student at STI College Batangas, focused on frontend development. I build responsive web interfaces with HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. As the frontend developer of our capstone project, Prime Depot, I developed role-based screens for a payroll and attendance system. I am currently strengthening my frontend fundamentals and will keep adding projects I build independently to this portfolio.",
  description: "Personal portfolio showcasing projects, skills, experience, accomplishments and certifications.",
  email: "amarjohnvincent77@gmail.com",
  documents: [
    { label: "Resume", href: "/resume.pdf" },
  ],
  // Social links (with icons) are in src/data/socials.ts.
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
