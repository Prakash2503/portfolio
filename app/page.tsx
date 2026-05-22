"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Publications } from "@/components/Publications";
import { Services } from "@/components/Services";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, staggerChildren: 0.05 },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Services />
      <Achievements />
      <Contact />
    </motion.div>
  );
}
