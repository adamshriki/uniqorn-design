"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && project && lightboxIndex < project.images.length - 1)
        setLightboxIndex(lightboxIndex + 1);
      if (e.key === "ArrowLeft" && lightboxIndex > 0)
        setLightboxIndex(lightboxIndex - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, project]);

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
  const galleryImages = project.images.slice(1);

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

      {/* Hero Image */}
      <section className="px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div
            className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 cursor-pointer"
            onClick={() => setLightboxIndex(0)}
          >
            <img
              src={img(project.images[0])}
              alt={project.name}
              className="w-full object-cover"
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

      {/* Image Gallery */}
      {galleryImages.length > 0 && (
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto space-y-6">
            {galleryImages.map((image, i) => {
              const globalIndex = i + 1;
              const isFullWidth = i % 3 === 0;

              if (isFullWidth) {
                return (
                  <motion.div
                    key={image}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl overflow-hidden shadow-lg shadow-black/20 cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow duration-300"
                    onClick={() => setLightboxIndex(globalIndex)}
                  >
                    <img
                      src={img(image)}
                      alt={`${project.name} - ${globalIndex + 1}`}
                      className="w-full object-cover"
                    />
                  </motion.div>
                );
              }

              // For pairs (i%3 === 1), render a 2-col row
              if (i % 3 === 1) {
                const nextImage = galleryImages[i + 1];
                return (
                  <div key={image} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5 }}
                      className="rounded-2xl overflow-hidden shadow-lg shadow-black/20 cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow duration-300"
                      onClick={() => setLightboxIndex(globalIndex)}
                    >
                      <img
                        src={img(image)}
                        alt={`${project.name} - ${globalIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    {nextImage && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="rounded-2xl overflow-hidden shadow-lg shadow-black/20 cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow duration-300"
                        onClick={() => setLightboxIndex(globalIndex + 1)}
                      >
                        <img
                          src={img(nextImage)}
                          alt={`${project.name} - ${globalIndex + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )}
                  </div>
                );
              }

              // i%3 === 2 is already rendered as part of the pair above
              return null;
            })}
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto flex justify-between items-center border-t border-border-light pt-8">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group text-left">
              <span className="text-text-muted text-sm">← Previous</span>
              <p className="text-text font-semibold group-hover:text-primary-light transition-colors">
                {prev.name}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group text-right">
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl font-light z-10 transition-colors"
              onClick={closeLightbox}
            >
              ×
            </button>

            {/* Nav arrows */}
            {lightboxIndex > 0 && (
              <button
                className="absolute left-4 md:left-8 text-white/60 hover:text-white text-5xl font-light z-10 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(lightboxIndex - 1);
                }}
              >
                ‹
              </button>
            )}
            {lightboxIndex < project.images.length - 1 && (
              <button
                className="absolute right-4 md:right-8 text-white/60 hover:text-white text-5xl font-light z-10 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(lightboxIndex + 1);
                }}
              >
                ›
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={img(project.images[lightboxIndex])}
              alt={`${project.name} - ${lightboxIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg cursor-default"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {lightboxIndex + 1} / {project.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
