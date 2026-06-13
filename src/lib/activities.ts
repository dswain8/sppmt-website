export type ActivityCategory =
  | "education"
  | "cleanliness"
  | "livelihood"
  | "healthcare";

export type GalleryCategory =
  | "Healthcare"
  | "Livelihood"
  | "Education"
  | "Cleanliness"
  | "Our Inspiration";

export interface ActivityArea {
  slug: ActivityCategory;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  bannerImage: string;
  bannerAlt: string;
  examples: string[];
  galleryImages: { src: string; alt: string }[];
}

const ACTIVITY_BASE = "/images/activities";

export const ACTIVITY_AREAS: ActivityArea[] = [
  {
    slug: "education",
    title: "Education Support & Scholarship Programs",
    shortTitle: "Education",
    icon: "🎓",
    description:
      "Supporting students across Odisha through scholarship programs, educational kit distribution, student mentorship, and school support initiatives.",
    bannerImage: `${ACTIVITY_BASE}/DSC09450.jpg`,
    bannerAlt: "Students receiving educational kits from the trust",
    examples: [
      "Merit and need-based scholarships",
      "Educational kit distribution",
      "Student mentorship programs",
      "School support initiatives",
    ],
    galleryImages: [
      { src: `${ACTIVITY_BASE}/DSC09450.jpg`, alt: "Students with SPPMT educational kits" },
      { src: `${ACTIVITY_BASE}/DSC09244.jpg`, alt: "Scholarship and education support distribution" },
      { src: `${ACTIVITY_BASE}/DSC09384.jpg`, alt: "Educational kit distribution event" },
      { src: `${ACTIVITY_BASE}/DSC09424.jpg`, alt: "Students supported by the trust" },
    ],
  },
  {
    slug: "cleanliness",
    title: "Cleanliness Drive & Tree Plantation",
    shortTitle: "Cleanliness",
    icon: "🌱",
    description:
      "Promoting civic responsibility and environmental sustainability through village cleanliness drives, community cleaning initiatives, tree plantation, and sapling distribution across Odisha.",
    bannerImage: `${ACTIVITY_BASE}/plantation-watering.jpg`,
    bannerAlt: "Tree plantation drive by Sri Prasanna Pattnaik Memorial Trust",
    examples: [
      "Village and community cleanliness drives",
      "Temple and public space cleaning",
      "Tree plantation drives",
      "Sapling distribution programs",
    ],
    galleryImages: [
      { src: `${ACTIVITY_BASE}/cleanliness-temple-sweep.jpg`, alt: "Women sweeping the temple courtyard during a cleanliness drive" },
      { src: `${ACTIVITY_BASE}/cleanliness-leaf-cleanup.jpg`, alt: "Community members collecting dry leaves during a cleanliness drive" },
      { src: `${ACTIVITY_BASE}/plantation-watering.jpg`, alt: "Volunteer watering a newly planted sapling at a tree plantation drive" },
      { src: `${ACTIVITY_BASE}/plantation-group-banner.jpg`, alt: "Tree plantation drive with Sri Prasanna Pattnaik Memorial Trust banner" },
      { src: `${ACTIVITY_BASE}/plantation-sapling-walk.jpg`, alt: "Women carrying saplings for a tree plantation drive" },
      { src: `${ACTIVITY_BASE}/DSC08974.jpg`, alt: "Saplings donated by the trust" },
      { src: `${ACTIVITY_BASE}/plantation-green-guard.jpg`, alt: "Newly planted sapling protected with trust donor sign" },
      { src: `${ACTIVITY_BASE}/plantation-orange-guard.jpg`, alt: "Sapling donated by Sri Prasanna Pattnaik Memorial Trust" },
      { src: `${ACTIVITY_BASE}/DSC08994.jpg`, alt: "Tree plantation activity" },
      { src: `${ACTIVITY_BASE}/DSC08995.jpg`, alt: "Environmental sustainability program" },
    ],
  },
  {
    slug: "livelihood",
    title: "Women's Livelihood & Handicraft Development",
    shortTitle: "Livelihood",
    icon: "🧵",
    description:
      "Empowering women through handicraft training, traditional craft creation, skill-building workshops, and self-help group enablement in rural Odisha.",
    bannerImage: `${ACTIVITY_BASE}/File_015.jpg`,
    bannerAlt: "Women artisans in a handicraft training session",
    examples: [
      "Handicraft training programs",
      "Traditional applique and craft creation",
      "Skill-building workshops",
      "Self-help group enablement",
    ],
    galleryImages: [
      { src: `${ACTIVITY_BASE}/File_014.jpg`, alt: "Artisan creating traditional applique craft" },
      { src: `${ACTIVITY_BASE}/File_015.jpg`, alt: "Women training in traditional handicrafts" },
      { src: `${ACTIVITY_BASE}/File_016.jpg`, alt: "Handicraft skill-building session" },
      { src: `${ACTIVITY_BASE}/File_017.jpg`, alt: "Women's livelihood development program" },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Medical Assistance",
    shortTitle: "Healthcare",
    icon: "🏥",
    description:
      "Extending accessible healthcare to underserved communities through hospital outreach, medical support, patient assistance, and health awareness programs across Odisha.",
    bannerImage: `${ACTIVITY_BASE}/File_022.jpg`,
    bannerAlt: "Trust members providing patient assistance at a healthcare facility",
    examples: [
      "Hospital outreach programs",
      "Medical support for underserved patients",
      "Patient assistance and follow-up care",
      "Women's health and menstrual hygiene awareness",
    ],
    galleryImages: [
      { src: `${ACTIVITY_BASE}/File_022.jpg`, alt: "Patient assistance at a healthcare facility" },
      { src: `${ACTIVITY_BASE}/File_023.jpg`, alt: "Healthcare outreach with community members" },
      { src: `${ACTIVITY_BASE}/File_003.jpg`, alt: "Women's menstrual health awareness session" },
    ],
  },
];

export function getActivityBySlug(slug: string): ActivityArea | undefined {
  return ACTIVITY_AREAS.find((a) => a.slug === slug);
}

export const EDUCATION_KIT_SECTION = {
  title: "Educational Kit Distribution",
  description:
    "The trust distributed school bags and essential supplies to students across rural communities in Odisha. Each kit carried the SPPMT brand — Educate, Empower, Elevate — helping children start the academic year with dignity and the tools they need to learn.",
  galleryImages: [
    { src: `${ACTIVITY_BASE}/DSC09450.jpg`, alt: "Students with SPPMT educational kits" },
    { src: `${ACTIVITY_BASE}/DSC09384.jpg`, alt: "Educational kit handover" },
    { src: `${ACTIVITY_BASE}/DSC09424.jpg`, alt: "Beneficiary students at distribution drive" },
  ],
  highlights: [
    "School bags with SPPMT branding distributed to primary school students",
    "Community elders and trust members present at distribution events",
    "Supporting students in rural Odisha who lack access to basic school supplies",
  ],
};

export const GALLERY_IMAGES: {
  src: string;
  alt: string;
  category: GalleryCategory;
}[] = [
  { src: "/images/prasanna-patnaik-bw-portrait.png", alt: "Shri Prasanna Pattnaik — portrait", category: "Our Inspiration" },
  { src: "/images/prasanna-patnaik-memorial-portrait.png", alt: "Shri Prasanna Pattnaik — memorial portrait", category: "Our Inspiration" },
  { src: "/images/community-gathering.png", alt: "Shri Prasanna Pattnaik with community members", category: "Our Inspiration" },
  ...ACTIVITY_AREAS.flatMap((area) =>
    area.galleryImages.map((img) => ({
      ...img,
      category: area.shortTitle as GalleryCategory,
    }))
  ),
  ...EDUCATION_KIT_SECTION.galleryImages.map((img) => ({
    ...img,
    category: "Education" as GalleryCategory,
  })),
];

export const GALLERY_CATEGORIES: (GalleryCategory | "All")[] = [
  "All",
  "Our Inspiration",
  "Education",
  "Cleanliness",
  "Livelihood",
  "Healthcare",
];
