"use client";

import DotGrid from "@/components/DotGrid";
import { themeColors, useTheme } from "@/lib/useTheme";

/** Interactive dot grid behind the intro; dots are faint gray and light up near the cursor. */
export default function HeroDots() {
  const colors = themeColors[useTheme()];
  return (
    <DotGrid
      dotSize={3}
      gap={24}
      baseColor={colors.faint}
      activeColor={colors.fg}
      proximity={130}
      glow={0.25}
      shockStrength={3}
      fade={0.6}
    />
  );
}
