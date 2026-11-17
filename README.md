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
| Name, contact details, WhatsApp, lead inbox, demo site, prices | `lib/site.js` |
| Header menus and sub-menus | `lib/nav.js` |
| Product module pages | `lib/products.js` |
| Solution pages by business type | `lib/solutions.js` |
| Insights articles | `lib/insights.js` |
| Headlines, module list, FAQ, sample data | `lib/content.js` |
| Colours, fonts, buttons, header, hero | `app/globals.css` |
| Section layouts and animations | `app/sections.css` |
| Menus, new pages, demo launch, plane cursor | `app/extras.css` |
| Home page section order | `app/page.js` |

`pricing.setup` and `pricing.monthly` in `lib/site.js` are empty on purpose.
Add your figures and the pricing cards show them. While empty, the cards read
"Quoted per launch".

## Pages

- `/` home: hero board, before and after, modules, fare search demo, three
  portals, booking pipeline, dashboard, comparison, integrations, launch plan,
  mobile, pricing, FAQ
- `/why-skytravex`
- `/pricing` with a scope builder that carries the selection into the demo form
- `/about`
- `/demo` live demo starter: form, launch animation, then Aerotake
- `/product` and `/product/[module]` (8 module pages)
- `/solutions` and `/solutions/[business]` (6 pages)
- `/integrations`, `/partners`, `/contact`, `/insights`, `/privacy`, `/terms`

## Forms and email

The demo, contact and partner forms send each request to `leadsEmail` in
`lib/site.js` through FormSubmit (formsubmit.co). No backend or key is needed.

**One-time activation:** the first request sent from the live site triggers an
email from FormSubmit to that inbox. Click the activation link in it once;
every request after that is delivered. Requests sent before activation are not
delivered, so submit a test request yourself right after deploying.

After the demo form is sent, the visitor sees a short launch animation and is
taken to `demoUrl` (Aerotake).

## Notes on the content

- Figures inside the product mock-ups (fares, balances, bookings) are sample
  data and are labelled as such on the page.
- Airline names in the fare list are invented.
- Supplier and gateway names are listed as connections that are enabled under
  the client's own agreements. Edit `integrationGroups` in `lib/content.js` to
  match the connections you actually offer.
