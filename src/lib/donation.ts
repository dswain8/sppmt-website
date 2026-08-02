export interface DonationConfig {
  accountName: string;
  accountNumber: string;
  ifsc: string;
  bankName: string;
  branch: string;
  upiId: string;
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
}

export interface SuggestedAmount {
  amount: number;
  label: string;
  impact: string;
}

export const SUGGESTED_AMOUNTS: SuggestedAmount[] = [
  {
    amount: 1000,
    label: "₹1,000",
    impact: "Supports educational kits for students",
  },
  {
    amount: 2500,
    label: "₹2,500",
    impact: "Helps fund a cleanliness or plantation drive",
  },
  {
    amount: 5000,
    label: "₹5,000",
    impact: "Contributes to healthcare outreach",
  },
  {
    amount: 10000,
    label: "₹10,000",
    impact: "Supports education and livelihood programs",
  },
];

export function getDonationConfig(): DonationConfig {
  return {
    accountName:
      process.env.DONATION_ACCOUNT_NAME ??
      "Sri Prasanna Pattnaik Memorial Trust",
    accountNumber: process.env.DONATION_ACCOUNT_NUMBER ?? "09230210004593",
    ifsc: process.env.DONATION_IFSC ?? "UCBA0000923",
    bankName: process.env.DONATION_BANK_NAME ?? "UCO Bank",
    branch: process.env.DONATION_BRANCH ?? "Saheed Nagar, Bhubaneswar",
    upiId: process.env.DONATION_UPI_ID ?? "",
    email:
      process.env.DONATION_EMAIL ?? "prasannapattnaiktrust@gmail.com",
    whatsappNumber:
      process.env.DONATION_WHATSAPP ?? "919439725460",
    pan: process.env.DONATION_TRUST_PAN ?? "",
    registration12A: process.env.DONATION_12A_NUMBER ?? "",
    approval80G: process.env.DONATION_80G_NUMBER ?? "",
    receiptSlaDays: Number(process.env.DONATION_RECEIPT_SLA_DAYS ?? "7"),
  };
}

export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
