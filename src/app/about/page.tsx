import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Shri Prasanna Pattnaik Memorial Trust, established in 2025 in Bhubaneswar, Odisha. Dedicated to education, healthcare, agriculture, civic sense, and employment.",
};

const TRUSTEES = [
  {
    name: "Smt. Nalini Prabha Patnaik",
    role: "Managing Trustee",
    relation: "Wife of Late Shri Prasanna Pattnaik",
  },
  {
    name: "Smt. Barnali Patnaik",
    role: "Trustee",
    relation: "Daughter of Late Shri Prasanna Pattnaik",
  },
  {
    name: "Shri Debjeet Swain",
    role: "Trustee",
    relation: "Son-in-law of Late Shri Prasanna Pattnaik",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About the Trust"
        subtitle="Continuing a Legacy of Service"
        imageSrc="/images/community-gathering.png"
        imageAlt="Community gathering"
      />

      {/* Trust overview */}
      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src="/images/trust-logo-large.png"
                  alt="Shri Prasanna Pattnaik Memorial Trust logo"
                  width={280}
                  height={280}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-green mb-6">
                  Shri Prasanna Pattnaik Memorial Trust
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Established in 2025 and registered under the Indian Trusts Act
                  in Bhubaneswar (Khurda), the Shri Prasanna Pattnaik Memorial
                  Trust was created to honor and continue the development work
                  started by Shri Prasanna Pattnaik during his lifetime.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Based in Bhubaneswar, Odisha, the trust focuses on education,
                  healthcare, agriculture, civic sense, and employment
                  generation across India, starting from the communities that
                  Shri Pattnaik served for over five decades.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The trust is managed by a Board of Trustees comprising family
                  members and community leaders committed to realizing Shri
                  Pattnaik&apos;s vision of an empowered, educated, and healthy
                  rural Odisha.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Mission */}
      <AnimateOnScroll>
        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-orange/5 border-l-4 border-orange rounded-r-xl p-8">
              <h2 className="text-2xl font-bold text-orange mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To uplift communities across India through sustainable
                initiatives in education, healthcare, agriculture, civic sense,
                and employment; honoring the legacy of Shri Prasanna Pattnaik
                by starting from Odisha and expanding nationwide.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Trustees */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green mb-4">
            Board of Trustees
          </h2>
          <p className="text-center text-gray-500 mb-10">
            The Trust is governed by a dedicated Board committed to
            transparency, accountability, and service.
          </p>

          <div className="divide-y divide-gray-100">
            {TRUSTEES.map((trustee, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="flex items-center gap-5 py-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-green flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="font-semibold text-gray-800">
                        {trustee.name}
                      </h3>
                      <span className="inline-flex items-center text-xs font-semibold text-orange bg-orange/10 px-3 py-1 rounded-full w-fit">
                        {trustee.role}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {trustee.relation}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Registration details */}
      <AnimateOnScroll>
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-green mb-8">
              Registration Details
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {[
                ["Trust Name", "Shri Prasanna Pattnaik Memorial Trust"],
                ["Registration", "Registered under the Indian Trusts Act"],
                ["Registration Office", "Sub-Registrar, Khurda (Bhubaneswar)"],
                ["Registration Date", "13 October 2025"],
                ["Registered Office", "Bhubaneswar, Odisha"],
              ].map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex flex-col sm:flex-row px-6 py-4 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <span className="font-semibold text-green sm:w-48 shrink-0">
                    {label}
                  </span>
                  <span className="text-gray-600 mt-1 sm:mt-0">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA */}
      <AnimateOnScroll>
        <section className="py-16 bg-green-light text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-green mb-4">
              Join Us in Building Shri Pattnaik&apos;s Vision
            </h2>
            <p className="text-gray-600 mb-8">
              Your support enables education, healthcare, and development for
              communities across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Reach Out to Us
              </Link>
              <Link
                href="/programs"
                className="bg-green hover:bg-green-dark text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                View Our Programs
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
