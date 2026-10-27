import ScrollReveal from "./ScrollReveal";
import { Clock, MapPin } from "lucide-react";

const EMAIL = "oluwatomijohnson2004@gmail.com";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-accent text-background"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-background/15" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-background/10" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(20px,4vw,72px)] py-20 sm:py-28">
        <ScrollReveal>
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase sm:text-[11px]">
            <span>05 / Contact</span>
            <span className="flex items-center gap-2">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-background" />
              Available for work
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="display mt-10 text-[clamp(2.9rem,9.5vw,9rem)] text-background">
            <span className="block">Let&apos;s build</span>
            <span className="block">something</span>
            <span className="block">
              that <span className="serif-accent">thinks.</span>
            </span>
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 border-t border-background/25 pt-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <ScrollReveal delay={0.1}>
            <div>
              <p className="max-w-md text-base leading-relaxed text-background/80 sm:text-lg">
                Have a project, an idea, or a workflow that should run itself?
                I&apos;m open to collaborations, AI projects, and web builds.
                Reach out and I&apos;ll get back to you soon.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="group mt-10 inline-flex max-w-full items-start gap-3 border-b border-background/40 pb-2 transition-colors hover:border-background"
              >
                <span className="min-w-0 font-mono text-[clamp(0.95rem,2.1vw,1.65rem)] break-all tracking-tight">
                  {EMAIL}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.18em] uppercase opacity-70">
                      Response
                    </p>
                    <p className="mt-1 text-sm font-medium">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.18em] uppercase opacity-70">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-medium">Abuja, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-background/25 pt-6">
                <a
                  href="https://github.com/dannyj22"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 items-center justify-center border border-background/40 transition-colors hover:bg-background hover:text-accent"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center border border-background/40 transition-colors hover:bg-background hover:text-accent"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-2 border border-background/40 px-4 py-3 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors hover:bg-background hover:text-accent"
                >
                  Download CV
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
