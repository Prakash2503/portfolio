"use client";

import { Download, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { useTranslations } from "@/hooks/useTranslations";

export function MobileStickyBar() {
  const { t } = useTranslations();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t p-3 backdrop-blur-xl md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      style={{
        borderColor: "var(--theme-border)",
        background: "color-mix(in srgb, var(--theme-bg) 92%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={siteConfig.resumeUrl}
          download
          className="btn-shine btn-gradient inline-flex h-11 flex-1 items-center justify-center gap-2 text-sm"
        >
          <Download className="h-4 w-4" />
          {t("nav.resume")}
        </a>
        <a
          href="#contact"
          className="btn-cyber-secondary inline-flex h-11 flex-1 items-center justify-center gap-2 text-sm"
        >
          <Mail className="h-4 w-4" />
          {t("nav.contact")}
        </a>
      </div>
    </div>
  );
}
