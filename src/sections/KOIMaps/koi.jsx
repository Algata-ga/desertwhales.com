import { MapChart } from "../../components";
import { useState } from "react";
import ReactTooltip from "react-tooltip";
const markers = [
    { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
    { markerOffset: 15, name: "Godwin", coordinates: [26.55, 55.26] },
    { markerOffset: 15, name: "K K Haridev", coordinates: [76.4245, 10.2452] },
];

const KOIMap = () => {
    const [content, setContent] = useState("");
    const toolTipDisplay = (data) => {
        if (data === "") return "";
        return `<h2>${data}</h2>`;
    };
    return (
        <section>
            <MapChart setTooltipContent={setContent} markers={markers} />
            <ReactTooltip html={true} clickable={true}>
                {toolTipDisplay(content)}
            </ReactTooltip>
        </section>
    );
};

export default KOIMap;
