import type { Metadata } from "next";
import Link from "next/link";
import { ACTIVITY_AREAS } from "@/lib/activities";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Four areas of active community work by the Shri Prasanna Pattnaik Memorial Trust: education, healthcare, women’s livelihoods, and community environment.",
};

const WORK_LEADS: Record<string, { src: string; alt: string; frame: string; line?: string }> = {
  education: {
    src: "/images/activities/DSC09246.jpg",
    alt: "Families going through papers at a community education visit",
    frame: "photo-papers",
    line: "Papers at a community education visit",
  },
  cleanliness: {
    src: "/images/activities/File_004.jpg",
    alt: "Women sweeping the courtyard of a temple with brooms",
    frame: "photo-brooms",
    line: "Temple and public space cleaning",
  },
  livelihood: {
    src: "/images/activities/File_012.jpg",
    alt: "Women making applique at a livelihood session",
    frame: "photo-circle",
  },
  healthcare: {
    src: "/images/activities/File_022.jpg",
    alt: "A patient receiving assistance during hospital outreach",
    frame: "photo-ward",
  },
};

export default function ActivitiesPage() {
  return (
    <>
      <header className="page-head compact shell work-intro">
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
      <nav className="shell work-board" aria-label="Program areas">
        {ACTIVITY_AREAS.map((area, index) => {
          const lead = WORK_LEADS[area.slug];
          return (
            <Link key={area.slug} href={`/activities/${area.slug}`}>
              <div className={`photo work-card-photo loaded ${lead.frame}`}>
                <img src={lead.src} alt={lead.alt} />
              </div>
              <span className="work-card-copy">
                <strong>
                  0{index + 1} / {area.shortTitle} <span>↗</span>
                </strong>
                <em>{lead.line ?? area.examples[0]}</em>
              </span>
            </Link>
          );
        })}
      </nav>
      {ACTIVITY_AREAS.filter((area) => area.slug !== "education").map((area) => {
        const index = ACTIVITY_AREAS.findIndex((item) => item.slug === area.slug);
        return (
        <section className="program-section" id={area.slug} key={area.slug}>
          <div className={`shell program-grid ${index % 2 ? "reverse" : ""}`}>
            <div className="program-visual">
              <div className={`photo program-photo loaded${area.slug === "education" ? " photo-books" : ""}`}>
                <img
                  src={
                    area.slug === "education"
                      ? "/images/activities/DSC09424.jpg"
                      : area.bannerImage
                  }
                  alt={area.bannerAlt}
                />
              </div>
              <span className="program-index">0{index + 1}</span>
            </div>
            <div className="program-content">
              <div className="eyebrow">0{index + 1} / {area.shortTitle}</div>
              <h2>{area.title}</h2>
              <p className="program-summary">{area.description}</p>
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
        );
      })}
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
