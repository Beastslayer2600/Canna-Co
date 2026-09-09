"use client";

import { useEffect, useState } from "react";
import { ArrowIcon, ChatIcon, PhoneIcon, PinIcon } from "./ui/icons";
import { mapsSearchUrl, site, whatsappLink } from "@/lib/site";

const actions = [
  {
    label: "Directions",
    href: mapsSearchUrl,
    icon: <PinIcon className="size-5" />,
    primary: true,
  },
  {
    label: "WhatsApp",
    href: whatsappLink(`Hi ${site.name}, I have a question.`),
    icon: <ChatIcon className="size-5" />,
    primary: false,
  },
  {
    label: "Call",
    href: site.contact.phoneHref,
    icon: <PhoneIcon className="size-5" />,
    primary: false,
  },
];

/**
 * The point of the site is getting people through the door, so on a phone the
 * three ways to act on that follow you down the page. Appears once the hero has
 * scrolled by, so it never covers the first impression.
 */
export function StickyActions() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line-gold bg-ink/95 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
      // Hidden from assistive tech while off-screen; the same links live in the
      // header, the footer and the Visit page.
      aria-hidden={!shown}
    >
      <div className="mx-auto flex max-w-md items-stretch gap-2 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target={action.href.startsWith("tel:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            tabIndex={shown ? undefined : -1}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-3 text-sm font-semibold transition-colors ${
              action.primary
                ? "bg-gold text-ink hover:bg-gold-bright"
                : "border border-line bg-surface/70 text-cream hover:border-gold"
            }`}
          >
            {action.icon}
            {action.label}
            {action.primary ? <ArrowIcon className="size-4" /> : null}
          </a>
        ))}
      </div>
    </div>
  );
}
