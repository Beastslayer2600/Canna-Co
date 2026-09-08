import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { faqs, type Faq } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Answers to the questions people ask us most about the club, the store and visiting us in ${site.suburb}.`,
  alternates: { canonical: "/faq" },
};

const categories: Faq["category"][] = [
  "Visiting",
  "Specials",
  "Membership",
  "In store",
  "Practical",
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="FAQ"
        title="Questions, answered plainly."
        lead="If yours isn't here, ask us — we'd rather answer it than have you guess."
      >
        <ButtonLink href="/contact">Ask us something else</ButtonLink>
      </PageHero>

      <Section>
        <div className="space-y-16">
          {categories.map((category) => {
            const items = faqs.filter((faq) => faq.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold uppercase">
                  <span aria-hidden className="h-px w-8 bg-gold/50" />
                  {category}
                </h2>

                <dl className="mt-8 divide-y divide-line border-y border-line">
                  {items.map((faq) => (
                    <div key={faq.question} className="py-7">
                      <dt className="text-xl text-cream">{faq.question}</dt>
                      <dd className="mt-3 max-w-2xl leading-relaxed text-cream-dim">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
