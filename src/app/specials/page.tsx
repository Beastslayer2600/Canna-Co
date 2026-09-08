import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PosterTitle } from "@/components/ui/poster-title";
import { Section } from "@/components/ui/section";
import { ArrowIcon } from "@/components/ui/icons";
import { specials, specialsByWeek } from "@/lib/specials";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Weekly Specials",
  description: `Moon Monday, Twisted Tuesday, Family Fridays and the Sunday Buffet — Canna & Co's weekly deals in ${site.suburb}, ${site.city}.`,
  alternates: { canonical: "/specials" },
};

export default function SpecialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Weekly specials"
        title="There's a deal on most days of the week."
        lead={`${site.valueLine} Four standing specials — the pre-roll days, and the edible bar on a Sunday.`}
      >
        <ButtonLink href="/visit">
          Come in and grab them
          <ArrowIcon className="size-4" />
        </ButtonLink>
      </PageHero>

      {/* Week-at-a-glance strip */}
      <div className="border-b border-line bg-ink-soft">
        <Container>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 py-5 text-xs tracking-poster uppercase">
            {specialsByWeek.map((special) => (
              <li key={special.slug}>
                <a
                  href={`#${special.slug}`}
                  className="text-cream-dim transition-colors hover:text-gold"
                >
                  <span className="text-gold">{special.day}</span>
                  <span className="mx-2 text-line">·</span>
                  {special.titleLead} {special.titleScript}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Section className="space-y-6 sm:space-y-8">
        {specials.map((special) => (
          <article
            key={special.slug}
            id={special.slug}
            className="frame-gold rounded-card scroll-mt-28 bg-surface/50 p-8 sm:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <p className="text-xs font-semibold tracking-poster text-gold uppercase">
                  Every {special.day}
                </p>
                <PosterTitle
                  lead={special.titleLead}
                  script={special.titleScript}
                  className="mt-5 text-4xl sm:text-5xl"
                />
                <p className="mt-7 leading-relaxed text-cream-dim">
                  {special.blurb}
                </p>
              </div>

              <div>
                <h3 className="border-b border-line-gold pb-4 text-sm tracking-poster text-cream uppercase">
                  {special.headline}
                </h3>

                <dl className="mt-2">
                  {special.lines.map((line) => (
                    <div
                      key={line.label}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line/60 py-4 last:border-0"
                    >
                      <dt className="text-cream-dim">
                        {line.label}
                        {line.note ? (
                          <span className="mt-1 block text-xs text-muted">
                            {line.note}
                          </span>
                        ) : null}
                      </dt>
                      {line.value ? (
                        <dd className="font-display text-sm font-semibold tracking-[0.08em] text-gold uppercase">
                          {line.value}
                        </dd>
                      ) : null}
                    </div>
                  ))}
                </dl>

                {special.footnote ? (
                  <p className="mt-5 text-xs tracking-wide text-muted uppercase">
                    {special.footnote}
                  </p>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </Section>

      <Section className="border-t border-line bg-ink-soft pt-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-poster text-gold uppercase">
            Before you drive out
          </p>
          <h2 className="mt-5 text-2xl sm:text-3xl">
            Specials move. Stock is limited.
          </h2>
          <p className="mt-5 leading-relaxed text-cream-dim">
            These are the standing weekly deals, but ranges sell out and the
            line-up changes. Message us on the day and we&rsquo;ll tell you
            exactly what&rsquo;s on the shelf.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact">Check what&rsquo;s in</ButtonLink>
            <ButtonLink href="/visit" variant="secondary">
              Hours &amp; directions
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
