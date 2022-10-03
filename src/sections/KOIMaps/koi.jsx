import { MapChart } from "../../components";
import { useState } from "react";
import ReactTooltip from "react-tooltip";
import { useKOIs } from "../../queries";
import style from "./koi.module.css";
import { Waveform } from '@uiball/loaders'
import { Container } from "react-bootstrap";
const KOIMap = () => {
    const markers = useKOIs();
    const [content, setContent] = useState("");
    const toolTipDisplay = (data) => {
        if (data === "") return "";
        //return `<h2>${data.name}</h2><img height="50px" src=${data.image} alt="${data.name}"/>`;
        return `<div style="font-family: 'Raleway', sans-serif;">${data.description}</div>`;
    };

    return (
        <section>
            
            <h1 className={style.heading}>KOLs</h1>
            {
                markers.isLoading?

                    <Container>
                        <div style={{ width: "100%", aspectRatio: "8/6", display: "flex", justifyContent: "center", background: "#121212" }}>
                            <div className={style.loader}>
                                <Waveform
                                    size={40}
                                    lineWeight={3.5}
                                    speed={1}
                                    color="#BD9560"
                                />
                            </div>
                        </div>
                    </Container>
                    :
                    <><MapChart setTooltipContent={setContent} markers={markers.data} />
                        <ReactTooltip html={true} clickable={true}>
                            {toolTipDisplay(content)}
                        </ReactTooltip></>
            }
            
        </section>
    );
};

export default KOIMap;
