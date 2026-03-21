"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ID = "YOUR_FORMSPREE_ID";

export default function JoinForm() {
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
        <h3 className="text-lg font-bold text-green mb-2">
          Application Received
        </h3>
        <p className="text-gray-600">
          Thank you for your interest in volunteering. Our team will review your
          application and get in touch.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-orange font-medium hover:text-orange-dark transition-colors"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-green mb-6">Volunteer Application</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="vol-name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="vol-name"
            name="name"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="vol-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="vol-email"
            name="email"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="vol-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="vol-phone"
            name="phone"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="vol-location" className="block text-sm font-medium text-gray-700 mb-1">
            City / Location *
          </label>
          <input
            type="text"
            id="vol-location"
            name="location"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="vol-interest" className="block text-sm font-medium text-gray-700 mb-1">
            Area of Interest *
          </label>
          <select
            id="vol-interest"
            name="interest"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors bg-white"
          >
            <option value="">Select an area</option>
            <option value="education">Education &amp; Mentoring</option>
            <option value="healthcare">Healthcare Outreach</option>
            <option value="events">Event Planning</option>
            <option value="digital">Digital / IT Support</option>
            <option value="fundraising">Fundraising</option>
            <option value="fieldwork">Community Fieldwork</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="vol-message" className="block text-sm font-medium text-gray-700 mb-1">
            Tell us about yourself
          </label>
          <textarea
            id="vol-message"
            name="message"
            rows={3}
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors resize-y"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-green hover:bg-green-dark disabled:bg-green/60 text-white font-semibold py-3 rounded-md transition-colors"
        >
          {status === "sending" ? "Submitting..." : "Submit Application"}
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
