// Page copy and sample data. Everything shown inside a product mock-up is
// illustrative sample data, not a live figure.

export const heroFlows = [
  {
    id: 'search',
    label: 'Fare search',
    icon: 'search',
    title: 'DAC to DXB, 2 adults',
    meta: 'One query, every source',
    steps: [
      ['GDS queried', 'Published and private fares'],
      ['NDC and direct airlines queried', 'Branded fares with bundles'],
      ['Results merged', 'Duplicates removed, cheapest kept'],
      ['Agent price shown', 'Markup rules already applied'],
    ],
  },
  {
    id: 'markup',
    label: 'Markup rules',
    icon: 'layers',
    title: 'Price for agent tier Gold',
    meta: 'Rules stack in order',
    steps: [
      ['Net fare received', 'USD 412.00 from supplier'],
      ['Airline rule', 'Plus 2.0 percent'],
      ['Route rule DAC to DXB', 'Plus USD 4.00 flat'],
      ['Agent price', 'USD 424.24, change logged'],
    ],
  },
  {
    id: 'wallet',
    label: 'Wallet top-up',
    icon: 'wallet',
    title: 'Deposit from Orbit Travels',
    meta: 'Approval before balance',
    steps: [
      ['Request submitted', 'Bank slip and reference attached'],
      ['Finance review', 'Reference matched to statement'],
      ['Approved', 'Wallet balance updated'],
      ['Ledger entry posted', 'Agent notified by email and SMS'],
    ],
  },
  {
    id: 'refund',
    label: 'Refund and void',
    icon: 'refresh',
    title: 'Refund on ticket 176-4410',
    meta: 'Tracked from request to credit',
    steps: [
      ['Request logged', 'Raised by the agent, not a chat'],
      ['Airline penalty calculated', 'From the fare rules'],
      ['Service charge applied', 'Per passenger, your rule'],
      ['Wallet credited', 'Refund note issued'],
    ],
  },
  {
    id: 'visa',
    label: 'Visa file',
    icon: 'passport',
    title: 'Tourist visa, 3 travellers',
    meta: 'Documents to decision',
    steps: [
      ['Documents uploaded', 'Passport, photo, bank statement'],
      ['Passport read by OCR', 'Fields filled and checked'],
      ['Application submitted', 'Status set to in process'],
      ['Traveller updated', 'Each status change is sent on'],
    ],
  },
  {
    id: 'pnr',
    label: 'Import PNR',
    icon: 'download',
    title: 'PNR booked outside the portal',
    meta: 'Bring it into the same ledger',
    steps: [
      ['PNR entered', 'Six characters, one field'],
      ['Itinerary and fare read', 'Passengers, segments, taxes'],
      ['Markup applied', 'Same rules as a portal booking'],
      ['Ready to ticket', 'Invoice and voucher prepared'],
    ],
  },
];

export const connectorTypes = [
  'GDS content',
  'NDC airlines',
  'Low-cost carriers direct',
  'Hotel bedbanks',
  'Card gateways',
  'Mobile wallets',
  'Bank deposits',
  'SMS and email',
  'Passport OCR',
  'Excel, CSV and PDF export',
];

export const problemRows = [
  {
    topic: 'Finding a fare',
    before: 'One supplier portal at a time, prices copied into a chat.',
    after: 'One search returns every source you hold, already merged.',
  },
  {
    topic: 'Pricing for agents',
    before: 'A markup sheet someone remembers to update.',
    after: 'Rules by airline, route, agent and tier, applied on every search.',
  },
  {
    topic: 'Balances and deposits',
    before: 'Phone calls each morning to confirm who has paid.',
    after: 'A wallet per agent, topped up only after finance approves the reference.',
  },
  {
    topic: 'Refunds and reissues',
    before: 'Requests buried in message threads, penalties worked out by hand.',
    after: 'Each request has a status, a quote and a history anyone can open.',
  },
];

