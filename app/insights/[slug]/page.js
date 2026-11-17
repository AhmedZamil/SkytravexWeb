import { notFound } from 'next/navigation';
import ArticleView from '@/components/ArticleView';
import { insights, insightBySlug } from '@/lib/insights';

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = insightBySlug[slug];
  return a ? { title: a.title, description: a.summary } : {};
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  if (!insightBySlug[slug]) notFound();
  return <ArticleView slug={slug} />;
}
