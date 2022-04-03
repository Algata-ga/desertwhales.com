import React, { memo } from "react";
import { Container } from "react-bootstrap";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps";
import { PatternCircles, Pattern, PatternHexagons } from "@visx/pattern";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const CustomMarker = ({ description }) => (
    <>
        <g transform="translate(0 -1028.4)">
            <path
                d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z"
                fill="blue"
                transform="translate(0 1028.4)"
                stroke="cyan"
            />
            <path
                d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z"
                fill="red"
                transform="translate(0 1028.4)"
            />
        </g>
    </>
);

const MapChart = ({ setTooltipContent, markers }) => {
    return (
        <Container>
            <ComposableMap
                data-tip=""
                style={{
                    borderRadius: "35%",
                    backgroundColor: "black",
                    backdropFilter: "blur(2px)",
                    WebkitBackdropFilter: "blur(2px)",
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
