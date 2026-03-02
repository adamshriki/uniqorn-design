"use client";

import { motion } from "framer-motion";
import { Users, Eye, Trophy, Puzzle } from "lucide-react";
import { img } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const values = [
  { icon: Users, title: "User-Centered Design", desc: "Every pixel serves the user. We research, test, and iterate until the experience feels effortless." },
  { icon: Eye, title: "Transparent Process", desc: "No black boxes. Our clients are partners in every stage—from discovery through final delivery." },
  { icon: Trophy, title: "Proven Track Record", desc: "Dozens of successful digital products over the past decade, used by hundreds of thousands of people." },
  { icon: Puzzle, title: "Seamless Integration", desc: "We embed within your product and dev teams, aligning design with real goals and technical constraints." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-light text-sm uppercase tracking-[0.2em] mb-4 font-medium"
          >
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-display)] mb-6 bg-gradient-to-r from-text via-primary-light to-secondary bg-clip-text text-transparent"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-text-secondary text-lg leading-relaxed"
          >
            {[
              "Uniqorn Design is a passionate group of designers obsessed with creating digital products that people love. Design isn't just what we do—it's who we are. We pour our passion and creativity into every product, transforming ideas into experiences that resonate.",
              "Our greatest joy comes from seeing our digital products being embraced by hundreds of thousands of people. We are constantly pushing ourselves to create the next big thing, and we're always eager to work hard to achieve it.",
              "But what sets us apart from other design teams is our proven track record of success. Over the past decade, we have designed dozens of digital products that have been hugely successful, and we have the processes in place to ensure that every project we take on is a triumph.",
              "Our transparent and efficient processes are specifically tailored to the needs of diverse product and development teams. We don't just design for design's sake; we become an integral part of the product and technological decision-making processes. This means that our designs are always in perfect harmony with the existing goals, capabilities, and limitations.",
            ].map((text, i) => (
              <motion.p key={i} custom={i} variants={fadeUp}>
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-center mb-16 bg-gradient-to-r from-text to-primary-light bg-clip-text text-transparent"
          >
            Our Approach
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-bg-card border border-border-light hover:border-primary/30 transition-all duration-500 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="w-6 h-6 text-primary-light" />
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-text mb-3">{v.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] mb-16 bg-gradient-to-r from-text to-primary-light bg-clip-text text-transparent"
          >
            Meet the Team
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <div className="p-8 rounded-2xl bg-bg-card border border-border-light max-w-sm mx-auto">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden bg-gradient-to-br from-primary/30 to-secondary/30">
                <img
                  src={img("/images/testimonial-ayman.png")}
                  alt="Adam Shriki"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-text">Adam Shriki</h3>
              <p className="text-primary-light text-sm mt-1">Founder & Lead Designer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-bg-card to-secondary/10 border border-border-light"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] mb-4 text-text">
              Ready to work with us?
            </h2>
            <p className="text-text-secondary mb-8 text-lg">
              Let&apos;s create something extraordinary together.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
