import TechStack from "@/components/TechStack";
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
      <p className="mt-4 max-w-2xl text-foreground/70">{site.bio}</p>

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
              <ul className="mt-2 list-disc space-y-1 pl-5 text-foreground/70">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Certifications</h3>
        <ul className="mt-4 divide-y divide-foreground/10 border-y border-foreground/10">
          {certifications.map((cert) => (
            <li
              key={cert.title}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h4 className="font-semibold">{cert.title}</h4>
                <p className="text-sm text-foreground/70">{cert.issuer}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium underline underline-offset-4"
                  >
                    View credential<span className="sr-only">: {cert.title}</span>
                  </a>
                )}
              </div>
              <p className="text-sm tabular-nums text-foreground/70">{cert.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
