import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    role: "UI/UX Designer and Frontend Developer",
    company: "Prime Depot Capstone Project, STI College Batangas",
    period: "July 2026 – Present",
    highlights: [
      "Designed role-based interfaces for two user types: a full-access admin dashboard for the Operations Head and a mobile-first delivery logging view for the Checker, plus a responsive split-screen sign-in with a two-factor login flow for the admin account.",
      "Built responsive frontend modules in Next.js, React, and Tailwind CSS for attendance monitoring, payroll processing, delivery logging, loans and cash advances, reporting, and payroll archiving.",
      "Created reusable UI components (modals, toasts, skeleton loaders, loading-state buttons) to keep styling consistent across all modules, and added accessibility features across interactive components, including visible keyboard focus states and reduced-motion support.",
      "Optimized the Reports page by debouncing date-range data fetching, reducing redundant API requests during filter changes.",
    ],
  },
];
