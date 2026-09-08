/**
 * The two-part poster lockup: engraved gold caps over a brushed script word.
 * Used for the weekly specials so the site reads like the printed artwork.
 */
export function PosterTitle({
  lead,
  script,
  as: Tag = "h2",
  className = "",
}: {
  lead: string;
  script: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={`leading-[0.95] ${className}`}>
      <span className="text-foil block font-display font-bold tracking-[0.06em] uppercase">
        {lead}
      </span>
      <span className="font-script -mt-1 block text-[1.35em] font-normal text-cream">
        {script}
        <span className="text-gold">!</span>
      </span>
    </Tag>
  );
}
