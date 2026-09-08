import type { CSSProperties } from "react";

/**
 * The flock of black birds on the lounge wall, as silhouettes. Positions are
 * hand-placed rather than random so the flock reads as deliberate.
 */
const FLOCK = [
  { x: 4, y: 26, size: 46, rotate: -12 },
  { x: 17, y: 40, size: 34, rotate: 8 },
  { x: 25, y: 22, size: 28, rotate: -20 },
  { x: 33, y: 52, size: 40, rotate: 4 },
  { x: 45, y: 30, size: 26, rotate: -8 },
  { x: 54, y: 60, size: 32, rotate: 14 },
  { x: 66, y: 38, size: 22, rotate: -16 },
  { x: 76, y: 66, size: 36, rotate: 6 },
  { x: 88, y: 44, size: 26, rotate: -6 },
];

function Bird({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="-24 -14 48 22" className={className} style={style} aria-hidden>
      <path
        d="M0 0c-3.4-5.6-8.4-8.6-15-9.4-2.6-.3-5.2 0-7.6 1 3.4.6 6.4 2 9 4.2 2.6 2.2 4.4 4.8 5.4 7.8C-5.6 2.4-2.8 1.4 0 0Z"
        fill="currentColor"
      />
      <path
        d="M0 0c3.4-5.6 8.4-8.6 15-9.4 2.6-.3 5.2 0 7.6 1-3.4.6-6.4 2-9 4.2-2.6 2.2-4.4 4.8-5.4 7.8C5.6 2.4 2.8 1.4 0 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BirdFlock({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      {FLOCK.map((bird) => (
        <Bird
          key={`${bird.x}-${bird.y}`}
          className="absolute text-ink"
          style={{
            left: `${bird.x}%`,
            top: `${bird.y}%`,
            width: `${bird.size}px`,
            transform: `rotate(${bird.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
