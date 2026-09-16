import { Code2, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest text-blue-light uppercase">
            About me
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            A developer focused on craft and clarity.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-blue/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
                <img
                  src="/images/my-pic.png"
                  alt="Portrait of Daniel"
                  className="w-full select-none"
                  style={{ filter: "brightness(0.94)" }}
                  draggable={false}
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col justify-center">
            <ScrollReveal delay={0.15}>
              <h3 className="text-2xl font-bold tracking-tight">
                Hi, I&apos;m Daniel Johnson.
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                I am a developer focused on AI automation and modern web
                development. I have a deep passion for writing clean code,
                automating workflows, and staying at the cutting edge of
                emerging technology.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="mt-6 text-base leading-relaxed text-muted-dark">
                My core expertise lies in AI automation and web technologies. I
                work with state-of-the-art AI systems as powerful co-pilots to
                construct, detail, and deploy production-ready web
                applications, landing pages, and tools that feel natural to
                people.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div className="mt-10 flex max-w-md flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
                    <GraduationCap className="h-5 w-5 text-blue-light" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-muted-dark uppercase">
                      Degree
                    </p>
                    <p className="mt-0.5 text-sm font-semibold whitespace-normal text-foreground sm:whitespace-nowrap">
                      B.Sc. Computer Science
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
                    <Code2 className="h-5 w-5 text-blue-light" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-muted-dark uppercase">
                      Focus areas
                    </p>
                    <p className="mt-0.5 text-sm font-semibold whitespace-normal text-foreground sm:whitespace-nowrap">
                      AI Automation &amp; Web Development
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}