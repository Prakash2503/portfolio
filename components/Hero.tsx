"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  FolderOpen,
  Github,
  Linkedin,
  Sparkles,
  ChevronDown,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { TypingAnimation } from "@/components/ui/TypingAnimation";
import { TechStack } from "@/components/TechStack";
import { useTranslations } from "@/hooks/useTranslations";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const socials = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export function Hero() {
  const { t, tArray } = useTranslations();

  const stats = [
    { value: "8.36", label: t("hero.cgpa"), icon: GraduationCap },
    { value: String(siteConfig.githubRepos), label: t("hero.repos"), icon: Github },
    { value: "2", label: t("hero.ieeePapers"), icon: BookOpen },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-24 md:pb-8"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse items-center gap-12 lg:grid lg:grid-cols-2 lg:flex-none lg:gap-20"
        >
          <div className="w-full text-center lg:text-left">
            <motion.div
              variants={fadeInUp}
              className="badge-cyber mb-6 inline-flex items-center gap-2 px-4 py-2 text-sm neon-glow"
            >
              <Sparkles className="h-4 w-4 text-theme-accent" />
              <span>{t("hero.openToWork")}</span>
            </motion.div>

            <motion.p variants={fadeInUp} className="section-label mb-3">
              {t("hero.portfolioLabel")} · {siteConfig.location}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {t("hero.greeting")}{" "}
              <span className="gradient-text block sm:inline">{siteConfig.name}</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-5 text-xl sm:text-2xl lg:text-3xl">
              <TypingAnimation words={tArray("hero.typingRoles")} />
            </motion.div>

            <motion.p variants={fadeInUp} className="body-text mx-auto mt-6 max-w-xl lg:mx-0">
              <span className="font-semibold text-theme-fg">{t("hero.role")}</span>
              <br />
              <span className="mt-2 inline-block opacity-80">{t("hero.tagline")}</span>
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md lg:mx-0"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="card-soft flex flex-col items-center gap-2 px-3 py-4 text-center neon-glow-hover"
                  >
                    <Icon className="h-5 w-5 text-theme-accent" />
                    <p className="font-display text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-theme-muted">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>

            <TechStack />

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            >
              <Button href={siteConfig.resumeUrl} download variant="primary" className="h-11 w-full sm:w-auto">
                <Download className="h-4 w-4" />
                {t("hero.downloadResume")}
              </Button>
              <Button href="#contact" variant="secondary" className="h-11 w-full sm:w-auto">
                <Mail className="h-4 w-4" />
                {t("hero.contactMe")}
              </Button>
              <Button href="#projects" variant="ghost" className="h-11 w-full sm:w-auto">
                <FolderOpen className="h-4 w-4" />
                {t("hero.viewProjects")}
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex items-center justify-center gap-3 lg:justify-start"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -3 }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl glass text-theme-muted neon-glow-hover hover:text-theme-accent"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="relative mx-auto w-full max-w-sm lg:max-w-lg"
          >
            <div className="theme-glow-orb absolute inset-4 rounded-full blur-3xl" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="profile-ring relative overflow-hidden rounded-3xl p-[3px]"
            >
              <div className="relative z-10 aspect-square overflow-hidden rounded-[22px] bg-slate-950 ring-1 ring-white/10">
                <Image
                  src="/images/profile.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              </div>
            </motion.div>

            <div className="badge-cyber absolute -right-2 -bottom-2 px-4 py-2.5 text-sm font-semibold backdrop-blur-xl sm:-right-4 sm:-bottom-4 sm:px-5 sm:py-3">
              <span
                className="mr-2 inline-block h-2 w-2 rounded-full animate-pulse"
                style={{
                  background: "var(--theme-accent)",
                  boxShadow: "0 0 8px var(--theme-glow)",
                }}
              />
              {t("hero.availableForWork")}
            </div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-theme-muted transition-colors hover:text-theme-accent md:bottom-8 md:flex"
        >
          <span className="section-label">{t("hero.scroll")}</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
