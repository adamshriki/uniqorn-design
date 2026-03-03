"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "They managed to get up to speed with all the complexities of our products quickly and immediately made a difference. They're great to work with and bring great ideas to the table.",
    summary: "Significant UX improvement of an existing healthtech system",
    name: "Vanessa Johnson",
    title: "Product manager",
    company: "Careology",
    photo: "/images/testimonials/vanessa.png",
    logo: "/images/testimonials/careology-logo.svg",
    accent: "#10B981",
  },
  {
    quote:
      'Adam lives and breathes product design. He is a guru with a keen eye and high attention to detail. I can\'t wait to see Adam grow to become the next "Jony Ive" of SaaS products.',
    summary:
      "Cross-platform healthtech product design from 0 to 100k monthly users",
    name: "Ayman Horani",
    title: "Product manager",
    company: "Ummanu",
    photo: "/images/testimonials/ayman.png",
    logo: "/images/testimonials/ummanu-logo.svg",
    accent: "#7C3AED",
  },
  {
    quote:
      "Adam and his team always deliver amazing results under very tight schedules and constraints. If you'll get to work with Adam and his team - you are surely one lucky fellow.",
    summary:
      "Comprehensive UX research and hands on product design implementation",
    name: "Alon Kollmann",
    title: "Engineering Manager",
    company: "Hysolate",
    photo: "/images/testimonials/alon.png",
    logo: "/images/testimonials/hysolate-logo.svg",
    accent: "#06B6D4",
  },
  {
    quote:
      "Their UX ideas have turned complex and cumbersome systems into convenient and simple-to-use interfaces. It has been invaluable in developing an effective interface.",
    summary:
      "Increasing usability by simplifying complex flows in a crypto trading system",
    name: "Yemima Cohen Aharoni, PhD",
    title: "Director of Operations",
    company: "LQFI",
    photo: "/images/testimonials/yemima.png",
    logo: "/images/testimonials/lqfi-logo.svg",
    accent: "#F59E0B",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const goNext = useCallback(
    () => setActive((p) => (p + 1) % testimonials.length),
    []
  );
  const goPrev = useCallback(
    () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(goNext, 7000);
    return () => clearInterval(timer);
  }, [goNext]);

  const t = testimonials[active];

  return (
    <section className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-10 transition-colors duration-1000"
          style={{ backgroundColor: t.accent }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary-light text-sm uppercase tracking-[0.2em] mb-3 font-medium">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold">
            The awesome people we{" "}
            <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
              work with
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="rounded-3xl border border-border-light bg-bg-card/60 backdrop-blur-md p-8 md:p-12 lg:p-16 relative overflow-hidden"
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
                style={{
                  background: `linear-gradient(90deg, ${t.accent}, transparent)`,
                }}
              />

              {/* Quote icon */}
              <Quote
                size={48}
                className="mb-6 opacity-20"
                style={{ color: t.accent }}
              />

              {/* Quote text */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-text leading-relaxed font-light mb-8">
                {t.quote}
              </blockquote>

              {/* Summary */}
              <p
                className="text-sm md:text-base font-medium mb-10 inline-block px-4 py-2 rounded-full"
                style={{
                  color: t.accent,
                  backgroundColor: `${t.accent}15`,
                }}
              >
                {t.summary}
              </p>

              {/* Author */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full overflow-hidden border-2 flex-shrink-0"
                    style={{ borderColor: `${t.accent}40` }}
                  >
                    <img
                      src={img(t.photo)}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-text">{t.name}</p>
                    <p className="text-text-secondary text-sm">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>

                {/* Company logo */}
                <div className="h-8 opacity-50">
                  <img
                    src={img(t.logo)}
                    alt={t.company}
                    className="h-full object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-14 w-10 h-10 rounded-full bg-bg-card/80 border border-border-light flex items-center justify-center text-text-secondary hover:text-text hover:border-primary/40 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-14 w-10 h-10 rounded-full bg-bg-card/80 border border-border-light flex items-center justify-center text-text-secondary hover:text-text hover:border-primary/40 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots + counter */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative h-3 rounded-full transition-all duration-500 cursor-pointer"
              style={{
                width: i === active ? 32 : 12,
                backgroundColor:
                  i === active ? t.accent : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
