import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
    <section id="blog" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest text-blue-light uppercase">
            Writing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Notes and ideas.
          </h2>
        </ScrollReveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {posts.map((post, index) => (
            <ScrollReveal key={post.title} delay={index * 0.08}>
              <a
                href="#"
                className="group flex flex-col gap-2 py-8 transition-colors duration-200 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="w-24 shrink-0 text-sm text-muted-dark">
                  {post.date}
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-blue-light">
                    {post.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </span>
                </span>
                <span className="hidden text-sm text-muted-dark transition-transform duration-200 group-hover:translate-x-1 sm:block">
                  Read
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-blue-light sm:hidden">
                  Read
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}