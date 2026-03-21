import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of the Shri Prasanna Pattnaik Memorial Trust's work in education, healthcare, infrastructure, and community development across Dhenkanal, Odisha.",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Our Work in Pictures"
        imageSrc="/images/students-assembly-outdoor.png"
        imageAlt="Students at a school assembly"
      />
      <GalleryGrid />
    </>
  );
}
