import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Card, FeatureCard } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  ArrowIcon,
  CheckIcon,
  ClockIcon,
  LeafIcon,
  PinIcon,
  ShieldIcon,
  SparkIcon,
  UsersIcon,
} from "@/components/ui/icons";
import { TodaysSpecial } from "@/components/todays-special";
import { LeafFrame, Ornament } from "@/components/ui/botanical";
import { Marquee } from "@/components/ui/marquee";
import { PosterTitle } from "@/components/ui/poster-title";
import { faqs } from "@/lib/faqs";
import { specialsByWeek } from "@/lib/specials";
import {
  formattedAddress,
  mapsEmbedUrl,
  mapsSearchUrl,
  site,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TwoTracks />
      <Marquee
        items={[
          "Quality. Family. Community.",
          "More value. More vibe.",
          "Premium flower",
          "Expertly crafted",
          "Open seven days",
        ]}
      />
      <SpecialsStrip />
      <WhyUs />
      <ClubSteps />
      <VisitStrip />
      <FaqTeaser />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-grain absolute inset-0 opacity-70"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-gold-deep/12 blur-[130px]"
      />
      <LeafFrame />

      <Container className="relative">
        <div className="flex flex-col items-start py-24 sm:py-32 lg:py-40">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 text-xs font-medium tracking-wide text-cream-dim">
            <span className="size-1.5 rounded-full bg-gold-bright" />
            {site.strap} &middot; {site.suburb}, {site.city} &middot;{" "}
            {site.minimumAge}+
          </p>

          <h1 className="animate-fade-up text-balance-tight mt-7 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Good weed, straight answers,{" "}
            <span className="text-gold-bright">and nobody looking at you funny.</span>
          </h1>

          <p className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-cream-dim">
            A boutique store, a members&rsquo; club and a lounge in Moreleta
            Park. We&rsquo;re open from eight in the morning, seven days a week,
            and there&rsquo;s a deal on most of them.
          </p>

          <TodaysSpecial className="animate-fade-up mt-9" />

          <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/specials">
              See this week&rsquo;s specials
              <ArrowIcon className="size-4" />
            </ButtonLink>
            <ButtonLink href="/visit" variant="secondary">
              Find us &amp; opening hours
            </ButtonLink>
          </div>

          <dl className="animate-fade-up mt-16 grid w-full max-w-2xl grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-xs tracking-poster text-muted uppercase">
                Quality
              </dt>
              <dd className="mt-2 font-display text-lg tracking-[0.04em] text-cream">
                Premium flower
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-poster text-muted uppercase">
                Family
              </dt>
              <dd className="mt-2 font-display text-lg tracking-[0.04em] text-cream">
                Expertly crafted
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-poster text-muted uppercase">
                Community
              </dt>
              <dd className="mt-2 font-display text-lg tracking-[0.04em] text-cream">
                {site.minimumAge}+ &amp; discreet
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}

