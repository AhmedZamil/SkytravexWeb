import SectionHead from './SectionHead';
import Icon from './Icons';
import { problemRows } from '@/lib/content';

export default function Problem() {
  return (
    <section className="section problem" id="challenges" aria-labelledby="problem-title">
      <div className="wrap">
        <SectionHead
          id="problem-title"
          label="The daily friction"
          line="A booking should not need six windows."
          accent="Here is what changes."
        />

        <div className="problem-table" role="table" aria-label="Before and after SkyTravex">
          <div className="problem-headrow" role="row">
            <span role="columnheader">Task</span>
            <span role="columnheader">Today</span>
            <span role="columnheader">With SkyTravex</span>
          </div>
          {problemRows.map((row, index) => (
            <div className="problem-row" role="row" key={row.topic} data-reveal style={{ '--i': index }}>
              <p className="problem-topic" role="cell">
                {row.topic}
              </p>
              <p className="problem-before" role="cell">
                <span className="mark mark-no">
                  <Icon name="cross" size={12} strokeWidth={2.4} />
                </span>
                <span className="strike">{row.before}</span>
              </p>
              <p className="problem-after" role="cell">
                <span className="mark mark-yes">
                  <Icon name="check" size={12} strokeWidth={2.4} />
                </span>
                {row.after}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
