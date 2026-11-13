import Image from "next/image";
import { site } from "@/data/site";

const sizeClass = "size-40 sm:size-48 md:size-56 lg:size-64";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

/** Round profile photo; falls back to initials until a photo is set in site data. */
export default function ProfilePhoto() {
  if (site.photo) {
    return (
      <Image
        src={site.photo.src}
        alt={site.photo.alt}
        width={512}
        height={512}
        priority
        className={`${sizeClass} shrink-0 rounded-full border border-foreground/15 object-cover`}
      />
    );
  }

  return (
    <div
      aria-hidden
      className={`${sizeClass} flex shrink-0 items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 text-5xl font-semibold text-foreground/70 lg:text-6xl`}
    >
      {initials(site.name)}
    </div>
  );
}
