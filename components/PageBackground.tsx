"use client";

import Image from "next/image";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export function PageBackground() {
  const { mode } = useTheme();

  return (
    <div id="page-bg" className="pointer-events-none fixed inset-0 -z-10 animated-gradient-bg" aria-hidden>
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        quality={90}
        className={cn(
          "object-cover object-center transition-opacity duration-500",
          mode === "light" ? "opacity-15" : "opacity-30"
        )}
        sizes="100vw"
      />

      <div
        className="absolute inset-0"
        style={{ background: "color-mix(in srgb, var(--theme-bg) 65%, transparent)" }}
      />

      <div className="bg-theme-glow-pulse absolute inset-0" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <ParticleBackground />

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, color-mix(in srgb, var(--theme-bg) 55%, transparent), color-mix(in srgb, var(--theme-bg) 30%, transparent), color-mix(in srgb, var(--theme-bg) 65%, transparent))`,
        }}
      />
    </div>
  );
}
