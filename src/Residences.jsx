import React from "react";
import "./Residences.css";
import res1 from "./assets/res1.PNG";
import res2 from "./assets/res2.PNG";
import res3 from "./assets/res3.PNG";

export default function Residences() {
return (
<section className="residences" id="residences">
<div className="residences-header">
<div className="residences-header-inner">
<p className="residences-label">Residences</p>

<h2 className="residences-title">
Interiors designed for light, comfort, and coastal living.
</h2>

<p className="residences-subtitle">
Thoughtfully designed interiors with expansive views, refined finishes,
and seamless indoor-outdoor living.
</p>
</div>
</div>

<div className="residence-grid">
<div className="residence-card">
<div className="residence-image-wrapper">
<img
src={res1}
alt="1 Bedroom Residence"
className="residence-image"
/>
</div>

<div className="residence-content">
<h3 className="residence-card-title">1 Bedroom Residence</h3>
<p className="residence-card-text">From 850 sq ft</p>
</div>
</div>

<div className="residence-card">
<div className="residence-image-wrapper">
<img
src={res2}
alt="2 Bedroom Residence"
className="residence-image"
/>
</div>

<div className="residence-content">
<h3 className="residence-card-title">2 Bedroom Residence</h3>
<p className="residence-card-text">From 1,200 sq ft</p>
</div>
</div>

<div className="residence-card">
<div className="residence-image-wrapper">
<img
src={res3}
alt="Penthouse Collection"
className="residence-image"
/>
</div>

<div className="residence-content">
<h3 className="residence-card-title">Penthouse Collection</h3>
<p className="residence-card-text">From 2,500 sq ft</p>
</div>
</div>
</div>
</section>
);
}
