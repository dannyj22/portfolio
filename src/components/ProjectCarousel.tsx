"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  Bot,
  Workflow,
  Globe,
  LayoutTemplate,
  ExternalLink,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "./Projects";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Workflow,
  Globe,
  LayoutTemplate,
};

function CarouselCard({
  project,
  index,
  count,
  activeIndex,
}: {
  project: Project;
  index: number;
  count: number;
  activeIndex: number;
}) {
  const Icon = iconMap[project.iconKey];
  const isFocused = activeIndex === index;
  const isNeighbor = Math.abs(activeIndex - index) === 1;

  return (
    <div className="flex w-full snap-center items-center justify-center px-2 py-5">
      <motion.article
        animate={{
          scale: isFocused ? 1 : 0.82,
          y: isFocused ? 0 : index < activeIndex ? -48 : 48,
          rotateX: isFocused ? 0 : index < activeIndex ? -14 : 14,
          opacity: isFocused ? 1 : isNeighbor ? 0.55 : 0.3,
          filter: isFocused ? "blur(0px)" : "blur(1.5px)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        style={{ transformPerspective: 1200 }}
        className="relative flex w-full max-h-[60dvh] flex-col rounded-2xl border border-border bg-surface p-5 shadow-2xl"
      >
        <div
          className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue/25 to-purple-600/25 blur-2xl transition-opacity duration-500 ${
            isFocused ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="mb-4 flex items-center justify-between">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-lg transition-all duration-500 ${
              isFocused ? "bg-blue/20 text-blue-light" : "bg-blue/10 text-blue-light"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span className="rounded-full border border-border-light px-3 py-1 text-xs text-muted-dark">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border-light px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
          <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-muted-dark">
            <ExternalLink className="h-4 w-4" />
            NOT AVAILABLE NOW
          </span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-white/30"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(
      projects.length - 1,
      Math.max(0, Math.round(v * (projects.length - 1)))
    );
    setActive(next);
  });

  return (
    <div className="relative" style={{ perspective: 1200 }}>
      <div
        ref={containerRef}
        className="no-scrollbar relative h-[68dvh] snap-y snap-mandatory overflow-y-scroll"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {projects.map((project, index) => (
          <CarouselCard
            key={project.title}
            project={project}
            index={index}
            count={projects.length}
            activeIndex={active}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute top-1/2 right-1 z-10 flex -translate-y-1/2 flex-col gap-2">
        {projects.map((project, index) => (
          <span
            key={project.title}
            className={`block h-1.5 rounded-full transition-all duration-500 ${
              index === active ? "w-6 bg-blue-light" : "w-1.5 bg-border-light"
            }`}
          />
        ))}
      </div>
    </div>
  );
}