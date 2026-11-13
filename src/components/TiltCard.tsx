"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/**
 * Card that tilts towards the mouse and gets a light sweep across it on hover (used for awards).
 * No tilt on touch or when reduced motion is preferred. Children can use `group-hover:`.
 */
export default function TiltCard({ className = "", children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function move(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(-y * 10).toFixed(2)}deg) translateY(-2px)`;
  }
  function leave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      className={`group relative overflow-hidden transition-[transform,border-color] duration-200 ease-out ${className}`}
    >
      {children}
      {/* Light sweep: only animates on the way in, then snaps back hidden. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent_35%,color-mix(in_srgb,var(--foreground)_14%,transparent)_50%,transparent_65%)] group-hover:translate-x-full group-hover:transition-transform group-hover:duration-700 motion-reduce:hidden"
      />
    </div>
  );
}
