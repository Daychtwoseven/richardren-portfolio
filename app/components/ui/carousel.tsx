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
    <div
      style={{
        backgroundColor: "#0f172a",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #334155",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <img
          src={current.image}
          alt={current.title}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "30px" }}>
        <h3 style={{ marginTop: 0, marginBottom: "15px", fontSize: "20px" }}>
          {current.title}
        </h3>
        <p style={{ lineHeight: "1.6", marginBottom: "15px" }}>
          {current.description}
        </p>
        <p style={{ color: "#38bdf8", marginBottom: "20px" }}>
          Tech: {current.tech}
        </p>
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 30px",
          borderTop: "1px solid #334155",
        }}
      >
        <button
          onClick={goToPrevious}
          style={{
            backgroundColor: "#1e293b",
            color: "#e2e8f0",
            border: "1px solid #334155",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#334155";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#1e293b";
          }}
        >
          ← Previous
        </button>

        <div style={{ color: "#94a3b8", fontSize: "14px" }}>
          {currentIndex + 1} / {projects.length}
        </div>

        <button
          onClick={goToNext}
          style={{
            backgroundColor: "#1e293b",
            color: "#e2e8f0",
            border: "1px solid #334155",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#334155";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#1e293b";
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
