import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";
import { ArrowIcon, CheckIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Club",
  description: `A private, members-only cannabis club for adults in ${site.suburb}, ${site.city}. Here's how membership works and what you get.`,
  alternates: { canonical: "/club" },
};

const steps = [
  {
    title: "Have a chat",
    copy: "Walk in during opening hours, or message us first if you'd rather ask your questions before committing to anything. Nobody is going to hard-sell you.",
  },
  {
    title: "Bring your ID",
    copy: `Membership is strictly ${site.minimumAge}+ and we check every time. A valid South African ID, driver's licence or passport is all you need.`,
  },
  {
    title: "Go through the rules",
    copy: "We'll take you through how the club works, what's expected of members, and what we will and won't do. It's short, it's plain language, and you can ask anything.",
  },
  {
    title: "You're a member",
    copy: "From that moment you have access to the lounge, to member events, and to the team whenever you need guidance.",
  },
];

const benefits = [
  "Access to the Moreleta Lounge",
  "A private, discreet space to sit and talk",
  "One-on-one guidance from the team",
  "Game nights and members-only events",
  "Growing advice, from first plant onwards",
  "A community that actually looks out for each other",
];

const rules = [
  {
    title: `Strictly ${site.minimumAge}+`,
    copy: "Every member is age-verified at sign-up. No exceptions, ever, for anyone.",
  },
  {
    title: "Members only",
    copy: "The lounge and club benefits are for members. You can't sign in a guest — but they're welcome to join.",
  },
  {
    title: "Respect the space",
    copy: "Keep it calm, keep it clean, look after the people around you. That's most of it.",
  },
  {
    title: "Don't drive impaired",
    copy: "If you're not in a state to drive, we'll help you sort out a lift. No judgement, no argument.",
  },
];

export default function ClubPage() {
  return (
    <>
      <PageHero
        eyebrow="The Club"
        title="A private club, for adults who take this seriously."
        lead="Canna & Co's club side is members-only by design. It keeps the space calm, keeps everyone accountable, and means we know exactly who's in the room."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">
            Ask about membership
            <ArrowIcon className="size-4" />
          </ButtonLink>
          <ButtonLink href="/visit" variant="secondary">
            Come in and sign up
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="How it works"
              title="Four steps, one visit."
              lead="There's no waiting list and no application to submit online. Everything happens in person, which is how we prefer it."
            />
          </div>

          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <Card className="flex gap-6">
                  <span className="font-display text-3xl text-gold/45 tabular-nums">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-cream-dim">
                      {step.copy}
                    </p>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="bg-ink-soft border-y border-line">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="What you get"
              title="Membership, in plain terms."
              lead="No tiers you can't understand and no points system. Just access, guidance and good company."
            />
            <ul className="mt-10 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span className="text-cream-dim">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              eyebrow="House rules"
              title="Short list. Non-negotiable."
            />
            <div className="mt-10 space-y-4">
              {rules.map((rule) => (
                <Card key={rule.title}>
                  <h3 className="text-lg">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-dim">
                    {rule.copy}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-card border border-line bg-surface/60 p-8 sm:p-12">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Fees"
              title="What does it cost to join?"
              lead="Membership options change from time to time, so rather than post a number that goes stale, we'll talk you through the current options in person or over a message. There's never any pressure to sign up on the day."
            />
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">
                Ask us about membership
                <ArrowIcon className="size-4" />
              </ButtonLink>
              <ButtonLink href="/faq" variant="secondary">
                Read the FAQ
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
