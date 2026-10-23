import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    date: "Jan 2026",
    title: "Building fast interfaces with modern CSS",
    excerpt:
      "A practical look at layout systems, container queries, and the techniques that keep rendering smooth.",
  },
  {
    date: "Nov 2025",
    title: "Designing with a dark-first approach",
    excerpt:
      "Why many interfaces work better in the dark and how to build a dark theme that feels consistent.",
  },
  {
    date: "Sep 2025",
    title: "From sketch to shipped product",
    excerpt:
      "Notes on my workflow for turning a rough idea into a reliable, maintainable web application.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-muted-dark uppercase">
            <span className="text-blue">04 — Writing</span>
            <span className="hidden sm:inline">Notes &amp; ideas</span>
          </div>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] font-medium tracking-tight text-foreground sm:text-5xl">
            Notes and ideas.
          </h2>
        </ScrollReveal>

        <div className="mt-12 border-t border-border">
          {posts.map((post, index) => (
            <ScrollReveal key={post.title} delay={index * 0.05}>
              <a
                href="#"
                className="group grid gap-2 border-b border-border py-8 transition-colors duration-200 sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="font-mono text-[11px] tracking-wide text-muted-dark uppercase">
                  {post.date}
                </span>
                <span>
                  <span className="block font-serif text-xl font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-blue sm:text-2xl">
                    {post.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </span>
                </span>
                <span className="hidden items-center gap-1 text-sm font-medium text-muted-dark transition-colors group-hover:text-blue sm:inline-flex">
                  Read
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
