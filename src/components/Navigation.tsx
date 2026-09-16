"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-4 pb-3">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 text-sm font-black text-background">
            DJ
          </div>
          <span className="hidden text-lg font-semibold text-foreground sm:block">
            Daniel Johnson
          </span>
        </a>

<ul className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1 rounded-lg px-3 py-2.5 text-sm text-muted transition-all duration-200 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="hidden rounded-lg border border-white/30 bg-gradient-to-b from-white/20 to-white/5 px-5 py-2 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset] backdrop-blur-sm transition-colors hover:border-white/50 hover:from-white/25 hover:to-white/10 md:inline-flex"
            >
              Get in touch
            </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col items-center justify-center gap-1.5 p-2.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-px w-5 bg-foreground"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-5 bg-foreground"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-px w-5 bg-foreground"
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
          <div className="border-t border-border px-6 py-4">
              <a href="#home" className="mb-3 flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 text-sm font-black text-background">
                  DJ
                </div>
                <span className="text-lg font-semibold text-foreground">
                  Daniel Johnson
                </span>
              </a>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 block rounded-lg border border-white/30 bg-gradient-to-b from-white/20 to-white/5 px-5 py-3 text-center text-sm font-medium text-white"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
