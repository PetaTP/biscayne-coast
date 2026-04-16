import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div
            className="footer-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Biscayne Coast
          </div>

          <p className="footer-description">
            Refined waterfront residences designed for elevated coastal living in
            the heart of Miami.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Explore</h4>
            <button
              onClick={() =>
                document
                  .getElementById("residences")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Residences
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("amenities")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Amenities
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Gallery
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("floor-plans")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Floor Plans
            </button>
          </div>

          <div className="footer-column">
            <h4>Neighborhood</h4>
            <button
              onClick={() =>
                document
                  .getElementById("neighborhood")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Miami Beach
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("neighborhood")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Design District
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("neighborhood")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Wynwood
            </button>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Schedule a Tour
            </button>
            <a href="mailto:hello@biscaynecoast.com">hello@biscaynecoast.com</a>
            <a href="tel:+13055551234">(305) 555-1234</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Biscayne Coast. All rights reserved.</p>
      </div>
    </footer>
  );
}