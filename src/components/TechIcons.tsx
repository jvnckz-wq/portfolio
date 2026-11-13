import BrandIcon from "@/components/BrandIcon";
import { techIcon } from "@/data/skills";

/**
 * Small tech icons for a project; hover shows the brand colour and the name above.
 * The label is left-aligned so the first icon's label isn't clipped by a card edge.
 */
export default function TechIcons({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => {
        const icon = techIcon(t);
        return (
          <li key={t} className="group relative">
            <span
              role="img"
              aria-label={t}
              className="flex size-9 items-center justify-center rounded-md border border-foreground/15 text-foreground/70 transition-colors duration-200 group-hover:border-foreground/40 group-hover:bg-foreground/5 group-hover:text-foreground"
            >
              {icon ? (
                <BrandIcon icon={icon} size="size-5" />
              ) : (
                <span aria-hidden className="px-1 text-[10px] font-semibold">
                  {t}
                </span>
              )}
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-full left-0 z-10 mb-1.5 translate-y-1 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 transition duration-150 group-hover:translate-y-0 group-hover:opacity-100"
            >
              {t}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
