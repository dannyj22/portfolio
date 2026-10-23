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

const skillGroups: { category: string; skills: { name: string; icon: IconType }[] }[] = [
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
      { name: "Git/GitHub", icon: FaGitAlt },
      { name: "cPanel", icon: SiCpanel },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-muted-dark uppercase">
            <span className="text-blue">03 — Capabilities</span>
            <span className="hidden sm:inline">My toolkit</span>
          </div>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] font-medium tracking-tight text-foreground sm:text-5xl">
            The tools I build with.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.category} delay={index * 0.06}>
              <div>
                <h3 className="font-mono text-[11px] tracking-[0.18em] text-blue uppercase">
                  {group.category}
                </h3>
                <ul className="mt-4 border-t border-border">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between border-b border-border py-3 text-sm text-foreground"
                    >
                      <span>{skill.name}</span>
                      <skill.icon className="h-4 w-4 text-muted-dark" />
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
