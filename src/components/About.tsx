import ScrollReveal from "./ScrollReveal";

const details = [
  { label: "Degree", value: "B.Sc. Computer Science" },
  { label: "Focus", value: "AI Automation & Web Development" },
  { label: "Location", value: "Abuja, Nigeria" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-muted-dark uppercase">
            <span className="text-blue">01 — About</span>
            <span className="hidden sm:inline">Get to know me</span>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
          <ScrollReveal delay={0.1}>
            <div>
              <div className="border border-border bg-surface-light p-2">
                <img
                  src="/images/my-pic.png"
                  alt="Portrait of Daniel Johnson"
                  className="w-full select-none grayscale contrast-[1.05]"
                  draggable={false}
                />
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
                Based in Abuja, working worldwide
              </p>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.15}>
              <h2 className="font-serif text-4xl leading-[1.05] font-medium tracking-tight text-foreground sm:text-5xl">
                A developer focused on craft, clarity, and intelligent systems.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.22}>
              <p className="mt-8 text-lg leading-relaxed text-muted">
                I&apos;m Daniel Johnson, an AI automation engineer and web
                developer. I care about writing clean code, removing repetitive
                work through automation, and building digital products that feel
                effortless to use.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.28}>
              <p className="mt-5 text-base leading-relaxed text-muted">
                My work spans modern front-ends in Next.js and React, e-commerce
                builds on WordPress and WooCommerce, and AI-powered workflows in
                Python. I use state-of-the-art AI systems as co-pilots to ship
                production-ready applications faster without cutting corners.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.34}>
              <dl className="mt-10 border-t border-border">
                {details.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <dt className="font-mono text-[11px] tracking-[0.18em] text-muted-dark uppercase">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
