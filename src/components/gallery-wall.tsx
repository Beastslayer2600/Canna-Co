import { BirdFlock } from "./ui/birds";

/** `small` frames are dropped on narrow screens so the ledge stays legible. */
type Frame = { frame: string; ratio: string; small?: boolean };

/**
 * The lounge's gallery wall, rebuilt in type rather than photographed: slatted
 * oak, a flock of birds mid-flight, and two picture ledges of framed prints.
 * The titles are what's genuinely hanging in there.
 */
const LEDGES: Frame[][] = [
  [
    { frame: "Girl on a Joint", ratio: "aspect-[3/4]", small: true },
    { frame: "Northern Lights", ratio: "aspect-[3/4]" },
    { frame: "Creation of Adam", ratio: "aspect-[4/3]", small: true },
    { frame: "Mona Lisa", ratio: "aspect-[3/4]" },
    { frame: "夜音", ratio: "aspect-[4/3]" },
  ],
  [
    { frame: "Mona Lisa, again", ratio: "aspect-[3/4]", small: true },
    { frame: "Rolling Stoner", ratio: "aspect-[2/3]" },
    { frame: "Game of Thrones", ratio: "aspect-[2/3]", small: true },
    { frame: "CANNABIS", ratio: "aspect-[5/2]" },
    { frame: "White Walker", ratio: "aspect-[2/3]" },
  ],
];

export function GalleryWall() {
  return (
    <div className="rounded-card frame-gold relative overflow-hidden">
      <div aria-hidden className="bg-slats absolute inset-0" />
      {/* Light falling from the ceiling panel, as it does in the room. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_0%,rgba(240,220,180,0.16),transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/70"
      />
      <BirdFlock className="hidden sm:block" />

      <div className="relative flex flex-col gap-9 px-5 py-12 sm:px-10 sm:py-16">
        {LEDGES.map((ledge, index) => (
          <div key={index} className="ml-auto w-full max-w-sm sm:max-w-lg">
            <ul className="flex items-end justify-end gap-2 sm:gap-3.5">
              {ledge.map((item) => (
                <li
                  key={item.frame}
                  className={`${item.ratio} ${
                    item.small ? "hidden sm:flex" : "flex"
                  } w-full min-w-0 flex-1 items-center justify-center rounded-[2px] border-[3px] border-[#0d0b08] bg-gradient-to-br from-[#1d2a20] to-[#0f150f] p-1 shadow-[0_6px_14px_-4px_rgba(0,0,0,0.9)]`}
                >
                  <span className="font-display text-center text-[0.5rem] leading-tight tracking-wide text-cream-dim sm:text-[0.62rem]">
                    {item.frame}
                  </span>
                </li>
              ))}
            </ul>
            {/* The picture ledge: a dark bar with a lit top edge. */}
            <div className="h-2 rounded-[2px] border-t border-t-[#4a4038] bg-[#0d0b08] shadow-[0_5px_12px_-2px_rgba(0,0,0,0.85)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
