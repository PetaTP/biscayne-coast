import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Residences from "./Residences";
import Amenities from "./Amenities";
import Gallery from "./Gallery";
import FloorPlans from "./FloorPlans";
import Neighborhood from "./Neighborhood";
import Contact from "./Contact";
import Footer from "./Footer";


export default function App() {
return (
<>
<Navbar />
<Hero />
<Residences />
<Amenities />
<Gallery />
<FloorPlans />
<Neighborhood />
<Contact />
<Footer />
</>
);
}