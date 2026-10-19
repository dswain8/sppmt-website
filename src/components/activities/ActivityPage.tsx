import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ActivityGallery from "@/components/activities/ActivityGallery";
import { EDUCATION_KIT_SECTION, type ActivityArea } from "@/lib/activities";

interface ActivityPageProps {
  activity: ActivityArea;
}

export default function ActivityPage({ activity }: ActivityPageProps) {
  return (
    <>
      <PageBanner
        title={activity.title}
        subtitle="Sri Prasanna Pattnaik Memorial Trust"
        imageSrc={activity.bannerImage}
        imageAlt={activity.bannerAlt}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-serif text-2xl sm:text-3xl text-green-dark leading-snug">
            {activity.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-green-dark mb-10">
            What We Do
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
            {activity.examples.map((example) => (
              <li key={example} className="border-t border-green/15 pt-4 text-gray-800">
                {example}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ActivityGallery images={activity.galleryImages} title="Gallery" />

      {activity.slug === "education" && (
        <>
          <AnimateOnScroll>
            <section className="py-16 bg-cream">
              <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-green-dark mb-4">
                  {EDUCATION_KIT_SECTION.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {EDUCATION_KIT_SECTION.description}
                </p>
                <ul className="text-left space-y-3 max-w-xl mx-auto">
                  {EDUCATION_KIT_SECTION.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </AnimateOnScroll>
          <ActivityGallery
            images={EDUCATION_KIT_SECTION.galleryImages}
            title="Distribution Gallery"
          />
        </>
      )}

      <AnimateOnScroll>
        <section className="py-16 bg-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-green-dark mb-4">
              Support This Initiative
            </h2>
            <p className="text-gray-600 mb-8">
              Your contribution helps us continue this work in communities across Odisha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Donate Now
              </Link>
              <Link
                href="/contact#volunteer"
                className="bg-green hover:bg-green-dark text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Volunteer With Us
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
