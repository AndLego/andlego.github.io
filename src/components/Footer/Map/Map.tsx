import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps";
import style from "./Map.module.css"

const MapChart = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [74.0, -10.0, 0],
                center: [-5, -3],
                scale: 1600
            }}
            style={{ width: "100%", height: "100%" }}
        >
            <Geographies
                geography="/features.json"
                fill="rgba(7, 12, 31, 0.253)"
                stroke="#FFFFFF"
                strokeWidth={0.8}

            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[-74.05, 4.85]}
                dx={-110}
                dy={-30}
                connectorProps={{
                    stroke: "#E2E8F0",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }}
            >
                <text className={style.greet} x="-8" textAnchor="end" alignmentBaseline="middle" fill="#E2E8F0">
                    {"Hello from Bogota"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default MapChart;
