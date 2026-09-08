import Link from "next/link";
import { site } from "@/lib/site";

/** The poster wordmark: leaf mark, engraved caps, letterspaced strapline. */
export function Logo({
  className = "",
  strap = site.suburb,
}: {
  className?: string;
  strap?: string;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex flex-col items-center leading-none ${className}`}
      aria-label={`${site.name} — home`}
    >
      <svg
        viewBox="0 0 24 24"
        className="mb-1.5 size-4 text-gold transition-colors group-hover:text-gold-bright"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2.2c1.1 1.5 1.6 3 1.5 4.6 1.2-1 2.6-1.6 4.2-1.7-.3 1.7-1.1 3-2.4 4 1.5.1 2.8.6 4 1.6-1.4 1-2.9 1.4-4.4 1.3 1 .9 1.7 2 2 3.4-1.5-.2-2.8-.8-3.8-1.8.1 1.2-.1 2.4-.6 3.5H12h-.5c-.5-1.1-.7-2.3-.6-3.5-1 1-2.3 1.6-3.8 1.8.3-1.4 1-2.5 2-3.4-1.5.1-3-.3-4.4-1.3 1.2-1 2.5-1.5 4-1.6-1.3-1-2.1-2.3-2.4-4 1.6.1 3 .7 4.2 1.7-.1-1.6.4-3.1 1.5-4.6Z" />
        <path d="M11.6 15.6h.8V22h-.8z" />
      </svg>

      <span className="font-display text-lg font-semibold tracking-[0.12em] whitespace-nowrap text-cream">
        CANNA<span className="text-gold">&amp;</span>CO
      </span>

      {strap ? (
        <span className="mt-1.5 text-[0.55rem] font-medium tracking-[0.3em] whitespace-nowrap text-muted uppercase">
          {strap}
        </span>
      ) : null}
    </Link>
  );
}
