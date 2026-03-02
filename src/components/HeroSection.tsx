"use client";

import { motion } from "framer-motion";

function FloatingMockups() {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-[340px] mt-16">
      {/* Desktop mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[320px] h-[200px] rounded-xl border border-border-light bg-bg-surface/60 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/10"
      >
        <div className="h-6 bg-bg-card flex items-center gap-1.5 px-3">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <div className="p-4 space-y-3">
          <div className="h-3 w-2/3 rounded bg-gradient-to-r from-primary/30 to-secondary/20" />
          <div className="h-2 w-full rounded bg-border-light" />
          <div className="h-2 w-4/5 rounded bg-border-light" />
          <div className="flex gap-2 mt-4">
            <div className="h-16 flex-1 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5" />
            <div className="h-16 flex-1 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5" />
            <div className="h-16 flex-1 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5" />
          </div>
        </div>
      </motion.div>

      {/* Tablet mockup */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-4 lg:left-12 top-16 w-[160px] h-[210px] rounded-xl border border-border-light bg-bg-surface/50 backdrop-blur-sm overflow-hidden shadow-xl shadow-secondary/10 -rotate-6"
      >
        <div className="p-3 space-y-2">
          <div className="h-20 rounded-lg bg-gradient-to-br from-secondary/25 to-primary/10" />
          <div className="h-2 w-3/4 rounded bg-border-light" />
          <div className="h-2 w-full rounded bg-border-light" />
          <div className="h-2 w-1/2 rounded bg-border-light" />
          <div className="h-8 w-full rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 mt-2" />
        </div>
      </motion.div>

      {/* Mobile mockup */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-4 lg:right-16 top-20 w-[100px] h-[180px] rounded-2xl border border-border-light bg-bg-surface/50 backdrop-blur-sm overflow-hidden shadow-xl shadow-accent/10 rotate-6"
      >
        <div className="h-4 bg-bg-card" />
        <div className="p-2 space-y-2">
          <div className="h-14 rounded-lg bg-gradient-to-br from-accent/25 to-primary/10" />
          <div className="h-1.5 w-3/4 rounded bg-border-light" />
          <div className="h-1.5 w-full rounded bg-border-light" />
          <div className="h-6 w-full rounded-lg bg-gradient-to-r from-primary/30 to-secondary/20 mt-1" />
          <div className="h-1.5 w-1/2 rounded bg-border-light" />
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px]"
          style={{ animation: "float1 20s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[130px]"
          style={{ animation: "float2 25s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]"
          style={{ animation: "float3 22s ease-in-out infinite" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            We transform complex ideas into{" "}
            <span className="bg-gradient-to-r from-primary-light via-secondary to-secondary-light bg-clip-text text-transparent">
              beautiful digital products
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          By joining forces with tech startups and product teams like yours,
          using user-centered design sprints
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/uniqorn-design/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Talk
          </a>
          <a
            href="/uniqorn-design/work"
            className="px-8 py-4 rounded-full border border-border-light text-text hover:border-primary-light hover:bg-primary-dim transition-all duration-300"
          >
            See Our Work
          </a>
        </motion.div>

        <FloatingMockups />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
