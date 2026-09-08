/**
 * Single source of truth for every business detail on the site.
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

  /** Used for canonical URLs, sitemap and Open Graph tags. */
  url: "https://cannaco.co.za",

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
    email: "hello@cannaco.co.za",
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

  /** Opening hours, in the order they should appear. */
  hours: [
    { days: "Monday – Thursday", time: "09:00 – 18:00" },
    { days: "Friday", time: "09:00 – 19:00" },
    { days: "Saturday", time: "09:00 – 16:00" },
    { days: "Sunday & public holidays", time: "Closed" },
  ],

  /** Machine-readable mirror of `hours`, used for the Schema.org record. */
  hoursSpec: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
    { days: ["Friday"], opens: "09:00", closes: "19:00" },
    { days: ["Saturday"], opens: "09:00", closes: "16:00" },
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

export const nav = [
  { href: "/", label: "Home" },
  { href: "/specials", label: "Specials" },
  { href: "/club", label: "The Club" },
  { href: "/store", label: "The Store" },
  { href: "/lounge", label: "The Lounge" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
  { href: "/faq", label: "FAQ" },
] as const;
