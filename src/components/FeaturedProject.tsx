import Image from "next/image";
import AwardMedals from "@/components/AwardMedals";
import TechIcons from "@/components/TechIcons";
import type { Project } from "@/types";

/** Large project row: a screenshot in a browser frame beside the details. */
export default function FeaturedProject({ project }: { project: Project }) {
  const host = project.liveUrl ? new URL(project.liveUrl).host : undefined;
  return (
    <article className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
      {/* Browser frame. The screenshot repeats the "Live site" link below, so it is skipped by
          keyboard and screen readers. */}
      <a
        data-reveal-item
        href={project.liveUrl ?? project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden
        className="group block"
      >
        <div className="overflow-hidden rounded-xl border border-foreground/15 bg-foreground/3 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.45)] transition duration-500 group-hover:-translate-y-1 group-hover:border-foreground/30">
          <div className="flex items-center gap-2 border-b border-foreground/10 px-4 py-3">
            <span className="size-2.5 rounded-full bg-foreground/20" />
            <span className="size-2.5 rounded-full bg-foreground/20" />
            <span className="size-2.5 rounded-full bg-foreground/20" />
            {host && (
              <span className="ml-3 truncate rounded-md bg-foreground/5 px-3 py-1 text-xs text-foreground/60">
                {host}
              </span>
            )}
          </div>
          {project.image && (
            <div className="relative aspect-16/10 overflow-hidden">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 1024px) 38rem, 100vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          )}
        </div>
      </a>

      <div data-reveal-item className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-foreground/60">Featured project</p>
          {project.awards && <AwardMedals awards={project.awards} />}
        </div>
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h3>
        <p className="text-lg text-foreground/80">{project.summary}</p>
        <p className="text-foreground/70">{project.description}</p>
        <TechIcons tech={project.tech} />
        <div className="mt-2 flex flex-wrap gap-3 font-medium">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-background hover:opacity-80"
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
              className="rounded-full border border-foreground/30 px-5 py-2.5 hover:border-foreground"
            >
              Source code<span className="sr-only"> for {project.title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
