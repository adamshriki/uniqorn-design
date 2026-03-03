"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { img } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Featured slugs — hand-picked to showcase range across categories
const featuredSlugs = ["pendo", "atera", "hysolate", "careology", "lunar", "lqfi"];
const featured = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug)!)
  .filter(Boolean);

const categoryColors: Record<string, string> = {
  SaaS: "#7C3AED",
  Cybersecurity: "#06B6D4",
  Healthtech: "#10B981",
  Fintech: "#F59E0B",
};

export default function FeaturedWork() {
  // Layout: first 2 projects large (hero row), next 4 in a 2x2 grid
  const heroProjects = featured.slice(0, 2);
  const gridProjects = featured.slice(2, 6);

  return (
    <section className="py-32 px-6 relative" id="work">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-primary-light text-sm uppercase tracking-[0.2em] mb-3 font-medium">
              Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
                Work
              </span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-primary-light hover:text-primary font-medium transition-colors group"
          >
            View all projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Hero Row — 2 large cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {heroProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border-light hover:border-primary/30 bg-bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={img(project.thumbnail)}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                  {/* Category pill */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm"
                    style={{ backgroundColor: `${categoryColors[project.category]}CC` }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags
                      .filter((t) => t !== project.category)
                      .slice(0, 3)
                      .map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs bg-bg-glass border border-border text-text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2 group-hover:text-primary-light transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-text-secondary text-sm lg:text-base line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Grid — 4 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border-light hover:border-primary/30 bg-bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={img(project.thumbnail)}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white backdrop-blur-sm"
                    style={{ backgroundColor: `${categoryColors[project.category]}CC` }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold mb-1 group-hover:text-primary-light transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-text-muted text-xs line-clamp-2">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags
                      .filter((t) => t !== project.category)
                      .slice(0, 2)
                      .map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-full text-[10px] bg-bg-glass border border-border text-text-muted"
                        >
                          {t}
                        </span>
                      ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
