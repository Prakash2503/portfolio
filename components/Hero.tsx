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
import { siteConfig, typingRoles } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { TypingAnimation } from "@/components/ui/TypingAnimation";
import { TechStack } from "@/components/TechStack";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const socials = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

const stats = [
  { value: "8.36", label: "CGPA", icon: GraduationCap, color: "text-lime-400" },
  { value: String(siteConfig.githubRepos), label: "Repos", icon: Github, color: "text-green-400" },
  { value: "2", label: "IEEE Papers", icon: BookOpen, color: "text-emerald-400" },
];

export function Hero() {
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
          {/* Text — below image on mobile */}
          <div className="w-full text-center lg:text-left">
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-500/40 bg-lime-500/10 px-4 py-2 text-sm text-lime-300 shadow-[0_0_20px_rgba(87,255,26,0.15)]"
            >
              <Sparkles className="h-4 w-4 text-lime-400" />
              <span>Open to opportunities</span>
            </motion.div>

            <motion.p variants={fadeInUp} className="section-label mb-3">
              Portfolio · {siteConfig.location}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text block sm:inline">{siteConfig.name}</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-5 text-xl sm:text-2xl lg:text-3xl">
              <TypingAnimation words={typingRoles} />
            </motion.div>

            <motion.p variants={fadeInUp} className="body-text mx-auto mt-6 max-w-xl lg:mx-0">
              <span className="font-semibold text-slate-200">{siteConfig.role}</span>
              <br />
              <span className="mt-2 inline-block text-slate-400">{siteConfig.tagline}</span>
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
                    className="card-soft flex flex-col items-center gap-2 px-3 py-4 text-center transition-colors hover:border-lime-500/40 hover:shadow-[0_0_24px_rgba(87,255,26,0.12)]"
                  >
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                    <p className="font-display text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
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
                Download Resume
              </Button>
              <Button href="#contact" variant="secondary" className="h-11 w-full sm:w-auto">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
              <Button href="#projects" variant="ghost" className="h-11 w-full sm:w-auto">
                <FolderOpen className="h-4 w-4" />
                View Projects
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
                  className="flex h-12 w-12 items-center justify-center rounded-2xl glass text-slate-400 transition-colors hover:border-lime-500/40 hover:text-lime-400 neon-glow-hover"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile — first on mobile */}
          <motion.div
            variants={fadeInUp}
            className="relative mx-auto w-full max-w-sm lg:max-w-lg"
          >
            <div className="absolute inset-4 rounded-full bg-lime-500/20 blur-3xl" />
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

            <div className="absolute -right-2 -bottom-2 rounded-2xl border border-lime-500/40 bg-black/80 px-4 py-2.5 text-sm font-semibold text-lime-300 shadow-[0_0_24px_rgba(87,255,26,0.2)] backdrop-blur-xl sm:-right-4 sm:-bottom-4 sm:px-5 sm:py-3">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_#57ff1a]" />
              Available for work
            </div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-lime-400 md:bottom-8 md:flex"
        >
          <span className="section-label">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
