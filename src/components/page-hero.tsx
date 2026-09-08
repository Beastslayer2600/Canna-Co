import type { ReactNode } from "react";
import { Container } from "./ui/container";
import { Eyebrow } from "./ui/section";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line/60">
      <div
        aria-hidden
        className="absolute -top-52 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-gold-deep/12 blur-[120px]"
      />
      <Container className="relative">
        <div className="max-w-3xl py-20 sm:py-28">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-balance-tight text-4xl leading-[1.1] sm:text-5xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">
              {lead}
            </p>
          ) : null}
          {children ? <div className="mt-9">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
