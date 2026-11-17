// Articles for /insights. Each body entry is one paragraph; entries that
// start with "## " render as subheadings.

export const insights = [
  {
    slug: 'agent-wallets-and-credit-risk',
    title: 'Agent wallets: how consolidators stop lending money by accident',
    summary: 'Why a wallet with approved deposits beats trust and phone calls, and how to set credit limits that grow with good agents.',
    date: '2026-11-10',
    minutes: 5,
    topic: 'Finance',
    body: [
      'Most consolidators do not set out to become lenders. It happens one favour at a time: an agent is short today, the booking is urgent, the ticket goes out, and the money is promised for tomorrow. Multiply that by a hundred agents and the business is carrying a loan book it never priced.',
      '## Start with a wallet, not a promise',
      'A wallet changes the default. The agent tops up first, the booking draws down the balance, and the ticket can only be issued when the money is there. Nobody has to say no on the phone, because the system already has.',
      '## Approve deposits against a reference',
      'Bank transfers and mobile payments arrive with a reference. When finance matches that reference against the statement before crediting the wallet, a screenshot of a transfer can no longer stand in for the transfer itself.',
      '## Make credit a rule, not a favour',
      'Good agents deserve credit. Give it as a limit with an owner and a review date, so it can grow with their history and freeze automatically when payments slip. Every change is logged, so a dispute becomes a look at the record rather than an argument.',
      '## What to measure',
      'Track the share of bookings paid from wallet balance, the average days a credit balance stays open, and how many deposits wait more than an hour for approval. These three numbers tell you whether money is moving the way you intend.',
    ],
  },
  {
    slug: 'gds-ndc-lcc-for-small-agencies',
    title: 'GDS, NDC or direct airlines: what a growing agency actually needs',
    summary: 'A plain guide to the three ways airline content reaches an agency, and how to choose your first connections.',
    date: '2026-11-03',
    minutes: 6,
    topic: 'Distribution',
    body: [
      'Airline content now reaches agencies through three main routes. Each has a place, and few growing agencies need all three on day one.',
      '## GDS',
      'A global distribution system gives broad coverage of full-service airlines through one agreement and one set of credentials. It suits agencies selling many carriers and routes, and it is usually where ticketing desks are trained.',
      '## NDC',
      'NDC connections come from individual airlines and carry richer offers: branded fares, bundles and sometimes prices not shown elsewhere. Each carrier is certified separately, so add them for the airlines that matter most on your routes.',
      '## Direct low-cost carriers',
      'Low-cost airlines often sell only through their own systems. A direct connection lets your agents sell them alongside everything else instead of opening another website.',
      '## How to choose',
      'List your top twenty routes and the airlines that fly them. Start with the source that covers most of those bookings, then add NDC or direct connections where they win on price or content. A platform that merges every source into one result list lets you add connections without retraining your team.',
    ],
  },
  {
    slug: 'launching-b2c-next-to-b2b',
    title: 'Adding a customer website without breaking your agent business',
    summary: 'How agencies can sell direct online while keeping prices, inventory and accounts consistent with their B2B network.',
    date: '2026-10-27',
    minutes: 5,
    topic: 'Growth',
    body: [
      'Many agencies built their business through partner agents and now want a share of direct online sales. The risk is creating a second business with its own prices, its own bookings and its own accounts.',
      '## Share the core, separate the rules',
      'Run the website on the same engine as your agent portal. Inventory, tickets and the ledger stay shared. Pricing, payment methods and branding are set per channel, so retail customers and agents each see the right number.',
      '## Protect your agents',
      'Decide early whether retail prices sit above agent prices and by how much. A clear rule avoids agents discovering your website undercuts them.',
      '## Let customers serve themselves',
      'A My Bookings area for downloads and change requests keeps retail traffic away from the phone lines your agents rely on.',
      '## Start small',
      'Launch with flights on a handful of strong routes. Add hotels, visas and packages once payments, ticketing and support run smoothly.',
    ],
  },
];

export const insightBySlug = Object.fromEntries(insights.map((i) => [i.slug, i]));