export const modules = [
  {
    icon: 'search',
    name: 'Booking engine',
    text: 'One-way, return and multi-city search across GDS, NDC and direct airline sources, with a fallback when a supplier is slow.',
    points: ['Unified results', 'PNR creation', 'Branded fares'],
    size: 'wide',
    demo: 'sources',
  },
  {
    icon: 'layers',
    name: 'Markup and commission',
    text: 'Fixed or percentage rules by airline, route, agent and tier. Every change is written to an audit log.',
    points: ['Net and gross fares', 'Gold, silver, bronze tiers'],
    demo: 'rules',
  },
  {
    icon: 'wallet',
    name: 'Wallet and finance',
    text: 'Deposits, credit limits, partial payments and a payment ledger that reconciles with your bank.',
    points: ['Top-up approval', 'Credit balance'],
    demo: 'wallet',
  },
  {
    icon: 'ticket',
    name: 'Ticket management',
    text: 'Issue, reissue, void and refund with fare and tax breakdown, penalty calculation and status tracking.',
    points: ['Auto and manual issue', 'Void rules'],
    size: 'wide',
    demo: 'lifecycle',
  },
  {
    icon: 'users',
    name: 'B2B agent portal',
    text: 'Agent registration and approval, profiles, credit limits and an account manager for each partner.',
    points: ['Approval workflow', 'Per-agent ledger'],
  },
  {
    icon: 'globe',
    name: 'B2C website',
    text: 'A public booking site on your domain, selling from the same inventory and pricing rules.',
    points: ['Online payment', 'Guest and member checkout'],
  },
  {
    icon: 'brush',
    name: 'White-label branding',
    text: 'Your logo, colours and domain on every portal, e-ticket, invoice and notification.',
    points: ['Custom domain', 'Branded documents'],
    size: 'wide',
    demo: 'brand',
  },
  {
    icon: 'passport',
    name: 'Visa processing',
    text: 'Applications, document checklists, passport OCR and a status history for every traveller.',
    points: ['Document upload', 'Status tracking'],
  },
  {
    icon: 'bag',
    name: 'Ancillaries and packages',
    text: 'Seats, meals and extra baggage with their own markup, plus tours and packages you assemble yourself.',
    points: ['Seat maps', 'Bundles'],
  },
  {
    icon: 'ledger',
    name: 'Accounting',
    text: 'Invoices, vouchers, credit notes and supplier payables that follow each booking automatically.',
    points: ['Invoice and voucher', 'Multi-currency'],
  },
  {
    icon: 'chart',
    name: 'Reports and analytics',
    text: 'Sales, revenue, incentive, agent performance and balance reports, scheduled or exported on demand.',
    points: ['Excel, CSV, PDF', 'Scheduled reports'],
    size: 'wide',
    demo: 'bars',
  },
  {
    icon: 'shield',
    name: 'Access and security',
    text: 'Role-based permissions, approval hierarchies, two-factor sign-in, session control and IP restriction.',
    points: ['RBAC', 'OTP and 2FA'],
  },
];

export const sampleFares = [
  { carrier: 'Meridian Air', code: 'MX 204', dep: '09:15', arr: '12:40', dur: '5h 25m', stops: 'Non-stop', source: 'NDC', net: 412.0, tag: 'Cheapest' },
  { carrier: 'Northwind', code: 'NW 583', dep: '10:50', arr: '14:05', dur: '5h 15m', stops: 'Non-stop', source: 'GDS', net: 428.5, tag: 'Fastest' },
  { carrier: 'Bluecrest', code: 'BC 118', dep: '13:30', arr: '18:55', dur: '7h 25m', stops: '1 stop', source: 'LCC', net: 366.0, tag: '' },
  { carrier: 'Halcyon Airways', code: 'HA 72', dep: '21:05', arr: '00:35', dur: '5h 30m', stops: 'Non-stop', source: 'GDS', net: 441.0, tag: '' },
];

