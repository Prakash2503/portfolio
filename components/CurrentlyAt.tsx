"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function CurrentlyAt() {
  const { currentRole } = siteConfig;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="fixed top-[4.5rem] left-1/2 z-40 hidden -translate-x-1/2 md:block"
    >
      <a
        href="#experience"
        className="inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-black/70 px-4 py-1.5 text-xs font-medium text-slate-300 shadow-[0_0_16px_rgba(87,255,26,0.12)] backdrop-blur-xl transition-colors hover:border-lime-500/50 hover:text-lime-300"
      >
        <Briefcase className="h-3.5 w-3.5 text-lime-400" />
        <span>
          {currentRole.title} @ {currentRole.company}
        </span>
        <span className="text-slate-500">·</span>
        <span className="text-lime-400/90">{currentRole.period}</span>
      </a>
    </motion.div>
  );
}
