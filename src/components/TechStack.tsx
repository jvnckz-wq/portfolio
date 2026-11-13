import BrandIcon, { iconLabelClass, iconTileClass } from "@/components/BrandIcon";
import { skills } from "@/data/skills";

/** Technical proficiencies as icon tiles; hovering shows brand colours and the name above. */
export default function TechStack() {
  return (
    <ul className="mt-10 flex flex-wrap gap-3">
      {skills.map((skill) => (
        <li data-reveal-item key={skill.name} className="group relative">
          <span role="img" aria-label={skill.name} className={iconTileClass}>
            {skill.icon ? (
              <BrandIcon icon={skill.icon} />
            ) : (
              <span aria-hidden className="text-xs font-semibold">
                {skill.short ?? skill.name}
              </span>
            )}
          </span>
          <span aria-hidden className={iconLabelClass}>
            {skill.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
