import React, { memo } from "react";
import { Container } from "react-bootstrap";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps";
import { PatternCircles } from "@visx/pattern";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MapChart = ({ setTooltipContent, markers }) => {
    return (
        <Container>
            <ComposableMap
                data-tip=""
                style={{
                    borderRadius: "35%",
                    backgroundColor: "#121212",
                }}
            >
                {/* TODO: define custom pattern without clipping and we are good*/}
                <PatternCircles
                    id={"mapCircleFill"}
                    height={9}
                    width={9}
                    fill="#545454"
                    backgroundColor="black"
                    complement
                />
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                style={{
                                    default: {
                                        fill: "url(#mapCircleFill)",
                                        outline: "none",
                                        stroke: "#FBDA83",
                                        strokeWidth: "0",
                                    },
                                    hover: {
                                        fill: "url(#mapCircleFill)",
                                        outline: "none",
                                        stroke: "#FBDA83",
                                        strokeWidth: "0",
                                    },
                                    pressed: {
                                        fill: "url(#mapCircleFill)",
                                        outline: "none",
                                        stroke: "#FBDA83",
                                        strokeWidth: "0",
                                    },
                                }}
                            />
                        ))
                    }
                </Geographies>
                {markers.map((loc) => (
                    <Marker
                        key={loc.id}
                        coordinates={loc.coordinates}
                        onMouseEnter={() => {
                            setTooltipContent(loc);
                        }}
                        onMouseLeave={() => {
                            setTooltipContent("");
                        }}
                    >
                        <CustomMarker name={loc.name} />
                    </Marker>
                ))}
            </ComposableMap>
        </Container>
    );
};

export default memo(MapChart);
