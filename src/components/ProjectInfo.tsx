import AwardMedals from "@/components/AwardMedals";
import TechIcons from "@/components/TechIcons";
import type { Project } from "@/types";

/** Title, text, awards, tech and links of one project (centred under the screenshots). */
export default function ProjectInfo({ project }: { project: Project }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">{project.title}</h3>
      <p className="text-lg text-foreground/80">{project.summary}</p>
      <p className="text-foreground/70">{project.description}</p>
      {project.awards && <AwardMedals awards={project.awards} />}
      <TechIcons tech={project.tech} />
      <div className="mt-2 flex flex-wrap justify-center gap-3 font-medium">
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
  );
}
