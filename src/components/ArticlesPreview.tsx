"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const articles = [
  {
    title: "The Ultimate Guide to SaaS Product Design",
    excerpt: "Everything you need to know about designing SaaS products that users love and businesses thrive on.",
    readTime: "8 min read",
  },
  {
    title: "The High Cost of Interruption: Re-evaluating the Modal Dialog in Modern UX",
    excerpt: "Why modal dialogs might be costing you more than you think, and what to use instead.",
    readTime: "6 min read",
  },
];

export default function ArticlesPreview() {
  return (
    <section className="py-32 px-6" id="articles">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-16"
        >
          Latest{" "}
          <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
            Insights
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-8 rounded-2xl bg-bg-surface/50 border border-border-light hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                <Clock size={14} />
                {a.readTime}
              </div>
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary-light transition-colors">
                {a.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4">{a.excerpt}</p>
              <span className="text-primary-light text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
                Read more →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
