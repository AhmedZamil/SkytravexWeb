import SectionHead from './SectionHead';
import { launchSteps } from '@/lib/content';

export default function LaunchPlan() {
  return (
    <section className="section launch" id="launch" aria-labelledby="launch-title">
      <div className="wrap">
        <SectionHead
          id="launch-title"
          label="Getting live"
          line="From signed scope"
          accent="to first ticket."
          text="Four stages, run by the same team from start to finish. You see a working portal early and often."
        />

        <ol className="launch-steps" data-watch>
          {launchSteps.map((step, index) => (
            <li key={step.name} data-reveal style={{ '--i': index }}>
              <span className="launch-num">{index + 1}</span>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
