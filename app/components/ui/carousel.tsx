'use client';

import { useEffect, useState } from 'react';

interface CarouselProject {
  title: string;
  description: string;
  tech: string;
  image: string;
}

export function ProjectCarousel({ projects }: { projects: CarouselProject[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = projects[currentIndex];

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <>
      <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
        <div className="relative overflow-hidden">
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`View ${current.title} fullscreen`}
            className="block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
          >
            <img
              src={current.image}
              alt={current.title}
              className="block h-72 w-full object-cover transition-opacity duration-500 md:h-80"
            />
          </button>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent" />
        </div>

        <div className="p-6 md:p-8">
          <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl font-bold text-white md:text-2xl">
            {current.title}
          </h3>
          <p className="mb-4 leading-relaxed text-slate-400">
            {current.description}
          </p>
          <p className="text-sm font-medium text-cyan-400">
            <span className="text-slate-500">Stack · </span>
            {current.tech}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/5 px-6 py-5 md:px-8">
          <button
            onClick={goToPrevious}
            className="btn-outline rounded-lg px-4 py-2 text-sm"
          >
            ← Previous
          </button>

          <div className="flex items-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 bg-cyan-400"
                    : "w-1.5 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="btn-outline rounded-lg px-4 py-2 text-sm"
          >
            Next →
          </button>
        </div>
      </div>

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} preview`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close fullscreen image"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white transition-colors hover:bg-white/20 md:right-6 md:top-6"
          >
            ×
          </button>

          <img
            src={current.image}
            alt={current.title}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl shadow-black/50"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
