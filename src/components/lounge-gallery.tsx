import Image, { type StaticImageData } from "next/image";
import artWall from "@/images/lounge/art-wall.jpg";
import tvRoom from "@/images/lounge/tv-room.jpg";

type Shot = {
  src: StaticImageData;
  alt: string;
  caption: string;
  note: string;
};

const shots: Shot[] = [
  {
    src: artWall,
    alt: "The lounge's slatted oak wall: a flock of black bird sculptures taking off across the timber, and two black picture ledges holding framed prints — Northern Lights, a Mona Lisa, Game of Thrones books and a CANNABIS sign among them.",
    caption: "The art wall",
    note: "Slatted oak, a flock of birds mid-flight, and two ledges of framed prints. Mona Lisa is up there twice, and she is not behaving herself either time.",
  },
  {
    src: tvRoom,
    alt: "The other end of the lounge: a wall-mounted television showing a football match on a light-wood panel, with a soundbar, a games console and a bong on the shelf below, and bouclé armchairs either side.",
    caption: "The other end",
    note: "Big screen, deep chairs you sink into, and whatever's on — football most weekends, a console when it isn't. This is where the game nights happen.",
  },
];

export function LoungeGallery() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {shots.map((shot) => (
        <figure key={shot.caption} className="group">
          <div className="rounded-card frame-gold relative overflow-hidden bg-surface">
            <Image
              src={shot.src}
              alt={shot.alt}
              placeholder="blur"
              sizes="(min-width: 640px) 45vw, 92vw"
              className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
            />
          </div>
          <figcaption className="mt-5">
            <p className="font-display text-xs tracking-poster text-gold uppercase">
              {shot.caption}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream-dim">
              {shot.note}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
