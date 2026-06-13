import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ImageCarousel from "@/components/ImageCarousel";
import HomeHero from "@/components/HomeHero";
import { FOCUS_AREAS } from "@/lib/focus-areas";
import { SCHOLARSHIP_NAME, SEO_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_NAME} | ${SCHOLARSHIP_NAME}`,
  description:
    "Official website of the Shri Prasanna Pattnaik Memorial Trust (Prasanna Patnaik Trust). Apply for the Shri Prasanna Pattnaik Merit Scholarship for meritorious school and college students across Odisha.",
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} | ${SCHOLARSHIP_NAME}`,
    description:
      "Honoring Shri Prasanna Pattnaik. Apply for the Prasanna Patnaik Merit Scholarship. Education, healthcare, skill development, agriculture, and civic sense across Odisha.",
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Founder tribute */}
      <AnimateOnScroll>
        <section className="bg-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0">
                <Image
                  src="/images/prasanna-patnaik-bw-portrait.png"
                  alt="Shri Prasanna Pattnaik portrait"
                  width={100}
                  height={120}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Honoring the legacy of{" "}
                  <strong>Shri Prasanna Pattnaik (1948&ndash;2025)</strong>, a
                  MISA detainee, the first BJP MLA of Odisha, and a social worker
                  who dedicated his life to founding schools, colleges, healthcare
                  centres, a blood bank, and building bridges across Odisha.
                </p>
                <Link
                  href="/founder"
                  className="inline-block mt-3 text-orange font-semibold hover:text-orange-dark transition-colors"
                >
                  Read His Story &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Mission */}
      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-green mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To honor and advance the legacy of Shri Prasanna Pattnaik by serving
              communities across Odisha through education, healthcare, skill
              development, agriculture, and civic sense.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Five initiative areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green mb-4">
            Our Focus Areas
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Five pillars of community impact, building on the institutions and
            values that Shri Prasanna Pattnaik established.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {FOCUS_AREAS.map((area, i) => (
              <AnimateOnScroll key={area.slug} delay={i * 80}>
                <Link
                  href={area.href}
                  className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow h-full"
                >
                  <div className="relative h-44">
                    <Image
                      src={area.bannerImage}
                      alt={area.bannerAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-2xl">{area.icon}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-green mb-2 group-hover:text-orange transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {area.description}
                    </p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/activities"
              className="bg-green hover:bg-green-dark text-white font-semibold px-8 py-3 rounded-md transition-colors inline-block"
            >
              View All Activities
            </Link>
          </div>
        </div>
      </section>

      {/* Recent activities preview */}
      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-green mb-6">
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
                    "Education support & scholarship programs",
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
      </AnimateOnScroll>

      {/* Scholarship CTA */}
      <AnimateOnScroll>
        <section className="py-16 bg-cream border-y border-orange/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-orange font-semibold text-sm uppercase tracking-wide mb-2">
              Now Accepting Applications
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-green mb-4">
              {SCHOLARSHIP_NAME}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Prasanna Patnaik Merit Scholarship supports deserving students
              across Odisha. Download the form, fill it in, and submit via
              WhatsApp before 30 June.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scholarship"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Scholarship Details &amp; Apply
              </Link>
              <a
                href="https://wa.me/919972366933"
                className="border-2 border-green text-green hover:bg-green-light font-semibold px-8 py-3 rounded-md transition-colors"
              >
                WhatsApp: 99723 66933
              </a>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Donation CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/activities/DSC09450.jpg"
          alt="Students with educational kits"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Help Us Continue His Legacy
            </h2>
            <p className="text-white/80 mb-8">
              Your donation supports education, healthcare, skill development,
              agriculture, and civic sense programs across Odisha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors text-lg"
              >
                Donate Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-md transition-colors text-lg"
              >
                Contact Us
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact strip */}
      <AnimateOnScroll>
        <section className="py-12 bg-green-light">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-green mb-4">Get in Touch</h2>
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
      </AnimateOnScroll>
    </>
  );
}
