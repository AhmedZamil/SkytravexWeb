'use client';

import { useState } from 'react';
import SectionHead from './SectionHead';
import Icon from './Icons';

const tabs = [
  {
    id: 'air',
    label: 'Flights',
    icon: 'plane',
    items: [
      ['Amadeus', 'GDS'],
      ['Sabre', 'GDS'],
      ['Travelport', 'GDS'],
      ['Airline NDC', 'Per carrier'],
      ['Low-cost carriers', 'Direct API'],
      ['Flight aggregators', 'Consolidated content'],
    ],
  },
  {
    id: 'stay',
    label: 'Hotels and ground',
    icon: 'bag',
    items: [
      ['Bedbank APIs', 'Global hotel stock'],
      ['Direct hotel contracts', 'Your allotments'],
      ['Transfers', 'Airport and city'],
      ['Activities', 'Tours and tickets'],
      ['Hotel mapping', 'One listing per property'],
      ['Your own inventory', 'Loaded in the admin'],
    ],
  },
  {
    id: 'pay',
    label: 'Payments',
    icon: 'wallet',
    items: [
      ['Card gateways', 'Visa and Mastercard'],
      ['SSLCOMMERZ', 'Bangladesh'],
      ['bKash and Nagad', 'Mobile wallets'],
      ['Stripe and PayPal', 'International'],
      ['Bank deposit', 'With reference check'],
      ['Agent wallet', 'Built in'],
    ],
  },
  {
    id: 'msg',
    label: 'Messaging and tools',
    icon: 'mail',
    items: [
      ['Email', 'Bookings and invoices'],
      ['SMS', 'Status alerts'],
      ['WhatsApp', 'Customer updates'],
      ['Passport OCR', 'Visa files'],
      ['Excel, CSV, PDF', 'Report exports'],
      ['REST API', 'For your own apps'],
    ],
  },
];

export default function ConnectorHub() {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active);

  return (
    <section className="section hub" aria-labelledby="hub-title">
      <div className="wrap">
        <SectionHead
          id="hub-title"
          label="Connection catalogue"
          line="Pick a category"
          accent="to see what plugs in."
        />
        <div className="hub-tabs" role="tablist" aria-label="Connection categories">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={t.id === active}
              className={t.id === active ? 'is-active' : undefined}
              onClick={() => setActive(t.id)}
            >
              <Icon name={t.icon} size={16} />
              {t.label}
            </button>
          ))}
        </div>
        <ul className="hub-grid" role="tabpanel" key={active}>
          {tab.items.map(([name, note], index) => (
            <li key={name} style={{ '--i': index }}>
              <span className="hub-dot" aria-hidden="true" />
              <strong>{name}</strong>
              <small>{note}</small>
            </li>
          ))}
        </ul>
        <p className="fineprint">
          Names belong to their owners. Each connection is enabled once your own agreement and credentials with
          that provider are in place.
        </p>
      </div>
    </section>
  );
}
