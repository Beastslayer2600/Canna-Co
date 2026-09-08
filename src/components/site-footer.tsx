import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "./ui/container";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./ui/icons";
import { formattedAddress, mapsSearchUrl, nav, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-ink-soft">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-dim">
              {site.tagline} Members-only club and boutique store, run by people
              who care about doing this properly.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-leaf hover:text-leaf-bright"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-leaf hover:text-leaf-bright"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-display text-sm tracking-[0.2em] text-gold uppercase">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream-dim transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-cream-dim transition-colors hover:text-cream"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm tracking-[0.2em] text-gold uppercase">
              Find us
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-cream-dim">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 size-4 shrink-0 text-leaf" />
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  {formattedAddress}
                </a>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 size-4 shrink-0 text-leaf" />
                <a
                  href={site.contact.phoneHref}
                  className="transition-colors hover:text-cream"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 size-4 shrink-0 text-leaf" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-cream"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/legal" className="transition-colors hover:text-cream">
              Terms &amp; privacy
            </Link>
            <span>
              Strictly {site.minimumAge}+. Not for sale to minors.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
