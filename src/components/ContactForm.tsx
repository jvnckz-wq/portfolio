"use client";

import { useState, type FormEvent } from "react";

// DEMO ONLY: messages are not delivered yet. Submitting shows a short "Sending…" state and a
// success message, then clears the form.
// TODO: send for real with a Next.js Server Action + Resend (API key in RESEND_API_KEY),
// add a honeypot field against spam, and show a real error message when sending fails.

// text-base (16px) keeps iPhones from zooming in when a field is tapped; font-normal undoes the label's weight.
const fieldClass =
  "mt-1 w-full rounded-lg border border-foreground/15 bg-transparent px-3 py-2 text-base font-normal placeholder:text-foreground/40 hover:border-foreground/30";

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    window.setTimeout(() => {
      form.reset();
      setStatus("sent");
    }, 900);
  }

  return (
    <form onSubmit={handleSubmit} onInput={() => status === "sent" && setStatus("idle")} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input name="name" type="text" required autoComplete="name" placeholder="Juan Dela Cruz" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Message
        <textarea name="message" required rows={5} placeholder="Tell me a bit about your project or opportunity." className={`${fieldClass} resize-y`} />
      </label>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {/* Morphs: "Send message" → "Sending…" → a narrower "✓ Sent" with the check drawing in. */}
        <button
          type="submit"
          disabled={status !== "idle"}
          className={`inline-flex h-11 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-5 text-sm font-medium text-background transition-[min-width,opacity] duration-300 ease-out hover:opacity-80 disabled:cursor-default motion-reduce:transition-none ${
            status === "sent" ? "min-w-28" : "min-w-40"
          } ${status === "sending" ? "opacity-70" : ""}`}
        >
          {status === "sent" ? (
            <>
              <svg viewBox="0 0 24 24" className="size-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12.5 10 17 19 7.5" className="draw-check" />
              </svg>
              Sent
            </>
          ) : status === "sending" ? (
            "Sending…"
          ) : (
            "Send message"
          )}
        </button>
        <p role="status" className="text-sm text-foreground/70">
          {status === "sent" ? "Thanks! Your message has been sent." : ""}
        </p>
      </div>
    </form>
  );
}
