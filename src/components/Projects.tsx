import ScrollReveal from "./ScrollReveal";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "NAPI Footwear E-commerce Store",
    subtitle: "E-commerce",
    description:
      "A complete e-commerce experience for a premium footwear label from Abuja: product catalog, collections, cart and checkout flow, all built on Next.js with a database-backed order system.",
    tags: ["Next.js", "React", "Database", "Cart & Checkout"],
    year: "2026",
    live: "https://napifootwear.vercel.app/",
    github: "https://github.com/dannyj22",
  },
  {
    title: "Alder & Ash Property Platform",
    subtitle: "Full Stack + AI",
    description:
      "A boutique real-estate platform: property search, neighborhood guides, and a plain-English AI concierge that shortlists homes and books viewings, built end to end on Next.js.",
    tags: ["Next.js", "AI Assistant", "Search & Booking"],
    year: "2026",
    live: "https://alder-and-ash-xi.vercel.app/",
    github: "https://github.com/dannyj22",
  },
  {
    title: "AI Customer Support Agent",
    subtitle: "Full Stack + AI",
    description:
      "A complete support platform: React dashboard and chat experience on Next.js, backed by a Node.js API that automates responses to common queries and hands off complex issues to humans.",
    tags: ["Next.js", "Node.js", "OpenAI", "REST API"],
    year: "2026",
    live: "",
    github: "https://github.com/dannyj22",
  },
  {
    title: "AI Network Traffic Visualizer",
    subtitle: "Data & Dashboards",
    description:
      "A tool that ingests network traffic through a Python service, detects anomalies with AI, and renders real-time charts and flagged activity in a clean front-end.",
    tags: ["Python", "APIs", "Data Visualization"],
    year: "2026",
    live: "",
    github: "https://github.com/dannyj22",
  },
  {
    title: "Business Website Redesign",
    subtitle: "Frontend",
    description:
      "A modern marketing site for a services firm, focused on clear storytelling, fast performance, and a component-driven design system that scales.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    year: "2025",
    live: "",
    github: "https://github.com/dannyj22",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative scroll-mt-20 border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,4vw,72px)]">
        <ScrollReveal>
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-muted uppercase sm:text-[11px]">
            <span className="text-accent">02 / Selected work</span>
            <span>{String(projects.length).padStart(2, "0")} projects</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display text-[clamp(2.6rem,7vw,6.6rem)] text-foreground">
              Selected <span className="serif-accent text-accent">work.</span>
            </h2>
            <a
              href="https://github.com/dannyj22"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 border-b border-border pb-1 font-mono text-[10px] tracking-[0.16em] text-muted uppercase transition-colors hover:border-accent hover:text-foreground"
            >
              All repositories
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-12 border-b border-border">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.05}>
              <a
                href={project.live || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[2rem_1fr] gap-x-4 border-t border-border py-7 transition-all duration-500 hover:bg-surface/70 hover:px-4 sm:grid-cols-[2.5rem_1fr_auto] sm:gap-x-8 sm:py-9"
              >
                <span className="pt-1 font-mono text-[11px] text-muted-dark transition-colors group-hover:text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
                    {project.subtitle}
                  </p>
                  <h3 className="display mt-2 text-[clamp(1.6rem,3.4vw,3rem)] text-foreground transition-colors duration-300 group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
                    {project.description}
                  </p>
                  <p className="mt-4 font-mono text-[10px] tracking-[0.12em] text-muted-dark uppercase">
                    {project.tags.join("  ·  ")}
                  </p>
                </div>

                <div className="col-span-2 mt-5 flex items-center justify-between gap-4 sm:col-span-1 sm:mt-0 sm:flex-col sm:items-end sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-[10px] tracking-[0.16em] uppercase ${
                        project.live ? "text-foreground" : "text-muted-dark"
                      }`}
                    >
                      {project.live ? "Live site" : "Live / soon"}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-muted-dark uppercase">
                      {project.year}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 place-items-center border border-border text-sm text-muted transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-background"
                  >
                    ↗
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
