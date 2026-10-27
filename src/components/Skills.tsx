import ScrollReveal from "./ScrollReveal";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiWordpress,
  SiElementor,
  SiWoocommerce,
  SiPython,
  SiCpanel,
} from "react-icons/si";
import {
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaGitAlt,
  FaRobot,
  FaTerminal,
  FaBrain,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const skillGroups: {
  category: string;
  skills: { name: string; icon: IconType }[];
}[] = [
  {
    category: "Web Development",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML/CSS", icon: SiHtml5 },
      { name: "Responsive Web Design", icon: FaMobileAlt },
    ],
  },
  {
    category: "CMS & E-Commerce",
    skills: [
      { name: "WordPress", icon: SiWordpress },
      { name: "Elementor", icon: SiElementor },
      { name: "WooCommerce", icon: SiWoocommerce },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "REST APIs", icon: FaServer },
      { name: "Databases", icon: FaDatabase },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "AI Automation", icon: FaRobot },
      { name: "Prompt Engineering", icon: FaTerminal },
      { name: "AI-Assisted Development", icon: FaBrain },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git / GitHub", icon: FaGitAlt },
      { name: "cPanel", icon: SiCpanel },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,4vw,72px)]">
        <ScrollReveal>
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-muted uppercase sm:text-[11px]">
            <span className="text-accent">03 / Capabilities</span>
            <span className="hidden sm:inline">My toolkit</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="display mt-8 text-[clamp(2.6rem,7vw,6.6rem)] text-foreground">
            The tools behind the{" "}
            <span className="serif-accent text-accent">work.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.category} delay={index * 0.04}>
              <div className="group flex h-full flex-col bg-background p-6 transition-colors duration-300 hover:bg-surface sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-border-light transition-colors group-hover:bg-accent" />
                </div>
                <h3 className="display mt-6 text-xl text-foreground sm:text-2xl">
                  {group.category}
                </h3>
                <ul className="mt-5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between border-b border-border/70 py-2.5 text-sm text-muted last:border-b-0"
                    >
                      <span className="transition-colors group-hover:text-foreground">
                        {skill.name}
                      </span>
                      <skill.icon className="h-3.5 w-3.5 shrink-0 text-muted-dark transition-colors group-hover:text-accent" />
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.24}>
            <a
              href="#contact"
              className="group flex h-full flex-col justify-between bg-accent p-6 text-background transition-colors duration-300 hover:bg-foreground sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em]">
                  06 / Next
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </div>
              <div className="mt-16">
                <p className="display text-2xl leading-[0.95] sm:text-3xl">
                  Have something in mind?
                </p>
                <p className="mt-3 font-mono text-[10px] tracking-[0.16em] uppercase opacity-70">
                  Let&apos;s build it together
                </p>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
