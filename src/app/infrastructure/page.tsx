import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "Bridges, fire station, and public facilities built by Shri Prasanna Pattnaik in Dhenkanal District, Odisha.",
};

export default function InfrastructurePage() {
  return (
    <>
      <PageBanner
        title="Building Connections, Building Communities"
        subtitle="Infrastructure Development in Dhenkanal"
        imageSrc="/images/brahmani-bridge-odia.png"
        imageAlt="Brahmani Setu bridge aerial view"
      />

      {/* Overview */}
      <AnimateOnScroll>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Shri Prasanna Pattnaik built bridges, fire stations, and public
              facilities that transformed Dhenkanal District. As a three-time
              MLA from Kamakhyanagar, he personally drove the construction of
              critical infrastructure that connected isolated communities and
              improved quality of life across the region.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Brahmani Setu showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-center text-green mb-4">
              Brahmani Setu
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
              The Brahmani Setu bridge, built through the efforts of Shri
              Prasanna Pattnaik, stands as a symbol of connectivity, linking
              communities across the Brahmani river in Dhenkanal District. This
              bridge has transformed the lives of thousands of villagers by
              reducing travel times, enabling trade, and providing access to
              healthcare and education facilities.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimateOnScroll animation="slide-left">
              <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/brahmani-bridge-1.png"
                  alt="Brahmani Setu aerial view showing the bridge over the river"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-right">
              <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/brahmani-bridge-2.png"
                  alt="Brahmani Setu another aerial angle"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Fire station */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green mb-12">
            Public Facilities
          </h2>
          <AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/bhuban-fire-station.png"
                  alt="Bhuban Fire Station entrance gate"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green mb-4">
                  Bhuban Fire Station
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The Bhuban Fire Station, Dist. Dhenkanal, was established
                  through the efforts of Shri Prasanna Pattnaik to provide
                  emergency response services to surrounding communities. This
                  facility remains one of the critical public infrastructure
                  elements serving rural areas in Dhenkanal District.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trust's vision */}
      <AnimateOnScroll>
        <section className="py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-green mb-6">
              The Trust&apos;s Infrastructure Vision
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The trust advocates for continued infrastructure development in
              Bhuban and Kamakhyanagar, including road connectivity, water
              supply, electrification, and public amenities that serve rural
              communities.
            </p>
            <Link
              href="/donate"
              className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors inline-block"
            >
              Support Development
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
