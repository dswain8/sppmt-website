import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
      <Image
        src="/images/brahmani-bridge-1.png"
        alt="Brahmani Setu bridge over the river in Dhenkanal"
        fill
        className="object-cover object-[center_70%]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pb-16">
        <p className="text-white/80 text-sm tracking-[0.18em] uppercase mb-4">
          1948 — 2025
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium text-white leading-[1.02] max-w-4xl">
          Shri Prasanna Pattnaik
          <span className="block">Memorial Trust</span>
        </h1>
        <p className="mt-5 max-w-xl text-base sm:text-lg text-white/90 italic font-serif">
          In Loving Memory of Shri Prasanna Pattnaik, A True Son of the Soil
        </p>
        <p className="mt-4 text-xs sm:text-sm tracking-[0.16em] uppercase text-white/70">
          Educate · Empower · Elevate
          <span className="mx-2 text-white/30">/</span>
          Estd. 2025
          <span className="mx-2 text-white/30">/</span>
          Bhubaneswar, Odisha
        </p>
        <p className="mt-6 max-w-xl text-sm sm:text-base text-white/80 leading-relaxed">
          Your contribution funds education, healthcare, skill development,
          agriculture, and civic sense programs. Eligible donations qualify
          for tax deduction under Section 80G.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white font-semibold px-7 py-3 text-sm sm:text-base transition-colors"
          >
            Donate Now
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center border border-white/50 text-white hover:bg-white/10 font-semibold px-7 py-3 text-sm sm:text-base transition-colors"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
