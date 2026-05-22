"use client";

import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export function PageBackground() {
  const { theme } = useTheme();

  return (
    <div id="page-bg" className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        quality={90}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Base dim — kept lighter so glow reads brighter */}
      <div
        className={cn(
          "absolute inset-0",
          theme === "light" ? "bg-white/75" : "bg-black/35"
        )}
      />

      {/* Pulsing neon green — 3s bright flash */}
      <div className="bg-green-glow-pulse absolute inset-0" />
      <div className="bg-green-glow-burst absolute inset-0" />

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b",
          theme === "light"
            ? "from-white/85 via-white/70 to-white/82"
            : "from-black/55 via-black/30 to-black/65"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r",
          theme === "light"
            ? "from-white/40 via-transparent to-white/40"
            : "from-black/25 via-transparent to-black/25"
        )}
      />
    </div>
  );
}
