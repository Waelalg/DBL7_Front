import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function Map({ locations }) {
  return (
    <MapContainer center={[34.0479, 3.0588]} zoom={5} className="h-full w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker key={location.name} position={location.coordinates}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{location.name}</h3>
              <p>Stock Level: {location.stock}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

