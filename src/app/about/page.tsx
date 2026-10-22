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
          <div className="eyebrow">Governance</div>
          <h2>
            The people
            <br />
            entrusted to lead.
          </h2>
          <p>
            The Shri Prasanna Pattnaik Memorial Trust was established in 2025
            in memory of Shri Pattnaik. Its work is guided by a board of
            trustees and focused on communities in Odisha.
          </p>
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
        </div>
        <div className="opening-trustees">
          {TRUSTEES.map((trustee, index) => (
            <article key={trustee.name}>
              <span>
                0{index + 1} / {trustee.role}
              </span>
              <h3>{trustee.name}</h3>
              <p>{trustee.relation}</p>
            </article>
          ))}
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
