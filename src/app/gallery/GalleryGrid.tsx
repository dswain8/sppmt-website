"use client";

import { useState } from "react";
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

  const seen = new Set<string>();
  const photos = filtered.filter((img) => {
    if (seen.has(img.src)) return false;
    seen.add(img.src);
    return true;
  });

  return (
    <>
      <section className="section shell gallery-archive">
        <div className="eyebrow">Every photograph</div>
        <div className="gallery-filters" role="tablist" aria-label="Photograph categories">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="notes-grid">
          {photos.map((img) => (
            <button
              key={`${img.category}-${img.src}`}
              type="button"
              className="note-card"
              onClick={() => setLightbox(img)}
            >
              <div className="photo note-photo loaded">
                <img src={img.src} alt={img.alt} />
              </div>
              <div className="note-body">
                <span>{img.category}</span>
                <h3>{img.alt}</h3>
              </div>
            </button>
          ))}
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
