"use client";

import { motion, useMotionValue, useTransform, animate, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── Transformation Animation ───
   Infinite loop: Chaos → Converge → Product → Hold → Dissolve → Chaos
   Duration: ~12s per cycle
   
   Phase 0-3s:   Chaos (scattered shapes, tangled lines, question marks)
   Phase 3-5s:   Convergence (particles spiral inward, shapes dissolve)
   Phase 5-6s:   Burst (light explosion at center)
   Phase 6-9s:   Product emerges (screens build up piece by piece)
   Phase 9-11s:  Hold (product floats with sparkles)
   Phase 11-12s: Dissolve back to chaos
*/

function TransformationAnimation() {
  const [phase, setPhase] = useState<"chaos" | "converge" | "burst" | "product" | "hold" | "dissolve">("chaos");
  const cycleRef = useRef<number>(0);

  useEffect(() => {
    const timings = {
      chaos: 3000,
      converge: 2000,
      burst: 1000,
      product: 3000,
      hold: 2000,
      dissolve: 1000,
    };
    const sequence: Array<typeof phase> = ["chaos", "converge", "burst", "product", "hold", "dissolve"];

    let idx = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const next = () => {
      idx = (idx + 1) % sequence.length;
      if (idx === 0) cycleRef.current++;
      setPhase(sequence[idx]);
      timeout = setTimeout(next, timings[sequence[idx]]);
    };

    timeout = setTimeout(next, timings[sequence[0]]);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[560px]">
      {/* Ambient glow behind animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: phase === "burst"
            ? "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.25) 0%, transparent 70%)"
            : phase === "product" || phase === "hold"
            ? "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 60%)"
            : "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 50%)",
        }}
        transition={{ duration: 1 }}
      />

      {/* ── CHAOS LAYER ── */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: phase === "chaos" ? 1 : phase === "converge" ? 0.5 : phase === "dissolve" ? 0.8 : 0,
        }}
        transition={{ duration: 0.8 }}
      >
        <ChaosElements phase={phase} />
      </motion.div>

      {/* ── CONVERGENCE PARTICLES ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: phase === "converge" || phase === "burst" ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <ConvergenceParticles active={phase === "converge" || phase === "burst"} />
      </motion.div>

      {/* ── BURST ── */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{
          scale: phase === "burst" ? [0.5, 3] : 0,
          opacity: phase === "burst" ? [1, 0] : 0,
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-40 h-40 rounded-full bg-gradient-radial from-white/30 via-primary/20 to-transparent blur-xl" />
      </motion.div>

      {/* ── PRODUCT LAYER ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: phase === "product" || phase === "hold" ? 1 : phase === "dissolve" ? 0 : 0,
          scale: phase === "product" || phase === "hold" ? 1 : 0.85,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ProductScreens phase={phase} />
      </motion.div>

      {/* ── SPARKLES during hold ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: phase === "hold" ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Sparkles />
      </motion.div>
    </div>
  );
}

/* ─── Chaos: abstract tangled shapes representing complex ideas ─── */
function ChaosElements({ phase }: { phase: string }) {
  const nodes = [
    { x: "12%", y: "18%", size: 52, color: "#7C3AED", shape: "hex" },
    { x: "78%", y: "12%", size: 40, color: "#06B6D4", shape: "tri" },
    { x: "22%", y: "72%", size: 46, color: "#F59E0B", shape: "diamond" },
    { x: "82%", y: "68%", size: 48, color: "#10B981", shape: "circle" },
    { x: "50%", y: "25%", size: 36, color: "#EC4899", shape: "hex" },
    { x: "65%", y: "78%", size: 32, color: "#8B5CF6", shape: "tri" },
    { x: "35%", y: "50%", size: 44, color: "#06B6D4", shape: "diamond" },
    { x: "72%", y: "42%", size: 38, color: "#F59E0B", shape: "circle" },
    { x: "15%", y: "45%", size: 34, color: "#7C3AED", shape: "tri" },
    { x: "88%", y: "35%", size: 42, color: "#10B981", shape: "hex" },
  ];

  const tangleLines = [
    "M 60 86 C 150 200, 250 50, 380 120",
    "M 400 60 C 300 180, 180 140, 120 350",
    "M 100 340 C 220 250, 340 320, 440 260",
    "M 350 100 C 280 200, 420 280, 480 180",
    "M 200 200 C 300 100, 350 300, 450 200",
    "M 80 180 C 200 280, 300 80, 380 280",
    "M 250 350 C 350 250, 150 150, 300 50",
  ];

  return (
    <>
      {/* Tangled messy lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
        {tangleLines.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke={["#7C3AED", "#06B6D4", "#F59E0B", "#10B981", "#EC4899", "#8B5CF6", "#06B6D4"][i]}
            strokeWidth={1.2}
            strokeOpacity={0.2}
            strokeDasharray="8 6"
            initial={{ pathLength: 0 }}
            animate={phase === "chaos" || phase === "dissolve" ? { pathLength: [0, 1] } : { pathLength: 0 }}
            transition={{ duration: 2, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}

        {/* Question marks scattered */}
        {[
          { x: 130, y: 80, size: 14 },
          { x: 380, y: 290, size: 12 },
          { x: 420, y: 100, size: 16 },
          { x: 80, y: 280, size: 13 },
        ].map((q, i) => (
          <motion.text
            key={`q-${i}`}
            x={q.x} y={q.y}
            fontSize={q.size}
            fill="rgba(124,58,237,0.15)"
            fontWeight="bold"
            animate={{ opacity: [0.1, 0.25, 0.1], y: [q.y, q.y - 5, q.y] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
          >
            ?
          </motion.text>
        ))}
      </svg>

      {/* Floating idea nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute"
          style={{ left: node.x, top: node.y }}
          animate={
            phase === "converge"
              ? { x: `calc(50% - ${node.x})`, y: `calc(50% - ${node.y})`, scale: 0.3, opacity: 0 }
              : { x: 0, y: 0, scale: 1, opacity: 1 }
          }
          transition={{ duration: 1.5, delay: i * 0.05, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <ShapeNode size={node.size} color={node.color} shape={node.shape} index={i} />
          </motion.div>
        </motion.div>
      ))}

      {/* "IDEA" text fragments floating */}
      {["idea", "data", "API", "flow", "UX", "MVP"].map((word, i) => (
        <motion.span
          key={word}
          className="absolute text-[10px] font-mono tracking-wider uppercase pointer-events-none"
          style={{
            left: `${15 + i * 14}%`,
            top: `${30 + (i % 3) * 20}%`,
            color: ["#7C3AED", "#06B6D4", "#F59E0B", "#10B981", "#EC4899", "#8B5CF6"][i],
            opacity: 0.15,
          }}
          animate={{ opacity: [0.08, 0.2, 0.08], y: [0, -6, 0] }}
          transition={{ duration: 4, delay: i * 0.6, repeat: Infinity }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

/* ─── Shape Node ─── */
function ShapeNode({ size, color, shape, index }: { size: number; color: string; shape: string; index: number }) {
  const s = size;
  const half = s / 2;

  if (shape === "hex") {
    const r = half * 0.8;
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 2;
      return `${half + r * Math.cos(a)},${half + r * Math.sin(a)}`;
    }).join(" ");
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
        <motion.polygon points={pts} fill="none" stroke={color} strokeWidth={1.5} opacity={0.4}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20 + index * 2, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${half}px ${half}px` }}
        />
        <circle cx={half} cy={half} r={3} fill={color} opacity={0.3} />
      </svg>
    );
  }
  if (shape === "tri") {
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
        <motion.polygon
          points={`${half},${s * 0.1} ${s * 0.9},${s * 0.85} ${s * 0.1},${s * 0.85}`}
          fill="none" stroke={color} strokeWidth={1.5} opacity={0.35}
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 25 + index * 2, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${half}px ${half}px` }}
        />
        <circle cx={half} cy={half * 1.2} r={2.5} fill={color} opacity={0.25} />
      </svg>
    );
  }
  if (shape === "diamond") {
    const r = half * 0.65;
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
        <motion.rect x={half - r} y={half - r} width={r * 2} height={r * 2}
          fill="none" stroke={color} strokeWidth={1.5} opacity={0.35}
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 18 + index * 2, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${half}px ${half}px` }}
        />
        <circle cx={half} cy={half} r={2.5} fill={color} opacity={0.25} />
      </svg>
    );
  }
  // circle with orbiting dot
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
      <circle cx={half} cy={half} r={half * 0.7} fill="none" stroke={color} strokeWidth={1} opacity={0.2} strokeDasharray="4 3" />
      <motion.circle cx={half} cy={half * 0.25} r={3.5} fill={color} opacity={0.4}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8 + index, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: `${half}px ${half}px` }}
      />
    </svg>
  );
}

/* ─── Convergence Particles ─── */
function ConvergenceParticles({ active }: { active: boolean }) {
  return (
    <>
      {Array.from({ length: 30 }).map((_, i) => {
        const angle = (i / 30) * Math.PI * 2;
        const radius = 180 + Math.random() * 120;
        const color = ["#7C3AED", "#06B6D4", "#F59E0B", "#10B981", "#EC4899"][i % 5];
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: 3 + (i % 3) * 2,
              height: 3 + (i % 3) * 2,
              backgroundColor: color,
            }}
            animate={active ? {
              x: [Math.cos(angle) * radius, Math.cos(angle) * radius * 0.3, 0],
              y: [Math.sin(angle) * radius, Math.sin(angle) * radius * 0.3, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0],
            } : {
              opacity: 0,
            }}
            transition={{
              duration: 2,
              delay: i * 0.04,
              ease: "easeIn",
            }}
          />
        );
      })}
    </>
  );
}

/* ─── Product Screens ─── */
function ProductScreens({ phase }: { phase: string }) {
  const isVisible = phase === "product" || phase === "hold";

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main desktop webapp */}
      <motion.div
        className="relative z-10 w-[260px] sm:w-[280px] md:w-[320px]"
        animate={isVisible ? { y: [10, -6, 10] } : {}}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="rounded-xl border border-border-light bg-bg-surface/80 backdrop-blur-md overflow-hidden shadow-2xl shadow-primary/20"
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Browser chrome */}
          <div className="h-7 bg-bg-card/90 flex items-center gap-1.5 px-3 border-b border-border/50">
            <div className="w-2 h-2 rounded-full bg-red-400/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
            <div className="w-2 h-2 rounded-full bg-green-400/70" />
            <div className="ml-2 h-3.5 w-28 rounded bg-border/30" />
          </div>
          {/* App UI */}
          <div className="p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="h-3.5 w-16 rounded bg-gradient-to-r from-primary/40 to-primary/20" />
              <div className="flex gap-2">
                <div className="h-2.5 w-10 rounded bg-border/30" />
                <div className="h-2.5 w-10 rounded bg-border/30" />
              </div>
            </div>
            <div className="h-2.5 w-3/4 rounded bg-text/15" />
            <div className="h-2 w-full rounded bg-border/20" />
            {/* Dashboard cards */}
            <div className="flex gap-1.5 mt-3">
              {[
                { from: "from-primary/25", to: "to-primary/5", border: "border-primary/10" },
                { from: "from-secondary/25", to: "to-secondary/5", border: "border-secondary/10" },
                { from: "from-accent/25", to: "to-accent/5", border: "border-accent/10" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className={`h-14 flex-1 rounded-lg bg-gradient-to-br ${card.from} ${card.to} border ${card.border}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4, type: "spring" }}
                />
              ))}
            </div>
            {/* Chart bars */}
            <div className="flex items-end gap-[3px] h-14 mt-1">
              {[35, 55, 45, 72, 50, 65, 82, 55, 68, 78, 60, 90].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    background: `linear-gradient(to top, rgba(124,58,237,0.5), rgba(6,182,212,0.2))`,
                  }}
                  initial={{ height: 0 }}
                  animate={isVisible ? { height: `${h}%` } : { height: 0 }}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.5, ease: "backOut" }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile app — left */}
      <motion.div
        className="absolute left-0 sm:left-2 md:left-6 top-10 w-[70px] sm:w-[80px] md:w-[95px] z-20"
        initial={{ opacity: 0, x: -30, rotate: -8 }}
        animate={isVisible ? { opacity: 1, x: 0, rotate: -6 } : { opacity: 0, x: -30 }}
        transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
      >
        <motion.div
          animate={isVisible ? { y: [0, -8, 0] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="rounded-2xl border border-border-light bg-bg-surface/80 backdrop-blur-md overflow-hidden shadow-xl shadow-secondary/15">
            <div className="h-3 bg-bg-card/90 rounded-t-2xl" />
            <div className="p-2 space-y-1.5">
              <div className="h-10 rounded-lg bg-gradient-to-br from-secondary/30 to-primary/10" />
              <div className="h-1.5 w-3/4 rounded bg-border/30" />
              <div className="h-1.5 w-full rounded bg-border/20" />
              <motion.div
                className="h-6 w-full rounded-lg bg-gradient-to-r from-primary/30 to-secondary/20"
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                style={{ transformOrigin: "left" }}
              />
              <div className="flex gap-1">
                <div className="h-6 flex-1 rounded bg-primary/10" />
                <div className="h-6 flex-1 rounded bg-secondary/10" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Tablet — right */}
      <motion.div
        className="absolute right-0 sm:right-0 md:right-2 top-4 w-[100px] sm:w-[110px] md:w-[130px] z-5"
        initial={{ opacity: 0, x: 30, rotate: 6 }}
        animate={isVisible ? { opacity: 1, x: 0, rotate: 4 } : { opacity: 0, x: 30 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
      >
        <motion.div
          animate={isVisible ? { y: [0, -10, 0] } : {}}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="rounded-xl border border-border-light bg-bg-surface/80 backdrop-blur-md overflow-hidden shadow-xl shadow-accent/15">
            <div className="p-2.5 space-y-1.5">
              <div className="h-12 rounded-lg bg-gradient-to-br from-accent/25 to-primary/10" />
              <div className="h-1.5 w-3/4 rounded bg-border/30" />
              <div className="h-1.5 w-full rounded bg-border/20" />
              <div className="grid grid-cols-2 gap-1">
                {["primary", "secondary", "accent", "emerald-500"].map((c, i) => (
                  <motion.div
                    key={i}
                    className={`h-8 rounded bg-${c}/10`}
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.3, type: "spring" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        className="absolute left-0 md:left-4 bottom-6 md:bottom-10"
        initial={{ opacity: 0, y: 15 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <motion.div
          animate={isVisible ? { y: [0, -4, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="px-2.5 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/20 backdrop-blur-sm"
        >
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
            <span className="text-[9px] md:text-[10px] text-emerald-400 font-medium whitespace-nowrap">Design System</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-0 md:right-6 bottom-14 md:bottom-20"
        initial={{ opacity: 0, y: 15 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ delay: 1.1, duration: 0.4 }}
      >
        <motion.div
          animate={isVisible ? { y: [0, -3, 0] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="px-2.5 py-1.5 rounded-lg bg-primary/15 border border-primary/20 backdrop-blur-sm"
        >
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="3.5" fill="none" stroke="#7C3AED" strokeWidth="1.5" /><circle cx="6" cy="6" r="1.5" fill="#A78BFA" /></svg>
            <span className="text-[9px] md:text-[10px] text-primary-light font-medium whitespace-nowrap">Pixel Perfect</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── Sparkles during hold phase ─── */
function Sparkles() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.15,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      ))}
    </>
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
            const p = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(step);
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

/* ─── Main Hero Section ─── */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/12 blur-[150px]" style={{ animation: "float1 20s ease-in-out infinite" }} />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[130px]" style={{ animation: "float2 25s ease-in-out infinite" }} />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[120px]" style={{ animation: "float3 22s ease-in-out infinite" }} />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* ── Side-by-side Layout ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* LEFT: Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs sm:text-sm text-primary-light font-medium">
                AI · SaaS · Cybersecurity
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
            >
              We transform{" "}
              <span className="relative inline-block">
                <span className="relative z-10">complex ideas</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-2.5 md:h-3 bg-primary/20 rounded-sm -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>{" "}
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
              className="text-text-secondary text-base sm:text-lg md:text-xl max-w-xl mb-8"
            >
              By joining forces with tech startups and product teams like yours,
              using user-centered design sprints
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 text-center"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 rounded-full border border-border-light text-text hover:border-primary-light hover:bg-primary-dim transition-all duration-300 text-center"
              >
                See Our Work
              </Link>
            </motion.div>

            {/* Inline stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-6 sm:gap-10"
            >
              {[
                { value: 13, suffix: "+", label: "Projects" },
                { value: 5, suffix: "+", label: "Years" },
                { value: 4, suffix: "", label: "Industries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold font-display bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
                    <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-text-muted text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Animation */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <TransformationAnimation />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
