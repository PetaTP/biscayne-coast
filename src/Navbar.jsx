import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo" onClick={scrollToTop}>
          Biscayne Coast
        </div>

        <ul className="nav-links">
          <li onClick={() => scrollToSection("residences")}>Residences</li>
          <li onClick={() => scrollToSection("amenities")}>Amenities</li>
          <li onClick={() => scrollToSection("gallery")}>Gallery</li>
          <li onClick={() => scrollToSection("floor-plans")}>Floor Plans</li>
          <li onClick={() => scrollToSection("neighborhood")}>Neighborhood</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        <button type="button" className="cta" onClick={scrollToContact}>
          Schedule a Tour
        </button>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button type="button" onClick={() => scrollToSection("residences")}>
          Residences
        </button>
        <button type="button" onClick={() => scrollToSection("amenities")}>
          Amenities
        </button>
        <button type="button" onClick={() => scrollToSection("gallery")}>
          Gallery
        </button>
        <button type="button" onClick={() => scrollToSection("floor-plans")}>
          Floor Plans
        </button>
        <button type="button" onClick={() => scrollToSection("neighborhood")}>
          Neighborhood
        </button>
        <button type="button" onClick={() => scrollToSection("contact")}>
          Contact
        </button>
        <button
          type="button"
          className="mobile-tour-button"
          onClick={scrollToContact}
        >
          Schedule a Tour
        </button>
      </div>
    </nav>
  );
}