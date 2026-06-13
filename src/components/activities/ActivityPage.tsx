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

      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <span className="text-4xl mb-4 block">{activity.icon}</span>
            <p className="text-gray-600 text-lg leading-relaxed">
              {activity.description}
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {activity.examples.map((example, i) => (
              <AnimateOnScroll key={example} delay={i * 80}>
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-orange/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{example}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ActivityGallery images={activity.galleryImages} title="Gallery" />

      {activity.slug === "education" && (
        <>
          <AnimateOnScroll>
            <section className="py-16 bg-cream">
              <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-green mb-4">
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
            <h2 className="text-2xl font-bold text-green mb-4">
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
