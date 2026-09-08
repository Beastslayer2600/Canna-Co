import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Card, FeatureCard } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  ArrowIcon,
  LeafIcon,
  SparkIcon,
  UsersIcon,
} from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Store",
  description: `Canna & Co's boutique store in ${site.suburb}, ${site.city}. Accessories, grow essentials and honest advice — walk in and talk to someone who knows.`,
  alternates: { canonical: "/store" },
};

const areas = [
  {
    icon: <SparkIcon className="size-5" />,
    title: "Pre-rolls & flower",
    copy: "Our own homebrand line alongside Twisted Leaf and Moon Settler — greenhouse, indoor, hydro, infused and the double barrels.",
  },
  {
    icon: <SparkIcon className="size-5" />,
    title: "The Edible Bar",
    copy: "Gummies, jellies and cookies picked by strength rather than guesswork — from 10mg singles up to the 200mg packs.",
  },
  {
    icon: <SparkIcon className="size-5" />,
    title: "Accessories & glass",
    copy: "Well-made pieces we'd happily use ourselves, from everyday basics through to the things you keep for years.",
  },
  {
    icon: <LeafIcon className="size-5" />,
    title: "Grow essentials",
    copy: "What you actually need to grow at home properly — and a frank word about the expensive things you genuinely don't.",
  },
  {
    icon: <UsersIcon className="size-5" />,
    title: "People who know",
    copy: "The most useful thing in here isn't on a shelf. Come in with a question and leave with an actual answer, not a shrug and a price.",
  },
];

const promises = [
  {
    title: "We won't upsell you",
    copy: "If the cheaper thing does the job, we'll say so. We'd much rather you came back next week than spent more today.",
  },
  {
    title: "We'll be straight with you",
    copy: "If we don't have what you need, or we reckon you're heading down the wrong path, you'll hear it — not a polite nod and a sale.",
  },
  {
    title: "No stupid questions",
    copy: "Everyone starts somewhere. Ask us the thing you're too embarrassed to Google — we've heard it, and we didn't laugh then either.",
  },
];

export default function StorePage() {
  return (
    <>
      <PageHero
        eyebrow="The Store"
        title="Walk in, ask anything, leave with the right thing."
        lead={`Open to any adult — no membership needed, no appointment, no minimum spend. Browse, ask, or come in purely to get a straight answer to something. From 08:00, seven days a week.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/visit">
            Directions &amp; hours
            <ArrowIcon className="size-4" />
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Ask us a question
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="What's inside"
          title="A small shop that's fussy about what it carries."
          lead="We'd rather stock fewer things and stand behind every one of them than fill a wall and shrug."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <FeatureCard key={area.title} icon={area.icon} title={area.title}>
              {area.copy}
            </FeatureCard>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
          Stock moves, so we don&rsquo;t publish a catalogue here. Give us a
          call or send a message and we&rsquo;ll tell you exactly what&rsquo;s
          on the shelf today — and check the{" "}
          <Link href="/specials" className="text-gold-bright hover:underline">
            weekly specials
          </Link>{" "}
          before you come.
        </p>
      </Section>

      <Section className="bg-ink-soft border-y border-line">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="How we do it"
              title="Three things you can hold us to."
            />
          </div>
          <div className="space-y-4">
            {promises.map((promise) => (
              <Card key={promise.title}>
                <h3 className="text-xl">{promise.title}</h3>
                <p className="mt-3 leading-relaxed text-cream-dim">
                  {promise.copy}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-card border border-line bg-surface/60 px-8 py-14 text-center sm:px-14">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl sm:text-4xl">Looking for something specific?</h2>
            <p className="mt-5 leading-relaxed text-cream-dim">
              Message us before you drive out. We&rsquo;ll check whether
              it&rsquo;s on the shelf, and put it aside for you if it is.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <ButtonLink href="/specials" variant="secondary">
                See the weekly specials
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
