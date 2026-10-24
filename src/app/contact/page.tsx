import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Volunteer",
  description:
    "Contact the Shri Prasanna Pattnaik Memorial Trust to donate, volunteer, or learn more about our work across Odisha.",
};

const AREAS = [
  "Education support",
  "Cleanliness and tree planting",
  "Women’s livelihood and handicraft",
  "Healthcare and medical assistance",
];

export default function ContactPage() {
  return (
    <>
      <header className="page-head shell">
        <div className="eyebrow with-line">Volunteer</div>
        <h1>
          There’s a place
          <br />
          <em>for your help.</em>
        </h1>
        <p>
          Contribute time, skills and local knowledge to initiatives supporting
          communities across Odisha.
        </p>
      </header>
      <section className="shell volunteer-layout">
        <div className="photo volunteer-photo photo-saplings loaded">
          <img
            src="/images/activities/plantation-sapling-walk.jpg"
            alt="Women carrying saplings for a planting"
          />
        </div>
        <div className="volunteer-content">
          <div className="eyebrow">How to begin</div>
          <h2>
            Big changes often
            <br />
            start with a message.
          </h2>
          <p>
            SPPMT invites help with education distribution, cleanliness and
            tree planting, healthcare support, and livelihoods. Tell the team
            where you are based, what skills you can offer, and which programs
            interest you.
          </p>
          <div className="volunteer-categories">
            {AREAS.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
          <a
            className="btn btn-dark"
            href="mailto:prasannapattnaiktrust@gmail.com?subject=Volunteer%20Registration"
          >
            Email the trust to volunteer <span>↗</span>
          </a>
          <div className="contact-rows">
            <a href="tel:+919972366933">Call +91 99723 66933 ↗</a>
            <Link href="/donate">Or support the work with a donation ↗</Link>
          </div>
        </div>
      </section>
    </>
  );
}
