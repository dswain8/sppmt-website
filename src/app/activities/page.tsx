import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
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
        imageSrc="/images/activities/File_009.jpg"
        imageAlt="Trust activities across Odisha"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
              The Sri Prasanna Pattnaik Memorial Trust works across four initiative areas,
              building on the legacy of Shri Prasanna Pattnaik to serve communities across Odisha.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACTIVITY_AREAS.map((area, i) => (
              <AnimateOnScroll key={area.slug} delay={i * 100}>
                <Link
                  href={`/activities/${area.slug}`}
                  className="group block bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={area.bannerImage}
                      alt={area.bannerAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-2xl">{area.icon}</span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-green mb-2 group-hover:text-orange transition-colors">
                      {area.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {area.description}
                    </p>
                    <span className="inline-block mt-4 text-orange font-semibold text-sm">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
