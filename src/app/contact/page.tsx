import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Shri Prasanna Pattnaik Memorial Trust to donate, volunteer, or learn more about our work in Odisha.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Reach Out to Us"
        subtitle="Get in touch to donate, volunteer, or learn more"
        imageSrc="/images/brahmani-bridge-2.png"
        imageAlt="Brahmani Setu bridge"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-center text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto text-lg">
              Whether you want to contribute to our mission, volunteer your
              time, or learn more about our work, we would love to hear from
              you.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-green-light flex items-center justify-center">
                  <svg className="w-5 h-5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Shri Prasanna Pattnaik Memorial Trust
                    <br />
                    Bhubaneswar, Odisha, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-green-light flex items-center justify-center">
                  <svg className="w-5 h-5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a
                    href="mailto:prasannapattnaiktrust@gmail.com"
                    className="text-orange hover:text-orange-dark transition-colors text-sm"
                  >
                    prasannapattnaiktrust@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-green-light flex items-center justify-center">
                  <svg className="w-5 h-5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-sm">
                    <a href="tel:+919439725460" className="text-gray-600 hover:text-orange transition-colors">+91 9439725460</a>
                    <br />
                    <a href="tel:+919178256179" className="text-gray-600 hover:text-orange transition-colors">+91 9178256179</a>
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-green-light flex items-center justify-center">
                  <svg className="w-5 h-5 text-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Instagram</h3>
                  <a
                    href="https://www.instagram.com/prasannapattnaiktrust"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange hover:text-orange-dark transition-colors text-sm"
                  >
                    @prasannapattnaiktrust
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Map */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59834.06!2d85.82!3d20.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1b5c3e3e36b2f7%3A0x4c6a4f4d0e5e2b0e!2sBhuban%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bhuban, Dhenkanal, Odisha on Google Maps"
        />
      </section>
    </>
  );
}
