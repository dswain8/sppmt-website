"use client";

import { useState, type FormEvent } from "react";
import { SUGGESTED_AMOUNTS } from "@/lib/donation";

export interface DonationFormConfig {
  email: string;
  whatsappNumber: string;
  receiptSlaDays: number;
}

interface DonationConfirmFormProps {
  config: DonationFormConfig;
}

type FormState = "idle" | "submitted";

export default function DonationConfirmForm({ config }: DonationConfirmFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    pan: "",
    address: "",
    donationDate: "",
    utr: "",
    message: "",
  });

  const amountValue =
    customAmount.trim() !== ""
      ? Number(customAmount.replace(/,/g, ""))
      : selectedAmount;

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const buildMessage = () => {
    const lines = [
      "Donation Confirmation — Shri Prasanna Pattnaik Memorial Trust",
      "",
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      form.pan ? `PAN: ${form.pan}` : null,
      form.address ? `Address: ${form.address}` : null,
      `Amount: ₹${amountValue ?? ""}`,
      `Donation date: ${form.donationDate}`,
      `UTR / Transaction ID: ${form.utr}`,
      form.message ? `Note: ${form.message}` : null,
      "",
      "Please verify this payment and issue an official 80G donation receipt.",
    ].filter(Boolean);

    return lines.join("\n");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!amountValue || amountValue <= 0) return;
    if (!form.fullName || !form.email || !form.phone || !form.donationDate || !form.utr) {
      return;
    }

    const body = buildMessage();
    const subject = encodeURIComponent(
      `Donation Confirmation — ${form.fullName} — ₹${amountValue}`
    );
    const mailto = `mailto:${config.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    const wa = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(body)}`;

    window.open(wa, "_blank", "noopener,noreferrer");
    window.location.href = mailto;
    setState("submitted");
  };

  if (state === "submitted") {
    return (
      <div className="rounded-xl border border-green/20 bg-green-light p-8 text-center">
        <h3 className="text-xl font-bold text-green mb-3">Thank you</h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Your donation details have been prepared for WhatsApp and email.
          Please send the message if it did not open automatically.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          After we verify your bank transfer, we will issue an official
          donation receipt within{" "}
          <strong>{config.receiptSlaDays} working days</strong>.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="text-orange font-semibold text-sm hover:underline"
        >
          Submit another confirmation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-green mb-3">
          Suggested amounts
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SUGGESTED_AMOUNTS.map((item) => {
            const active = selectedAmount === item.amount && !customAmount;
            return (
              <button
                key={item.amount}
                type="button"
                onClick={() => {
                  setSelectedAmount(item.amount);
                  setCustomAmount("");
                }}
                className={`rounded-lg border px-3 py-3 text-left transition-colors ${
                  active
                    ? "border-orange bg-orange/5 ring-1 ring-orange"
                    : "border-gray-200 hover:border-orange/40 bg-white"
                }`}
              >
                <span className="block font-bold text-green text-sm">
                  {item.label}
                </span>
                <span className="block text-[11px] text-gray-500 mt-1 leading-snug">
                  {item.impact}
                </span>
              </button>
            );
          })}
        </div>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">
            Or enter another amount (₹)
          </span>
          <input
            type="number"
            min={1}
            inputMode="numeric"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            placeholder="e.g. 3000"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-gray-700">
            Full name <span className="text-orange">*</span>
          </span>
          <input
            required
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Email <span className="text-orange">*</span>
          </span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Phone / WhatsApp <span className="text-orange">*</span>
          </span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            PAN (for tax receipt)
          </span>
          <input
            value={form.pan}
            onChange={(e) => update("pan", e.target.value.toUpperCase())}
            maxLength={10}
            className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2 text-sm uppercase focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            placeholder="Recommended for 80G tax deduction"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Donation date <span className="text-orange">*</span>
          </span>
          <input
            required
            type="date"
            value={form.donationDate}
            onChange={(e) => update("donationDate", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-gray-700">
            UTR / Transaction ID <span className="text-orange">*</span>
          </span>
          <input
            required
            value={form.utr}
            onChange={(e) => update("utr", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            placeholder="Bank transfer reference number"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-gray-700">
            Postal address
          </span>
          <textarea
            rows={2}
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
            placeholder="Needed if you want a printed receipt"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-gray-700">
            Message (optional)
          </span>
          <textarea
            rows={2}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
          />
        </label>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed">
        Submitting opens WhatsApp and your email app with the donation details
        pre-filled. We verify the transfer against our bank statement, then
        email your official receipt within {config.receiptSlaDays} working days.
      </p>

      <button
        type="submit"
        disabled={!amountValue || amountValue <= 0}
        className="w-full sm:w-auto bg-orange hover:bg-orange-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-md transition-colors"
      >
        Confirm donation &amp; request receipt
      </button>
    </form>
  );
}
