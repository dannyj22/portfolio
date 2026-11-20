import ScrollReveal from "./ScrollReveal";

const details = [
  { label: "Degree", value: "B.Sc. Computer Science" },
  { label: "Focus", value: "Full Stack Web Development" },
  { label: "Location", value: "Abuja, Nigeria" },
];

const facts = [
  "Based in Abuja",
  "Working worldwide",
  "Open to select projects",
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,4vw,72px)]">
        <ScrollReveal>
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-muted uppercase sm:text-[11px]">
            <span className="text-accent">01 / About</span>
            <span className="hidden sm:inline">Get to know me</span>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <ScrollReveal>
              <h2 className="display text-[clamp(2.15rem,5.2vw,4.6rem)] text-foreground">
                I build products end to end, from the{" "}
                <span className="serif-accent text-accent">pixel</span> to the{" "}
                <span className="serif-accent text-accent">database.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                I&apos;m Daniel Johnson, a full stack engineer. I care about
                clean code, solid architecture, and building digital products
                that feel effortless to use.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                My work spans modern front-ends in Next.js and React, REST APIs
                and services in Node.js and Python, data layers with SQL and
                NoSQL, and e-commerce builds on WordPress and WooCommerce. I use
                state-of-the-art AI systems as co-pilots to ship
                production-ready applications faster without cutting corners.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.22}>
              <div className="mt-10 grid grid-cols-1 border-t border-border sm:grid-cols-3">
                {facts.map((fact) => (
                  <div
                    key={fact}
                    className="border-b border-border py-4 pr-4 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pl-5 sm:first:pl-0"
                  >
                    <span className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                      {fact}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.28}>
              <dl className="mt-8 border-t border-border">
                {details.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
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

          <ScrollReveal delay={0.15}>
            <div className="relative lg:sticky lg:top-28">
              <div className="relative border border-border p-2">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/my-pic.png"
                    alt="Portrait of Daniel Johnson"
                    className="aspect-[4/5] w-full select-none object-cover object-top grayscale contrast-125"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center bg-accent font-mono text-[9px] font-bold text-background">
                      DJ
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-foreground uppercase">
                      Daniel Johnson / 2026
                    </span>
                  </div>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="absolute -right-3 -bottom-3 h-16 w-16 border-r border-b border-accent"
              />
              <span
                aria-hidden="true"
                className="absolute -top-3 -left-3 h-16 w-16 border-t border-l border-accent"
              />
              <p className="mt-6 max-w-xs font-mono text-[10px] leading-relaxed tracking-[0.16em] text-muted-dark uppercase">
                Engineer, builder, and relentless optimiser of small things.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
