import Image from "next/image";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PageBanner({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: PageBannerProps) {
  return (
    <section className="relative h-[320px] sm:h-[380px] flex items-center justify-center overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
