import Image from "next/image";
import BackNav from "@/components/BackNav";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function PageBanner({
  title,
  subtitle,
  eyebrow = "Shri Prasanna Pattnaik Memorial Trust",
  imageSrc,
  imageAlt,
}: PageBannerProps) {
  if (!imageSrc) {
    return (
      <section className="bg-cream pt-28 pb-14 sm:pt-32 sm:pb-16 border-b border-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackNav variant="dark" className="mb-8" />
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold mb-3">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-green-dark leading-[1.05] max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[20rem] sm:min-h-[24rem] flex items-end overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt ?? title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35" />
      <div className="relative z-10 w-full pt-28 pb-10 sm:pt-32 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackNav variant="light" className="mb-8" />
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/80 font-semibold mb-3">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.05] max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
