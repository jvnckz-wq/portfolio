import BlurText from "@/components/BlurText";
import HeroDots from "@/components/HeroDots";
import ProfilePhoto from "@/components/ProfilePhoto";
import RotatingText from "@/components/RotatingText";
import { site } from "@/data/site";

export default function Intro() {
  return (
    // Fills the first screen (viewport minus the sticky header), so Projects only appears on scroll.
    // Entrance: each part comes in one after another (hero-* classes in globals.css, delays via --hero-delay).
    <section
      id="top"
      aria-labelledby="intro-title"
      className="relative flex min-h-[calc(100svh-3.8125rem)] flex-col justify-center pt-8 pb-20 sm:min-h-[calc(100svh-4.3125rem)] sm:py-12"
    >
      {/* Interactive dot grid behind the intro, full window width. */}
      <div aria-hidden className="hero-fade-in pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
        <HeroDots />
      </div>
      {/* Text comes first in the DOM; on mobile the photo is shown above it. */}
      <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="min-w-0 max-w-2xl">
          <p className="hero-in text-base text-foreground/70 sm:text-lg">Hi, I&apos;m</p>
          <h1
            id="intro-title"
            className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <BlurText text={site.name} trigger="load" delay={160} stepDuration={0.47} />
          </h1>
          <p className="hero-in mt-5 max-w-xl text-lg text-foreground/70 [--hero-delay:880ms] sm:text-xl">
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
              className="hero-in group inline-flex items-center rounded-full bg-foreground px-6 py-3 text-background [--hero-delay:1150ms] hover:opacity-80"
            >
              View projects
              {/* Arrow slides in on hover/focus. */}
              <span
                aria-hidden
                className="inline-block max-w-0 -translate-x-1.5 overflow-hidden opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:ml-1.5 group-hover:max-w-[1.2em] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:ml-1.5 group-focus-visible:max-w-[1.2em] group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-reduce:transition-none"
              >
                →
              </span>
            </a>
            <a
              href="#contact"
              className="hero-in rounded-full border border-foreground/30 px-6 py-3 [--hero-delay:1250ms] hover:border-foreground"
            >
              Contact me
            </a>
          </div>
        </div>
        {/* Outer wrapper floats; inner one handles the entrance, so the two animations don't clash. */}
        <div className="hero-float shrink-0">
          <div className="hero-photo-in [--hero-delay:270ms]">
            <ProfilePhoto />
          </div>
        </div>
      </div>
      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="hero-scroll absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full p-2 text-foreground/50 hover:text-foreground"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