export const priceLayers = [
  { id: 'net', label: 'Net fare', note: 'What the supplier charges you', factor: 1, add: 0 },
  { id: 'agent', label: 'Agent price', note: 'After airline and route rules', factor: 1.02, add: 4 },
  { id: 'customer', label: 'Customer price', note: 'After the agent adds their own markup', factor: 1.02, add: 22 },
];

export const pipeline = [
  { name: 'Search', text: 'The request fans out to each connected supplier. Results come back merged, with duplicates removed.' },
  { name: 'Price', text: 'Markup and commission rules run on the net fare. The breakdown is stored with the offer.' },
  { name: 'Hold', text: 'Passenger details are captured and a PNR is created with the supplier.' },
  { name: 'Pay', text: 'The agent wallet is debited or the customer pays online. Failed payments release the hold.' },
  { name: 'Ticket', text: 'The ticket is issued automatically, or queued for your ticketing desk if a supplier needs a manual step.' },
  { name: 'Ledger', text: 'Invoice, voucher, commission and supplier payable are posted. Reports update on the spot.' },
];

export const compareRows = [
  { cap: 'One result list across GDS, NDC and direct airlines', us: ['yes', 'Built in'], portals: ['no', 'One portal at a time'], script: ['partial', 'Usually one source'] },
  { cap: 'Markup by airline, route, agent and tier', us: ['yes', 'Rule engine'], portals: ['no', 'By hand'], script: ['partial', 'Flat markup'] },
  { cap: 'Agent wallet with deposit approval', us: ['yes', 'With reference check'], portals: ['no', 'Calls and bank slips'], script: ['partial', 'Balance only'] },
  { cap: 'Refund, void and reissue with penalties', us: ['yes', 'Tracked requests'], portals: ['no', 'Chat threads'], script: ['no', 'Rarely included'] },
  { cap: 'B2B and B2C on the same ledger', us: ['yes', 'One core'], portals: ['no', 'Not applicable'], script: ['partial', 'Separate installs'] },
  { cap: 'Audit log for price and money changes', us: ['yes', 'Every change'], portals: ['no', 'None'], script: ['partial', 'Limited'] },
  { cap: 'Your brand and your domain', us: ['yes', 'All portals and documents'], portals: ['no', 'Supplier branding'], script: ['partial', 'Theme only'] },
  { cap: 'Platform fee per ticket', us: ['yes', 'None'], portals: ['partial', 'Varies'], script: ['partial', 'Often charged'] },
];

export const integrationGroups = [
  { name: 'GDS', items: ['Amadeus', 'Sabre', 'Travelport'], note: 'Under your PCC and agreement' },
  { name: 'NDC and direct airline', items: ['Airline NDC', 'LCC direct APIs', 'Flight aggregators'], note: 'Per carrier certification' },
  { name: 'Hotels', items: ['Bedbank APIs', 'Direct contracts', 'Your own inventory'], note: 'Mapped to one hotel list' },
  { name: 'Payments', items: ['Card gateways', 'Mobile wallets', 'Bank deposit'], note: 'Tokenised, no raw card data' },
  { name: 'Messaging', items: ['Email', 'SMS', 'WhatsApp'], note: 'Booking and payment alerts' },
];

export const launchSteps = [
  { name: 'Scope and brand', text: 'We agree which portals and modules you start with, then apply your logo, colours and domain.' },
  { name: 'Suppliers and payments', text: 'Your GDS, airline and gateway credentials are connected and tested against sandbox bookings.' },
  { name: 'Rules and agents', text: 'Markup, commission and void rules are set. Your first agents are imported with wallets and limits.' },
  { name: 'Test and go live', text: 'Your team runs real scenarios end to end. When ticketing and the ledger agree, you open the doors.' },
];

