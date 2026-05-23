"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Check, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useTranslations } from "@/hooks/useTranslations";
import { getThemeColors, themeList, type ThemeId } from "@/lib/themes";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { themeId, mode, setTheme, setMode, toggleMode } = useTheme();
  const { t } = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-[60] md:bottom-8 md:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong mb-3 w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-2xl border p-4 shadow-2xl"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-theme-accent">{t("theme.studio")}</p>
                <p className="text-xs text-theme-muted">{t("theme.subtitle")}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-theme text-theme-muted transition-colors hover:text-theme-accent"
                aria-label="Close theme panel"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mb-4 flex rounded-xl border p-1" style={{ borderColor: "var(--theme-border)" }}>
              <button
                onClick={() => setMode("dark")}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium transition-all",
                  mode === "dark" ? "badge-cyber neon-glow" : "text-theme-muted hover:text-theme-fg"
                )}
              >
                <Moon className="h-4 w-4" />
                {t("theme.dark")}
              </button>
              <button
                onClick={() => setMode("light")}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium transition-all",
                  mode === "light" ? "badge-cyber neon-glow" : "text-theme-muted hover:text-theme-fg"
                )}
              >
                <Sun className="h-4 w-4" />
                {t("theme.light")}
              </button>
            </div>

            <div className="space-y-2">
              {themeList.map((t) => {
                const active = themeId === t.id;
                const preview = t.preview[mode];
                const palette = getThemeColors(t.id, mode);
                return (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id as ThemeId)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all",
                      active ? "neon-glow" : "hover:border-theme hover:bg-black/5"
                    )}
                    style={{
                      borderColor: active
                        ? `rgba(${palette.accentRgb}, 0.5)`
                        : "var(--theme-border)",
                      background: active
                        ? `rgba(${palette.accentRgb}, 0.1)`
                        : "transparent",
                    }}
                  >
                    <span className="flex shrink-0 -space-x-1">
                      {preview.map((color) => (
                        <span
                          key={color}
                          className="h-6 w-6 rounded-full border-2 shadow-sm"
                          style={{
                            backgroundColor: color,
                            borderColor: mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.15)",
                          }}
                        />
                      ))}
                    </span>
                    <span className="flex-1 text-sm font-medium">{t.name}</span>
                    {active && (
                      <Check
                        className="h-4 w-4 shrink-0"
                        style={{ color: palette.accent }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-end gap-2">
        <motion.button
          onClick={toggleMode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass flex h-11 w-11 items-center justify-center rounded-xl text-theme-accent neon-glow-hover"
          aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {mode === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </motion.button>

        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-cyber-primary neon-glow-hover flex h-14 w-14 items-center justify-center rounded-2xl !p-0 shadow-lg"
          aria-label="Open theme switcher"
          aria-expanded={open}
        >
          <Palette className="h-6 w-6" />
        </motion.button>
      </div>
    </div>
  );
}
