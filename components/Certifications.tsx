"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { aboutContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslations } from "@/hooks/useTranslations";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Certifications() {
  const { t } = useTranslations();

  return (
    <SectionWrapper id="certifications" className="section-glow">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle={t("certifications.subtitle")}
          title={t("certifications.title")}
          description={t("certifications.description")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {aboutContent.certifications.map((cert, i) => (
            <motion.a
              key={cert.url}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="card-cyber group flex flex-col gap-4 p-6 transition-all hover:neon-glow"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="icon-cyber h-12 w-12">
                  <Award className="h-6 w-6" />
                </div>
                <span className="badge-cyber text-[10px]">#{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-semibold leading-snug text-theme-fg transition-colors group-hover:text-theme-accent">
                {t(`certifications.items.${i + 1}`)}
              </h3>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-theme-muted transition-colors group-hover:text-theme-accent">
                {t("certifications.viewCredential")}
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
