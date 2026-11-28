"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Sticky header that stays out of the way: no background or border at the top
 * of the page, slides away while scrolling down, and comes back (blurred, with
 * a border) as soon as the visitor scrolls up or tabs into it.
 */
export default function ScrollHeader({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 8);
      const focused = ref.current?.contains(document.activeElement) ?? false;
      // Always shown near the top; small jitters (under 5px) are ignored.
      if (y < 80 || focused) setHidden(false);
      else if (y > lastY + 4) setHidden(true);
      else if (y < lastY - 4) setHidden(false);
      if (Math.abs(y - lastY) > 4) lastY = y;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      ref={ref}
      onFocus={() => setHidden(false)}
      className={`sticky top-0 z-50 border-b transition-[translate,background-color,border-color] duration-300 ease-out motion-reduce:transition-none ${
        scrolled ? "border-foreground/10 bg-background/80 backdrop-blur" : "border-transparent"
      } ${hidden ? "-translate-y-full" : ""}`}
    >
      {children}
    </header>
  );
}
