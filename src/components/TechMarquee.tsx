import ScrollVelocity from "@/components/ScrollVelocity";
import { skills } from "@/data/skills";

/**
 * Full-width band of tech names that drifts sideways and speeds up with scrolling.
 * Decorative: the same skills are listed (with labels) in the About section.
 */
export default function TechMarquee() {
  const line = skills.map((s) => s.name).join("  ·  ");
  return (
    <div
      aria-hidden
      className="relative left-1/2 w-screen -translate-x-1/2 border-y border-foreground/10 py-6 text-foreground/80"
    >
      <ScrollVelocity
        texts={[line, line]}
        velocity={40}
        numCopies={4}
        fadeEdges
        outlineAlternate
        gap={48}
        fontSize="clamp(1.75rem, 4vw, 3rem)"
        fontWeight={700}
        parallaxClassName="py-1.5"
        scrollerClassName="tracking-tight"
      />
    </div>
  );
}
