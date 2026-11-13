import {
  siCss,
  siGit,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import { figmaIcon, fromSimpleIcon, restApiIcon, sqlIcon, vscodeIcon } from "@/data/icons";
import type { Skill } from "@/types";

// Technical proficiencies, shown as icons. Most come from `simple-icons`
// (wrap with fromSimpleIcon); custom ones live in src/data/icons.ts.
export const skills: Skill[] = [
  { name: "HTML", icon: fromSimpleIcon(siHtml5) },
  { name: "CSS", icon: fromSimpleIcon(siCss) },
  { name: "JavaScript", icon: fromSimpleIcon(siJavascript) },
  { name: "React", icon: fromSimpleIcon(siReact) },
  { name: "Next.js", icon: fromSimpleIcon(siNextdotjs) },
  { name: "TypeScript", icon: fromSimpleIcon(siTypescript) },
  { name: "Tailwind CSS", icon: fromSimpleIcon(siTailwindcss) },
  { name: "Node.js", icon: fromSimpleIcon(siNodedotjs) },
  { name: "SQL", icon: sqlIcon },
  { name: "REST APIs", icon: restApiIcon },
  { name: "Git", icon: fromSimpleIcon(siGit) },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Figma", icon: figmaIcon },
];
