import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import DonateForm from "./DonateForm";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the Shri Prasanna Pattnaik Memorial Trust. Your donation directly supports education, healthcare, infrastructure, and community development in Dhenkanal, Odisha.",
};

export default function DonatePage() {
  return (
    <>
      <PageBanner
        title="Support the Trust"
        subtitle="Every contribution helps continue Shri Prasanna Pattnaik's legacy"
        imageSrc="/images/prasanna-patnaik-memorial-portrait.png"
        imageAlt="Shri Prasanna Pattnaik memorial"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <AnimateOnScroll animation="slide-left">
              <div>
                <h2 className="text-2xl font-bold text-green mb-6">
                  Why Donate?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Your donation directly supports education, healthcare,
                  infrastructure, and community development programs in Bhuban
                  and communities across India. Every rupee goes toward building the
                  future that Shri Prasanna Pattnaik envisioned.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Rs. 1,000 — provides school supplies for 10 students",
                    "Rs. 5,000 — supports a health camp for a village",
                    "Rs. 10,000 — funds a month of e-library operations",
                    "Rs. 50,000 — sponsors infrastructure maintenance",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-orange shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-cream rounded-xl p-6 border border-gold/30">
                  <h3 className="font-semibold text-green mb-3">
                    Bank Transfer Details
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Bank account details will be updated here soon. For
                    immediate donations, please contact us at{" "}
                    <a
                      href="mailto:contact@sppmt.org"
                      className="text-orange hover:text-orange-dark"
                    >
                      contact@sppmt.org
                    </a>
                  </p>
                </div>

                <p className="text-sm text-gray-500 mt-4 italic">
                  Tax deduction available under Section 80G of the Income Tax
                  Act.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll animation="slide-right">
              <DonateForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
