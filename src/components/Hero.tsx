"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-6 pt-28 pb-10 sm:pt-32">
        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-between border-b border-border pb-4 font-mono text-[11px] tracking-[0.2em] text-muted-dark uppercase"
        >
          <span>Portfolio / 2026</span>
          <span className="hidden sm:inline">Abuja, Nigeria</span>
          <span className="sm:hidden">Available for work</span>
        </motion.div>

        {/* Main */}
        <div className="grid items-end gap-14 py-14 lg:grid-cols-[1.5fr_0.5fr] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="font-mono text-xs tracking-[0.18em] text-blue uppercase"
            >
              AI Automation Engineer &amp; Web Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="mt-6 font-serif text-6xl leading-[0.92] font-medium tracking-tight text-foreground sm:text-7xl lg:text-8xl"
            >
              Daniel
              <br />
              <span className="italic text-blue">Johnson.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
            >
              I design and build intelligent systems, automated workflows, and
              modern web experiences, from AI tooling to e-commerce stores that
              perform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <span className="border-b border-blue pb-0.5 text-blue">
                  Selected work
                </span>
                <ArrowUpRight className="h-4 w-4 text-blue transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="hidden lg:block"
          >
            <div className="border border-border bg-surface-light p-2">
              <img
                src="/images/my-pic.png"
                alt="Portrait of Daniel Johnson"
                className="w-full select-none grayscale contrast-[1.05]"
                draggable={false}
              />
            </div>
            <p className="mt-3 font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
              Daniel Johnson / 2026
            </p>
          </motion.div>
        </div>

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-between border-t border-border pt-5 font-mono text-[11px] tracking-[0.18em] text-muted-dark uppercase"
        >
          <a href="#about" className="inline-flex items-center gap-2 hover:text-foreground">
            <ArrowDown className="h-3.5 w-3.5" />
            Scroll to explore
          </a>
          <span className="hidden sm:inline">B.Sc. Computer Science</span>
        </motion.div>
      </div>
    </section>
  );
}
