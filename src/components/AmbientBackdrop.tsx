"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

// Fixed, seeded layout for the floating dots, so server and client render the same markup.
function seeded(seed: number) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
const rand = seeded(20261113);
const PARTICLES = Array.from({ length: 64 }, () => ({
  left: `${(rand() * 100).toFixed(2)}%`,
  top: `${(rand() * 100).toFixed(2)}%`,
  size: rand() < 0.7 ? 2 : 3,
  opacity: (0.12 + rand() * 0.3).toFixed(2),
  duration: `${(10 + rand() * 10).toFixed(1)}s`,
  delay: `-${(rand() * 18).toFixed(1)}s`,
}));

/**
 * Background for the sections after the hero: a few small dots drifting slowly upward, plus a soft
 * glow that follows the mouse (mouse/trackpad devices only). Styles in globals.css
 * (.ambient-dot, .cursor-glow). Dots stand still when the visitor prefers reduced motion.
 */
export default function AmbientBackdrop({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const layer = layerRef.current;
    if (!root || !layer || !window.matchMedia("(pointer: fine)").matches) return;

    let x = -9999;
    let y = -9999;
    let frame = 0;
    const apply = () => {
      frame = 0;
      const r = layer.getBoundingClientRect();
      root.style.setProperty("--gx", `${x - r.left}px`);
      root.style.setProperty("--gy", `${y - r.top}px`);
      if (y >= r.top && y <= r.bottom) root.dataset.glow = "";
      else delete root.dataset.glow;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      schedule();
    };
    const onLeave = () => delete root.dataset.glow;

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", schedule);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const layer = "pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2";
  return (
    <div ref={rootRef} className="relative">
      <div ref={layerRef} aria-hidden className={`${layer} overflow-hidden`}>
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="ambient-dot"
            style={
              {
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                "--o": p.opacity,
                animationDuration: p.duration,
                animationDelay: p.delay,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div aria-hidden className={`${layer} cursor-glow`} />
      {children}
    </div>
  );
}
