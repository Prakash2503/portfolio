"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

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
        scrolled
          ? "border-white/10 glass-strong py-2.5 shadow-lg shadow-black/25"
          : "border-transparent bg-black/30 py-4 backdrop-blur-md"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-display shrink-0 text-xl font-bold gradient-text"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-lime-400">.</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition-all",
                    isActive
                      ? "nav-active-dot font-medium text-white"
                      : "text-slate-400 hover:text-slate-200"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.resumeUrl}
            download
            className="btn-shine hidden h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-lime-600 to-green-600 px-4 text-sm font-semibold text-black shadow-md shadow-lime-500/25 sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl glass text-slate-300 hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl glass text-slate-300 lg:hidden"
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
            className="glass-strong overflow-hidden border-t border-white/10 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm",
                        activeSection === id
                          ? "bg-lime-500/15 font-medium text-lime-300"
                          : "text-slate-300 hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href={siteConfig.resumeUrl}
                  download
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-600 to-green-600 text-sm font-semibold text-black"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
