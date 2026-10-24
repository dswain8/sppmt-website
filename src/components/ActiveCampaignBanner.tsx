"use client";

import Link from "next/link";
import { ACTIVE_CAMPAIGN, type CampaignInitiative } from "@/lib/campaign";

interface ActiveCampaignBannerProps {
  /** If true, clicking a campaign card dispatches an in-page event to update the QR code and scroll to it */
  inPageQrSync?: boolean;
  compact?: boolean;
  className?: string;
}

export default function ActiveCampaignBanner({
  inPageQrSync = false,
  compact = false,
  className = "",
}: ActiveCampaignBannerProps) {
  const handleSelectInitiative = (item: CampaignInitiative) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("sppmt:select-donation-amount", {
          detail: { amount: item.unitCost, campaign: item.campaignSlug },
        })
      );
    }
  };

  const whatsappShareText = encodeURIComponent(
    `Namaskar! Shri Prasanna Pattnaik Memorial Trust (SPPMT) is running "${ACTIVE_CAMPAIGN.title}" — supporting rural students in Odisha with school kits (₹1,000) and Merit & Need Scholarships (₹5,000). 100% of contributions go directly to grassroots work and qualify for a 50% Section 80G tax deduction.\n\nSupport directly via UPI here: https://sppmt.org/donate`
  );
  const whatsappShareUrl = `https://wa.me/?text=${whatsappShareText}`;

  return (
    <section
      className={`active-campaign-section shell ${compact ? "compact-campaign" : ""} ${className}`}
      aria-labelledby="active-campaign-heading"
    >
      <div className="campaign-box">
        <div className="campaign-top-bar">
          <div className="campaign-live-pill">
            <span className="campaign-live-dot" />
            <span>{ACTIVE_CAMPAIGN.eyebrow}</span>
          </div>
          <span className="campaign-tax-badge">✓ {ACTIVE_CAMPAIGN.taxNote}</span>
        </div>

        <div className="campaign-header-grid">
          <div>
            <h2 id="active-campaign-heading" className="campaign-main-title">
              Mission Vidya &amp; Seva:{" "}
              <em>Sponsor the Next Cohort &amp; Rural Kits.</em>
            </h2>
            <p className="campaign-lead">{ACTIVE_CAMPAIGN.subtitle}</p>
          </div>
          <div className="campaign-share-aside">
            <div className="campaign-proof-stat">
              <strong>6 Merit Scholars + Rural Schools</strong>
              <span>Documented in Cohort 1 · Now funding Cohort 2</span>
            </div>
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-campaign"
            >
              <span>Share Drive on WhatsApp</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="campaign-initiatives-grid">
          {ACTIVE_CAMPAIGN.initiatives.map((item) => (
            <article key={item.id} className="campaign-initiative-card">
              <div className="initiative-card-top">
                <span className="initiative-category">{item.category}</span>
                <span className="initiative-unit-pill">{item.unitLabel}</span>
              </div>
              <h3 className="initiative-title">{item.title}</h3>
              <p className="initiative-desc">{item.goalDescription}</p>
              <div className="initiative-proof-line">
                <span className="proof-check" aria-hidden="true">✓</span>
                <span>{item.documentedProof}</span>
              </div>
              <div className="initiative-action">
                {inPageQrSync ? (
                  <button
                    type="button"
                    className="btn btn-dark initiative-cta-btn"
                    onClick={() => handleSelectInitiative(item)}
                  >
                    <span>{item.ctaLabel}</span>
                    <span aria-hidden="true">↑</span>
                  </button>
                ) : (
                  <Link
                    href={`/donate?amount=${item.unitCost}&campaign=${item.campaignSlug}#donation-hero`}
                    className="btn btn-dark initiative-cta-btn"
                  >
                    <span>{item.ctaLabel}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
