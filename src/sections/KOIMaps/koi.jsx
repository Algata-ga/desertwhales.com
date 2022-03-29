import { MapChart } from "../../components";
import { useState } from "react";
import ReactTooltip from "react-tooltip";

import InfinityPad from "../../assets/Infinity.png";
import GameFi from "../../assets/Gamefi.png";
import MoonStarter from "../../assets/moonstarter.png";

const markers = [
    {
        markerOffset: 15,
        name: "GameFi",
        image: GameFi,
        coordinates: [-68.1193, -16.4897],
    },
    {
        markerOffset: 15,
        name: "InfinityPad",
        image: InfinityPad,
        coordinates: [-47.8825, -15.7942],
    },
    {
        markerOffset: 15,
        name: "MoonStarter",
        image: MoonStarter,
        coordinates: [-77.0428, -12.0464],
    },
    {
        markerOffset: 15,
        name: "InfinityPad 2",
        image: InfinityPad,
        coordinates: [26.55, 55.26],
    },
    {
        markerOffset: 15,
        name: "GameFi",
        image: GameFi,
        coordinates: [76.4245, 10.2452],
    },
];

const KOIMap = () => {
    const [content, setContent] = useState("");
    const toolTipDisplay = (data) => {
        if (data === "") return "";
        return `<h2>${data.name}</h2><img height="50px" src=${data.image} alt="${data.name}"/>`;
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
