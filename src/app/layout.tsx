import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://sppmt.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shri Prasanna Pattnaik Memorial Trust | SPPMT",
    template: "%s | Shri Prasanna Pattnaik Memorial Trust",
  },
  description:
    "Shri Prasanna Pattnaik Memorial Trust (SPPMT), established 2025 in Bhubaneswar, Odisha. Continuing the legacy of Shri Prasanna Pattnaik through education, healthcare, agriculture, civic sense, and employment across India.",
  keywords: [
    "Shri Prasanna Pattnaik",
    "Shri Prasanna Pattnaik Memorial Trust",
    "SPPMT",
    "sppmt.org",
    "Prasanna Pattnaik trust",
    "Bhuban",
    "Dhenkanal",
    "Kamakhyanagar",
    "Odisha",
    "Odisha trust",
    "education Odisha",
    "healthcare Odisha",
    "agriculture Odisha",
    "civic sense",
    "employment Odisha",
    "BJP MLA Odisha",
    "first BJP MLA Odisha",
    "community development India",
    "memorial trust India",
    "nonprofit Odisha",
  ],
  authors: [{ name: "Shri Prasanna Pattnaik Memorial Trust" }],
  creator: "Shri Prasanna Pattnaik Memorial Trust",
  publisher: "Shri Prasanna Pattnaik Memorial Trust",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Shri Prasanna Pattnaik Memorial Trust",
    title: "Shri Prasanna Pattnaik Memorial Trust | SPPMT",
    description:
      "Honoring the legacy of Shri Prasanna Pattnaik (1948-2025), the first BJP MLA of Odisha. The trust works in education, healthcare, agriculture, civic sense, and employment across India.",
    images: [
      {
        url: "/images/trust-logo-large.png",
        width: 512,
        height: 512,
        alt: "Shri Prasanna Pattnaik Memorial Trust logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Prasanna Pattnaik Memorial Trust | SPPMT",
    description:
      "Continuing the legacy of Shri Prasanna Pattnaik through education, healthcare, agriculture, civic sense, and employment across India.",
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
