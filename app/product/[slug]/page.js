import { notFound } from 'next/navigation';
import ProductView from '@/components/ProductView';
import { products, productBySlug } from '@/lib/products';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = productBySlug[slug];
  return p ? { title: p.name, description: p.intro } : {};
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  if (!productBySlug[slug]) notFound();
  return <ProductView slug={slug} />;
}
