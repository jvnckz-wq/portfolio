import { experience } from "@/data/experience";
import { site } from "@/data/site";
import { skills } from "@/data/skills";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-foreground/10 py-16"
    >
      <h2 id="about-title" className="text-3xl font-bold tracking-tight">
        About
      </h2>
      <p className="mt-4 max-w-2xl text-foreground/70">{site.bio}</p>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Skills</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="font-medium">{group.category}</h4>
              <ul className="mt-2 space-y-1 text-foreground/70">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Experience</h3>
        <ul className="mt-4 space-y-6">
          {experience.map((e) => (
            <li key={`${e.company}-${e.role}`}>
              <h4 className="font-medium">
                {e.role} &middot; {e.company}
              </h4>
              <p className="text-sm text-foreground/70">{e.period}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-foreground/70">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
