import type { CSSProperties } from "react";
import { skills } from "@/data/skills";
import type { SkillIcon } from "@/types";

/**
 * The brand colour to use on hover. Near-black brand colours (e.g. Next.js) would
 * vanish on the dark theme, so those shapes keep the text colour instead.
 */
function hoverColor(color?: string) {
  if (!color) return undefined;
  const hex = color.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.05 ? undefined : color;
}

function Icon({ icon }: { icon: SkillIcon }) {
  return (
    <svg
      viewBox={icon.viewBox}
      aria-hidden
      className={`size-7 ${icon.stroke ? "fill-none stroke-current" : "fill-current"}`}
      strokeWidth={icon.stroke ? 2 : undefined}
      strokeLinecap={icon.stroke ? "round" : undefined}
      strokeLinejoin={icon.stroke ? "round" : undefined}
    >
      {icon.paths.map((p) => {
        const color = hoverColor(p.color);
        return (
          <path
            key={p.d}
            d={p.d}
            fillRule={p.evenOdd ? "evenodd" : undefined}
            clipRule={p.evenOdd ? "evenodd" : undefined}
            style={color ? ({ "--c": color } as CSSProperties) : undefined}
            className={
              color
                ? `transition-colors duration-200 ${
                    icon.stroke
                      ? "group-hover:stroke-[var(--c)]"
                      : "group-hover:fill-[var(--c)]"
                  }`
                : undefined
            }
          />
        );
      })}
    </svg>
  );
}

/** Technical proficiencies as icon tiles; hovering shows brand colours and the name above. */
export default function TechStack() {
  return (
    <ul className="mt-10 flex flex-wrap gap-3">
      {skills.map((skill) => (
        <li key={skill.name} className="group relative">
          <span
            role="img"
            aria-label={skill.name}
            className="flex size-14 items-center justify-center rounded-lg border border-foreground/15 text-foreground/70 transition-colors duration-200 group-hover:border-foreground/40 group-hover:bg-foreground/5 group-hover:text-foreground"
          >
            {skill.icon ? (
              <Icon icon={skill.icon} />
            ) : (
              <span aria-hidden className="text-xs font-semibold">
                {skill.short ?? skill.name}
              </span>
            )}
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 transition duration-150 group-hover:translate-y-0 group-hover:opacity-100"
          >
            {skill.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
