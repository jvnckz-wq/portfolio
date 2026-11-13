import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-foreground/10 py-16"
    >
      <h2 id="projects-title" className="text-3xl font-bold tracking-tight">
        Projects
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
