"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export function CurrentlyAt() {
  const { t } = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="fixed top-[4.5rem] left-1/2 z-40 hidden -translate-x-1/2 md:block"
    >
      <a
        href="#experience"
        className="badge-cyber inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium backdrop-blur-xl transition-all hover:neon-glow"
      >
        <Briefcase className="h-3.5 w-3.5 text-theme-accent" />
        <span className="text-theme-fg">
          {t("currentlyAt.title")} @ {t("currentlyAt.company")}
        </span>
        <span className="text-theme-muted">·</span>
        <span className="text-theme-accent opacity-90">{t("currentlyAt.period")}</span>
      </a>
    </motion.div>
  );
}
