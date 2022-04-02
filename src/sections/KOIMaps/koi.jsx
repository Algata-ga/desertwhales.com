import { MapChart } from "../../components";
import { useState } from "react";
import ReactTooltip from "react-tooltip";

import InfinityPad from "../../assets/Infinity.png";
import GameFi from "../../assets/Gamefi.png";
import MoonStarter from "../../assets/moonstarter.png";

import { useKOIs } from "../../queries";

const KOIMap = () => {
    const markers = useKOIs();
    const [content, setContent] = useState("");
    const toolTipDisplay = (data) => {
        if (data === "") return "";
        return `<h2>${data.name}</h2><img height="50px" src=${data.image} alt="${data.name}"/>`;
    };

    if (markers.isLoading) {
        return <h4>Loading</h4>;
    }
    return (
        <section>
            <MapChart setTooltipContent={setContent} markers={markers.data} />
            <ReactTooltip html={true} clickable={true}>
                {toolTipDisplay(content)}
            </ReactTooltip>
        </section>
    );
};

export default KOIMap;
