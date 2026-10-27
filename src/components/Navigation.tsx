"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work", index: "01" },
  { label: "About", href: "#about", index: "02" },
  { label: "Capabilities", href: "#skills", index: "03" },
  { label: "Writing", href: "#blog", index: "04" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/dannyj22" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-[clamp(20px,4vw,72px)] py-4">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center bg-accent font-mono text-[11px] font-bold tracking-tight text-background transition-transform duration-300 group-hover:rotate-6">
              DJ
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-foreground">
              Daniel Johnson
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex items-baseline gap-1.5 font-mono text-[11px] tracking-[0.16em] text-muted uppercase transition-colors hover:text-foreground"
                >
                  <span className="text-[9px] text-muted-dark transition-colors group-hover:text-accent">
                    {link.index}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-muted uppercase md:flex">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
              Available for work
            </span>
            <a
              href="#contact"
              className="hidden items-center gap-2 border border-foreground px-4 py-2 font-mono text-[10px] tracking-[0.16em] text-foreground uppercase transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-background sm:inline-flex"
            >
              Let&apos;s talk
              <span aria-hidden="true">↗</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="relative z-[60] flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block h-px w-6 bg-foreground"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block h-px w-6 bg-foreground"
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col bg-background px-5 pt-24 pb-8 sm:px-8 lg:hidden"
          >
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
            <nav className="relative flex flex-1 flex-col justify-center">
              <ul>
                {[...navLinks, { label: "Contact", href: "#contact", index: "05" }].map(
                  (link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.08 + i * 0.06 }}
                      className="border-b border-border"
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-baseline justify-between py-5"
                      >
                        <span className="display text-[13vw] text-foreground transition-colors group-hover:text-accent">
                          {link.label}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.16em] text-muted-dark">
                          {link.index}
                        </span>
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </nav>

            <div className="relative flex items-center justify-between border-t border-border pt-6">
              <div className="flex gap-5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <span className="font-mono text-[10px] tracking-[0.16em] text-muted-dark uppercase">
                Abuja, NG
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
