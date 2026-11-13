"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll animation for a section. Every element inside marked `data-reveal-item` fades up when it
 * scrolls into view and hides again when it leaves, so the animation replays on every pass.
 * Items entering together are staggered. Content stays visible without JavaScript, and nothing
 * animates when the visitor prefers reduced motion (the CSS lives in globals.css).
 */
export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal-item]"));
    // Items already on screen start shown, so nothing blinks on first paint.
    for (const item of items) {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) item.dataset.shown = "";
    }
    root.dataset.revealReady = "";

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
        entering.forEach((e, i) => {
          const el = e.target as HTMLElement;
          el.style.transitionDelay = `${Math.min(i, 8) * 70}ms`;
          el.dataset.shown = "";
        });
        for (const e of entries) {
          if (e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.style.transitionDelay = "0ms";
          delete el.dataset.shown;
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
