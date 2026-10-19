import type { Metadata } from "next";
import Link from "next/link";
import DonationGoogleForm from "@/components/DonationGoogleForm";
import { getDonationConfig } from "@/lib/donation";

export const metadata: Metadata = {
  title: "Donate | Tax Benefits under Section 80G",
  description:
    "Donate to Shri Prasanna Pattnaik Memorial Trust. Eligible donations receive an official receipt for tax deduction under Section 80G of the Income Tax Act.",
};

const STEPS = [
  {
    n: "01",
    title: "Make a bank transfer",
    body: "Send your contribution to our UCO Bank account using NEFT, IMPS, or RTGS (non-cash modes preferred for tax benefits).",
  },
  {
    n: "02",
    title: "Share the payment reference",
    body: "Share your name, PAN, amount, and UTR so we can verify the payment and prepare your receipt.",
  },
  {
    n: "03",
    title: "Receive your receipt",
    body: "After verification, we email your official donation receipt for claiming deduction under Section 80G.",
  },
];

export default function DonatePage() {
  const config = getDonationConfig();
  const rows = [
    ["Account name", config.accountName],
    ["Account number", config.accountNumber],
    ["IFSC", config.ifsc],
    ["Bank", config.bankName],
    ["Branch", config.branch],
    ...(config.upiId ? [["UPI", config.upiId] as const] : []),
  ];

  return (
    <>
      <header className="page-head shell">
        <div className="eyebrow with-line">Support</div>
        <h1>
          A meaningful gift.
          <br />
          <em>A clear path.</em>
        </h1>
        <p>
          Support education, healthcare, livelihoods and community initiatives
          in Odisha through the trust’s bank-transfer process.
        </p>
      </header>
      <section className="shell donation-layout">
        <div className="donation-main">
          <div className="eyebrow">How it works</div>
          <h2>Give with confidence.</h2>
          <p>
            SPPMT accepts contributions through bank transfer and verifies the
            payment before issuing an official donation receipt. Eligible
            donations qualify for tax deduction under Section 80G, subject to
            the Trust’s registration and approvals.
          </p>
          <div className="donation-steps">
            {STEPS.map((step) => (
              <div key={step.n}>
                <span>{step.n}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="fineprint">
            Note: Cash donations above ₹2,000 are not eligible for deduction
            under Section 80G. Please use bank transfer, UPI, or cheque.
            Deduction is typically available under the old tax regime, as per
            current Income Tax rules. Receipts are issued within{" "}
            {config.receiptSlaDays} working days after bank verification.
          </p>
          <div id="confirm" style={{ marginTop: 36 }}>
            <h2 style={{ fontSize: 40 }}>Confirm your donation</h2>
            <p>
              Already transferred? Tell us the details so we can verify the
              payment and issue your 80G donation receipt.
            </p>
            <DonationGoogleForm
              formUrl={config.googleFormUrl}
              receiptSlaDays={config.receiptSlaDays}
            />
          </div>
        </div>
        <aside className="bank-panel">
          <div className="eyebrow">Official account</div>
          <h3>Bank transfer</h3>
          {rows.map(([label, value]) => (
            <div className="bank-row" key={label}>
              <small>{label}</small>
              <strong>{value}</strong>
            </div>
          ))}
          {config.pan ? (
            <div className="bank-row">
              <small>PAN</small>
              <strong>{config.pan}</strong>
            </div>
          ) : null}
          {config.registration12A ? (
            <div className="bank-row">
              <small>12A / 12AB</small>
              <strong>{config.registration12A}</strong>
            </div>
          ) : null}
          {config.approval80G ? (
            <div className="bank-row">
              <small>80G approval</small>
              <strong>{config.approval80G}</strong>
            </div>
          ) : null}
          <div className="tax-note">
            <strong>What you receive</strong>
            <p>
              Official donation receipt on trust letterhead, a unique receipt
              number, amount, date, mode of payment, UTR reference, and a
              Section 80G eligibility statement.
            </p>
          </div>
          <p className="fineprint">
            Questions?{" "}
            <a href={`mailto:${config.email}`}>{config.email}</a>
            {" · "}
            <a href="tel:+919439725460">+91 9439725460</a>
            {" / "}
            <a href="tel:+919178256179">+91 9178256179</a>
            {" · "}
            <Link href="/contact">Contact</Link>
          </p>
        </aside>
      </section>
    </>
  );
}
