import ScrollReveal from "./ScrollReveal";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import {
  FaServer,
  FaPalette,
  FaPencilRuler,
  FaSitemap,
  FaUniversalAccess,
  FaFlask,
} from "react-icons/fa";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "REST APIs", icon: FaServer, color: "#22D3EE" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "UI Design", icon: FaPalette, color: "#A78BFA" },
      { name: "Prototyping", icon: FaPencilRuler, color: "#F59E0B" },
      { name: "Design Systems", icon: FaSitemap, color: "#34D399" },
      { name: "Accessibility", icon: FaUniversalAccess, color: "#10B981" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Testing", icon: FaFlask, color: "#38BDF8" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest text-blue-light uppercase">
            Skills and services
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