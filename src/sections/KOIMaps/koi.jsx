import { MapChart } from "../../components";
import { useState } from "react";
import ReactTooltip from "react-tooltip";
import { useKOIs } from "../../queries";
import style from "./koi.module.css";

const KOIMap = () => {
    const markers = useKOIs();
    const [content, setContent] = useState("");
    const toolTipDisplay = (data) => {
        if (data === "") return "";
        //return `<h2>${data.name}</h2><img height="50px" src=${data.image} alt="${data.name}"/>`;
        return `<div style="font-family: 'Raleway', sans-serif;">${data.description}</div>`;
    };

    if (markers.isLoading) {
        return <h4>Loading</h4>;
    }
    return (
        <section>
            <h1 className={style.heading}>KOLs</h1>
            <MapChart setTooltipContent={setContent} markers={markers.data} />
            <ReactTooltip html={true} clickable={true}>
                {toolTipDisplay(content)}
            </ReactTooltip>
        </section>
    );
};

export default KOIMap;
