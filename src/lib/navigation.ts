export interface BreadcrumbItem {
  label: string;
  href: string;
}

const SEGMENT_LABELS: Record<string, string> = {
  about: "About",
  founder: "Our Inspiration",
  activities: "Activities",
  education: "Education",
  cleanliness: "Cleanliness",
  livelihood: "Livelihood",
  healthcare: "Healthcare",
  gallery: "Gallery",
  donate: "Donate",
  contact: "Contact",
  agriculture: "Agriculture",
  "civic-sense": "Civic Sense",
  employment: "Skill Development",
};

function titleCase(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return [];

  const crumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
  let path = "";

  for (const segment of segments) {
    path += `/${segment}`;
    crumbs.push({
      label: SEGMENT_LABELS[segment] ?? titleCase(segment),
      href: path,
    });
  }

  return crumbs;
}

export function getBackFallback(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length <= 1) return "/";
  return `/${segments.slice(0, -1).join("/")}`;
}

export function getBackLabel(pathname: string): string {
  const fallback = getBackFallback(pathname);
  if (fallback === "/") return "Back to Home";

  const segment = fallback.split("/").filter(Boolean).pop() ?? "";
  const label = SEGMENT_LABELS[segment] ?? titleCase(segment);
  return `Back to ${label}`;
}
