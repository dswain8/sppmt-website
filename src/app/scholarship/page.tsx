import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { SCHOLARSHIP_NAME, SEO_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: SCHOLARSHIP_NAME,
  description:
    "Apply for the Shri Prasanna Pattnaik Merit Scholarship by the Shri Prasanna Pattnaik Memorial Trust (Prasanna Patnaik Trust). Open to meritorious and financially deserving school and college students across Odisha. Deadline: 30 June.",
  keywords: [
    ...SEO_KEYWORDS,
    "scholarship application Odisha",
    "merit scholarship application",
  ],
  alternates: {
    canonical: `${SITE_URL}/scholarship`,
  },
  openGraph: {
    title: `${SCHOLARSHIP_NAME} | ${SITE_NAME}`,
    description:
      "Prasanna Patnaik Merit Scholarship applications open for Odisha students. Download the form and apply via WhatsApp.",
    url: `${SITE_URL}/scholarship`,
  },
};

const FAQS = [
  {
    q: "Who is eligible to apply?",
    a: "Students currently enrolled in a school or college in Odisha. Applicants are evaluated on academic merit and demonstrated financial need.",
  },
  {
    q: "What documents are required?",
    a: "Passport-size photo, last marksheet, and income proof (if available). Aadhaar and bank details are not required at the application stage.",
  },
  {
    q: "When is the application deadline?",
    a: "Applications are accepted until 30 June each year.",
  },
  {
    q: "When are scholarships announced?",
    a: "Selected recipients are announced by mid-July.",
  },
  {
    q: "How do I apply?",
    a: "Download the application form below, fill it in, attach the required documents, and send scanned copies via WhatsApp to 99723 66933.",
  },
];

export default function ScholarshipPage() {
  return (
    <>
      <PageBanner
        title={SCHOLARSHIP_NAME}
        subtitle="Shri Prasanna Pattnaik Memorial Trust · Prasanna Patnaik Trust"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <AnimateOnScroll>
            <div>
              <h2 className="text-2xl font-bold text-green mb-4">Program Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                The {SCHOLARSHIP_NAME} — also known as the Prasanna Patnaik Merit
                Scholarship — supports deserving students across Odisha who demonstrate
                both academic merit and financial need. The program covers school and
                college students, helping them continue their education without
                financial barriers.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div>
              <h2 className="text-2xl font-bold text-green mb-4">Eligibility</h2>
              <ul className="space-y-3">
                {[
                  "Must be a resident of Odisha and currently enrolled in a recognized school or college",
                  "Open to both school students (Class 1–12) and college/university students",
                  "Selection based on two criteria: educational merit and financial status",
                  "Priority given to students from underserved and rural communities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-cream rounded-xl p-6 border border-orange/10">
                <h3 className="font-bold text-green mb-2">Selection Process</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Applications are reviewed by the trust committee. Shortlisted candidates
                  may be contacted for verification with their institution or through field
                  visits. Final selection balances academic performance with financial need.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-orange/10">
                <h3 className="font-bold text-green mb-2">Timeline</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li><strong>Applications open:</strong> Now</li>
                  <li><strong>Last date:</strong> 30 June</li>
                  <li><strong>Announcement:</strong> Mid-July</li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-cream rounded-xl p-8 border border-orange/10">
              <h2 className="text-2xl font-bold text-green mb-4">How to Apply</h2>
              <ol className="space-y-3 text-gray-600 text-sm mb-6 list-decimal list-inside">
                <li>Download the application form (English or Odia)</li>
                <li>Fill in all details and attach required documents</li>
                <li>Send scanned copies via WhatsApp to <strong>99723 66933</strong></li>
              </ol>
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="/documents/scholarship-english.docx"
                  download
                  className="bg-green hover:bg-green-dark text-white font-medium px-5 py-2.5 rounded-md transition-colors text-sm"
                >
                  English Form (DOCX)
                </a>
                <a
                  href="/documents/scholarship-odia.docx"
                  download
                  className="border border-green text-green hover:bg-green-light font-medium px-5 py-2.5 rounded-md transition-colors text-sm"
                >
                  Odia Form (DOCX)
                </a>
                <a
                  href="https://wa.me/919972366933"
                  className="bg-orange hover:bg-orange-dark text-white font-medium px-5 py-2.5 rounded-md transition-colors text-sm"
                >
                  Submit via WhatsApp
                </a>
              </div>
              <p className="text-gray-500 text-xs">
                Questions? WhatsApp us at 99723 66933 or email{" "}
                <a href="mailto:prasannapattnaiktrust@gmail.com" className="text-orange hover:underline">
                  prasannapattnaiktrust@gmail.com
                </a>
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div>
              <h2 className="text-2xl font-bold text-green mb-6">FAQs</h2>
              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <details key={faq.q} className="bg-gray-50 rounded-xl border border-gray-100 group">
                    <summary className="px-5 py-4 font-medium text-gray-800 cursor-pointer list-none flex justify-between items-center">
                      {faq.q}
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="text-center bg-green-light rounded-xl p-8">
              <p className="text-gray-600 mb-2">Questions about the scholarship?</p>
              <a
                href="https://wa.me/919972366933"
                className="text-orange font-semibold hover:underline"
              >
                WhatsApp us at 99723 66933
              </a>
              {" · "}
              <Link href="/contact" className="text-orange font-semibold hover:underline">
                Contact page
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
