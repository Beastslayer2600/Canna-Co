# Canna & Co — Moreleta Park

Website for Canna & Co, a private cannabis members' club and boutique store in
Moreleta Park, Pretoria.

It's an information site: who we are, the weekly specials, how the club works,
what the lounge is for, and how to find us. There is no product catalogue, no
cart and no checkout — enquiries go out by email or WhatsApp from the visitor's
own device.

The design follows the brand's printed poster artwork: near-black with a warm
green cast, aged gold (`#c08838`) as the only real accent, printed cream for
text, engraved caps (Cinzel) over a brushed script (Yellowtail) for the
day-name lockups.

## Stack

- **Next.js 16** (App Router) with **React 19**
- **TypeScript**
- **Tailwind CSS v4** — the whole theme lives in `src/app/globals.css`
- No database, no API routes, no third-party analytics

Every page is prerendered as static HTML at build time, so it can be hosted
anywhere that serves a Next.js build (Vercel, Netlify, Cloudflare, a plain Node
server).

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## ⚠️ Before this goes live

The business details in **`src/lib/site.ts`** are placeholders. Replace them with
the real ones — that single file feeds the header, footer, contact page, visit
page, sitemap and the Schema.org record Google reads:

- `contact.phone` / `contact.phoneHref` — the shop's phone number
- `contact.whatsapp` — WhatsApp number, digits only, country code first (e.g. `2712...`)
- `contact.email`
- `address` — the real street address
- `hours` **and** `hoursSpec` — keep these two in sync; the first is what
  visitors read, the second is what search engines parse
- `socials` — real profile URLs, or delete the entries
- `url` — the live domain, used for canonical URLs and the sitemap

**`minimumAge` is set to 19**, because every poster reads "19+ ONLY". South
Africa's age of majority is 18, so if the door policy is actually 18, change
that one number — the age gate, footer, FAQ, legal page and club rules all read
from it.

The weekly specials in **`src/lib/specials.ts`** were transcribed from the
poster artwork (Moon Monday, Twisted Tuesday, Family Fridays, Sunday Buffet).
Deals move — when the posters change, that file needs changing too. It is the
only place the specials are written down.

Also worth doing before launch:

1. **Have someone review `src/app/legal/page.tsx`.** It's written to be honest
   about what this site does and doesn't collect, but the club-membership and
   compliance wording should be checked by whoever advises the business.
2. **Read the copy as the owner.** Pages like `/about` and `/club` describe the
   business in a particular voice and make claims about how it operates
   (parking, accessibility, sign-up taking ten minutes). Correct anything that
   isn't true.
3. **Add real photography.** The design is currently typographic — no photos of
   the space, the team or the product line-ups. The poster artwork would work
   well on the Specials page, and photos of the lounge would carry that page.
4. **Add a favicon and OG image.** `src/app/favicon.ico` is still the Next.js
   default, and there's no Open Graph image yet, so link previews will be
   text-only. One of the posters would make a good OG image.
5. **Confirm the game-night details.** The Lounge page describes D&D nights from
   the poster (D&D Beyond, a level 8 character, bring dice) but deliberately
   gives no date or time — the poster's "17:37" looked like a placeholder. If
   sessions run to a fixed schedule, say so on that page.

## Structure

```
src/
  app/
    layout.tsx        root layout: fonts, metadata, age gate, header/footer
    page.tsx          home
    specials/         the four weekly specials
    club/             the members' club
    store/            the store
    lounge/           the Moreleta Lounge + game nights
    about/            who we are
    visit/            address, hours, directions, map
    faq/              full FAQ (also emits FAQ structured data)
    contact/          contact details + enquiry form
    legal/            terms, age policy, privacy
    sitemap.ts        generated sitemap.xml
    robots.ts         generated robots.txt
    globals.css       Tailwind theme — colours, fonts, base styles
  components/
    age-gate.tsx      18+ confirmation, remembered per browser
    site-header.tsx   sticky header + mobile menu
    site-footer.tsx
    contact-form.tsx  composes a mailto:/WhatsApp message; sends nothing itself
    page-hero.tsx     shared inner-page hero
    ui/               buttons, cards, sections, icons, poster-title
  lib/
    site.ts           ⚠️ all business details live here
    specials.ts       ⚠️ the weekly deals, transcribed from the posters
    faqs.ts           FAQ content
```

## Notes on a couple of decisions

**The age gate** blocks the page until a visitor confirms they're 18+, and
remembers the answer in `localStorage`. It's a deterrent, not real
verification — actual age checking happens at the door.

**The contact form has no backend.** It builds the message and hands it to the
visitor's email client or WhatsApp. That keeps hosting simple and means the site
never stores anyone's details. If you'd rather receive submissions directly,
that needs a form service or an API route adding.
