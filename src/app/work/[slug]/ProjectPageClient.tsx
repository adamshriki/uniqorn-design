"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects, MediaItem } from "@/data/projects";
import { img } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  SaaS: "#7C3AED",
  Cybersecurity: "#06B6D4",
  Healthtech: "#10B981",
  Fintech: "#F59E0B",
};

function MediaRenderer({ item, onClick, className = "" }: { item: MediaItem; onClick?: () => void; className?: string }) {
  if (item.type === "video") {
    return (
      <video
        src={img(item.src)}
        controls
        autoPlay
        muted
        loop
        playsInline
        className={`w-full rounded-xl ${className}`}
      />
    );
  }
  return (
    <img
      src={img(item.src)}
      alt=""
      className={`w-full rounded-xl ${onClick ? "cursor-pointer hover:opacity-90 transition-opacity" : ""} ${className}`}
      onClick={onClick}
    />
  );
}

export default function ProjectPageClient({ slug }: { slug: string }) {
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Collect lightboxable indices (images and gifs only)
  const lightboxableIndices = project
    ? project.media.map((m, i) => (m.type !== "video" ? i : -1)).filter((i) => i >= 0)
    : [];

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    const pos = lightboxableIndices.indexOf(lightboxIndex);
    if (pos > 0) setLightboxIndex(lightboxableIndices[pos - 1]);
  }, [lightboxIndex, lightboxableIndices]);
  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    const pos = lightboxableIndices.indexOf(lightboxIndex);
    if (pos < lightboxableIndices.length - 1) setLightboxIndex(lightboxableIndices[pos + 1]);
  }, [lightboxIndex, lightboxableIndices]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  if (!project) {
    return (
      <main>
        <Navigation />
        <div className="pt-40 pb-32 px-6 text-center">
          <h1 className="text-4xl font-bold">Project not found</h1>
          <Link href="/work" className="text-primary-light mt-4 inline-block hover:underline">← Back to Work</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const prev = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const next = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;
  const paragraphs = project.description.split("\n\n");
  const heroMedia = project.media[0];
  const galleryMedia = project.media.slice(1);

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
            <Link href="/work" className="text-text-secondary hover:text-primary-light transition-colors text-sm inline-flex items-center gap-2 mb-8">
              ← Back to Work
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: categoryColors[project.category] }}>
              {project.category}
            </span>
            {project.tags.filter((tag) => tag !== project.category).map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs rounded-full bg-bg-glass border border-border text-text-secondary">{tag}</span>
            ))}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-display)] mb-4 bg-gradient-to-r from-text via-primary-light to-secondary bg-clip-text text-transparent">
            {project.name}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-xl md:text-2xl">
            {project.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Hero Media */}
      <section className="px-6 pb-16">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
            <MediaRenderer
              item={heroMedia}
              onClick={heroMedia.type !== "video" ? () => setLightboxIndex(0) : undefined}
            />
          </div>
        </motion.div>
      </section>

      {/* Description */}
      <section className="px-6 pb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto space-y-6">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-text-secondary text-lg leading-relaxed">{p}</p>
          ))}
        </motion.div>
      </section>

      {/* Gallery */}
      {galleryMedia.length > 0 && (
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto space-y-6">
            {galleryMedia.map((item, i) => {
              const globalIndex = i + 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl overflow-hidden shadow-lg shadow-black/20"
                >
                  <MediaRenderer
                    item={item}
                    onClick={item.type !== "video" ? () => setLightboxIndex(globalIndex) : undefined}
                  />
                </motion.div>
              );
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
              <p className="text-text font-semibold group-hover:text-primary-light transition-colors">{prev.name}</p>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group text-right">
              <span className="text-text-muted text-sm">Next →</span>
              <p className="text-text font-semibold group-hover:text-primary-light transition-colors">{next.name}</p>
            </Link>
          ) : <div />}
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white z-50">
              <X size={32} />
            </button>
            {lightboxableIndices.indexOf(lightboxIndex) > 0 && (
              <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-4 text-white/70 hover:text-white z-50">
                <ChevronLeft size={40} />
              </button>
            )}
            {lightboxableIndices.indexOf(lightboxIndex) < lightboxableIndices.length - 1 && (
              <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-4 text-white/70 hover:text-white z-50">
                <ChevronRight size={40} />
              </button>
            )}
            <motion.img
              key={lightboxIndex}
              src={img(project.media[lightboxIndex].src)}
              alt=""
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 text-white/50 text-sm">
              {lightboxableIndices.indexOf(lightboxIndex) + 1} / {lightboxableIndices.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
