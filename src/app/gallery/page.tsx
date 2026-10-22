import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "./GalleryGrid";
import { ACTIVITY_AREAS } from "@/lib/activities";

const FIELD_NOTES: Record<string, { src: string; alt: string; caption: string }> = {
  education: {
    src: "/images/activities/DSC09246.jpg",
    alt: "Women and a trust member reviewing papers at a community education visit",
    caption: "Papers at a community education visit.",
  },
  cleanliness: {
    src: "/images/activities/cleanliness-leaf-cleanup.jpg",
    alt: "Community members collecting dry leaves during a cleanliness drive",
    caption: "Collecting leaves on a cleanliness drive.",
  },
  livelihood: {
    src: "/images/activities/File_015.jpg",
    alt: "Women artisans in a handicraft training session",
    caption: "Applique at a livelihood session.",
  },
  healthcare: {
    src: "/images/activities/File_003.jpg",
    alt: "Women taking part in a health awareness session",
    caption: "A health awareness session.",
  },
};

export const metadata: Metadata = {
  title: "Field notes",
  description:
    "Photo gallery of Sri Prasanna Pattnaik Memorial Trust activities — healthcare, education, livelihood, environment, and community development across Odisha.",
};

export default function GalleryPage() {
  return (
    <>
      <header className="page-head shell">
        <div className="eyebrow with-line">Field notes</div>
        <h1>
          Work you can
          <br />
          <em>see.</em>
        </h1>
        <p>
          Activities documented on this site. These are snapshots of community
          work, not unverified impact claims.
        </p>
      </header>
      <div className="shell field-list">
        {["cleanliness", "healthcare", "livelihood", "education"].map((slug, index) => {
          const area = ACTIVITY_AREAS.find((item) => item.slug === slug)!;
          return (
          <article className="field-row" key={area.slug} id={area.slug}>
            <div className="field-img">
              <div className={`photo field-photo loaded${area.slug === "cleanliness" ? " photo-leaves" : ""}${area.slug === "healthcare" ? " photo-circle" : ""}${area.slug === "livelihood" ? " photo-craft" : ""}`}>
                <img src={FIELD_NOTES[area.slug].src} alt={FIELD_NOTES[area.slug].alt} />
              </div>
            </div>
            <div className="field-copy">
              <div className="mini-category">
                0{index + 1} · {area.shortTitle}
              </div>
              <h2>{FIELD_NOTES[area.slug].caption}</h2>
              <Link className="under-link" href={`/activities/${area.slug}`}>
                View the activity page <span>↗</span>
              </Link>
            </div>
          </article>
          );
        })}
      </div>
      <GalleryGrid />
    </>
  );
}
