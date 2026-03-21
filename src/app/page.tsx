import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ImageCarousel from "@/components/ImageCarousel";

const CORE_AREAS = [
  {
    title: "Education",
    href: "/education",
    image: "/images/vocational-block.png",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    href: "/healthcare",
    image: "/images/students-classroom.png",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Agriculture",
    href: "/agriculture",
    image: "/images/agriculture-odisha-paddy.png",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Civic Sense",
    href: "/civic-sense",
    image: "/images/civic-sense-odisha.png",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: "Employment",
    href: "/employment",
    image: "/images/health-centre-signboard.png",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

const FOCUS_AREAS = [
  {
    title: "Education",
    description:
      "Strengthening schools, e-libraries, vocational training, and scholarship programs founded by Shri Prasanna Pattnaik.",
    icon: "🎓",
  },
  {
    title: "Healthcare",
    description:
      "Supporting primary health centres, blood donation drives, and maternal health programs across rural communities.",
    icon: "🏥",
  },
  {
    title: "Agriculture",
    description:
      "Empowering farmers through modern agricultural practices, sustainable farming initiatives, and rural livelihood support.",
    icon: "🌾",
  },
  {
    title: "Civic Sense",
    description:
      "Promoting civic responsibility, environmental awareness, community hygiene, and active citizen participation in governance.",
    icon: "🏛️",
  },
  {
    title: "Employment",
    description:
      "Creating livelihood opportunities through vocational training, skill development, and entrepreneurship support for rural youth.",
    icon: "💼",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/brahmani-bridge-odia.png"
          alt="Brahmani Setu bridge over the river in Dhenkanal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Image
            src="/images/trust-logo-large.png"
            alt="Shri Prasanna Pattnaik Memorial Trust logo"
            width={160}
            height={160}
            className="mx-auto mb-6 bg-white/10 backdrop-blur-sm p-1.5 rounded-2xl"
          />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Shri Prasanna Pattnaik
            <br />
            Memorial Trust
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-2 italic">
            In Loving Memory of Shri Prasanna Pattnaik, A True Son of the Soil
          </p>
          <p className="text-sm text-white/70 mb-8">
            Estd. 2025 &nbsp;|&nbsp; Bhubaneswar, Odisha
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors text-lg"
            >
              Support Our Mission
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-md transition-colors text-lg"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Founder tribute strip */}
      <AnimateOnScroll>
        <section className="bg-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0">
                <Image
                  src="/images/prasanna-patnaik-bw-portrait.png"
                  alt="Shri Prasanna Pattnaik portrait"
                  width={100}
                  height={120}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Honoring the legacy of{" "}
                  <strong>Shri Prasanna Pattnaik (1948&ndash;2025)</strong>, a
                  MISA detainee, the first BJP MLA of Odisha, Social Worker who
                  dedicated his life to founding schools, colleges, healthcare
                  centres, a blood bank, and building bridges across Odisha.
                </p>
                <Link
                  href="/founder"
                  className="inline-block mt-3 text-orange font-semibold hover:text-orange-dark transition-colors"
                >
                  Read His Story &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Core areas row */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {CORE_AREAS.map((area, i) => (
              <AnimateOnScroll key={area.title} delay={i * 100}>
                <Link
                  href={area.href}
                  className="group relative h-56 rounded-xl overflow-hidden block shadow-md"
                >
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="mb-2">{area.icon}</div>
                    <h3 className="text-lg font-bold">{area.title}</h3>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About the trust */}
      <AnimateOnScroll>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-green mb-6">
                  About the Trust
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Shri Prasanna Pattnaik Memorial Trust was established in
                  2025 in Bhubaneswar, Odisha, to carry forward the lifelong
                  vision of its namesake. Shri Prasanna Pattnaik, the first BJP
                  MLA of Odisha and a three-time legislator from Kamakhyanagar,
                  dedicated decades to grassroots development, founding schools,
                  colleges, healthcare centres, and a blood bank, and building
                  bridges that transformed rural communities.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This trust honors his memory by investing in education,
                  healthcare, agriculture, civic sense, and employment across
                  India, starting from the communities he served in Odisha.
                </p>
                <Link
                  href="/about"
                  className="bg-orange hover:bg-orange-dark text-white font-medium px-6 py-2.5 rounded-md transition-colors inline-block"
                >
                  Read More
                </Link>
              </div>
              <ImageCarousel />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Vision */}
      <AnimateOnScroll>
        <section className="py-16 bg-green-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-green mb-6">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To honor and advance the legacy of Shri Prasanna Pattnaik by
              building resilient communities through education, accessible
              healthcare, sustainable agriculture, dignified livelihoods and
              civic responsibility that form the foundation of inclusive and
              sustainable development.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Focus areas grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green mb-12">
            Our Focus Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FOCUS_AREAS.map((area, i) => (
              <AnimateOnScroll key={area.title} delay={i * 100}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                  <span className="text-3xl mb-4 block">{area.icon}</span>
                  <h3 className="text-xl font-bold text-green mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Get involved CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/prasanna-patnaik-memorial-portrait.png"
          alt="Shri Prasanna Pattnaik memorial"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Help Us Continue His Legacy
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/donate"
                className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors text-lg"
              >
                Donate
              </Link>
              <Link
                href="/join"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-md transition-colors text-lg"
              >
                Join the Trust
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our presence */}
      <AnimateOnScroll>
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-green mb-8">
              Rooted in Odisha, Serving India
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden shadow-md h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478585.5!2d84.8!3d20.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190cf55df4e3e7%3A0x9be9e21743b72e85!2sOdisha%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location of Bhuban, Dhenkanal, Odisha"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["Bhuban", "Kamakhyanagar", "Dhenkanal", "Bhubaneswar", "Odisha", "India"].map(
                  (place) => (
                    <div
                      key={place}
                      className="bg-white rounded-lg p-5 text-center shadow-sm border border-gray-100"
                    >
                      <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-green-light flex items-center justify-center">
                        <svg className="w-5 h-5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <p className="font-semibold text-green">{place}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
