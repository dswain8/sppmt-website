import type { Metadata } from "next";
import Link from "next/link";
import DonationQrCode from "@/components/DonationQrCode";
import ReceiptClaimForm from "@/components/ReceiptClaimForm";
import FaqSection from "@/components/FaqSection";
import { DONATIONS_ENABLED, getDonationConfig } from "@/lib/donation";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Section 80G Tax Exemption Donations in Odisha | Form 10BE Guide",
  description:
    "Claim a 50% tax deduction under Section 80G of the Income Tax Act by donating to Shri Prasanna Pattnaik Memorial Trust (SPPMT) in Bhubaneswar, Odisha. Instant UPI QR donations and Form 10BE compliance.",
  keywords: [
    "Section 80G donation Odisha",
    "80G tax saving charitable trust Bhubaneswar",
    "donate via UPI 80G tax receipt",
    "Form 10BE donation certificate NGO",
    "Shri Prasanna Pattnaik Memorial Trust 80G",
    "tax deductible donation education India",
    "SPPMT 80G receipt",
  ],
  alternates: {
    canonical: `${SITE_URL}/tax-benefits-80g`,
  },
};

const TAX_EXAMPLES = [
  {
    donated: "₹1,000",
    deduction: "₹500",
    impact: "1 Complete Rural School Bag & Study Kit",
    link: "/donate?amount=1000&campaign=school-kit",
  },
  {
    donated: "₹2,500",
    deduction: "₹1,250",
    impact: "Patient Care Assistance & Rural Health Camp",
    link: "/donate?amount=2500&campaign=healthcare-outreach",
  },
  {
    donated: "₹5,000",
    deduction: "₹2,500",
    impact: "Co-Sponsor a Merit & Need Scholar in Odisha",
    link: "/donate?amount=5000&campaign=scholar-support",
  },
  {
    donated: "₹10,000",
    deduction: "₹5,000",
    impact: "Full Annual Scholarship or 10 Student School Kits",
    link: "/donate?amount=10000&campaign=annual-scholar",
  },
  {
    donated: "₹25,000",
    deduction: "₹12,500",
    impact: "Sponsor 5 Merit Scholars or a Rural School Library",
    link: "/donate?amount=25000&campaign=annual-scholar",
  },
];

const TAX_FAQS = [
  {
    question: "How much tax deduction can I claim under Section 80G when donating to SPPMT?",
    answer:
      "Eligible donations to the Shri Prasanna Pattnaik Memorial Trust (Trust PAN: ABNTS3218C, Section 80G Approval URN: ABNTS3218CF20261, 12A URN: ABNTS3218CE20261) qualify for a 50% deduction from your gross total taxable income under Section 80G of the Indian Income Tax Act, 1961.",
  },
  {
    question: "Do UPI payments (Google Pay, PhonePe, Paytm) qualify for Section 80G tax exemption?",
    answer:
      "Yes. All digital payment modes—including UPI QR code scans, UPI ID transfers, IMPS, NEFT, RTGS, and account payee cheques—are 100% eligible for Section 80G tax deductions. Only cash donations exceeding ₹2,000 are disallowed under the Income Tax Act.",
  },
  {
    question: "What is Form 10BD and Form 10BE for charitable donations?",
    answer:
      "Under CBDT regulations (Rule 18AB), registered charitable trusts report all donor contributions alongside their PAN and address to the Income Tax Department via Form 10BD. This generates an official Form 10BE certificate and ensures your donation deduction reflects in your Annual Information Statement (AIS).",
  },
  {
    question: "How quickly will I receive my official 80G receipt from the trust?",
    answer:
      "Once you complete your UPI or bank transfer and submit your 12-digit UTR / UPI reference number and PAN in the form below, our finance team verifies the bank credit and emails your signed Section 80G receipt within 7 working days.",
  },
  {
    question: "Which tax regime allows Section 80G deductions?",
    answer:
      "Under current Indian Income Tax provisions, Chapter VI-A deductions—including Section 80G deductions for charitable donations—are claimable by taxpayers opting for the Old Tax Regime when filing their ITR.",
  },
];

