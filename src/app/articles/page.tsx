"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";
import { img } from "@/lib/utils";

export default function ArticlesPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-light text-sm uppercase tracking-[0.2em] mb-4 font-medium"
          >
            Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-display)] mb-6 bg-gradient-to-r from-text via-primary-light to-secondary bg-clip-text text-transparent"
          >
            Insights & Articles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto"
          >
            Thoughts on design, UX patterns, and building great products
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <Link href={`/articles/${featured.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block group rounded-3xl bg-bg-card border border-border-light overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="aspect-[21/9] relative overflow-hidden">
                <img
                  src={img(featured.thumbnail)}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary-light">
                    {featured.category}
                  </span>
                  <Clock className="w-4 h-4 text-text-muted" />
                  <span className="text-text-muted text-sm">
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-text mb-4 group-hover:text-primary-light transition-colors">
                  {featured.title}
                </h2>
                <p className="text-text-secondary text-lg mb-6 max-w-3xl">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-primary-light font-medium group-hover:gap-3 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Other Articles */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {rest.map((article, i) => {
            const isExternal = !!article.external;
            const CardWrapper = isExternal ? "a" : Link;
            const linkProps = isExternal
              ? {
                  href: article.external!,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                }
              : { href: `/articles/${article.slug}` };

            return (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <CardWrapper
                  {...(linkProps as any)}
                  className={`group block rounded-2xl bg-bg-card border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 ${
                    isExternal
                      ? "border-pink-500/20 hover:border-pink-500/40"
                      : "border-border-light"
                  }`}
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={img(article.thumbnail)}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    {isExternal && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-xs text-pink-400 flex items-center gap-1.5">
                        <ExternalLink className="w-3 h-3" /> Medium
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/15 text-primary-light">
                        {article.category}
                      </span>
                      <Clock className="w-4 h-4 text-text-muted" />
                      <span className="text-text-muted text-sm">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-text mb-3 group-hover:text-primary-light transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary-light text-sm font-medium group-hover:gap-3 transition-all">
                      {isExternal ? (
                        <>
                          Read on Medium{" "}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          Read article <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </span>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
