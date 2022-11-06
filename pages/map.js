import dynamic from "next/dynamic";
import styles from "../styles/Map.module.scss"

const position = [51.505, -0.09];
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

export default function Map(props) {
    const MapWithNoSSR = dynamic(() => import("../components/map/Map"), {
        ssr: false
    });

    return (
        <div style={styles.mapContainer}>
            <MapWithNoSSR />
        </div>
    )
}

