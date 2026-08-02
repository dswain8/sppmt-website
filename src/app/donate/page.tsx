import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import DonationConfirmForm from "@/components/DonationConfirmForm";
import { getDonationConfig } from "@/lib/donation";

export const metadata: Metadata = {
  title: "Donate | Tax Benefits under Section 80G",
  description:
    "Donate to Shri Prasanna Pattnaik Memorial Trust. Eligible donations receive an official receipt for tax deduction under Section 80G of the Income Tax Act.",
  keywords: [
    "Donate Odisha",
    "80G donation Odisha",
    "Section 80G tax deduction",
    "Prasanna Pattnaik Trust donate",
    "charitable donation Odisha",
  ],
};

const STEPS = [
  {
    n: "1",
    title: "Transfer",
    body: "Send your contribution to our UCO Bank account using NEFT, IMPS, or RTGS (non-cash modes preferred for tax benefits).",
  },
  {
    n: "2",
    title: "Confirm",
    body: "Share your name, PAN, amount, and UTR so we can verify the payment and prepare your receipt.",
  },
  {
    n: "3",
    title: "Get your 80G receipt",
    body: "After verification, we email your official donation receipt for claiming deduction under Section 80G.",
  },
];

export default function DonatePage() {
  const config = getDonationConfig();
  const hasRegistrationDetails =
    Boolean(config.pan) ||
    Boolean(config.registration12A) ||
    Boolean(config.approval80G);

  return (
    <>
      <PageBanner
        title="Support Our Mission"
        subtitle="Donations eligible for tax deduction under Section 80G"
        imageSrc="/images/activities/DSC09450.jpg"
        imageAlt="Trust community programs"
      />

      <section className="bg-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-green font-bold text-sm uppercase tracking-wide shadow-sm">
                Section 80G
              </span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Eligible for tax deduction under Section 80G
              </h2>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                Donations to the Shri Prasanna Pattnaik Memorial Trust are eligible
                for tax deduction under{" "}
                <strong>Section 80G of the Income Tax Act, 1961</strong>, subject
                to the Trust&apos;s registration and approvals with the Income Tax
                Department. After we verify your transfer, we issue an official
                donation receipt within{" "}
                <strong>{config.receiptSlaDays} working days</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream border-b border-orange/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-bold text-green mb-8">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div key={step.n} className="text-center sm:text-left">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange text-white font-bold text-sm mb-3">
                  {step.n}
                </span>
                <h3 className="font-semibold text-green mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <AnimateOnScroll>
            <div>
              <h2 className="text-2xl font-bold text-green mb-2 text-center">
                Donate via Bank Transfer
              </h2>
              <p className="text-center text-gray-500 text-sm mb-6">
                Use these details for NEFT / IMPS / RTGS. Keep your UTR ready for
                the confirmation form below.
              </p>
              <div className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                {[
                  ["Account Name", config.accountName],
                  ["Account Number", config.accountNumber],
                  ["IFSC Code", config.ifsc],
                  ["Bank Name", config.bankName],
                  ["Branch", config.branch],
                  ...(config.upiId ? [["UPI ID", config.upiId] as const] : []),
                ].map(([label, value], i) => (
                  <div
                    key={label}
                    className={`flex flex-col sm:flex-row px-5 py-4 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <span className="font-semibold text-green sm:w-40 shrink-0 text-sm">
                      {label}
                    </span>
                    <span className="text-gray-700 mt-1 sm:mt-0 font-mono text-sm select-all">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {hasRegistrationDetails && (
                <div className="mt-4 rounded-xl border border-green/15 bg-green-light/60 px-5 py-4 text-sm text-gray-700 space-y-1">
                  <p className="font-semibold text-green mb-2">
                    Trust registration details
                  </p>
                  {config.pan && <p>PAN: {config.pan}</p>}
                  {config.registration12A && (
                    <p>12A / 12AB Registration: {config.registration12A}</p>
                  )}
                  {config.approval80G && (
                    <p>80G Approval / URN: {config.approval80G}</p>
                  )}
                </div>
              )}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={80}>
            <div id="confirm" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-green mb-2 text-center">
                Confirm your donation
              </h2>
              <p className="text-center text-gray-500 text-sm mb-8">
                Already transferred? Tell us the details so we can verify the
                payment and issue your 80G donation receipt.
              </p>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 sm:p-8">
                <DonationConfirmForm
                  config={{
                    email: config.email,
                    whatsappNumber: config.whatsappNumber,
                    receiptSlaDays: config.receiptSlaDays,
                  }}
                />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <div className="rounded-xl border border-orange/15 bg-cream p-6 sm:p-8">
              <h3 className="font-bold text-green mb-3">
                What you receive
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Official donation receipt on trust letterhead (PDF by email)",
                  "Unique receipt number for your records",
                  "Amount, date, mode of payment, and UTR reference",
                  "Section 80G eligibility statement for tax filing",
                  `Issued within ${config.receiptSlaDays} working days after bank verification`,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-orange shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                Note: Cash donations above ₹2,000 are not eligible for deduction
                under Section 80G. Please use bank transfer, UPI, or cheque.
                Deduction is typically available under the old tax regime, as
                per current Income Tax rules.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={160}>
            <div className="text-center text-sm text-gray-500 space-y-2">
              <p>
                Questions about donating or receipts?{" "}
                <a
                  href={`mailto:${config.email}`}
                  className="text-orange hover:underline"
                >
                  {config.email}
                </a>
              </p>
              <p>
                Call{" "}
                <a href="tel:+919439725460" className="text-orange hover:underline">
                  +91 9439725460
                </a>
                {" / "}
                <a href="tel:+919178256179" className="text-orange hover:underline">
                  +91 9178256179
                </a>
                {" · "}
                <Link href="/contact" className="text-orange hover:underline">
                  Contact page
                </Link>
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
