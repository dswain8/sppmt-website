import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Civic Sense",
  description:
    "Civic sense initiatives by the Shri Prasanna Pattnaik Memorial Trust: promoting civic responsibility, environmental awareness, and active citizen participation.",
};

const FOCUS_AREAS = [
  {
    title: "Environmental awareness",
    icon: (
      <svg className="w-10 h-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    description:
      "Organizing cleanliness drives, tree plantation campaigns, and awareness programs on waste management and environmental conservation.",
  },
  {
    title: "Community hygiene",
    icon: (
      <svg className="w-10 h-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    description:
      "Promoting sanitation practices, clean drinking water awareness, and public health hygiene in rural and urban communities.",
  },
  {
    title: "Active citizenship",
    icon: (
      <svg className="w-10 h-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    description:
      "Encouraging citizens to participate in local governance, exercise their voting rights, and engage constructively in democratic processes.",
  },
];

export default function CivicSensePage() {
  return (
    <>
      <PageBanner
        title="Building Responsible Citizens"
        subtitle="Promoting Civic Sense and Community Responsibility"
        imageSrc="/images/brahmani-bridge-1.png"
        imageAlt="Infrastructure and community development"
      />

      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Shri Prasanna Pattnaik believed that a strong society is built on
              the foundation of responsible citizenship. Throughout his career as
              a legislator and social worker, he championed civic values,
              environmental consciousness, and community participation. The
              trust continues this mission by fostering a culture of civic
              responsibility.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green mb-12">
            Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FOCUS_AREAS.map((area, i) => (
              <AnimateOnScroll key={area.title} delay={i * 120}>
                <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex justify-center mb-4">{area.icon}</div>
                  <h3 className="text-lg font-bold text-green mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AnimateOnScroll>
        <section className="py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-l-4 border-gold pl-6 py-2">
              <p className="text-xl text-gray-700 italic leading-relaxed">
                &ldquo;A nation&apos;s strength lies not in its infrastructure
                alone, but in the civic consciousness of its people.&rdquo;
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="py-16 bg-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-green mb-4">
              Join Us in Building a Better Society
            </h2>
            <p className="text-gray-600 mb-8">
              Volunteer for community drives or support civic awareness programs
              across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="bg-green hover:bg-green-dark text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Volunteer
              </Link>
              <Link
                href="/donate"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Donate
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
