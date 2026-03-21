"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const CAROUSEL_IMAGES = [
  { src: "/images/admin-block-school.png", alt: "Administrative block of the school" },
  { src: "/images/arogya-mandir-signboard-odia.png", alt: "Arogya Mandir signboard in Odia" },
  { src: "/images/bhuban-fire-station.png", alt: "Bhuban fire station" },
  { src: "/images/blood-bank-bhuban.png", alt: "Blood bank at Bhuban, founded by Shri Prasanna Pattnaik" },
  { src: "/images/blood-donation-centre.png", alt: "Blood donation centre" },
  { src: "/images/blood-samples.png", alt: "Blood sample collection" },
  { src: "/images/brahmani-bridge-1.png", alt: "Brahmani Setu bridge" },
  { src: "/images/brahmani-bridge-2.png", alt: "Brahmani bridge construction" },
  { src: "/images/brahmani-bridge-odia.png", alt: "Brahmani bridge plaque in Odia" },
  { src: "/images/community-gathering.png", alt: "Community gathering" },
  { src: "/images/e-library.png", alt: "E-library facility" },
  { src: "/images/health-centre-signboard.png", alt: "Health centre signboard" },
  { src: "/images/nurse-iv-drip.png", alt: "Nurse administering IV drip" },
  { src: "/images/school-building-yellow.png", alt: "School building" },
  { src: "/images/school-gate-1.png", alt: "School gate" },
  { src: "/images/school-gate-bhusal.png", alt: "Bhusal school gate" },
  { src: "/images/school-gate-kamakhyanagar.png", alt: "Kamakhyanagar school gate" },
  { src: "/images/school-gate-odia.png", alt: "School gate with Odia signage" },
  { src: "/images/students-assembly-outdoor.png", alt: "Students at outdoor assembly" },
  { src: "/images/students-classroom.png", alt: "Students in classroom" },
  { src: "/images/vocational-block.png", alt: "Vocational training block" },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  return (
    <div
      className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {CAROUSEL_IMAGES.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Previous image"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Next image"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white w-5" : "bg-white/50"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
