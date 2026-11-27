import Image from "next/image";
import BlurText from "@/components/BlurText";
import BrandIcon from "@/components/BrandIcon";
import ScrollTimeline from "@/components/ScrollTimeline";
import SectionWatermark from "@/components/SectionWatermark";
import TechStack from "@/components/TechStack";
import TiltCard from "@/components/TiltCard";
import { accomplishments } from "@/data/accomplishments";
import { certifications } from "@/data/certifications";
import { experience } from "@/data/experience";
import { medalIcon } from "@/data/icons";
import { site } from "@/data/site";

// Rows: the hover highlight sits on an inner element, because the outer <li> is animated by the
// scroll reveal (its transition/translate would fight with the hover).
const rowClass =
  "group -mx-3 flex items-center justify-between gap-4 rounded-lg px-3 py-4 transition-colors duration-200 hover:bg-foreground/5";
const rowText = "transition-transform duration-200 group-hover:translate-x-1";

export default function AboutSection() {
  const awards = accomplishments.filter((a) => a.award);
  const others = accomplishments.filter((a) => !a.award);
  const groups = [...new Set(others.map((a) => a.group))];

  return (
    <section id="about" aria-labelledby="about-title" className="relative border-t border-foreground/10 py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
        {/* Left: title (on its outline word) and bio, pinned while the right column scrolls (wide
            screens). The smaller outline fits this column, so it never reaches the right column. */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionWatermark text="ABOUT" size="sm">
            <h2 id="about-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
              <BlurText text="About" trigger="view" replayOnView delay={80} />
            </h2>
          </SectionWatermark>
          <p data-reveal-item className="mt-6 text-lg text-foreground/70 sm:text-justify">
            {site.bio}
          </p>
        </div>

        {/* Right: skills, experience timeline, accomplishments. */}
        <div className="flex min-w-0 flex-col gap-16">
          <div>
            {/* Extra top margin on the list leaves room for the hover labels. */}
            <h3 data-reveal-item className="text-2xl font-semibold">Tools I&apos;m Learning</h3>
            <TechStack />
          </div>

          <div>
            <h3 data-reveal-item className="text-2xl font-semibold">Experience</h3>
            {/* The line fills in while scrolling and each dot lights up as it is reached. */}
            <ScrollTimeline className="mt-8 space-y-10 border-l border-foreground/15">
              {experience.map((e) => {
                const current = /present/i.test(e.period);
                return (
                  <li key={`${e.company}-${e.role}`} className="relative pl-8">
                    {/* Timeline dot; the current role gets a soft pulse. */}
                    <span aria-hidden className="absolute -left-1.25 top-1.5 flex size-2.5">
                      {current && (
                        <span className="absolute inline-flex size-full rounded-full bg-foreground/60 motion-safe:animate-ping" />
                      )}
                      <span className="tl-dot relative inline-flex size-2.5 rounded-full border border-foreground bg-foreground ring-4 ring-background" />
                    </span>
                    <div data-reveal-item>
                      <p className="text-sm text-foreground/60">{e.period}</p>
                      <h4 className="mt-1 text-lg font-semibold">{e.role}</h4>
                      <p className="text-foreground/70">{e.company}</p>
                    </div>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/70 sm:text-justify">
                      {e.highlights.map((h) => (
                        <li data-reveal-item key={h}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ScrollTimeline>
          </div>

          <div id="accomplishments">
            <h3 data-reveal-item className="text-2xl font-semibold">Accomplishments &amp; Certifications</h3>

            {awards.length > 0 && (
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {awards.map((a) => (
                  <li data-reveal-item key={`${a.event}-${a.year}`}>
                    <TiltCard className="h-full rounded-xl border border-foreground/15 bg-background p-4 hover:border-foreground/40 sm:p-5">
                      {/* Tilts towards the mouse with a light sweep; the medal turns gold (group hover).
                          Phones: compact row (medal beside the text) so four awards don't take a whole screen. */}
                      <div className="flex items-center gap-4 sm:block">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground/80">
                          <BrandIcon icon={medalIcon} size="size-6" />
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold sm:mt-4 sm:text-lg">{a.event}</p>
                          <p className="mt-1 text-sm text-foreground/60">
                            {a.group} &middot; {a.year}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </li>
                ))}
              </ul>
            )}

            {groups.map((group) => (
              <div key={group} className="mt-8">
                <h4 data-reveal-item className="text-sm font-medium text-foreground/60">
                  {group}
                </h4>
                <ul className="mt-2 divide-y divide-foreground/10 border-y border-foreground/10">
                  {others
                    .filter((a) => a.group === group)
                    .map((a) => (
                      <li data-reveal-item key={`${a.event}-${a.year}`}>
                        <div className={rowClass}>
                          <p className={`font-semibold ${rowText}`}>{a.event}</p>
                          <p className="shrink-0 text-sm tabular-nums text-foreground/70">{a.year}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            ))}

            <h4 data-reveal-item className="mt-8 text-sm font-medium text-foreground/60">
              Certifications and Training
            </h4>
            <ul className="mt-2 divide-y divide-foreground/10 border-y border-foreground/10">
              {certifications.map((c) => (
                <li data-reveal-item key={c.name}>
                  <div className={rowClass}>
                    <div className={`flex min-w-0 items-center gap-4 ${rowText}`}>
                      {c.badge && (
                        // The badge PNG has a white background; framing it keeps it from
                        // reading as a stray white box on the dark theme.
                        <span className="shrink-0 rounded-lg border border-foreground/15 bg-white p-1">
                          <Image src={c.badge.src} alt={c.badge.alt} width={56} height={56} className="size-14 object-contain" />
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
