"use client";

import { motion } from "framer-motion";
import { Briefcase, FlaskConical, Award, Code2 } from "lucide-react";
import { experienceTimeline } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslations } from "@/hooks/useTranslations";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const typeConfig: Record<string, { icon: LucideIcon }> = {
  internship: { icon: Briefcase },
  freelance: { icon: Code2 },
  research: { icon: FlaskConical },
  certification: { icon: Award },
};

export function Experience() {
  const { t, messages } = useTranslations();

  return (
    <SectionWrapper id="experience" className="section-glow">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          subtitle={t("experience.subtitle")}
          title={t("experience.title")}
          description={t("experience.description")}
        />

        <div className="relative pl-8 sm:pl-0">
          <div
            className="absolute left-[15px] top-0 bottom-0 w-0.5 sm:left-1/2 sm:w-1 sm:-translate-x-px"
            style={{
              background: `linear-gradient(to bottom, var(--theme-accent), var(--theme-accent-secondary), transparent)`,
            }}
          />

          {experienceTimeline.map((item, index) => {
            const config = typeConfig[item.type] ?? typeConfig.internship;
            const Icon = config.icon;
            const isLeft = index % 2 === 0;
            const itemKey = String(item.id);
            const expItem = messages.experience.items[itemKey as keyof typeof messages.experience.items];
            const impact = expItem && "impact" in expItem ? (expItem.impact as string[]) : [];

            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className={cn(
                  "relative mb-10 last:mb-0",
                  "sm:mb-12 sm:flex sm:items-start sm:gap-0",
                  isLeft ? "sm:flex-row-reverse" : "sm:flex-row"
                )}
              >
                <div className="hidden flex-1 sm:block" />

                <div className="icon-cyber absolute left-0 z-10 h-8 w-8 sm:absolute sm:left-1/2 sm:h-12 sm:w-12 sm:-translate-x-1/2">
                  <Icon className="h-4 w-4 text-theme-accent sm:h-5 sm:w-5" />
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className={cn(
                    "ml-4 card-soft border-l-2 p-6 transition-colors neon-glow-hover sm:ml-0 sm:max-w-[calc(50%-2.5rem)]",
                    isLeft ? "sm:mr-auto sm:pr-6" : "sm:ml-auto sm:pl-6"
                  )}
                >
                  <span className="badge-cyber mb-2">
                    {t(`experience.types.${item.type}`)}
                  </span>
                  <h3 className="text-lg font-bold text-theme-fg">
                    {t(`experience.items.${itemKey}.title`)}
                  </h3>
                  <p className="text-sm text-theme-accent opacity-90">
                    {t(`experience.items.${itemKey}.company`)} ·{" "}
                    {t(`experience.items.${itemKey}.period`)}
                  </p>
                  <p className="mt-3 body-text text-base">
                    {t(`experience.items.${itemKey}.description`)}
                  </p>
                  {impact.length > 0 && (
                    <ul className="mt-4 space-y-1.5 border-t pt-4" style={{ borderColor: "var(--theme-border)" }}>
                      {impact.map((point) => (
                        <li key={point} className="flex gap-2 text-sm text-theme-muted">
                          <span className="text-theme-accent">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>

                <div className="hidden flex-1 sm:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
