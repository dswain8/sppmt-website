"use client";

import { useState, useEffect, useId, type FormEvent } from "react";
import { calculate80GDeduction, getImpactForAmount } from "@/lib/campaign";

interface ReceiptClaimFormProps {
  receiptSlaDays?: number;
  initialAmount?: number;
  className?: string;
}

export default function ReceiptClaimForm({
  receiptSlaDays = 7,
  initialAmount = 1000,
  className = "",
}: ReceiptClaimFormProps) {
  const [form, setForm] = useState({
    fullName: "",
    pan: "",
    email: "",
    phone: "",
    amount: initialAmount > 0 ? String(initialAmount) : "",
    paymentMode: "UPI",
    utr: "",
    date: new Date().toISOString().split("T")[0],
    address: "",
  });

  const [userEditedAmount, setUserEditedAmount] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    fullName: string;
    email: string;
    amount: number;
    utr: string;
    pan: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const nameId = useId();
  const panId = useId();
  const emailId = useId();
  const phoneId = useId();
  const amountId = useId();
  const modeId = useId();
  const utrId = useId();
  const dateId = useId();
  const addressId = useId();

  // Sync amount from URL query param (?amount=...) and QR tier selection events
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlAmt = Number(params.get("amount"));
      if (urlAmt > 0) {
        setForm((prev) => ({ ...prev, amount: String(urlAmt) }));
      }
    }

    const handleQrAmountChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ amount: number }>;
      if (!userEditedAmount && customEvent.detail?.amount > 0) {
        setForm((prev) => ({ ...prev, amount: String(customEvent.detail.amount) }));
      }
    };

    window.addEventListener("sppmt:donation-amount-changed", handleQrAmountChange);
    return () => {
      window.removeEventListener("sppmt:donation-amount-changed", handleQrAmountChange);
    };
  }, [userEditedAmount]);

  const updateField = (field: string, value: string) => {
    if (field === "amount") {
      setUserEditedAmount(true);
    }
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const numericAmount = Number(form.amount) || 0;
  const taxSummary = calculate80GDeduction(numericAmount);
  const impactSummary = getImpactForAmount(numericAmount);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!form.fullName.trim()) {
      setErrorMsg("Please enter your full legal name as on your PAN card.");
      return;
    }
    if (!form.pan.trim() || form.pan.trim().length !== 10) {
      setErrorMsg("Please enter a valid 10-character PAN number for Section 80G deduction.");
      return;
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      setErrorMsg("Please enter a valid email address to receive your official 80G receipt.");
      return;
    }
    if (!form.phone.trim() || form.phone.trim().length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!form.amount || Number(form.amount) <= 0) {
      setErrorMsg("Please specify the contribution amount in INR.");
      return;
    }
    if (!form.utr.trim()) {
      setErrorMsg("Please enter the 12-digit UPI reference / bank UTR transaction number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/donate/receipt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        throw new Error(json.error || "Failed to record receipt request.");
      }

      setSubmittedData({
        referenceId: json.referenceId,
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        amount: Number(form.amount),
        utr: form.utr.trim(),
        pan: form.pan.trim().toUpperCase(),
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  if (submittedData) {
    const waText = encodeURIComponent(
      `Namaskar SPPMT, I have submitted my Section 80G tax receipt request on the website.\nReference ID: ${submittedData.referenceId}\nName: ${submittedData.fullName}\nPAN: ${submittedData.pan}\nAmount: ₹${submittedData.amount}\nUTR: ${submittedData.utr}`
    );
    const waUrl = `https://wa.me/919972366933?text=${waText}`;

    const friendReferralText = encodeURIComponent(
      `Namaskar! I just contributed to the Shri Prasanna Pattnaik Memorial Trust (SPPMT) to support rural students' education and community healthcare in Odisha. 100% of public contributions go directly to grassroots programs and qualify for a 50% Section 80G tax deduction.\n\nYou can support a student with a school kit (₹1,000) or scholarship directly via UPI here: https://sppmt.org/donate`
    );
    const friendReferralUrl = `https://wa.me/?text=${friendReferralText}`;

    return (
      <div className={`receipt-success-card ${className}`}>
        <div className="success-icon-wrap">
          <span className="success-check">✓</span>
        </div>
        <span className="badge-verified">Details Recorded</span>
        <h3>Thank You, {submittedData.fullName}</h3>
        <p className="success-lead">
          Your 80G tax receipt request has been submitted directly to our accounts team.
        </p>

        <div className="receipt-ref-box">
          <span className="ref-label">Official Request Reference ID</span>
          <strong className="ref-number">{submittedData.referenceId}</strong>
        </div>

        <div className="receipt-summary-grid">
          <div>
            <span>Donor PAN</span>
            <strong>{submittedData.pan}</strong>
          </div>
          <div>
            <span>Amount Contributed</span>
            <strong>₹{submittedData.amount.toLocaleString("en-IN")}</strong>
          </div>
          <div>
            <span>50% Sec 80G Deduction</span>
            <strong>₹{Math.round(submittedData.amount * 0.5).toLocaleString("en-IN")}</strong>
          </div>
          <div>
            <span>UTR / Ref No.</span>
            <strong>{submittedData.utr}</strong>
          </div>
          <div>
            <span>Receipt Destination</span>
            <strong>{submittedData.email}</strong>
          </div>
        </div>

        <div className="receipt-next-steps">
          <h4>What happens next?</h4>
          <p>
            1. Our finance team reconciles the bank statement using your UTR{" "}
            <strong>{submittedData.utr}</strong>.
            <br />
            2. An official, signed Section 80G donation receipt on trust letterhead
            will be emailed to <strong>{submittedData.email}</strong> within{" "}
            <strong>{receiptSlaDays} working days</strong>.
            <br />
            3. The trust files statutory Form 10BD with the Income Tax Department,
            making your Form 10BE automatically visible in your AIS / Form 26AS.
          </p>
        </div>

        {/* Viral WhatsApp Referral Flywheel */}
        <div className="receipt-referral-banner">
          <div>
            <strong>Multiply Your Impact Today</strong>
            <p>
              Most of our grassroots support comes from word-of-mouth. Invite a friend or family member on WhatsApp to sponsor a student school kit or scholarship.
            </p>
          </div>
          <a
            href={friendReferralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark referral-wa-btn"
          >
            <span>Share SPPMT on WhatsApp</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="success-action-row">
          <button
            type="button"
            onClick={() => {
              setSubmittedData(null);
              setForm({
                fullName: "",
                pan: "",
                email: "",
                phone: "",
                amount: "",
                paymentMode: "UPI",
                utr: "",
                date: new Date().toISOString().split("T")[0],
                address: "",
              });
            }}
            className="text-link"
          >
            Submit details for another contribution ↗
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-pill-link"
          >
            Send instant copy to Trust WhatsApp (+91 99723 66933) ↗
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`receipt-form-wrap ${className}`} id="receipt-form">
      <div className="form-header">
        <div className="form-header-badge">
          <span className="dot-active" />
          <span>Section 80G Tax Exemption Receipt</span>
        </div>
        <p className="form-header-hint">
          Please enter your transfer details below. All fields marked with <span className="req">*</span> are required by the Income Tax Department to issue your certificate.
        </p>
      </div>

      {errorMsg && (
        <div className="form-error-alert" role="alert">
          <span>⚠️ {errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="claim-form-grid">
        {/* Full Name */}
        <div className="form-field">
          <label htmlFor={nameId}>
            Full Legal Name <span className="req">*</span>
          </label>
          <input
            id={nameId}
            type="text"
            required
            placeholder="As printed on your PAN card"
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className="input-text"
          />
          <small>Required for official 80G donation certificate</small>
        </div>

        {/* PAN */}
        <div className="form-field">
          <label htmlFor={panId}>
            Donor PAN Number <span className="req">*</span>
          </label>
          <input
            id={panId}
            type="text"
            required
            maxLength={10}
            placeholder="e.g. ABCDE1234F"
            value={form.pan}
            onChange={(e) => updateField("pan", e.target.value.toUpperCase())}
            className="input-text uppercase"
          />
          <small>Mandatory under Income Tax Rule 18AB</small>
        </div>

        {/* Email */}
        <div className="form-field">
          <label htmlFor={emailId}>
            Email Address <span className="req">*</span>
          </label>
          <input
            id={emailId}
            type="email"
            required
            placeholder="Where receipt PDF will be sent"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="input-text"
          />
          <small>Official receipt will be emailed here</small>
        </div>

        {/* Phone */}
        <div className="form-field">
          <label htmlFor={phoneId}>
            Mobile / WhatsApp <span className="req">*</span>
          </label>
          <input
            id={phoneId}
            type="tel"
            required
            placeholder="10-digit mobile number"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="input-text"
          />
          <small>For payment reconciliation &amp; updates</small>
        </div>

        {/* Amount */}
        <div className="form-field">
          <label htmlFor={amountId}>
            Amount Contributed (INR) <span className="req">*</span>
          </label>
          <div className="input-rupee-wrap">
            <span className="rupee-prefix">₹</span>
            <input
              id={amountId}
              type="number"
              min="1"
              required
              placeholder="e.g. 1000"
              value={form.amount}
              onChange={(e) => updateField("amount", e.target.value)}
              className="input-text with-prefix"
            />
          </div>
          <small>
            {numericAmount > 0 ? (
              <>
                Qualifies for{" "}
                <strong style={{ color: "var(--forest)" }}>
                  ₹{taxSummary.eligibleDeduction.toLocaleString("en-IN")}
                </strong>{" "}
                (50% Sec 80G deduction) · {impactSummary.title}
              </>
            ) : (
              "Exact amount transferred to trust account"
            )}
          </small>
        </div>

        {/* Payment Mode */}
        <div className="form-field">
          <label htmlFor={modeId}>
            Payment Mode <span className="req">*</span>
          </label>
          <select
            id={modeId}
            value={form.paymentMode}
            onChange={(e) => updateField("paymentMode", e.target.value)}
            className="input-select"
          >
            <option value="UPI">UPI (Google Pay / PhonePe / Paytm / BHIM)</option>
            <option value="NEFT">Bank Transfer (NEFT / RTGS)</option>
            <option value="IMPS">Bank Transfer (IMPS)</option>
            <option value="Cheque">Account Payee Cheque / Draft</option>
          </select>
          <small>Mode of transfer used</small>
        </div>

        {/* UTR / Ref Number */}
        <div className="form-field">
          <label htmlFor={utrId}>
            UTR / UPI Reference Number <span className="req">*</span>
          </label>
          <input
            id={utrId}
            type="text"
            required
            placeholder="12-digit transaction ID or bank UTR"
            value={form.utr}
            onChange={(e) => updateField("utr", e.target.value)}
            className="input-text"
          />
          <small>Found in your payment app receipt</small>
        </div>

        {/* Date of Transfer */}
        <div className="form-field">
          <label htmlFor={dateId}>
            Transfer Date <span className="req">*</span>
          </label>
          <input
            id={dateId}
            type="date"
            required
            value={form.date}
            onChange={(e) => updateField("date", e.target.value)}
            className="input-text"
          />
          <small>Date payment was made</small>
        </div>

        {/* Postal Address */}
        <div className="form-field full-width">
          <label htmlFor={addressId}>
            Complete Postal Address &amp; PIN Code <span className="req">*</span>
          </label>
          <textarea
            id={addressId}
            rows={2}
            required
            placeholder="House/Street, Village/City, District, State, PIN Code"
            value={form.address}
            onChange={(e) => updateField("address", e.target.value)}
            className="input-textarea"
          />
          <small>Mandatory for Form 10BD filing with the Income Tax Department</small>
        </div>

        <div className="form-footer-action full-width">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-dark submit-receipt-btn"
          >
            <span>{loading ? "Recording Details..." : "Submit Details for 80G Receipt"}</span>
            <span>↗</span>
          </button>
          <p className="form-sla-note">
            Official signed donation receipt with Trust 80G Registration Number
            will be emailed within {receiptSlaDays} working days.
          </p>
        </div>
      </form>
    </div>
  );
}
