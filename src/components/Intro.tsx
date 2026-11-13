import BlurText from "@/components/BlurText";
import HeroDots from "@/components/HeroDots";
import ProfilePhoto from "@/components/ProfilePhoto";
import RotatingText from "@/components/RotatingText";
import { site } from "@/data/site";

export default function Intro() {
  return (
    // Fills the first screen (viewport minus the sticky header), so Projects only appears on scroll.
    <section
      id="top"
      aria-labelledby="intro-title"
      className="relative flex min-h-[calc(100svh-6.8125rem)] flex-col justify-center py-12 sm:min-h-[calc(100svh-4.3125rem)]"
    >
      {/* Interactive dot grid behind the intro, full window width. */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
        <HeroDots />
      </div>
      {/* Text comes first in the DOM; on mobile the photo is shown above it. */}
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="min-w-0 max-w-2xl">
          <p className="text-base text-foreground/70 sm:text-lg">Hi, I&apos;m</p>
          <h1
            id="intro-title"
            className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <BlurText text={site.name} trigger="load" delay={120} />
          </h1>
          <p className="mt-5 max-w-xl text-lg text-foreground/70 sm:text-xl">
            {site.taglineLead}{" "}
            {/* The last words rotate; shown as a small pill in the text colour. */}
            <RotatingText
              texts={site.taglineWords}
              effect="blur"
              rotationInterval={2400}
              staggerDuration={0.02}
              highlight
              highlightColor="var(--foreground)"
              mainClassName="inline-flex align-baseline text-background font-medium"
              style={{ color: "var(--background)" }}
            />
          </p>
          <div className="mt-8 flex flex-wrap gap-3 font-medium">
            <a
              href="#projects"
              className="rounded-full bg-foreground px-6 py-3 text-background hover:opacity-80"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-foreground/30 px-6 py-3 hover:border-foreground"
            >
              Contact me
            </a>
          </div>
        </div>
        <ProfilePhoto />
      </div>
      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full p-2 text-foreground/50 hover:text-foreground motion-safe:animate-bounce"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
