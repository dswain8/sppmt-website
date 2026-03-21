import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Community Development",
  description:
    "Community development programs by the Shri Prasanna Pattnaik Memorial Trust: women empowerment, youth development, and civic engagement in Bhuban and Kamakhyanagar.",
};

const FOCUS_AREAS = [
  {
    title: "Women empowerment",
    icon: (
      <svg className="w-10 h-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    description:
      "Supporting women through self-help groups, skill development, and financial literacy programs.",
  },
  {
    title: "Youth development",
    icon: (
      <svg className="w-10 h-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    description:
      "Creating opportunities for young people through mentorship, sports, and career guidance.",
  },
  {
    title: "Civic engagement",
    icon: (
      <svg className="w-10 h-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    description:
      "Encouraging community participation in local governance and development planning.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageBanner
        title="Empowering Communities from Within"
        subtitle="Grassroots Development in Bhuban & Kamakhyanagar"
        imageSrc="/images/community-gathering.png"
        imageAlt="Community gathering in Bhuban"
      />

      {/* Overview */}
      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Shri Prasanna Pattnaik spent decades engaging directly with the
              people of Kamakhyanagar and Bhuban. His approach was simple: listen
              to the community, understand their needs, and work alongside them
              to create solutions. The trust continues this tradition of
              grassroots engagement.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Focus areas */}
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

      {/* Community image */}
      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/community-gathering.png"
                alt="Shri Prasanna Pattnaik with community members"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-semibold">
                  Shri Prasanna Pattnaik with community members in Bhuban
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Quote */}
      <AnimateOnScroll>
        <section className="py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-l-4 border-gold pl-6 py-2">
              <p className="text-xl text-gray-700 italic leading-relaxed">
                &ldquo;Shri Pattnaik believed that lasting change comes not from
                government programs alone, but from empowered communities that
                take ownership of their own development.&rdquo;
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA */}
      <AnimateOnScroll>
        <section className="py-16 bg-green-light text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-green mb-4">
              Strengthen Our Communities
            </h2>
            <p className="text-gray-600 mb-8">
              Volunteer your time or contribute to community development
              programs across India.
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
