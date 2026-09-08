import { OpenNow } from "./open-now";
import { Container } from "./ui/container";
import { PhoneIcon } from "./ui/icons";
import { site } from "@/lib/site";

/** Thin strip above the header: are they open, and how to call. */
export function UtilityBar() {
  return (
    <div className="border-b border-line/70 bg-ink-soft">
      <Container>
        <div className="flex h-10 items-center justify-between gap-4 text-xs">
          <OpenNow />
          <div className="flex items-center gap-5">
            <span className="hidden text-muted sm:inline">
              {site.minimumAge}+ only
            </span>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-2 text-cream-dim transition-colors hover:text-gold"
            >
              <PhoneIcon className="size-3.5" />
              {site.contact.phone}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
