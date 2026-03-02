"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-32 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-16 text-center"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to transform your product?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Let&apos;s discuss how we can help you create a product your users will love.
            </p>
            <a
              href="mailto:hello@uniqorn.design"
              className="inline-block px-10 py-4 rounded-full bg-white text-primary font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
