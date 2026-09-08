import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] max-w-xl flex-col justify-center py-24">
        <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
          404
        </p>
        <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">
          That page has gone walkabout.
        </h1>
        <p className="mt-6 leading-relaxed text-cream-dim">
          The link you followed doesn&rsquo;t exist any more — or never did. Try
          one of these instead.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
