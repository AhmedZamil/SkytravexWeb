import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { insights } from '@/lib/insights';

export const metadata = {
  title: 'Insights',
  description: 'Practical guides for travel agency owners on distribution, finance and growth.',
};

const fmt = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function InsightsIndex() {
  return (
    <>
      <PageHero label="Insights" line="Practical notes" accent="for agency owners." text="Short guides on distribution, money and growth, written from the work of building travel platforms." />
      <section className="section section-tight" aria-label="Articles">
        <div className="wrap">
          <ul className="article-list">
            {insights.map((a, index) => (
              <li key={a.slug} data-reveal style={{ '--i': index }}>
                <Link href={`/insights/${a.slug}`}>
                  <span className="article-meta">
                    {a.topic}, {a.minutes} min read
                  </span>
                  <strong>{a.title}</strong>
                  <span>{a.summary}</span>
                  <time dateTime={a.date}>{fmt(a.date)}</time>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
