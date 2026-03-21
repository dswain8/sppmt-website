import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Healthcare",
  description:
    "Healthcare centres and blood bank founded by Shri Prasanna Pattnaik. The trust continues his mission of accessible healthcare across Odisha.",
};

const INITIATIVES = [
  {
    title: "Primary health centres",
    image: "/images/arogya-mandir-signboard-odia.png",
    description:
      "Shri Prasanna Pattnaik founded the Ayushman Arogya Mandir Primary Health Centre at Mahulpal, Bhuban, Dhenkanal, providing essential healthcare to rural communities.",
  },
  {
    title: "Blood bank and blood donation drives",
    image: "/images/blood-donation-centre-new.png",
    description:
      "The blood bank at Bhuban, founded by Shri Prasanna Pattnaik, ensures adequate blood supply for emergency and routine medical needs in the region.",
  },
  {
    title: "Clinical care",
    image: "/images/nurse-iv-drip.png",
    description:
      "Providing support for clinical care including trained nursing staff, medical supplies, and patient care at local health facilities.",
  },
  {
    title: "Diagnostic support",
    image: "/images/blood-samples.png",
    description:
      "Ensuring pathological diagnostic services are available at health centres, enabling early detection and treatment of diseases.",
  },
];

export default function HealthcarePage() {
  return (
    <>
      <PageBanner
        title="Healthcare for Every Household"
        subtitle="Healthcare Centres and Blood Bank Founded by Shri Prasanna Pattnaik"
        imageSrc="/images/health-centre-signboard.png"
        imageAlt="Ayushman Arogya Mandir Primary Health Centre, Mahulpal, Bhuban"
      />

      {/* Overview */}
      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Shri Prasanna Pattnaik founded healthcare centres and a blood
              bank in Dhenkanal district, ensuring that rural communities had
              access to medical care. The trust continues his mission by
              supporting these facilities, organizing health camps, and
              promoting preventive healthcare across Odisha.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green mb-12">
            Healthcare Initiatives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {INITIATIVES.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 120}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="relative h-52">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-green mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <AnimateOnScroll>
        <section className="py-16 bg-teal-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-green mb-6">Our Impact</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Health centres supported across Bhuban and Kamakhyanagar serve
              thousands of villagers who previously had limited access to medical
              care. Through the trust&apos;s continued support, these facilities
              remain equipped and staffed to serve the community.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA */}
      <AnimateOnScroll>
        <section className="py-16 bg-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-green mb-4">
              Support Rural Healthcare
            </h2>
            <p className="text-gray-600 mb-8">
              Your contribution helps maintain health centres and run
              life-saving programs in rural India.
            </p>
            <Link
              href="/donate"
              className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors inline-block"
            >
              Donate to Healthcare
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
