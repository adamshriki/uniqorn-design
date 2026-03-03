"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { articles } from "@/data/articles";
import { img } from "@/lib/utils";

export default function ArticlesPreview() {
  const preview = articles.slice(0, 3);

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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {preview.map((a, i) => {
            const isExternal = !!a.external;
            return (
              <motion.div
                key={a.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {isExternal ? (
                  <a
                    href={a.external!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl bg-bg-surface/50 border border-border-light hover:border-primary/30 transition-all duration-300 overflow-hidden"
                  >
                    <CardContent article={a} isExternal />
                  </a>
                ) : (
                  <Link
                    href={`/articles/${a.slug}`}
                    className="group block rounded-2xl bg-bg-surface/50 border border-border-light hover:border-primary/30 transition-all duration-300 overflow-hidden"
                  >
                    <CardContent article={a} />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-primary-light font-medium hover:gap-3 transition-all"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CardContent({
  article,
  isExternal,
}: {
  article: (typeof articles)[0];
  isExternal?: boolean;
}) {
  return (
    <>
      <div className="aspect-video relative overflow-hidden">
        <img
          src={img(article.thumbnail)}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        {isExternal && (
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/70 text-xs text-pink-400 flex items-center gap-1">
            <ExternalLink className="w-3 h-3" /> Medium
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
          <span className="px-2 py-0.5 text-xs rounded-full bg-primary/15 text-primary-light">
            {article.category}
          </span>
          <Clock size={14} />
          {article.readTime}
        </div>
        <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary-light transition-colors text-text">
          {article.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        <span className="text-primary-light text-sm font-medium group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
          {isExternal ? (
            <>
              Read on Medium <ExternalLink className="w-3.5 h-3.5" />
            </>
          ) : (
            <>Read more →</>
          )}
        </span>
      </div>
    </>
  );
}
