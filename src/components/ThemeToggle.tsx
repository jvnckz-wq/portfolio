"use client";

/** Switches between light and dark theme and remembers the choice. */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (private mode); the theme still switches for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="inline-flex size-10 shrink-0 items-center sm:size-9 justify-center rounded-full border border-foreground/15 text-foreground/70 transition-colors hover:border-foreground/40 hover:text-foreground"
    >
      {/* Moon in light mode (switch to dark), sun in dark mode (switch to light). */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="size-4 fill-none stroke-current stroke-2 dark:hidden"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="hidden size-4 fill-none stroke-current stroke-2 dark:block"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
