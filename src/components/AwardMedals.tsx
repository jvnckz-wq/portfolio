import BrandIcon from "@/components/BrandIcon";
import { medalIcon } from "@/data/icons";

/**
 * Award medals: gold and the award name on hover, tap (phones) or keyboard focus.
 * `align` decides which side the label opens towards, so it stays inside clipped cards.
 */
export default function AwardMedals({ awards, align = "right" }: { awards: string[]; align?: "left" | "right" }) {
  return (
    <ul aria-label="Awards" className="flex shrink-0 gap-1">
      {awards.map((award) => (
        <li key={award} className="group relative">
          <span
            role="img"
            aria-label={award}
            tabIndex={0}
            className="flex size-10 items-center justify-center rounded-full text-foreground/70 transition-colors group-hover:text-foreground group-focus-within:text-foreground"
          >
            <BrandIcon icon={medalIcon} size="size-6" />
          </span>
          <span
            aria-hidden
            className={`pointer-events-none absolute bottom-full z-10 mb-1 translate-y-1 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
              align === "right" ? "right-0" : "left-0"
            }`}
          >
            {award}
          </span>
        </li>
      ))}
    </ul>
  );
}
