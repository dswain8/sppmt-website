import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Education was Shri Prasanna Pattnaik's greatest legacy. Schools and colleges founded in Bhuban and Kamakhyanagar serving thousands of students.",
};

const INSTITUTIONS = [
  {
    image: "/images/edu-kamakhyanagar-gate.png",
    caption: "High School, Kamakhyanagar",
  },
  {
    image: "/images/edu-stn-school-gate.png",
    caption: "STN Government High School, Bhusal Kirttanpur",
  },
  {
    image: "/images/edu-admin-block.png",
    caption: "Administrative Block, STN Govt High School",
  },
  {
    image: "/images/edu-school-building.png",
    caption: "School campus in Bhuban, Dhenkanal",
  },
  {
    image: "/images/edu-vocational-block.png",
    caption: "Vocational Block providing practical skills training",
  },
  {
    image: "/images/edu-e-library.png",
    caption: "E-Library providing digital access to students",
  },
  {
    image: "/images/edu-school-gate-odia.png",
    caption: "Government High School, Joranatia",
  },
  {
    image: "/images/edu-school-gate-dark.png",
    caption: "Government High School, Dhenkanal",
  },
  {
    image: "/images/edu-students-assembly.png",
    caption: "Students at school assembly",
  },
  {
    image: "/images/edu-students-indoor.png",
    caption: "Students at an indoor gathering",
  },
];

const PROGRAMS = [
  {
    title: "Schools and colleges",
    icon: "🏫",
    description:
      "Shri Pattnaik founded and supported multiple schools across Bhuban and Kamakhyanagar, providing quality education to rural students.",
  },
  {
    title: "E-libraries and digital learning",
    icon: "💻",
    description:
      "Modern e-library facilities established to give students access to digital resources and bridge the urban-rural knowledge gap.",
  },
  {
    title: "Scholarships",
    icon: "🎓",
    description:
      "Scholarships for meritorious and underprivileged students, enabling access to quality education and empowering the next generation of leaders.",
  },
];

export default function EducationPage() {
  return (
    <>
      <PageBanner
        title="Education: His Greatest Legacy"
        subtitle="Schools and Colleges Founded by Shri Prasanna Pattnaik"
        imageSrc="/images/edu-students-assembly.png"
        imageAlt="Students at school assembly"
      />

      {/* Overview */}
      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Education was the cornerstone of Shri Prasanna Pattnaik&apos;s
              vision. During his lifetime, he dedicated himself to founding and
              strengthening schools and colleges in Bhuban and Kamakhyanagar.
              These institutions continue to educate thousands of students, many
              from rural and underserved backgrounds, across Dhenkanal District.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Institutions gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green mb-12">
            Some of the Many Institutions Founded by Shri Prasanna Pattnaik
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTITUTIONS.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{item.caption}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green mb-12">
            Education Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((prog, i) => (
              <AnimateOnScroll key={prog.title} delay={i * 120}>
                <div className="bg-blue-50 rounded-xl p-8 text-center hover:shadow-md transition-shadow">
                  <span className="text-4xl mb-4 block">{prog.icon}</span>
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
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

      {/* Continuing work */}
      <AnimateOnScroll>
        <section className="py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-green mb-6">
              The Trust&apos;s Continuing Work
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The trust continues to support these institutions through
              infrastructure upgrades, scholarships for meritorious students,
              teacher training programs, and digital learning initiatives.
            </p>
            <Link
              href="/donate"
              className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors inline-block"
            >
              Support Education
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
