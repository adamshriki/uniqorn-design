"use client";

import { motion } from "framer-motion";
import { img } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

const specs = [
  {
    title: "SaaS",
    description: "Designing intuitive interfaces for complex software products that users actually love.",
    image: "/images/spec-saas.png",
  },
  {
    title: "Cybersecurity",
    description: "Making security products accessible without compromising on the power users need.",
    image: "/images/spec-cyber.png",
  },
  {
    title: "Healthtech",
    description: "Creating empathetic digital health experiences that improve patient outcomes.",
    image: "/images/spec-health.png",
  },
  {
    title: "Fintech / Crypto",
    description: "Building trust through clear, transparent financial product experiences.",
    image: null,
  },
];

export default function Specializations() {
  return (
    <section className="py-32 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-16"
        >
          We specialize in
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl bg-bg-card/50 backdrop-blur-sm border border-border-light hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {spec.image ? (
                <div className="h-56 overflow-hidden">
                  <img
                    src={img(spec.image)}
                    alt={spec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ) : (
                <div className="h-56 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 flex items-center justify-center">
                  <TrendingUp size={80} className="text-primary-light/30" />
                </div>
              )}

              <div className="relative p-8">
                <h3 className="font-display text-2xl font-bold mb-3">{spec.title}</h3>
                <p className="text-text-secondary mb-4">{spec.description}</p>
                <span className="text-primary-light text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
                  See projects →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
