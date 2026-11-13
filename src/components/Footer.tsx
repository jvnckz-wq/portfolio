import { site } from "@/data/site";

export default async function Footer() {
  "use cache";

  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-4 py-6 text-sm text-foreground/70 sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex gap-4">
          {site.socials.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
