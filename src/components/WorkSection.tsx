import BlurText from "@/components/BlurText";
import ProjectCarousel, { type CarouselItem } from "@/components/ProjectCarousel";
import ProjectFrame from "@/components/ProjectFrame";
import ProjectInfo from "@/components/ProjectInfo";
import SectionWatermark from "@/components/SectionWatermark";
import { projects } from "@/data/projects";

export default function WorkSection() {
  // The featured project comes first, so the carousel opens on it.
  const ordered = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)];
  const items: CarouselItem[] = ordered.map((p) => ({
    key: p.slug,
    title: p.title,
    href: p.liveUrl ?? p.repoUrl,
    frame: <ProjectFrame project={p} />,
    info: <ProjectInfo project={p} />,
  }));
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative border-t border-foreground/10 py-14 sm:py-20"
    >
      <SectionWatermark text="PROJECTS">
        <h2 id="projects-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
          <BlurText text="Projects" trigger="view" replayOnView delay={80} />
        </h2>
      </SectionWatermark>
      <div className="mt-10">
        <ProjectCarousel items={items} />
      </div>
    </section>
  );
}
