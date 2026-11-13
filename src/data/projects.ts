import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "prime-depot-payroll",
    title: "Prime Depot: Payroll Management System with Biometrics Attendance Monitoring",
    summary:
      "A web-based payroll system for a hardware and construction supply company in Mabini, Batangas.",
    description:
      "It automates attendance from biometrics, piece-rate pay for delivery crews, government deductions, loans, and payslips.",
    // Names match Technical Proficiencies (src/data/skills.ts) so they show that icon.
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL (Neon)"],
    liveUrl: "https://prime-depot-payroll-system.vercel.app/",
    awards: [
      "Best Technical System",
      "Most Innovative System",
      "2nd Place, Best UI Design",
      "2nd Place, Best User Experience",
    ],
    featured: true,
    image: {
      src: "/projects/prime-depot.jpg",
      alt: "Prime Depot sign-in screen: the login form beside a red panel with a construction worker illustration",
    },
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    summary: "This website: a one-page portfolio of my projects, skills, and accomplishments.",
    description:
      "Content lives in typed data files, so updating it doesn't touch the layout. It has light and dark mode and a sticky nav that highlights the section you're on.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/jvnckz-wq/portfolio",
  },
];
