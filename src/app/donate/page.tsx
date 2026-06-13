import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { getDonationConfig } from "@/lib/donation";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Sri Prasanna Pattnaik Memorial Trust through bank transfer. Your donation helps healthcare, education, livelihood, and community programs across Odisha.",
  keywords: ["Odisha NGO", "Donate Odisha", "Charity Odisha"],
};

export default function DonatePage() {
  const config = getDonationConfig();

  return (
    <>
      <PageBanner
        title="Support Our Mission"
        subtitle="Every contribution helps communities across Odisha"
        imageSrc="/images/activities/DSC09450.jpg"
        imageAlt="Trust community programs"
      />

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-green mb-6 text-center">
              Donate via Bank Transfer
            </h2>
            <div className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden mb-8">
              {[
                ["Account Name", config.accountName],
                ["Account Number", config.accountNumber],
                ["IFSC Code", config.ifsc],
                ["Bank Name", config.bankName],
                ["Branch", config.branch],
              ].map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex flex-col sm:flex-row px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <span className="font-semibold text-green sm:w-40 shrink-0 text-sm">
                    {label}
                  </span>
                  <span className="text-gray-700 mt-1 sm:mt-0 font-mono text-sm select-all">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="bg-cream rounded-xl p-8 border border-orange/10 text-center">
              <h3 className="font-bold text-green mb-3">After You Donate</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Please email us your name, donation amount, and payment reference
                (UTR/transaction ID) so we can acknowledge your contribution and
                send a receipt.
              </p>
              <a
                href="mailto:prasannapattnaiktrust@gmail.com?subject=Donation%20Confirmation"
                className="inline-block bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Email Donation Details
              </a>
              <p className="text-gray-500 text-sm mt-6">
                Or call us at{" "}
                <a href="tel:+919439725460" className="text-orange hover:underline">
                  +91 9439725460
                </a>
                {" / "}
                <a href="tel:+919178256179" className="text-orange hover:underline">
                  +91 9178256179
                </a>
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-center text-gray-500 text-sm mt-8">
              <Link href="/contact" className="text-orange hover:underline">
                Contact us
              </Link>{" "}
              if you have any questions about donating.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
