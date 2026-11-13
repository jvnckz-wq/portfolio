"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Heading band for a section: a huge outlined word (e.g. "ABOUT") sits behind, and the real heading
 * (children) rests on its lower part. The band reserves the word's height, so the section content
 * starts below it and never runs into the outline. The word slides a little sideways as the section
 * scrolls past (parallax); it stays still when reduced motion is preferred. Stroke in globals.css.
 */
export default function SectionWatermark({
  text,
  children,
  size = "lg",
}: {
  text: string;
  children: ReactNode;
  /** "sm" fits a narrow column (e.g. the sticky About column). */
  size?: "lg" | "sm";
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      // -1 when the band is at the bottom of the screen, +1 when it reaches the top.
      const progress = Math.max(-1, Math.min(1, (window.innerHeight / 2 - (r.top + r.height / 2)) / (window.innerHeight / 2)));
      el.style.transform = `translateX(${(progress * 40).toFixed(1)}px)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={`relative flex items-end ${
        size === "lg" ? "min-h-[clamp(2.8rem,9.6vw,7.2rem)]" : "min-h-[clamp(2.8rem,5.6vw,5.2rem)]"
      }`}
    >
      <span
        ref={ref}
        aria-hidden
        className={`watermark pointer-events-none absolute left-0 top-0 -z-10 select-none whitespace-nowrap font-extrabold leading-[0.8] tracking-tighter ${
          size === "lg" ? "text-[clamp(3.5rem,12vw,9rem)]" : "text-[clamp(3.5rem,7vw,6.5rem)]"
        }`}
      >
        {text}
      </span>
      {children}
    </div>
  );
}
