import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-eyebrow">
              SHRI PRASANNA PATTNAIK MEMORIAL TRUST
            </div>
            <h2>
              Small acts of care.
              <br />
              <em>A lasting difference.</em>
            </h2>
            <p>
              Continuing a lifetime of public service through practical work
              with communities in Odisha.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h3>Explore</h3>
              <Link href="/activities">Our work</Link>
              <Link href="/founder">Our story</Link>
              <Link href="/gallery">Field notes</Link>
              <Link href="/about">Transparency</Link>
            </div>
            <div>
              <h3>Take part</h3>
              <Link href="/donate">Donate</Link>
              <Link href="/contact">Volunteer</Link>
              <a href="mailto:prasannapattnaiktrust@gmail.com">Email us</a>
              <a href="tel:+919178256179">+91 91782 56179</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Shri Prasanna Pattnaik Memorial Trust
          </div>
          <div>Bhubaneswar, Odisha · Educate · Empower · Elevate</div>
        </div>
      </div>
    </footer>
  );
}