function TwoTracks() {
  const tracks = [
    {
      href: "/store",
      eyebrow: "The Store",
      title: "Boutique store",
      copy: "Walk in and talk to a person. Pre-rolls, flower, the Edible Bar and gear — plus an honest word about what's actually worth your money.",
      points: ["Open to any adult", "The Edible Bar", "Honest advice"],
      icon: <SparkIcon className="size-5" />,
    },
    {
      href: "/club",
      eyebrow: "The Club",
      title: "Members' club",
      copy: "Sign up in ten minutes with your ID. After that you've got the lounge, the events, and a room full of people who'll happily argue about strains.",
      points: ["Simple, vetted membership", "Grower guidance", "Members' events"],
      icon: <UsersIcon className="size-5" />,
    },
    {
      href: "/lounge",
      eyebrow: "The Lounge",
      title: "Moreleta Lounge",
      copy: "The members' room out back — through the closet, genuinely. Big screen, deep chairs, and a table that gets commandeered for D&D more often than you'd think.",
      points: ["Behind the closet", "D&D game nights", "Sport on the big screen"],
      icon: <LeafIcon className="size-5" />,
    },
  ];

  return (
    <Section className="border-t border-line/60">
      <SectionHeading
        eyebrow="One roof"
        title="Three rooms, three reasons to come."
        lead="Use one, use all three. The store is open to any adult who walks in; the club and the lounge are for members. Nobody upstairs is keeping score."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {tracks.map((track) => (
          <Link
            key={track.href}
            href={track.href}
            className="group rounded-card frame-gold flex flex-col bg-surface/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-2/60"
          >
            <div className="flex size-11 items-center justify-center rounded-lg border border-gold/25 bg-gold/10 text-gold">
              {track.icon}
            </div>
            <p className="mt-6 text-xs font-semibold tracking-poster text-gold uppercase">
              {track.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl">{track.title}</h3>
            <p className="mt-4 leading-relaxed text-cream-dim">{track.copy}</p>

            <ul className="mt-7 space-y-3">
              {track.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm">
                  <CheckIcon className="size-4 shrink-0 text-gold" />
                  <span className="text-cream-dim">{point}</span>
                </li>
              ))}
            </ul>

            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-bright">
              Read more
              <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function SpecialsStrip() {
  return (
    <Section className="border-y border-line bg-ink-soft">
      <SectionHeading
        eyebrow="Weekly specials"
        title="There's a deal on most days."
        lead={`${site.valueLine} Four standing specials — three pre-roll days and the Edible Bar on a Sunday. Come on the right day and your money goes noticeably further.`}
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {specialsByWeek.map((special) => (
          <Link
            key={special.slug}
            href={`/specials#${special.slug}`}
            className="group frame-gold rounded-card flex flex-col bg-surface/50 p-7 transition-colors duration-300 hover:bg-surface-2/60"
          >
            <p className="text-xs font-semibold tracking-poster text-gold uppercase">
              Every {special.day}
            </p>
            <PosterTitle
              lead={special.titleLead}
              script={special.titleScript}
              as="h3"
              className="mt-4 text-2xl"
            />
            <p className="mt-5 flex-1 text-sm leading-relaxed text-cream-dim">
              {special.headline}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-bright">
              Details
              <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>

      <ButtonLink href="/specials" className="mt-12">
        All weekly specials
        <ArrowIcon className="size-4" />
      </ButtonLink>
    </Section>
  );
}

function WhyUs() {
  const features = [
    {
      icon: <ShieldIcon className="size-5" />,
      title: "Above board",
      copy: "A members-based model, ID checked every time, run inside the lines. Boring, deliberately — that's what keeps the doors open.",
    },
    {
      icon: <LeafIcon className="size-5" />,
      title: "Actual knowledge",
      copy: "Strains, terpenes, tolerance, why your last grow went sideways — ask away. We'd rather you understood it than took our word for it.",
    },
    {
      icon: <UsersIcon className="size-5" />,
      title: "No judgement",
      copy: "Someone asks us what a pre-roll is roughly once a week. Nobody smirks. That's the whole policy.",
    },
    {
      icon: <SparkIcon className="size-5" />,
      title: "Quality over volume",
      copy: "We're fussy about what comes through the door, and we'd rather sell you less of something good than more of something average.",
    },
  ];

  return (
    <Section className="bg-ink-soft border-y border-line">
      <SectionHeading
        eyebrow="Why Canna & Co"
        title="A grown-up space, run properly."
        lead="Moreleta Park deserves somewhere that takes both the plant and its people seriously. Turns out that's a low bar, and we cleared it anyway."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
          >
            {feature.copy}
          </FeatureCard>
        ))}
      </div>
    </Section>
  );
}

function ClubSteps() {
  const steps = [
    {
      title: "Come see us",
      copy: "Pop into the store, or message us first if you'd rather get your questions in before you commit to a conversation.",
    },
    {
      title: "Sign up",
      copy: `Bring your ID — membership is strictly ${site.minimumAge}+. We'll take you through the club rules and get the paperwork done.`,
    },
    {
      title: "You're in",
      copy: "The lounge is yours, the events are yours, and you can lean on us whenever you need to.",
    },
  ];

  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Joining"
            title="Becoming a member takes about ten minutes."
            lead="No waiting list, no application form, no vetting committee. Bring your ID, have a chat, sign the thing. Done before your coffee goes cold."
          />
          <ButtonLink href="/club" className="mt-9">
            How the club works
            <ArrowIcon className="size-4" />
          </ButtonLink>
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
  );
}

function VisitStrip() {
  return (
    <Section className="bg-ink-soft border-y border-line">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Find us"
            title="Easy to find, easier to park at."
          />

          <dl className="mt-10 space-y-8">
            <div className="flex gap-4">
              <PinIcon className="mt-1 size-5 shrink-0 text-gold" />
              <div>
                <dt className="text-xs tracking-[0.18em] text-muted uppercase">
                  Address
                </dt>
                <dd className="mt-2 leading-relaxed text-cream">
                  {formattedAddress}
                </dd>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-gold-bright hover:underline"
                >
                  Open in Google Maps
                  <ArrowIcon className="size-4" />
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <ClockIcon className="mt-1 size-5 shrink-0 text-gold" />
              <div className="w-full">
                <dt className="text-xs tracking-[0.18em] text-muted uppercase">
                  Opening hours
                </dt>
                <dd className="mt-3">
                  <ul className="max-w-sm space-y-2 text-sm">
                    {site.hours.map((slot) => (
                      <li
                        key={slot.days}
                        className="flex justify-between gap-6 border-b border-line/60 pb-2 last:border-0"
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
          </dl>
        </div>

        <div className="rounded-card overflow-hidden border border-line">
          <iframe
            title={`Map showing ${site.name} in ${site.suburb}`}
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full border-0 bg-surface-2 grayscale-[35%] lg:h-[26rem]"
          />
        </div>
      </div>
    </Section>
  );
}

function FaqTeaser() {
  const preview = faqs.slice(0, 4);

  return (
    <Section>
      <SectionHeading
        eyebrow="Common questions"
        title="The things people actually ask us."
      />

      <div className="mt-12 divide-y divide-line border-y border-line">
        {preview.map((faq) => (
          <details key={faq.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg text-cream marker:hidden">
              {faq.question}
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-gold-bright transition-transform duration-200 group-open:rotate-45">
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="max-w-2xl pb-6 leading-relaxed text-cream-dim">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <ButtonLink href="/faq" variant="secondary" className="mt-10">
        Read all questions
      </ButtonLink>
    </Section>
  );
}

function ClosingCta() {
  return (
    <Section className="pb-28">
      <div className="rounded-card frame-gold relative overflow-hidden bg-surface/60 px-8 py-16 text-center sm:px-16">
        <LeafFrame />
        <div
          aria-hidden
          className="absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gold-deep/12 blur-[100px]"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance-tight text-3xl leading-tight sm:text-4xl">
            Come say hello.
          </h2>
          <Ornament className="mt-6" leaf />
          <p className="mt-5 leading-relaxed text-cream-dim">
            Join the club, browse the store, or just come in and ask the
            question you&rsquo;ve been Googling. From 08:00, every day.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact">Get in touch</ButtonLink>
            <ButtonLink href="/visit" variant="secondary">
              Directions &amp; hours
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
