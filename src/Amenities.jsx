import React from "react";
import "./Amenities.css";
import {
Waves,
Sailboat,
Dumbbell,
Flower,
Laptop,
ConciergeBell,
} from "lucide-react";

export default function Amenities() {
const amenities = [
{
icon: <Waves size={28} />,
title: "Oceanfront Pool",
description:
"A serene waterfront pool deck designed for slow mornings and sunset swims.",
},
{
icon: <Sailboat size={28} />,
title: "Private Marina",
description:
"Direct access to the water with private marina service for residents.",
},
{
icon: <Dumbbell size={28} />,
title: "Fitness Center",
description:
"A light-filled fitness studio with premium equipment and ocean views.",
},
{
icon: <Flower size={28} />,
title: "Spa & Wellness",
description:
"A calming space for recovery, restoration, and everyday wellness.",
},
{
icon: <Laptop size={28} />,
title: "Co-Working Lounge",
description:
"Quiet, refined workspaces for focused mornings and flexible living.",
},
{
icon: <ConciergeBell size={28} />,
title: "24/7 Concierge",
description:
"Personalized service and support, available whenever you need it.",
},
];

return (
<section className="amenities" id="amenities">
<div className="amenities-header">
<div className="amenities-header-inner">
<p className="amenities-label">Amenities</p>

<h2 className="amenities-title">
A collection of amenities designed around the water.
</h2>

<p className="amenities-subtitle">
Curated spaces designed to bring ease, comfort, and elevated coastal
living to every day.
</p>
</div>
</div>

<div className="amenities-grid">
{amenities.map((item, index) => (
<div className="amenity-card" key={index}>
<div className="amenity-icon">{item.icon}</div>
<h3 className="amenity-card-title">{item.title}</h3>
<p className="amenity-card-text">{item.description}</p>
</div>
))}
</div>
</section>
);
}