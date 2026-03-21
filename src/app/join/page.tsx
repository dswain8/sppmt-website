import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import JoinForm from "./JoinForm";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Join the Shri Prasanna Pattnaik Memorial Trust as a volunteer. Contribute your time and skills to education, healthcare, and community development in Dhenkanal, Odisha.",
};

export default function JoinPage() {
  return (
    <>
      <PageBanner
        title="Join the Trust"
        subtitle="Volunteer your time and skills for a better Dhenkanal"
        imageSrc="/images/community-gathering.png"
        imageAlt="Community gathering"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <AnimateOnScroll animation="slide-left">
              <div>
                <h2 className="text-2xl font-bold text-green mb-6">
                  Why Volunteer?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The trust is always looking for dedicated individuals who
                  share Shri Prasanna Pattnaik&apos;s vision of community
                  upliftment. Whether you can offer professional skills, time, or
                  local knowledge, your contribution matters.
                </p>

                <h3 className="font-semibold text-gray-800 mb-4">
                  Areas where you can help
                </h3>
                <div className="space-y-3">
                  {[
                    "Teaching and mentoring students",
                    "Healthcare outreach and awareness campaigns",
                    "Event planning and coordination",
                    "Digital skills and IT support",
                    "Fundraising and donor engagement",
                    "Community engagement and fieldwork",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange shrink-0" />
                      <p className="text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll animation="slide-right">
              <JoinForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
