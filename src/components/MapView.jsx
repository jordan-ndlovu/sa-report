import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { categoryIcon, categoryLabel } from '../data/categories'
import { timeAgo } from '../data/time'

// Default marker icons don't load correctly with bundlers unless
// explicitly pointed at the CDN assets.
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

export default function MapView({ reports, onConfirm }) {
  const center = reports.length
    ? [reports[0].lat, reports[0].lng]
    : [-26.2041, 28.0473] // Johannesburg default

  return (
    <div className="map-wrap">
      <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {reports.map((r) => (
          <Marker key={r.id} position={[r.lat, r.lng]} icon={markerIcon}>
            <Popup>
              <strong>{categoryIcon(r.category)} {r.title}</strong>
              <br />
              {categoryLabel(r.category)} · {timeAgo(r.reported_at)}
              <br />
              👍 {r.affected_count} people affected
              <br />
              <button onClick={() => onConfirm(r.id)} style={{ marginTop: 6 }}>
                Still there
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
