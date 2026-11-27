import {
  siCss,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siNeon,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";
import { figmaIcon, fromSimpleIcon, vscodeIcon } from "@/data/icons";
import type { Skill } from "@/types";

// Frontend tools I'm learning and using (frontend only), shown as icons under "Tools I'm Learning".
// Most come from `simple-icons` (wrap with fromSimpleIcon); custom ones live in src/data/icons.ts.
export const skills: Skill[] = [
  { name: "HTML", icon: fromSimpleIcon(siHtml5) },
  { name: "CSS", icon: fromSimpleIcon(siCss) },
  { name: "JavaScript", icon: fromSimpleIcon(siJavascript) },
  { name: "React", icon: fromSimpleIcon(siReact) },
  { name: "Next.js", icon: fromSimpleIcon(siNextdotjs) },
  { name: "Tailwind CSS", icon: fromSimpleIcon(siTailwindcss) },
  { name: "Git", icon: fromSimpleIcon(siGit) },
  { name: "GitHub", icon: fromSimpleIcon(siGithub) },
  { name: "Vercel", icon: fromSimpleIcon(siVercel) },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Figma", icon: figmaIcon },
];

// Tech that projects used but that I don't list as my own skills; kept only so project cards show icons.
const projectOnlyTech: Skill[] = [
  { name: "TypeScript", icon: fromSimpleIcon(siTypescript) },
  { name: "Node.js", icon: fromSimpleIcon(siNodedotjs) },
  { name: "PostgreSQL", icon: fromSimpleIcon(siPostgresql) },
  { name: "Neon", icon: fromSimpleIcon(siNeon) },
  { name: "Prisma ORM", icon: fromSimpleIcon(siPrisma) },
];

/**
 * Icon for a tech name used in a project, looked up in the lists above.
 * A note in brackets is ignored for the lookup, so "PostgreSQL (Neon)" uses the PostgreSQL icon.
 */
export function techIcon(name: string) {
  const base = name.replace(/\s*\(.*\)$/, "");
  return [...skills, ...projectOnlyTech].find((s) => s.name === base)?.icon;
}
