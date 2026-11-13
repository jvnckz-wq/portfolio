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
    <form onSubmit={handleSubmit} onInput={() => status === "sent" && setStatus("idle")} className="mt-6 space-y-4">
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
        <button
          type="submit"
          disabled={status === "sending"}
          className="cursor-pointer rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-80 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" className="text-sm text-foreground/70">
          {status === "sent" ? "Thanks! Your message has been sent." : ""}
        </p>
      </div>
    </form>
  );
}
