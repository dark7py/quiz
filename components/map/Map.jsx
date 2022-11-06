import {IconDefault} from "leaflet/src/layer/marker/Icon.Default";

const position = [51.505, -0.09];
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css";

function Map(props) {
    return (
            <MapContainer style={{height: '500px', width: '500px'}} center={[56.851168, 60.629368]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[56.851168, 60.629368]} onClick={() => {
                    console.log('click');}}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>

                </Marker>
            </MapContainer>
    )
}

export default Map
