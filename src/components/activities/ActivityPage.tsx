import Link from "next/link";
import ActivityGallery from "@/components/activities/ActivityGallery";
import { EDUCATION_KIT_SECTION, type ActivityArea } from "@/lib/activities";

interface ActivityPageProps {
  activity: ActivityArea;
}

export default function ActivityPage({ activity }: ActivityPageProps) {
  return (
    <>
      <header className="page-head shell">
        <div className="eyebrow with-line">Our work</div>
        <h1>
          {activity.shortTitle}
          <br />
          <em>in practice.</em>
        </h1>
        <p>{activity.description}</p>
        <div className="page-meta">{activity.title}</div>
      </header>

      <section className="program-section">
        <div className="shell program-grid">
          <div className="program-visual">
            <div className="photo program-photo loaded">
              <img src={activity.bannerImage} alt={activity.bannerAlt} />
            </div>
          </div>
          <div className="program-content">
            <div className="eyebrow">What we do</div>
            <h2>{activity.title}</h2>
            <div className="program-proof">
              <strong>Documented activities</strong>
              <p>{activity.examples.join(" · ")}</p>
            </div>
            <div className="program-actions">
              <Link className="btn btn-dark" href="/donate">
                Support this work <span>↗</span>
              </Link>
              <Link className="text-link" href="/contact">
                Volunteer ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ActivityGallery images={activity.galleryImages} title="Photographs" />

      {activity.slug === "education" && (
        <section className="section shell">
          <div className="eyebrow">{EDUCATION_KIT_SECTION.title}</div>
          <h2 style={{ marginTop: 16 }}>{EDUCATION_KIT_SECTION.title}</h2>
          <p className="program-summary">{EDUCATION_KIT_SECTION.description}</p>
          <div className="principles-list" style={{ marginTop: 28 }}>
            {EDUCATION_KIT_SECTION.highlights.map((highlight, index) => (
              <div key={highlight}>
                <span>0{index + 1}</span>
                <div>
                  <p>{highlight}</p>
                </div>
              </div>
            ))}
          </div>
          <ActivityGallery
            images={EDUCATION_KIT_SECTION.galleryImages}
            title="Distribution photographs"
          />
        </section>
      )}

      <section className="closing-note shell">
        <h2>Continue this work.</h2>
        <p>Your contribution helps us continue this work in communities across Odisha.</p>
        <Link className="under-link" href="/activities">
          Back to all programs <span>↗</span>
        </Link>
      </section>
    </>
  );
}
