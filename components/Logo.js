// The SkyTravex mark: a hexagon cell (shared with the Sky Lake family)
// crossed by a climbing flight path.
export function LogoMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="skx-g" x1="6" y1="34" x2="34" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1f6bff" />
          <stop offset="1" stopColor="#00d8f0" />
        </linearGradient>
      </defs>
      <path
        d="M20 3.500 34.300 11.750v16.500L20 36.500 5.700 28.250v-16.500Z"
        stroke="url(#skx-g)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        className="logo-path"
        d="M10.500 26.500c5.500-.500 10-3.500 13.500-9.500"
        stroke="#e7eef8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1.500 3.500"
      />
      <path d="M21.500 12.500 30 10l-2.500 8.500-2.300-3.700Z" fill="url(#skx-g)" />
    </svg>
  );
}

export default function Logo({ size = 34 }) {
  return (
    <span className="logo">
      <LogoMark size={size} />
      <span className="logo-word">
        Sky<em>Travex</em>
      </span>
    </span>
  );
}
