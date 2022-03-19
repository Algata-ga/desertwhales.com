import { VectorMap } from "@react-jvectormap/core";
import { worldMerc, worldMill } from "@react-jvectormap/world";
import worldCustom from "../../assets/map.json";

const Map = ({ width, height }) => {
    return (
        <div style={{ width: width, height: height }}>
            <VectorMap
                map={worldCustom}
                backgroundColor="#000"
                markerStyle={{
                    initial: {
                        fill: "#FFFF",
                        stroke: "#383f47",
                    },
                }}
                regionStyle={{
                    initial: {
                        fill: "#FFF",
                    },
                }}
                containerClassName="map"
            />
        </div>
    );
};

export default Map;
