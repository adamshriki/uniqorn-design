"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { img } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/* ---------- Animated SVG icons for "Our Approach" ---------- */

function UserCenteredIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      {/* Person silhouette */}
      <motion.circle
        cx="32" cy="20" r="8"
        stroke="#A78BFA" strokeWidth="2" fill="none"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      />
      <motion.path
        d="M18 48c0-8 6-14 14-14s14 6 14 14"
        stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      {/* Orbiting target rings */}
      <motion.circle
        cx="32" cy="32" r="24"
        stroke="#7C3AED" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity={0.4}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="32" cy="32" r="30"
        stroke="#06B6D4" strokeWidth="1" strokeDasharray="6 6" fill="none" opacity={0.25}
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      {/* Pulsing heart */}
      <motion.path
        d="M32 38l-3-3c-2-2-3-3.5-3-5a3 3 0 015.5-1.5L32 29l.5-.5A3 3 0 0138 30c0 1.5-1 3-3 5l-3 3z"
        fill="#F472B6"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  );
}

function TransparentProcessIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      {/* Glass panel */}
      <motion.rect
        x="12" y="12" width="40" height="40" rx="6"
        stroke="#A78BFA" strokeWidth="2" fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      {/* Grid lines inside (transparent = visible) */}
      {[24, 32, 40].map((y) => (
        <motion.line
          key={`h${y}`}
          x1="16" y1={y} x2="48" y2={y}
          stroke="#7C3AED" strokeWidth="0.8" opacity={0.3}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: (y - 24) * 0.1 }}
        />
      ))}
      {[24, 32, 40].map((x) => (
        <motion.line
          key={`v${x}`}
          x1={x} y1="16" x2={x} y2="48"
          stroke="#7C3AED" strokeWidth="0.8" opacity={0.3}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: (x - 24) * 0.1 }}
        />
      ))}
      {/* Eye in center */}
      <motion.ellipse
        cx="32" cy="32" rx="10" ry="6"
        stroke="#06B6D4" strokeWidth="2" fill="none"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      <motion.circle
        cx="32" cy="32" r="3"
        fill="#06B6D4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />
      {/* Scanning line */}
      <motion.line
        x1="12" y1="32" x2="52" y2="32"
        stroke="#06B6D4" strokeWidth="1.5" opacity={0.5}
        animate={{ y1: [16, 48, 16], y2: [16, 48, 16] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function TrackRecordIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      {/* Trophy cup */}
      <motion.path
        d="M22 16h20v6c0 8-4 14-10 16-6-2-10-8-10-16v-6z"
        stroke="#F59E0B" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
      />
      {/* Trophy handles */}
      <motion.path
        d="M22 20c-4 0-7 3-7 6s3 6 7 6"
        stroke="#F59E0B" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.path
        d="M42 20c4 0 7 3 7 6s-3 6-7 6"
        stroke="#F59E0B" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      {/* Base */}
      <motion.path
        d="M28 38v4h8v-4M26 42h12v3H26z"
        stroke="#F59E0B" strokeWidth="1.5" fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      />
      {/* Star */}
      <motion.path
        d="M32 22l2 4 4.5.5-3.2 3.2.7 4.5L32 32l-4 2.2.7-4.5-3.2-3.2L30 26z"
        fill="#F59E0B"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      />
      {/* Sparkles */}
      {[
        { cx: 14, cy: 12, d: 0 },
        { cx: 50, cy: 12, d: 0.2 },
        { cx: 10, cy: 34, d: 0.4 },
        { cx: 54, cy: 34, d: 0.6 },
      ].map((s, i) => (
        <motion.circle
          key={i}
          cx={s.cx} cy={s.cy} r="1.5"
          fill="#FBBF24"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: s.d }}
        />
      ))}
    </svg>
  );
}

function SeamlessIntegrationIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      {/* Two puzzle pieces interlocking */}
      <motion.path
        d="M14 24h10v-4a4 4 0 018 0v4h10v10h-4a4 4 0 000 8h4v10H14V24z"
        stroke="#A78BFA" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.2 }}
      />
      {/* Connection dots on edges */}
      {[
        { cx: 28, cy: 20 },
        { cx: 38, cy: 38 },
      ].map((d, i) => (
        <motion.circle
          key={i}
          cx={d.cx} cy={d.cy} r="3"
          fill="#7C3AED"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
      {/* Rotating gear */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "46px 46px" }}
      >
        <circle cx="46" cy="46" r="5" stroke="#06B6D4" strokeWidth="1.5" fill="none" />
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 46 + Math.cos(rad) * 7;
          const y = 46 + Math.sin(rad) * 7;
          return (
            <rect
              key={angle}
              x={x - 1.5} y={y - 1.5} width="3" height="3" rx="0.5"
              fill="#06B6D4"
            />
          );
        })}
      </motion.g>
      {/* Data flow lines */}
      <motion.path
        d="M20 50c6-4 10-2 16-6s8-2 14-6"
        stroke="#06B6D4" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity={0.4}
        animate={{ strokeDashoffset: [0, -24] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

const values = [
  { icon: UserCenteredIcon, title: "User-Centered Design", desc: "Every pixel serves the user. We research, test, and iterate until the experience feels effortless." },
  { icon: TransparentProcessIcon, title: "Transparent Process", desc: "No black boxes. Our clients are partners in every stage—from discovery through final delivery." },
  { icon: TrackRecordIcon, title: "Proven Track Record", desc: "Dozens of successful digital products over the past decade, used by hundreds of thousands of people." },
  { icon: SeamlessIntegrationIcon, title: "Seamless Integration", desc: "We embed within your product and dev teams, aligning design with real goals and technical constraints." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-light text-sm uppercase tracking-[0.2em] mb-4 font-medium"
          >
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-display)] mb-6 bg-gradient-to-r from-text via-primary-light to-secondary bg-clip-text text-transparent"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-text-secondary text-lg leading-relaxed"
          >
            {[
              "Uniqorn Design is a passionate group of designers obsessed with creating digital products that people love. Design isn't just what we do—it's who we are. We pour our passion and creativity into every product, transforming ideas into experiences that resonate.",
              "Our greatest joy comes from seeing our digital products being embraced by hundreds of thousands of people. We are constantly pushing ourselves to create the next big thing, and we're always eager to work hard to achieve it.",
              "But what sets us apart from other design teams is our proven track record of success. Over the past decade, we have designed dozens of digital products that have been hugely successful, and we have the processes in place to ensure that every project we take on is a triumph.",
              "Our transparent and efficient processes are specifically tailored to the needs of diverse product and development teams. We don't just design for design's sake; we become an integral part of the product and technological decision-making processes. This means that our designs are always in perfect harmony with the existing goals, capabilities, and limitations.",
            ].map((text, i) => (
              <motion.p key={i} custom={i} variants={fadeUp}>
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-center mb-16 bg-gradient-to-r from-text to-primary-light bg-clip-text text-transparent"
          >
            Our Approach
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-bg-card border border-border-light hover:border-primary/30 transition-all duration-500 group hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors p-2">
                  <v.icon />
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-text mb-3">{v.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] mb-16 text-center bg-gradient-to-r from-text to-primary-light bg-clip-text text-transparent"
          >
            Meet the Founder
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-4xl mx-auto"
          >
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10">
                <img
                  src={img("/images/adam-shriki.webp")}
                  alt="Adam Shriki"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-text mb-1">
                Adam Shriki
              </h3>
              <p className="text-primary-light font-medium mb-5">
                Founder & Lead Product Designer
              </p>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                Product designer with 10+ years of experience building users human-loved, enterprise-grade digital products. Principal Product Designer at Boomi, leading the Data Integration product in Israel and the design of Knowledge Hub, an AI-powered RAG knowledge base. Founder and lead designer at Uniqorn Design, partnering with startups across Cybersecurity, SaaS, Fintech, and Healthtech to deliver impactful, user-centered solutions.
              </p>
              <a
                href="https://adamshriki.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-light hover:text-primary font-medium transition-colors group"
              >
                adamshriki.com
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <path d="M5 3h8v8M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-bg-card to-secondary/10 border border-border-light"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] mb-4 text-text">
              Ready to work with us?
            </h2>
            <p className="text-text-secondary mb-8 text-lg">
              Let&apos;s create something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
