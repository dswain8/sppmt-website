import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";
import {
  ORGANIZATION_ALTERNATE_NAMES,
  SCHOLARSHIP_NAME,
  SEO_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | SPPMT`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Official website of the Shri Prasanna Pattnaik Memorial Trust (Prasanna Patnaik Trust). Apply for the Shri Prasanna Pattnaik Merit Scholarship. Education, healthcare, skill development, agriculture, and civic sense across Odisha.",
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SCHOLARSHIP_NAME}`,
    description:
      "Honoring Shri Prasanna Pattnaik (1948–2025). Apply for the Prasanna Patnaik Merit Scholarship. Official website of the Prasanna Patnaik Trust in Bhubaneswar, Odisha.",
    images: [
      {
        url: "/images/trust-logo-large.png",
        width: 512,
        height: 512,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SCHOLARSHIP_NAME}`,
    description:
      "Official Prasanna Patnaik Trust website. Shri Prasanna Pattnaik Merit Scholarship applications open for Odisha students.",
    images: ["/images/trust-logo-large.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/images/trust-logo-small.png",
    apple: "/images/trust-logo-large.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
