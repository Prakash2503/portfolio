"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Target, Award, Briefcase } from "lucide-react";
import { aboutContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslations } from "@/hooks/useTranslations";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export function About() {
  const { t, tArray } = useTranslations();

  const aboutSections = [
    { icon: Briefcase, title: t("about.summaryTitle"), content: t("about.summary") },
    { icon: Target, title: t("about.objectiveTitle"), content: t("about.objective") },
  ];

  const experienceItems = tArray("about.experienceItems");

  return (
    <SectionWrapper id="about" className="section-glow">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle={t("about.subtitle")}
          title={t("about.title")}
          description={t("about.description")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid items-start gap-12 lg:grid-cols-2"
        >
          <motion.div variants={slideInLeft} className="relative">
            <div className="gradient-border overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[15px] ring-1 ring-white/10">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="theme-glow-orb absolute -top-4 -right-4 h-24 w-24 rounded-2xl blur-xl"
            />
          </motion.div>

          <motion.div variants={slideInRight} className="space-y-6">
            {aboutSections.map(({ icon: Icon, title, content }) => (
              <div key={title} className="card-cyber p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="icon-cyber h-10 w-10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="heading-cyber">{title}</h3>
                </div>
                <p className="body-text">{content}</p>
              </div>
            ))}

            <div className="card-cyber p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="icon-cyber h-10 w-10">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="heading-cyber">{t("about.educationTitle")}</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-theme-muted">
                  <span className="font-medium text-theme-fg">{t("about.degree")}</span>
                  <br />
                  {t("about.institution")} · {t("about.year")}
                </li>
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div variants={fadeInUp} className="card-cyber-accent p-5">
                <h4 className="heading-cyber mb-3">{t("about.experienceHighlights")}</h4>
                <ul className="space-y-2 text-sm text-theme-muted">
                  {experienceItems.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-theme-accent">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="card-cyber-accent p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="icon-cyber-sm h-9 w-9">
                    <Award className="h-4 w-4" />
                  </div>
                  <h4 className="heading-cyber">{t("about.certificationsPreview")}</h4>
                </div>
                <ul className="space-y-2 text-sm text-theme-muted">
                  {aboutContent.certifications.slice(0, 3).map((cert, i) => (
                    <li key={cert.url} className="flex gap-2">
                      <span className="shrink-0 text-theme-accent">▹</span>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent"
                      >
                        {t(`certifications.items.${i + 1}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
