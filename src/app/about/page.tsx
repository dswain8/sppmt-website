import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "Trustees, registration, and Section 80G guidance for the Shri Prasanna Pattnaik Memorial Trust.",
};

const TRUSTEES = [
  {
    name: "Smt. Nalini Prabha Patnaik",
    role: "Managing Trustee",
    relation: "Wife of Late Shri Prasanna Pattnaik",
  },
  {
    name: "Smt. Barnali Patnaik",
    role: "Trustee",
    relation: "Daughter of Late Shri Prasanna Pattnaik",
  },
  {
    name: "Shri Debjeet Swain",
    role: "Trustee",
    relation: "Son-in-law of Late Shri Prasanna Pattnaik",
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="page-head shell">
        <div className="eyebrow with-line">Transparency</div>
        <h1>
          Trust is built
          <br />
          <em>in the open.</em>
        </h1>
        <p>
          Meet the people behind the organisation, understand how it operates,
          and see which facts are currently public.
        </p>
      </header>
      <section className="shell transparency-main">
        <div className="transparency-intro">
          <div className="eyebrow">The organisation</div>
          <h2>
            A young trust with
            <br />a clear purpose.
          </h2>
          <p>
            The Shri Prasanna Pattnaik Memorial Trust was established in 2025
            in memory of Shri Pattnaik. Its work is guided by a board of
            trustees and focused on communities in Odisha.
          </p>
        </div>
        <div className="fact-table">
          <div>
            <span>Trust name</span>
            <strong>Shri Prasanna Pattnaik Memorial Trust</strong>
          </div>
          <div>
            <span>Registration</span>
            <strong>Registered under the Indian Trusts Act</strong>
          </div>
          <div>
            <span>Registration office</span>
            <strong>Sub-Registrar, Khurda (Bhubaneswar)</strong>
          </div>
          <div>
            <span>Registration date</span>
            <strong>13 October 2025</strong>
          </div>
          <div>
            <span>Registered office</span>
            <strong>Bhubaneswar, Odisha</strong>
          </div>
        </div>
      </section>
      <section className="trustees-band">
        <div className="shell">
          <div className="eyebrow">The people</div>
          <h2 style={{ margin: "16px 0 28px" }}>Board of trustees</h2>
          <p style={{ maxWidth: 520, color: "#667b6a" }}>
            Board membership listed on the trust’s published About page.
          </p>
          <div className="trustees-grid" style={{ marginTop: 36 }}>
            {TRUSTEES.map((trustee, index) => (
              <div key={trustee.name}>
                <div className="trustee-num">0{index + 1}</div>
                <h3>{trustee.name}</h3>
                <p>
                  {trustee.role}
                  <br />
                  {trustee.relation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="shell transparency-docs">
        <div>
          <div className="eyebrow">Documents</div>
          <h2>What’s public.</h2>
        </div>
        <div className="docs-list">
          <div>
            <div>
              <strong>Registration record</strong>
              <p>Information already published by the organisation.</p>
            </div>
            <Link href="/about">On this page</Link>
          </div>
          <div>
            <div>
              <strong>Section 80G guidance</strong>
              <p>Eligibility and receipt information from the donation page.</p>
            </div>
            <Link href="/donate">Read donation guidance ↗</Link>
          </div>
          <div>
            <div>
              <strong>Annual report and audited accounts</strong>
              <p>
                Not represented as published until original reports are
                available.
              </p>
            </div>
            <span className="doc-pending">Not yet published</span>
          </div>
        </div>
      </section>
    </>
  );
}
