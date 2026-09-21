import ScrollReveal from "./ScrollReveal";
import ProjectCarousel from "./ProjectCarousel";
import {
  Bot,
  Workflow,
  Globe,
  LayoutTemplate,
  ExternalLink,
  GitBranch,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Workflow,
  Globe,
  LayoutTemplate,
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  iconKey: string;
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "AI Customer Support Agent",
    description:
      "An intelligent support assistant that automates responses to common queries, learns from past conversations, and hands off complex issues to humans.",
    tags: ["OpenAI", "Next.js", "LangChain"],
    iconKey: "Bot",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "AI Network Traffic Visualizer",
    description:
      "A tool that ingests network traffic and uses AI to detect anomalies, chart patterns in real time, and flag suspicious activity for review.",
    tags: ["Python", "AI", "Data Visualization"],
    iconKey: "Workflow",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Business Website Redesign",
    description:
      "A modern marketing site for a services firm, focused on clear storytelling, fast performance, and a design system that scales.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    iconKey: "Globe",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "NAPI FOOTWEAR E-commerce Store",
    description:
      "A full e-commerce experience built for a footwear brand, with product catalog, cart, checkout flow, and a database-backed order system.",
    tags: ["Next.js", "React", "JavaScript", "E-commerce", "Database"],
    iconKey: "LayoutTemplate",
    live: "https://example.com",
    github: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest text-blue-light uppercase">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Projects I have built.
          </h2>
        </ScrollReveal>

        <div className="md:hidden">
          <div className="mb-6 flex items-center justify-center gap-2 text-xs tracking-wide text-muted-dark">
            <ChevronDown className="h-4 w-4 animate-bounce" />
            Swipe to explore
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </div>
          <ProjectCarousel projects={projects} />
        </div>

        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = iconMap[project.iconKey];
            return (
              <ScrollReveal
                key={project.title}
                delay={index * 0.08}
                className="w-full"
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-blue/40 hover:-translate-y-1 sm:p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10 text-blue-light">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-light px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                    <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-muted-dark">
                      <ExternalLink className="h-4 w-4" />
                      NOT AVAILABLE NOW
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-white/30 hover:-translate-y-0.5"
                    >
                      <GitBranch className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue to-blue-glow transition-all duration-300 group-hover:w-full" />
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
