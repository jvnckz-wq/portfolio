"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

/** Foreground colours from globals.css, for canvas effects that can't read CSS variables. */
export const themeColors = {
  light: { fg: "#171717", faint: "#d4d4d4" },
  dark: { fg: "#ededed", faint: "#2e2e2e" },
} as const;

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

/** Current theme from `<html data-theme>` (set by the head script and the toggle). */
export function useTheme(): Theme {
  return useSyncExternalStore(
    subscribe,
    () => (document.documentElement.dataset.theme === "dark" ? "dark" : "light"),
    () => "light",
  );
}
