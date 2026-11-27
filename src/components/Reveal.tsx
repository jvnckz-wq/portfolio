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

    // Items already on screen start shown, so nothing blinks on first paint (or when added later).
    const showIfOnScreen = (item: HTMLElement) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) item.dataset.shown = "";
    };

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
    const watch = (item: HTMLElement) => {
      showIfOnScreen(item);
      observer.observe(item);
    };
    root.querySelectorAll<HTMLElement>("[data-reveal-item]").forEach(watch);
    root.dataset.revealReady = "";

    // Items rendered later (new content, hot reload) are watched too, or they would stay hidden.
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches("[data-reveal-item]")) watch(node);
          node.querySelectorAll<HTMLElement>("[data-reveal-item]").forEach(watch);
        });
      }
    });
    mutations.observe(root, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
