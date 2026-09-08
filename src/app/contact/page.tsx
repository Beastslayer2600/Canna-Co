import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import {
  ChatIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/ui/icons";
import {
  formattedAddress,
  mapsSearchUrl,
  site,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Phone, WhatsApp, email and address for Canna & Co in ${site.suburb}, ${site.city}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const methods = [
    {
      icon: <PhoneIcon className="size-5" />,
      label: "Phone",
      value: site.contact.phone,
      href: site.contact.phoneHref,
      external: false,
    },
    {
      icon: <ChatIcon className="size-5" />,
      label: "WhatsApp",
      value: "Message the shop",
      href: whatsappLink(`Hi ${site.name}, I have a question.`),
      external: true,
    },
    {
      icon: <MailIcon className="size-5" />,
      label: "Email",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
      external: false,
    },
    {
      icon: <PinIcon className="size-5" />,
      label: "Address",
      value: formattedAddress,
      href: mapsSearchUrl,
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ask us anything."
        lead="Membership, stock, growing, or just checking we're open — whatever it is, we'd rather you asked."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold uppercase">
              <span aria-hidden className="h-px w-8 bg-gold/50" />
              Reach us directly
            </h2>

            <ul className="mt-8 space-y-3">
              {methods.map((method) => (
                <li key={method.label}>
                  <a
                    href={method.href}
                    {...(method.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="rounded-card flex items-start gap-4 border border-line bg-surface/50 p-5 transition-colors hover:border-gold/50 hover:bg-surface-2/60"
                  >
                    <span className="mt-0.5 text-gold">{method.icon}</span>
                    <span>
                      <span className="block text-xs tracking-[0.18em] text-muted uppercase">
                        {method.label}
                      </span>
                      <span className="mt-1 block text-cream">
                        {method.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="rounded-card mt-6 border border-line bg-surface/50 p-5">
              <div className="flex items-center gap-3">
                <ClockIcon className="size-5 text-gold" />
                <h3 className="text-xs tracking-[0.18em] text-muted uppercase">
                  When we&rsquo;re open
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {site.hours.map((slot) => (
                  <li
                    key={slot.days}
                    className="flex justify-between gap-6 border-b border-line/60 pb-2 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-cream-dim">{slot.days}</span>
                    <span className="text-cream">{slot.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-card border border-line bg-surface/60 p-7 sm:p-9">
            <h2 className="text-2xl">Send us a message</h2>
            <p className="mt-3 text-sm leading-relaxed text-cream-dim">
              Fill this in and we&rsquo;ll get back to you during opening hours.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
