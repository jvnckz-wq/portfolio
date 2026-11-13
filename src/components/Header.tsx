import NavLinks from "@/components/NavLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">
            {site.name}
          </a>
          <div className="sm:hidden">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <NavLinks />
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
