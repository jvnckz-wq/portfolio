import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "prime-depot-payroll",
    title: "Prime Depot: Payroll Management System with Biometrics Attendance Monitoring",
    summary:
      "A web-based payroll system for a hardware and construction supply company in Mabini, Batangas.",
    description:
      "It automates attendance from biometrics, piece-rate pay for delivery crews, government deductions, loans, and payslips.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL (Neon)", "Vercel"],
    liveUrl: "https://prime-depot-payroll-system.vercel.app/",
    awards: ["Best Technical System", "Most Innovative System"],
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    summary: "This website: a one-page portfolio of my projects, skills, and accomplishments.",
    description:
      "Content lives in typed data files, so updating it doesn't touch the layout. It has light and dark mode and a sticky nav that highlights the section you're on.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    repoUrl: "https://github.com/jvnckz-wq/portfolio",
  },
];
