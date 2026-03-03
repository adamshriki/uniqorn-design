"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Instagram, Shield, Clock, Award, Users, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { img } from "@/lib/utils";

const testimonialSnippets = [
  {
    quote: "They're great to work with and bring great ideas to the table.",
    name: "Vanessa Johnson",
    title: "Product Manager, Careology",
    photo: "/images/testimonials/vanessa.png",
  },
  {
    quote: 'Adam lives and breathes product design. He is a guru with a keen eye.',
    name: "Ayman Horani",
    title: "Product Manager, Ummanu",
    photo: "/images/testimonials/ayman.png",
  },
  {
    quote: "Adam and his team always deliver amazing results under tight schedules.",
    name: "Alon Kollmann",
    title: "Engineering Manager, Hysolate",
    photo: "/images/testimonials/alon.png",
  },
];

const trustSignals = [
  { icon: Shield, label: "NDA Protected", desc: "Your ideas stay confidential" },
  { icon: Clock, label: "24h Response", desc: "We reply within one business day" },
  { icon: Award, label: "15+ Years", desc: "Proven design expertise" },
  { icon: Users, label: "100+ Products", desc: "Shipped across 8 industries" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/adam@uniqorn.design", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try emailing us directly.");
      }
    } catch {
      setError("Network error. Please try emailing us directly.");
    } finally {
      setSubmitting(false);
    }
  }

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
            Have a project in mind? We&apos;d love to hear about it. Tell us your vision and we&apos;ll show you how we can bring it to life.
          </motion.p>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {trustSignals.map((signal, i) => (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-4 rounded-2xl bg-bg-card/50 border border-border-light text-center hover:border-primary/20 transition-colors"
              >
                <signal.icon className="w-6 h-6 text-primary-light mx-auto mb-2" />
                <p className="text-text text-sm font-semibold">{signal.label}</p>
                <p className="text-text-muted text-xs mt-0.5">{signal.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-bg-card/50 backdrop-blur-xl border border-border-light">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-text mb-2">
                    Message sent successfully!
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Thank you for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                  </p>
                  <p className="text-text-muted text-sm">
                    In the meantime, feel free to explore our{" "}
                    <Link href="/work" className="text-primary-light hover:underline">
                      portfolio
                    </Link>
                    .
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot for spam prevention */}
                  <input type="text" name="_honey" style={{ display: "none" }} />
                  <input type="hidden" name="_subject" value="New inquiry from uniqorn.design" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-light text-text placeholder-text-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
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
                        name="company"
                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-light text-text placeholder-text-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-light text-text placeholder-text-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="+972 50 000 0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">What type of project?</label>
                    <select
                      name="project_type"
                      className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-light text-text focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                    >
                      <option value="">Select one...</option>
                      <option value="product-design">Product Design (UX/UI)</option>
                      <option value="design-system">Design System</option>
                      <option value="ux-research">UX Research & Audit</option>
                      <option value="branding">Brand Design</option>
                      <option value="web-design">Website / Landing Page</option>
                      <option value="mobile-app">Mobile App Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Tell us about your project *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border-light text-text placeholder-text-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                      placeholder="What are you building? What challenges are you facing? What's your timeline?"
                    />
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {error}{" "}
                      <a href="mailto:adam@uniqorn.design" className="underline">adam@uniqorn.design</a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Email */}
            <div className="p-6 rounded-2xl bg-bg-card border border-border-light hover:border-primary/30 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-primary-light" />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-text mb-1">Email</h3>
              <a href="mailto:adam@uniqorn.design" className="text-text-secondary hover:text-primary-light transition-colors">
                adam@uniqorn.design
              </a>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl bg-bg-card border border-border-light hover:border-primary/30 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-secondary-light" />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-text mb-1">Location</h3>
              <p className="text-text-secondary">Tel Aviv, Israel</p>
            </div>

            {/* Socials */}
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
                  href="https://www.instagram.com/uniqorndesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-bg-surface border border-border-light flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary/30 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick response promise */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/15">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-primary-light flex-shrink-0" />
                <h3 className="text-base font-bold text-text">Quick Response Promise</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                We understand your time is valuable. Every inquiry receives a personal response within 24 hours — no bots, no templates.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial snippets — social proof */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-muted text-sm uppercase tracking-[0.15em] text-center mb-8"
          >
            Trusted by product leaders worldwide
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialSnippets.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-bg-card/50 border border-border-light"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-text-secondary text-sm italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={img(t.photo)} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-text text-sm font-semibold">{t.name}</p>
                    <p className="text-text-muted text-xs">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process preview */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl bg-bg-card/30 border border-border-light text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-text mb-4">
              What happens after you reach out?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                { step: "01", title: "Discovery Call", desc: "We schedule a 30-min call to understand your product, users, and goals." },
                { step: "02", title: "Proposal & Plan", desc: "You receive a tailored proposal with scope, timeline, and investment." },
                { step: "03", title: "Kick-off", desc: "We hit the ground running with a design sprint in the first week." },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                >
                  <span className="text-3xl font-bold font-display bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
                    {item.step}
                  </span>
                  <h4 className="text-text font-semibold mt-2 mb-1">{item.title}</h4>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
