import type { ReactNode } from "react";

/** Seven leaflets, longest in the middle — a proper fan leaf, not a clip-art blob. */
const LEAFLETS = [
  { angle: -80, len: 46, width: 7 },
  { angle: -54, len: 66, width: 9 },
  { angle: -27, len: 84, width: 10 },
  { angle: 0, len: 92, width: 11 },
  { angle: 27, len: 84, width: 10 },
  { angle: 54, len: 66, width: 9 },
  { angle: 80, len: 46, width: 7 },
];

/** One leaflet, tip pointing up, with a notch either side for the serration. */
function leafletPath(len: number, w: number) {
  return [
    "M0 0",
    `C${w * 0.9} ${-len * 0.16}, ${w} ${-len * 0.4}, ${w * 0.6} ${-len * 0.58}`,
    `L${w * 0.82} ${-len * 0.64}`,
    `C${w * 0.5} ${-len * 0.79}, ${w * 0.26} ${-len * 0.9}, 0 ${-len}`,
    `C${-w * 0.26} ${-len * 0.9}, ${-w * 0.5} ${-len * 0.79}, ${-w * 0.82} ${-len * 0.64}`,
    `L${-w * 0.6} ${-len * 0.58}`,
    `C${-w} ${-len * 0.4}, ${-w * 0.9} ${-len * 0.16}, 0 0`,
    "Z",
  ].join(" ");
}

export function CannabisLeaf({
  className = "",
  filled = true,
}: {
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg viewBox="-100 -100 200 108" className={className} aria-hidden>
      <g transform="translate(0 4)">
        {LEAFLETS.map((leaflet) => (
          <path
            key={leaflet.angle}
            d={leafletPath(leaflet.len, leaflet.width)}
            transform={`rotate(${leaflet.angle})`}
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={filled ? 0 : 2}
            strokeLinejoin="round"
          />
        ))}
        <path d="M-1.1 0h2.2v8h-2.2z" fill="currentColor" />
      </g>
    </svg>
  );
}

/** The gold rule-and-diamond separator the posters use between blocks. */
export function Ornament({
  className = "",
  leaf = false,
}: {
  className?: string;
  leaf?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-4 text-gold ${className}`}
      aria-hidden
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50 sm:w-24" />
      {leaf ? (
        <CannabisLeaf className="size-4 text-gold/70" />
      ) : (
        <span className="size-1.5 rotate-45 bg-gold/70" />
      )}
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50 sm:w-24" />
    </div>
  );
}

/**
 * Foliage bleeding in from the edges, the way it frames the printed posters.
 * Purely decorative and deliberately faint — it should read as texture.
 */
export function LeafFrame({
  side = "both",
  className = "",
}: {
  side?: "left" | "right" | "both";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {side !== "right" ? (
        <>
          <CannabisLeaf className="absolute -top-16 -left-24 size-64 rotate-[24deg] text-leaf/[0.07]" />
          <CannabisLeaf className="absolute bottom-4 -left-32 size-72 -rotate-[18deg] text-leaf/[0.05]" />
        </>
      ) : null}
      {side !== "left" ? (
        <>
          <CannabisLeaf className="absolute -top-24 -right-28 size-72 -rotate-[32deg] text-leaf/[0.06]" />
          <CannabisLeaf className="absolute -bottom-16 -right-20 size-56 rotate-[12deg] text-leaf/[0.05]" />
        </>
      ) : null}
    </div>
  );
}

/** A small gold-outlined plate for the odd pull-quote or callout. */
export function Plate({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`frame-gold rounded-card relative overflow-hidden bg-surface/60 ${className}`}
    >
      {children}
    </div>
  );
}
