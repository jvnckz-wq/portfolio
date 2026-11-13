import type { SimpleIcon } from "simple-icons";
import type { SkillIcon } from "@/types";

/** Wraps a single-colour icon from the simple-icons package. */
export function fromSimpleIcon(icon: SimpleIcon): SkillIcon {
  return { viewBox: "0 0 24 24", paths: [{ d: icon.path, color: `#${icon.hex}` }] };
}

/** Figma's logo is five colours, so each shape keeps its own brand colour on hover. */
export const figmaIcon: SkillIcon = {
  viewBox: "0 0 38 57",
  paths: [
    { d: "M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z", color: "#1ABCFE" },
    { d: "M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z", color: "#0ACF83" },
    { d: "M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z", color: "#FF7262" },
    { d: "M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z", color: "#F24E1E" },
    { d: "M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z", color: "#A259FF" },
  ],
};

/** VS Code logo (not in simple-icons); path from Devicon v2.16.0 (MIT), "vscode-plain". */
export const vscodeIcon: SkillIcon = {
  viewBox: "0 0 128 128",
  paths: [
    {
      d: "M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z",
      color: "#007ACC",
      evenOdd: true,
    },
  ],
};

/** LinkedIn logo (removed from simple-icons at LinkedIn's request); path from simple-icons v7 (CC0). */
export const linkedinIcon: SkillIcon = {
  viewBox: "0 0 24 24",
  paths: [
    {
      d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      color: "#0A66C2",
    },
  ],
};

/** Award medal (Lucide "medal", ISC); turns gold on hover. */
export const medalIcon: SkillIcon = {
  viewBox: "0 0 24 24",
  stroke: true,
  paths: [
    {
      d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
      color: "#D4A017",
    },
    { d: "M11 12 5.12 2.2", color: "#D4A017" },
    { d: "m13 12 5.88-9.8", color: "#D4A017" },
    { d: "M8 7h8", color: "#D4A017" },
    { d: "M7 17a5 5 0 1 0 10 0a5 5 0 1 0 -10 0", color: "#D4A017" },
    { d: "M12 18v-2h-.5", color: "#D4A017" },
  ],
};

/** REST APIs are not a brand, so they get a generic API (curly braces) icon. */
export const restApiIcon: SkillIcon = {
  viewBox: "0 0 24 24",
  stroke: true,
  paths: [
    { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" },
    { d: "M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" },
  ],
};
