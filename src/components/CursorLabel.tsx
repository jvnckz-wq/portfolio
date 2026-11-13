"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/**
 * Wraps a clickable area; with a mouse, the cursor becomes a round label (e.g. "Open ↗") that
 * follows the pointer. Touch and keyboard users get the normal link behaviour, nothing hidden.
 */
export default function CursorLabel({ label, children }: { label: string; children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  function move(e: PointerEvent<HTMLDivElement>) {
    const root = rootRef.current;
    const tag = labelRef.current;
    if (!root || !tag || e.pointerType !== "mouse") return;
    const r = root.getBoundingClientRect();
    tag.style.left = `${e.clientX - r.left}px`;
    tag.style.top = `${e.clientY - r.top}px`;
    tag.dataset.on = "";
  }
  function leave() {
    if (labelRef.current) delete labelRef.current.dataset.on;
  }

  return (
    <div ref={rootRef} onPointerMove={move} onPointerLeave={leave} className="relative pointer-fine:cursor-none">
      {children}
      <span
        ref={labelRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 grid size-20 -translate-x-1/2 -translate-y-1/2 scale-0 place-items-center rounded-full bg-foreground text-sm font-semibold text-background shadow-lg transition-transform duration-300 ease-out data-on:scale-100 motion-reduce:transition-none"
      >
        {label}
      </span>
    </div>
  );
}
