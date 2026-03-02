"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { img } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  SaaS: "#7C3AED",
  Cybersecurity: "#06B6D4",
  Healthtech: "#10B981",
  Fintech: "#F59E0B",
};

export default function ProjectPageClient({ slug }: { slug: string }) {
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <main>
        <Navigation />
        <div className="pt-40 pb-32 px-6 text-center">
          <h1 className="text-4xl font-bold text-text">Project not found</h1>
          <Link href="/work" className="text-primary-light mt-4 inline-block hover:underline">
            ← Back to Work
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const prev = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const next = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;
  const paragraphs = project.description.split("\n\n");

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/work"
              className="text-text-secondary hover:text-primary-light transition-colors text-sm inline-flex items-center gap-2 mb-8"
            >
              ← Back to Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-4 flex-wrap"
          >
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: categoryColors[project.category] }}
            >
              {project.category}
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-bg-glass border border-border text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-display)] mb-4 bg-gradient-to-r from-text via-primary-light to-secondary bg-clip-text text-transparent"
          >
            {project.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-xl md:text-2xl"
          >
            {project.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Thumbnail */}
      <section className="px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
            <img
              src={img(project.thumbnail)}
              alt={project.name}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Description */}
      <section className="px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {paragraphs.map((p, i) => (
            <p key={i} className="text-text-secondary text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </motion.div>
      </section>

      {/* Prev / Next */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto flex justify-between items-center border-t border-border-light pt-8">
          {prev ? (
            <Link
              href={`/uniqorn-design/work/${prev.slug}`}
              className="group text-left"
            >
              <span className="text-text-muted text-sm">← Previous</span>
              <p className="text-text font-semibold group-hover:text-primary-light transition-colors">
                {prev.name}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/uniqorn-design/work/${next.slug}`}
              className="group text-right"
            >
              <span className="text-text-muted text-sm">Next →</span>
              <p className="text-text font-semibold group-hover:text-primary-light transition-colors">
                {next.name}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
