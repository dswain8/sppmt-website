import Link from "next/link";
import ActivityGallery from "@/components/activities/ActivityGallery";
import { EDUCATION_KIT_SECTION, type ActivityArea } from "@/lib/activities";
import { DONATIONS_ENABLED } from "@/lib/donation";

interface ActivityPageProps {
  activity: ActivityArea;
}

const EDUCATION_LEAD = {
  src: "/images/activities/DSC09246.jpg",
  alt: "Women and a trust member reviewing papers at a community education visit",
  caption: "Families going through papers at a community education visit.",
};

export default function ActivityPage({ activity }: ActivityPageProps) {
  const lead =
    activity.slug === "education"
      ? EDUCATION_LEAD
      : { src: activity.bannerImage, alt: activity.bannerAlt, caption: activity.bannerAlt };

  return (
    <>
      <header className={`page-head shell${activity.slug === "education" ? " work-open education-open" : ""}`}>
        <div>
          <div className="eyebrow with-line">Our work</div>
          <h1>
            {activity.shortTitle}
            <br />
            <em>in practice.</em>
          </h1>
          {activity.slug === "education" ? (
            <>
              <h2>Families with the papers.</h2>
              <p className="program-summary">
                At this visit, families and a trust member went through papers together.
              </p>
              <div className="program-actions">
                {DONATIONS_ENABLED ? (
                  <>
                    <Link className="btn btn-dark" href="/donate">
                      Support this work <span>↗</span>
                    </Link>
                    <Link className="text-link" href="/contact">
                      Volunteer ↗
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="btn btn-dark" href="/contact">
                      Volunteer or Partner <span>↗</span>
                    </Link>
                    <Link className="text-link" href="/activities">
                      All programs ↗
                    </Link>
                  </>
                )}
              </div>
            </>
          ) : (
            <p>{activity.description}</p>
          )}
        </div>
        {activity.slug === "education" && (
          <div>
            <div className="photo program-photo loaded">
              <img src={lead.src} alt={lead.alt} />
            </div>
            <p className="program-caption">{lead.caption}</p>
          </div>
        )}
      </header>

      {activity.slug !== "education" && (
      <section className="program-section">
        <div className="shell program-grid">
          <div className="program-visual">
            <div className="photo program-photo loaded">
              <img src={lead.src} alt={lead.alt} />
            </div>
            <p className="program-caption">{lead.caption}</p>
          </div>
          <div className="program-content">
            <div className="eyebrow">What we do</div>
            <h2>{activity.title}</h2>
            <p className="program-summary">{lead.caption}</p>
            <div className="program-actions">
              {DONATIONS_ENABLED ? (
                <>
                  <Link className="btn btn-dark" href="/donate">
                    Support this work <span>↗</span>
                  </Link>
                  <Link className="text-link" href="/contact">
                    Volunteer ↗
                  </Link>
                </>
              ) : (
                <>
                  <Link className="btn btn-dark" href="/contact">
                    Volunteer or Partner <span>↗</span>
                  </Link>
                  <Link className="text-link" href="/gallery">
                    View field notes ↗
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      )}

      {activity.slug === "education" && (
        <section className="shell education-scope">
          <div className="eyebrow">The wider program</div>
          <p>{activity.description}</p>
        </section>
      )}

      <ActivityGallery images={activity.galleryImages} title="Photographs" />

      {activity.slug === "education" && (
        <section className="section shell">
          <div className="eyebrow">Distribution</div>
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
