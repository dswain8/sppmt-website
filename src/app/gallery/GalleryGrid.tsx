"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

type Category = "All" | "Our Inspiration" | "Healthcare" | "Education" | "Infrastructure" | "Community";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
}

const IMAGES: GalleryImage[] = [
  { src: "/images/prasanna-patnaik-bw-portrait.png", alt: "Shri Prasanna Pattnaik — B&W portrait", category: "Our Inspiration" },
  { src: "/images/prasanna-patnaik-memorial-portrait.png", alt: "Shri Prasanna Pattnaik — memorial portrait", category: "Our Inspiration" },
  { src: "/images/community-gathering.png", alt: "Shri Prasanna Pattnaik with community members", category: "Our Inspiration" },

  { src: "/images/health-centre-signboard.png", alt: "Health centre founded by Shri Prasanna Pattnaik, Mahulpal", category: "Healthcare" },
  { src: "/images/arogya-mandir-signboard-odia.png", alt: "Arogya Mandir founded by Shri Prasanna Pattnaik", category: "Healthcare" },
  { src: "/images/blood-bank-bhuban.png", alt: "Blood bank at Bhuban, founded by Shri Prasanna Pattnaik", category: "Healthcare" },
  { src: "/images/blood-donation-centre.png", alt: "Blood donation centre, Bhuban", category: "Healthcare" },
  { src: "/images/nurse-iv-drip.png", alt: "Nurse attending a patient at a healthcare centre", category: "Healthcare" },
  { src: "/images/blood-samples.png", alt: "Blood sample tubes in a diagnostic lab", category: "Healthcare" },

  { src: "/images/school-gate-kamakhyanagar.png", alt: "High School founded by Shri Prasanna Pattnaik, Kamakhyanagar", category: "Education" },
  { src: "/images/school-gate-bhusal.png", alt: "STN Govt High School, Bhusal Kirttanpur — founded by Shri Prasanna Pattnaik", category: "Education" },
  { src: "/images/school-building-yellow.png", alt: "School built by Shri Prasanna Pattnaik in Bhuban", category: "Education" },
  { src: "/images/admin-block-school.png", alt: "Administrative Block, STN Govt High School", category: "Education" },
  { src: "/images/vocational-block.png", alt: "Vocational Block founded by Shri Prasanna Pattnaik", category: "Education" },
  { src: "/images/e-library.png", alt: "E-Library founded by Shri Prasanna Pattnaik", category: "Education" },
  { src: "/images/students-classroom.png", alt: "Students in classroom", category: "Education" },
  { src: "/images/school-gate-1.png", alt: "School founded in the region by Shri Prasanna Pattnaik", category: "Education" },

  { src: "/images/brahmani-bridge-odia.png", alt: "Brahmani Setu — built by Shri Prasanna Pattnaik", category: "Infrastructure" },
  { src: "/images/brahmani-bridge-1.png", alt: "Brahmani Setu bridge built by Shri Prasanna Pattnaik", category: "Infrastructure" },
  { src: "/images/brahmani-bridge-2.png", alt: "Brahmani Setu — another angle", category: "Infrastructure" },
  { src: "/images/brahmani-bridge-aerial.png", alt: "Brahmani Setu — aerial view over the river", category: "Infrastructure" },
  { src: "/images/bhuban-fire-station.png", alt: "Bhuban Fire Station, built by Shri Prasanna Pattnaik", category: "Infrastructure" },
  { src: "/images/edu-bhuban-fire-station.png", alt: "Bhuban Fire Station gate, Dist. Dhenkanal", category: "Infrastructure" },
];

const CATEGORIES: Category[] = [
  "All",
  "Our Inspiration",
  "Healthcare",
  "Education",
  "Infrastructure",
  "Community",
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const filtered =
    activeCategory === "All"
      ? IMAGES
      : IMAGES.filter((img) => img.category === activeCategory);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-orange text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((img) => (
              <button
                key={img.src}
                onClick={() => setLightbox(img)}
                className="group relative h-56 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs">{img.alt}</p>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-12">
              No images in this category yet.
            </p>
          )}
        </div>
      </section>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
