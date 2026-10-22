import React from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  id?: string;
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  items: FaqItem[];
  className?: string;
}

export default function FaqSection({
  id = "faqs",
  eyebrow = "Frequently Asked Questions",
  title,
  description,
  items,
  className = "",
}: FaqSectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section
        className={`support-questions shell ${className}`}
        aria-labelledby={`${id}-heading`}
        id={id}
      >
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h2 id={`${id}-heading`}>{title}</h2>
          {description && <p style={{ color: "var(--muted)", marginTop: 16 }}>{description}</p>}
        </div>
        <div className="faqs">
          {items.map((item, index) => (
            <details key={index}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
