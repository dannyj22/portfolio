"use client";

import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden md:min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/3 h-[500px] w-[500px] rounded-full bg-blue/15 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-blue-light/10 blur-[128px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Desktop composition */}
      <div className="relative z-10 mx-auto hidden h-full w-full max-w-6xl items-center px-6 md:flex">
        {/* Left text column */}
        <div className="relative z-20 max-w-[350px] flex-shrink-0 lg:max-w-[355px]">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-xl font-bold tracking-wide text-white sm:text-2xl"
          >
            Hi I&apos;m
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-1 flex flex-col"
          >
            <span className="text-6xl font-black leading-none tracking-tight text-blue sm:text-7xl lg:text-7xl xl:text-[5.5rem]">
              Daniel
            </span>
            <span className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Johnson
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-sm leading-relaxed text-muted lg:text-base"
          >
            Building intelligent systems and modern digital experiences.
            Focused on AI automation, web development, and clean design that
            performs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-nowrap items-center gap-3"
          >
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-gradient-to-b from-white/20 to-white/5 px-5 py-3 text-sm font-medium whitespace-nowrap text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset] backdrop-blur-sm transition-colors hover:border-white/50 hover:from-white/25 hover:to-white/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-gradient-to-b from-white/20 to-white/5 px-5 py-3 text-sm font-medium whitespace-nowrap text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset] backdrop-blur-sm transition-colors hover:border-white/50 hover:from-white/25 hover:to-white/10"
            >
              <Briefcase className="h-4 w-4" />
              View Projects
            </a>
          </motion.div>
        </div>
      </div>

      {/* Role titles - section-level, aligned to page content right edge */}
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto hidden max-w-6xl px-6 md:block">
        <div className="flex justify-end pb-4 lg:pb-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col items-end gap-1 lg:gap-1.5"
          >
            <p className="text-base font-bold tracking-tighter text-blue sm:text-lg lg:text-xl xl:text-[22px]">
              AI AUTOMATION
            </p>
            <p className="text-base font-bold tracking-tighter text-blue sm:text-lg lg:text-xl xl:text-[22px]">
              ENGINEER
            </p>
            <p className="text-base font-bold tracking-tighter text-white sm:text-lg lg:text-xl xl:text-[22px]">
              WEB DEVELOPER
            </p>
          </motion.div>
        </div>
      </div>

      {/* Portrait - horizontally centered, bottom reaches hero bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="pointer-events-none absolute bottom-0 left-[50.5%] z-0 hidden -translate-x-1/2 translate-y-[2vh] md:block"
        style={{ height: "96vh", width: "101.3vh" }}
      >
        <div
          className="relative"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <div className="absolute top-1/4 left-1/2 -z-10 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/25 blur-[100px]" />
          <img
            src="/images/my-pic.png"
            alt="Daniel"
            className="pointer-events-none relative block h-full w-full select-none"
            style={{
              filter:
                "brightness(0.92) drop-shadow(3px 0 0 #fff) drop-shadow(-3px 0 0 #fff) drop-shadow(0 3px 0 #fff) drop-shadow(0 -3px 0 #fff)",
            }}
            draggable={false}
          />
        </div>
      </motion.div>

      {/* Mobile stacked composition */}
      <div className="relative z-10 flex w-full flex-col items-center px-6 pt-16 pb-0 md:hidden">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-lg font-medium tracking-wide text-muted"
          >
            Hi I&apos;m
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-1 flex flex-col items-center"
          >
            <span className="text-5xl font-black leading-none tracking-tight text-blue">
              Daniel
            </span>
            <span className="text-4xl font-bold leading-tight tracking-tight text-white">
              Johnson
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-3 w-fit rounded-full border border-border-light bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-muted"
          >
            AI AUTOMATION ENGINEER
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-2 text-base font-bold tracking-wide text-white"
          >
            WEB DEVELOPER
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <a
            href="/resume.pdf"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-gradient-to-b from-white/20 to-white/5 px-5 py-3 text-sm font-medium whitespace-nowrap text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset] backdrop-blur-sm transition-colors hover:border-white/50 hover:from-white/25 hover:to-white/10 sm:w-auto"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#work"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-gradient-to-b from-white/20 to-white/5 px-5 py-3 text-sm font-medium whitespace-nowrap text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset] backdrop-blur-sm transition-colors hover:border-white/50 hover:from-white/25 hover:to-white/10 sm:w-auto"
          >
            <Briefcase className="h-4 w-4" />
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-6 w-[85vw] max-w-[340px]"
        >
          <div className="absolute top-1/4 left-1/2 -z-10 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/25 blur-[80px]" />
          <img
            src="/images/my-pic.png"
            alt="Daniel"
            className="pointer-events-none relative w-full select-none"
            style={{
              filter:
                "brightness(0.92) drop-shadow(3px 0 0 #fff) drop-shadow(-3px 0 0 #fff) drop-shadow(0 3px 0 #fff) drop-shadow(0 -3px 0 #fff)",
            }}
            draggable={false}
          />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-dark transition-colors hover:text-foreground md:flex"
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-wide">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}