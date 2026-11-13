import Image from "next/image";
import type { CSSProperties } from "react";
import BrandIcon from "@/components/BrandIcon";
import SpotlightCard from "@/components/SpotlightCard";
import { medalIcon } from "@/data/icons";
import type { Project } from "@/types";

/** Card surface follows the site theme; the spotlight and border use the text colour. */
const spotlightTheme = {
  "--spotlight-card-surface": "transparent",
  "--spotlight-card-shadow": "none",
  "--spotlight-card-border": "color-mix(in srgb, var(--foreground) 15%, transparent)",
} as CSSProperties;

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="h-full">
      {/* A soft light in the text colour follows the pointer; its rim brightens the border. */}
      <SpotlightCard
        theme="dark"
        spotlightColor="var(--foreground)"
        intensity={0.08}
        borderGlow={0.5}
        className="flex h-full flex-col rounded-lg p-5"
        style={spotlightTheme}
      >
        {project.image && (
          <div className="relative mb-4 aspect-16/10 overflow-hidden rounded-md bg-foreground/5">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(min-width: 640px) 28rem, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-foreground/70">{project.summary}</p>
        <p className="mt-2 text-sm text-foreground/70">{project.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full bg-foreground/10 px-2.5 py-1">
              {t}
            </li>
          ))}
        </ul>
        {/* Bottom row, pinned to the card's bottom edge: links on the left, award medals on the right. */}
        <div className="mt-auto flex items-end justify-between gap-4 pt-4">
          <div className="flex gap-4 text-sm font-medium">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Live site<span className="sr-only"> for {project.title}</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Source code<span className="sr-only"> for {project.title}</span>
              </a>
            )}
          </div>
          {project.awards && (
            <ul aria-label="Awards" className="flex shrink-0 gap-1">
              {project.awards.map((award) => (
                <li key={award} className="group relative">
                  {/* Focusable so the award name also shows on tap (phones) and keyboard focus. */}
                  <span
                    role="img"
                    aria-label={award}
                    tabIndex={0}
                    className="flex size-8 items-center justify-center rounded-full text-foreground/70 transition-colors group-hover:text-foreground group-focus-within:text-foreground"
                  >
                    <BrandIcon icon={medalIcon} size="size-6" />
                  </span>
                  {/* Opens above and right-aligned so it stays inside the card, which clips its edges. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-0 bottom-full z-10 mb-1 translate-y-1 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                  >
                    {award}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </SpotlightCard>
    </article>
  );
}
