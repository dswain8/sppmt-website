import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      <Image
        src="/images/brahmani-bridge-1.png"
        alt="Brahmani Setu bridge over the river in Dhenkanal"
        fill
        className="object-cover object-bottom"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pb-20">
        <p className="text-white text-sm tracking-[0.18em] uppercase mb-4">
          1948 — 2025 · Bhubaneswar, Odisha
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium text-white leading-[1.02] max-w-3xl">
          Shri Prasanna Pattnaik
          <span className="block">Memorial Trust</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg sm:text-xl text-white italic font-serif">
          In Loving Memory of Shri Prasanna Pattnaik, A True Son of the Soil
        </p>
        <p className="mt-4 text-sm tracking-[0.14em] uppercase text-white/85">
          Educate · Empower · Elevate
        </p>
        <p className="mt-3 text-sm text-white/90">
          Education, healthcare, skill development, agriculture, and civic sense
          across Odisha. Eligible donations qualify for tax deduction under
          Section 80G.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white font-semibold px-7 py-3 text-sm sm:text-base transition-colors"
          >
            Donate Now
          </Link>
          <Link
            href="/about"
            className="text-white font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-white"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
