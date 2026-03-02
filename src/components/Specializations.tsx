"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

/* ─── Animated Illustrations ─── */

function AIIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-[#8B5CF6]/10 to-[#EC4899]/10">
      {/* Neural network nodes */}
      <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        {/* Connection lines with animation */}
        {[
          [80, 60, 200, 100], [80, 60, 200, 150], [80, 60, 200, 200],
          [80, 150, 200, 100], [80, 150, 200, 150], [80, 150, 200, 200],
          [80, 240, 200, 100], [80, 240, 200, 150], [80, 240, 200, 200],
          [200, 100, 320, 120], [200, 100, 320, 180],
          [200, 150, 320, 120], [200, 150, 320, 180],
          [200, 200, 320, 120], [200, 200, 320, 180],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="url(#ai-grad)"
            strokeWidth={1.5}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, delay: i * 0.08, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
        {/* Traveling pulses */}
        {[0, 1, 2, 3, 4].map(i => (
          <motion.circle
            key={`pulse-${i}`}
            r={3}
            fill="#A78BFA"
            initial={{ cx: 80, cy: 60 + i * 45, opacity: 0 }}
            animate={{
              cx: [80, 200, 320],
              cy: [60 + i * 45, 100 + (i % 3) * 50, 120 + (i % 2) * 60],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity }}
          />
        ))}
        {/* Input nodes */}
        {[60, 150, 240].map((y, i) => (
          <motion.circle
            key={`in-${i}`}
            cx={80} cy={y} r={12}
            fill="#8B5CF6"
            fillOpacity={0.3}
            stroke="#8B5CF6"
            strokeWidth={2}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
        {/* Hidden layer */}
        {[100, 150, 200].map((y, i) => (
          <motion.circle
            key={`hid-${i}`}
            cx={200} cy={y} r={14}
            fill="#7C3AED"
            fillOpacity={0.4}
            stroke="#A78BFA"
            strokeWidth={2}
            animate={{ scale: [1, 1.2, 1], fillOpacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.8, delay: i * 0.4, repeat: Infinity }}
          />
        ))}
        {/* Output nodes */}
        {[120, 180].map((y, i) => (
          <motion.circle
            key={`out-${i}`}
            cx={320} cy={y} r={16}
            fill="#EC4899"
            fillOpacity={0.4}
            stroke="#F472B6"
            strokeWidth={2}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.2, delay: i * 0.5, repeat: Infinity }}
          />
        ))}
        {/* Brain outline */}
        <motion.path
          d="M170 40 Q230 20 260 50 Q290 30 310 60 Q340 50 340 90 Q360 110 340 140 Q350 170 330 190 Q340 220 310 240 Q300 260 270 260 Q240 280 210 260 Q180 270 160 250 Q130 260 120 240 Q90 250 80 220 Q60 210 70 180 Q50 160 70 140 Q55 110 80 90 Q70 60 100 50 Q130 30 170 40Z"
          fill="none"
          stroke="url(#ai-grad)"
          strokeWidth={1}
          strokeDasharray="4 6"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SaaSIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-[#7C3AED]/10 to-[#7C3AED]/5">
      <svg viewBox="0 0 400 300" className="w-full h-full p-6">
        {/* Dashboard mockup */}
        <motion.rect
          x={40} y={30} width={320} height={240} rx={12}
          fill="#1C1C2E"
          stroke="#7C3AED"
          strokeWidth={1.5}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* Title bar */}
        <rect x={40} y={30} width={320} height={32} rx={12} fill="#252540" />
        <circle cx={60} cy={46} r={5} fill="#EF4444" opacity={0.7} />
        <circle cx={78} cy={46} r={5} fill="#F59E0B" opacity={0.7} />
        <circle cx={96} cy={46} r={5} fill="#10B981" opacity={0.7} />
        {/* Sidebar */}
        <rect x={40} y={62} width={70} height={208} fill="#18182A" />
        {[80, 105, 130, 155].map((y, i) => (
          <motion.rect
            key={i}
            x={52} y={y} width={44} height={8} rx={4}
            fill={i === 0 ? "#7C3AED" : "#3A3A55"}
            animate={i === 0 ? { opacity: [0.7, 1, 0.7] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
        ))}
        {/* Clip content to dashboard bounds */}
        <clipPath id="dashboard-clip">
          <rect x={40} y={62} width={320} height={208} />
        </clipPath>
        <g clipPath="url(#dashboard-clip)">
        {/* Chart bars — grow upward from baseline */}
        {[0, 1, 2, 3, 4, 5, 6].map(i => {
          const barHeight = 40 + Math.sin(i * 1.5) * 40 + 30;
          const baseline = 250;
          return (
            <motion.rect
              key={`bar-${i}`}
              x={130 + i * 30}
              width={18} rx={4}
              fill={`url(#saas-bar-${i % 2})`}
              initial={{ y: baseline, height: 0 }}
              animate={{
                y: [baseline, baseline - barHeight, baseline - barHeight * 0.8],
                height: [0, barHeight, barHeight * 0.8],
              }}
              transition={{ duration: 2, delay: i * 0.15, repeat: Infinity, repeatType: "reverse" }}
            />
          );
        })}
        </g>
        {/* Stat cards */}
        {[0, 1, 2].map(i => (
          <g key={`stat-${i}`}>
            <motion.rect
              x={125 + i * 75} y={78} width={65} height={40} rx={6}
              fill="#1E1E35"
              stroke="#7C3AED"
              strokeWidth={0.5}
              strokeOpacity={0.3}
              animate={{ strokeOpacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            />
            <motion.rect
              x={132 + i * 75} y={86} width={30} height={6} rx={3}
              fill="#7C3AED"
              fillOpacity={0.5}
              animate={{ width: [20, 40, 30] }}
              transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
            />
            <rect x={132 + i * 75} y={98} width={45} height={4} rx={2} fill="#3A3A55" />
          </g>
        ))}
        <defs>
          <linearGradient id="saas-bar-0" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="saas-bar-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function CyberIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-[#06B6D4]/10 to-[#06B6D4]/5">
      <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        {/* Shield */}
        <motion.path
          d="M200 40 L300 90 L300 180 Q300 240 200 270 Q100 240 100 180 L100 90 Z"
          fill="none"
          stroke="#06B6D4"
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M200 40 L300 90 L300 180 Q300 240 200 270 Q100 240 100 180 L100 90 Z"
          fill="#06B6D4"
          fillOpacity={0.05}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Lock icon */}
        <motion.rect
          x={175} y={140} width={50} height={40} rx={6}
          fill="#06B6D4"
          fillOpacity={0.3}
          stroke="#22D3EE"
          strokeWidth={1.5}
          animate={{ fillOpacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M182 140 L182 125 Q182 110 200 110 Q218 110 218 125 L218 140"
          fill="none"
          stroke="#22D3EE"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.circle
          cx={200} cy={155} r={4}
          fill="#22D3EE"
          animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        {/* Scanning rings */}
        {[0, 1, 2].map(i => (
          <motion.circle
            key={i}
            cx={200} cy={155}
            r={60 + i * 30}
            fill="none"
            stroke="#06B6D4"
            strokeWidth={0.5}
            strokeDasharray="8 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0], rotate: 360 }}
            transition={{ duration: 4 + i, delay: i * 0.5, repeat: Infinity }}
            style={{ transformOrigin: "200px 155px" }}
          />
        ))}
        {/* Floating data particles */}
        {[
          [130, 100], [270, 100], [120, 200], [280, 200],
          [150, 70], [250, 70], [140, 240], [260, 240],
        ].map(([cx, cy], i) => (
          <motion.rect
            key={i}
            x={cx - 8} y={cy - 3}
            width={16} height={6} rx={3}
            fill="#06B6D4"
            fillOpacity={0.4}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -10, 0],
            }}
            transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </svg>
    </div>
  );
}

function HealthtechIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5">
      <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        {/* Heart rate line */}
        <motion.path
          d="M30 150 L100 150 L120 150 L140 80 L160 220 L180 100 L200 200 L220 130 L240 170 L260 150 L370 150"
          fill="none"
          stroke="#10B981"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Glow trail */}
        <motion.path
          d="M30 150 L100 150 L120 150 L140 80 L160 220 L180 100 L200 200 L220 130 L240 170 L260 150 L370 150"
          fill="none"
          stroke="#10B981"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="blur(6px)"
          opacity={0.3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Pulse dot */}
        <motion.circle
          r={6}
          fill="#10B981"
          animate={{
            cx: [30, 100, 120, 140, 160, 180, 200, 220, 240, 260, 370],
            cy: [150, 150, 150, 80, 220, 100, 200, 130, 170, 150, 150],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle
          r={12}
          fill="#10B981"
          opacity={0.2}
          filter="blur(4px)"
          animate={{
            cx: [30, 100, 120, 140, 160, 180, 200, 220, 240, 260, 370],
            cy: [150, 150, 150, 80, 220, 100, 200, 130, 170, 150, 150],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Heart icon */}
        <motion.path
          d="M200 100 C200 80 220 65 235 75 Q250 85 250 100 L200 140 L150 100 Q150 85 165 75 C180 65 200 80 200 100Z"
          fill="#10B981"
          fillOpacity={0.15}
          stroke="#34D399"
          strokeWidth={1}
          animate={{ scale: [1, 1.08, 1, 1.08, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          style={{ transformOrigin: "200px 105px" }}
        />
        {/* Cross symbol */}
        <motion.g
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect x={310} y={60} width={30} height={8} rx={4} fill="#10B981" fillOpacity={0.5} />
          <rect x={321} y={49} width={8} height={30} rx={4} fill="#10B981" fillOpacity={0.5} />
        </motion.g>
        {/* Data points */}
        {[
          [60, 70, "98%"], [60, 230, "72"], [310, 230, "120/80"],
        ].map(([x, y, label], i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.5, delay: i * 0.6, repeat: Infinity }}
          >
            <rect x={Number(x) - 5} y={Number(y) - 5} width={60} height={24} rx={6} fill="#10B981" fillOpacity={0.1} stroke="#10B981" strokeWidth={0.5} strokeOpacity={0.3} />
            <text x={Number(x) + 25} y={Number(y) + 12} textAnchor="middle" fill="#34D399" fontSize={11} fontFamily="monospace">{label as string}</text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

function FintechIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F59E0B]/10 to-[#F59E0B]/5">
      <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        {/* Candlestick chart */}
        {[
          { x: 60, o: 180, c: 130, h: 100, l: 200, up: true },
          { x: 100, o: 130, c: 160, h: 120, l: 190, up: false },
          { x: 140, o: 160, c: 110, h: 80, l: 180, up: true },
          { x: 180, o: 110, c: 90, h: 60, l: 130, up: true },
          { x: 220, o: 90, c: 120, h: 70, l: 150, up: false },
          { x: 260, o: 120, c: 80, h: 50, l: 140, up: true },
          { x: 300, o: 80, c: 100, h: 60, l: 130, up: false },
          { x: 340, o: 100, c: 60, h: 40, l: 120, up: true },
        ].map((candle, i) => (
          <motion.g key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            {/* Wick */}
            <line
              x1={candle.x} y1={candle.h} x2={candle.x} y2={candle.l}
              stroke={candle.up ? "#10B981" : "#EF4444"}
              strokeWidth={1.5}
            />
            {/* Body */}
            <motion.rect
              x={candle.x - 10}
              y={Math.min(candle.o, candle.c)}
              width={20}
              height={Math.abs(candle.c - candle.o) || 4}
              rx={2}
              fill={candle.up ? "#10B981" : "#EF4444"}
              fillOpacity={0.6}
              stroke={candle.up ? "#34D399" : "#F87171"}
              strokeWidth={1}
              animate={{ fillOpacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
          </motion.g>
        ))}
        {/* Trend line */}
        <motion.path
          d="M60 180 Q140 140 180 90 Q220 70 260 80 Q300 60 340 60"
          fill="none"
          stroke="#F59E0B"
          strokeWidth={2}
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        {/* Bitcoin / Crypto symbol */}
        <motion.g
          animate={{ y: [0, -5, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <circle cx={340} cy={50} r={18} fill="#F59E0B" fillOpacity={0.15} stroke="#F59E0B" strokeWidth={1} />
          <text x={340} y={56} textAnchor="middle" fill="#FBBF24" fontSize={16} fontWeight="bold" fontFamily="monospace">₿</text>
        </motion.g>
        {/* Price ticker */}
        <motion.g
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect x={40} y={230} width={120} height={36} rx={8} fill="#F59E0B" fillOpacity={0.08} stroke="#F59E0B" strokeWidth={0.5} strokeOpacity={0.3} />
          <text x={55} y={250} fill="#FBBF24" fontSize={10} fontFamily="monospace">BTC/USD</text>
          <text x={55} y={260} fill="#10B981" fontSize={9} fontFamily="monospace">▲ +4.2%</text>
        </motion.g>
        {/* Grid lines */}
        {[100, 150, 200].map((y, i) => (
          <line key={i} x1={40} y1={y} x2={360} y2={y} stroke="#F59E0B" strokeWidth={0.3} strokeOpacity={0.15} strokeDasharray="4 8" />
        ))}
      </svg>
    </div>
  );
}

/* ─── Data ─── */

const specs = [
  {
    title: "Artificial Intelligence",
    subtitle: "AI & Machine Learning",
    description:
      "Designing intuitive interfaces for complex AI systems — from machine learning dashboards to conversational AI products. We make sophisticated technology feel simple, helping users understand, trust, and interact with AI-powered features through thoughtful UX patterns and clear data visualization.",
    accent: "#8B5CF6",
    accentLight: "#A78BFA",
    projects: 8,
    Illustration: AIIllustration,
  },
  {
    title: "SaaS",
    subtitle: "Software as a Service",
    description:
      "By creating an intuitive and visually appealing design, humans are more likely to engage with your product and stay longer, resulting in increased user retention. Through an iterative design process, focusing on user behavior insights, we can effectively meet both business objectives and customers' needs.",
    accent: "#7C3AED",
    accentLight: "#A78BFA",
    projects: 18,
    Illustration: SaaSIllustration,
  },
  {
    title: "Cybersecurity",
    subtitle: "Security Products",
    description:
      "Identifying and mitigating vulnerabilities, improving usability, enhancing security measures, educating users, and increasing user adoption by creating intuitive interfaces and well-crafted user flows can increase your product's engagement and ease of use.",
    accent: "#06B6D4",
    accentLight: "#22D3EE",
    projects: 12,
    Illustration: CyberIllustration,
  },
  {
    title: "Healthtech",
    subtitle: "Digital Health",
    description:
      "Researching the needs of patients and healthcare providers to create interfaces that support better communication, decision-making, and outcomes, with the goal of improving the experience, enhancing functionality, increasing adoption, meeting compliance standards (HIPAA & GDPR), and enhancing brand value.",
    accent: "#10B981",
    accentLight: "#34D399",
    projects: 9,
    Illustration: HealthtechIllustration,
  },
  {
    title: "Fintech / Crypto",
    subtitle: "Financial Technology",
    description:
      "Increasing trust with sensitive financial information and transactions, improving user experience with secure authentication payment methods, encryption, and access control features, as well as tailored data visualizations / infographics to simplify complicated data.",
    accent: "#F59E0B",
    accentLight: "#FBBF24",
    projects: 14,
    Illustration: FintechIllustration,
  },
];

/* ─── Card ─── */

function SpecCard({ spec, index }: { spec: (typeof specs)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const reversed = index % 2 === 1;
  const Illust = spec.Illustration;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="group relative"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10"
        style={{ background: `radial-gradient(ellipse at center, ${spec.accent}18, transparent 70%)` }}
      />

      <div
        className={`relative flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center p-6 lg:p-10 rounded-3xl border transition-all duration-500 bg-bg-card/40 backdrop-blur-sm`}
        style={{ borderColor: `${spec.accent}20` }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${spec.accent}60`; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${spec.accent}20`; }}
      >
        {/* Illustration */}
        <motion.div style={{ y }} className="w-full lg:w-1/2 flex-shrink-0">
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            style={{ boxShadow: `0 20px 60px ${spec.accent}15` }}
          >
            <Illust />
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: `linear-gradient(90deg, ${spec.accent}, transparent)` }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span
            className="text-sm font-medium uppercase tracking-widest mb-2"
            style={{ color: spec.accent }}
          >
            {spec.subtitle}
          </span>
          <h3 className="font-display text-3xl lg:text-5xl font-bold mb-6">{spec.title}</h3>
          <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-8">
            {spec.description}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/uniqorn-design/work"
              className="inline-flex items-center gap-2 font-medium group/link"
              style={{ color: spec.accent }}
            >
              See projects
              <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
            <span className="text-text-muted text-sm">{spec.projects} projects</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ─── */

export default function Specializations() {
  return (
    <section className="py-32 px-6 relative" id="about">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold">
            We specialize in{" "}
            <span className="bg-gradient-to-r from-primary-light via-secondary to-accent bg-clip-text text-transparent">
              what matters
            </span>
          </h2>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto">
            Deep domain expertise across the industries that need great design the most.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {specs.map((spec, i) => (
            <SpecCard key={spec.title} spec={spec} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
