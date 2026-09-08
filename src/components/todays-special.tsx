"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { todaysSpecial } from "@/lib/hours";
import { ArrowIcon } from "./ui/icons";

/** Which day it is only changes at midnight — nothing to subscribe to. */
const noSubscribe = () => () => {};

// `todaysSpecial` returns an entry from a module-level array, so the reference
// is stable across calls and useSyncExternalStore won't spin.
const getSnapshot = () => todaysSpecial() ?? null;
const getServerSnapshot = () => null;

/**
 * "On today · Twisted Tuesday". Resolved on the client because the page is
 * prerendered and the answer turns over at midnight, Johannesburg time.
 */
export function TodaysSpecial({ className = "" }: { className?: string }) {
  const special = useSyncExternalStore(
    noSubscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!special) return null;

  return (
    <Link
      href={`/specials#${special.slug}`}
      className={`group inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm transition-colors hover:border-gold/60 hover:bg-gold/15 ${className}`}
    >
      <span className="font-semibold text-gold-bright">
        On today &middot; {special.titleLead} {special.titleScript}
      </span>
      <span className="text-cream-dim">{special.headline}</span>
      <ArrowIcon className="size-4 text-gold transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
