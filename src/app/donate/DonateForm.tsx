"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
const PRESET_AMOUNTS = [1000, 5000, 10000, 25000];

export default function DonateForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("amount", String(selectedAmount ?? customAmount));

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        setSelectedAmount(null);
        setCustomAmount("");
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
          Thank You for Your Generosity
        </h3>
        <p className="text-gray-600">
          We have received your donation inquiry. Our team will reach out with
          payment details.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-orange font-medium hover:text-orange-dark transition-colors"
        >
          Make another donation
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-green mb-6">Donate Now</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="donor-name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="donor-name"
            name="name"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="donor-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="donor-email"
            name="email"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="donor-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="donor-phone"
            name="phone"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="donor-pan" className="block text-sm font-medium text-gray-700 mb-1">
            PAN Number (for 80G receipt)
          </label>
          <input
            type="text"
            id="donor-pan"
            name="pan"
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
          />
        </div>

        {/* Amount selection */}
        <div>
          <p className="block text-sm font-medium text-gray-700 mb-2">
            Select Amount (INR) *
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
            {PRESET_AMOUNTS.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setSelectedAmount(amt);
                  setCustomAmount("");
                }}
                className={`py-2.5 rounded-md font-medium text-sm transition-colors border ${
                  selectedAmount === amt
                    ? "bg-orange text-white border-orange"
                    : "bg-white text-gray-700 border-gray-300 hover:border-orange"
                }`}
              >
                ₹{amt.toLocaleString("en-IN")}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Custom amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            min="100"
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending" || (!selectedAmount && !customAmount)}
          className="w-full bg-orange hover:bg-orange-dark disabled:bg-orange/60 text-white font-semibold py-3 rounded-md transition-colors text-lg"
        >
          {status === "sending" ? "Submitting..." : "Donate Now"}
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
