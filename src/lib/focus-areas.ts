const IMAGE_BASE = "/images";

export interface FocusArea {
  slug: string;
  title: string;
  href: string;
  icon: string;
  description: string;
  bannerImage: string;
  bannerAlt: string;
}

export const FOCUS_AREAS: FocusArea[] = [
  {
    slug: "education",
    title: "Education",
    href: "/education",
    icon: "🎓",
    description:
      "Educational kit distribution, school support, and student mentorship to help children across Odisha learn with dignity.",
    bannerImage: `${IMAGE_BASE}/activities/DSC09450.jpg`,
    bannerAlt: "Students receiving educational kits from the trust",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    href: "/healthcare",
    icon: "🏥",
    description:
      "Hospital outreach, medical support, patient assistance, and women's health awareness for underserved communities across Odisha.",
    bannerImage: `${IMAGE_BASE}/activities/File_022.jpg`,
    bannerAlt: "Healthcare outreach by the trust",
  },
  {
    slug: "skill-development",
    title: "Skill Development",
    href: "/employment",
    icon: "🧵",
    description:
      "Vocational training, handicraft and livelihood programs, and skill-building workshops that help women and youth earn sustainable incomes.",
    bannerImage: `${IMAGE_BASE}/activities/File_015.jpg`,
    bannerAlt: "Women in a skill development and handicraft training session",
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    href: "/agriculture",
    icon: "🌾",
    description:
      "Farmer training, sustainable farming practices, and rural livelihood support to strengthen agricultural communities in Odisha.",
    bannerImage: `${IMAGE_BASE}/community-gathering.png`,
    bannerAlt: "Rural community in Odisha",
  },
  {
    slug: "civic-sense",
    title: "Civic Sense",
    href: "/civic-sense",
    icon: "🌱",
    description:
      "Cleanliness drives, tree plantation, environmental awareness, and civic responsibility programs that build stronger communities.",
    bannerImage: `${IMAGE_BASE}/activities/cleanliness-temple-sweep.jpg`,
    bannerAlt: "Community cleanliness drive at a temple",
  },
];
