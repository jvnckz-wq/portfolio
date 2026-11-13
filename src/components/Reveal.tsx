"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fades its content up into place the first time it scrolls into view.
 * Content is visible in the server HTML; only blocks that start below the fold are hidden
 * (after JavaScript loads), and nothing animates when the visitor prefers reduced motion.
 */
export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="data-[reveal=hidden]:translate-y-6 data-[reveal=hidden]:opacity-0 data-[reveal=shown]:transition data-[reveal=shown]:duration-700 data-[reveal=shown]:ease-out"
    >
      {children}
    </div>
  );
}