export const faqs = [
  {
    q: 'How long does it take to launch?',
    a: 'Most of the calendar is supplier access, not software. Branding, pricing rules and agent onboarding run in parallel, so the portal is ready as soon as your supplier credentials are certified. You get a dated plan after the first call.',
  },
  {
    q: 'Do we need our own GDS or airline contracts?',
    a: 'You connect the agreements you hold and remain the merchant of record. If you are still arranging supplier access, tell us on the demo and we will walk through the realistic options for your market.',
  },
  {
    q: 'Do we need a technical team?',
    a: 'No. SkyTravex is hosted and maintained for you. What you need is someone who knows your pricing and your agents, because they will own the rules.',
  },
  {
    q: 'Can agents and retail customers run on the same setup?',
    a: 'Yes. The B2B portal and the B2C website are two front ends on one core. They share inventory, tickets, finance and audit, while pricing, credit and branding are set per channel.',
  },
  {
    q: 'Which payment methods can we accept?',
    a: 'Card gateways and mobile wallets are connected as add-ons for the markets you sell in. Bank deposits are handled through the top-up approval flow with a reference check.',
  },
  {
    q: 'We are a new agency. Is this too much platform?',
    a: 'You can start with flights and the agent wallet and switch on visa, hotels or the B2C site later. Modules you have not enabled stay out of the way.',
  },
  {
    q: 'Who owns our data?',
    a: 'You do. Bookings, ledgers and reports can be exported to Excel, CSV or PDF at any time.',
  },
];

export const pricingParts = [
  {
    key: 'setup',
    name: 'One-time setup',
    text: 'Branding, configuration, data import, supplier testing and training for your team.',
    includes: ['Admin, B2B and B2C portals', 'Your domain and brand', 'Pricing rule setup', 'Go-live support'],
  },
  {
    key: 'monthly',
    name: 'Flat monthly platform fee',
    text: 'Hosting, updates, monitoring and support. The fee does not rise with your ticket count.',
    includes: ['Unlimited bookings', 'Unlimited agents', 'Product updates', 'Support desk'],
  },
  {
    key: 'addons',
    name: 'Add-on connections',
    text: 'Each supplier or payment gateway is wired in once. You pay only for the ones you use.',
    includes: ['GDS, NDC and LCC', 'Hotel sources', 'Payment gateways', 'Custom change requests'],
  },
];

export const quoteOptions = [
  { group: 'Portals', items: ['Admin back office', 'B2B agent portal', 'B2C website', 'White-label for sub-agencies'] },
  { group: 'Products', items: ['Flights', 'Hotels', 'Visa processing', 'Tours and packages', 'Ancillaries'] },
  { group: 'Connections', items: ['GDS', 'NDC or direct airline', 'Hotel bedbank', 'Card gateway', 'Mobile wallet'] },
];

export const whyReasons = [
  {
    icon: 'layers',
    title: 'One core, three front ends',
    text: 'Admin, agent and customer portals are views of the same bookings, tickets and ledger. Nothing is synchronised between systems because there is only one system.',
  },
  {
    icon: 'wallet',
    title: 'Money is treated as the product',
    text: 'Deposits need a reference and an approval. Credit is a limit, not a favour. Every wallet movement has a ledger line you can trace to a booking.',
  },
  {
    icon: 'shield',
    title: 'Every change leaves a record',
    text: 'Markup edits, void approvals, refunds and logins are logged with who and when. When an agent disputes a figure, you open the history instead of arguing.',
  },
  {
    icon: 'refresh',
    title: 'After-sales is not an afterthought',
    text: 'Void windows, refund penalties and reissue differences are calculated from rules you set, with an approval step for the cases that need a second pair of eyes.',
  },
  {
    icon: 'plug',
    title: 'Your contracts stay yours',
    text: 'You plug in the supplier and gateway agreements you hold. If you change a supplier, your agents, prices and history do not move.',
  },
  {
    icon: 'bolt',
    title: 'A flat fee you can plan around',
    text: 'SkyTravex does not take a cut of each ticket. A busy month costs the same as a quiet one.',
  },
];
