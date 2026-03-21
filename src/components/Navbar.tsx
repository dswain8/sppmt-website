"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Shri Prasanna Pattnaik", href: "/founder" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Work",
    children: [
      { label: "Education", href: "/education" },
      { label: "Healthcare", href: "/healthcare" },
      { label: "Agriculture", href: "/agriculture" },
      { label: "Civic Sense", href: "/civic-sense" },
      { label: "Employment", href: "/employment" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Get Involved",
    children: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/join" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/trust-logo-large.png"
              alt="Shri Prasanna Pattnaik Memorial Trust"
              width={48}
              height={48}
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(item.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-orange flex items-center gap-1 ${
                        item.children.some((c) => c.href === pathname)
                          ? "text-orange"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {dropdownOpen === item.label && (
                      <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[160px] border border-gray-100">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 text-sm hover:bg-cream hover:text-orange transition-colors ${
                              pathname === child.href ? "text-orange bg-cream" : "text-gray-700"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-orange ${
                    pathname === item.href
                      ? "text-orange border-b-2 border-orange"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange"
                      onClick={() =>
                        setDropdownOpen(dropdownOpen === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 transition-transform ${
                          dropdownOpen === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {dropdownOpen === item.label && (
                      <div className="pl-6 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-3 py-2 text-sm hover:text-orange ${
                              pathname === child.href ? "text-orange" : "text-gray-500"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`block px-3 py-2 text-sm font-medium hover:text-orange ${
                    pathname === item.href ? "text-orange" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
