"use client";

import { useEffect, useState, useId } from "react";
import QRCode from "qrcode";
import {
  IMPACT_TIERS,
  calculate80GDeduction,
  getImpactForAmount,
} from "@/lib/campaign";

interface DonationQrCodeProps {
  upiId?: string;
  payeeName?: string;
  accountNumber?: string;
  ifsc?: string;
  bankName?: string;
  branch?: string;
  merchantTid?: string;
  officialQrImage?: string;
  whatsappNumber?: string;
  defaultAmount?: number;
  showPresets?: boolean;
  compactMode?: boolean;
  heroMode?: boolean;
  className?: string;
}

export default function DonationQrCode({
  upiId = process.env.NEXT_PUBLIC_DONATION_UPI_ID || "shriprasannapattnaik.82380414@hdfcbank",
  payeeName = "Shri Prasanna Pattnaik Memorial Trust",
  accountNumber = "09230210004593",
  ifsc = "UCBA0000923",
  bankName = "UCO Bank",
  branch = "Saheed Nagar, Bhubaneswar",
  merchantTid = "82380414",
  officialQrImage = "/images/trust-qr-code.jpg",
  whatsappNumber = "919972366933",
  defaultAmount = 1000,
  showPresets = true,
  compactMode = false,
  heroMode = false,
  className = "",
}: DonationQrCodeProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(defaultAmount);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"smart" | "standee">("smart");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeCampaignLabel, setActiveCampaignLabel] = useState<string | null>(null);
  const [showSaveTip, setShowSaveTip] = useState<boolean>(false);
  const customInputId = useId();

  const activeAmount = selectedAmount !== null ? selectedAmount : (Number(customAmount) || 0);
  const impactInfo = getImpactForAmount(activeAmount);
  const taxInfo = calculate80GDeduction(activeAmount);

  // Read URL parameters (?amount=1000&campaign=school-kit) & listen for campaign selection events
  useEffect(() => {
    const applyAmount = (amt: number, campaignSlug?: string | null, shouldScroll?: boolean) => {
      if (amt > 0) {
        const isPreset = IMPACT_TIERS.some((t) => t.amount === amt);
        if (isPreset) {
          setSelectedAmount(amt);
          setCustomAmount("");
        } else {
          setSelectedAmount(null);
          setCustomAmount(String(amt));
        }
      }
      if (campaignSlug) {
        const matchedTier = IMPACT_TIERS.find((t) => t.campaignSlug === campaignSlug);
        setActiveCampaignLabel(matchedTier ? matchedTier.title : campaignSlug.replace(/-/g, " "));
      }
      if (shouldScroll) {
        const targetEl =
          document.getElementById("donation-hero") || document.getElementById("donation-box");
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlAmt = Number(params.get("amount"));
      const urlCampaign = params.get("campaign");
      if (urlAmt > 0) {
        applyAmount(urlAmt, urlCampaign, false);
      } else if (urlCampaign) {
        const matched = IMPACT_TIERS.find((t) => t.campaignSlug === urlCampaign);
        if (matched) {
          applyAmount(matched.amount, urlCampaign, false);
        }
      }
    }

    const handleSelectEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ amount: number; campaign?: string }>;
      if (customEvent.detail?.amount) {
        applyAmount(customEvent.detail.amount, customEvent.detail.campaign, true);
      }
    };

    window.addEventListener("sppmt:select-donation-amount", handleSelectEvent);
    return () => {
      window.removeEventListener("sppmt:select-donation-amount", handleSelectEvent);
    };
  }, []);

  // Broadcast amount changes so ReceiptClaimForm stays in sync automatically
  useEffect(() => {
    if (typeof window !== "undefined" && activeAmount > 0) {
      window.dispatchEvent(
        new CustomEvent("sppmt:donation-amount-changed", {
          detail: { amount: activeAmount, impactTitle: impactInfo.title },
        })
      );
    }
  }, [activeAmount, impactInfo.title]);

  // Standard NPCI-compliant UPI payment URI for QR code generation
  // Follows NPCI specifications: literal '@' in VPA, %20 for spaces (never '+'), and 2-decimal amount
  const upiUri = (() => {
    const cleanPayee = encodeURIComponent(payeeName);
    const cleanNote = encodeURIComponent(impactInfo.upiNote || "Donation to SPPMT (80G)");
    const parts = [
      `pa=${upiId}`, // Keep literal @ for VPA per NPCI standards
      `pn=${cleanPayee}`,
      `cu=INR`,
      `tn=${cleanNote}`,
    ];
    if (activeAmount > 0) {
      parts.push(`am=${activeAmount.toFixed(2)}`); // Standard 2-decimal format e.g. 1000.00
    }
    return `upi://pay?${parts.join("&")}`;
  })();

  useEffect(() => {
    QRCode.toDataURL(upiUri, {
      width: heroMode ? 360 : 280,
      margin: 2,
      color: {
        dark: "#000000", // Pure black for maximum optical scanner contrast
        light: "#ffffff",
      },
      errorCorrectionLevel: "M",
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error("Error generating QR code:", err));
  }, [upiUri, heroMode]);

  const handleCopy = (text: string, key: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const handleDownloadQr = async () => {
    setShowSaveTip(true);
    const isSmartTab = activeTab === "smart" && qrDataUrl;
    const filename =
      isSmartTab && activeAmount > 0
        ? `SPPMT-UPI-QR-Rs${activeAmount}.png`
        : "SPPMT-Official-UPI-QR.jpg";

    try {
      let blob: Blob | null = null;

      if (isSmartTab) {
        const res = await fetch(qrDataUrl);
        blob = await res.blob();
      } else if (officialQrImage) {
        const res = await fetch(officialQrImage);
        blob = await res.blob();
      }

      if (!blob) return;

      const file = new File([blob], filename, { type: blob.type || "image/png" });

      // iOS Safari and modern mobile browsers support Web Share with files.
      // On iOS, this brings up the native share sheet with "Save Image" (saves directly to Photos).
      if (
        typeof navigator !== "undefined" &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          files: [file],
          title: `SPPMT Donation QR Code (${activeAmount > 0 ? `₹${activeAmount.toLocaleString("en-IN")}` : "UPI"})`,
          text: `Scan & Pay via UPI to Shri Prasanna Pattnaik Memorial Trust`,
        });
        return;
      }

      // Fallback for desktop & browsers without Web Share files: standard download trigger
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") {
        // User cancelled share sheet; silent exit
        return;
      }
      console.warn("QR download fallback:", err);
      // Fallback: open in new tab so user can long-press and tap "Save to Photos"
      const fallbackUrl = isSmartTab ? qrDataUrl : officialQrImage;
      if (fallbackUrl && typeof window !== "undefined") {
        window.open(fallbackUrl, "_blank");
      }
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Namaskar SPPMT, I have made a contribution of ${
      activeAmount > 0 ? `₹${activeAmount.toLocaleString("en-IN")} (${impactInfo.title})` : "a donation"
    } to Shri Prasanna Pattnaik Memorial Trust. Please find my transaction screenshot and details attached for the Section 80G tax receipt.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  // ============================================================
  // HERO MODE: Front, Center, Large focal point for /donate
  // ============================================================
  if (heroMode) {
    return (
      <div className={`donation-hero-box ${className}`} id="donation-hero">
        {/* Trust Badges */}
        <div className="hero-badges-row">
          <span className="badge-80g">50% Tax Deduction · Section 80G</span>
          <span className="badge-verified">✓ HDFC SmartHub Vyapar Verified</span>
          {activeCampaignLabel && (
            <span className="badge-campaign-Selected">
              Campaign: {activeCampaignLabel}
            </span>
          )}
        </div>

        {/* 3-Step Visual Progress Strip */}
        <div className="upi-quick-steps" aria-label="3-step donation process">
          <div className="upi-step-pill">
            <span className="step-num-circle">1</span>
            <span>Pick Impact &amp; Scan UPI QR</span>
          </div>
          <span className="upi-step-arrow" aria-hidden="true">→</span>
          <div className="upi-step-pill">
            <span className="step-num-circle">2</span>
            <span>Enter 12-Digit UTR &amp; PAN Below</span>
          </div>
          <span className="upi-step-arrow" aria-hidden="true">→</span>
          <div className="upi-step-pill">
            <span className="step-num-circle">3</span>
            <span>Receive Official 80G Tax Certificate</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <h2 className="donation-hero-title">Choose Your Impact &amp; Scan via UPI</h2>
        <p className="donation-hero-subtitle">
          Zero middlemen or gateway fees. 100% of your transfer reaches the trust account directly via Google Pay, PhonePe, Paytm, BHIM, or any banking app.
        </p>

        {/* Interactive Impact Tiers Selector */}
        {showPresets && (
          <div className="donation-hero-presets">
            <span className="hero-presets-label">Select an Impact Tier (Automatically Updates QR Code):</span>
            <div className="impact-tiers-grid">
              {IMPACT_TIERS.map((tier) => {
                const isSelected = selectedAmount === tier.amount;
                return (
                  <button
                    key={tier.amount}
                    type="button"
                    className={`impact-tier-card ${isSelected ? "active" : ""}`}
                    onClick={() => {
                      setSelectedAmount(tier.amount);
                      setCustomAmount("");
                      setActiveCampaignLabel(tier.title);
                    }}
                  >
                    {tier.badge && <span className="tier-floating-badge">{tier.badge}</span>}
                    <span className="tier-amount">{tier.label}</span>
                    <span className="tier-title">{tier.title}</span>
                    <span className="tier-tax-tag">
                      80G Deductible: ₹{Math.round(tier.amount * 0.5).toLocaleString("en-IN")}
                    </span>
                  </button>
                );
              })}
              <button
                type="button"
                className={`impact-tier-card custom-tier-card ${selectedAmount === null ? "active" : ""}`}
                onClick={() => setSelectedAmount(null)}
              >
                <span className="tier-amount">Custom</span>
                <span className="tier-title">Any Amount</span>
                <span className="tier-tax-tag">50% 80G Benefit</span>
              </button>
            </div>

            {selectedAmount === null && (
              <div className="hero-custom-input-wrap">
                <span className="hero-rupee">₹</span>
                <input
                  id={customInputId}
                  type="number"
                  min="1"
                  placeholder="Enter custom amount in INR (e.g. 15000)"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="hero-custom-input"
                  autoFocus
                />
              </div>
            )}

            {/* Live Impact + 80G Tax Savings Callout Banner */}
            {activeAmount > 0 && (
              <div className="live-impact-callout" role="status" aria-live="polite">
                <div className="impact-callout-main">
                  <span className="impact-spark" aria-hidden="true">✳</span>
                  <div>
                    <strong>
                      ₹{activeAmount.toLocaleString("en-IN")} · {impactInfo.title}
                    </strong>
                    <p>{impactInfo.impact}</p>
                  </div>
                </div>
                <div className="impact-tax-pill">
                  <span>Section 80G Tax Deduction (50%)</span>
                  <strong>₹{taxInfo.eligibleDeduction.toLocaleString("en-IN")} Qualifying Deduction</strong>
                </div>
              </div>
            )}
          </div>
        )}

        {/* View Switcher: Dynamic QR vs Official Bank Standee */}
        <div className="hero-qr-tabs">
          <button
            type="button"
            onClick={() => setActiveTab("smart")}
            className={`hero-tab-btn ${activeTab === "smart" ? "active" : ""}`}
          >
            ⚡ Dynamic UPI QR {activeAmount > 0 ? `(₹${activeAmount.toLocaleString("en-IN")})` : ""}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("standee")}
            className={`hero-tab-btn ${activeTab === "standee" ? "active" : ""}`}
          >
            🏦 Official Bank Standee QR
          </button>
        </div>

        {/* Large Centered QR Display */}
        <div className="donation-hero-qr-stage">
          <div className="hero-qr-card">
            {activeTab === "smart" ? (
              qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt={`UPI QR code to donate ${activeAmount > 0 ? `₹${activeAmount}` : ""} to ${payeeName}`}
                  className="hero-qr-img"
                  width={300}
                  height={300}
                />
              ) : (
                <div className="hero-qr-loading">Generating secure QR code…</div>
              )
            ) : (
              <img
                src={officialQrImage}
                alt="Official HDFC SmartHub Vyapar Standee for Shri Prasanna Pattnaik Memorial Trust"
                className="hero-standee-img"
              />
            )}

            {/* Live Scan Status Pill */}
            <div className="hero-qr-status">
              <span className="hero-live-dot" />
              <span>
                {activeAmount > 0 ? (
                  <>
                    Scan &amp; Pay <strong>₹{activeAmount.toLocaleString("en-IN")}</strong>
                  </>
                ) : (
                  <strong>Scan with any UPI app</strong>
                )}
                {" · "}
                <span className="payee-tag">{payeeName}</span>
              </span>
            </div>
            <span className="qr-touch-hint">
              📱 Touch &amp; hold QR image above to &ldquo;Save Image&rdquo; directly to Photos
            </span>

            {/* Save QR to Gallery Action */}
            <div className="qr-utility-actions">
              <button
                type="button"
                className="btn-qr-utility"
                onClick={handleDownloadQr}
              >
                ↓ Save QR to Photos / Gallery
              </button>
            </div>

            {/* In-page guide when user clicks save */}
            {showSaveTip && (
              <div className="save-qr-guide-toast" role="alert">
                <div className="guide-toast-header">
                  <span>📸 How to save directly to Photos / Gallery:</span>
                  <button
                    type="button"
                    onClick={() => setShowSaveTip(false)}
                    className="guide-toast-close"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
                <p>
                  <strong>Chrome / Safari on iPhone:</strong> If your browser downloaded to Files instead of Photos, simply <strong>press &amp; hold the QR code image above for 1 second</strong>, then tap <strong>&ldquo;Save Image&rdquo;</strong> (or &ldquo;Add to Photos&rdquo;).
                </p>
                <div className="guide-toast-actions">
                  <button
                    type="button"
                    className="guide-toast-btn"
                    onClick={() => {
                      handleCopy(upiId, "upi");
                      setShowSaveTip(false);
                    }}
                  >
                    {copiedKey === "upi" ? "UPI ID Copied ✓" : "Or Copy UPI ID to Pay in App ↗"}
                  </button>
                </div>
              </div>
            )}

            <small className="single-phone-tip">
              <strong>Using one phone?</strong> Tap <strong>Copy UPI ID</strong> below, open Google Pay / PhonePe / Paytm, and paste into <em>&ldquo;Pay UPI ID&rdquo;</em>. Or press &amp; hold the QR image to save to Photos.
            </small>
          </div>

          {/* Centered Official UPI ID with Copy Button & Quick Guide */}
          <div className="hero-upi-copy-wrap">
            <div className="mobile-pay-heading">
              <span>Paying from this phone? Copy UPI ID &amp; pay in any app:</span>
            </div>
            <div className="hero-upi-box">
              <span className="upi-label">Official Trust UPI ID:</span>
              <strong className="upi-value">{upiId}</strong>
              <button
                type="button"
                className="btn-hero-copy"
                onClick={() => handleCopy(upiId, "upi")}
                aria-label="Copy UPI ID"
              >
                {copiedKey === "upi" ? "Copied ✓" : "Copy UPI ID"}
              </button>
            </div>
            <div className="upi-paste-instruction">
              <span className="instruction-step">1. Tap <strong>Copy UPI ID</strong></span>
              <span className="instruction-arrow">→</span>
              <span className="instruction-step">2. Open <strong>GPay / PhonePe / Paytm</strong></span>
              <span className="instruction-arrow">→</span>
              <span className="instruction-step">3. Tap <strong>Pay UPI ID</strong> &amp; paste</span>
            </div>
            <div className="hero-merchant-tag">
              <span>Trust PAN: <strong>ABNTS3218C</strong></span>
              <span> · </span>
              <span>12A URN: <strong>ABNTS3218CE20261</strong></span>
              <span> · </span>
              <span>80G URN: <strong>ABNTS3218CF20261</strong></span>
            </div>
          </div>

          {/* Action Row: Link directly to 80G Form & Bank Transfer */}
          <div className="hero-action-buttons">
            <a href="#receipt" className="btn btn-dark hero-claim-btn">
              <span>
                Done Paying {activeAmount > 0 ? `₹${activeAmount.toLocaleString("en-IN")}` : ""}? Claim Your 80G Receipt Below
              </span>
              <span className="arrow-down">↓</span>
            </a>
            <div className="hero-sublinks">
              <a href="#bank-transfer" className="sublink-item">
                Prefer NEFT / RTGS / IMPS? View Bank Account Details ↓
              </a>
              <span className="sep">·</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sublink-item"
              >
                WhatsApp Receipt Helpline (+91 99723 66933) ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // STANDARD / EMBED MODE (for Homepage, Scholarship & 80G pages)
  // ============================================================
  return (
    <div className={`donation-qr-box ${compactMode ? "compact-above-fold" : ""} ${className}`} id="donation-box">
      <div className="donation-qr-header">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <span className="badge-80g">50% Tax Deduction · Section 80G</span>
          <span className="badge-verified">✓ HDFC SmartHub Vyapar Verified</span>
        </div>
        <h3 className="donation-qr-title">Choose Impact &amp; Donate via UPI</h3>
        <p className="donation-qr-subtitle">
          Scan using any UPI App (Google Pay, PhonePe, Paytm, BHIM) or copy our official UPI ID
        </p>
      </div>

      {showPresets && (
        <div className="donation-amount-selector">
          <label className="amount-label">Select Contribution Tier (INR):</label>
          <div className="impact-tiers-grid compact-tiers-grid">
            {IMPACT_TIERS.map((tier) => {
              const isSelected = selectedAmount === tier.amount;
              return (
                <button
                  key={tier.amount}
                  type="button"
                  className={`impact-tier-card ${isSelected ? "active" : ""}`}
                  onClick={() => {
                    setSelectedAmount(tier.amount);
                    setCustomAmount("");
                  }}
                >
                  {tier.badge && <span className="tier-floating-badge">{tier.badge}</span>}
                  <span className="tier-amount">{tier.label}</span>
                  <span className="tier-title">{tier.title}</span>
                  <span className="tier-tax-tag">
                    80G: ₹{Math.round(tier.amount * 0.5).toLocaleString("en-IN")}
                  </span>
                </button>
              );
            })}
            <button
              type="button"
              className={`impact-tier-card custom-tier-card ${selectedAmount === null ? "active" : ""}`}
              onClick={() => setSelectedAmount(null)}
            >
              <span className="tier-amount">Custom</span>
              <span className="tier-title">Other Amount</span>
              <span className="tier-tax-tag">50% 80G Benefit</span>
            </button>
          </div>

          {selectedAmount === null && (
            <div className="custom-amount-input-wrap" style={{ marginTop: 12 }}>
              <span className="rupee-symbol">₹</span>
              <input
                id={customInputId}
                type="number"
                min="1"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="custom-amount-input"
              />
            </div>
          )}

          {activeAmount > 0 && (
            <div className="live-impact-callout compact-callout" style={{ marginTop: 14 }}>
              <div className="impact-callout-main">
                <span className="impact-spark" aria-hidden="true">✳</span>
                <div>
                  <strong>
                    ₹{activeAmount.toLocaleString("en-IN")} · {impactInfo.title}
                  </strong>
                  <p>{impactInfo.impact}</p>
                </div>
              </div>
              <div className="impact-tax-pill">
                <span>50% Sec 80G Deduction</span>
                <strong>₹{taxInfo.eligibleDeduction.toLocaleString("en-IN")}</strong>
              </div>
            </div>
          )}
        </div>
      )}

      <div className={`qr-container-row ${compactMode ? "qr-compact-row" : ""}`}>
        <div className="qr-image-wrapper">
          {activeTab === "smart" ? (
            qrDataUrl ? (
              <img
                src={qrDataUrl}
                alt={`UPI QR code to donate ${activeAmount > 0 ? `₹${activeAmount}` : ""} to ${payeeName}`}
                className="qr-image"
                width={240}
                height={240}
              />
            ) : (
              <div className="qr-loading">Generating secure QR code…</div>
            )
          ) : (
            <img
              src={officialQrImage}
              alt="Official HDFC SmartHub Vyapar Standee for Shri Prasanna Pattnaik Memorial Trust"
              className="qr-image"
              style={{ maxHeight: 280, width: "auto", objectFit: "contain" }}
            />
          )}

          <div className="qr-scan-hint">
            <span className="qr-dot" />
            <strong>
              {activeAmount > 0
                ? `Scan & Pay ₹${activeAmount.toLocaleString("en-IN")}`
                : "Scan with any UPI app"}
            </strong>
          </div>
          <span className="qr-touch-hint" style={{ fontSize: 11.5, margin: "6px 0 2px" }}>
            📱 Touch &amp; hold QR to &ldquo;Save Image&rdquo;
          </span>

          <button
            type="button"
            className="btn-qr-utility"
            style={{ marginTop: 8, width: "100%", justifyContent: "center" }}
            onClick={handleDownloadQr}
          >
            ↓ Save QR to Photos / Gallery
          </button>
        </div>

        <div className="qr-actions-details">
          {/* Mobile tip */}
          <div className="mobile-only-pay">
            <small className="mobile-hint" style={{ marginTop: 0, display: "block", fontSize: 12 }}>
              📱 <strong>Using this phone?</strong> Tap <strong>Copy UPI ID</strong> below, open Google Pay / PhonePe / Paytm, and paste into <em>&ldquo;Pay UPI ID&rdquo;</em>.
            </small>
          </div>

          <div className="quick-copy-details">
            <div className="copy-field">
              <div className="field-meta">
                <span className="field-title">Official UPI ID</span>
                <strong className="field-val">{upiId}</strong>
              </div>
              <button
                type="button"
                className="btn-copy"
                onClick={() => handleCopy(upiId, "upi")}
                aria-label="Copy UPI ID"
              >
                {copiedKey === "upi" ? "Copied ✓" : "Copy UPI ID"}
              </button>
            </div>

            <div className="copy-field">
              <div className="field-meta">
                <span className="field-title">Merchant TID</span>
                <strong className="field-val">{merchantTid}</strong>
              </div>
              <span style={{ fontSize: 11, color: "#1f7a46", fontWeight: 700 }}>
                HDFC Verified
              </span>
            </div>

            <div className="copy-field">
              <div className="field-meta">
                <span className="field-title">Account Number ({bankName})</span>
                <strong className="field-val">{accountNumber}</strong>
              </div>
              <button
                type="button"
                className="btn-copy"
                onClick={() => handleCopy(accountNumber, "acc")}
                aria-label="Copy Account Number"
              >
                {copiedKey === "acc" ? "Copied ✓" : "Copy"}
              </button>
            </div>

            <div className="copy-field">
              <div className="field-meta">
                <span className="field-title">IFSC Code</span>
                <strong className="field-val">{ifsc}</strong>
              </div>
              <button
                type="button"
                className="btn-copy"
                onClick={() => handleCopy(ifsc, "ifsc")}
                aria-label="Copy IFSC Code"
              >
                {copiedKey === "ifsc" ? "Copied ✓" : "Copy"}
              </button>
            </div>

            <div className="copy-field account-holder">
              <div className="field-meta">
                <span className="field-title">Beneficiary Name &amp; 80G Registration</span>
                <span className="field-subval">{payeeName}</span>
                <span className="field-subval branch">
                  PAN: <strong>ABNTS3218C</strong> · 80G URN: <strong>ABNTS3218CF20261</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="qr-receipt-footer">
        <div className="receipt-inpage-cta">
          <div>
            <strong>Already transferred?</strong>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: "var(--muted)" }}>
              Submit your PAN and UTR to receive your official Section 80G tax deduction certificate.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginTop: 10 }}>
            <a
              href={`/donate${activeAmount > 0 ? `?amount=${activeAmount}` : ""}#receipt`}
              className="btn btn-dark"
              style={{ minHeight: 44, padding: "10px 18px", fontSize: 13 }}
            >
              <span>Claim 80G Tax Receipt ↗</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              style={{ fontSize: 13 }}
            >
              Or WhatsApp coordinator (+91 99723 66933) ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
