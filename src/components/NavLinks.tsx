"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";

/** Header links; the link for the section currently on screen is highlighted. */
export default function NavLinks() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    let frame = 0;

    const update = () => {
      frame = 0;
      // A section counts as current once its top passes 35% of the screen height.
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = ids[ids.length - 1];
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    // Negative margin on mobile lines the first pill's text up with the site name.
    <ul className="-ml-3 flex flex-wrap gap-1 text-sm sm:ml-0">
      {navLinks.map(({ label, href }) => {
        const isActive = active === href.slice(1);
        return (
          <li key={href}>
            <a
              href={href}
              aria-current={isActive ? "location" : undefined}
              className={`inline-block rounded-full px-3 py-1 transition-colors ${
                isActive
                  ? "bg-foreground text-background"
                  : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
