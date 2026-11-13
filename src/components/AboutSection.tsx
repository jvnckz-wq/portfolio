import Image from "next/image";
import TechStack from "@/components/TechStack";
import { accomplishments } from "@/data/accomplishments";
import { certifications } from "@/data/certifications";
import { experience } from "@/data/experience";
import { site } from "@/data/site";

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
      {/* Same width as the Experience text so both blocks line up; justified from tablet up
          (on narrow phones justified text leaves wide gaps between words). */}
      <p className="mt-4 text-foreground/70 sm:text-justify">{site.bio}</p>

      <div className="mt-10">
        {/* Extra top margin on the list leaves room for the hover labels. */}
        <h3 className="text-2xl font-semibold">Technical Proficiencies</h3>
        <TechStack />
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
              <ul className="mt-2 list-disc space-y-1 pl-5 text-foreground/70 sm:text-justify">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div id="accomplishments" className="mt-10">
        <h3 className="text-2xl font-semibold">Accomplishments &amp; Certifications</h3>

        <h4 className="mt-6 text-lg font-semibold">Accomplishments</h4>
        {/* Entries are listed under their group label, so the label is written once. */}
        {[...new Set(accomplishments.map((a) => a.group))].map((group, i) => (
          <div key={group} className={i === 0 ? "mt-3" : "mt-6"}>
            <h5 className="text-sm font-medium text-foreground/70">{group}</h5>
            <ul className="mt-2 divide-y divide-foreground/10 border-y border-foreground/10">
              {accomplishments
                .filter((a) => a.group === group)
                .map((a) => (
                  <li
                    key={`${a.event}-${a.year}`}
                    className="flex items-baseline justify-between gap-4 py-4"
                  >
                    <p className="font-semibold">{a.event}</p>
                    <p className="shrink-0 text-sm tabular-nums text-foreground/70">{a.year}</p>
                  </li>
                ))}
            </ul>
          </div>
        ))}

        <h4 className="mt-8 text-lg font-semibold">Certifications and Training</h4>
        <ul className="mt-3 divide-y divide-foreground/10 border-y border-foreground/10">
          {certifications.map((c) => (
            <li key={c.name} className="flex items-center justify-between gap-4 py-4">
              <div className="flex min-w-0 items-center gap-4">
                {c.badge && (
                  // The badge PNG has a white background; framing it keeps it from
                  // reading as a stray white box on the dark theme.
                  <span className="shrink-0 rounded-lg border border-foreground/15 bg-white p-1">
                    <Image
                      src={c.badge.src}
                      alt={c.badge.alt}
                      width={56}
                      height={56}
                      className="size-14 object-contain"
                    />
                  </span>
                )}
                <p className="min-w-0 font-semibold">
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground"
                    >
                      {c.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    c.name
                  )}
                </p>
              </div>
              <p className="shrink-0 text-sm tabular-nums text-foreground/70">{c.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
