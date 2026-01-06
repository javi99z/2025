import { useState } from 'react'
import './Navigation.css'

interface NavigationProps {
  scrollToSection: (sectionId: string) => void
}

function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <button
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <button
          className="nav-item"
          onClick={() => handleSectionClick('fotos')}
        >
          📸 Fotos
        </button>
        <button
          className="nav-item"
          onClick={() => handleSectionClick('tiempo')}
        >
          ⏱️ Tiempo
        </button>
        <button
          className="nav-item"
          onClick={() => handleSectionClick('timeline')}
        >
          📅 Línea Temporal
        </button>
        <button
          className="nav-item"
          onClick={() => handleSectionClick('mapa')}
        >
          🗺️ Mapa
        </button>
        <button
          className="nav-item"
          onClick={() => handleSectionClick('cancion')}
        >
          🎵 Canción
        </button>
      </div>
    </nav>
  )
}

export default Navigation
