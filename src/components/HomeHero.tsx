import Image from "next/image";
import Link from "next/link";
import { SCHOLARSHIP_NAME } from "@/lib/seo";

export default function HomeHero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      <Image
        src="/images/brahmani-bridge-odia.png"
        alt="Brahmani Setu bridge over the river in Dhenkanal"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/85" />

      <div className="relative z-10 flex flex-1 flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-[calc(4rem+1rem)] pb-5 sm:pb-6 lg:pb-8 gap-5 sm:gap-6">
        {/* Merit scholarship — glass banner, first fold */}
        <div className="relative group">
          <div
            className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/40 via-gold/30 to-orange/40 opacity-80 blur-[1px]"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/12 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            {/* High-contrast top ribbon */}
            <div className="relative flex flex-wrap items-center justify-between gap-2 bg-gradient-to-r from-orange via-orange to-orange-dark px-4 sm:px-6 py-3 sm:py-3.5">
              <span className="inline-flex items-center gap-2.5 rounded-md bg-white px-3 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-orange shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange" />
                </span>
                New Initiative
              </span>
              <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Merit Scholarship · Apply by 30 June
              </span>
            </div>

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 p-5 sm:p-6 lg:p-8 items-center bg-gradient-to-br from-white/5 via-transparent to-green/5">
              <div>
                <p className="inline-block rounded-md bg-cream px-3 py-1.5 text-green-dark text-xs sm:text-sm font-semibold uppercase tracking-wide mb-4 shadow-sm">
                  A new initiative by the trust
                </p>
                <h2 className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-white leading-snug tracking-tight">
                  {SCHOLARSHIP_NAME}
                </h2>
                <p className="text-white/75 text-sm sm:text-base mt-3 leading-relaxed max-w-2xl">
                  Supporting meritorious and financially deserving school and college
                  students across Odisha — our newest programme to carry forward
                  Shri Prasanna Pattnaik&apos;s commitment to education.
                </p>
                <p className="text-white/45 text-xs mt-4 tracking-wide">
                  Shri Prasanna Pattnaik Memorial Trust · Bhubaneswar, Odisha
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[240px]">
                <Link
                  href="/scholarship"
                  className="rounded-lg bg-orange/90 hover:bg-orange text-white font-semibold px-6 py-3 text-center text-sm sm:text-base shadow-lg shadow-orange/20 transition-all hover:shadow-orange/30 hover:-translate-y-0.5"
                >
                  Apply for Scholarship
                </Link>
                <a
                  href="/documents/scholarship-english.docx"
                  download
                  className="rounded-lg border border-white/35 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-2.5 text-center text-sm backdrop-blur-sm transition-colors"
                >
                  Download Application Form
                </a>
                <a
                  href="https://wa.me/919972366933"
                  className="text-center text-white/60 text-xs hover:text-gold transition-colors"
                >
                  Submit via WhatsApp · 99723 66933
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Compact trust intro */}
        <div className="flex flex-1 flex-col items-center justify-center text-center text-white pb-2">
          <Image
            src="/images/trust-logo-large.png"
            alt="Shri Prasanna Pattnaik Memorial Trust logo"
            width={80}
            height={80}
            className="mb-3 sm:mb-4 bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/15"
          />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
            Shri Prasanna Pattnaik
            <br />
            Memorial Trust
          </h1>
          <p className="text-sm sm:text-base text-white/85 italic max-w-xl">
            In Loving Memory of Shri Prasanna Pattnaik, A True Son of the Soil
          </p>
          <p className="text-xs sm:text-sm text-white/55 mt-2">
            Educate &bull; Empower &bull; Elevate &nbsp;|&nbsp; Estd. 2025 &nbsp;|&nbsp;
            Bhubaneswar, Odisha
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <Link
              href="/donate"
              className="rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-2.5 text-sm sm:text-base backdrop-blur-sm transition-colors"
            >
              Support Our Mission
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-white/30 text-white/90 hover:bg-white/10 font-semibold px-6 py-2.5 text-sm sm:text-base backdrop-blur-sm transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
