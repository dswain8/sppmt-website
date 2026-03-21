import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Shri Prasanna Pattnaik Memorial Trust",
    template: "%s | SPPMT",
  },
  description:
    "Shri Prasanna Pattnaik Memorial Trust, established 2025 in Bhubaneswar, Odisha. Dedicated to education, healthcare, agriculture, civic sense, and employment across India.",
  keywords: [
    "Shri Prasanna Pattnaik",
    "Memorial Trust",
    "Bhuban",
    "Dhenkanal",
    "Odisha",
    "education",
    "healthcare",
    "infrastructure",
    "community development",
    "Kamakhyanagar",
  ],
  openGraph: {
    title: "Shri Prasanna Pattnaik Memorial Trust",
    description:
      "Honoring the legacy of Shri Prasanna Pattnaik through education, healthcare, agriculture, civic sense, and employment across India.",
    images: ["/images/trust-logo-large.png"],
    type: "website",
  },
  icons: {
    icon: "/images/trust-logo-small.png",
  },
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
