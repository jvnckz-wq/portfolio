import BlurText from "@/components/BlurText";
import BrandIcon, { iconLabelClass, iconTileClass } from "@/components/BrandIcon";
import ContactForm from "@/components/ContactForm";
import SectionWatermark from "@/components/SectionWatermark";
import { siGmail } from "simple-icons";
import { fromSimpleIcon } from "@/data/icons";
import { site } from "@/data/site";
import { socials } from "@/data/socials";

// Email comes first and opens the visitor's email app; the socials open in a new tab.
const links = [
  { label: "Email", href: `mailto:${site.email}`, icon: fromSimpleIcon(siGmail), external: false },
  ...socials.map((s) => ({ ...s, external: true })),
];

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative border-t border-foreground/10 py-14 sm:py-20">
      <SectionWatermark text="CONTACT">
        <p data-reveal-item className="text-sm font-medium uppercase tracking-widest text-foreground/60">
          Contact
        </p>
      </SectionWatermark>
      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: big call to action and direct links. */}
        <div>
          <h2 id="contact-title" className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <BlurText text="Let's work together." trigger="view" replayOnView delay={90} />
          </h2>
          <p data-reveal-item className="mt-6 max-w-md text-lg text-foreground/70">
            Have a project or opportunity in mind? Reach out by email or on social.
          </p>
          <p data-reveal-item className="mt-10 text-sm text-foreground/70">
            Or reach me directly:
          </p>
          {/* Extra top margin leaves room for the hover labels above the icons. */}
          <ul className="mt-10 flex flex-wrap gap-3">
            {links.map(({ label, href, icon, external }) => (
              <li data-reveal-item key={href} className="group relative">
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer", "aria-label": `${label} (opens in a new tab)` }
                    : { "aria-label": `Email ${site.email}` })}
                  className={`${iconTileClass} group-focus-within:border-foreground/40 group-focus-within:text-foreground`}
                >
                  <BrandIcon icon={icon} />
                </a>
                <span aria-hidden className={`${iconLabelClass} group-focus-within:translate-y-0 group-focus-within:opacity-100`}>
                  {label}
                </span>
              </li>
            ))}
          </ul>
          {/* Resume PDF (from public/), opened in the browser's PDF viewer. */}
          <ul className="mt-8 flex flex-wrap gap-3 font-medium">
            {site.documents.map(({ label, href }) => (
              <li data-reveal-item key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (PDF, opens in a new tab)`}
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2.5 hover:border-foreground"
                >
                  {label}
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: the form, in a solid panel so the grid backdrop doesn't run through the fields. */}
        <div data-reveal-item className="rounded-2xl border border-foreground/15 bg-background p-5 sm:p-8 lg:self-start">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
