import Image from "next/image";
import BackNav from "@/components/BackNav";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function PageBanner({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: PageBannerProps) {
  if (!imageSrc) {
    return (
      <section className="bg-green pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackNav variant="light" className="mb-8" />
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[320px] sm:h-[380px] flex items-end overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt ?? title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 w-full pt-24 pb-10 sm:pt-28 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackNav variant="light" className="mb-6" />
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
