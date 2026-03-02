"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Pendo",
    tags: ["SaaS", "Product Analytics"],
    description: "Redesigning the product analytics experience for thousands of product managers worldwide.",
    gradient: "from-primary/40 via-primary/20 to-secondary/30",
  },
  {
    name: "Hysolate",
    tags: ["Cybersecurity", "Enterprise"],
    description: "Creating an intuitive workspace isolation platform for security-first enterprises.",
    gradient: "from-secondary/40 via-secondary/20 to-primary/30",
  },
  {
    name: "Careology",
    tags: ["Healthtech", "Patient Care"],
    description: "Designing a compassionate cancer care companion that connects patients with their care team.",
    gradient: "from-accent/30 via-primary/20 to-secondary/30",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-32 px-6" id="work">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-16"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
            Work
          </span>
        </motion.h2>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden border border-border-light hover:border-primary/30 transition-all duration-500"
            >
              <div className={`h-64 md:h-80 bg-gradient-to-br ${p.gradient}`} />
              <div className="p-8 bg-bg-card/50">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs bg-primary-dim text-primary-light"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-text-secondary">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="#" className="text-primary-light hover:text-primary transition-colors font-medium">
            See all projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
