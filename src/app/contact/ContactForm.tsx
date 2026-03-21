"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ID = "YOUR_FORMSPREE_ID";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-green-light rounded-xl p-8 text-center">
        <svg
          className="w-12 h-12 text-green mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-lg font-bold text-green mb-2">Message Sent</h3>
        <p className="text-gray-600">
          Thank you for reaching out. We will get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-orange font-medium hover:text-orange-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-green mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors resize-y"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-orange hover:bg-orange-dark disabled:bg-orange/60 text-white font-semibold py-3 rounded-md transition-colors"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "error" && (
          <p className="text-red-600 text-sm text-center">
            Something went wrong. Try again or email us directly.
          </p>
        )}
      </form>
    </div>
  );
}
