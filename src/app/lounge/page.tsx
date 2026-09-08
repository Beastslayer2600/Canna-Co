import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";
import { ArrowIcon, CheckIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Lounge",
  description: `${site.loungeName} — a members' lounge with game nights, including Dungeons & Dragons for beginners and experienced players alike.`,
  alternates: { canonical: "/lounge" },
};

const prep = [
  {
    title: "Download D&D Beyond",
    copy: "Character sheets, rules and a dice roller, all in one app. Free to use for what we run.",
  },
  {
    title: "Have a level 8 character ready",
    copy: "Bring one you've played before or roll a fresh one. If you've never made a character, come early and we'll build one with you.",
  },
  {
    title: "Bring dice — or don't",
    copy: "A physical set is more fun, but the app rolls perfectly well. Nobody gets turned away for showing up empty-handed.",
  },
];

const houseNotes = [
  "Beginners and experienced players both welcome",
  "No cost to sit in — you just need to be a member",
  `${site.minimumAge}+, same as the rest of the space`,
  "Come early if you want help building a character",
];

export default function LoungePage() {
  return (
    <>
      <PageHero
        eyebrow="The Lounge"
        title="Somewhere to actually sit down."
        lead={`${site.loungeName} is the members' room behind the store — low light, good company, and a table that regularly gets taken over by a game.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/club">
            Join the club
            <ArrowIcon className="size-4" />
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Ask about the next game night
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Game nights"
              title="Dungeons & Dragons at the lounge."
              lead="We run a table for members — beginners and experienced players both welcome. Roll. Connect. Adventure."
            />
            <ul className="mt-10 space-y-4">
              {houseNotes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span className="text-cream-dim">{note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              Dates move around, so we announce each session on our socials and
              in store. Message us and we&rsquo;ll tell you when the next one is.
            </p>
          </div>

          <div>
            <h2 className="flex items-center gap-3 text-xs font-semibold tracking-poster text-gold uppercase">
              <span aria-hidden className="h-px w-8 bg-gold/50" />
              Before you arrive
            </h2>
            <ol className="mt-8 space-y-4">
              {prep.map((step, index) => (
                <li key={step.title}>
                  <Card className="flex gap-6">
                    <span className="font-display text-2xl text-gold/45 tabular-nums">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream-dim">
                        {step.copy}
                      </p>
                    </div>
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section className="border-y border-line bg-ink-soft">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-4xl text-gold">Roll. Connect. Adventure.</p>
          <p className="mt-6 leading-relaxed text-cream-dim">
            The lounge is for members. If you&rsquo;re not one yet, signing up
            takes about ten minutes in store — bring your ID and we&rsquo;ll
            sort it on the day.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/club">How membership works</ButtonLink>
            <ButtonLink href="/visit" variant="secondary">
              Find the lounge
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
