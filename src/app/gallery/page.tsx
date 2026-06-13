import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of Sri Prasanna Pattnaik Memorial Trust activities — healthcare, education, livelihood, environment, and community development across Odisha.",
  keywords: ["Odisha NGO", "Community Development Odisha", "Tree Plantation Odisha"],
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Our Work in Pictures"
        imageSrc="/images/activities/DSC09450.jpg"
        imageAlt="Students at a school assembly"
      />
      <GalleryGrid />
    </>
  );
}
