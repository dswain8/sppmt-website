"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/activities", label: "Our work" },
  { href: "/scholarship", label: "Scholars" },
  { href: "/founder", label: "Our story" },
  { href: "/gallery", label: "Field notes" },
  { href: "/about", label: "Transparency" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="utility">
        <div className="shell utility-inner">
          <span>
            <span className="status-dot" /> Rooted in Odisha · Est. 2025
          </span>
          <span className="utility-contacts">
            <a href="mailto:prasannapattnaiktrust@gmail.com">
              prasannapattnaiktrust@gmail.com
            </a>
            <span>·</span>
            <a href="tel:+919972366933">+91 99723 66933</a>
          </span>
        </div>
      </div>
      <header className="header" id="top">
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label="SPPMT home">
            <span className="brand-symbol loaded">
              <img
                className="official-logo"
                src="/images/trust-logo-large.png"
                alt=""
                width={44}
                height={44}
              />
            </span>
            <span className="brand-type">
              <strong>SPPMT</strong>
              <small>
                Shri Prasanna Pattnaik
                <br />
                Memorial Trust
              </small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link
              className="header-donate"
              href="/donate"
              aria-current={pathname === "/donate" ? "page" : undefined}
            >
              Donate <span aria-hidden="true">↗</span>
            </Link>
            <button
              className="menu-toggle"
              type="button"
              aria-controls="mobile-nav"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
        <nav
          className="mobile-nav"
          id="mobile-nav"
          aria-label="Mobile navigation"
          hidden={!open}
        >
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="mobile-donate" href="/donate" onClick={() => setOpen(false)}>
            Support our work ↗
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Volunteer with us ↗
          </Link>
        </nav>
      </header>
    </>
  );
}
