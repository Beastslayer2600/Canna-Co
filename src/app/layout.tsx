import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cinzel, Inter, Yellowtail } from "next/font/google";
import { AgeGate } from "@/components/age-gate";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Cinzel stands in for the engraved Roman caps on the poster wordmark;
// Yellowtail for the brushed day names ("Tuesday!", "Buffet").
const display = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const script = Yellowtail({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} ${site.suburb} — private cannabis club & store`,
    template: `%s · ${site.name} ${site.suburb}`,
  },
  description: site.description,
  keywords: [
    "cannabis club Pretoria",
    "Moreleta Park cannabis",
    "private members club",
    "Canna & Co",
    "cannabis store Pretoria East",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: `${site.name} ${site.suburb}`,
    title: `${site.name} — ${site.suburb}, ${site.city}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.suburb}, ${site.city}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#050a06",
  colorScheme: "dark",
};

/** Schema.org record so Google shows hours, address and phone in local results. */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.contact.phone,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.suburb,
    addressRegion: site.address.province,
    postalCode: site.address.postalCode,
    addressCountry: "ZA",
  },
  openingHoursSpecification: site.hoursSpec.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: slot.days,
    opens: slot.opens,
    closes: slot.closes,
  })),
  areaServed: `${site.suburb}, ${site.city}`,
  sameAs: [site.socials.instagram, site.socials.facebook],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-ZA"
      className={`${body.variable} ${display.variable} ${script.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <AgeGate />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
