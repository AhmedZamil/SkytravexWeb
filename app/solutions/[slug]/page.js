import { notFound } from 'next/navigation';
import SolutionView from '@/components/SolutionView';
import { solutions, solutionBySlug } from '@/lib/solutions';

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = solutionBySlug[slug];
  return s ? { title: `For ${s.name.toLowerCase()}`, description: s.intro } : {};
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  if (!solutionBySlug[slug]) notFound();
  return <SolutionView slug={slug} />;
}
