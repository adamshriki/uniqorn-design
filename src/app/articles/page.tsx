"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const articles = [
  {
    title: "The Ultimate Guide to SaaS Product Design",
    excerpt: "By focusing on creating an intuitive and user-friendly interface, SaaS companies can enhance the overall user experience and drive customer satisfaction.",
    link: "https://uniqorn.design/article/the-ultimate-guide-to-saas-product-design/",
    readTime: "6 min read",
    gradient: "from-purple-600/40 via-violet-500/20 to-indigo-700/30",
  },
  {
    title: "The High Cost of Interruption: Re-evaluating the Modal Dialog in Modern UX",
    excerpt: "The Dialog has morphed from a specific utility pattern into a catch-all container for almost every UI problem.",
    link: "https://medium.com/@adamshriki/the-high-cost-of-interruption-re-evaluating-the-modal-dialog-in-modern-ux-e448fb7559ff",
    readTime: "8 min read",
    gradient: "from-cyan-600/40 via-teal-500/20 to-blue-700/30",
  },
  {
    title: "The different types of 'Saving' options — and how to choose the right one",
    excerpt: "Reviewing the different options for saving information in complex systems and how to choose the best choice for the user.",
    link: "https://uniqorn.design/article/the-different-types-of-saving-options-and-how-to-choose-the-right-one/",
    readTime: "5 min read",
    gradient: "from-amber-600/40 via-orange-500/20 to-yellow-700/30",
  },
];

export default function ArticlesPage() {
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
          <motion.a
            href={articles[0].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block group rounded-3xl bg-bg-card border border-border-light overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className={`aspect-[21/9] bg-gradient-to-br ${articles[0].gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08),transparent)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold font-[family-name:var(--font-display)] text-white/10 group-hover:text-white/20 transition-colors duration-500">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-4 h-4 text-text-muted" />
                <span className="text-text-muted text-sm">{articles[0].readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-text mb-4 group-hover:text-primary-light transition-colors">
                {articles[0].title}
              </h2>
              <p className="text-text-secondary text-lg mb-6 max-w-3xl">{articles[0].excerpt}</p>
              <span className="inline-flex items-center gap-2 text-primary-light font-medium group-hover:gap-3 transition-all">
                Read article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Other Articles */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.slice(1).map((article, i) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="group rounded-2xl bg-bg-card border border-border-light overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className={`aspect-[16/9] bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08),transparent)]" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-4 h-4 text-text-muted" />
                  <span className="text-text-muted text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-text mb-3 group-hover:text-primary-light transition-colors">
                  {article.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary-light text-sm font-medium group-hover:gap-3 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
