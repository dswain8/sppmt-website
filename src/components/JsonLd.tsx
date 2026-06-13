import {
  ORGANIZATION_ALTERNATE_NAMES,
  PERSON_ALTERNATE_NAMES,
  SCHOLARSHIP_NAME,
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
    "The Sri Prasanna Patnaik Memorial Trust (Prasanna Patnaik Trust / SPPMT) was established in 2025 in Bhubaneswar, Odisha, to carry forward the lifelong vision of Shri Prasanna Pattnaik (1948–2025). The trust runs the Shri Prasanna Pattnaik Merit Scholarship and works in education, healthcare, skill development, agriculture, and civic sense.",
  foundingDate: "2025",
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
      telephone: "+91-9439725460",
      contactType: "general",
      availableLanguage: ["English", "Hindi", "Odia"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9178256179",
      contactType: "general",
      availableLanguage: ["English", "Hindi", "Odia"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9972366933",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi", "Odia"],
      description: "Scholarship applications via WhatsApp",
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
    "Shri Prasanna Pattnaik Merit Scholarship",
    "Sri Prasanna Patnaik Merit Scholarship",
    "Prasanna Patnaik Merit Scholarship",
    "Healthcare in Odisha",
    "Education and scholarships in Odisha",
    "Skill development and livelihood",
    "Agriculture in Odisha",
    "Civic sense and environment",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: ORGANIZATION_ALTERNATE_NAMES,
  description:
    "Official website of the Shri Prasanna Pattnaik Memorial Trust (Prasanna Patnaik Trust). Home of the Shri Prasanna Pattnaik Merit Scholarship and community programs across Odisha.",
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
    "Shri Prasanna Patnaik (1948–2025), also known as Prasanna Patnaik, was a social worker, legislator, and the first BJP MLA of Odisha. A three-time MLA from Kamakhyanagar, he founded schools, colleges, healthcare centres, and a blood bank across Dhenkanal district. The Shri Prasanna Patnaik Memorial Trust honors his legacy.",
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

const scholarshipSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "@id": `${SITE_URL}/scholarship#program`,
  name: SCHOLARSHIP_NAME,
  alternateName: [
    "Prasanna Patnaik Merit Scholarship",
    "Prasanna Pattnaik Merit Scholarship",
    "Sri Prasanna Patnaik Merit Scholarship",
    "SPPMT Merit Scholarship",
  ],
  description:
    "Merit and need-based scholarship for school and college students across Odisha, offered by the Shri Prasanna Patnaik Memorial Trust. Applications accepted until 30 June each year.",
  url: `${SITE_URL}/scholarship`,
  provider: {
    "@id": `${SITE_URL}/#organization`,
  },
  occupationalCategory: "Student scholarship",
  educationalProgramMode: "full-time",
  applicationDeadline: "2026-06-30",
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/scholarship`,
    eligibleRegion: {
      "@type": "Place",
      name: "Odisha, India",
    },
    availability: "https://schema.org/InStock",
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(scholarshipSchema),
        }}
      />
    </>
  );
}
