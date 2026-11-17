// Solution pages by business type: /solutions/[slug]

export const solutions = [
  {
    slug: 'travel-agencies',
    icon: 'ticket',
    name: 'Travel agencies',
    short: 'Ticket faster and stop chasing balances',
    line: 'Run the counter,',
    accent: 'not six supplier tabs.',
    intro:
      'For agencies that sell flights, hotels and visas over the counter and by phone. SkyTravex puts every fare, every booking and every payment in one place.',
    pains: [
      ['Fares copied between supplier portals', 'One search across every source you hold'],
      ['Markups kept in a spreadsheet', 'Rules applied on every search, with a history'],
      ['Refunds tracked in message threads', 'Each request has a status, a quote and an owner'],
    ],
    route: ['Customer calls', 'Agent searches once', 'Books and takes payment', 'Ticket and invoice sent'],
    products: ['flights', 'hotels', 'visa', 'wallet-finance'],
  },
  {
    slug: 'consolidators',
    icon: 'layers',
    name: 'Consolidators and wholesalers',
    short: 'Serve hundreds of agents without hundreds of calls',
    line: 'Scale your agent network',
    accent: 'without scaling your back office.',
    intro:
      'For businesses that sell inventory to other agencies. Agents self-serve on your B2B portal while you control pricing, credit and risk.',
    pains: [
      ['Morning calls to confirm deposits', 'Wallet top-ups with a reference check and approval'],
      ['Same markup for every agent', 'Tiers, routes and airlines priced separately'],
      ['No view of who owes what', 'Credit limits and statements per agent, live'],
    ],
    route: ['Agent tops up wallet', 'Finance approves', 'Agent books at tier price', 'Ledger and statement update'],
    products: ['b2b-portal', 'wallet-finance', 'white-label', 'flights'],
  },
  {
    slug: 'online-travel-agencies',
    icon: 'globe',
    name: 'Online travel agencies',
    short: 'Sell direct, with B2B on the same core',
    line: 'Launch a booking site',
    accent: 'that your back office already understands.',
    intro:
      'For OTAs and start-ups selling online. Your B2C website, your agents and your finance desk work from the same bookings.',
    pains: [
      ['Website and back office in separate systems', 'One core for the site, agents and accounts'],
      ['Manual ticketing after online payment', 'Auto-ticketing with a desk queue for exceptions'],
      ['Customers emailing for changes', 'A My Bookings area with change requests'],
    ],
    route: ['Traveller searches online', 'Pays by card or wallet', 'Ticket issued', 'Booking in the same ledger'],
    products: ['b2c-website', 'flights', 'hotels', 'white-label'],
  },
  {
    slug: 'tour-operators-dmcs',
    icon: 'bag',
    name: 'Tour operators and DMCs',
    short: 'Package, price and distribute your trips',
    line: 'Sell your trips',
    accent: 'through every channel you have.',
    intro:
      'For operators who build their own tours and ground services. Create packages once and sell them to agents and travellers at the right price for each.',
    pains: [
      ['Itineraries rebuilt in documents', 'A reusable itinerary builder'],
      ['Agent commissions worked out by hand', 'Commission by package and tier'],
      ['Seat counts tracked on paper', 'Departures with live capacity'],
    ],
    route: ['Build the package', 'Publish to agents and site', 'Take deposits', 'Confirm and operate'],
    products: ['tours-packages', 'hotels', 'b2b-portal', 'wallet-finance'],
  },
  {
    slug: 'corporate-travel',
    icon: 'shield',
    name: 'Corporate travel',
    short: 'Book for companies with approvals and invoices',
    line: 'Corporate accounts',
    accent: 'with rules that hold.',
    intro:
      'For agencies that manage travel for companies. Keep each client’s travellers, approvals, credit and invoices separate and correct.',
    pains: [
      ['Approval emails lost in inboxes', 'Approval steps recorded on the booking'],
      ['Monthly invoices built by hand', 'Consolidated invoices per company'],
      ['No spend view for clients', 'Reports by company, traveller and route'],
    ],
    route: ['Traveller requests a trip', 'Manager approves', 'Agent books on account', 'Monthly invoice issued'],
    products: ['flights', 'hotels', 'wallet-finance', 'b2b-portal'],
  },
  {
    slug: 'hajj-umrah',
    icon: 'passport',
    name: 'Hajj and Umrah',
    short: 'Groups, visas and packages in one file',
    line: 'Pilgrim groups,',
    accent: 'organised from visa to return.',
    intro:
      'For agencies that run Umrah and Hajj programmes. Manage group bookings, visa files, hotels near the Haram and payment plans in one place.',
    pains: [
      ['Group lists kept in spreadsheets', 'Group files with every pilgrim’s documents'],
      ['Visa status chased by phone', 'Visa tracking with traveller updates'],
      ['Instalments hard to follow', 'Deposits and balances posted to the ledger'],
    ],
    route: ['Group registered', 'Visas processed', 'Flights and hotels booked', 'Balance collected'],
    products: ['tours-packages', 'visa', 'flights', 'hotels'],
  },
];

export const solutionBySlug = Object.fromEntries(solutions.map((s) => [s.slug, s]));
