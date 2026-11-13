import { navLinks, site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <a href="#top" className="font-semibold tracking-tight">
          {site.name}
        </a>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="text-foreground/70 hover:text-foreground">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
