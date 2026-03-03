"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { img } from "@/lib/utils";
import type { Article } from "@/data/articles";
import type { ContentBlock } from "@/data/article-content";

interface Props {
  article: Article;
  content: ContentBlock[];
  relatedArticles: Article[];
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "heading":
      return block.level === 2 ? (
        <h2
          key={i}
          className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-text mt-12 mb-4"
        >
          {block.text}
        </h2>
      ) : (
        <h3
          key={i}
          className="text-xl md:text-2xl font-semibold font-[family-name:var(--font-display)] text-text mt-8 mb-3"
        >
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={i} className="text-text-secondary leading-relaxed mb-4">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={i} className="list-disc list-inside space-y-2 mb-6 text-text-secondary">
          {block.items.map((item, j) => (
            <li key={j} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure key={i} className="my-8">
          <img
            src={img(block.src)}
            alt={block.alt}
            className="rounded-xl w-full"
          />
          {block.caption && (
            <figcaption className="text-text-muted text-sm mt-2 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "link":
      return (
        <p key={i} className="mb-4">
          <a
            href={block.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light hover:text-secondary transition-colors underline underline-offset-4"
          >
            {block.text} ↗
          </a>
        </p>
      );
    case "tip":
      return (
        <blockquote
          key={i}
          className="border-l-4 border-primary/50 bg-primary/5 rounded-r-lg p-4 my-6 text-text-secondary italic"
        >
          💡 {block.text}
        </blockquote>
      );
    default:
      return null;
  }
}

export default function ArticlePageClient({
  article,
  content,
  relatedArticles,
}: Props) {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-text-muted hover:text-primary-light transition-colors mb-8 text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to articles
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary-light">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-text-muted text-sm">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span className="flex items-center gap-1 text-text-muted text-sm">
              <Calendar className="w-3.5 h-3.5" />{" "}
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1 text-text-muted text-sm">
              <User className="w-3.5 h-3.5" /> {article.author}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-8 text-text leading-tight"
          >
            {article.title}
          </motion.h1>

          {article.heroImage && (
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              src={img(article.heroImage)}
              alt={article.title}
              className="w-full rounded-2xl mb-12"
            />
          )}
        </div>
      </section>

      {/* Content */}
      <article className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {content.map(renderBlock)}
          </motion.div>
        </div>
      </article>

      {/* Related */}
      {relatedArticles.length > 0 && (
        <section className="px-6 pb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-text mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((ra) => (
                <Link
                  key={ra.slug}
                  href={`/articles/${ra.slug}`}
                  className="group rounded-2xl bg-bg-card border border-border-light overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  <img
                    src={img(ra.thumbnail)}
                    alt={ra.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-5">
                    <span className="text-xs text-primary-light font-medium">
                      {ra.category}
                    </span>
                    <h3 className="font-bold font-[family-name:var(--font-display)] text-text mt-1 mb-2 group-hover:text-primary-light transition-colors">
                      {ra.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-primary-light text-sm">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
