"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Lock } from "lucide-react";
import { projects, projectCategories, type ProjectCategory } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useTranslations } from "@/hooks/useTranslations";
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
  const { t, messages } = useTranslations();
  const itemKey = String(project.id);
  const projectCopy = messages.projects.items[itemKey as keyof typeof messages.projects.items];
  const highlights =
    projectCopy && "highlights" in projectCopy ? (projectCopy.highlights as string[]) : [];

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
            <div
              className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg bg-black/80"
              style={{ boxShadow: "inset 0 0 0 1px var(--theme-border)" }}
            >
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
                  {t("projects.private")}
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
                {t("projects.featured")}
              </span>
            )}
            <h3 className="flex items-start justify-between gap-2 text-lg font-bold text-theme-fg sm:text-xl">
              <span className="transition-all group-hover:gradient-text">
                {t(`projects.items.${itemKey}.title`)}
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-theme-muted transition-all group-hover:text-theme-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </h3>

            <p className="mt-3 body-text text-base">
              {t(`projects.items.${itemKey}.description`)}
            </p>

            <ul className="mt-4 space-y-1.5">
              {highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-slate-400">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{
                      background: "var(--theme-accent)",
                      boxShadow: "0 0 6px var(--theme-glow)",
                    }}
                  />
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

            <div className="mt-auto flex gap-3 border-t pt-5" style={{ borderColor: "var(--theme-border)" }}>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-cyber-secondary btn-shine h-11 flex-1"
              >
                <Github className="h-4 w-4 text-theme-accent" />
                {hasRepo && !isPrivate ? t("projects.viewCode") : "GitHub"}
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
                  {t("projects.liveDemo")}
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
  const { t } = useTranslations();
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const [featured, ...rest] = filtered;
  const showFeatured = filter === "all" && filtered.length > 0;

  return (
    <SectionWrapper id="projects" className="section-glow section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle={t("projects.subtitle")}
          title={t("projects.title")}
          description={t("projects.description")}
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                filter === cat.id ? "badge-cyber neon-glow" : "tag-cyber"
              )}
            >
              {t(`projects.categories.${cat.id}`)}
            </button>
          ))}
        </motion.div>

        {filtered.length === 0 ? (
          <p className="body-text text-center">{t("projects.empty")}</p>
        ) : (
          <motion.div
            key={filter}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {showFeatured && featured ? (
              <ProjectCard project={featured} featured />
            ) : null}
            {(showFeatured ? rest : filtered).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="body-text mt-12 text-center text-base"
        >
          {t("projects.moreOn")}{" "}
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
