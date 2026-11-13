import { certifications } from "@/data/certifications";

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="border-t border-foreground/10 py-16"
    >
      <h2 id="certifications-title" className="text-3xl font-bold tracking-tight">
        Certifications
      </h2>
      <ul className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
        {certifications.map((cert) => (
          <li
            key={cert.title}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <h3 className="font-semibold">{cert.title}</h3>
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
    </section>
  );
}
