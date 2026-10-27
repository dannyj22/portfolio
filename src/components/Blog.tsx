import ScrollReveal from "./ScrollReveal";

const posts = [
  {
    date: "Jan 2026",
    read: "6 min",
    title: "Building fast interfaces with modern CSS",
    excerpt:
      "A practical look at layout systems, container queries, and the techniques that keep rendering smooth.",
  },
  {
    date: "Nov 2025",
    read: "5 min",
    title: "Designing with a dark-first approach",
    excerpt:
      "Why many interfaces work better in the dark and how to build a dark theme that feels consistent.",
  },
  {
    date: "Sep 2025",
    read: "4 min",
    title: "From sketch to shipped product",
    excerpt:
      "Notes on my workflow for turning a rough idea into a reliable, maintainable web application.",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative scroll-mt-20 border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,4vw,72px)]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <ScrollReveal>
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-muted uppercase sm:text-[11px] lg:justify-start lg:gap-3">
                <span className="text-accent">04 / Writing</span>
                <span className="lg:hidden">Notes &amp; ideas</span>
              </div>
              <h2 className="display mt-8 text-[clamp(2.4rem,5.5vw,4.6rem)] text-foreground">
                Notes &amp;{" "}
                <span className="serif-accent text-accent">ideas.</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
                Short, practical notes on building for the web, designing
                systems, and using AI without losing the craft.
              </p>
              <a
                href="#"
                className="group mt-8 inline-flex items-center gap-2 border-b border-border pb-1 font-mono text-[10px] tracking-[0.16em] text-muted uppercase transition-colors hover:border-accent hover:text-foreground"
              >
                All writing
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </ScrollReveal>
          </div>

          <div className="border-t border-border">
            {posts.map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 0.05}>
                <a
                  href="#"
                  className="group grid gap-3 border-b border-border py-7 transition-all duration-500 hover:px-3 sm:grid-cols-[5.5rem_1fr_1.5rem] sm:items-start sm:gap-6 sm:py-8"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-muted-dark uppercase">
                    {post.date}
                  </span>
                  <span>
                    <span className="display block text-xl leading-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                      {post.title}
                    </span>
                    <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </span>
                    <span className="mt-3 block font-mono text-[10px] tracking-[0.14em] text-muted-dark uppercase">
                      {post.read} read
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden text-sm text-muted-dark transition-all duration-300 group-hover:rotate-45 group-hover:text-accent sm:block"
                  >
                    ↗
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
