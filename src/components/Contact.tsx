import { Mail, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest text-blue-light uppercase">
            Let&apos;s Connect
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Start a Project
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left panel */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-10">
              <p className="max-w-md text-base leading-relaxed text-muted">
                I am always open to exploring new engineering collaborations,
                visual interface designs, AI projects, and opportunities to
                build creative software. Feel free to reach out!
              </p>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
                    <Mail className="h-5 w-5 text-blue-light" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium tracking-wide text-muted-dark uppercase">
                      Email
                    </span>
                    <a
                      href="mailto:oluwatomijohnson2004@gmail.com"
                      className="mt-0.5 -mx-2 inline-block px-2 py-1.5 text-sm font-semibold break-all text-foreground hover:text-blue-light sm:break-normal"
                    >
                      oluwatomijohnson2004@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
                    <MapPin className="h-5 w-5 text-blue-light" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium tracking-wide text-muted-dark uppercase">
                      Location
                    </span>
                    <span className="mt-0.5 text-sm font-semibold text-foreground">
                      Abuja, Nigeria
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-blue-light hover:bg-blue-light/10 hover:text-foreground"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-blue-light hover:bg-blue-light/10 hover:text-foreground"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right card */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center justify-center gap-6 rounded-xl border border-border bg-surface px-8 py-12 text-center shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background">
                <Mail className="h-7 w-7 text-blue-light" />
              </div>
              <div className="max-w-sm">
                <h3 className="text-xl font-bold text-foreground">
                  Get in Touch
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Send me an email directly and I&apos;ll get back to you as soon
                  as possible!
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-medium tracking-wide text-muted-dark uppercase">
                  Email
                </span>
                <a
                  href="mailto:oluwatomijohnson2004@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold break-all text-foreground transition-colors hover:border-blue-light hover:text-blue-light"
                >
                  <Mail className="h-4 w-4 shrink-0 text-blue-light" />
                  oluwatomijohnson2004@gmail.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
