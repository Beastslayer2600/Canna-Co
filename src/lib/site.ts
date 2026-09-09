/**
 * Single source of truth for every business detail on the site.
 *
 * The opening hours and the 19+ age limit are real, taken from Canna & Co's
 * own poster artwork.
 *
 * ⚠️ PLACEHOLDERS: the address, phone number, email and social handles below
 * are stand-ins so the site renders end to end. Replace them with Canna & Co's
 * real details before the site goes live — nothing else needs to change.
 */

export const site = {
  name: "Canna & Co",
  suburb: "Moreleta Park",
  city: "Pretoria",
  legalName: "Canna & Co Moreleta Park",
  tagline: "A private cannabis club, boutique store and lounge in Moreleta Park.",
  /** Straplines lifted from the poster artwork — used verbatim on the site. */
  strap: "Premium Cannabis",
  motto: "Quality. Family. Community.",
  valueLine: "More value. More vibe.",
  loungeName: "Canna & Co Moreleta Lounge",
  description:
    "Canna & Co is a members-only cannabis club, boutique store and lounge in Moreleta Park, Pretoria. Weekly specials, an edible bar, game nights, and honest guidance from people who know the plant.",

  /**
   * Used for canonical URLs, sitemap and Open Graph tags.
   * ⚠️ PLACEHOLDER, and not just a cosmetic one: cannaco.co.za is a live,
   * unrelated company. Register the real domain before launch.
   */
  url: "https://cannaandco.co.za",

  /**
   * ⚠️ Every poster reads "19+ ONLY", so the site follows the brand's own
   * published materials. South Africa's age of majority is 18 — if the door
   * policy is actually 18, change this one number and the whole site updates.
   */
  minimumAge: 19,

  contact: {
    // PLACEHOLDER — replace with the real shop number.
    phone: "+27 12 000 0000",
    phoneHref: "tel:+27120000000",
    // PLACEHOLDER — replace with the real WhatsApp number (digits only, country code first).
    whatsapp: "27600000000",
    email: "hello@cannaandco.co.za",
  },

  address: {
    // PLACEHOLDER — replace with the real street address.
    line1: "Shop 4, Moreleta Village Centre",
    line2: "Rubenstein Drive",
    suburb: "Moreleta Park",
    city: "Pretoria",
    province: "Gauteng",
    postalCode: "0181",
    country: "South Africa",
  },

  /** Opening hours, in the order they should appear. Real — from the spring
   *  hours poster. Open seven days a week. */
  hours: [
    { days: "Monday – Thursday", time: "08:00 – 20:00" },
    { days: "Friday & Saturday", time: "08:00 – 21:00" },
    { days: "Sunday", time: "08:00 – 18:00" },
  ],

  /** Shown under the hours wherever they appear. */
  hoursNote: "Public holidays: regular opening hours apply.",

  /** Machine-readable mirror of `hours`, used for the Schema.org record. */
  hoursSpec: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "20:00",
    },
    { days: ["Friday", "Saturday"], opens: "08:00", closes: "21:00" },
    { days: ["Sunday"], opens: "08:00", closes: "18:00" },
  ],

  socials: {
    // PLACEHOLDER — replace or remove.
    instagram: "https://instagram.com/cannaco.moreleta",
    facebook: "https://facebook.com/cannaco.moreleta",
  },
} as const;

export const formattedAddress = [
  site.address.line1,
  site.address.line2,
  site.address.suburb,
  site.address.city,
  site.address.postalCode,
].join(", ");

/** Google Maps search link — works without an API key. */
export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name} ${formattedAddress}`,
)}`;

/** Embeddable map iframe — keyless embed, centred on the address. */
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  formattedAddress,
)}&output=embed`;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Header navigation. The logo handles "home", so it isn't listed here. */
export const nav = [
  { href: "/specials", label: "Specials" },
  { href: "/store", label: "The Store" },
  { href: "/club", label: "The Club" },
  { href: "/lounge", label: "The Lounge" },
  { href: "/visit", label: "Visit" },
  { href: "/faq", label: "FAQ" },
] as const;

/** Everything else, listed in the footer. */
export const footerNav = [
  ...nav,
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
