"use client";

import type { ReactNode } from "react";
import ClickSpark from "@/components/ClickSpark";
import { themeColors, useTheme } from "@/lib/useTheme";

/** Small sparks where the visitor clicks, in the text colour of the current theme. */
export default function Sparks({ children, className }: { children: ReactNode; className?: string }) {
  const color = themeColors[useTheme()].fg;
  return (
    <ClickSpark className={className} sparkColor={color} sparkSize={10} sparkRadius={22} sparkCount={8} duration={420}>
      {children}
    </ClickSpark>
  );
}
