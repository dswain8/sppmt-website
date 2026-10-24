export interface ImpactTier {
  amount: number;
  label: string;
  title: string;
  impact: string;
  campaignSlug: string;
  upiNote: string;
  badge?: string;
}

export const IMPACT_TIERS: ImpactTier[] = [
  {
    amount: 500,
    label: "₹500",
    title: "Learning Supplies",
    impact: "Provides notebooks, pens, and essential study stationery for 1 rural student.",
    campaignSlug: "learning-supplies",
    upiNote: "SPPMT Learning Supplies (80G)",
  },
  {
    amount: 1000,
    label: "₹1,000",
    title: "1 Complete School Kit",
    impact: "Equips 1 student in rural Odisha with a durable school bag and full learning kit.",
    campaignSlug: "school-kit",
    upiNote: "SPPMT School Kit Drive (80G)",
    badge: "Most Popular",
  },
  {
    amount: 2500,
    label: "₹2,500",
    title: "Healthcare & Cleanliness",
    impact: "Supports hospital patient assistance, rural health outreach, and village sanitation drives.",
    campaignSlug: "healthcare-outreach",
    upiNote: "SPPMT Healthcare & Community (80G)",
  },
  {
    amount: 5000,
    label: "₹5,000",
    title: "Co-Sponsor a Scholar",
    impact: "Funds semester tuition, textbooks, and academic mentorship for a Merit & Need Scholar.",
    campaignSlug: "scholar-support",
    upiNote: "SPPMT Merit Scholar Support (80G)",
    badge: "High Impact",
  },
  {
    amount: 10000,
    label: "₹10,000",
    title: "Full Annual Scholarship",
    impact: "Sponsors a full year of higher education or sponsors 10 complete student school kits.",
    campaignSlug: "annual-scholar",
    upiNote: "SPPMT Full Scholar Grant (80G)",
  },
];

export interface CampaignInitiative {
  id: string;
  title: string;
  category: string;
  unitCost: number;
  unitLabel: string;
  documentedProof: string;
  goalDescription: string;
  ctaLabel: string;
  campaignSlug: string;
}

export const ACTIVE_CAMPAIGN = {
  id: "mission-vidya-seva-2026",
  eyebrow: "Active Grassroots Drive · 2026–27 Cycle",
  title: "Mission Vidya & Seva: Empower Odisha’s Next Cohort",
  subtitle:
    "Following our documented Cohort 1 Merit Scholarships (6 scholars across Cuttack, Keonjhar, Jajpur & Nayagarh) and rural school kit distributions, we are raising direct community support for our upcoming cycle.",
  taxNote: "100% direct grassroots utilization · 50% tax deduction under Section 80G",
  initiatives: [
    {
      id: "school-kits",
      title: "Rural School Bag & Study Kit Drive",
      category: "01 · Rural Education",
      unitCost: 1000,
      unitLabel: "₹1,000 per student kit",
      documentedProof: "Documented distribution in rural Odisha schools",
      goalDescription:
        "Provide school bags, notebooks, and learning supplies to children in underserved villages so every child starts the term prepared.",
      ctaLabel: "Sponsor 1 School Kit (₹1,000)",
      campaignSlug: "school-kit",
    },
    {
      id: "merit-scholars",
      title: "Merit & Need Scholarship Fund (Cohort 2)",
      category: "02 · Higher Education",
      unitCost: 5000,
      unitLabel: "₹5,000 – ₹10,000 per scholar",
      documentedProof: "6 Cohort 1 scholars awarded & documented on-site",
      goalDescription:
        "Support promising students from low-income families across Odisha with college tuition, books, and academic expenses.",
      ctaLabel: "Support a Scholar (₹5,000)",
      campaignSlug: "scholar-support",
    },
    {
      id: "healthcare-care",
      title: "Patient Assistance & Rural Health Outreach",
      category: "03 · Healthcare & Seva",
      unitCost: 2500,
      unitLabel: "₹2,500 per outreach unit",
      documentedProof: "Active hospital bedside assistance & rural camps",
      goalDescription:
        "Stand beside patients and families in government hospitals with medicine support, nutrition, and village cleanliness drives.",
      ctaLabel: "Support Healthcare (₹2,500)",
      campaignSlug: "healthcare-outreach",
    },
  ] as CampaignInitiative[],
};

/**
 * Under Section 80G of the Indian Income Tax Act, eligible charitable donations
 * qualify for a 50% deduction from taxable income (subject to applicable regime & caps).
 * Cash donations above ₹2,000 are not eligible; digital UPI / bank transfers qualify.
 */
export function calculate80GDeduction(amount: number): {
  donatedAmount: number;
  eligibleDeduction: number;
  effectiveOutOfPocketAt30Bracket: number;
} {
  const cleanAmount = Math.max(0, Math.floor(amount || 0));
  const eligibleDeduction = Math.round(cleanAmount * 0.5);
  // Illustrative tax saved for a donor in the 30% bracket claiming 50% 80G deduction (~15% tax saved)
  const illustrativeTaxSaved = Math.round(eligibleDeduction * 0.3);
  return {
    donatedAmount: cleanAmount,
    eligibleDeduction,
    effectiveOutOfPocketAt30Bracket: Math.max(0, cleanAmount - illustrativeTaxSaved),
  };
}

export function getImpactForAmount(amount: number): {
  title: string;
  impact: string;
  upiNote: string;
} {
  if (!amount || amount <= 0) {
    return {
      title: "Custom Grassroots Contribution",
      impact:
        "100% of your contribution directly supports education, healthcare outreach, and community programs across Odisha.",
      upiNote: "Donation to SPPMT (80G Tax Benefit)",
    };
  }

  const exactTier = IMPACT_TIERS.find((t) => t.amount === amount);
  if (exactTier) {
    return {
      title: exactTier.title,
      impact: exactTier.impact,
      upiNote: exactTier.upiNote,
    };
  }

  if (amount < 1000) {
    return {
      title: "Student Learning Supplies",
      impact: `Provides essential notebooks, pens, and learning materials for rural students in Odisha.`,
      upiNote: "SPPMT Education Support (80G)",
    };
  }

  if (amount < 2500) {
    const kits = Math.max(1, Math.floor(amount / 1000));
    return {
      title: `${kits} Student School Kit${kits > 1 ? "s" : ""} & Supplies`,
      impact: `Equips ${kits} underprivileged student${kits > 1 ? "s" : ""} with school bags and study kits.`,
      upiNote: "SPPMT School Kit Drive (80G)",
    };
  }

  if (amount < 5000) {
    return {
      title: "Rural Education & Healthcare Outreach",
      impact: `Funds ${Math.floor(amount / 1000)} student school kits or supports patient assistance and village health outreach.`,
      upiNote: "SPPMT Healthcare & Education (80G)",
    };
  }

  const scholars = Math.max(1, Math.floor(amount / 5000));
  return {
    title:
      amount >= 10000
        ? `Major Scholar & Community Grant (${scholars} Scholar Units)`
        : "Merit & Need Scholar Sponsorship",
    impact: `Directly funds academic tuition, books, and learning kits for deserving students from low-income families across Odisha.`,
    upiNote: "SPPMT Scholar Sponsorship (80G)",
  };
}
