import type { ReactNode } from "react";
import { Container } from "./container";

export function Section({
  children,
  id,
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold uppercase">
      <span aria-hidden className="h-px w-8 bg-gold/50" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-balance-tight text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-base leading-relaxed text-cream-dim sm:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
