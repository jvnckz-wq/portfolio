import type { CSSProperties } from "react";
import AwardMedals from "@/components/AwardMedals";
import SpotlightCard from "@/components/SpotlightCard";
import TechIcons from "@/components/TechIcons";
import type { Project } from "@/types";

/** Card surface follows the site theme; the spotlight and border use the text colour. */
const spotlightTheme = {
  "--spotlight-card-surface": "transparent",
  "--spotlight-card-shadow": "none",
  "--spotlight-card-border": "color-mix(in srgb, var(--foreground) 15%, transparent)",
} as CSSProperties;

/** Compact project card (non-featured projects): text on the left, links on the right on wide screens. */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article data-reveal-item className="h-full">
      {/* A soft light in the text colour follows the pointer; its rim brightens the border. */}
      <SpotlightCard
        theme="dark"
        spotlightColor="var(--foreground)"
        intensity={0.08}
        borderGlow={0.5}
        className="flex h-full flex-col gap-5 rounded-xl p-6 md:flex-row md:items-center md:justify-between"
        style={spotlightTheme}
      >
        <div className="flex min-w-0 flex-col gap-3">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="max-w-2xl text-foreground/70">{project.summary}</p>
          <p className="max-w-2xl text-sm text-foreground/70">{project.description}</p>
          <TechIcons tech={project.tech} />
        </div>
        <div className="flex shrink-0 items-center gap-4 text-sm font-medium">
          {project.awards && <AwardMedals awards={project.awards} />}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/30 px-4 py-2 hover:border-foreground"
            >
              Live site<span className="sr-only"> for {project.title} (opens in a new tab)</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/30 px-4 py-2 hover:border-foreground"
            >
              Source code<span className="sr-only"> for {project.title} (opens in a new tab)</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </a>
          )}
        </div>
      </SpotlightCard>
    </article>
  );
}
