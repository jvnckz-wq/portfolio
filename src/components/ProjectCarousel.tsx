"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import CursorLabel from "@/components/CursorLabel";

export type CarouselItem = {
  key: string;
  title: string;
  /** Where the screenshot of the current project links to (live site, else the code). */
  href?: string;
  /** Screenshot in a browser frame. */
  frame: ReactNode;
  /** Title, text, tech and links, shown under the screenshots for the current project. */
  info: ReactNode;
};

const arrowClass =
  "inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-foreground/30 transition-colors hover:border-foreground";

/**
 * Centre-focus carousel: the current project's screenshot sits large in the middle, the previous
 * and next ones wait smaller, faded and grey at the sides. Arrows, a click on a side screenshot,
 * a swipe, or the arrow keys change the project. No autoplay; motion is skipped when the visitor
 * prefers reduced motion. The details of every project stay in the HTML (only the current one is
 * visible), so they are all readable without JavaScript and by search engines.
 */
export default function ProjectCarousel({ items }: { items: CarouselItem[] }) {
  const [active, setActive] = useState(0);
  const n = items.length;
  const startX = useRef<number | null>(null);
  const swiped = useRef(false);

  const go = (i: number) => setActive(((i % n) + n) % n);
  const pad = (i: number) => String(i + 1).padStart(2, "0");

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(active - 1);
    else if (e.key === "ArrowRight") go(active + 1);
    else return;
    e.preventDefault();
  };
  const onPointerDown = (e: PointerEvent) => {
    startX.current = e.clientX;
    swiped.current = false;
  };
  const onPointerUp = (e: PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) < 40) return;
    swiped.current = true;
    go(active + (dx < 0 ? 1 : -1));
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Projects" onKeyDown={onKeyDown}>
      {/* Screenshots. Side cards are clipped at the section edge; the stage height follows the
          centre card (16:10 screenshot plus its browser bar). */}
      <div data-reveal-item className="@container overflow-x-clip">
        <div
          className="relative h-[calc(min(80cqw,40rem)*0.625_+_3.25rem)] touch-pan-y select-none"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (startX.current = null)}
          // A swipe that ends on the current screenshot must not also open its link.
          onClickCapture={(e) => {
            if (swiped.current) e.preventDefault();
          }}
        >
          {items.map((item, i) => {
            // Shortest distance from the current card, so the row wraps around.
            let off = i - active;
            if (off > n / 2) off -= n;
            if (off < -n / 2) off += n;
            const dist = Math.abs(off);
            const current = dist === 0;
            return (
              <div
                key={item.key}
                aria-hidden
                onClick={() => {
                  if (!current && dist === 1 && !swiped.current) go(i);
                }}
                className={`absolute top-0 left-1/2 w-[min(80cqw,40rem)] ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:transition-[transform,opacity,filter] motion-safe:duration-500 ${
                  current ? "" : "cursor-pointer"
                } ${dist > 1 ? "pointer-events-none" : ""}`}
                style={{
                  transform: `translateX(calc(-50% + ${off * 62}%)) scale(${current ? 1 : 0.78})`,
                  opacity: current ? 1 : dist === 1 ? 0.35 : 0,
                  filter: current ? "none" : "grayscale(1)",
                  zIndex: 10 - dist,
                }}
              >
                {current && item.href ? (
                  // Repeats the "Live site" link below, so it is skipped by keyboard and screen readers.
                  <CursorLabel label="Open ↗">
                    <a href={item.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} draggable={false} className="group block">
                      {item.frame}
                    </a>
                  </CursorLabel>
                ) : (
                  item.frame
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrows with the counter between them, right under the screenshots. */}
      <div data-reveal-item className="mt-6 flex items-center justify-center gap-4">
        <button type="button" onClick={() => go(active - 1)} aria-label="Previous project" className={arrowClass}>
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <p aria-hidden className="min-w-16 text-center text-sm font-medium tracking-widest text-foreground/60 tabular-nums">
          {pad(active)} / {pad(n - 1)}
        </p>
        <button type="button" onClick={() => go(active + 1)} aria-label="Next project" className={arrowClass}>
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      {/* Details: all stacked in one grid cell so the height never jumps; only the current one shows. */}
      <div data-reveal-item className="mx-auto mt-6 grid max-w-2xl text-center">
        {items.map((item, i) => (
          <div
            key={item.key}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${n}: ${item.title}`}
            className={`col-start-1 row-start-1 ${i === active ? "carousel-fade" : "invisible"}`}
          >
            {item.info}
          </div>
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        Project {active + 1} of {n}: {items[active]?.title}
      </p>
    </div>
  );
}
