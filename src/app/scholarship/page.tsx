import type { Metadata } from "next";
import Link from "next/link";
import ScholarshipAnnouncement from "@/components/ScholarshipAnnouncement";
import DonationQrCode from "@/components/DonationQrCode";
import { DONATIONS_ENABLED, getDonationConfig } from "@/lib/donation";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Scholarship Program | Cohort 1 Recipients",
  description:
    "Official announcement of the inaugural Shri Prasanna Pattnaik Merit Scholarship recipients. Supporting deserving school and college students across Odisha.",
  alternates: {
    canonical: `${SITE_URL}/scholarship`,
  },
  openGraph: {
    title: `Merit Scholarship Cohort 1 | ${SITE_NAME}`,
    description:
      "Celebrating our first batch of scholarship recipients across Odisha. Learn about our scholars and help sponsor the next cohort.",
    url: `${SITE_URL}/scholarship`,
  },
};

export default function ScholarshipPage() {
  const donationConfig = getDonationConfig();
  const shareText = encodeURIComponent(
    "Shri Prasanna Pattnaik Memorial Trust (SPPMT) has announced its inaugural cohort of merit scholarship recipients in Odisha! Learn more and support a student: https://sppmt.org/scholarship"
  );
  const shareWhatsAppUrl = `https://api.whatsapp.com/send?text=${shareText}`;

  return (
    <>
      <header className="page-head shell">
        <div className="eyebrow with-line">Education & Impact</div>
        <h1>
          A future in reach.
          <br />
          <em>Cohort 1 Announced.</em>
        </h1>
        <p>
          Honouring Shri Prasanna Pattnaik’s legacy by removing financial
          barriers for promising students across rural Odisha. Meet our first
          cohort of scholars.
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          <a
            href={shareWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
            style={{ minHeight: 46, padding: "10px 18px", fontSize: 12 }}
          >
            <span>Share on WhatsApp</span>
            <span>↗</span>
          </a>
          {DONATIONS_ENABLED ? (
            <a href="#sponsor" className="text-link">
              Sponsor a Student (80G Tax Exemption) ↗
            </a>
          ) : (
            <Link href="/contact" className="text-link">
              Partner or Sponsor a Scholar ↗
            </Link>
          )}
        </div>
      </header>

      {/* Recipient Announcement Section */}
      <ScholarshipAnnouncement showDonationCta={false} />

      {/* Sponsor a Scholar Section */}
      {DONATIONS_ENABLED ? (
        <section className="shell" id="sponsor" style={{ padding: "40px 0 70px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", marginBottom: 32 }}>
            <div className="eyebrow">Sponsorship Flywheel</div>
            <h2 style={{ fontSize: "clamp(30px, 3.2vw, 44px)", margin: "8px 0 12px" }}>
              Sponsor a scholar for Cohort 2.
            </h2>
            <p style={{ color: "#455d50", lineHeight: 1.6 }}>
              100% of your contribution is directed toward student tuition, books,
              and learning equipment. Every donation qualifies for tax exemption
              under Section 80G.
            </p>
          </div>

          <DonationQrCode
            upiId={donationConfig.upiId || "sppmt@uco"}
            payeeName={donationConfig.accountName}
            accountNumber={donationConfig.accountNumber}
            ifsc={donationConfig.ifsc}
            bankName={donationConfig.bankName}
            branch={donationConfig.branch}
            whatsappNumber={donationConfig.whatsappNumber}
            defaultAmount={2500}
          />
        </section>
      ) : (
        <section className="shell" id="sponsor" style={{ padding: "40px 0 50px" }}>
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              textAlign: "center",
              background: "#f2f5ed",
              padding: "36px 28px",
              borderRadius: 4,
              border: "1px solid #dbe2d4",
            }}
          >
            <div className="eyebrow" style={{ color: "var(--forest)" }}>Cohort 2 Sponsorship</div>
            <h2 style={{ fontSize: "clamp(26px, 2.8vw, 36px)", margin: "10px 0 12px" }}>
              Interested in sponsoring a scholar?
            </h2>
            <p style={{ color: "#455d50", lineHeight: 1.6, maxWidth: 600, margin: "0 auto 20px" }}>
              We welcome individuals and organizations to partner with us for our upcoming scholarship cycles.
              Please reach out to our trust office directly to learn about direct student sponsorship and program support.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn btn-dark" style={{ minHeight: 44, padding: "10px 20px" }}>
                Contact Trust Office <span>↗</span>
              </Link>
              <a href="tel:+919972366933" className="text-link">
                Call +91 99723 66933 ↗
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Next Cycle Notice */}
      <section className="section shell" style={{ borderTop: "1px solid #dedfd5", paddingTop: 48, paddingBottom: 64 }}>
        <div className="section-head">
          <div>
            <div className="eyebrow">Future Applications</div>
            <h2>
              Looking ahead to
              <br />
              <em>Cohort 2.</em>
            </h2>
          </div>
          <div className="section-aside">
            <p>
              Applications for the next scholarship cycle will open ahead of
              the upcoming academic term. Eligible school, college, and
              vocational students from Odisha can download the application forms
              and criteria guidelines below.
            </p>
            <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="/documents/scholarship-english.docx"
                download
                className="text-link"
              >
                English Form (DOCX) ↗
              </a>
              <a
                href="/documents/scholarship-odia.docx"
                download
                className="text-link"
              >
                Odia Form (DOCX) ↗
              </a>
              <Link href="/contact" className="under-link">
                General Inquiries <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
