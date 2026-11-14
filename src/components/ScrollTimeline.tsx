"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Timeline list whose line fills in while scrolling; each entry's dot lights up (`data-lit`) once
 * it passes the middle of the screen. Dot styles live in globals.css (.tl-dot). Without
 * JavaScript, or with reduced motion, the line stays plain and every dot is filled.
 */
export default function ScrollTimeline({ children, className = "" }: { children: ReactNode; className?: string }) {
  const listRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(list.querySelectorAll<HTMLElement>(":scope > li"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const mid = window.innerHeight * 0.55;
      const rect = list.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (mid - rect.top) / rect.height));
      fill.style.scale = `1 ${progress}`;
      for (const item of items) item.toggleAttribute("data-lit", item.getBoundingClientRect().top + 8 < mid);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    list.dataset.tlReady = "";
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative">
      {/* Filled part of the line, drawn over the list's left border. */}
      <span
        ref={fillRef}
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-full w-px origin-top scale-y-0 bg-foreground"
      />
      <ol ref={listRef} className={className}>
        {children}
      </ol>
    </div>
  );
}
