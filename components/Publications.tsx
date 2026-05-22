"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { publications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Publications() {
  return (
    <SectionWrapper id="publications" className="section-glow section-alt">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          subtitle="Research"
          title="Publications"
          description="IEEE-published research in computer vision, emergency response, and agricultural AI."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {publications.map((pub) => (
            <motion.article
              key={pub.id}
              variants={fadeInUp}
              whileHover={{ x: 4 }}
              className="group gradient-border rounded-2xl p-[1px] neon-glow-hover"
            >
              <div className="card-cyber-accent flex gap-5 rounded-2xl p-6 sm:p-8">
                <div className="icon-cyber h-12 w-12 shrink-0">
                  <BookOpen className="h-6 w-6 text-[#57ff1a]" stroke="#57ff1a" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap gap-2">
                    <span className="badge-cyber">{pub.venue}</span>
                    <span className="tag-cyber">{pub.year}</span>
                  </div>
                  <h3 className="text-base font-bold leading-snug text-white transition-all group-hover:gradient-text sm:text-lg">
                    {pub.title}
                  </h3>
                  <p className="mt-3 body-text text-base">{pub.description}</p>
                  <motion.a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="mt-4 inline-flex items-center gap-2 text-sm link-accent"
                  >
                    <ExternalLink className="h-4 w-4 text-[#57ff1a]" stroke="#57ff1a" />
                    {pub.relatedRepo ? "View related project on GitHub" : "IEEE publication"}
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
