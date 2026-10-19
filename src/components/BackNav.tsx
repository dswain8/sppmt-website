"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  getBackFallback,
  getBackLabel,
  getBreadcrumbs,
} from "@/lib/navigation";

type BackNavVariant = "light" | "dark";

interface BackNavProps {
  variant?: BackNavVariant;
  className?: string;
}

export default function BackNav({
  variant = "light",
  className = "",
}: BackNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") return null;

  const breadcrumbs = getBreadcrumbs(pathname);
  const fallbackHref = getBackFallback(pathname);
  const backLabel = getBackLabel(pathname);

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    router.push(fallbackHref);
  };

  const isLight = variant === "light";
  const backButtonClass = isLight
    ? "text-white/90 hover:text-white bg-black/20 hover:bg-black/30 border-white/20"
    : "text-green hover:text-orange bg-white hover:bg-gray-50 border-gray-200";
  const crumbClass = isLight
    ? "text-white/70 hover:text-white"
    : "text-gray-500 hover:text-orange";
  const crumbCurrentClass = isLight ? "text-white" : "text-green";
  const separatorClass = isLight ? "text-white/40" : "text-gray-300";

  return (
    <nav
      aria-label="Page navigation"
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${className}`}
    >
      {breadcrumbs.length <= 1 && (
      <button
        type="button"
        onClick={handleBack}
        className={`inline-flex items-center gap-2 self-start rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${backButtonClass}`}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {backLabel}
      </button>
      )}

      {breadcrumbs.length > 1 && (
        <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span className={separatorClass} aria-hidden="true">
                    /
                  </span>
                )}
                {isLast ? (
                  <span className={`font-medium ${crumbCurrentClass}`}>
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className={`transition-colors ${crumbClass}`}>
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      )}
    </nav>
  );
}
