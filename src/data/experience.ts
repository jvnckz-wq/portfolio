import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Prime Depot Capstone Project, STI College Batangas",
    period: "July 2026 – Present",
    highlights: [
      "Built role-based interfaces for two user types: a full-access admin dashboard for the Operations Head and a mobile-first delivery logging view for the Checker, plus a responsive sign-in page with a two-factor login flow for the admin account.",
      "Developed the frontend modules in Next.js, React, and Tailwind CSS: attendance monitoring, payroll processing, delivery logging, loans and cash advances, reporting, and payroll archiving.",
      "Used shared UI components (modals, toasts, skeleton loaders, loading-state buttons) to keep the modules consistent, and checked keyboard focus states and reduced-motion support on interactive parts.",
      "Tested each screen with the team and fixed frontend issues found during testing, such as cutting repeated data requests on the Reports page while changing date filters.",
    ],
  },
];
