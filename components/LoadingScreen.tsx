"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useTranslations } from "@/hooks/useTranslations";
import { siteConfig } from "@/data/portfolio";

const LOADING_KEY = "portfolio-loaded-once";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const { colors, isReady: themeReady } = useTheme();
  const { t, isReady: localeReady } = useTranslations();

  useEffect(() => {
    const seen = sessionStorage.getItem(LOADING_KEY);
    if (seen) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(LOADING_KEY, "1");
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!themeReady || !localeReady) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: colors.background }}
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="bg-theme-glow-pulse absolute inset-0" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="h-20 w-20 rounded-full border-2 border-transparent"
                style={{
                  borderTopColor: colors.accent,
                  borderRightColor: colors.accentSecondary,
                }}
              />
              <div
                className="absolute inset-2 rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(${colors.accentRgb}, 0.2), transparent)`,
                }}
              />
            </div>

            <div className="text-center">
              <p className="font-display text-2xl font-bold gradient-text">
                {siteConfig.name}
              </p>
              <p className="mt-2 text-sm text-theme-muted">{t("loading.initializing")}</p>
            </div>

            <div className="h-1 w-48 overflow-hidden rounded-full bg-black/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${colors.gradientFrom}, ${colors.gradientTo})`,
                  boxShadow: `0 0 12px ${colors.glow}`,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
