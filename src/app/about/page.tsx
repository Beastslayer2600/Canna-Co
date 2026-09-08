import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";
import { ArrowIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Who we are and why we opened Canna & Co in ${site.suburb}, ${site.city}.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Honest before anything else",
    copy: "We'd rather lose a sale than tell you something that isn't true. That goes for what we stock, what it does, and what it won't do for you.",
  },
  {
    title: "Careful, not casual",
    copy: "A members model, real ID checks and a properly run room. Doing this responsibly is what lets us keep doing it at all.",
  },
  {
    title: "Local, on purpose",
    copy: "We're a Moreleta Park shop for Moreleta Park people. We know the neighbourhood, and we'd like it to know us.",
  },
  {
    title: "Everyone's welcome to ask",
    copy: "Nervous first-timers, curious retirees, seasoned growers — the same patience for all of them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We opened the kind of place we wanted to walk into."
        lead={`Somewhere calm, well-run and genuinely knowledgeable — in ${site.suburb}, rather than an hour's drive away.`}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-cream-dim">
            <p>
              For a long time, getting decent advice about cannabis in Pretoria
              East meant knowing the right person. Everything else was guesswork,
              forum threads and whatever a stranger on the internet felt like
              saying that day.
            </p>
            <p>
              Canna &amp; Co exists to fix that. We built a proper store and a
              private members&rsquo; club under one roof, staffed by people who
              have actually done the reading and the growing — and who&rsquo;ll
              happily say &ldquo;I don&rsquo;t know&rdquo; when that&rsquo;s the
              honest answer.
            </p>
            <p>
              The club side keeps things structured and adults-only. The store
              side is open to anyone {site.minimumAge} or over who wants to have
              a look or ask a question. Behind both sits the lounge. All three
              are run the same way: carefully, quietly, and without any of the
              theatre. Quality, family, community — we mean it literally.
            </p>
          </div>

          <div className="rounded-card border border-line bg-surface/60 p-8">
            <h2 className="font-display text-sm tracking-[0.2em] text-gold uppercase">
              At a glance
            </h2>
            <dl className="mt-7 space-y-6 text-sm">
              <div>
                <dt className="text-muted">Where</dt>
                <dd className="mt-1 text-cream">
                  {site.suburb}, {site.city}
                </dd>
              </div>
              <div>
                <dt className="text-muted">What</dt>
                <dd className="mt-1 text-cream">
                  Boutique store, members&rsquo; club &amp; lounge
                </dd>
              </div>
              <div>
                <dt className="text-muted">Who for</dt>
                <dd className="mt-1 text-cream">
                  Adults {site.minimumAge} and over
                </dd>
              </div>
              <div>
                <dt className="text-muted">Booking</dt>
                <dd className="mt-1 text-cream">
                  Not needed for the store — just walk in
                </dd>
              </div>
            </dl>
            <ButtonLink href="/visit" variant="secondary" className="mt-8 w-full">
              Plan your visit
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="bg-ink-soft border-y border-line">
        <SectionHeading
          eyebrow="What we stand for"
          title="Four things we're not willing to bend on."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <Card key={value.title} className="h-full">
              <h3 className="text-xl">{value.title}</h3>
              <p className="mt-3 leading-relaxed text-cream-dim">{value.copy}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-card border border-line bg-surface/60 px-8 py-14 text-center sm:px-14">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl sm:text-4xl">Come meet the team.</h2>
            <p className="mt-5 leading-relaxed text-cream-dim">
              The quickest way to understand what we&rsquo;re about is to spend
              five minutes in the shop.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/visit">
                Find us
                <ArrowIcon className="size-4" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Send a message
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
