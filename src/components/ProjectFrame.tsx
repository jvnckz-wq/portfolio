import Image from "next/image";
import type { Project } from "@/types";

/** Screenshot in a browser frame (dots + address bar). */
export default function ProjectFrame({ project }: { project: Project }) {
  const url = project.liveUrl ?? project.repoUrl;
  const host = url ? new URL(url).host + (project.liveUrl ? "" : new URL(url).pathname) : undefined;
  return (
    <div className="overflow-hidden rounded-xl border border-foreground/15 bg-background shadow-[0_30px_60px_-30px_rgb(0_0_0/0.45)] transition duration-500 group-hover:-translate-y-1 group-hover:border-foreground/30">
      <div className="flex items-center gap-2 border-b border-foreground/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-foreground/20" />
        <span className="size-2.5 rounded-full bg-foreground/20" />
        <span className="size-2.5 rounded-full bg-foreground/20" />
        {host && (
          <span className="ml-3 truncate rounded-md bg-foreground/5 px-3 py-1 text-xs text-foreground/60">{host}</span>
        )}
      </div>
      <div className="relative aspect-16/10 overflow-hidden bg-foreground/5">
        {project.image && (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            draggable={false}
            sizes="(min-width: 768px) 40rem, 80vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        )}
      </div>
    </div>
  );
}
