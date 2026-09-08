import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";
import {
  formattedAddress,
  mapsEmbedUrl,
  mapsSearchUrl,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description: `Address, opening hours, parking and directions for Canna & Co in ${site.suburb}, ${site.city}.`,
  alternates: { canonical: "/visit" },
};

const goodToKnow = [
  {
    title: "Parking",
    copy: "There's parking right outside. Saturday mornings are the busiest stretch of the week — come a little later if you'd rather have the place quiet.",
  },
  {
    title: "Bring ID",
    copy: `We check age at the door and again at membership sign-up. Bring your ID even if you're confident you look over ${site.minimumAge}.`,
  },
  {
    title: "No booking needed",
    copy: "The store is walk-in during opening hours. Message us first only if you want a proper sit-down or you're after something specific.",
  },
  {
    title: "Accessibility",
    copy: "Ground floor, step-free entrance. If you have a specific access need, message us before you come and we'll make sure it's sorted.",
  },
];

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit"
        title={`Find us in ${site.suburb}.`}
        lead="Open seven days a week from 08:00, public holidays included. Everything you need to get here — address, hours, parking and what to bring."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={mapsSearchUrl} external>
            Open in Google Maps
            <ArrowIcon className="size-4" />
          </ButtonLink>
          <ButtonLink href={site.contact.phoneHref} variant="secondary" external>
            Call the shop
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <dl className="space-y-10">
              <div className="flex gap-4">
                <PinIcon className="mt-1 size-5 shrink-0 text-gold" />
                <div>
                  <dt className="text-xs tracking-[0.18em] text-muted uppercase">
                    Address
                  </dt>
                  <dd className="mt-2 text-lg leading-relaxed text-cream">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.suburb}, {site.address.city}{" "}
                    {site.address.postalCode}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <ClockIcon className="mt-1 size-5 shrink-0 text-gold" />
                <div className="w-full">
                  <dt className="text-xs tracking-[0.18em] text-muted uppercase">
                    Opening hours
                  </dt>
                  <dd className="mt-3">
                    <ul className="max-w-sm space-y-2">
                      {site.hours.map((slot) => (
                        <li
                          key={slot.days}
                          className="flex justify-between gap-6 border-b border-line/60 pb-2 text-sm last:border-0"
                        >
                          <span className="text-cream-dim">{slot.days}</span>
                          <span className="text-cream">{slot.time}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-muted">{site.hoursNote}</p>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <PhoneIcon className="mt-1 size-5 shrink-0 text-gold" />
                <div>
                  <dt className="text-xs tracking-[0.18em] text-muted uppercase">
                    Phone
                  </dt>
                  <dd className="mt-2 text-lg text-cream">
                    <a
                      href={site.contact.phoneHref}
                      className="hover:text-gold-bright"
                    >
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="rounded-card overflow-hidden border border-line">
            <iframe
              title={`Map showing ${site.name} at ${formattedAddress}`}
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[24rem] w-full border-0 bg-surface-2 grayscale-[35%] lg:h-full lg:min-h-[30rem]"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-ink-soft border-y border-line">
        <SectionHeading
          eyebrow="Before you come"
          title="A few things worth knowing."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {goodToKnow.map((item) => (
            <Card key={item.title} className="h-full">
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-cream-dim">{item.copy}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
