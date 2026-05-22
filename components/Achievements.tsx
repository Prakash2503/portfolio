"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold gradient-text sm:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <SectionWrapper id="achievements" className="section-glow section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Achievements"
          title="By The Numbers"
          description="Milestones across projects, learning, and community."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="gradient-border rounded-2xl p-[1px]"
            >
              <div className="card-cyber flex h-full flex-col items-center justify-center rounded-2xl p-8 text-center">
                <div className="icon-cyber-sm mb-4 h-10 w-10">
                  <Trophy className="h-5 w-5 text-[#57ff1a]" stroke="#57ff1a" />
                </div>
                <Counter value={item.value} suffix={item.suffix} />
                <p className="mt-3 text-sm text-slate-400">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
