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
import { faqs } from "@/lib/faqs";
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
        className="absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-leaf-deep/25 blur-[130px]"
      />

      <Container className="relative">
        <div className="flex flex-col items-start py-24 sm:py-32 lg:py-40">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 text-xs font-medium tracking-wide text-cream-dim">
            <span className="size-1.5 rounded-full bg-leaf-bright" />
            {site.suburb}, {site.city} &middot; Members {site.minimumAge}+
          </p>

          <h1 className="animate-fade-up text-balance-tight mt-7 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            A private cannabis club and boutique store,{" "}
            <span className="text-leaf-bright">right here in Moreleta.</span>
          </h1>

          <p className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-cream-dim">
            Canna &amp; Co is a calm, well-run space for adults who take this
            plant seriously. Join the club, browse the store, and get straight
            answers from people who know what they&rsquo;re talking about.
          </p>

          <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/club">
              Join the club
              <ArrowIcon className="size-4" />
            </ButtonLink>
            <ButtonLink href="/visit" variant="secondary">
              Visit the store
            </ButtonLink>
          </div>

          <dl className="animate-fade-up mt-16 grid w-full max-w-2xl grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-xs tracking-[0.18em] text-muted uppercase">
                Members only
              </dt>
              <dd className="mt-2 font-display text-xl text-cream">
                Private club
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.18em] text-muted uppercase">
                Walk in
              </dt>
              <dd className="mt-2 font-display text-xl text-cream">
                Boutique store
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.18em] text-muted uppercase">
                Always
              </dt>
              <dd className="mt-2 font-display text-xl text-cream">
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
      href: "/club",
      eyebrow: "The Club",
      title: "Members' cannabis club",
      copy: "A private, adults-only club with a proper sign-up process, a members' lounge and a community that looks out for each other.",
      points: ["Simple, vetted membership", "Members' lounge", "Grower guidance"],
      icon: <UsersIcon className="size-5" />,
    },
    {
      href: "/store",
      eyebrow: "The Store",
      title: "Boutique store & gear",
      copy: "Walk in and talk to someone. We stock quality accessories and gear, and we'd rather point you to the right thing than the expensive thing.",
      points: ["Accessories & glass", "Grow essentials", "Honest advice"],
      icon: <SparkIcon className="size-5" />,
    },
  ];

  return (
    <Section className="border-t border-line/60">
      <SectionHeading
        eyebrow="Two ways in"
        title="One roof, two very different rooms."
        lead="The club and the store sit side by side. You're welcome to use one, or both."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {tracks.map((track) => (
          <Link
            key={track.href}
            href={track.href}
            className="group rounded-card border border-line bg-surface/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-leaf/60 hover:bg-surface-2/60 sm:p-10"
          >
            <div className="flex size-11 items-center justify-center rounded-xl bg-leaf-deep/60 text-leaf-bright">
              {track.icon}
            </div>
            <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              {track.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl sm:text-3xl">{track.title}</h3>
            <p className="mt-4 leading-relaxed text-cream-dim">{track.copy}</p>

            <ul className="mt-7 space-y-3">
              {track.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm">
                  <CheckIcon className="size-4 shrink-0 text-leaf" />
                  <span className="text-cream-dim">{point}</span>
                </li>
              ))}
            </ul>

            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-leaf-bright">
              Read more
              <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function WhyUs() {
  const features = [
    {
      icon: <ShieldIcon className="size-5" />,
      title: "Above board",
      copy: "We run a members-based model and stay inside the lines of South African law. No grey areas, no nonsense at the door.",
    },
    {
      icon: <LeafIcon className="size-5" />,
      title: "Actual knowledge",
      copy: "Strains, terpenes, tolerance, growing at home — ask anything. We'd rather you understand it than just take our word for it.",
    },
    {
      icon: <UsersIcon className="size-5" />,
      title: "No judgement",
      copy: "First-timers and old hands get the same welcome. Nobody here is going to make you feel stupid for asking a basic question.",
    },
    {
      icon: <SparkIcon className="size-5" />,
      title: "Quality over volume",
      copy: "We're picky about what comes through the door, and we'd rather sell you less of something good than more of something average.",
    },
  ];

  return (
    <Section className="bg-ink-soft border-y border-line">
      <SectionHeading
        eyebrow="Why Canna & Co"
        title="A grown-up space, run properly."
        lead="Moreleta Park deserves somewhere that takes both the plant and its people seriously."
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
      copy: "Pop into the store in Moreleta Park, or send us a message first if you'd rather ask a few questions.",
    },
    {
      title: "Sign up",
      copy: `Bring your ID — membership is strictly ${site.minimumAge}+. We'll take you through the club rules and get the paperwork done.`,
    },
    {
      title: "You're in",
      copy: "Use the lounge, join club events, and lean on us for guidance whenever you need it.",
    },
  ];

  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Joining"
            title="Becoming a member takes about ten minutes."
            lead="No waiting lists, no complicated hoops — just a proper sign-up so everyone knows where they stand."
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
                <span className="font-display text-3xl text-leaf/50 tabular-nums">
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
            title="We're easy to get to, and easy to park at."
          />

          <dl className="mt-10 space-y-8">
            <div className="flex gap-4">
              <PinIcon className="mt-1 size-5 shrink-0 text-leaf" />
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
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-leaf-bright hover:underline"
                >
                  Open in Google Maps
                  <ArrowIcon className="size-4" />
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <ClockIcon className="mt-1 size-5 shrink-0 text-leaf" />
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
        title="The things people ask us most."
      />

      <div className="mt-12 divide-y divide-line border-y border-line">
        {preview.map((faq) => (
          <details key={faq.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg text-cream marker:hidden">
              {faq.question}
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-leaf-bright transition-transform duration-200 group-open:rotate-45">
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
      <div className="rounded-card relative overflow-hidden border border-line bg-surface/60 px-8 py-16 text-center sm:px-16">
        <div
          aria-hidden
          className="absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-leaf-deep/30 blur-[100px]"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance-tight text-3xl leading-tight sm:text-4xl">
            Come say hello.
          </h2>
          <p className="mt-5 leading-relaxed text-cream-dim">
            Whether you want to join the club, browse the store, or just ask a
            question first — the door&rsquo;s open.
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
