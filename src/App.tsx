import { useState } from 'react'
import photo3 from './assets/photo3.jpeg'
import teta from './assets/teta.jpeg'
import besito from './assets/besito.jpeg'
import influencer from './assets/influencer.jpeg'
import estudiosa from './assets/estudiosa.jpeg'
import duchita from './assets/duchita.jpeg'
import daddy from './assets/daddy.jpeg'
import miRegalo from './assets/miRegalo.jpeg'
import './App.css'
import Timeline from './Timeline'
import TypewriterText from './TypewriterText'
import AudioPlayer from './AudioPlayer'
import DateCounter from './DateCounter'
import Navigation from './Navigation'
import Map from './Map'

interface FlipCardProps {
  title: string
  image: string
  backText: string
}

function FlipCard({ title, image, backText }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(true)

  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div
          className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="flip-card-front">
            <img src={image} alt={title} className="card-image" />
          </div>
          <div className="flip-card-back">
            <p>{backText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const cards = [
    {
      title: 'Foto 3',
      image: photo3,
      backText: 'La mejor cocinera.',
    },
    {
      title: 'Teta',
      image: teta,
      backText: 'Ahora sé por qué te gusté.',
    },
    {
      title: 'Besito',
      image: besito,
      backText: 'Qué rica.',
    },
    {
      title: 'Influencer',
      image: influencer,
      backText: 'Hay que posturear de vez en cuando.',
    },
    {
      title: 'Estudiosa',
      image: estudiosa,
      backText: 'ADE no se saca solo.',
    },
    {
      title: 'Duchita',
      image: duchita,
      backText: 'Qué cochinos.',
    },
    {
      title: 'Daddy',
      image: daddy,
      backText: 'Tenía que agarrarla que se escapaba.',
    },
    {
      title: 'Mi Regalo',
      image: miRegalo,
      backText: 'La cama llena de regalos pero el mejor de ellos fue quien me lo dio.',
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Navigation scrollToSection={scrollToSection} />
      <h1>Nuestro 2025</h1>
      <TypewriterText text="  He decidido hacerte esto como regalo de reyes porque quería que fuera algo original y personal. Me habría gustado que fuera para año nuevo pero me ha faltado tiempo. Espero que te guste mi amor." />
      <DateCounter />
      <Timeline />
      <Map />
      <AudioPlayer />
      <h2 className="cards-title">Fotitos</h2>
      <div id="fotos" className="cards-container">
        {cards.map((card, index) => (
          <FlipCard
            key={index}
            title={card.title}
            image={card.image}
            backText={card.backText}
          />
        ))}
      </div>
    </>
  )
}

export default App
