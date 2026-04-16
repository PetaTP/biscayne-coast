import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./FloorPlans.css";

import plan1 from "./assets/floorplan-1bed.png";
import plan2 from "./assets/floorplan-2bed.png";
import plan3 from "./assets/floorplan-penthouse.png";

export default function FloorPlans() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const plans = useMemo(
    () => [
      {
        title: "1 Bedroom Residence",
        size: "From 850 sq ft",
        beds: "1 Bed",
        baths: "1 Bath",
        image: plan1,
      },
      {
        title: "2 Bedroom Residence",
        size: "From 1,200 sq ft",
        beds: "2 Beds",
        baths: "2 Baths",
        image: plan2,
      },
      {
        title: "Penthouse Collection",
        size: "From 2,500 sq ft",
        beds: "3–4 Beds",
        baths: "2–4 Baths",
        image: plan3,
      },
    ],
    []
  );

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) =>
        prev === null ? prev : (prev - 1 + plans.length) % plans.length
      );
    },
    [plans.length]
  );

  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) =>
        prev === null ? prev : (prev + 1) % plans.length
      );
    },
    [plans.length]
  );

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeModal, showPrev, showNext]);

  return (
    <section className="floorplans" id="floor-plans">
      <div className="floorplans-header">
        <div className="floorplans-header-inner">
          <p className="floorplans-label">Floor Plans</p>

          <h2 className="floorplans-title">
            Designed for space, light, and waterfront living.
          </h2>

          <p className="floorplans-subtitle">
            Thoughtfully designed layouts that balance space, light, and
            functionality for refined coastal living.
          </p>
        </div>
      </div>

      <div className="floorplans-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="floorplan-card"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="floorplan-image-wrapper">
              <img src={plan.image} alt={plan.title} />
            </div>

            <div className="floorplan-info">
              <h3>{plan.title}</h3>
              <p className="floorplan-size">{plan.size}</p>
              <p className="floorplan-details">
                {plan.beds} • {plan.baths}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="floorplan-modal" onClick={closeModal}>
          <button
            className="floorplan-arrow left"
            onClick={showPrev}
            aria-label="Previous floor plan"
          >
            &#8592;
          </button>

          <div
            className="floorplan-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={plans[selectedIndex].image}
              alt={plans[selectedIndex].title}
              className="floorplan-modal-image"
            />

            <div className="floorplan-modal-info">
              <h3>{plans[selectedIndex].title}</h3>
              <p>{plans[selectedIndex].size}</p>
              <p>
                {plans[selectedIndex].beds} • {plans[selectedIndex].baths}
              </p>
            </div>
          </div>

          <button
            className="floorplan-arrow right"
            onClick={showNext}
            aria-label="Next floor plan"
          >
            &#8594;
          </button>

          <button
            className="floorplan-close"
            onClick={closeModal}
            aria-label="Close floor plans"
          >
            &#10005;
          </button>
        </div>
      )}
    </section>
  );
}