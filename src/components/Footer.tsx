import { site } from "@/data/site";

export default async function Footer() {
  "use cache";

  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6 text-sm text-foreground/70">
        <p>
          &copy; {site.shortName}{new Date().getFullYear()}
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 hover:border-foreground/40 hover:text-foreground"
        >
          Back to top
          <span aria-hidden className="transition-transform group-hover:-translate-y-0.5">
            &uarr;
          </span>
        </a>
      </div>
    </footer>
  );
}
