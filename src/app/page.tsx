import type { Metadata } from "next";
import Link from "next/link";
import ScholarshipAnnouncement from "@/components/ScholarshipAnnouncement";
import DonationQrCode from "@/components/DonationQrCode";
import ActiveCampaignBanner from "@/components/ActiveCampaignBanner";
import { FOCUS_AREAS } from "@/lib/focus-areas";
import { getDonationConfig } from "@/lib/donation";
import { SEO_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: SITE_NAME,
  description:
    "Shri Prasanna Pattnaik Memorial Trust supports education, healthcare, livelihoods and community wellbeing in Odisha.",
  keywords: SEO_KEYWORDS,
  alternates: { canonical: SITE_URL },
};

function Photo({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`photo loaded ${className ?? ""}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default function Home() {
  const donationConfig = getDonationConfig();

  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow with-line">A charitable trust · Odisha, India</div>
          <h1 id="hero-title">
            A lifetime
            <br />
            of service.
            <br />
            <em>A future of</em>
            <br />
            <em>possibility.</em>
          </h1>
          <p className="hero-memory">
            In memory of Shri Prasanna Pattnaik, 1948–2025.
          </p>
          <p>
            Honouring Shri Prasanna Pattnaik’s legacy by supporting education,
            healthcare, livelihoods and stronger communities across Odisha.
          </p>
          <div className="button-row">
            <Link className="btn btn-dark" href="/activities">
              Discover our work <span>↗</span>
            </Link>
            <Link className="text-link" href="/donate">
              Support the trust <span>↗</span>
            </Link>
          </div>
          <div className="hero-trust">
            <span className="mini-spark">✳</span>
            <span>
              Established in 2025 · Based in Bhubaneswar
              <br />
              <strong>Registered charitable trust · Section 80G eligibility</strong>
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <Photo
            className="hero-photo"
            src="/images/activities/DSC09450.jpg"
            alt="Students and community members at an SPPMT educational kit distribution event"
          />
          <div className="hero-photo-caption">
            <span>
              <i /> From our community work
            </span>
            <strong>School bags and learning supplies, distributed in rural Odisha.</strong>
          </div>
        </div>
      </section>

      <div className="mission-strip">
        <div className="shell mission-strip-inner">
          <span>Our purpose</span>
          <p>
            Carry forward a legacy of public service by making a meaningful
            difference in everyday lives.
          </p>
          <Link href="/founder" aria-label="Read our story">
            ↗
          </Link>
        </div>
      </div>

      <ScholarshipAnnouncement />

      <section className="section shell" id="work">
        <div className="section-head">
          <div>
            <div className="eyebrow">Our work today</div>
            <h2>
              Care that reaches
              <br />
              <em>where it matters.</em>
            </h2>
          </div>
          <div className="section-aside">
            <p>
              From school supplies to patient assistance and community-led
              environmental action, the trust focuses on practical, local needs.
            </p>
            <Link href="/activities" className="under-link">
              Explore all programs <span>↗</span>
            </Link>
          </div>
        </div>
        <div className="work-layout">
          <Link className="featured-story" href="/activities/education">
            <Photo
              className="featured-photo"
              src="/images/activities/DSC09450.jpg"
              alt="Students holding educational kits distributed by SPPMT"
            />
            <div className="featured-details">
              <span className="pill-tag">Education · Documented activity</span>
              <div className="featured-info">
                <h3>A school bag. A fresh start.</h3>
                <span className="round-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p>
                SPPMT has distributed bags and essential learning supplies to
                students in rural Odisha.
              </p>
            </div>
          </Link>
          <div className="work-side">
            <Link className="side-story" href="/activities/healthcare">
              <Photo
                className="side-photo"
                src="/images/activities/File_022.jpg"
                alt="Trust members offering assistance during hospital outreach"
              />
              <div>
                <span className="mini-category">02 · Healthcare</span>
                <h3>Standing beside patients and families</h3>
                <span className="side-more">Explore this work ↗</span>
              </div>
            </Link>
            <Link className="side-story" href="/activities/cleanliness">
              <Photo
                className="side-photo photo-brooms"
                src="/images/activities/File_004.jpg"
                alt="Women sweeping the courtyard of a temple"
              />
              <div>
                <span className="mini-category">03 · Environment</span>
                <h3>Sweeping a temple courtyard</h3>
                <span className="side-more">Explore this work ↗</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="focus-row">
          <span>Focus areas</span>
          {FOCUS_AREAS.map((area) => (
            <div key={area.slug}>{area.title}</div>
          ))}
          <Link href="/activities" aria-label="See programs">
            ↗
          </Link>
        </div>
      </section>

      <section className="story-band">
        <div className="shell story-grid">
          <div className="story-portrait">
            <Photo
              className="portrait-photo"
              src="/images/prasanna-patnaik-bw-portrait.png"
              alt="Archival portrait of Shri Prasanna Pattnaik"
            />
            <div className="portrait-caption">
              Shri Prasanna Pattnaik
              <br />
              1948 — 2025
            </div>
          </div>
          <div className="story-content">
            <div className="eyebrow pale">The inspiration behind our work</div>
            <h2>
              One life of service.
              <br />
              <em>A legacy carried forward.</em>
            </h2>
            <p>
              Shri Prasanna Pattnaik helped establish schools, healthcare
              institutions and infrastructure in Odisha. The trust was formed
              by his family in 2025 to continue the spirit of his lifelong
              commitment to community development.
            </p>
            <div className="story-principles">
              <div>
                <strong>What he built</strong>
                <span>Schools, health facilities, community infrastructure</span>
              </div>
              <div>
                <strong>What we continue</strong>
                <span>Education, care, opportunity and community action</span>
              </div>
            </div>
            <Link href="/founder" className="btn btn-outline-light">
              Discover his story <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section shell field-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">From the field</div>
            <h2>
              See the work.
              <br />
              <em>Know the people.</em>
            </h2>
          </div>
          <div className="section-aside">
            <p>
              Real events, real photographs and the everyday efforts behind our
              mission. No invented impact numbers or anonymous testimonials.
            </p>
            <Link href="/gallery" className="under-link">
              Visit field notes <span>↗</span>
            </Link>
          </div>
        </div>
        <div className="notes-grid">
          <Link href="/activities/education" className="note-card">
            <Photo
              className="note-photo"
              src="/images/activities/DSC09246.jpg"
              alt="Families going through papers at a community education visit"
            />
            <div className="note-body">
              <div className="mini-category">Education · Community update</div>
              <h3>Families going through papers together</h3>
              <span>Read the activity report ↗</span>
            </div>
          </Link>
          <Link href="/activities/cleanliness" className="note-card">
            <Photo
              className="note-photo photo-leaves-card"
              src="/images/activities/cleanliness-leaf-cleanup.jpg"
              alt="Community members collecting dry leaves during a cleanliness drive"
            />
            <div className="note-body">
              <div className="mini-category">Community · Environment</div>
              <h3>Collecting leaves on a cleanliness drive</h3>
              <span>Explore the activity ↗</span>
            </div>
          </Link>
          <Link href="/activities/livelihood" className="note-card">
            <Photo
              className="note-photo"
              src="/images/activities/File_015.jpg"
              alt="Women participating in a handicraft session"
            />
            <div className="note-body">
              <div className="mini-category">Livelihoods · Skills</div>
              <h3>Honouring skills that create opportunity</h3>
              <span>Explore this program ↗</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="principles-section">
        <div className="shell principles-grid">
          <div className="principles-intro">
            <div className="eyebrow">A trust you can know</div>
            <h2>
              Good intentions.
              <br />
              <em>Clear accountability.</em>
            </h2>
            <p>
              We believe charitable work should be understandable, verifiable
              and accountable to the people who support it.
            </p>
            <Link href="/about" className="under-link">
              Trust and transparency <span>↗</span>
            </Link>
          </div>
          <div className="principles-list">
            <div>
              <span>01</span>
              <div>
                <h3>A registered trust</h3>
                <p>Established and registered in Bhubaneswar in October 2025.</p>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <h3>Named trustees</h3>
                <p>Meet the people responsible for the trust and its decisions.</p>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <h3>Real activity documentation</h3>
                <p>Actual program photographs and publicly described initiatives.</p>
              </div>
            </div>
            <div>
              <span>04</span>
              <div>
                <h3>Tax-deductible giving</h3>
                <p>
                  Section 80G donation receipts are issued after payment
                  verification, subject to applicable rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ActiveCampaignBanner inPageQrSync={true} />

      <section className="section shell" id="give" style={{ paddingTop: 30, paddingBottom: 60 }}>
        <div className="section-head">
          <div>
            <div className="eyebrow">Support our mission</div>
            <h2>
              Give directly.
              <br />
              <em>Empower a life.</em>
            </h2>
          </div>
          <div className="section-aside">
            <p>
              Your contributions directly fund educational scholarships, school
              supplies, healthcare assistance, and environmental drives in
              Odisha. All eligible donations receive an official Section 80G tax
              exemption receipt.
            </p>
            <Link href="/donate" className="under-link">
              View official bank details &amp; 80G guide <span>↗</span>
            </Link>
          </div>
        </div>

        <DonationQrCode
          upiId={donationConfig.upiId || "sppmt@uco"}
          payeeName={donationConfig.accountName}
          accountNumber={donationConfig.accountNumber}
          ifsc={donationConfig.ifsc}
          bankName={donationConfig.bankName}
          branch={donationConfig.branch}
          whatsappNumber={donationConfig.whatsappNumber}
          defaultAmount={1000}
        />
      </section>

      <section className="support-cta shell">
        <div className="support-art" aria-hidden="true">
          <span className="sun-circle">
            <span className="sun-rays">✳</span>
          </span>
        </div>
        <div>
          <div className="eyebrow">Continue the legacy</div>
          <h2>
            There’s more good
            <br />
            <em>we can do together.</em>
          </h2>
          <p>
            Give your time, skills or support to help the trust continue its
            work with communities across Odisha.
          </p>
          <div className="button-row">
            <Link href="/donate" className="btn btn-dark">
              Make a contribution <span>↗</span>
            </Link>
            <Link href="/contact" className="text-link">
              Volunteer with us ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
