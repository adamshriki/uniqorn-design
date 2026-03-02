"use client";

import { motion } from "framer-motion";

/* ─── Animated Icons ─── */

function UXResearchIcon() {
  return (
    <div className="w-14 h-14 relative">
      <svg viewBox="0 0 56 56" fill="none">
        {/* Magnifying glass */}
        <motion.circle
          cx={24} cy={24} r={14}
          stroke="#A78BFA"
          strokeWidth={2.5}
          fill="none"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: "24px 24px" }}
        />
        <motion.line
          x1={34} y1={34} x2={48} y2={48}
          stroke="#A78BFA"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        {/* Scanning lines inside */}
        {[16, 22, 28].map((y, i) => (
          <motion.line
            key={i}
            x1={14} y1={y} x2={34} y2={y}
            stroke="#7C3AED"
            strokeWidth={1.5}
            strokeLinecap="round"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, repeatDelay: 1 }}
            style={{ transformOrigin: "14px 0" }}
          />
        ))}
        {/* Data dots appearing */}
        {[[18, 19], [26, 25], [22, 30]].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx} cy={cy} r={2}
            fill="#06B6D4"
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2, delay: 0.5 + i * 0.4, repeat: Infinity }}
          />
        ))}
      </svg>
    </div>
  );
}

function UIDesignIcon() {
  return (
    <div className="w-14 h-14 relative">
      <svg viewBox="0 0 56 56" fill="none">
        {/* Artboard frame */}
        <motion.rect
          x={6} y={6} width={44} height={44} rx={8}
          stroke="#22D3EE"
          strokeWidth={2}
          fill="none"
          animate={{ strokeDashoffset: [0, -20] }}
          strokeDasharray="5 5"
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        {/* Layout blocks morphing */}
        <motion.rect
          x={12} y={12} width={14} height={10} rx={3}
          fill="#06B6D4"
          fillOpacity={0.5}
          animate={{ width: [14, 20, 14], height: [10, 8, 10] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.rect
          x={30} y={12} width={14} height={10} rx={3}
          fill="#7C3AED"
          fillOpacity={0.5}
          animate={{ x: [30, 34, 30], width: [14, 10, 14] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.rect
          x={12} y={26} width={32} height={6} rx={3}
          fill="#A78BFA"
          fillOpacity={0.3}
          animate={{ width: [32, 28, 32] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.rect
          x={12} y={36} width={20} height={6} rx={3}
          fill="#22D3EE"
          fillOpacity={0.3}
          animate={{ width: [20, 28, 20] }}
          transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }}
        />
        {/* Cursor */}
        <motion.g
          animate={{ x: [0, 10, 5, 0], y: [0, 8, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M38 34 L38 46 L42 42 L46 46" stroke="#F0F0F5" strokeWidth={1.5} fill="#06B6D4" fillOpacity={0.5} />
        </motion.g>
      </svg>
    </div>
  );
}

function BrandDesignIcon() {
  return (
    <div className="w-14 h-14 relative">
      <svg viewBox="0 0 56 56" fill="none">
        {/* Diamond / gem shape */}
        <motion.path
          d="M28 6 L48 22 L28 50 L8 22 Z"
          stroke="#F59E0B"
          strokeWidth={2}
          fill="none"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "28px 28px" }}
        />
        {/* Inner facets */}
        <motion.path
          d="M18 22 L28 6 L38 22 M18 22 L28 50 M38 22 L28 50 M8 22 L48 22"
          stroke="#FBBF24"
          strokeWidth={1}
          strokeOpacity={0.4}
          fill="none"
        />
        {/* Sparkle particles */}
        {[[14, 12], [42, 14], [10, 36], [46, 38], [28, 2]].map(([cx, cy], i) => (
          <motion.g key={i}>
            <motion.line
              x1={cx - 3} y1={cy} x2={Number(cx) + 3} y2={cy}
              stroke="#FBBF24"
              strokeWidth={1.5}
              strokeLinecap="round"
              animate={{ opacity: [0, 1, 0], scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
            <motion.line
              x1={cx} y1={Number(cy) - 3} x2={cx} y2={Number(cy) + 3}
              stroke="#FBBF24"
              strokeWidth={1.5}
              strokeLinecap="round"
              animate={{ opacity: [0, 1, 0], scaleY: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
          </motion.g>
        ))}
        {/* Center glow */}
        <motion.circle
          cx={28} cy={26} r={5}
          fill="#F59E0B"
          fillOpacity={0.2}
          animate={{ r: [4, 7, 4], fillOpacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

function IllustrationIcon() {
  return (
    <div className="w-14 h-14 relative">
      <svg viewBox="0 0 56 56" fill="none">
        {/* Pen drawing a path */}
        <motion.path
          d="M10 46 Q15 30 22 28 Q30 26 32 18 Q34 10 42 8"
          stroke="#10B981"
          strokeWidth={2.5}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
        />
        {/* Pen tip */}
        <motion.g
          animate={{
            x: [0, 12, 22, 32],
            y: [0, -18, -28, -38],
          }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.8 }}
        >
          <path d="M8 48 L12 42 L16 46 Z" fill="#34D399" />
          <rect x={11} y={38} width={3} height={6} rx={1} fill="#10B981" transform="rotate(-40 12 40)" />
        </motion.g>
        {/* Paint splashes */}
        {[[38, 20, "#10B981"], [44, 30, "#34D399"], [30, 38, "#6EE7B7"]].map(([cx, cy, color], i) => (
          <motion.circle
            key={i}
            cx={Number(cx)} cy={Number(cy)} r={3}
            fill={color as string}
            fillOpacity={0.6}
            animate={{ scale: [0, 1.2, 0], opacity: [0, 0.7, 0] }}
            transition={{ duration: 1.5, delay: 1 + i * 0.3, repeat: Infinity, repeatDelay: 1.5 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}
        {/* Small shapes appearing */}
        <motion.rect
          x={40} y={40} width={8} height={8} rx={2}
          stroke="#10B981"
          strokeWidth={1}
          fill="none"
          animate={{ opacity: [0, 0.6, 0], rotate: [0, 45, 90] }}
          transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }}
          style={{ transformOrigin: "44px 44px" }}
        />
        <motion.circle
          cx={46} cy={16} r={4}
          stroke="#34D399"
          strokeWidth={1}
          fill="none"
          animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2, delay: 1, repeat: Infinity }}
          style={{ transformOrigin: "46px 16px" }}
        />
      </svg>
    </div>
  );
}

function MotionDesignIcon() {
  return (
    <div className="w-14 h-14 relative">
      <svg viewBox="0 0 56 56" fill="none">
        {/* Play button */}
        <motion.circle
          cx={28} cy={28} r={22}
          stroke="#EC4899"
          strokeWidth={2}
          fill="none"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: "28px 28px" }}
        />
        <motion.path
          d="M22 18 L40 28 L22 38 Z"
          fill="#EC4899"
          fillOpacity={0.6}
          animate={{ fillOpacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        {/* Motion trails */}
        {[0, 1, 2].map(i => (
          <motion.circle
            key={i}
            cx={28} cy={28}
            r={22 + (i + 1) * 5}
            stroke="#F472B6"
            strokeWidth={1}
            fill="none"
            animate={{ opacity: [0, 0.3, 0], scale: [1, 1.1, 1.2] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            style={{ transformOrigin: "28px 28px" }}
          />
        ))}
        {/* Keyframe diamonds */}
        {[[6, 28], [50, 28], [28, 4], [28, 52]].map(([cx, cy], i) => (
          <motion.rect
            key={i}
            x={Number(cx) - 3} y={Number(cy) - 3}
            width={6} height={6}
            fill="#F472B6"
            transform={`rotate(45 ${cx} ${cy})`}
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </svg>
    </div>
  );
}

function AIDevelopmentIcon() {
  return (
    <div className="w-14 h-14 relative">
      <svg viewBox="0 0 56 56" fill="none">
        {/* Terminal window */}
        <rect x={4} y={8} width={48} height={40} rx={6} fill="#1C1C2E" stroke="#8B5CF6" strokeWidth={1.5} />
        <rect x={4} y={8} width={48} height={10} rx={6} fill="#252540" />
        <circle cx={12} cy={13} r={2} fill="#EF4444" opacity={0.7} />
        <circle cx={19} cy={13} r={2} fill="#F59E0B" opacity={0.7} />
        <circle cx={26} cy={13} r={2} fill="#10B981" opacity={0.7} />
        {/* AI code lines being generated */}
        <motion.rect
          x={10} y={24} width={24} height={3} rx={1.5}
          fill="#8B5CF6"
          fillOpacity={0.6}
          animate={{ width: [0, 24, 24], opacity: [0, 0.6, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.rect
          x={10} y={30} width={32} height={3} rx={1.5}
          fill="#A78BFA"
          fillOpacity={0.4}
          animate={{ width: [0, 32, 32], opacity: [0, 0.4, 0.4] }}
          transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.rect
          x={10} y={36} width={18} height={3} rx={1.5}
          fill="#C4B5FD"
          fillOpacity={0.3}
          animate={{ width: [0, 18, 18], opacity: [0, 0.3, 0.3] }}
          transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
        />
        {/* Blinking cursor */}
        <motion.rect
          x={10} y={42} width={2} height={3} rx={0.5}
          fill="#F0F0F5"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        {/* AI sparkle */}
        <motion.g
          animate={{ rotate: [0, 180, 360], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "44px 36px" }}
        >
          <line x1={44} y1={30} x2={44} y2={42} stroke="#FBBF24" strokeWidth={1.5} strokeLinecap="round" />
          <line x1={38} y1={36} x2={50} y2={36} stroke="#FBBF24" strokeWidth={1.5} strokeLinecap="round" />
          <line x1={40} y1={32} x2={48} y2={40} stroke="#FBBF24" strokeWidth={1} strokeLinecap="round" />
          <line x1={48} y1={32} x2={40} y2={40} stroke="#FBBF24" strokeWidth={1} strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}

/* ─── Data ─── */

const services = [
  {
    Icon: UXResearchIcon,
    title: "UX Research",
    description: "Deep user research to uncover insights that drive design decisions and product strategy.",
    accent: "#A78BFA",
  },
  {
    Icon: UIDesignIcon,
    title: "UI Design",
    description: "Pixel-perfect interfaces that balance aesthetics with usability across every screen.",
    accent: "#22D3EE",
  },
  {
    Icon: BrandDesignIcon,
    title: "Brand Design",
    description: "Distinctive visual identities that capture your brand essence and stand out.",
    accent: "#F59E0B",
  },
  {
    Icon: IllustrationIcon,
    title: "Illustration",
    description: "Custom illustrations and iconography that bring personality to your product.",
    accent: "#10B981",
  },
  {
    Icon: MotionDesignIcon,
    title: "Motion Design",
    description: "Thoughtful animations and micro-interactions that delight and guide users.",
    accent: "#EC4899",
  },
  {
    Icon: AIDevelopmentIcon,
    title: "AI Development",
    description: "We build production-ready applications powered by AI — from intelligent features to full AI-native products, shipped with precision and performance.",
    accent: "#8B5CF6",
  },
];

/* ─── Section ─── */

export default function Services() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            You have a vision,{" "}
            <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
              we have your back
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-bg-card/40 border border-border-light hover:border-opacity-50 transition-all duration-500 relative overflow-hidden"
              style={{ "--card-accent": s.accent } as React.CSSProperties}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = s.accent + "50"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = ""; }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 30% 20%, ${s.accent}10, transparent 70%)` }}
              />
              <div className="relative">
                <div className="mb-6">
                  <s.Icon />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
