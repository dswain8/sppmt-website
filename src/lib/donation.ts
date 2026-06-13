export interface DonationConfig {
  accountName: string;
  accountNumber: string;
  ifsc: string;
  bankName: string;
  branch: string;
  upiId: string;
}

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
  };
}