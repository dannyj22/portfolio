"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#skills" },
  { label: "Writing", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/dannyj22" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Email", href: "mailto:oluwatomijohnson2004@gmail.com" },
];

export default function Footer() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

    setTime(format());
    const timer = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-border py-14 sm:py-16">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[80vw] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(20px,4vw,72px)]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              Portfolio / 2026
            </p>
            <a
              href="#home"
              className="display mt-5 block text-[clamp(2.6rem,7vw,5.8rem)] text-foreground transition-colors hover:text-accent"
            >
              Daniel <span className="serif-accent">Johnson.</span>
            </a>
            <p className="mt-4 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
              AI Automation Engineer · Web Developer
            </p>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-20">
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
                Menu
              </p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-2.5">
                {socials.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] tracking-[0.14em] text-muted-dark uppercase">
            © {new Date().getFullYear()} Daniel Johnson. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] tracking-[0.14em] text-muted-dark uppercase">
              Abuja, NG · {time} WAT
            </span>
            <a
              href="#home"
              className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-muted uppercase hover:text-foreground"
            >
              Back to top
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
