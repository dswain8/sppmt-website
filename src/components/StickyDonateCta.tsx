"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DONATIONS_ENABLED } from "@/lib/donation";

export default function StickyDonateCta() {
  const pathname = usePathname();

  // If donations are temporarily suppressed, or if on donate page itself, do not render
  if (!DONATIONS_ENABLED || pathname === "/donate") {
    return null;
  }

  return (
    <aside
      className="mobile-sticky-cta"
      aria-label="Make a tax-exempt donation"
    >
      <Link href="/donate" className="mobile-sticky-cta-btn">
        <span className="mobile-sticky-icon" aria-hidden="true">
          ♥
        </span>
        <span className="mobile-sticky-text">
          <strong>Donate</strong> · 80G Tax Exemption
        </span>
        <span className="mobile-sticky-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
    </aside>
  );
}
