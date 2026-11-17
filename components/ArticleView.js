import Link from 'next/link';
import CtaBand from './CtaBand';
import { insightBySlug, insights } from '@/lib/insights';

const fmt = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function ArticleView({ slug }) {
  const a = insightBySlug[slug];
  if (!a) return null;
  const more = insights.filter((i) => i.slug !== slug);

  return (
    <>
      <article className="article">
        <header className="article-head wrap">
          <Link href="/insights" className="article-back">
            All insights
          </Link>
          <p className="article-meta hero-in" style={{ '--i': 0 }}>
            {a.topic}, {a.minutes} min read, <time dateTime={a.date}>{fmt(a.date)}</time>
          </p>
          <h1 className="hero-in" style={{ '--i': 1 }}>
            {a.title}
          </h1>
          <p className="lede hero-in" style={{ '--i': 2 }}>
            {a.summary}
          </p>
        </header>
        <div className="article-body wrap">
          {a.body.map((para, index) =>
            para.startsWith('## ') ? (
              <h2 key={index}>{para.slice(3)}</h2>
            ) : (
              <p key={index}>{para}</p>
            )
          )}
        </div>
        <aside className="article-more wrap" aria-label="More insights">
          <p className="more-title">Keep reading</p>
          <ul className="article-list">
            {more.map((m) => (
              <li key={m.slug}>
                <Link href={`/insights/${m.slug}`}>
                  <span className="article-meta">{m.topic}</span>
                  <strong>{m.title}</strong>
                  <span>{m.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>
      <CtaBand />
    </>
  );
}
