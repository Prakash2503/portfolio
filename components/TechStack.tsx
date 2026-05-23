"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";
import { useTranslations } from "@/hooks/useTranslations";
import { fadeInUp } from "@/lib/animations";

export function TechStack() {
  const { t } = useTranslations();

  return (
    <motion.div variants={fadeInUp} className="mt-8 w-full">
      <p className="section-label mb-3 text-center lg:text-left">{t("hero.techStack")}</p>
      <div className="-mx-1 flex gap-2 overflow-x-auto pb-2 scrollbar-none lg:flex-wrap lg:overflow-visible">
        {techStack.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.04 }}
            className="tag-cyber shrink-0 font-mono neon-glow-hover"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
