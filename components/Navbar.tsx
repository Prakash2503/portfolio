"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navItems, siteConfig } from "@/data/portfolio";
import { useActiveSection } from "@/lib/useActiveSection";
import { useTranslations } from "@/hooks/useTranslations";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";

const sectionIds = navItems.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { t } = useTranslations();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        scrolled ? "glass-strong py-2.5 shadow-lg" : "border-transparent py-4 backdrop-blur-md"
      )}
      style={
        scrolled
          ? undefined
          : { background: "var(--theme-navbar)", borderColor: "transparent" }
      }
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-display shrink-0 text-xl font-bold gradient-text">
          {siteConfig.name.split(" ")[0]}
          <span className="text-theme-accent">.</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition-all",
                    isActive
                      ? "nav-active-dot font-medium text-theme-fg"
                      : "text-theme-muted hover:text-theme-fg"
                  )}
                >
                  {t(`nav.${link.id}`)}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:block" />

          <a
            href={siteConfig.resumeUrl}
            download
            className="btn-shine btn-gradient hidden h-10 items-center gap-2 px-4 md:inline-flex"
          >
            <Download className="h-4 w-4" />
            {t("nav.resume")}
          </a>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl glass text-theme-muted hover:text-theme-fg lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong overflow-hidden border-t lg:hidden"
          >
            <div className="border-b px-4 py-3 sm:hidden" style={{ borderColor: "var(--theme-border)" }}>
              <LanguageSwitcher />
            </div>
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm",
                        activeSection === id
                          ? "font-medium text-theme-accent"
                          : "text-theme-muted hover:bg-white/5"
                      )}
                      style={
                        activeSection === id
                          ? { background: "rgba(var(--theme-accent-rgb), 0.12)" }
                          : undefined
                      }
                    >
                      {t(`nav.${link.id}`)}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href={siteConfig.resumeUrl}
                  download
                  onClick={() => setMobileOpen(false)}
                  className="btn-gradient flex h-11 items-center justify-center gap-2 text-sm"
                >
                  <Download className="h-4 w-4" />
                  {t("nav.downloadResume")}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
