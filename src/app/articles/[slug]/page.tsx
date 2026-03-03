import { articles } from "@/data/articles";
import { articleContent } from "@/data/article-content";
import ArticlePageClient from "./ArticlePageClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles
    .filter((a) => !a.external)
    .map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug && !a.external);
  if (!article) notFound();
  const content = articleContent[slug] ?? [];
  const related = articles
    .filter((a) => a.slug !== slug && !a.external)
    .slice(0, 2);

  return (
    <ArticlePageClient
      article={article}
      content={content}
      relatedArticles={related}
    />
  );
}
