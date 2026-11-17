// A flight path with numbered stops. The line draws itself when it scrolls
// into view, then a plane keeps flying it.
export default function RouteLine({ stops, label = 'Workflow' }) {
  const count = stops.length;
  return (
    <figure className="routeline" data-reveal data-watch aria-label={label}>
      <svg className="routeline-svg" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
        <path id={`rl-${label.replace(/\W/g, '')}`} d="M20,90 C220,10 380,10 500,60 S800,110 980,30" fill="none" stroke="#243246" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path className="routeline-draw" d="M20,90 C220,10 380,10 500,60 S800,110 980,30" fill="none" stroke="url(#rl-grad)" strokeWidth="2.5" pathLength="1" vectorEffect="non-scaling-stroke" />
        <defs>
          <linearGradient id="rl-grad" x1="0" x2="1">
            <stop offset="0" stopColor="#1f6bff" />
            <stop offset="1" stopColor="#00d8f0" />
          </linearGradient>
        </defs>
      </svg>
      <ol className="routeline-stops" style={{ '--n': count }}>
        {stops.map((stop, index) => (
          <li key={stop} style={{ '--i': index }}>
            <span className="routeline-dot">{index + 1}</span>
            <span className="routeline-name">{stop}</span>
          </li>
        ))}
      </ol>
      <span className="routeline-plane" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 4.5 21.5 12 3 19.5 7.5 12Z" />
        </svg>
      </span>
    </figure>
  );
}
