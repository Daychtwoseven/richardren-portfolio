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
        backgroundColor: "rgba(30, 41, 59, 0.6)",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #334155",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
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
            backgroundColor: "rgba(30, 41, 59, 0.8)",
            color: "#38bdf8",
            border: "1px solid #334155",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(6, 182, 212, 0.15)";
            e.currentTarget.style.borderColor = "#06b6d4";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.8)";
            e.currentTarget.style.borderColor = "#334155";
          }}
        >
          ← Previous
        </button>

        <div style={{ color: "#94a3b8", fontSize: "14px", fontWeight: "600" }}>
          {currentIndex + 1} / {projects.length}
        </div>

        <button
          onClick={goToNext}
          style={{
            backgroundColor: "rgba(30, 41, 59, 0.8)",
            color: "#38bdf8",
            border: "1px solid #334155",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(6, 182, 212, 0.15)";
            e.currentTarget.style.borderColor = "#06b6d4";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.8)";
            e.currentTarget.style.borderColor = "#334155";
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
