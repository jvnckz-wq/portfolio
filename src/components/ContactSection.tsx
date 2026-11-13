import BrandIcon, { iconLabelClass, iconTileClass } from "@/components/BrandIcon";
import { site } from "@/data/site";
import { socials } from "@/data/socials";

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
          className="font-medium underline underline-offset-4 wrap-anywhere"
        >
          {site.email}
        </a>
      </p>
      {/* Extra top margin leaves room for the hover labels above the icons. */}
      <ul className="mt-12 flex flex-wrap gap-3">
        {socials.map(({ label, href, icon }) => (
          <li key={href} className="group relative">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
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
    </section>
  );
}
