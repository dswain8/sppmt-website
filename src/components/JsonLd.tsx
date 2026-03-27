const SITE_URL = "https://sppmt.org";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${SITE_URL}/#organization`,
  name: "Shri Prasanna Pattnaik Memorial Trust",
  alternateName: ["SPPMT", "Prasanna Pattnaik Memorial Trust", "Prasanna Pattnaik Trust"],
  url: SITE_URL,
  logo: `${SITE_URL}/images/trust-logo-large.png`,
  image: `${SITE_URL}/images/trust-logo-large.png`,
  description:
    "The Shri Prasanna Pattnaik Memorial Trust (SPPMT) was established in 2025 in Bhubaneswar, Odisha, to carry forward the lifelong vision of Shri Prasanna Pattnaik (1948-2025), the first BJP MLA of Odisha. The trust works in education, healthcare, agriculture, civic sense, and employment.",
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
  ],
  email: "prasannapattnaiktrust@gmail.com",
  sameAs: [
    "https://www.instagram.com/prasannapattnaiktrust",
  ],
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
    "Education in Odisha",
    "Healthcare in rural India",
    "Agriculture development",
    "Civic engagement",
    "Employment and vocational training",
    "Community development in Dhenkanal district",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Shri Prasanna Pattnaik Memorial Trust",
  alternateName: "SPPMT",
  description:
    "Official website of the Shri Prasanna Pattnaik Memorial Trust (SPPMT), honoring the legacy of the first BJP MLA of Odisha through education, healthcare, and community development.",
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
  alternateName: ["Prasanna Pattnaik", "Prasanna Patnaik"],
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
    "Shri Prasanna Pattnaik (1948-2025) was a social worker, legislator, and the first BJP MLA of Odisha. A three-time MLA from Kamakhyanagar, he was detained under MISA during the Emergency. He founded schools, colleges, healthcare centres, and a blood bank across Dhenkanal district, Odisha.",
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
