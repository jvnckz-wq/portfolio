"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";
import { site } from "@/data/site";

const sizeClass = "size-64 sm:size-72 md:size-80 lg:size-96 xl:size-108";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

/** The hidden image, or a "?" placeholder until `hoverPhoto` is set in site data. */
function HiddenSide() {
  if (site.hoverPhoto) {
    return <Image src={site.hoverPhoto.src} alt="" fill sizes="24rem" className="object-cover" />;
  }
  return (
    <span className="flex size-full items-center justify-center bg-foreground text-6xl font-bold text-background lg:text-7xl">
      ?
    </span>
  );
}

/**
 * Round profile photo (initials until `photo` is set). Hovering reveals the hidden image through a
 * spotlight that follows the pointer; clicking flips the card to show the hidden image in full.
 */
export default function ProfilePhoto() {
  const [flipped, setFlipped] = useState(false);
  const rootRef = useRef<HTMLButtonElement>(null);

  // Pointer position goes straight to CSS variables (no re-render per move).
  function track(event: PointerEvent<HTMLButtonElement>) {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  const face = "absolute inset-0 overflow-hidden rounded-full backface-hidden";

  return (
    <button
      ref={rootRef}
      type="button"
      onPointerMove={track}
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={flipped ? "Flip photo back" : "Flip photo"}
      className={`${sizeClass} group relative shrink-0 cursor-pointer rounded-full perspective-[1000px]`}
    >
      <span
        className={`absolute inset-0 transition-transform duration-700 ease-out transform-3d motion-reduce:transition-none ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front: profile photo, with the hidden image peeking through a spotlight on hover. */}
        {/* Solid background so the dot grid behind the intro doesn't show through. */}
        <span className={`${face} border border-foreground/15 bg-[color-mix(in_srgb,var(--foreground)_5%,var(--background))]`}>
          {site.photo ? (
            // Whole portrait, not zoomed: fit inside the circle and sit on its bottom edge
            // (the cut-out background is transparent, so the circle colour shows around it).
            <Image src={site.photo.src} alt={site.photo.alt} fill priority sizes="27rem" className="object-contain object-bottom" />
          ) : (
            <span aria-hidden className="flex size-full items-center justify-center text-5xl font-semibold text-foreground/70 md:text-6xl lg:text-7xl">
              {initials(site.name)}
            </span>
          )}
          <span
            aria-hidden
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [--r:6rem] md:[--r:7.5rem] xl:[--r:9.5rem] [mask-image:radial-gradient(circle_var(--r)_at_var(--mx,50%)_var(--my,50%),#000_55%,transparent_100%)]"
          >
            <HiddenSide />
          </span>
        </span>
        {/* Back: the hidden image in full. */}
        <span className={`${face} border border-foreground/15 rotate-y-180`}>
          <HiddenSide />
        </span>
      </span>
    </button>
  );
}
