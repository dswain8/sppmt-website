import type { Metadata } from "next";
import Link from "next/link";
import { ACTIVITY_AREAS } from "@/lib/activities";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Four areas of active community work by the Shri Prasanna Pattnaik Memorial Trust: education, healthcare, women’s livelihoods, and community environment.",
};

export default function ActivitiesPage() {
  return (
    <>
      <header className="page-head compact shell">
        <div className="eyebrow with-line">Our work</div>
        <h1>
          Practical care.
          <br />
          <em>Local needs.</em>
        </h1>
        <p>
          Four areas of active community work, grounded in the needs of people
          across Odisha.
        </p>
      </header>
      <div className="shell work-index">
        <span>On this page</span>
        {ACTIVITY_AREAS.map((area, index) => (
          <a key={area.slug} href={`#${area.slug}`}>
            0{index + 1} / {area.shortTitle} ↗
          </a>
        ))}
      </div>
      {ACTIVITY_AREAS.map((area, index) => (
        <section className={`program-section${index === 0 ? " first" : ""}`} id={area.slug} key={area.slug}>
          <div className={`shell program-grid ${index % 2 ? "reverse" : ""}`}>
            <div className="program-visual">
              <div className="photo program-photo loaded">
                <img
                  src={
                    area.slug === "education"
                      ? "/images/activities/DSC09384.jpg"
                      : area.bannerImage
                  }
                  alt={area.bannerAlt}
                />
              </div>
              <span className="program-index">0{index + 1}</span>
            </div>
            <div className="program-content">
              <div className="eyebrow">{area.shortTitle}</div>
              <h2>{area.title}</h2>
              <p className="program-summary">{area.description}</p>
              <div className="program-proof">
                <strong>Documented on this site</strong>
                <p>{area.examples.join(" · ")}</p>
              </div>
              <div className="program-actions">
                <Link className="btn btn-dark" href={`/activities/${area.slug}`}>
                  See photographs <span>↗</span>
                </Link>
                <Link className="text-link" href="/donate">
                  Support this work ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="closing-note shell">
        <div className="eyebrow">Also in the mission</div>
        <h2>
          Agriculture remains
          <br />
          part of the wider work.
        </h2>
        <p>
          The homepage lists five focus areas, including agriculture. The
          dedicated activity pages currently cover education, cleanliness,
          livelihood, and healthcare.
        </p>
        <Link className="under-link" href="/founder">
          Understand our roots <span>↗</span>
        </Link>
      </section>
    </>
  );
}
