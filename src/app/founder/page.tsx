import type { Metadata } from "next";
import Link from "next/link";
import HisWorkTabs from "@/components/HisWorkTabs";

export const metadata: Metadata = {
  title: "Shri Prasanna Patnaik | Our Inspiration",
  description:
    "Biography of Shri Prasanna Patnaik (1948–2025) — social worker, first BJP MLA of Odisha, founder of schools, colleges, and healthcare centres. Honored by the Shri Prasanna Pattnaik Memorial Trust.",
  keywords: [
    "Sri Prasanna Patnaik",
    "Shri Prasanna Patnaik",
    "Prasanna Patnaik",
    "Prasanna Pattnaik",
    "first BJP MLA Odisha",
    "Kamakhyanagar MLA",
    "Dhenkanal",
  ],
  alternates: {
    canonical: "https://sppmt.org/founder",
  },
};

const TIMELINE = [
  {
    year: "1948",
    title: "Born in Bhuban",
    description:
      "Prasanna Pattnaik was born on 1 June 1948 in the village of Bhuban, Dhenkanal District, Odisha. Son of Narayana Pattnaik.",
  },
  {
    year: "1964",
    title: "Student leader",
    description:
      "Began political career in Odisha's historic student movement of 1964. Joined the Swatantra Party under Chief Minister R.N. Singhdeo, serving as President of the Yuva Swatantra Party for Dhenkanal District.",
  },
  {
    year: "1975",
    title: "JP Movement",
    description:
      "Joined the JP Movement led by Jayaprakash Narayan. Detained under MISA for 18 months in Dhenkanal and Palahara Jail.",
  },
  {
    year: "1977",
    title: "Youngest MLA in Odisha",
    description:
      "Elected to the Odisha Legislative Assembly from Kamakhyanagar on a Janata Party ticket at age 28, becoming the youngest MLA in Odisha's history; a record that still stands.",
  },
  {
    year: "1980",
    title: "BJP national executive",
    description:
      "Became National Executive Member of the newly formed BJP under Atal Bihari Vajpayee. Appointed General Secretary of the BJP Odisha Unit.",
  },
  {
    year: "1985",
    title: "First BJP MLA of Odisha",
    description:
      "Won from Kamakhyanagar on a BJP ticket, becoming the first BJP MLA of Odisha; the only BJP representative in the entire state assembly. Recognized by the Speaker as Leader of the BJP and the Opposition.",
  },
  {
    year: "1990",
    title: "Third election victory",
    description:
      "Elected for the third time from Kamakhyanagar on a Janata Dal ticket under Biju Patnaik's leadership.",
  },
  {
    year: "Post-1995",
    title: "Education pioneer",
    description:
      "Dedicated himself to social work and development. Founded multiple schools and colleges in Bhuban and Kamakhyanagar, transforming the education landscape of Dhenkanal district.",
  },
  {
    year: "2014",
    title: "Return to active politics",
    description:
      "Re-joined the BJP with wife Nalini Prabha Pattnaik, helping the party gain 8.18% more votes in Kamakhyanagar.",
  },
  {
    year: "2025",
    title: "A legacy remembered",
    description:
      "Passed away on 30 May 2025 in Bhubaneswar at age 76, leaving behind a legacy of schools, colleges, healthcare centres, a blood bank, and bridges that transformed Odisha.",
  },
];

const LEGACY_CARDS = [
  {
    title: "Education pioneer",
    image: "/images/school-gate-kamakhyanagar.png",
    description:
      "Founded multiple schools and colleges in Bhuban and Kamakhyanagar including vocational training centers, e-libraries, and high schools that continue to serve thousands of students.",
  },
  {
    title: "Healthcare founder",
    image: "/images/blood-bank-bhuban.png",
    description:
      "Founded healthcare centres and a blood bank in Bhuban, ensuring rural communities had access to medical care and life-saving blood supplies.",
  },
  {
    title: "Bridge builder",
    image: "/images/brahmani-bridge-aerial.png",
    description:
      "Built the Brahmani Setu bridge and other critical infrastructure, connecting communities across Dhenkanal district and transforming rural life.",
  },
];


export default function FounderPage() {
  return (
    <>
      <header className="page-head shell story-page-head">
        <div className="eyebrow with-line">Our story</div>
        <h1>
          A life spent
          <br />
          <em>in service.</em>
        </h1>
        <p>
          Shri Prasanna Pattnaik (1948–2025) believed in the power of
          institutions, public service and opportunity.
        </p>
      </header>
      <section className="shell story-hero">
        <div className="photo story-page-portrait loaded">
          <img
            src="/images/prasanna-patnaik-bw-portrait.png"
            alt="Shri Prasanna Pattnaik"
          />
        </div>
        <div className="story-hero-copy">
          <div className="eyebrow">Rooted in Bhuban</div>
          <h2>Born in Bhuban. Remembered across Odisha.</h2>
          <p>
            Born on 1 June 1948 in the village of Bhuban, Dhenkanal District,
            son of Narayana Pattnaik. He devoted his public life to expanding
            opportunity and strengthening local institutions. The memorial
            trust was formed in 2025 by his family.
          </p>
          <div className="little-rule" />
          <p className="story-quote">
            “He was not merely a politician; he was a builder of institutions,
            a champion of the forgotten, and a leader who believed that true
            public service means transforming lives at the grassroots.”
          </p>
          <small>From the trust’s published remembrance.</small>
        </div>
      </section>
      <section className="years-section shell">
        <div className="eyebrow">A life in public service</div>
        <h2>The moments that shaped the work.</h2>
        <div className="years-grid">
          {TIMELINE.map((item) => (
            <div key={item.year + item.title}>
              <strong>{item.year}</strong>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="story-institutions">
        <div className="shell story-institutions-grid">
          <div className="photo bridge-photo loaded">
            <img
              src="/images/brahmani-bridge-1.png"
              alt="Brahmani Setu bridge over the river in Dhenkanal"
            />
          </div>
          <div>
            <div className="eyebrow">What he built</div>
            <h2>Buildings, bridges, and institutions.</h2>
            <p>
              The trust’s published history attributes schools, health centres,
              a blood bank and the Brahmani bridge to his development work.
              These historic contributions belong to his lifetime. The trust,
              established in 2025, carries that commitment forward.
            </p>
            <Link className="under-link" href="/activities">
              See the trust’s work <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="notes-grid">
          {LEGACY_CARDS.map((card) => (
            <article key={card.title} className="note-card">
              <div className="photo note-photo loaded">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="note-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <HisWorkTabs />
        </div>
      </section>
    </>
  );
}
