"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";
import type { ReactNode } from "react";

export function LocaleFade({ children }: { children: ReactNode }) {
  const { locale, isSwitching, t } = useTranslations();

  return (
    <>
      <AnimatePresence>
        {isSwitching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-[150] flex items-center justify-center backdrop-blur-[2px]"
            style={{ background: "color-mix(in srgb, var(--theme-bg) 40%, transparent)" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge-cyber px-4 py-2 text-sm"
            >
              {t("notifications.switchingLanguage")}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={locale}
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
