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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-green-dark text-center mb-12">
            {title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
