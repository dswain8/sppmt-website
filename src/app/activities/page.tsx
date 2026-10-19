import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ACTIVITY_AREAS } from "@/lib/activities";

export const metadata: Metadata = {
  title: "Our Activities",
  description:
    "Explore the four initiative areas of Sri Prasanna Pattnaik Memorial Trust — education, cleanliness drives, livelihood, and healthcare across Odisha.",
  keywords: [
    "Odisha NGO",
    "Community Development Odisha",
    "Tree Plantation Odisha",
    "Educational Support Odisha",
  ],
};

export default function ActivitiesPage() {
  return (
    <>
      <PageBanner
        title="Our Activities"
        subtitle="Four pillars of community impact in Odisha"
        imageSrc="/images/community-gathering.png"
        imageAlt="Trust activities across Odisha"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="max-w-3xl text-gray-600 text-lg leading-relaxed mb-14">
              The Sri Prasanna Pattnaik Memorial Trust works across four initiative areas,
              building on the legacy of Shri Prasanna Pattnaik to serve communities across Odisha.
            </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {ACTIVITY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/activities/${area.slug}`}
                className="group block"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={area.bannerImage}
                    alt={area.bannerAlt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h2 className="mt-4 font-serif text-2xl text-green-dark group-hover:text-orange transition-colors">
                  {area.title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
                <span className="inline-block mt-3 text-orange font-semibold text-sm">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
