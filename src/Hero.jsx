import React from "react";
import "./Hero.css";
import heroImage from "./assets/biscayne-coast-hero.png";

export default function Hero() {
const handleScrollToTour = () => {
const section = document.getElementById("contact");
if (section) {
section.scrollIntoView({ behavior: "smooth" });
}
};

return (
<section className="hero">
<img src={heroImage} alt="Biscayne Coast" className="hero-image" />

<div className="hero-overlay" />

<div className="hero-content">
<p className="hero-eyebrow">Waterfront Residences</p>
<h1>Biscayne Coast</h1>
<p className="hero-description">
A refined coastal living experience designed for calm mornings,
elevated views, and modern family life.
</p>

<button className="hero-button" onClick={handleScrollToTour}>
Schedule a Private Tour
</button>
</div>
</section>
);
}