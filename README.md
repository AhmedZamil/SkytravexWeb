# SkyTravex website

Marketing website for SkyTravex, the travel platform by Sky Lake Solutions.
Built with Next.js (App Router), React and plain CSS. No UI or animation
libraries: every motion effect is CSS, SVG or a few lines of React.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Node 20.9 or newer is required.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New > Project**, import the repository and press **Deploy**.
   The defaults are correct (framework: Next.js, no environment variables).

## Where to change things

| What | File |
| --- | --- |
| Name, contact email, WhatsApp number, prices | `lib/site.js` |
| Headlines, module list, FAQ, sample data | `lib/content.js` |
| Colours, fonts, buttons, header, hero | `app/globals.css` |
| Section layouts and animations | `app/sections.css` |
| Home page section order | `app/page.js` |

Two settings in `lib/site.js` are empty on purpose:

- `whatsapp`: add the number (digits only, with country code) and a
  "Chat on WhatsApp" button appears in the hero, footer and demo form.
- `pricing.setup` and `pricing.monthly`: add your figures and the pricing cards
  show them. While empty, the cards read "Quoted per launch".

## Pages

- `/` home: hero board, before and after, modules, fare search demo, three
  portals, booking pipeline, dashboard, comparison, integrations, launch plan,
  mobile, pricing, FAQ
- `/why-skytravex`
- `/pricing` with a scope builder that carries the selection into the demo form
- `/about`
- `/demo` request form

## The demo form

The form validates the fields, then opens the visitor's email app with the
request addressed to the inbox in `lib/site.js`. Nothing is stored and no
backend is needed. To collect requests in a CRM or a sheet instead, replace the
`onSubmit` handler in `components/DemoForm.js` with a call to your endpoint.

## Notes on the content

- Figures inside the product mock-ups (fares, balances, bookings) are sample
  data and are labelled as such on the page.
- Airline names in the fare list are invented.
- Supplier and gateway names are listed as connections that are enabled under
  the client's own agreements. Edit `integrationGroups` in `lib/content.js` to
  match the connections you actually offer.
