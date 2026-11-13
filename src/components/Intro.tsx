import { site } from "@/data/site";

export default function Intro() {
  return (
    <section id="top" aria-labelledby="intro-title" className="py-16 sm:py-24">
      <p className="text-sm text-foreground/70">Hi, I&apos;m</p>
      <h1
        id="intro-title"
        className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {site.name}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-foreground/70">{site.tagline}</p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-5 py-2.5 text-background hover:opacity-80"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-foreground/30 px-5 py-2.5 hover:border-foreground"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}