export default function TaxBenefits80GPage() {
  const config = getDonationConfig();

  return (
    <>
      <header className="page-head shell compact-donate-head">
        <div className="eyebrow donate-eyebrow">
          <span>Section 80G Guide</span>
          <span className="eyebrow-sep">·</span>
          <span>Income Tax Act, 1961</span>
        </div>
        <h1 className="single-line-title">
          Save tax. <em>Educate a child in Odisha.</em>
        </h1>
        <p className="donate-intro-sub">
          Every digital contribution to {SITE_NAME} directly funds rural school
          kits, student scholarships, and patient care across Odisha—while
          qualifying for a <strong>50% tax deduction under Section 80G</strong>.
        </p>
      </header>

      {/* Section 1: Illustrative Tax Deduction Table */}
      <section className="shell" style={{ paddingBottom: 56 }}>
        <div className="tax-guide-card">
          <div className="tax-guide-header">
            <div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <span className="badge-80g">Section 80G · 50% Tax Deduction</span>
                <span className="badge-verified">Trust PAN: ABNTS3218C</span>
                <span className="badge-verified">80G URN: ABNTS3218CF20261</span>
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)", marginTop: 10 }}>
                How Your Contribution Translates into Impact &amp; Tax Relief
              </h2>
            </div>
            <p style={{ maxWidth: 420, fontSize: 13, color: "var(--muted)", margin: 0 }}>
              Click any tier below to open the pre-filled UPI QR code for that exact amount.
            </p>
          </div>

          <div className="tax-table-wrap">
            <table className="tax-breakdown-table">
              <thead>
                <tr>
                  <th>Contribution Amount</th>
                  <th>Qualifying 80G Deduction (50%)</th>
                  <th>Grassroots Impact in Odisha</th>
                  <th>Quick Action</th>
                </tr>
              </thead>
              <tbody>
                {TAX_EXAMPLES.map((row) => (
                  <tr key={row.donated}>
                    <td>
                      <strong style={{ fontSize: 16, color: "var(--forest)" }}>
                        {row.donated}
                      </strong>
                    </td>
                    <td>
                      <span className="deduction-pill">{row.deduction} Deductible</span>
                    </td>
                    <td>{row.impact}</td>
                    <td>
                      {DONATIONS_ENABLED ? (
                        <Link href={`${row.link}#donation-hero`} className="text-link">
                          Select &amp; Scan UPI ↗
                        </Link>
                      ) : (
                        <Link href="/contact" className="text-link">
                          Inquire with Trust ↗
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2: 3 Compliance Rules for Donors */}
      <section className="shell" style={{ paddingBottom: 56 }}>
        <div className="tax-procedure-steps" style={{ marginTop: 0, marginBottom: 0 }}>
          <div className="proc-step-item">
            <span className="step-num">01</span>
            <h4>Use UPI or Bank Transfer Only</h4>
            <p>
              Per Section 80G(5D), cash donations above ₹2,000 do not qualify for tax exemption. Always pay via UPI QR, UPI ID, IMPS, NEFT, or RTGS.
            </p>
          </div>
          <div className="proc-step-item">
            <span className="step-num">02</span>
            <h4>Provide Accurate PAN &amp; Address</h4>
            <p>
              Your 10-character PAN and postal address are mandatory under Income Tax Rule 18AB so we can report your contribution in Form 10BD.
            </p>
          </div>
          <div className="proc-step-item">
            <span className="step-num">03</span>
            <h4>Keep Your 12-Digit UTR / UPI Ref</h4>
            <p>
              After scanning the QR code, copy the 12-digit UPI reference number from Google Pay / PhonePe / Paytm and enter it in our receipt form below.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Direct UPI QR Code (Suppressed while DONATIONS_ENABLED is false) */}
      {DONATIONS_ENABLED ? (
        <section className="shell" id="donate-upi" style={{ paddingBottom: 64 }}>
          <DonationQrCode
            upiId={config.upiId}
            payeeName={config.accountName}
            accountNumber={config.accountNumber}
            ifsc={config.ifsc}
            bankName={config.bankName}
            branch={config.branch}
            merchantTid={config.merchantTid}
            officialQrImage={config.qrImagePath}
            whatsappNumber={config.whatsappNumber}
            defaultAmount={5000}
          />
        </section>
      ) : (
        <section className="shell" id="donate-upi" style={{ paddingBottom: 48 }}>
          <div
            style={{
              background: "#f2f5ed",
              border: "1px solid #dbe2d4",
              padding: "32px",
              borderRadius: 4,
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: 22, color: "var(--forest)", marginBottom: 8 }}>
              Online UPI Donations Currently Under Maintenance
            </h3>
            <p
              style={{
                color: "#455d50",
                maxWidth: 640,
                margin: "0 auto 16px",
                lineHeight: 1.6,
              }}
            >
              Our digital UPI payment gateway is currently undergoing integration
              updates. For direct bank transfers (NEFT / RTGS) to our registered
              UCO Bank account or queries regarding Section 80G tax receipts, please
              reach out directly to our trust office.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Link
                href="/contact"
                className="btn btn-dark"
                style={{ minHeight: 44, padding: "10px 20px" }}
              >
                Contact Trust Office <span>↗</span>
              </Link>
              <a href="tel:+919972366933" className="text-link">
                Call +91 99723 66933 ↗
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Section 4: Direct 80G Receipt Claim Form */}
      <section className="section shell tax-receipt-section" id="receipt">
        <div className="section-head">
          <div>
            <div className="eyebrow">Instant Verification Request</div>
            <h2>
              Submit UTR for
              <br />
              <em>Form 10BE &amp; 80G Receipt.</em>
            </h2>
          </div>
          <div className="section-aside">
            <p>
              Already completed your UPI or NEFT transfer? Enter your PAN and
              12-digit UTR below to receive your signed Section 80G receipt within{" "}
              {config.receiptSlaDays} working days.
            </p>
          </div>
        </div>

        <ReceiptClaimForm receiptSlaDays={config.receiptSlaDays} initialAmount={5000} />
      </section>

      {/* Section 5: Structured FAQs */}
      <FaqSection
        id="tax-80g-faqs"
        eyebrow="Tax Compliance & Rules"
        title={
          <>
            Section 80G
            <br />
            <em>Questions Answered.</em>
          </>
        }
        description="Clear answers on Income Tax deductions, digital UPI eligibility, and Form 10BE certificates."
        items={TAX_FAQS}
      />
    </>
  );
}
