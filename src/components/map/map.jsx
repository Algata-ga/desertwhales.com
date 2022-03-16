import { VectorMap } from "@react-jvectormap/core";
import { worldMerc, worldMill } from "@react-jvectormap/world";

const Map = ({ width, height }) => {
    const markers = [
        {
            latLng: [2.9, 12.45],
            name: "Vatican City",
            value: 200,
        },
        {
            latLng: [11, 12.45],
            name: "WOW",
            value: 30,
        },
        {
            latLng: [-33, 12.45],
            name: "WAZZZA",
            value: 16,
        },
    ];
    return (
        <div style={{ width: width, height: height }}>
            <VectorMap
                map={worldMill}
                backgroundColor="#000"
                markerStyle={{
                    initial: {
                        fill: "#FFFF",
                        stroke: "#383f47",
                    },
                }}
                series={{
                    markers: [
                        {
                            attribute: "r",
                            scale: [5, 20],
                            values: [60, 6, 54],
                            normalizeFunction: "polynomial",
                        },
                    ],
                }}
                regionStyle={{
                    initial: {
                        fill: "#128da7",
                    },
                    hover: {
                        fill: "#A0D1DC",
                    },
                }}
                markers={markers}
                style={{
                    width: "100%",
                    height: "100%",
                }}
                containerClassName="map"
            />
        </div>
    );
};

export default Map;
