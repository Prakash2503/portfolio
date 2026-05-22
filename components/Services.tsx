"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Brain,
  BarChart3,
  Zap,
  Database,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Brain,
  BarChart3,
  Zap,
  Database,
};

export function Services() {
  return (
    <SectionWrapper id="services" className="section-glow">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Services"
          title="What I Offer"
          description="End-to-end solutions for web, AI, and data-driven products."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="card-cyber group relative overflow-hidden p-8"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-lime-500/10 blur-2xl transition-opacity opacity-50 group-hover:opacity-100" />
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  className="icon-cyber-lg mb-5"
                >
                  <Icon className="h-7 w-7 text-[#57ff1a]" stroke="#57ff1a" />
                </motion.div>
                <h3 className="heading-cyber text-xl font-bold">{service.title}</h3>
                <p className="mt-3 body-text text-base">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
