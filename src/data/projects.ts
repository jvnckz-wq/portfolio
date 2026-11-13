import type { Project } from "@/types";

// TODO: replace these sample projects with your own.
export const projects: Project[] = [
  {
    slug: "sample-project-one",
    title: "Sample Project One",
    summary: "A short one-line summary of what this project does.",
    description:
      "A longer description: the problem it solves, your role, the key decisions you made, and the outcome.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/your-handle/sample-project-one",  },
  {
    slug: "sample-project-two",
    title: "Sample Project Two",
    summary: "Another short summary to show off a second project.",
    description:
      "Describe the goals, the tech stack, and what you learned building it.",
    tech: ["React", "Node.js"],
    liveUrl: "https://example.com",
  },
];
