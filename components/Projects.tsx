"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Lock } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

type Project = (typeof projects)[number];

const MAX_TAGS = 4;

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const reducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 });

  const imageScale = "imageScale" in project ? project.imageScale : 1;
  const imagePosition = "imagePosition" in project ? project.imagePosition : "center";

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const hasRepo = project.repoName !== null && project.repoName !== undefined;
  const isPrivate = "privateProject" in project && project.privateProject;
  const visibleTech = project.tech.slice(0, MAX_TAGS);
  const extraTech = project.tech.length - MAX_TAGS;
  const enableTilt = !reducedMotion && !isTouch;

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={
        enableTilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined
      }
      className={cn(
        "group h-full",
        enableTilt && "perspective-[1200px]",
        featured && "sm:col-span-2"
      )}
    >
      <div
        className={cn(
          "gradient-border card-shine relative h-full overflow-hidden rounded-2xl transition-all duration-500",
          hovered && "neon-glow -translate-y-1"
        )}
      >
        <div
          className={cn(
            "flex h-full overflow-hidden rounded-[15px] card-soft",
            featured ? "flex-col lg:flex-row" : "flex-col",
            "bg-black/55 backdrop-blur-sm"
          )}
        >
          <div
            className={cn(
              "project-image-frame shrink-0",
              featured ? "m-4 h-52 lg:m-5 lg:h-auto lg:min-h-[280px] lg:w-[45%]" : "h-52 sm:h-56"
            )}
          >
            <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg bg-black/80 ring-1 ring-lime-500/20">
              {!imageError && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    objectPosition: imagePosition,
                    transform: `scale(${imageScale})`,
                  }}
                  sizes={featured ? "600px" : "400px"}
                  onError={() => setImageError(true)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div
                className={cn(
                  "absolute inset-0 flex items-end justify-center bg-slate-950/70 p-4 transition-opacity duration-300 lg:items-center lg:justify-center",
                  hovered ? "opacity-100" : "opacity-0 lg:opacity-0 lg:group-hover:opacity-100"
                )}
              >
                <p className="text-center text-lg font-bold text-white">{project.title}</p>
              </div>
              {isPrivate && (
                <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/20 px-2.5 py-1 text-xs text-amber-200 backdrop-blur-sm">
                  <Lock className="h-3 w-3" />
                  Private
                </span>
              )}
              {project.repoName && !isPrivate && (
                <span className="badge-cyber absolute left-2 top-2 !px-2 !py-0.5 font-mono text-[10px]">
                  {project.repoName}
                </span>
              )}
            </div>
          </div>

          <div className={cn("flex flex-1 flex-col p-6 sm:p-7", featured && "lg:py-8")}>
            {featured && (
              <span className="badge-cyber mb-2 w-fit font-semibold">
                Featured Project
              </span>
            )}
            <h3 className="flex items-start justify-between gap-2 text-lg font-bold text-white sm:text-xl">
              <span className="transition-all group-hover:gradient-text">{project.title}</span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition-all group-hover:text-lime-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </h3>

            <p className="mt-3 body-text text-base">{project.description}</p>

            <ul className="mt-4 space-y-1.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-slate-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime-500 shadow-[0_0_6px_#57ff1a]" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {visibleTech.map((t) => (
                <span
                  key={t}
                  className="tag-cyber"
                >
                  {t}
                </span>
              ))}
              {extraTech > 0 && (
                <span className="badge-cyber">
                  +{extraTech}
                </span>
              )}
            </div>

            <div className="mt-auto flex gap-3 border-t border-lime-500/10 pt-5">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-cyber-secondary btn-shine h-11 flex-1"
              >
                <Github className="h-4 w-4 text-lime-400" />
                {hasRepo && !isPrivate ? "View Code" : "GitHub"}
              </motion.a>
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-cyber-primary btn-shine h-11 flex-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <SectionWrapper id="projects" className="section-glow section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Portfolio"
          title="Featured Projects"
          description="Open-source and professional AI projects on GitHub."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          <ProjectCard project={featured} featured />
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="body-text mt-12 text-center text-base"
        >
          More on{" "}
          <a
            href="https://github.com/Prakash2503"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
          >
            GitHub (@Prakash2503)
          </a>
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
