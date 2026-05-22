"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";
import { fadeInUp } from "@/lib/animations";

export function TechStack() {
  return (
    <motion.div variants={fadeInUp} className="mt-8 w-full">
      <p className="section-label mb-3 text-center lg:text-left">Tech stack</p>
      <div className="-mx-1 flex gap-2 overflow-x-auto pb-2 scrollbar-none lg:flex-wrap lg:overflow-visible">
        {techStack.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.04 }}
            className="shrink-0 rounded-full border border-white/10 bg-black/50 px-3.5 py-1.5 font-mono text-xs font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-lime-500/50 hover:text-lime-300 hover:shadow-[0_0_12px_rgba(87,255,26,0.2)]"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
