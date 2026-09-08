/**
 * The weekly specials, transcribed from Canna & Co's own poster artwork.
 *
 * ⚠️ Deals change. Whoever updates the posters should update this file — it is
 * the only place the specials are written down on the site.
 */

export type Special = {
  slug: string;
  /** Day the deal runs, used for the schedule strip and sorting. */
  day: "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
  /** Poster titles are set in two parts: engraved caps, then a brush script word. */
  titleLead: string;
  titleScript: string;
  headline: string;
  blurb: string;
  /** Bullet detail. `note` renders as the small print under a line. */
  lines: { label: string; value?: string; note?: string }[];
  footnote?: string;
};

export const specials: Special[] = [
  {
    slug: "moon-monday",
    day: "Monday",
    titleLead: "Moon",
    titleScript: "Monday",
    headline: "All Moon Settler pre-rolls discounted",
    blurb:
      "The whole Moon Settler range comes down in price for the day — including the dab-infused rolls and the Kush Berry moonrock.",
    lines: [
      { label: "All Moon Settler pre-rolls", value: "Discounted" },
      { label: "Includes dab-infused and moonrock rolls" },
    ],
  },
  {
    slug: "twisted-tuesday",
    day: "Tuesday",
    titleLead: "Twisted",
    titleScript: "Tuesday",
    headline: "Greenhouse, Double Barrels and infused pre-rolls discounted",
    blurb:
      "Twisted Leaf day. The Greenhouse range, all three Double Barrel THC2-GH rolls, and the infused pre-rolls are all marked down.",
    lines: [
      { label: "Greenhouse pre-rolls", value: "Discounted" },
      {
        label: "Double Barrels",
        value: "Discounted",
        note: "Indica, Hybrid and Sativa",
      },
      { label: "Infused pre-rolls", value: "Discounted" },
    ],
    footnote: "Limited stock available.",
  },
  {
    slug: "family-fridays",
    day: "Friday",
    titleLead: "Family",
    titleScript: "Fridays",
    headline: "Every homebrand pre-roll discounted",
    blurb:
      "The full Canna & Co homebrand line — twelve strains across greenhouse, greendoor, indoor, hydro and infused — all discounted for the day.",
    lines: [
      { label: "Greenhouse", value: "Discounted" },
      { label: "Greendoor", value: "Discounted" },
      { label: "Indoor", value: "Discounted" },
      { label: "Hydro", value: "Discounted" },
      { label: "Infused pre-rolls", value: "Discounted" },
    ],
  },
  {
    slug: "sunday-buffet",
    day: "Sunday",
    titleLead: "Sunday",
    titleScript: "Buffet",
    headline: "The Edible Bar, all day",
    blurb:
      "Sunday just got sweeter. Take 2 get 1 free across the single gummies, money off the bigger strengths and the Ding packs, and a fifth off the cookies.",
    lines: [
      { label: "10mg single gummies", value: "Take 2 get 1 free" },
      { label: "22mg single gummies", value: "Take 2 get 1 free" },
      { label: "44mg single gummies", value: "Take 2 get 1 free" },
      {
        label: "50mg single gummies",
        value: "Take 2 get 1 free",
        note: "Excludes nougat and rainbow belts",
      },
      { label: "150mg single gummies", value: "16% less" },
      { label: "Ding packs — 100mg", value: "13% less" },
      { label: "Ding packs — 200mg", value: "8% less" },
      { label: "Cookies", value: "20% off" },
    ],
  },
];

/** Monday-first ordering, for the weekly schedule strip. */
const weekOrder = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export const specialsByWeek = [...specials].sort(
  (a, b) => weekOrder.indexOf(a.day) - weekOrder.indexOf(b.day),
);
