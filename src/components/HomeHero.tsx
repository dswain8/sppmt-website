import Image from "next/image";
import Link from "next/link";
import { DONATIONS_ENABLED } from "@/lib/donation";

export default function HomeHero() {
  return (
    <section className="bg-cream pt-[4.25rem]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 lg:min-h-[calc(100dvh-4.25rem)]">
        <div className="flex flex-col justify-end px-4 sm:px-6 lg:px-8 py-12 sm:py-16 order-last lg:order-first">
          <p className="text-gold text-sm tracking-[0.18em] uppercase mb-4">
            1948 — 2025 · Bhubaneswar, Odisha
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-green-dark leading-[1.02]">
            Shri Prasanna Pattnaik
            <span className="block">Memorial Trust</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg sm:text-xl text-green-dark italic font-serif text-balance">
            In Loving Memory of Shri Prasanna Pattnaik, A True Son of the Soil
          </p>
          <p className="mt-4 text-sm tracking-[0.14em] uppercase text-orange">
            Educate · Empower · Elevate
          </p>
          <p className="mt-4 max-w-md text-sm sm:text-base text-gray-700 leading-relaxed">
            Education, healthcare, skill development, agriculture, and civic
            sense across Odisha.
          </p>
          <p className="mt-2 max-w-md text-sm sm:text-base text-gray-700 leading-relaxed">
            Eligible donations qualify for tax deduction under Section 80G.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
            {DONATIONS_ENABLED ? (
              <Link
                href="/donate"
                className="inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white font-semibold px-7 py-3 text-sm sm:text-base transition-colors"
              >
                Donate Now
              </Link>
            ) : (
              <Link
                href="/activities"
                className="inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white font-semibold px-7 py-3 text-sm sm:text-base transition-colors"
              >
                Explore Our Programs
              </Link>
            )}
            <Link
              href="/about"
              className="text-green-dark font-semibold underline underline-offset-4 decoration-green/30 hover:decoration-green-dark"
            >
              Learn About Us
            </Link>
          </div>
        </div>
        <div className="flex items-end justify-center bg-cream order-first lg:order-last lg:items-stretch">
          <Image
            src="/images/prasanna-patnaik-bw-portrait.png"
            alt="Shri Prasanna Pattnaik"
            width={800}
            height={960}
            className="w-auto max-h-[58vh] lg:max-h-[calc(100dvh-4.25rem)] lg:w-full lg:object-cover lg:object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
