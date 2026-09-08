import { CannabisLeaf } from "./botanical";

/**
 * The strapline ticker. Two identical tracks slide left in lockstep so the loop
 * never shows a seam; it holds still for anyone who asked for reduced motion.
 */
export function Marquee({ items }: { items: string[] }) {
  const track = (
    <ul
      className="animate-marquee flex shrink-0 items-center gap-10 pr-10"
      aria-hidden
    >
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-center gap-10">
          <span className="font-display text-sm tracking-poster whitespace-nowrap text-cream uppercase sm:text-base">
            {item}
          </span>
          <CannabisLeaf className="size-3.5 shrink-0 text-gold/70" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="border-y border-line-gold bg-surface/40 py-4">
      <div className="flex overflow-hidden">
        {track}
        {track}
      </div>
      <span className="sr-only">{items.join(". ")}.</span>
    </div>
  );
}
