import { MapChart } from "../../components";
import { useState } from "react";
import ReactTooltip from "react-tooltip";
const markers = [
    { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
    { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
    { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];

const KOIMap = () => {
    const [content, setContent] = useState("");
    return (
        <section>
            <MapChart setTooltipContent={setContent} markers={markers} />
            <ReactTooltip>{content}</ReactTooltip>
        </section>
    );
};

export default KOIMap;
