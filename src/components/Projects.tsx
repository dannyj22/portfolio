import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "AI Customer Support Agent",
    subtitle: "AI Automation",
    description:
      "An intelligent support assistant that automates responses to common queries, learns from past conversations, and hands off complex issues to humans.",
    tags: ["OpenAI", "Next.js", "LangChain"],
    live: "",
    github: "https://github.com/dannyj22",
  },
  {
    title: "AI Network Traffic Visualizer",
    subtitle: "Data & AI",
    description:
      "A tool that ingests network traffic and uses AI to detect anomalies, chart patterns in real time, and flag suspicious activity for review.",
    tags: ["Python", "AI", "Data Visualization"],
    live: "",
    github: "https://github.com/dannyj22",
  },
  {
    title: "Business Website Redesign",
    subtitle: "Web",
    description:
      "A modern marketing site for a services firm, focused on clear storytelling, fast performance, and a design system that scales.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "",
    github: "https://github.com/dannyj22",
  },
  {
    title: "NAPI FOOTWEAR E-commerce Store",
    subtitle: "E-commerce",
    description:
      "A full e-commerce experience built for a footwear brand, with product catalog, cart, checkout flow, and a database-backed order system.",
    tags: ["Next.js", "React", "JavaScript", "E-commerce", "Database"],
    live: "",
    github: "https://github.com/dannyj22",
  },
];

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-muted-dark uppercase">
            <span className="text-blue">02 — Selected work</span>
            <span className="hidden sm:inline">{projects.length} projects</span>
          </div>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] font-medium tracking-tight text-foreground sm:text-5xl">
            Things I&apos;ve designed, built, and shipped.
          </h2>
        </ScrollReveal>

        <div className="mt-12">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.05}>
              <article className="group grid gap-5 border-t border-border py-9 md:grid-cols-[3rem_1fr_auto] md:gap-10 md:py-10">
                <span className="font-mono text-sm text-muted-dark">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-blue uppercase">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-blue sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <p className="mt-4 font-mono text-[11px] tracking-wide text-muted-dark">
                    {project.tags.join("  ·  ")}
                  </p>
                </div>

                <div className="flex items-center gap-5 md:flex-col md:items-end md:gap-3">
                  <span className="font-mono text-[11px] tracking-wide text-muted-dark uppercase">
                    Live / soon
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-blue"
                  >
                    GitHub
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
