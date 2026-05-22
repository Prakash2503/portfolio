"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  subtitle,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <motion.span
        whileHover={{ scale: 1.03 }}
        className="badge-cyber mb-4 inline-flex items-center gap-2 px-5 py-1.5 section-label !text-lime-400/90"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_#57ff1a]" />
        {subtitle}
      </motion.span>

      <h2 className="font-display mt-2 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>

      <div className="mx-auto mt-5 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-lime-500/60" />
        <span className="h-1.5 w-1.5 rotate-45 rounded-sm bg-lime-400/80 shadow-[0_0_6px_#57ff1a]" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-lime-500/60" />
      </div>

      {description && (
        <p className="body-text mt-5 text-center">{description}</p>
      )}
    </motion.div>
  );
}
