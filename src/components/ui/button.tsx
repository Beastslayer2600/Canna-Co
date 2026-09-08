import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-leaf text-ink hover:bg-leaf-bright",
  secondary:
    "border border-line bg-surface/60 text-cream hover:border-leaf hover:bg-surface-2",
  ghost: "text-cream hover:text-leaf-bright",
};

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  external = false,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  external?: boolean;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
