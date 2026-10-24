/** Flag to temporarily suppress/enable all donation CTAs, QR codes and payment flows */
export const DONATIONS_ENABLED =
  process.env.NEXT_PUBLIC_ENABLE_DONATIONS === "true" ? true : false;

export interface DonationConfig {
  accountName: string;
  accountNumber: string;
  ifsc: string;
  bankName: string;
  branch: string;
  upiId: string;
  merchantTid?: string;
  qrImagePath?: string;
  email: string;
  whatsappNumber: string;
  /** Display as-is when set (e.g. trust PAN) */
  pan: string;
  /** 12A/12AB registration number, if available */
  registration12A: string;
  /** 80G approval / URN, if available */
  approval80G: string;
  /** Days to issue receipt after payment verification */
  receiptSlaDays: number;
  /** Google Form URL for donation confirmation (viewform link) */
  googleFormUrl: string;
}

export interface SuggestedAmount {
  amount: number;
  label: string;
  impact: string;
}

export const SUGGESTED_AMOUNTS: SuggestedAmount[] = [
  {
    amount: 500,
    label: "₹500",
    impact: "Provides notebooks, geometry box & study stationery for 1 student",
  },
  {
    amount: 1000,
    label: "₹1,000",
    impact: "Sponsors 1 complete school kit (sturdy bag, notebook set & learning tools)",
  },
  {
    amount: 2500,
    label: "₹2,500",
    impact: "Sponsors complete education kits & exam supplies for 2–3 students",
  },
  {
    amount: 5000,
    label: "₹5,000",
    impact: "Sponsors 5 student school kits or co-sponsors a merit scholarship",
  },
  {
    amount: 10000,
    label: "₹10,000",
    impact: "Sponsors 10 complete education kits for a rural classroom",
  },
];

export function getDonationConfig(): DonationConfig {
  return {
    accountName:
      process.env.DONATION_ACCOUNT_NAME ??
      "Shri Prasanna Pattnaik Memorial Trust",
    accountNumber: process.env.DONATION_ACCOUNT_NUMBER ?? "09230210004593",
    ifsc: process.env.DONATION_IFSC ?? "UCBA0000923",
    bankName: process.env.DONATION_BANK_NAME ?? "UCO Bank",
    branch: process.env.DONATION_BRANCH ?? "Saheed Nagar, Bhubaneswar",
    upiId:
      process.env.DONATION_UPI_ID ?? "shriprasannapattnaik.82380414@hdfcbank",
    merchantTid: "82380414",
    qrImagePath: "/images/trust-qr-code.jpg",
    email:
      process.env.DONATION_EMAIL ?? "prasannapattnaiktrust@gmail.com",
    whatsappNumber:
      process.env.DONATION_WHATSAPP ?? "919972366933",
    pan: process.env.DONATION_TRUST_PAN ?? "ABNTS3218C",
    registration12A: process.env.DONATION_12A_NUMBER ?? "ABNTS3218CE20261",
    approval80G: process.env.DONATION_80G_NUMBER ?? "ABNTS3218CF20261",
    receiptSlaDays: Number(process.env.DONATION_RECEIPT_SLA_DAYS ?? "7"),
    googleFormUrl: process.env.DONATION_GOOGLE_FORM_URL ?? "",
  };
}

export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
