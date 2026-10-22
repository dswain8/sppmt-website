"use client";

import { useEffect, useState, useId } from "react";
import QRCode from "qrcode";

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

const PRESET_AMOUNTS = [500, 1000, 2500, 5000];

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
  const customInputId = useId();

  const activeAmount = selectedAmount !== null ? selectedAmount : (Number(customAmount) || 0);

  // Standard NPCI UPI payment URI
  const upiUri = (() => {
    const params = new URLSearchParams({
      pa: upiId,
      pn: payeeName,
      cu: "INR",
      tn: "Donation to SPPMT (80G Tax Benefit)",
    });
    if (activeAmount > 0) {
      params.set("am", activeAmount.toString());
    }
    return `upi://pay?${params.toString()}`;
  })();

  useEffect(() => {
    QRCode.toDataURL(upiUri, {
      width: heroMode ? 320 : 260,
      margin: 2,
      color: {
        dark: "#183b30", // Forest green
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

  const whatsappMessage = encodeURIComponent(
    `Namaskar SPPMT, I have made a contribution of ${
      activeAmount > 0 ? `₹${activeAmount.toLocaleString("en-IN")}` : "a donation"
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
          <span className="badge-80g">Section 80G Tax Exemption</span>
          <span className="badge-verified">✓ HDFC SmartHub Vyapar Verified</span>
        </div>

        {/* Hero Title & Subtitle */}
        <h2 className="donation-hero-title">Scan &amp; Donate via UPI</h2>
        <p className="donation-hero-subtitle">
          Scan using any UPI App — Google Pay, PhonePe, Paytm, BHIM, or your mobile banking app.
        </p>

        {/* Amount Selector */}
        {showPresets && (
          <div className="donation-hero-presets">
            <span className="hero-presets-label">Select Contribution Amount:</span>
            <div className="hero-preset-chips">
              {PRESET_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className={`hero-preset-btn ${selectedAmount === amt ? "active" : ""}`}
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount("");
                  }}
                >
                  ₹{amt.toLocaleString("en-IN")}
                </button>
              ))}
              <button
                type="button"
                className={`hero-preset-btn ${selectedAmount === null ? "active" : ""}`}
                onClick={() => setSelectedAmount(null)}
              >
                Other Amount
              </button>
            </div>

            {selectedAmount === null && (
              <div className="hero-custom-input-wrap">
                <span className="hero-rupee">₹</span>
                <input
                  id={customInputId}
                  type="number"
                  min="1"
                  placeholder="Enter custom amount (e.g. 10000)"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="hero-custom-input"
                  autoFocus
                />
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
            Dynamic UPI QR {activeAmount > 0 ? `(₹${activeAmount.toLocaleString("en-IN")})` : ""}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("standee")}
            className={`hero-tab-btn ${activeTab === "standee" ? "active" : ""}`}
          >
            Official Merchant Standee Photo
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
          </div>

          {/* Mobile 1-Tap Pay Direct Link */}
          <div className="hero-mobile-pay-wrap">
            <a href={upiUri} className="btn-hero-mobile-pay">
              <span className="pay-label">
                {activeAmount > 0
                  ? `Pay ₹${activeAmount.toLocaleString("en-IN")} via UPI App`
                  : "Pay via Installed UPI App"}
              </span>
              <span className="pay-apps">Google Pay · PhonePe · Paytm · BHIM ↗</span>
            </a>
            <small className="mobile-tap-hint">Tap on mobile to open your installed UPI app</small>
          </div>

          {/* Centered Official UPI ID with Copy Button */}
          <div className="hero-upi-copy-wrap">
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
            <div className="hero-merchant-tag">
              <span>HDFC Merchant TID: <strong>{merchantTid}</strong></span>
              <span> · </span>
              <span>Terminal: <strong>UCO Bank Saheed Nagar</strong></span>
            </div>
          </div>

          {/* Action Row: Link directly to 80G Form & Bank Transfer */}
          <div className="hero-action-buttons">
            <a href="#receipt-form" className="btn btn-dark hero-claim-btn">
              <span>Already Donated? Claim Your 80G Tax Receipt Below</span>
              <span className="arrow-down">↓</span>
            </a>
            <div className="hero-sublinks">
              <a href="#bank-transfer" className="sublink-item">
                Need to do NEFT / RTGS Bank Transfer? View Bank Account Details ↓
              </a>
              <span className="sep">·</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sublink-item"
              >
                Coordinator Helpline (+91 99723 66933) ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // STANDARD / EMBED MODE (for Homepage & Scholarship pages)
  // ============================================================
  return (
    <div className={`donation-qr-box ${compactMode ? "compact-above-fold" : ""} ${className}`} id="donation-box">
      <div className="donation-qr-header">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <span className="badge-80g">Section 80G Tax Exemption</span>
          <span className="badge-verified">✓ HDFC SmartHub Vyapar Verified</span>
        </div>
        <h3 className="donation-qr-title">Instant Contribution via UPI</h3>
        <p className="donation-qr-subtitle">
          Scan using any UPI App (Google Pay, PhonePe, Paytm, BHIM, or Mobile Banking)
        </p>
      </div>

      {showPresets && (
        <div className="donation-amount-selector">
          <label className="amount-label">Select Contribution Amount (INR):</label>
          <div className="preset-buttons">
            {PRESET_AMOUNTS.map((amt) => (
              <button
                key={amt}
                type="button"
                className={`preset-btn ${selectedAmount === amt ? "active" : ""}`}
                onClick={() => {
                  setSelectedAmount(amt);
                  setCustomAmount("");
                }}
              >
                ₹{amt.toLocaleString("en-IN")}
              </button>
            ))}
            <button
              type="button"
              className={`preset-btn ${selectedAmount === null ? "active" : ""}`}
              onClick={() => setSelectedAmount(null)}
            >
              Other Amount
            </button>
          </div>
          {selectedAmount === null && (
            <div className="custom-amount-input-wrap">
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
        </div>

        <div className="qr-actions-details">
          {/* Mobile direct UPI tap link */}
          <div className="mobile-only-pay">
            <a href={upiUri} className="btn-direct-upi">
              <span>
                {activeAmount > 0 ? `Pay ₹${activeAmount.toLocaleString("en-IN")} via UPI App` : "Pay via UPI App"}
              </span>
              <span className="app-icons">Google Pay · PhonePe · Paytm ↗</span>
            </a>
            <small className="mobile-hint">
              Tap above to directly open your installed UPI app.
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
                <span className="field-title">Beneficiary Name</span>
                <span className="field-subval">{payeeName}</span>
                <span className="field-subval branch">Branch: {branch}</span>
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
              Submit your PAN and UTR directly in the form below to receive your official Section 80G tax receipt.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginTop: 10 }}>
            <a href="#receipt-form" className="btn btn-dark" style={{ minHeight: 44, padding: "10px 18px", fontSize: 12 }}>
              <span>Enter Details for 80G Receipt ↓</span>
              <span>↓</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              style={{ fontSize: 12 }}
            >
              Or WhatsApp coordinator (+91 99723 66933) ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
