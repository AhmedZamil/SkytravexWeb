const paths = {
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  wallet: (
    <>
      <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h11v3" />
      <rect x="3.5" y="8" width="17" height="11" rx="2" />
      <path d="M16 13.5h1.5" />
    </>
  ),
  ticket: (
    <>
      <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z" />
      <path d="M14 6.5v11" strokeDasharray="2 2.5" />
    </>
  ),
  passport: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <circle cx="12" cy="10.5" r="3" />
      <path d="M9 16.5h6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="10" r="2.3" />
      <path d="M16.5 14.6a4.5 4.5 0 0 1 4 4.4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.7 2.4 2.7 14.6 0 17M12 3.5c-2.7 2.4-2.7 14.6 0 17" />
    </>
  ),
  brush: (
    <>
      <path d="M14 4.5 19.5 10 11 18.5H5.5V13Z" />
      <path d="m12 6.5 5.5 5.5" />
    </>
  ),
  bag: (
    <>
      <rect x="4" y="8" width="16" height="11.5" rx="2" />
      <path d="M9 8V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v2M4 13h16" />
    </>
  ),
  ledger: (
    <>
      <path d="M6 3.5h11a1.5 1.5 0 0 1 1.5 1.5v15.5H7.5A1.5 1.5 0 0 1 6 19Z" />
      <path d="M9.5 8H15M9.5 11.5H15M9.5 15h3" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19.5h16" />
      <path d="M7 16v-4M11 16V8M15 16v-6M19 16V5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5 6v5.5c0 4.2 2.9 7.4 7 9 4.1-1.6 7-4.8 7-9V6Z" />
      <path d="m9 12 2.2 2.2L15.2 10" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3.5v5M15 3.5v5M6.5 8.5h11V12a5.5 5.5 0 0 1-11 0ZM12 17.5v3" />
    </>
  ),
  layers: (
    <>
      <path d="m12 4 8.5 4.5L12 13 3.5 8.5Z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
    </>
  ),
  refresh: (
    <>
      <path d="M19.5 12a7.5 7.5 0 0 1-13.2 4.9M4.5 12a7.5 7.5 0 0 1 13.2-4.9" />
      <path d="M17.5 3.5v4h-4M6.500 20.5v-4h4" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v10.500M7.500 10.500 12 15l4.500-4.500" />
      <path d="M4.500 17.500v1A1.500 1.500 0 0 0 6 20h12a1.500 1.500 0 0 0 1.500-1.500v-1" />
    </>
  ),
  bolt: <path d="M13 3.500 5.500 13.500H11L10 20.500l8-10.500h-5.500Z" />,
  plane: <path d="M20.500 3.500 3.500 10.500l6.500 2.500 2.500 6.500 3-6Zm0 0L10 13" />,
  check: <path d="m5 12.500 4.500 4.500L19 7.500" />,
  cross: <path d="m6.500 6.500 11 11M17.500 6.500l-11 11" />,
  minus: <path d="M6 12h12" />,
  arrow: <path d="M5 12h13.500M13 6.500l5.500 5.500-5.500 5.500" />,
  menu: <path d="M4 7.500h16M4 12h16M4 16.500h16" />,
  mail: (
    <>
      <rect x="3.500" y="5.500" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  chatBubble: (
    <path d="M4 6.500A2.500 2.500 0 0 1 6.500 4h11A2.500 2.500 0 0 1 20 6.500v7a2.500 2.500 0 0 1-2.500 2.500H11l-4.500 3.500V16A2.500 2.500 0 0 1 4 13.500Z" />
  ),
};

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.6 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] || null}
    </svg>
  );
}
