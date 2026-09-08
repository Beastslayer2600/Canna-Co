import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
} as const;

type Props = SVGProps<SVGSVGElement>;

export function LeafIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M12 21V11" />
      <path d="M12 11c0-4 2.5-7.5 7-8 .5 4.5-2 8-7 8Z" />
      <path d="M12 15c-4.2 0-7-2.4-7.4-6.2C8.6 9 12 11 12 15Z" />
    </svg>
  );
}

export function ShieldIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6l7-3Z" />
      <path d="M9.5 12.2l1.8 1.8 3.4-3.6" />
    </svg>
  );
}

export function UsersIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M15.5 20v-1.6a3.4 3.4 0 0 0-3.4-3.4H6.9a3.4 3.4 0 0 0-3.4 3.4V20" />
      <circle cx="9.5" cy="8.2" r="3.2" />
      <path d="M20.5 20v-1.6a3.4 3.4 0 0 0-2.6-3.3" />
      <path d="M15.6 5.2a3.4 3.4 0 0 1 0 6.1" />
    </svg>
  );
}

export function SparkIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M12 3.5l1.9 4.9 4.9 1.9-4.9 1.9L12 17.1l-1.9-4.9-4.9-1.9 4.9-1.9L12 3.5Z" />
      <path d="M18.5 16.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" />
    </svg>
  );
}

export function PinIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function PhoneIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M6.2 3.5h3l1.4 3.6-2 1.4a11 11 0 0 0 5 5l1.4-2 3.6 1.4v3a1.6 1.6 0 0 1-1.8 1.6A16.4 16.4 0 0 1 4.6 5.3 1.6 1.6 0 0 1 6.2 3.5Z" />
    </svg>
  );
}

export function MailIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.4" />
      <path d="M3.8 7l7.3 5.2a1.6 1.6 0 0 0 1.8 0L20.2 7" />
    </svg>
  );
}

export function ChatIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M20.5 11.7c0 4-3.8 7.2-8.5 7.2a9.8 9.8 0 0 1-2.7-.4L4.5 20l1.2-3.4a6.8 6.8 0 0 1-2.2-4.9c0-4 3.8-7.2 8.5-7.2s8.5 3.2 8.5 7.2Z" />
    </svg>
  );
}

export function ArrowIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M5 12h13" />
      <path d="M13 6.5 18.5 12 13 17.5" />
    </svg>
  );
}

export function CheckIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M5 12.6 9.5 17 19 7" />
    </svg>
  );
}

export function InstagramIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: Props) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M14.8 8.4h2.3V5.2h-2.4c-2.3 0-3.7 1.5-3.7 3.9v1.7H8.6v3.2H11V21h3.2v-7h2.4l.5-3.2h-2.9V9.4c0-.7.3-1 .6-1Z" />
    </svg>
  );
}
