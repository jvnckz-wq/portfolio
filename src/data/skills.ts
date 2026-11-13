import {
  siGit,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import { figmaIcon, fromSimpleIcon, restApiIcon, vscodeIcon } from "@/data/icons";
import type { Skill } from "@/types";

// Technical proficiencies, shown as icons. Most come from `simple-icons`
// (wrap with fromSimpleIcon); custom ones live in src/data/icons.ts.
export const skills: Skill[] = [
  { name: "React", icon: fromSimpleIcon(siReact) },
  { name: "Next.js", icon: fromSimpleIcon(siNextdotjs) },
  { name: "TypeScript", icon: fromSimpleIcon(siTypescript) },
  { name: "Tailwind CSS", icon: fromSimpleIcon(siTailwindcss) },
  { name: "Node.js", icon: fromSimpleIcon(siNodedotjs) },
  { name: "REST APIs", icon: restApiIcon },
  { name: "Git", icon: fromSimpleIcon(siGit) },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Figma", icon: figmaIcon },
];
