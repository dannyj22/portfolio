"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stats = [
  { value: "04", label: "Projects shipped" },
  { value: "19+", label: "Tools mastered" },
  { value: "24h", label: "Response time" },
];

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const NODE_COUNT = 22;
    const MAX_DISTANCE = 120;

    type Node = { x: number; y: number; vx: number; vy: number; r: number; primary: boolean };
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;

    const seed = () => {
      nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        r: i % 3 === 0 ? 5 : 3.5,
        primary: i % 3 === 0,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, width * dpr);
      canvas.height = Math.max(1, height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DISTANCE) {
            ctx.strokeStyle = `rgba(242, 239, 232, ${(1 - dist / MAX_DISTANCE) * 0.28})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        if (node.primary) {
          ctx.fillStyle = "#ff4b26";
          ctx.shadowColor = "rgba(255, 75, 38, 0.7)";
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = "#8a8377";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const step = () => {
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x <= 10 || node.x >= width - 10) node.vx *= -1;
        if (node.y <= 10 || node.y >= height - 10) node.vy *= -1;
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    resize();
    seed();

    if (reduced) {
      draw();
    } else {
      step();
    }

    const observer = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

function OrbitBadge() {
  return (
    <div className="absolute -top-8 -left-6 z-10 h-24 w-24 sm:-left-10 sm:h-28 sm:w-28 lg:top-auto lg:-bottom-10 lg:-left-12">
      <div className="absolute inset-0 grid place-items-center rounded-full bg-accent" />
      <svg
        viewBox="0 0 100 100"
        className="spin-slow absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <path id="orbit-circle" d="M50,14 a36,36 0 1,1 -0.02,0" />
        </defs>
        <text
          className="fill-background"
          style={{
            fontSize: "10px",
            letterSpacing: "3px",
            fontFamily: "var(--font-jetbrains-mono), monospace",
          }}
        >
          <textPath href="#orbit-circle">OPEN TO WORK / 2026 /</textPath>
        </text>
      </svg>
      <span
        aria-hidden="true"
        className="absolute inset-0 grid place-items-center text-lg text-background"
      >
        ↗
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute top-[-20%] right-[-10%] h-[55vw] w-[55vw] rounded-full bg-accent/10 blur-[150px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col px-[clamp(20px,4vw,72px)] pt-20 pb-4 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-between border-b border-border pb-4 font-mono text-[10px] tracking-[0.18em] text-muted uppercase sm:text-[11px]"
        >
          <span>Portfolio / 2026</span>
          <span className="hidden md:inline">Full Stack Engineer</span>
          <span>Abuja, NG</span>
        </motion.div>

        <div className="grid flex-1 items-center gap-12 py-6 sm:py-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="inline-flex items-center gap-3 border border-border px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-muted uppercase sm:text-[11px]"
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
              Full Stack Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease }}
              className="display mt-5 text-[clamp(2.9rem,7.2vw,6.6rem)] text-foreground"
            >
              <span className="block">Daniel</span>
              <span className="block">
                <span className="serif-accent text-accent">Johnson.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
              className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-[15px]"
            >
              I design and build complete web products, from React and Next.js
              front-ends to Node.js APIs, databases, and deployments that
              perform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-accent px-6 py-4 font-mono text-[11px] tracking-[0.16em] text-background uppercase transition-colors duration-300 hover:bg-foreground"
              >
                Selected work
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-border px-6 py-4 font-mono text-[11px] tracking-[0.16em] text-foreground uppercase transition-colors duration-300 hover:border-foreground"
              >
                Download CV
                <span aria-hidden="true">↓</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-7 grid max-w-lg grid-cols-3 border-t border-border"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`border-border py-4 sm:py-4 ${
                    index === 0 ? "pr-4 sm:pr-5" : "px-4 sm:px-5"
                  } ${index < stats.length - 1 ? "border-r" : ""} ${
                    index === 0 ? "pl-0 sm:pl-0" : ""
                  }`}
                >
                  <p className="display text-xl text-foreground sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[9px] tracking-[0.14em] text-muted-dark uppercase sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="relative mx-auto w-full max-w-md lg:max-w-[540px]"
          >
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-accent/15 blur-[90px]" />

            <div className="relative z-10 border border-border p-2">
              <div className="relative aspect-square overflow-hidden lg:aspect-auto lg:h-[500px]">
                <div className="grid-bg absolute inset-0 opacity-50" />
                <NetworkCanvas />
                <div className="absolute inset-x-4 top-4 flex items-center justify-between font-mono text-[9px] tracking-[0.18em] text-muted-dark uppercase">
                  <span className="flex items-center gap-2">
                    <span className="pulse-dot h-1 w-1 rounded-full bg-accent" />
                    Network / live
                  </span>
                  <span>22 nodes</span>
                </div>
                <div className="absolute right-4 bottom-4 font-mono text-[9px] tracking-[0.18em] text-muted-dark uppercase">
                  systems that connect
                </div>
              </div>
            </div>

            <span
              aria-hidden="true"
              className="absolute -right-3 -bottom-3 z-10 h-16 w-16 border-r border-b border-accent"
            />
            <span
              aria-hidden="true"
              className="absolute -top-3 -left-3 z-10 h-16 w-16 border-t border-l border-accent"
            />

            <OrbitBadge />

            <p className="relative z-10 mt-5 max-w-[18rem] font-mono text-[10px] leading-relaxed tracking-[0.16em] text-muted-dark uppercase lg:pl-24">
              Full stack, front to back, with an eye for detail.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-between border-t border-border pt-5 font-mono text-[10px] tracking-[0.18em] text-muted uppercase sm:text-[11px]"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 hover:text-foreground"
          >
            <span className="h-px w-8 bg-accent transition-all duration-300 group-hover:w-12" />
            Scroll to explore
          </a>
          <span className="hidden sm:inline">B.Sc. Computer Science</span>
          <span className="sm:hidden">Open to work</span>
        </motion.div>
      </div>

      <span className="pointer-events-none absolute top-1/2 right-5 hidden -translate-y-1/2 font-mono text-[10px] tracking-[0.4em] text-muted-dark uppercase [writing-mode:vertical-rl] lg:block">
        Available for select projects / 2026
      </span>
    </section>
  );
}
