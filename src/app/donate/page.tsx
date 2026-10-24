import type { Metadata } from "next";
import Link from "next/link";
import DonationQrCode from "@/components/DonationQrCode";
import ReceiptClaimForm from "@/components/ReceiptClaimForm";
import DonationGoogleForm from "@/components/DonationGoogleForm";
import FaqSection from "@/components/FaqSection";
import ActiveCampaignBanner from "@/components/ActiveCampaignBanner";
import { getDonationConfig } from "@/lib/donation";

export const metadata: Metadata = {
  title: "Donate | Tax Benefits under Section 80G",
  description:
    "Donate to Shri Prasanna Pattnaik Memorial Trust via UPI or direct bank transfer. Eligible donations receive an official tax deduction receipt under Section 80G of the Income Tax Act.",
};

const BANK_ROWS = [
  { label: "Beneficiary Name", value: "Shri Prasanna Pattnaik Memorial Trust" },
  { label: "Bank Name", value: "UCO Bank" },
  { label: "Account Number", value: "09230210004593", canCopy: true },
  { label: "IFSC Code", value: "UCBA0000923", canCopy: true },
  { label: "Branch", value: "Saheed Nagar, Bhubaneswar, Odisha" },
  { label: "Merchant TID", value: "82380414 (HDFC SmartHub Vyapar)" },
  { label: "Official UPI ID", value: "shriprasannapattnaik.82380414@hdfcbank", canCopy: true },
];

const DONATE_FAQS = [
  {
    question: "Is my donation to Shri Prasanna Pattnaik Memorial Trust tax-deductible?",
    answer:
      "Yes. Community contributions and donations to Shri Prasanna Pattnaik Memorial Trust (Trust PAN: ABNTS3218C, Section 80G Registration URN: ABNTS3218CE20261) are eligible for a 50% tax deduction under Section 80G of the Income Tax Act. We provide official signed receipts after payment verification.",
  },
  {
    question: "How do I claim my Section 80G tax receipt after donating?",
    answer:
      "After making your payment via UPI or direct bank transfer, fill out the simple receipt claim form on this page or WhatsApp your transfer screenshot/UTR along with your PAN and full name to +91 99723 66933. Your official receipt will be issued within 7 working days.",
  },
  {
    question: "What payment methods are accepted for donations?",
    answer:
      "We accept instant UPI transfers (Google Pay, PhonePe, Paytm, BHIM to shriprasannapattnaik.82380414@hdfcbank), UPI QR code scanning via our official HDFC SmartHub terminal, and Direct Bank Transfers (NEFT, RTGS, IMPS) to our official trust account at UCO Bank, Saheed Nagar, Bhubaneswar.",
  },
  {
    question: "Why is a PAN card required for claiming Section 80G benefits?",
    answer:
      "Per the regulations issued by the Central Board of Direct Taxes (CBDT), non-profits must report donor details (including PAN and full address) in annual Form 10BD filings so that the tax deduction pre-fills automatically into your Income Tax returns (Form 10BE certificate).",
  },
  {
    question: "Can I donate in cash?",
    answer:
      "As per Section 80G statutory guidelines, cash donations exceeding ₹2,000 are not eligible for tax deductions. To guarantee 80G eligibility, please contribute digitally via UPI or direct bank transfer.",
  },
  {
    question: "How are the donated funds utilized?",
    answer:
      "100% of community contributions directly support our core initiatives across Odisha: student educational scholarships, school bags and stationery kits, healthcare outreach, elderly medicine assistance, and rural community welfare.",
  },
];

