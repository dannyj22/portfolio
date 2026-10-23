import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
    <section id="contact" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-muted-dark uppercase">
            <span className="text-blue">05 — Contact</span>
            <span className="hidden sm:inline">Available for work</span>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal delay={0.1}>
            <div>
              <h2 className="font-serif text-4xl leading-[1.02] font-medium tracking-tight text-foreground sm:text-5xl">
                Have a project in mind?
                <br />
                <span className="italic text-blue">Let&apos;s talk.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                I&apos;m always open to new collaborations, design work, AI
                projects, and opportunities to build something useful. Reach out
                and I&apos;ll get back to you soon.
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="group mt-10 inline-flex items-center gap-2 font-serif text-2xl font-medium tracking-tight text-foreground transition-colors hover:text-blue sm:text-3xl"
              >
                <span className="border-b border-border pb-1 break-all group-hover:border-blue">
                  {EMAIL}
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-blue" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <div className="flex h-full flex-col justify-between border border-border bg-surface-light p-8">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-1 block text-sm font-medium break-all text-foreground hover:text-blue"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-border pt-6">
                <a
                  href="https://github.com/dannyj22"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-10 w-10 items-center justify-center border border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-10 w-10 items-center justify-center border border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <span className="ml-auto font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
                  Open to work
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
