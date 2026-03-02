"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const projects = [
  { name: "Pendo", tags: ["Product Design", "SaaS"], category: "SaaS" },
  { name: "Lunar", tags: ["Product Design", "Motion Design", "Illustrations", "SaaS"], category: "SaaS" },
  { name: "Hysolate", tags: ["UX Research", "Illustrations", "Product Design", "Motion Design"], category: "Cybersecurity" },
  { name: "Careology", tags: ["UX Research", "Illustrations", "Product Design"], category: "Healthtech" },
  { name: "Ummanu", tags: ["Product Design", "WordPress", "Marketing", "Branding", "Illustrations"], category: "Healthtech" },
  { name: "LQFI", tags: ["Product Design", "UX Research", "Marketing", "Motion Design", "Illustrations"], category: "Fintech" },
  { name: "Carbyne", tags: ["Product Design"], category: "Cybersecurity" },
  { name: "Grin", tags: ["Motion Design", "Product Design", "Illustrations", "UX Research", "Marketing"], category: "SaaS" },
  { name: "Aerospheres", tags: ["Illustrations", "Marketing", "Branding"], category: "Cybersecurity" },
  { name: "Optitex", tags: ["Product Design", "Frontend"], category: "SaaS" },
  { name: "Perception Point", tags: ["Product Design", "UX Research"], category: "Cybersecurity" },
  { name: "Atera", tags: ["WordPress", "Marketing", "Illustrations", "Branding"], category: "SaaS" },
  { name: "Real", tags: ["Marketing", "Illustrations", "Product Design"], category: "Fintech" },
  { name: "Pipelbiz", tags: ["Product Design"], category: "SaaS" },
  { name: "Aetrex", tags: ["Product Design"], category: "Healthtech" },
  { name: "Mend", tags: ["Product Design"], category: "Fintech" },
];

const categoryGradients: Record<string, string> = {
  SaaS: "from-purple-600/40 via-purple-500/20 to-violet-700/30",
  Cybersecurity: "from-cyan-600/40 via-cyan-500/20 to-teal-700/30",
  Healthtech: "from-emerald-600/40 via-emerald-500/20 to-green-700/30",
  Fintech: "from-amber-600/40 via-amber-500/20 to-yellow-700/30",
};

const categoryAccent: Record<string, string> = {
  SaaS: "shadow-purple-500/20",
  Cybersecurity: "shadow-cyan-500/20",
  Healthtech: "shadow-emerald-500/20",
  Fintech: "shadow-amber-500/20",
};

export default function WorkPage() {
  const [activeTag, setActiveTag] = useState("All");
  const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
  const filtered = activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary-light text-sm uppercase tracking-[0.2em] mb-4 font-medium"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-display)] mb-6 bg-gradient-to-r from-text via-primary-light to-secondary bg-clip-text text-transparent"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto"
          >
            We are very proud of our work in various fields
          </motion.p>
        </div>
      </section>

      {/* Tag Filter */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTag === tag
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "border border-border-light text-text-secondary hover:text-text hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className={`group rounded-2xl bg-bg-card border border-border-light overflow-hidden hover:shadow-2xl ${categoryAccent[project.category]} transition-all duration-500 hover:border-primary/30 hover:-translate-y-1`}
                >
                  {/* Thumbnail */}
                  <div className={`aspect-[16/10] bg-gradient-to-br ${categoryGradients[project.category]} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08),transparent)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold font-[family-name:var(--font-display)] text-white/20 group-hover:text-white/30 transition-colors duration-500">
                        {project.name}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-text mb-1">
                      {project.name}
                    </h3>
                    <p className="text-text-muted text-sm mb-4">{project.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-bg-glass border border-border text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
