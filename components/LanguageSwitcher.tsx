"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Loader2, Check } from "lucide-react";
import { locales, localeMeta, type Locale } from "@/lib/i18n/config";
import { useTranslations } from "@/hooks/useTranslations";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t, isSwitching } = useTranslations();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isSwitching}
        className="glass flex h-10 items-center gap-2 rounded-xl px-3 text-sm text-theme-muted transition-all hover:text-theme-accent neon-glow-hover disabled:opacity-70"
        aria-label={t("nav.selectLanguage")}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {isSwitching ? (
          <Loader2 className="h-4 w-4 animate-spin text-theme-accent" />
        ) : (
          <Globe className="h-4 w-4 text-theme-accent" />
        )}
        <span className="hidden text-base sm:inline">{localeMeta[locale].flag}</span>
        <span className="hidden font-medium md:inline">{localeMeta[locale].nativeLabel}</span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            role="listbox"
            aria-label={t("nav.selectLanguage")}
            className="glass-strong absolute right-0 top-full z-50 mt-2 min-w-[180px] overflow-hidden rounded-xl border p-1.5 shadow-xl"
            style={{ borderColor: "var(--theme-border)" }}
          >
            {locales.map((code) => {
              const meta = localeMeta[code];
              const active = locale === code;
              return (
                <button
                  key={code}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLocale(code as Locale);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all",
                    active ? "badge-cyber" : "hover:bg-white/5 text-theme-muted hover:text-theme-fg"
                  )}
                >
                  <span className="text-lg">{meta.flag}</span>
                  <span className="flex-1">
                    <span className="block font-medium">{meta.nativeLabel}</span>
                    <span className="text-xs opacity-70">{meta.label}</span>
                  </span>
                  {active && <Check className="h-4 w-4 text-theme-accent" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
