"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ImageLightbox from "@/components/ImageLightbox";

interface ActivityGalleryProps {
  images: { src: string; alt: string }[];
  title?: string;
}

export default function ActivityGallery({
  images,
  title = "Gallery",
}: ActivityGalleryProps) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  if (images.length === 0) return null;

  return (
    <>
      <section className="section shell">
        <div className="eyebrow">{title}</div>
        <div className="notes-grid" style={{ marginTop: 24 }}>
            {images.map((img, i) => (
              <AnimateOnScroll key={img.src} delay={i * 60}>
                <button
                  type="button"
                  onClick={() => setLightbox(img)}
                  className="relative aspect-[4/3] overflow-hidden group cursor-pointer w-full"
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
                </button>
              </AnimateOnScroll>
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
