import Image from "next/image";
import Link from "next/link";

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
        {/* 80G donate callout — first fold */}
        <div className="relative">
          <div
            className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/40 via-gold/25 to-orange/35 opacity-80 blur-[1px]"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/12 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-gradient-to-r from-orange via-orange to-orange-dark px-4 sm:px-6 py-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-orange shadow-md">
                Section 80G
              </span>
              <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Tax benefits on donations
              </span>
            </div>
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-5 p-5 sm:p-6 items-center">
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-snug">
                  Support communities across Odisha
                </h2>
                <p className="text-white/75 text-sm mt-2 leading-relaxed max-w-2xl">
                  Your contribution funds education, healthcare, skill development,
                  agriculture, and civic sense programs. Eligible donations qualify
                  for tax deduction under Section 80G.
                </p>
              </div>
              <Link
                href="/donate"
                className="rounded-lg bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3 text-center text-sm sm:text-base shadow-lg shadow-orange/20 transition-colors lg:min-w-[200px]"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center text-center text-white pb-2">
          <Image
            src="/images/trust-logo-large.png"
            alt="Shri Prasanna Pattnaik Memorial Trust logo"
            width={88}
            height={88}
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
