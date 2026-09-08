"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { site, whatsappLink } from "@/lib/site";

const topics = [
  "Joining the club",
  "A question about the store",
  "Something in stock",
  "Growing advice",
  "Something else",
] as const;

const fieldClasses =
  "w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-cream placeholder:text-muted focus:border-leaf focus:outline-none";

/**
 * There is no backend on this site, so the form composes the enquiry and hands
 * it to the visitor's own email client (or WhatsApp). Nothing is sent or stored
 * by us, which also keeps the privacy story simple.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState<string>(topics[0]);
  const [message, setMessage] = useState("");

  const composed = [
    `Hi ${site.name},`,
    "",
    message.trim() || "(your message here)",
    "",
    name.trim() ? `Thanks,\n${name.trim()}` : "",
  ]
    .join("\n")
    .trim();

  const subject = `${topic}${name.trim() ? ` — ${name.trim()}` : ""}`;
  const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(composed)}`;

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        window.location.href = mailto;
      }}
    >
      <div>
        <label htmlFor="name" className="block text-sm text-cream-dim">
          Your name
        </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          placeholder="Jordan"
          className={`mt-2 ${fieldClasses}`}
        />
      </div>

      <div>
        <label htmlFor="topic" className="block text-sm text-cream-dim">
          What&rsquo;s it about?
        </label>
        <select
          id="topic"
          name="topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          className={`mt-2 ${fieldClasses}`}
        >
          {topics.map((option) => (
            <option key={option} value={option} className="bg-ink">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-cream-dim">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us what you need — we'll come back to you."
          className={`mt-2 resize-y ${fieldClasses}`}
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button type="submit" className="sm:flex-1">
          Send by email
        </Button>
        <a
          href={whatsappLink(composed)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface/60 px-6 py-3 text-sm font-semibold tracking-wide text-cream transition-colors hover:border-leaf hover:bg-surface-2 sm:flex-1"
        >
          Send on WhatsApp
        </a>
      </div>

      <p className="text-xs leading-relaxed text-muted">
        Both buttons open your own email app or WhatsApp with the message ready
        to go — nothing is submitted to this website, and we don&rsquo;t store
        anything you type here.
      </p>
    </form>
  );
}
