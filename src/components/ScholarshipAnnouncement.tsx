import Link from "next/link";
import { COHORT_1_DATA, ScholarshipRecipient } from "@/lib/scholarship";

interface ScholarshipAnnouncementProps {
  customRecipients?: ScholarshipRecipient[];
  showDonationCta?: boolean;
}

export default function ScholarshipAnnouncement({
  customRecipients,
  showDonationCta = true,
}: ScholarshipAnnouncementProps) {
  const cohort = COHORT_1_DATA;
  const recipients = customRecipients || cohort.recipients;

  return (
    <section className="scholarship-announcement-section" id="scholarships">
      <div className="shell">
        <div className="scholarship-banner-tag">
          <span className="pulse-indicator" />
          <span className="tag-text">
            Milestone Announcement · {cohort.academicYear}
          </span>
        </div>

        <div className="scholarship-head-grid">
          <div className="scholarship-copy">
            <div className="eyebrow with-line">Merit & Need Scholarship</div>
            <h2>
              Announcing our
              <br />
              <em>first cohort of scholars.</em>
            </h2>
            <p className="scholarship-lead-text">
              The Shri Prasanna Pattnaik Memorial Trust is proud to announce its
              first scholarship cohort. Selected for their dedication and promise, these
              {recipients.length} students from across Odisha — Cuttack, Keonjhar, Jajpur,
              Nayagarh, and beyond — have been awarded support for tuition, books, and everyday costs
              so that talent, not circumstances, decides their future.
            </p>
          </div>

          <div className="scholarship-impact-stat-box">
            <div className="impact-stat-item">
              <span className="stat-number">{recipients.length} Scholars</span>
              <span className="stat-label">Inaugural Cohort 1</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Direct Educational Support</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">Sec 80G</span>
              <span className="stat-label">Tax Benefit for Sponsors</span>
            </div>
          </div>
        </div>

        {/* Recipients Grid */}
        <div className="scholarship-recipients-wrap">
          <div className="recipients-header">
            <h3>Cohort 1 Awardees &amp; Beneficiaries</h3>
            <span className="recipients-sub">
              Photographs and academic profiles of the {recipients.length} students selected in this inaugural cycle
            </span>
          </div>

          <div className="recipients-grid">
            {recipients.map((scholar, idx) => (
              <div key={scholar.id || idx} className="scholar-card">
                <div className="scholar-photo-frame">
                  {scholar.image ? (
                    <img
                      src={scholar.image}
                      alt={scholar.name}
                      className="scholar-portrait-img"
                    />
                  ) : (
                    <div className="avatar-initials-fallback">
                      {scholar.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("") || "SP"}
                    </div>
                  )}
                  <span className="scholar-num-badge">Scholar 0{idx + 1}</span>
                </div>

                <div className="scholar-card-body">
                  <div className="scholar-title-wrap">
                    <h4 className="scholar-name">{scholar.name}</h4>
                    <span className="scholar-badge">
                      {scholar.awardCategory || "Merit Scholar"}
                    </span>
                  </div>

                  <div className="scholar-detail-row">
                    <span className="detail-label">Program:</span>
                    <strong className="detail-val">{scholar.courseOrClass}</strong>
                  </div>
                  <div className="scholar-detail-row">
                    <span className="detail-label">Institution:</span>
                    <span className="detail-val">{scholar.institution}</span>
                  </div>
                  <div className="scholar-detail-row">
                    <span className="detail-label">Location:</span>
                    <span className="detail-val">{scholar.district}</span>
                  </div>

                  {scholar.aspiration && (
                    <blockquote className="scholar-aspiration">
                      &ldquo;{scholar.aspiration}&rdquo;
                    </blockquote>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Donation Flywheel */}
        {showDonationCta && (
          <div className="scholar-sponsor-cta">
            <div className="sponsor-cta-copy">
              <span className="mini-spark">✳</span>
              <div>
                <h4>Help us support the next cohort</h4>
                <p>
                  Every ₹1,000 supplies learning materials, and ₹5,000–₹10,000
                  funds a student&apos;s full academic tuition for an entire
                  year. Your donation directly empowers deserving scholars
                  across Odisha.
                </p>
              </div>
            </div>
            <div className="sponsor-cta-actions">
              <Link href="/donate" className="btn btn-dark">
                Sponsor a Scholar <span>↗</span>
              </Link>
              <a
                href="https://wa.me/919972366933?text=I%20would%20like%20to%20sponsor%20a%20scholar%20through%20SPPMT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Inquire via WhatsApp ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
