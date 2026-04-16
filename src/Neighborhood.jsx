import React from "react";
import "./Neighborhood.css";

import miamiBeach from "./assets/miami-beach.jpg";
import designDistrict from "./assets/design-district.jpg";
import wynwood from "./assets/wynwood.jpg";
import baysideMarina from "./assets/bayside-marina.jpg";

export default function Neighborhood() {
  const places = [
    {
      title: "Miami Beach",
      time: "10 min away",
      description:
        "White-sand beaches, luxury hotels, and a vibrant waterfront lifestyle.",
      image: miamiBeach,
    },
    {
      title: "Design District",
      time: "8 min away",
      description:
        "Designer boutiques, acclaimed restaurants, and contemporary art.",
      image: designDistrict,
    },
    {
      title: "Wynwood",
      time: "6 min away",
      description:
        "Miami’s creative hub, known for galleries, nightlife, and murals.",
      image: wynwood,
    },
    {
      title: "Bayside Marina",
      time: "5 min away",
      description:
        "Private marinas, waterfront dining, and easy access to Biscayne Bay.",
      image: baysideMarina,
    },
  ];

  return (
    <section className="neighborhood" id="neighborhood">
      <div className="neighborhood-header">
        <div className="neighborhood-header-inner">
          <p className="neighborhood-label">The Neighborhood</p>

          <h2 className="neighborhood-title">
            Connected to the best of Miami.
          </h2>

          <p className="neighborhood-description">
            Biscayne Coast places you moments from the city’s most desirable
            destinations — from waterfront dining and marinas to luxury
            shopping, culture, and world-class beaches.
          </p>
        </div>
      </div>

      <div className="neighborhood-grid">
        {places.map((place) => (
          <div className="neighborhood-card" key={place.title}>
            <div className="neighborhood-image-wrapper">
              <img
                src={place.image}
                alt={place.title}
                className="neighborhood-image"
              />
            </div>

            <div className="neighborhood-content">
              <div className="neighborhood-meta">
                <h3>{place.title}</h3>
                <span>{place.time}</span>
              </div>

              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}