import { site } from "@/data/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-foreground/10 py-16"
    >
      <h2 id="contact-title" className="text-3xl font-bold tracking-tight">
        Contact
      </h2>
      <p className="mt-4 max-w-xl text-foreground/70">
        Have a project or opportunity in mind? Reach out by email or on social.
      </p>
      <p className="mt-6">
        <a
          href={`mailto:${site.email}`}
          className="font-medium underline underline-offset-4 [overflow-wrap:anywhere]"
        >
          {site.email}
        </a>
      </p>
      <ul className="mt-4 flex gap-4 text-sm">
        {site.socials.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
