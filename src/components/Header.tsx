import NavLinks from "@/components/NavLinks";
import ScrollHeader from "@/components/ScrollHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/data/site";

export default function Header() {
  return (
    <ScrollHeader>
      {/* One row on every screen size. Phones show the short name so everything fits. */}
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2.5 sm:py-4"
      >
        <a href="#top" className="shrink-0 font-semibold tracking-tight">
          <span className="sm:hidden">{site.shortName}</span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-4">
          <NavLinks />
          <ThemeToggle />
        </div>
      </nav>
    </ScrollHeader>
  );
}
