"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import Container from "./ui/Container";
import { site } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pt-40 pb-28 sm:pt-44 sm:pb-32"
    >
      {/* GIS-style coordinate grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid bg-grid opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy"
        aria-hidden="true"
      />

      {/* Slow-drifting data-node accents */}
      <svg
        className="pointer-events-none absolute -right-10 top-24 h-64 w-64 opacity-30 animate-drift"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <line x1="20" y1="30" x2="120" y2="80" stroke="#1C9C93" strokeWidth="1" />
        <line x1="120" y1="80" x2="90" y2="160" stroke="#1C9C93" strokeWidth="1" />
        <line x1="120" y1="80" x2="180" y2="60" stroke="#1C9C93" strokeWidth="1" />
        <circle cx="20" cy="30" r="3" fill="#1C9C93" />
        <circle cx="120" cy="80" r="4" fill="#1C9C93" />
        <circle cx="90" cy="160" r="3" fill="#1C9C93" />
        <circle cx="180" cy="60" r="3" fill="#1C9C93" />
      </svg>

      <Container className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div>
            <motion.p
              variants={item}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-teal-light"
            >
              <span className="h-px w-8 bg-teal-light/60" />
              Research &middot; Data &middot; Monitoring &amp; Evaluation
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.4rem]"
            >
              {site.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 font-display text-xl italic text-white/80 sm:text-2xl"
            >
              {site.role}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {site.specialties.map((s) => (
                <span
                  key={s}
                  className="rounded-sm border border-white/15 bg-white/[0.04] px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-white/70"
                >
                  {s}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/70"
            >
              {site.intro}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-sm bg-teal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-light"
              >
                View My Experience
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={site.cvFile}
                download
                className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {site.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" /> {site.email}
              </span>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative mx-auto w-full max-w-[320px]">
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 rounded-full border border-dashed border-teal-light/40" />
              <div className="absolute inset-6 rounded-full border border-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-[220px] w-[220px] items-center justify-center rounded-full bg-gradient-to-br from-navy-light to-navy-deep ring-1 ring-white/10">
                  <span className="font-display text-5xl font-medium text-white">
                    IKB
                  </span>
                </div>
              </div>
              {/* Corner survey-mark ticks */}
              {["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map(
                (pos) => (
                  <span
                    key={pos}
                    className={`absolute ${pos} h-3 w-3 border-teal-light/70 ${
                      pos.includes("top") ? "border-t" : "border-b"
                    } ${pos.includes("left") ? "border-l" : "border-r"}`}
                  />
                )
              )}
            </div>
            <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
              Ph.D. Scholar &middot; Peshawar, Pakistan
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
