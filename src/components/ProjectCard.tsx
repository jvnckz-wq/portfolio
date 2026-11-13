import Image from "next/image";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-lg border border-foreground/15 p-5 transition-colors hover:border-foreground/40">
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
      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-4 flex gap-4 text-sm font-medium">
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
      )}
    </article>
  );
}
