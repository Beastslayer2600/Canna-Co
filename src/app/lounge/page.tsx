import type { Metadata } from "next";
import { LoungeGallery } from "@/components/lounge-gallery";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Ornament, Plate } from "@/components/ui/botanical";
import { Card } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";
import { ArrowIcon, CheckIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Lounge",
  description: `${site.loungeName} — the members' lounge behind the closet. Big screen, deep chairs, an art wall, and Dungeons & Dragons nights for beginners and veterans alike.`,
  alternates: { canonical: "/lounge" },
};

const prep = [
  {
    title: "Download D&D Beyond",
    copy: "Character sheets, the rules and a dice roller in one app, free for everything we run. Ten minutes of setup saves you an hour at the table.",
  },
  {
    title: "Have a level 8 character ready",
    copy: "Bring one you've played, or roll a fresh one. Never built a character in your life? Come early and we'll make one with you — it's genuinely the fun part.",
  },
  {
    title: "Bring dice — or don't",
    copy: "A physical set is more satisfying, but the app rolls fine and nobody's counting. Turning up empty-handed has never stopped anyone playing.",
  },
];

const inThere = [
  {
    title: "A proper screen",
    copy: "Football most weekends, and a console plugged in the rest of the time. Nobody minds if you just want to sit and watch something.",
  },
  {
    title: "Chairs worth staying in",
    copy: "Deep bouclé tub chairs, a sofa at the art end, and enough table space to actually put something down.",
  },
  {
    title: "The art wall",
    copy: "Slatted oak, a flock of birds mid-flight, and two ledges of prints that range from Northern Lights to a Mona Lisa who has clearly had a day.",
  },
  {
    title: "Game nights",
    copy: "A D&D table for members — beginners and veterans both. The Game of Thrones books on the shelf are not decoration; someone will talk to you about them.",
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
        title="It's behind the closet."
        lead={`${site.loungeName} is the members' room out the back — and you get to it through the closet. Low light, deep chairs, a wall of frankly excellent nonsense, and a screen showing whatever's on.`}
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
        <SectionHeading
          eyebrow="Have a look"
          title="Two ends, one room."
          lead="Art and a sofa at one end, a big screen and chairs you disappear into at the other."
        />
        <div className="mt-14">
          <LoungeGallery />
        </div>
      </Section>

      <Section className="border-y border-line bg-ink-soft">
        <SectionHeading
          eyebrow="What's in there"
          title="Things to do with an afternoon."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {inThere.map((item) => (
            <Card key={item.title} className="h-full">
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-cream-dim">{item.copy}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Game nights"
              title="Dungeons & Dragons at the lounge."
              lead="We run a table for members. Never played? Good — half the people at it hadn't either, until they sat down. Roll. Connect. Adventure."
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

      <Section className="border-t border-line bg-ink-soft">
        <Plate className="px-8 py-14 text-center sm:px-14">
          <p className="font-script text-4xl text-gold sm:text-5xl">
            Roll. Connect. Adventure.
          </p>
          <Ornament className="mt-7" leaf />
          <p className="mx-auto mt-7 max-w-xl leading-relaxed text-cream-dim">
            The lounge is for members. If you&rsquo;re not one yet, signing up
            takes about ten minutes in store — bring your ID and we&rsquo;ll
            sort it on the day. Then we&rsquo;ll show you the closet.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/club">How membership works</ButtonLink>
            <ButtonLink href="/visit" variant="secondary">
              Find the lounge
            </ButtonLink>
          </div>
        </Plate>
      </Section>
    </>
  );
}
