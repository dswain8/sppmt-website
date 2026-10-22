"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyDonateCta() {
  const pathname = usePathname();

  // Do not show on donate page itself
  if (pathname === "/donate") {
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
