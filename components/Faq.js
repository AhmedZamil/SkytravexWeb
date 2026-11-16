import SectionHead from './SectionHead';
import { faqs } from '@/lib/content';

export default function Faq({ items = faqs }) {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="faq-aurora" aria-hidden="true" />
      <div className="wrap faq-grid">
        <SectionHead
          id="faq-title"
          align="left"
          label="Questions"
          line="What agency owners ask"
          accent="before they switch."
        />
        <div className="faq-list">
          {items.map((item, index) => (
            <details key={item.q} name="faq" open={index === 0} data-reveal style={{ '--i': index }}>
              <summary>
                <span>{item.q}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
