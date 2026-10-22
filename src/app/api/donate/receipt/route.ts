import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      pan,
      email,
      phone,
      amount,
      paymentMode,
      utr,
      date,
      address,
    } = data;

    if (!fullName || !email || !phone || !amount || !utr) {
      return NextResponse.json(
        { error: "Missing required fields (Name, Email, Phone, Amount, UTR)" },
        { status: 400 }
      );
    }

    const referenceId = `SPPMT-80G-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    const submission = {
      referenceId,
      timestamp: new Date().toISOString(),
      fullName: String(fullName).trim(),
      pan: String(pan || "").trim().toUpperCase(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      amount: Number(amount) || 0,
      paymentMode: paymentMode || "UPI",
      utr: String(utr).trim(),
      date: date || new Date().toISOString().split("T")[0],
      address: String(address || "").trim(),
    };

    // 1. Save locally to a JSON ledger so records are never lost in local/Node environments
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, "receipt-requests.json");
      let existing: unknown[] = [];
      if (fs.existsSync(filePath)) {
        try {
          existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        } catch {
          existing = [];
        }
      }
      existing.unshift(submission);
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf-8");
    } catch (fsErr) {
      // In serverless read-only environments (like Vercel), fs write may fail gracefully
      console.warn("Local filesystem write skipped:", (fsErr as Error).message);
    }

    // 2. Forward to Google Sheet Webhook (Google Apps Script) if configured
    const sheetWebhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      process.env.DONATION_GOOGLE_SHEET_WEBHOOK ||
      "https://script.google.com/macros/s/AKfycbzF9eiMCCjn4cF6h99VJB9wmNhLj6zbJoQ5aa4CxTGlIjY0Z7FqCeGW2RN4hEJNQ7XtiQ/exec";

    if (sheetWebhookUrl) {
      try {
        const sheetResponse = await fetch(sheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submission),
          redirect: "follow",
        });
        const respText = await sheetResponse.text().catch(() => "");
        console.log("Google Sheet webhook dispatched:", sheetResponse.status, respText.slice(0, 120));
      } catch (sheetErr) {
        console.error("Google Sheet webhook dispatch error:", (sheetErr as Error).message);
      }
    }

    // 3. Forward to Google Form (formResponse endpoint) if configured
    const rawGoogleFormUrl =
      process.env.DONATION_GOOGLE_FORM_URL ||
      process.env.GOOGLE_FORM_RESPONSE_URL;

    if (rawGoogleFormUrl) {
      try {
        // Convert viewform link to formResponse if needed
        const formResponseUrl = rawGoogleFormUrl
          .replace("/viewform", "/formResponse")
          .split("?")[0];

        // Custom entry IDs can be configured in .env; fallback to standard names
        const entryName = process.env.DONATION_GF_ENTRY_NAME || "entry.fullName";
        const entryPan = process.env.DONATION_GF_ENTRY_PAN || "entry.pan";
        const entryEmail = process.env.DONATION_GF_ENTRY_EMAIL || "entry.email";
        const entryPhone = process.env.DONATION_GF_ENTRY_PHONE || "entry.phone";
        const entryAmount = process.env.DONATION_GF_ENTRY_AMOUNT || "entry.amount";
        const entryUtr = process.env.DONATION_GF_ENTRY_UTR || "entry.utr";
        const entryAddress = process.env.DONATION_GF_ENTRY_ADDRESS || "entry.address";
        const entryRef = process.env.DONATION_GF_ENTRY_REF || "entry.referenceId";

        const formData = new URLSearchParams();
        formData.append(entryName, submission.fullName);
        formData.append(entryPan, submission.pan);
        formData.append(entryEmail, submission.email);
        formData.append(entryPhone, submission.phone);
        formData.append(entryAmount, submission.amount.toString());
        formData.append(entryUtr, submission.utr);
        formData.append(entryAddress, submission.address);
        formData.append(entryRef, submission.referenceId);

        await fetch(formResponseUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }).catch((err) =>
          console.error("Google Form POST error:", err.message)
        );
      } catch (gfErr) {
        console.error("Google Form forwarding error:", gfErr);
      }
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: "80G receipt request recorded successfully.",
      submission,
    });
  } catch (error) {
    console.error("Receipt submission error:", error);
    return NextResponse.json(
      { error: "Failed to process receipt request." },
      { status: 500 }
    );
  }
}
