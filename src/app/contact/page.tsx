"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Twitter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent/8 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl mb-6"
          >
            👋
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-display)] mb-6 bg-gradient-to-r from-text via-primary-light to-secondary bg-clip-text text-transparent"
          >
            Let&apos;s break the ice
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto"
          >
            Have a project in mind? We&apos;d love to hear about it.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-bg-card/50 backdrop-blur-xl border border-border-light">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-text mb-2">
                    Thank you!
                  </h3>
                  <p className="text-text-secondary">We&apos;ll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-light text-text placeholder-text-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-light text-text placeholder-text-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-light text-text placeholder-text-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-light text-text placeholder-text-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="+972 50 000 0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-light text-text placeholder-text-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-bg-card border border-border-light hover:border-primary/30 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-primary-light" />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-text mb-1">Email</h3>
              <p className="text-text-secondary">hello@uniqorn.design</p>
            </div>

            <div className="p-6 rounded-2xl bg-bg-card border border-border-light hover:border-primary/30 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-secondary-light" />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-text mb-1">Location</h3>
              <p className="text-text-secondary">Tel Aviv, Israel</p>
            </div>

            <div className="p-6 rounded-2xl bg-bg-card border border-border-light hover:border-primary/30 transition-all duration-500">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-text mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/uniqorn-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-bg-surface border border-border-light flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary/30 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/uniqorndesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-bg-surface border border-border-light flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary/30 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
