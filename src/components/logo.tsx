import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label={`${site.name} — home`}
    >
      <span className="flex size-10 items-center justify-center rounded-xl border border-leaf/40 bg-leaf-deep/50 transition-colors group-hover:border-leaf">
        <svg
          viewBox="0 0 24 24"
          className="size-5 text-leaf-bright"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 21V11" />
          <path d="M12 11c0-4 2.5-7.5 7-8 .5 4.5-2 8-7 8Z" />
          <path d="M12 15c-4.2 0-7-2.4-7.4-6.2C8.6 9 12 11 12 15Z" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-semibold tracking-tight text-cream">
          Canna <span className="text-leaf-bright">&amp;</span> Co
        </span>
        <span className="mt-1 block text-[0.6rem] font-medium tracking-[0.24em] text-muted uppercase">
          {site.suburb}
        </span>
      </span>
    </Link>
  );
}
