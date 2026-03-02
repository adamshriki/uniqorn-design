"use client";

import { motion } from "framer-motion";
import { Search, Palette, Sparkles, PenTool, Play, Code } from "lucide-react";

const services = [
  { icon: Search, title: "UX Research", description: "Deep user research to uncover insights that drive design decisions and product strategy." },
  { icon: Palette, title: "UI Design", description: "Pixel-perfect interfaces that balance aesthetics with usability across every screen." },
  { icon: Sparkles, title: "Brand Design", description: "Distinctive visual identities that capture your brand essence and stand out." },
  { icon: PenTool, title: "Illustration", description: "Custom illustrations and iconography that bring personality to your product." },
  { icon: Play, title: "Motion Design", description: "Thoughtful animations and micro-interactions that delight and guide users." },
  { icon: Code, title: "Frontend Development", description: "Production-ready code that brings designs to life with precision and performance." },
];

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
              className="group p-8 rounded-2xl bg-bg-surface/50 border border-border-light hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <s.icon
                size={32}
                className="text-text-muted group-hover:text-primary-light transition-colors duration-300 mb-6"
              />
              <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
