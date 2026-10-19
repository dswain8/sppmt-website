import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "./GalleryGrid";
import { ACTIVITY_AREAS } from "@/lib/activities";

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
        {ACTIVITY_AREAS.map((area, index) => (
          <article className="field-row" key={area.slug} id={area.slug}>
            <div className="field-img">
              <div className="photo field-photo loaded">
                <img src={area.bannerImage} alt={area.bannerAlt} />
              </div>
            </div>
            <div className="field-copy">
              <div className="mini-category">
                0{index + 1} · {area.shortTitle}
              </div>
              <h2>{area.title}</h2>
              <p>{area.description}</p>
              <Link className="under-link" href={`/activities/${area.slug}`}>
                View the activity page <span>↗</span>
              </Link>
            </div>
            <div className="field-count">0{index + 1}</div>
          </article>
        ))}
      </div>
      <section className="section shell">
        <GalleryGrid />
      </section>
    </>
  );
}
