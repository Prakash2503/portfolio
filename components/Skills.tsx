"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Brain,
  Database,
  Cloud,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Brain,
  Database,
  Cloud,
  Wrench,
};

export function Skills() {
  return (
    <SectionWrapper id="skills" className="section-glow section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Skills"
          title="Technical Expertise"
          description="Technologies and tools I use to build intelligent, scalable products."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] ?? Wrench;
            return (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="card-cyber-accent h-full p-6 pl-5">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="icon-cyber h-12 w-12 transition-transform group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(87,255,26,0.2)]">
                      <Icon className="h-6 w-6 text-[#57ff1a]" stroke="#57ff1a" />
                    </div>
                    <h3 className="heading-cyber text-lg font-bold">{category.title}</h3>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="skill-pill">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
