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

const skillGroups = [
  {
    category: "Web Development",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
      { name: "Responsive Web Design", icon: FaMobileAlt, color: "#38BDF8" },
    ],
  },
  {
    category: "CMS & E-Commerce",
    skills: [
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
      { name: "Elementor", icon: SiElementor, color: "#92003B" },
      { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "REST APIs", icon: FaServer, color: "#22D3EE" },
      { name: "Databases", icon: FaDatabase, color: "#F59E0B" },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "AI Automation", icon: FaRobot, color: "#10B981" },
      { name: "Prompt Engineering", icon: FaTerminal, color: "#A78BFA" },
      { name: "AI-Assisted Development", icon: FaBrain, color: "#EC4899" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git/GitHub", icon: FaGitAlt, color: "#F05032" },
      { name: "cPanel", icon: SiCpanel, color: "#FF6C2C" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest text-blue-light uppercase">
            My toolkit
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            What I bring to the table.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.category} delay={index * 0.08}>
              <div className="group rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-blue/40 sm:p-8">
                <h3 className="text-lg font-semibold tracking-tight">
                  {group.category}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border-light bg-surface-light px-3 py-1.5 text-xs text-muted transition-colors duration-200 group-hover:border-blue/30 group-hover:text-foreground"
                    >
                      <skill.icon className="h-3.5 w-3.5" style={{ color: skill.color }} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}