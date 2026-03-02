"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", description: "Understanding your users, business goals, and technical constraints" },
  { num: "02", title: "Design", description: "Crafting intuitive interfaces through iterative design sprints" },
  { num: "03", title: "Validate", description: "Testing with real users to ensure we're solving the right problems" },
  { num: "04", title: "Deliver", description: "Pixel-perfect handoff with dev-ready specifications" },
];

export default function Process() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-20 text-center"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
            Process
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center"
            >
              <div className="w-24 h-24 rounded-full bg-bg-card border border-border-light flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
                  {step.num}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-text-secondary text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
