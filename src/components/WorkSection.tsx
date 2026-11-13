import BlurText from "@/components/BlurText";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";
import SectionWatermark from "@/components/SectionWatermark";
import { projects } from "@/data/projects";

export default function WorkSection() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative border-t border-foreground/10 py-20"
    >
      <SectionWatermark text="PROJECTS">
        <h2 id="projects-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
          <BlurText text="Projects" trigger="view" replayOnView delay={80} />
        </h2>
      </SectionWatermark>
      <div className="mt-10 flex flex-col gap-16">
        {featured.map((p) => (
          <FeaturedProject key={p.slug} project={p} />
        ))}
        {others.length > 0 && (
          <div className={`grid gap-4 ${others.length > 1 ? "md:grid-cols-2" : ""}`}>
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
