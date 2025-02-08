"use client"

import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Dynamically import react-leaflet components to avoid SSR errors
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

const locations = [
  { name: "Algiers", coordinates: [36.7538, 3.0588], stock: 5000 },
  { name: "Oran", coordinates: [35.6969, -0.6331], stock: 3500 },
  { name: "Constantine", coordinates: [36.365, 6.6147], stock: 2800 },
  { name: "Annaba", coordinates: [36.9142, 7.7427], stock: 2000 },
  { name: "Ouargla", coordinates: [31.9527, 5.3235], stock: 1500 },
]

export function SupplyChainMap() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Supply Chain Network</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] rounded-lg overflow-hidden">
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
        </div>
      </CardContent>
    </Card>
  )
}
