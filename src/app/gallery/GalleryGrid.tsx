"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import {
  GALLERY_IMAGES,
  GALLERY_CATEGORIES,
  type GalleryCategory,
} from "@/lib/activities";

type FilterCategory = GalleryCategory | "All";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  const filtered =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 border-b border-gray-200">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`pb-3 text-sm transition-colors border-b-2 -mb-px ${
                  activeCategory === cat
                    ? "border-orange text-orange font-semibold"
                    : "border-transparent text-gray-500 hover:text-green-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightbox(img)}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <span className="absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.14em] text-white">
                  {img.category}
                </span>
              </button>
            ))}
          </div>
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
