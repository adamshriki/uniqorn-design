"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "@/lib/utils";

const testimonials = [
  {
    quote: "Uniqorn Design transformed our complex cybersecurity platform into something our users actually enjoy using. Their attention to detail is unmatched.",
    name: "Yemima Duchovny",
    title: "VP Product, Hysolate",
    photo: "/images/testimonial-yemima.png",
  },
  {
    quote: "Working with Uniqorn was a game-changer. They understood our vision and delivered a product that exceeded our expectations in every way.",
    name: "Vanessa Melas",
    title: "Head of Product, Careology",
    photo: "/images/testimonial-vanessa.png",
  },
  {
    quote: "The team brought incredible energy and expertise to our project. They didn't just design screens — they solved real problems for our users.",
    name: "Ayman Nadeem",
    title: "Product Lead, Pendo",
    photo: "/images/testimonial-ayman.png",
  },
  {
    quote: "Uniqorn's design sprint approach helped us move fast without sacrificing quality. They're true partners in every sense of the word.",
    name: "Alon Arvatz",
    title: "CEO, IntSights",
    photo: "/images/testimonial-alon.png",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-16 text-center"
        >
          What our clients{" "}
          <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
            say
          </span>
        </motion.h2>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-2xl bg-bg-card/50 backdrop-blur-sm border border-border-light"
            >
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8 italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={img(testimonials[active].photo)}
                  alt={testimonials[active].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">{testimonials[active].name}</p>
                  <p className="text-text-muted text-sm">{testimonials[active].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === active ? "bg-primary w-8" : "bg-text-muted/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
