import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup, useMapEvents } from 'react-leaflet'

export default function Map({ initialPosition, position, setPosition, popup }) {
    return (
        <MapContainer
            center={initialPosition}
            zoom={15}
            scrollWheelZoom={true}
            easeLinearity={0.35}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} >
                <MapEvents setPosition={setPosition} />
                <Popup>
                    {popup}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

const MapEvents = ({ setPosition }) => {
    useMapEvents({
        click(e) {
            setPosition([e.latlng.lat, e.latlng.lng])
        },
    });
    return false;
}