import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";
import HomeHero from "@/components/HomeHero";
import { FOCUS_AREAS } from "@/lib/focus-areas";
import { SEO_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: SITE_NAME,
  description:
    "Official website of the Shri Prasanna Pattnaik Memorial Trust (Prasanna Patnaik Trust). Donations eligible for tax deduction under Section 80G. Education, healthcare, skill development, agriculture, and civic sense across Odisha.",
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "Honoring Shri Prasanna Pattnaik. Donate with Section 80G tax benefits. Education, healthcare, skill development, agriculture, and civic sense across Odisha.",
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(16rem,22rem)_1fr] gap-8 md:gap-16 items-end">
            <Image
              src="/images/prasanna-patnaik-bw-portrait.png"
              alt="Shri Prasanna Pattnaik portrait"
              width={640}
              height={768}
              className="w-full h-auto border border-black/15 bg-white"
            />
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold mb-4">
                Our Inspiration
              </p>
              <p className="font-serif text-2xl sm:text-3xl text-green-dark leading-snug">
                Honoring the legacy of Shri Prasanna Pattnaik (1948&ndash;2025), a
                MISA detainee, the first BJP MLA of Odisha, and a social worker
                who dedicated his life to founding schools, colleges, healthcare
                centres, a blood bank, and building bridges across Odisha.
              </p>
              <Link
                href="/founder"
                className="inline-block mt-6 text-orange font-semibold hover:text-orange-dark transition-colors"
              >
                Read His Story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold mb-5">
            Our Mission
          </h2>
          <p className="font-serif text-2xl sm:text-4xl text-green-dark leading-snug">
            To honor and advance the legacy of Shri Prasanna Pattnaik by serving
            communities across Odisha through education, healthcare, skill
            development, agriculture, and civic sense.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-green-dark">
            Our Focus Areas
          </h2>
          <p className="mt-3 mb-12 max-w-2xl text-gray-600 leading-relaxed">
            Five pillars of community impact, building on the institutions and
            values that Shri Prasanna Pattnaik established.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {FOCUS_AREAS.map((area) => (
              <Link key={area.slug} href={area.href} className="group block">
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={area.bannerImage}
                    alt={area.bannerAlt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-green-dark group-hover:text-orange transition-colors">
                  {area.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/activities"
            className="inline-block mt-12 text-orange font-semibold hover:text-orange-dark transition-colors"
          >
            View All Activities &rarr;
          </Link>
        </div>
      </section>

      {/* Recent activities preview */}
      <section className="py-16 sm:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-green-dark mb-6">
                  Recent Activities
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  From educational kit distributions and healthcare outreach to
                  skill development training, agricultural support, and civic
                  sense drives — the trust is actively serving communities
                  across Odisha.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Educational kit distribution & student support",
                    "Healthcare & patient assistance",
                    "Skill development & livelihood training",
                    "Agricultural support for rural farmers",
                    "Cleanliness drives & civic awareness",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/gallery"
                  className="text-orange font-semibold hover:text-orange-dark transition-colors"
                >
                  View Gallery &rarr;
                </Link>
              </div>
              <ImageCarousel />
            </div>
          </div>
      </section>

      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image
          src="/images/activities/DSC09450.jpg"
          alt="Students with educational kits"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold mb-4">
            Section 80G · Tax benefits on donations
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium max-w-xl leading-tight">
            Help Us Continue His Legacy
          </h2>
          <p className="text-white/85 max-w-xl mt-5 mb-8 leading-relaxed">
            Your donation supports education, healthcare, skill development,
            agriculture, and civic sense programs across Odisha. Eligible
            contributions qualify for tax deduction under Section 80G.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white font-semibold px-7 py-3 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-3 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-green-dark mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              <a href="mailto:prasannapattnaiktrust@gmail.com" className="text-orange hover:underline">
                prasannapattnaiktrust@gmail.com
              </a>
              {" · "}
              <a href="tel:+919439725460" className="text-orange hover:underline">
                +91 9439725460
              </a>
            </p>
            <Link
              href="/contact"
              className="text-green font-semibold hover:text-orange transition-colors"
            >
              Contact Us &rarr;
            </Link>
        </div>
      </section>
    </>
  );
}
