import {
  ORGANIZATION_ALTERNATE_NAMES,
  PERSON_ALTERNATE_NAMES,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ORGANIZATION_ALTERNATE_NAMES,
  url: SITE_URL,
  logo: `${SITE_URL}/images/trust-logo-large.png`,
  image: `${SITE_URL}/images/trust-logo-large.png`,
  description:
    "The Sri Prasanna Patnaik Memorial Trust (Prasanna Patnaik Trust / SPPMT) was established in 2025 in Bhubaneswar, Odisha, to carry forward the lifelong vision of Shri Prasanna Pattnaik (1948–2025). The trust accepts donations eligible for tax deduction under Section 80G and works in education, healthcare, skill development, agriculture, and civic sense.",
  foundingDate: "2025-10-13",
  taxID: "ABNTS3218C",
  identifier: [
    {
      "@type": "PropertyValue",
      name: "Section 80G Registration URN",
      value: "ABNTS3218CE20261",
    },
    {
      "@type": "PropertyValue",
      name: "Income Tax PAN",
      value: "ABNTS3218C",
    },
  ],
  foundingLocation: {
    "@type": "Place",
    name: "Bhubaneswar, Odisha, India",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      addressCountry: "IN",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9972366933",
      contactType: "general",
      availableLanguage: ["English", "Hindi", "Odia"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9178256179",
      contactType: "general",
      availableLanguage: ["English", "Hindi", "Odia"],
    },
  ],
  email: "prasannapattnaiktrust@gmail.com",
  sameAs: ["https://www.instagram.com/prasannapattnaiktrust"],
  areaServed: [
    {
      "@type": "Place",
      name: "Odisha, India",
    },
    {
      "@type": "Place",
      name: "India",
    },
  ],
  knowsAbout: [
    "Shri Prasanna Pattnaik",
    "First BJP MLA of Odisha",
    "Kamakhyanagar constituency",
    "Bhuban, Dhenkanal",
    "Section 80G tax deduction",
    "80G donation receipts",
    "Healthcare in Odisha",
    "Education scholarships and school kit distribution in Odisha",
    "Skill development and livelihood",
    "Agriculture in Odisha",
    "Civic sense and environmental cleanliness",
  ],
  potentialAction: {
    "@type": "DonateAction",
    target: `${SITE_URL}/donate`,
    name: "Donate to SPPMT (Section 80G Tax Exemption)",
    description:
      "Support educational scholarships, school supplies, healthcare outreach, and rural initiatives across Odisha with 50% Section 80G tax deduction.",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: ORGANIZATION_ALTERNATE_NAMES,
  description:
    "Official website of the Shri Prasanna Pattnaik Memorial Trust (Prasanna Patnaik Trust). Donations eligible under Section 80G and community programs across Odisha.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en-IN",
};

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#founder`,
  name: "Shri Prasanna Pattnaik",
  alternateName: PERSON_ALTERNATE_NAMES,
  birthDate: "1948-06-01",
  deathDate: "2025-05-30",
  birthPlace: {
    "@type": "Place",
    name: "Bhuban, Dhenkanal, Odisha, India",
  },
  nationality: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Shri Prasanna Patnaik (1948–2025), also known as Prasanna Patnaik, was a social worker, legislator, and the first BJP MLA of Odisha. A three-time MLA from Kamakhyanagar, he founded schools, colleges, healthcare centres, and a blood bank across Dhenkanal district. The Shri Prasanna Pattnaik Memorial Trust honors his legacy.",
  jobTitle: "Social Worker and Legislator",
  knowsAbout: [
    "Education in Odisha",
    "Public service",
    "Healthcare development",
    "Community infrastructure",
    "Odisha politics",
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Bharatiya Janata Party",
      alternateName: "BJP",
    },
  ],
  image: `${SITE_URL}/images/prasanna-patnaik-bw-portrait.png`,
  sameAs: [],
  mainEntityOfPage: `${SITE_URL}/founder`,
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(founderSchema),
        }}
      />
    </>
  );
}
