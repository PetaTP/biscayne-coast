import React, { useState } from "react";
import "./Gallery.css";

import gallery1 from "./assets/exterior-real.png";
import gallery2 from "./assets/res1.PNG";
import gallery3 from "./assets/res2.PNG";
import gallery4 from "./assets/res3.PNG";
import gallery5 from "./assets/pool.png";
import gallery6 from "./assets/spa.PNG";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    { src: gallery1, alt: "Biscayne Coast exterior", className: "tall" },
    { src: gallery2, alt: "1 Bedroom Residence", className: "small" },
    { src: gallery3, alt: "2 Bedroom Residence", className: "wide" },
    { src: gallery4, alt: "Penthouse Collection", className: "tall" },
    { src: gallery5, alt: "Waterfront Pool", className: "wide" },
    { src: gallery6, alt: "Spa & Wellness", className: "small" },
  ];

  const closeModal = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <div className="gallery-header-inner">
          <p className="gallery-label">Gallery</p>
          <h2 className="gallery-title">Inside a life on the water.</h2>
          <p className="gallery-subtitle">
            A glimpse of coastal living, from sunlit interiors to expansive
            waterfront views.
          </p>
        </div>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-item ${image.className}`}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="gallery-modal" onClick={closeModal}>
          <button
            className="gallery-arrow left"
            onClick={showPrev}
            aria-label="Previous image"
          >
            &#8592;
          </button>

          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="gallery-modal-image"
            />
          </div>

          <button
            className="gallery-arrow right"
            onClick={showNext}
            aria-label="Next image"
          >
            &#8594;
          </button>

          <button
            className="gallery-close"
            onClick={closeModal}
            aria-label="Close gallery"
          >
            &#10005;
          </button>
        </div>
      )}
    </section>
  );
}