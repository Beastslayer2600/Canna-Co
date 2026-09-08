import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-card border border-line bg-surface/60 p-7 transition-colors duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <Card className="h-full hover:border-gold/50">
      <div className="mb-5 flex size-11 items-center justify-center rounded-lg border border-gold/25 bg-gold/10 text-gold">
        {icon}
      </div>
      <h3 className="text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-cream-dim">{children}</p>
    </Card>
  );
}
