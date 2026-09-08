"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { site } from "@/lib/site";

const STORAGE_KEY = "cannaco:age-verified";

function subscribe(onChange: () => void) {
  // Fires when another tab confirms, so the gate clears everywhere at once.
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function readVerified() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    // Storage can be unavailable (private mode, blocked cookies) — just ask again.
    return false;
  }
}

/**
 * Blocks the page until the visitor confirms they are of legal age.
 * The answer is remembered per-browser; declining sends them away.
 */
export function AgeGate() {
  // The prerendered HTML has no gate in it, so the server snapshot is `true`.
  // On hydration the real value takes over and the gate appears if needed.
  const storedVerified = useSyncExternalStore(subscribe, readVerified, () => true);
  const [justConfirmed, setJustConfirmed] = useState(false);
  const [declined, setDeclined] = useState(false);

  const verified = storedVerified || justConfirmed;
  const blocking = !verified;

  useEffect(() => {
    document.body.style.overflow = blocking ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [blocking]);

  if (verified) return null;

  function confirm() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Non-fatal: they'll simply be asked again next visit.
    }
    setJustConfirmed(true);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 px-5 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-card border border-line bg-surface p-8 text-center shadow-2xl">
        <span className="mx-auto flex size-14 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
          <svg
            viewBox="0 0 24 24"
            className="size-7 text-gold-bright"
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

        {!declined ? (
          <>
            <h2 id="age-gate-title" className="mt-6 text-2xl">
              Are you {site.minimumAge} or older?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-cream-dim">
              {site.name} is a private cannabis club and store for adults. You
              must be {site.minimumAge} or older to enter this site.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={confirm}
                className="flex-1 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright"
              >
                Yes, I&rsquo;m {site.minimumAge}+
              </button>
              <button
                type="button"
                onClick={() => setDeclined(true)}
                className="flex-1 rounded-full border border-line px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-gold"
              >
                No
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 id="age-gate-title" className="mt-6 text-2xl">
              Sorry — come back later
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-cream-dim">
              You need to be {site.minimumAge} or older to browse this site.
            </p>
            <button
              type="button"
              onClick={() => setDeclined(false)}
              className="mt-7 text-sm font-semibold text-gold-bright underline-offset-4 hover:underline"
            >
              Go back
            </button>
          </>
        )}
      </div>
    </div>
  );
}
