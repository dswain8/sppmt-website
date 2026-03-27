import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HisWorkTabs from "@/components/HisWorkTabs";

export const metadata: Metadata = {
  title: "About Shri Prasanna Pattnaik",
  description:
    "Tribute to Shri Prasanna Pattnaik (1948-2025), the first BJP MLA of Odisha, three-time legislator from Kamakhyanagar, and founder of schools and colleges in Odisha.",
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
      <PageBanner
        title="Shri Prasanna Pattnaik"
        subtitle="1 June 1948 — 30 May 2025 · A True Son of the Soil"
        imageSrc="/images/prasanna-patnaik-memorial-portrait.png"
        imageAlt="Shri Prasanna Pattnaik memorial portrait"
      />

      {/* Portrait */}
      <AnimateOnScroll>
        <section className="py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="inline-block p-1.5 border-2 border-gold rounded-lg shadow-lg">
              <Image
                src="/images/prasanna-patnaik-bw-portrait.png"
                alt="Shri Prasanna Pattnaik"
                width={200}
                height={240}
                className="rounded"
              />
            </div>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Social Worker &nbsp;|&nbsp; Legislator &nbsp;|&nbsp; First BJP MLA of Odisha &nbsp;|&nbsp; Founder of Schools &amp; Colleges in Odisha
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Early life */}
      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-green mb-6">Early Life</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Prasanna Pattnaik was born on 1 June 1948 in the village of
              Bhuban, in Dhenkanal District of Odisha. Son of Narayana Pattnaik,
              his passion for public service ignited during his student years
              when he joined the historic student movement of 1964 in Odisha. He
              went on to join the Swatantra Party under Chief Minister R.N.
              Singhdeo, serving as President of the Yuva Swatantra Party for
              Dhenkanal District.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green mb-12">
            A Life in Public Service
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-green" />

            {TIMELINE.map((item, i) => (
              <AnimateOnScroll
                key={item.year}
                animation={i % 2 === 0 ? "slide-right" : "slide-left"}
                delay={i * 80}
              >
                <div
                  className={`relative flex items-start mb-10 ${
                    i % 2 === 0
                      ? "sm:flex-row-reverse sm:text-right"
                      : "sm:flex-row"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange border-4 border-white shadow z-10 mt-1.5" />

                  {/* Content */}
                  <div
                    className={`ml-14 sm:ml-0 sm:w-[45%] ${
                      i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                    }`}
                  >
                    <span className="inline-block text-sm font-bold text-orange bg-orange/10 px-3 py-1 rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green mb-12">
            Legacy Beyond Politics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEGACY_CARDS.map((card, i) => (
              <AnimateOnScroll key={card.title} delay={i * 120}>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white border border-gray-100">
                  <div className="relative h-48">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-green mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <AnimateOnScroll>
        <section className="py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-l-4 border-gold pl-6 py-2">
              <p className="text-xl text-gray-700 italic leading-relaxed">
                &ldquo;He was not merely a politician; he was a builder of
                institutions, a champion of the forgotten, and a leader who
                believed that true public service means transforming lives at
                the grassroots.&rdquo;
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* His Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-center text-green mb-3">
              His Work
            </h2>
            <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
              A lifetime of building institutions, founding healthcare centres,
              empowering farmers, and transforming rural communities across
              Odisha.
            </p>
          </AnimateOnScroll>
          <HisWorkTabs />
        </div>
      </section>

      {/* Trust connection */}
      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-green mb-6">
              The Trust That Carries His Name
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              The Shri Prasanna Pattnaik Memorial Trust was established in 2025
              by his family to perpetuate his lifelong commitment to education,
              healthcare, community development, and infrastructure in Odisha.
              The trust works in the same villages and communities
              that Shri Pattnaik served for over five decades.
            </p>
            <Link
              href="/about"
              className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors inline-block"
            >
              Learn About the Trust
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
