import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "prime-depot-payroll",
    title: "Prime Depot: Payroll Management System with Biometrics Attendance Monitoring",
    summary:
      "A web-based payroll system for a hardware and construction supply company in Mabini, Batangas.",
    description:
      "It automates attendance from biometrics, piece-rate pay for delivery crews, government deductions, loans, and payslips.",
    // Names match src/data/skills.ts (skills or projectOnlyTech) so they show that icon.
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Neon", "Prisma ORM"],
    liveUrl: "https://prime-depot-payroll-system.vercel.app/",
    awards: [
      "Best Technical System",
      "Most Innovative System",
    ],
    featured: true,
    image: {
      src: "/projects/prime-depot.jpg",
      alt: "Prime Depot sign-in screen: the login form beside a red panel with a construction worker illustration",
    },
  },
  {
    slug: "pal",
    title: "PAL: Personal Anime List",
    summary: "A personal anime watchlist with a game-menu interface.",
    description:
      "Search and browse anime from the AniList API, add titles to your list, track episodes and scores, and see your viewing stats. The list is saved in the browser and can be backed up as a file.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://personal-anime-list-kappa.vercel.app",
    repoUrl: "https://github.com/jvnckz-wq/personal-anime-list",
    image: {
      src: "/projects/pal.jpg",
      alt: "PAL title screen: a red game-style menu with Continue, New game, Load game and Player data",
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
    image: {
      src: "/projects/portfolio.jpg",
      alt: "This portfolio's intro in dark mode: my name, tagline and buttons beside my round profile photo",
    },
  },
];