export default function DonatePage() {
  const config = getDonationConfig();
  const whatsappNumber = config.whatsappNumber || "919972366933";

  return (
    <>
      {/* Above the fold: Centered, aesthetically balanced hero header */}
      <header className="page-head shell compact-donate-head">
        <div className="eyebrow donate-eyebrow">
          <span>Support</span>
          <span className="eyebrow-sep">·</span>
          <span>Section 80G Tax Exemption</span>
        </div>
        <h1 className="single-line-title">
          A meaningful gift. <em>A clear path.</em>
        </h1>
        <p className="donate-intro-sub">
          Give with confidence. 100% of community contributions directly support
          educational scholarships, school kits, healthcare, and rural initiatives across Odisha.
        </p>
      </header>

      {/* Above the fold: Centered Hero QR Donation Section */}
      <section className="shell donate-qr-hero-section" aria-label="Instant UPI Donation">
        <DonationQrCode
          upiId={config.upiId}
          payeeName={config.accountName}
          accountNumber={config.accountNumber}
          ifsc={config.ifsc}
          bankName={config.bankName}
          branch={config.branch}
          merchantTid={config.merchantTid}
          officialQrImage={config.qrImagePath}
          whatsappNumber={whatsappNumber}
          defaultAmount={1000}
          heroMode={true}
        />
      </section>

      {/* Active Campaign Showcase (Syncs with Hero QR Code on click) */}
      <ActiveCampaignBanner inPageQrSync={true} />

      {/* Below the fold: Bank Transfer (NEFT/RTGS/IMPS) */}
      <section className="shell bank-transfer-section" id="bank-transfer">
        <div className="section-head">
          <div>
            <div className="eyebrow">Direct Bank Transfer</div>
            <h2>
              NEFT, RTGS &amp;
              <br />
              <em>Net Banking.</em>
            </h2>
          </div>
          <div className="section-aside">
            <p>
              For larger contributions or corporate transfers, please transfer
              directly to our official trust bank account at UCO Bank.
            </p>
            <a href="#receipt" className="under-link">
              Claim 80G tax receipt below <span>↓</span>
            </a>
          </div>
        </div>

        <div className="bank-details-grid">
          <div className="bank-card">
            <div className="bank-card-header">
              <span className="badge-verified">Official Account</span>
              <h3>Bank Account Details</h3>
            </div>
            <div className="bank-table-rows">
              {BANK_ROWS.map((row) => (
                <div className="bank-detail-item" key={row.label}>
                  <span className="detail-name">{row.label}</span>
                  <div className="detail-value-wrap">
                    <strong className="detail-value">{row.value}</strong>
                  </div>
                </div>
              ))}
              {config.pan && (
                <div className="bank-detail-item">
                  <span className="detail-name">Trust PAN</span>
                  <strong className="detail-value">{config.pan}</strong>
                </div>
              )}
              {config.approval80G && (
                <div className="bank-detail-item">
                  <span className="detail-name">Section 80G Registration</span>
                  <strong className="detail-value">{config.approval80G}</strong>
                </div>
              )}
            </div>
          </div>

          <div className="bank-standee-card">
            <div className="bank-card-header">
              <span className="badge-verified">HDFC SmartHub</span>
              <h3>Official Merchant Standee</h3>
            </div>
            <div className="standee-img-wrap">
              <img
                src={config.qrImagePath || "/images/trust-qr-code.jpg"}
                alt="Official HDFC Bank SmartHub Standee for Shri Prasanna Pattnaik Memorial Trust"
                className="standee-img"
              />
            </div>
            <p className="standee-caption">
              Registered Terminal ID: <strong>{config.merchantTid || "82380414"}</strong>
              <br />
              Accepts GPay, PhonePe, Paytm, BHIM, RuPay, VISA &amp; Mastercard.
            </p>
          </div>
        </div>
      </section>

      {/* Simplified: Section 80G Tax Exemption & Direct Form */}
      <section className="section shell tax-receipt-section" id="receipt">
        <div className="section-head">
          <div>
            <div className="eyebrow">Tax Exemption · Section 80G</div>
            <h2>
              Claim your
              <br />
              <em>80G tax receipt.</em>
            </h2>
          </div>
          <div className="section-aside">
            <p>
              Donations to Shri Prasanna Pattnaik Memorial Trust are eligible for
              a <strong>50% tax deduction under Section 80G</strong>. Enter your details
              below to receive your signed receipt within {config.receiptSlaDays} working days.
            </p>
            <Link href="/tax-benefits-80g" className="under-link">
              Read full Section 80G &amp; Form 10BE guide <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Direct In-Page Receipt Form */}
        <ReceiptClaimForm receiptSlaDays={config.receiptSlaDays} />

        {/* Optional Google Form confirmation */}
        {config.googleFormUrl && (
          <div id="confirm" style={{ marginTop: 40 }}>
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>Or Submit via Online Form</h3>
            <DonationGoogleForm
              formUrl={config.googleFormUrl}
              receiptSlaDays={config.receiptSlaDays}
            />
          </div>
        )}

        <div className="tax-compliance-note">
          <strong>Statutory Compliance Note:</strong> Cash donations above ₹2,000
          are not eligible for deduction under Section 80G. Please use digital modes
          (UPI, IMPS, NEFT, or Account Payee Cheque). Deductions are available
          under the eligible tax regime as per prevailing Income Tax laws.
          <br />
          For any questions, reach our trust office at{" "}
          <a href={`tel:+${whatsappNumber}`}>+91 99723 66933</a> or{" "}
          <a href={`mailto:${config.email}`}>{config.email}</a>.
        </div>
      </section>

      {/* Frequently Asked Questions with Schema.org FAQPage JSON-LD */}
      <FaqSection
        id="donation-faqs"
        eyebrow="Questions & Clarity"
        title={
          <>
            Donations &amp;
            <br />
            <em>Tax Benefits.</em>
          </>
        }
        description="Everything you need to know about Section 80G eligibility, receipts, and how community funds create impact across Odisha."
        items={DONATE_FAQS}
      />
    </>
  );
}
