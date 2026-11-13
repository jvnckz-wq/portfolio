import BrandIcon, { iconLabelClass, iconTileClass } from "@/components/BrandIcon";
import ContactForm from "@/components/ContactForm";
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
      <ContactForm />
      <p className="mt-10 text-sm text-foreground/70">Or reach me directly:</p>
      {/* Extra top margin leaves room for the hover labels above the icons. */}
      <ul className="mt-10 flex flex-wrap gap-3">
        {links.map(({ label, href, icon, external }) => (
          <li key={href} className="group relative">
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
    </section>
  );
}
