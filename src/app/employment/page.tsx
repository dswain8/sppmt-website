import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Employment",
  description:
    "Employment and skill development initiatives by the Shri Prasanna Pattnaik Memorial Trust: vocational training, entrepreneurship support, and livelihood programs.",
};

const PROGRAMS = [
  {
    title: "Vocational training",
    icon: "🔧",
    description:
      "Hands-on training programs in trades like carpentry, electrical work, tailoring, and computer skills, preparing youth for meaningful employment.",
  },
  {
    title: "Skill development",
    icon: "📊",
    description:
      "Partnering with industry to provide skill certification programs aligned with market demand, bridging the gap between education and employability.",
  },
  {
    title: "Entrepreneurship support",
    icon: "🚀",
    description:
      "Mentoring aspiring entrepreneurs with business planning, financial literacy, and access to micro-credit to launch small enterprises.",
  },
  {
    title: "Women livelihood and empowerment",
    icon: "👩‍💼",
    description:
      "Empowering women through self-help groups, tailoring and handicraft training, financial literacy workshops, and marketing support to help them build sustainable home-based businesses and achieve economic independence.",
  },
];

export default function EmploymentPage() {
  return (
    <>
      <PageBanner
        title="Creating Livelihoods, Building Futures"
        subtitle="Employment and Skill Development for Rural India"
        imageSrc="/images/vocational-block.png"
        imageAlt="Vocational training block"
      />

      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Shri Prasanna Pattnaik recognized that education must translate
              into livelihoods. His vocational training blocks and skill
              development initiatives in Bhuban and Kamakhyanagar laid the
              foundation for employment-focused programs. The trust expands this
              vision by equipping rural youth with market-relevant skills and
              entrepreneurship opportunities.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green mb-12">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PROGRAMS.map((prog, i) => (
              <AnimateOnScroll key={prog.title} delay={i * 120}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
                  <span className="text-4xl mb-4 block">{prog.icon}</span>
                  <h3 className="text-lg font-bold text-green mb-3">
                    {prog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/vocational-block.png"
                  alt="Vocational training block in Bhuban"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green mb-4">
                  From Classrooms to Careers
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The vocational training blocks established by Shri Prasanna
                  Pattnaik in Bhuban continue to operate, providing practical
                  skills to hundreds of students each year. The trust is
                  expanding these programs with industry partnerships and modern
                  curricula to meet the demands of today&apos;s job market.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="py-16 bg-cream text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-green mb-4">
              Invest in Skills, Invest in Futures
            </h2>
            <p className="text-gray-600 mb-8">
              Your support helps train rural youth for sustainable employment
              and entrepreneurship.
            </p>
            <Link
              href="/donate"
              className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors inline-block"
            >
              Support Employment Programs
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
