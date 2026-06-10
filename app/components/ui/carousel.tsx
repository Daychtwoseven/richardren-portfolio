'use client';

import { useState } from 'react';

interface CarouselProject {
  title: string;
  description: string;
  tech: string;
  image: string;
}

export function ProjectCarousel({ projects }: { projects: CarouselProject[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
      <div className="relative overflow-hidden">
        <img
          src={current.image}
          alt={current.title}
          className="block h-72 w-full object-cover transition-opacity duration-500 md:h-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent" />
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
  );
}
