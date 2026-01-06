import { useEffect, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import milPalmeras from './assets/mil_palmeras.png'
import chat_gpt from './assets/chat_gpt.png'
import panaderia from './assets/panaderia.png'
import './Map.css'

interface Location {
  id: number
  lat: number
  lng: number
  title: string
  description: string
  image: string
}

const locations: Location[] = [
  {
    id: 1,
    lat: 37.86318,
    lng: -0.79013,
    title: 'Av. de Francia, Pilar de la Horadada',
    description: 'El lugar donde surgió la magia',
    image: milPalmeras,
  },
  {
    id: 2,
    lat: 37.86797,
    lng: -0.79455,
    title: 'C. Salamanca, Pilar de la Horadada',
    description: '¿Te acuerdas cuándo chat gpt me dijo que te pidiera ser mi novia?',
    image: chat_gpt,
  },
  {
    id: 3,
    lat: 37.7566770835343,
    lng: -0.832792909579095,
    title: 'C. Pintor Pedro Flores, Los Narejos',
    description: 'La panadería infernal donde pasamos un verano entero. Al menos estábamos entretenidos con Román',
    image: panaderia,
  },
]

function Map() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mapContainer = document.getElementById('map')
    if (!mapContainer) return

    mapContainer.innerHTML = ''

    const map = L.map('map').setView([37.86318, -0.79013], 14)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map)

    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: '<div class="marker-pin"></div>',
      iconSize: [30, 42],
      iconAnchor: [15, 42],
    })

    locations.forEach((location) => {
      const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(
        map,
      )
      marker.on('click', () => setSelectedLocation(location))
    })

    return () => {
      map.remove()
    }
  }, [])

  return (
    <div id="mapa" className="map-container">
      <h2>Mapa de Ubicaciones</h2>
      <p className="map-intro">
        Mi lugar favorito eres tú. Pero como tú no sales en los mapas, he elegido
        recordar estos tres lugares icónicos de nuestra relación.
      </p>
      <div className="map-wrapper">
        <div id="map" className="leaflet-map"></div>
        {selectedLocation && (
          <div className="map-popup">
            <div className="popup-content">
              <button
                className="close-popup"
                onClick={() => setSelectedLocation(null)}
                aria-label="Cerrar"
              >
                ✕
              </button>
              <img
                src={selectedLocation.image}
                alt={selectedLocation.title}
                className="popup-image"
              />
              <h3>{selectedLocation.title}</h3>
              <p className="popup-description">{selectedLocation.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Map
