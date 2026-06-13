import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ActivityPage from "@/components/activities/ActivityPage";
import { ACTIVITY_AREAS, getActivityBySlug } from "@/lib/activities";

export function generateStaticParams() {
  return ACTIVITY_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) return { title: "Activity Not Found" };

  return {
    title: activity.title,
    description: activity.description,
  };
}

export default async function ActivitySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) notFound();

  return <ActivityPage activity={activity} />;
}
