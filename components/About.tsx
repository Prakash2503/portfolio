"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Target, Award, Briefcase } from "lucide-react";
import { aboutContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const aboutSections = [
  {
    icon: Briefcase,
    title: "Professional Summary",
    content: aboutContent.summary,
  },
  {
    icon: Target,
    title: "Career Objective",
    content: aboutContent.objective,
  },
];

export function About() {
  return (
    <SectionWrapper id="about" className="section-glow">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="About Me"
          title="Who I Am"
          description="Professional background, goals, and qualifications."
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
              <div className="relative aspect-[4/5] overflow-hidden rounded-[15px] ring-1 ring-lime-500/20">
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
              className="absolute -top-4 -right-4 h-24 w-24 rounded-2xl bg-lime-500/20 blur-xl"
            />
          </motion.div>

          <motion.div variants={slideInRight} className="space-y-6">
            {aboutSections.map(({ icon: Icon, title, content }) => (
              <div key={title} className="card-cyber p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="icon-cyber h-10 w-10">
                    <Icon className="h-5 w-5 text-[#57ff1a]" stroke="#57ff1a" />
                  </div>
                  <h3 className="heading-cyber">{title}</h3>
                </div>
                <p className="body-text">{content}</p>
              </div>
            ))}

            <div className="card-cyber p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="icon-cyber h-10 w-10">
                  <GraduationCap className="h-5 w-5 text-[#57ff1a]" stroke="#57ff1a" />
                </div>
                <h3 className="heading-cyber">Education</h3>
              </div>
              <ul className="space-y-3">
                {aboutContent.education.map((edu) => (
                  <li key={edu.degree} className="text-slate-400">
                    <span className="font-medium text-white">{edu.degree}</span>
                    <br />
                    {edu.institution} · {edu.year}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div variants={fadeInUp} className="card-cyber-accent p-5">
                <h4 className="heading-cyber mb-3">Experience Highlights</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  {aboutContent.experience.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-lime-400">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="card-cyber-accent p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="icon-cyber-sm h-9 w-9">
                    <Award className="h-4 w-4 text-[#57ff1a]" stroke="#57ff1a" />
                  </div>
                  <h4 className="heading-cyber">Certifications</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-400">
                  {aboutContent.certifications.map((cert) => (
                    <li key={cert.name} className="flex gap-2">
                      <span className="shrink-0 text-lime-400">▹</span>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent"
                      >
                        {cert.name}
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
