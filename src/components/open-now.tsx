"use client";

import { useEffect, useState } from "react";
import { openState, type OpenState } from "@/lib/hours";

/**
 * Live open/closed badge. The page is prerendered, so this stays empty until
 * hydration rather than baking a build-time answer into the HTML.
 */
export function OpenNow({ className = "" }: { className?: string }) {
  const [state, setState] = useState<OpenState | null>(null);

  useEffect(() => {
    const tick = () => setState(openState());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!state) {
    return <span className={`h-5 ${className}`} aria-hidden />;
  }

  const open = state.status === "open";

  return (
    <span
      className={`inline-flex items-center gap-2 text-xs ${className}`}
      // Screen readers get the whole sentence, not the dot plus fragments.
      role="status"
    >
      <span className="relative flex size-2">
        {open ? (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-leaf opacity-60" />
        ) : null}
        <span
          className={`relative inline-flex size-2 rounded-full ${
            open ? "bg-leaf" : "bg-muted"
          }`}
        />
      </span>
      {open ? (
        <span className="text-cream-dim">
          <span className="font-semibold text-cream">
            {state.closingSoon ? "Closing soon" : "Open now"}
          </span>{" "}
          &middot; until {state.closesAt}
        </span>
      ) : (
        <span className="text-cream-dim">
          <span className="font-semibold text-cream">Closed</span> &middot; opens{" "}
          {state.opensAt} {state.opensDay}
        </span>
      )}
    </span>
  );
}
