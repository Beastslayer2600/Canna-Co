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
- `socials` — real profile URLs, or delete the entries
- `url` — the live domain, used for canonical URLs and the sitemap

The **opening hours are real** (spring schedule: 08:00–20:00 Mon–Thu,
08:00–21:00 Fri & Sat, 08:00–18:00 Sun, public holidays on regular hours). When
they change, edit `hours` **and** `hoursSpec` together — the first is what
visitors read, the second is what search engines parse.

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
3. **Photography, if you ever want it.** The site is deliberately
   photograph-free — the lounge is evoked in CSS rather than shown. If that
   changes, put source images in `src/images/` and import them so Next
   generates sizes and blur placeholders; don't drop them in `public/`.
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
    age-gate.tsx      19+ confirmation, remembered per browser
    gallery-wall.tsx  the lounge's art wall, drawn in CSS
    open-now.tsx      live open/closed badge, on the shop's clock
    todays-special.tsx  "on today" pill for whichever special is running
    utility-bar.tsx   thin strip above the header: status + phone
    site-header.tsx   sticky header + mobile menu
    site-footer.tsx
    contact-form.tsx  composes a mailto:/WhatsApp message; sends nothing itself
    page-hero.tsx     shared inner-page hero
    ui/               buttons, cards, sections, icons, poster-title,
                      botanical (leaf art + ornaments), birds, marquee
  lib/
    hours.ts          open/closed + today's special, in Africa/Johannesburg
    site.ts           ⚠️ all business details live here
    specials.ts       ⚠️ the weekly deals, transcribed from the posters
    faqs.ts           FAQ content
```

## Notes on a couple of decisions

**The age gate** blocks the page until a visitor confirms they're 18+, and
remembers the answer in `localStorage`. It's a deterrent, not real
verification — actual age checking happens at the door.

**No photographs anywhere on the site.** The lounge's slatted oak wall, its
flock of birds and its two picture ledges are drawn in CSS and SVG
(`gallery-wall.tsx`, `birds.tsx`, and the `bg-slats` / `panel-moulding`
utilities in `globals.css`). Real photos of the room were the reference, not
the content.

**The lounge is behind the closet**, and the site says so on the Lounge page,
the home page, the About page and in the FAQ. If that's meant to stay a
surprise for people who walk in, those are the four places to soften.

**The open/closed badge runs on the shop's clock, not the visitor's.**
`src/lib/hours.ts` resolves the day and time in `Africa/Johannesburg` via
`Intl`, so someone browsing from London still sees the right answer. It reads
`hoursSpec`, which is why that has to stay in step with `hours`. The badge and
the "on today" pill both render after hydration rather than at build time —
otherwise a static page would freeze whatever was true when it was built.

**The contact form has no backend.** It builds the message and hands it to the
visitor's email client or WhatsApp. That keeps hosting simple and means the site
never stores anyone's details. If you'd rather receive submissions directly,
that needs a form service or an API route adding.
