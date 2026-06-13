"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ACTIVITY_AREAS } from "@/lib/activities";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Inspiration", href: "/founder" },
  {
    label: "Activities",
    href: "/activities",
    children: ACTIVITY_AREAS.map((area) => ({
      label: area.shortTitle,
      href: `/activities/${area.slug}`,
    })),
  },
  { label: "Scholarship", href: "/scholarship" },
  { label: "Gallery", href: "/gallery" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileActivitiesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-orange ${
                      isActive(item.href)
                        ? "text-orange border-b-2 border-orange"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                    <div className="min-w-[12rem] rounded-md border border-gray-100 bg-white py-1 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-orange ${
                            pathname === child.href
                              ? "text-orange font-medium"
                              : "text-gray-700"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-orange ${
                    isActive(item.href)
                      ? "text-orange border-b-2 border-orange"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

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

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => setMobileActivitiesOpen(!mobileActivitiesOpen)}
                    className={`flex w-full items-center justify-between px-3 py-2 text-sm font-medium hover:text-orange ${
                      isActive(item.href) ? "text-orange" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        mobileActivitiesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileActivitiesOpen && (
                    <div className="ml-3 border-l border-gray-200 pl-3 space-y-1">
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 text-sm hover:text-orange ${
                          pathname === item.href ? "text-orange" : "text-gray-600"
                        }`}
                      >
                        All Activities
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-3 py-2 text-sm hover:text-orange ${
                            pathname === child.href ? "text-orange" : "text-gray-600"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium hover:text-orange ${
                    isActive(item.href) ? "text-orange" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
