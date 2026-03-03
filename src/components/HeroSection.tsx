"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── Transformation Illustration ───
   Shows chaotic "idea" elements morphing into polished product screens.
   Three stages animate in sequence:
   1. Scattered abstract shapes (complexity)
   2. Shapes converge and organize
   3. Clean product mockups emerge
*/

function TransformationScene() {
  const progress = useMotionValue(0);

  useEffect(() => {
    // Animate the transformation: 0 = chaos, 1 = product
    const controls = animate(progress, 1, {
      duration: 3,
      delay: 1,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [progress]);

  // Derived transforms
  const chaosOpacity = useTransform(progress, [0, 0.3, 0.6], [1, 1, 0]);
  const productOpacity = useTransform(progress, [0.4, 0.7, 1], [0, 0.5, 1]);
  const productScale = useTransform(progress, [0.4, 1], [0.8, 1]);
  const convergence = useTransform(progress, [0, 0.5], [1, 0]);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[480px] mt-12 md:mt-16">
      {/* ── Chaos Layer: scattered abstract nodes ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: chaosOpacity }}
      >
        {/* Scattered idea nodes */}
        {[
          { x: "8%", y: "15%", size: 60, color: "#7C3AED", delay: 0 },
          { x: "75%", y: "10%", size: 45, color: "#06B6D4", delay: 0.1 },
          { x: "20%", y: "70%", size: 50, color: "#F59E0B", delay: 0.2 },
          { x: "85%", y: "65%", size: 55, color: "#10B981", delay: 0.15 },
          { x: "45%", y: "20%", size: 40, color: "#EC4899", delay: 0.25 },
          { x: "60%", y: "75%", size: 35, color: "#8B5CF6", delay: 0.3 },
          { x: "30%", y: "45%", size: 48, color: "#06B6D4", delay: 0.1 },
          { x: "70%", y: "40%", size: 42, color: "#F59E0B", delay: 0.2 },
        ].map((node, i) => (
          <motion.div
            key={`chaos-${i}`}
            className="absolute"
            style={{
              left: node.x,
              top: node.y,
              x: useTransform(convergence, [1, 0], [(Math.random() - 0.5) * 80, 0]),
              y: useTransform(convergence, [1, 0], [(Math.random() - 0.5) * 60, 0]),
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + node.delay, duration: 0.6, type: "spring" }}
          >
            <IdeaNode size={node.size} color={node.color} index={i} />
          </motion.div>
        ))}

        {/* Connecting chaos lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 480">
          {[
            "M 64 72 Q 200 200 360 96",
            "M 600 48 Q 400 150 240 336",
            "M 160 336 Q 350 280 480 360",
            "M 680 312 Q 500 250 360 192",
            "M 240 216 Q 400 180 560 192",
          ].map((d, i) => (
            <motion.path
              key={`line-${i}`}
              d={d}
              fill="none"
              stroke="rgba(124,58,237,0.15)"
              strokeWidth={1.5}
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.15, ease: "easeOut" }}
            />
          ))}
        </svg>
      </motion.div>

      {/* ── Convergence particles ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: useTransform(progress, [0.2, 0.5, 0.7], [0, 1, 0]) }}
      >
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          const radius = 200 + Math.random() * 100;
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full"
              style={{
                backgroundColor: ["#7C3AED", "#06B6D4", "#F59E0B", "#10B981"][i % 4],
                x: useTransform(progress, [0.2, 0.6], [Math.cos(angle) * radius, 0]),
                y: useTransform(progress, [0.2, 0.6], [Math.sin(angle) * radius, 0]),
                scale: useTransform(progress, [0.2, 0.5, 0.65], [0.5, 1.5, 0]),
              }}
            />
          );
        })}
      </motion.div>

      {/* ── Product Layer: polished screens ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: productOpacity, scale: productScale }}
      >
        {/* Main desktop app */}
        <motion.div
          className="relative w-[340px] md:w-[420px] z-10"
          initial={{ y: 20 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="rounded-xl border border-border-light bg-bg-surface/80 backdrop-blur-md overflow-hidden shadow-2xl shadow-primary/20">
            {/* Browser chrome */}
            <div className="h-8 bg-bg-card/90 flex items-center gap-1.5 px-3 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <div className="ml-3 h-4 w-32 rounded-md bg-border/50" />
            </div>
            {/* App content */}
            <div className="p-5 space-y-3">
              {/* Navigation bar mockup */}
              <div className="flex items-center justify-between mb-4">
                <div className="h-4 w-20 rounded bg-gradient-to-r from-primary/40 to-primary/20" />
                <div className="flex gap-3">
                  <div className="h-3 w-12 rounded bg-border/40" />
                  <div className="h-3 w-12 rounded bg-border/40" />
                  <div className="h-3 w-12 rounded bg-border/40" />
                </div>
              </div>
              {/* Hero area */}
              <div className="h-3 w-3/4 rounded bg-text/20" />
              <div className="h-2 w-full rounded bg-border/30" />
              <div className="h-2 w-2/3 rounded bg-border/30" />
              {/* Cards row */}
              <div className="flex gap-2 mt-4">
                <div className="h-20 flex-1 rounded-lg bg-gradient-to-br from-primary/25 to-primary/5 border border-primary/10" />
                <div className="h-20 flex-1 rounded-lg bg-gradient-to-br from-secondary/25 to-secondary/5 border border-secondary/10" />
                <div className="h-20 flex-1 rounded-lg bg-gradient-to-br from-accent/25 to-accent/5 border border-accent/10" />
              </div>
              {/* Data visualization */}
              <div className="flex items-end gap-1 h-16 mt-2">
                {[40, 65, 50, 80, 55, 70, 90, 60, 75, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(to top, rgba(124,58,237,0.4), rgba(6,182,212,0.2))`,
                    }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 2.5 + i * 0.08, duration: 0.4, ease: "backOut" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile app — left */}
        <motion.div
          className="absolute left-2 md:left-8 top-12 w-[90px] md:w-[110px] z-20"
          initial={{ opacity: 0, x: -40, rotate: -8 }}
          animate={{ opacity: 1, x: 0, rotate: -6 }}
          transition={{ delay: 2.8, duration: 0.7, type: "spring" }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="rounded-2xl border border-border-light bg-bg-surface/80 backdrop-blur-md overflow-hidden shadow-xl shadow-secondary/15">
              <div className="h-4 bg-bg-card/90 rounded-t-2xl" />
              <div className="p-2.5 space-y-2">
                <div className="h-12 rounded-lg bg-gradient-to-br from-secondary/30 to-primary/10" />
                <div className="h-1.5 w-3/4 rounded bg-border/40" />
                <div className="h-1.5 w-full rounded bg-border/30" />
                <div className="h-7 w-full rounded-lg bg-gradient-to-r from-primary/30 to-secondary/20 mt-1" />
                <div className="h-1.5 w-1/2 rounded bg-border/30" />
                <div className="flex gap-1">
                  <div className="h-8 flex-1 rounded bg-primary/10" />
                  <div className="h-8 flex-1 rounded bg-secondary/10" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tablet — right */}
        <motion.div
          className="absolute right-0 md:right-4 top-6 w-[130px] md:w-[160px] z-5"
          initial={{ opacity: 0, x: 40, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: 4 }}
          transition={{ delay: 2.6, duration: 0.7, type: "spring" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="rounded-xl border border-border-light bg-bg-surface/80 backdrop-blur-md overflow-hidden shadow-xl shadow-accent/15">
              <div className="p-3 space-y-2">
                <div className="h-16 rounded-lg bg-gradient-to-br from-accent/25 to-primary/10" />
                <div className="h-2 w-3/4 rounded bg-border/40" />
                <div className="h-2 w-full rounded bg-border/30" />
                <div className="h-2 w-1/2 rounded bg-border/30" />
                <div className="grid grid-cols-2 gap-1.5 mt-1">
                  <div className="h-10 rounded bg-primary/10" />
                  <div className="h-10 rounded bg-secondary/10" />
                  <div className="h-10 rounded bg-accent/10" />
                  <div className="h-10 rounded bg-emerald-500/10" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating UI elements — design details */}
        <motion.div
          className="absolute -left-2 md:left-16 bottom-8 md:bottom-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="px-3 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/20 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 5l3 3 5-5" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
              </div>
              <span className="text-[10px] text-emerald-400 font-medium">Design System Ready</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute right-4 md:right-20 bottom-16 md:bottom-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="px-3 py-2 rounded-lg bg-primary/15 border border-primary/20 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="3" fill="#7C3AED" opacity="0.6" /><circle cx="5" cy="5" r="1.5" fill="#A78BFA" /></svg>
              </div>
              <span className="text-[10px] text-primary-light font-medium">Pixel Perfect</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Center transformation burst ── */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          opacity: useTransform(progress, [0.35, 0.5, 0.7], [0, 1, 0]),
          scale: useTransform(progress, [0.35, 0.6], [0.5, 2.5]),
        }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary/40 via-secondary/30 to-accent/20 blur-2xl" />
      </motion.div>
    </div>
  );
}

/* ─── Idea Node: abstract shape representing a "complex idea" ─── */
function IdeaNode({ size, color, index }: { size: number; color: string; index: number }) {
  const shapes = [
    // Hexagon
    <svg key="hex" width={size} height={size} viewBox="0 0 60 60">
      <motion.polygon
        points="30,2 56,16 56,44 30,58 4,44 4,16"
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        opacity={0.4}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20 + index * 2, repeat: Infinity, ease: "linear" }}
      />
      <circle cx={30} cy={30} r={4} fill={color} opacity={0.3} />
    </svg>,
    // Triangle
    <svg key="tri" width={size} height={size} viewBox="0 0 60 60">
      <motion.polygon
        points="30,5 55,50 5,50"
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        opacity={0.35}
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 25 + index * 2, repeat: Infinity, ease: "linear" }}
      />
      <circle cx={30} cy={35} r={3} fill={color} opacity={0.25} />
    </svg>,
    // Diamond
    <svg key="dia" width={size} height={size} viewBox="0 0 60 60">
      <motion.rect
        x={12} y={12} width={36} height={36}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        opacity={0.35}
        style={{ transformOrigin: "30px 30px" }}
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 18 + index * 2, repeat: Infinity, ease: "linear" }}
      />
      <circle cx={30} cy={30} r={3} fill={color} opacity={0.25} />
    </svg>,
    // Circle with orbit
    <svg key="orb" width={size} height={size} viewBox="0 0 60 60">
      <circle cx={30} cy={30} r={22} fill="none" stroke={color} strokeWidth={1} opacity={0.25} strokeDasharray="4 3" />
      <motion.circle
        cx={30} cy={8} r={4} fill={color} opacity={0.4}
        style={{ transformOrigin: "30px 30px" }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8 + index, repeat: Infinity, ease: "linear" }}
      />
    </svg>,
  ];

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {shapes[index % shapes.length]}
    </motion.div>
  );
}

/* ─── Animated Counter ─── */
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Main Hero ─── */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[150px]"
          style={{ animation: "float1 20s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/12 blur-[130px]"
          style={{ animation: "float2 25s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[120px]"
          style={{ animation: "float3 22s ease-in-out infinite" }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary-light font-medium">
            Product Design Agency · AI · SaaS · Cybersecurity
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
        >
          We transform{" "}
          <span className="relative inline-block">
            <span className="relative z-10">complex ideas</span>
            <motion.span
              className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-primary/20 rounded-sm -z-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </span>
          <br />
          into{" "}
          <span className="bg-gradient-to-r from-primary-light via-secondary to-secondary-light bg-clip-text text-transparent">
            beautiful digital products
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          By joining forces with tech startups and product teams like yours,
          using user-centered design sprints
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-4"
        >
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Talk
          </Link>
          <Link
            href="/work"
            className="px-8 py-4 rounded-full border border-border-light text-text hover:border-primary-light hover:bg-primary-dim transition-all duration-300"
          >
            See Our Work
          </Link>
        </motion.div>

        {/* Transformation Illustration */}
        <TransformationScene />
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 mt-8 mb-12"
      >
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-6 px-8 rounded-2xl border border-border-light/50 bg-bg-card/30 backdrop-blur-sm">
          {[
            { value: 13, suffix: "+", label: "Projects Delivered" },
            { value: 5, suffix: "+", label: "Years of Experience" },
            { value: 4, suffix: "", label: "Industries" },
            { value: 100, suffix: "%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold font-display bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-text-muted text-xs md:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
