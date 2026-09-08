"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Container } from "./ui/container";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes. Adjusting state during
  // render (rather than in an effect) avoids a second render pass.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-ink/95 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-surface-2 text-cream"
                      : "text-cream-dim hover:text-cream"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-leaf-bright sm:inline-flex"
            >
              Get in touch
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-11 items-center justify-center rounded-full border border-line text-cream lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                aria-hidden
              >
                {open ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6 6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 8h16" />
                    <path d="M4 16h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-ink lg:hidden">
          <Container>
            <nav aria-label="Mobile" className="flex flex-col py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-line/60 py-4 text-lg text-cream last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-5 mb-2 rounded-full bg-leaf px-5 py-3 text-center text-sm font-semibold text-ink"
              >
                Get in touch
              </Link>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
