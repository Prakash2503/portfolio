"use client";

import { motion } from "framer-motion";
import { Briefcase, FlaskConical, Award, Code2 } from "lucide-react";
import { experienceTimeline } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const typeConfig: Record<
  string,
  { icon: LucideIcon; color: string; label: string }
> = {
  internship: {
    icon: Briefcase,
    color: "text-lime-400",
    label: "Internship",
  },
  freelance: {
    icon: Code2,
    color: "text-green-400",
    label: "Freelance",
  },
  research: {
    icon: FlaskConical,
    color: "text-emerald-400",
    label: "Achievement",
  },
  certification: {
    icon: Award,
    color: "text-lime-300",
    label: "Certification",
  },
};

export function Experience() {
  return (
    <SectionWrapper id="experience" className="section-glow">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          subtitle="Experience"
          title="My Journey"
          description="Internships, research, and professional milestones."
        />

        <div className="relative pl-8 sm:pl-0">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-500/80 via-green-500/50 to-lime-500/20 sm:left-1/2 sm:w-1 sm:-translate-x-px" />

          {experienceTimeline.map((item, index) => {
            const config = typeConfig[item.type] ?? typeConfig.internship;
            const Icon = config.icon;
            const isLeft = index % 2 === 0;

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
                  <Icon className={cn("h-4 w-4 sm:h-5 sm:w-5", config.color)} />
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className={cn(
                    "ml-4 card-soft border-l-2 border-l-lime-500/40 p-6 transition-colors hover:border-lime-500/50 hover:shadow-[0_0_24px_rgba(87,255,26,0.08)] sm:ml-0 sm:max-w-[calc(50%-2.5rem)]",
                    isLeft ? "sm:mr-auto sm:pr-6" : "sm:ml-auto sm:pl-6"
                  )}
                >
                  <span className={cn("badge-cyber mb-2", config.color)}>
                    {config.label}
                  </span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-lime-400/90">
                    {item.company} · {item.period}
                  </p>
                  <p className="mt-3 body-text text-base">{item.description}</p>
                  {"impact" in item && item.impact && (
                    <ul className="mt-4 space-y-1.5 border-t border-lime-500/10 pt-4">
                      {item.impact.map((point) => (
                        <li key={point} className="flex gap-2 text-sm text-slate-400">
                          <span className="text-lime-500">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
