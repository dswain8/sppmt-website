import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "The Shri Prasanna Pattnaik Memorial Trust focuses on education, healthcare, agriculture, civic sense, and employment across Odisha and India.",
};

const PROGRAMS = [
  {
    title: "Education",
    icon: "🎓",
    description:
      "We will strengthen the schools and colleges founded by Shri Prasanna Pattnaik through infrastructure upgrades, scholarships for meritorious and underprivileged students, teacher training programs, and digital learning initiatives. Our goal is to ensure every child in Dhenkanal and beyond has access to quality education.",
    areas: [
      "Scholarships for meritorious and need-based students",
      "E-library and digital learning expansion",
      "Teacher training and capacity building",
      "Vocational skills programs for youth",
    ],
  },
  {
    title: "Healthcare",
    icon: "🏥",
    description:
      "We will support the healthcare centres and blood bank founded by Shri Prasanna Pattnaik, and extend accessible healthcare to underserved communities. Our focus will be on preventive health, maternal care, blood donation drives, and building rural health awareness.",
    areas: [
      "Free health camps in rural communities",
      "Blood donation drives and blood bank support",
      "Maternal and child health programs",
      "Health awareness and preventive care",
    ],
  },
  {
    title: "Agriculture",
    icon: "🌾",
    description:
      "We will empower farmers across Odisha with knowledge, resources, and market access. Our agriculture programs will promote sustainable farming practices, crop diversification, and allied livelihood activities to improve rural income and food security.",
    areas: [
      "Training on modern and sustainable farming techniques",
      "Crop diversification and water management",
      "Market linkage and fair pricing support",
      "Allied livelihoods: dairy, poultry, fisheries",
    ],
  },
  {
    title: "Civic Sense",
    icon: "🏛️",
    description:
      "We will foster a culture of civic responsibility through awareness campaigns, environmental initiatives, and youth engagement programs. Our aim is to nurture responsible citizens who participate actively in the development of their communities.",
    areas: [
      "Environmental awareness and cleanliness drives",
      "Community hygiene and sanitation programs",
      "Youth leadership and civic participation",
      "Tree plantation and conservation initiatives",
    ],
  },
  {
    title: "Employment",
    icon: "💼",
    description:
      "We will create pathways from education to livelihoods through vocational training, skill development, and entrepreneurship support. Our employment programs will equip rural youth — especially women — with market-relevant skills and opportunities.",
    areas: [
      "Vocational training in practical trades",
      "Industry-aligned skill certification",
      "Entrepreneurship mentoring and micro-credit access",
      "Women empowerment through self-help groups",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageBanner
        title="Our Programs"
        subtitle="Building on a legacy of service"
        imageSrc="/images/community-gathering.png"
        imageAlt="Community gathering"
      />

      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-green mb-6">
              Areas We Will Focus On
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Carrying forward the vision of Shri Prasanna Pattnaik, the Trust
              will focus on five areas that reflect his lifelong commitment to
              community development. Each program builds on the institutions and
              values he established, extending their reach to more communities
              across Odisha and India.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      <section className="pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {PROGRAMS.map((program, i) => (
              <AnimateOnScroll key={program.title} delay={i * 80}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-5">
                    <span className="text-4xl shrink-0 mt-1">{program.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-green mb-3">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-5">
                        {program.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {program.areas.map((area) => (
                          <div key={area} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange shrink-0 mt-2" />
                            <p className="text-sm text-gray-500">{area}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AnimateOnScroll>
        <section className="py-16 bg-green-light text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-green mb-4">
              Be Part of This Mission
            </h2>
            <p className="text-gray-600 mb-8">
              Your support helps turn these programs into reality for
              communities across Odisha and India.
            </p>
            <Link
              href="/contact"
              className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors inline-block"
            >
              Reach Out to Us
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
