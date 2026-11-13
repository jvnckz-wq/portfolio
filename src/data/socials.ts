import { siGithub, siInstagram } from "simple-icons";
import { fromSimpleIcon, linkedinIcon } from "@/data/icons";
import type { Social } from "@/types";

// Kept apart from site.ts so the icon data is not pulled into the client-side nav.
export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/jvnckz-wq", icon: fromSimpleIcon(siGithub) },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/john-vincent-57842044b/",
    icon: linkedinIcon,
  },
  { label: "Instagram", href: "https://www.instagram.com/jvnckz_/", icon: fromSimpleIcon(siInstagram) },
];
