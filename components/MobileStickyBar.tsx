"use client";

import { Download, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-950/90 p-3 backdrop-blur-xl md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={siteConfig.resumeUrl}
          download
          className="btn-shine inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-600 to-green-600 text-sm font-semibold text-black shadow-lg shadow-lime-500/25"
        >
          <Download className="h-4 w-4" />
          Resume
        </a>
        <a
          href="#contact"
          className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 text-sm font-semibold text-white"
        >
          <Mail className="h-4 w-4" />
          Contact
        </a>
      </div>
    </div>
  );
}
