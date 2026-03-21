import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Agriculture",
  description:
    "Agricultural initiatives by the Shri Prasanna Pattnaik Memorial Trust: empowering farmers through modern practices, sustainable farming, and rural livelihood support.",
};

const INITIATIVES = [
  {
    title: "Sustainable farming",
    icon: "🌱",
    description:
      "Promoting organic and sustainable agricultural practices that increase yield while preserving soil health and the environment.",
  },
  {
    title: "Farmer training",
    icon: "👨‍🌾",
    description:
      "Conducting workshops and training programs on modern farming techniques, crop diversification, and water management for rural farmers.",
  },
  {
    title: "Market access",
    icon: "🏪",
    description:
      "Helping farmers connect directly with markets, reducing middlemen dependency and ensuring fair prices for their produce.",
  },
  {
    title: "Rural livelihoods",
    icon: "🌾",
    description:
      "Supporting allied agricultural activities like dairy, poultry, fisheries, and horticulture to diversify rural income sources.",
  },
];

export default function AgriculturePage() {
  return (
    <>
      <PageBanner
        title="Empowering Farmers, Enriching Lives"
        subtitle="Sustainable Agriculture for Rural India"
        imageSrc="/images/community-gathering.png"
        imageAlt="Agricultural community in Odisha"
      />

      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Agriculture is the backbone of rural India. Shri Prasanna Pattnaik
              understood that the prosperity of communities in Odisha depends on
              empowering farmers with knowledge, resources, and market access.
              The trust carries this vision forward through programs that
              strengthen agricultural livelihoods and promote sustainable
              practices.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green mb-12">
            Our Agricultural Initiatives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {INITIATIVES.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 120}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="text-lg font-bold text-green mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AnimateOnScroll>
        <section className="py-16 bg-cream text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-green mb-4">
              Support Rural Agriculture
            </h2>
            <p className="text-gray-600 mb-8">
              Your contribution helps farmers adopt better practices, access
              training, and build sustainable livelihoods.
            </p>
            <Link
              href="/donate"
              className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors inline-block"
            >
              Donate to Agriculture Programs
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
