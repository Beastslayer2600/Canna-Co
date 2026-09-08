import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { formattedAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & privacy",
  description: `Site terms, age policy and privacy notice for ${site.legalName}.`,
  alternates: { canonical: "/legal" },
  robots: { index: false, follow: true },
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & privacy"
        lead="The short version: this site is for adults, it doesn't collect your data, and nothing on it is legal or medical advice."
      />

      <Section>
        <div className="max-w-2xl space-y-12 leading-relaxed text-cream-dim">
          <section>
            <h2 className="text-2xl text-cream">Age restriction</h2>
            <p className="mt-4">
              This website and everything {site.legalName} offers is intended
              strictly for people aged {site.minimumAge} and over. We verify age
              at the door and again when anyone signs up for club membership. If
              you are under {site.minimumAge}, please leave this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-cream">Nothing here is advice</h2>
            <p className="mt-4">
              The content on this site is general information about who we are
              and what we do. It is not legal advice, and it is not medical
              advice. Cannabis affects people differently, and it can interact
              with medication and existing health conditions. If you have any
              health concerns, speak to a doctor or pharmacist — not a website.
            </p>
            <p className="mt-4">
              Never drive or operate machinery while impaired.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-cream">Club membership</h2>
            <p className="mt-4">
              Membership of the {site.name} club is governed by the club rules
              you are taken through at sign-up, not by this page. Those rules,
              and the membership agreement you sign, are what apply between you
              and us. We may refuse or end a membership at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-cream">Privacy</h2>
            <p className="mt-4">
              This website has no accounts, no analytics, no advertising
              trackers and no contact-form backend. The one thing stored on your
              device is a small flag recording that you confirmed your age, so
              you aren&rsquo;t asked again on every page. You can clear it at any
              time by clearing your browser&rsquo;s site data.
            </p>
            <p className="mt-4">
              The contact form doesn&rsquo;t send anything to us — it opens your
              own email app or WhatsApp with a draft message. If you choose to
              send it, we receive it the same way we&rsquo;d receive any other
              email or message, and we use it only to answer you.
            </p>
            <p className="mt-4">
              The map on this site is embedded from Google Maps, which means
              Google may receive your IP address when that map loads.
            </p>
            <p className="mt-4">
              Member information collected in store is handled separately and is
              covered by the notice you receive at sign-up. We don&rsquo;t sell
              or share member details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-cream">Getting in touch</h2>
            <p className="mt-4">
              For anything on this page, contact us at{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="text-leaf-bright hover:underline"
              >
                {site.contact.email}
              </a>{" "}
              or write to {site.legalName}, {formattedAddress}.
            </p>
            <p className="mt-4">
              <Link href="/contact" className="text-leaf-bright hover:underline">
                Our contact page
              </Link>{" "}
              has every other way to reach us.
            </p>
          </section>

          <p className="border-t border-line pt-8 text-sm text-muted">
            Last updated{" "}
            {new Date().toLocaleDateString("en-ZA", {
              year: "numeric",
              month: "long",
            })}
            .
          </p>
        </div>
      </Section>
    </>
  );
}
