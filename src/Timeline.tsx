import { useState } from 'react'
import primera from './assets/primera.jpeg'
import segunda from './assets/segunda.jpeg'
import tercera from './assets/tercera.jpeg'
import besito from './assets/besito.jpeg'
import teAmo from './assets/te_amo.jpeg'
import toAcoplaos from './assets/to_acoplaos.jpeg'
import navidad from './assets/navidad.jpeg'
import chalet from './assets/chalet.jpeg'
import './Timeline.css'

interface TimelineEvent {
  date: string
  title: string
  description: string
  image?: string
}

function Timeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  const events: TimelineEvent[] = [
    {
      date: '13 de marzo de 2025',
      title: 'El cocadrilo',
      description: 'Esta foto no la hice yo, pero fue la primera vez que quedé contigo aunque fuera en grupo. Y la primera vez que te di dos besitos.',
      image: primera,
    },
    {
      date: '11 de abril de 2025',
      title: 'El dúo',
      description: 'Aquí tampoco querías salir. Pero las piernas ya se nos entrelazaban.',
      image: segunda,
    },
    {
      date: '12 de abril de 2025',
      title: '¿Le gusto?',
      description: 'No tengo nada más que añadir.',
      image: tercera,
    },
    {
      date: '2 de mayo de 2025',
      title: 'Te quiero',
      description: 'No tengo foto de esto, pero fue el primer día en el que me dijiste te quiero. No sé expresar lo que sentí en ese momento. Yo también te quería, pero tenía miedo de decírtelo y espantarte por ser pronto.',
    },
    {
      date: '27 de mayo de 2025',
      title: '¡Somos oficiales!',
      description: 'Yo daba por hecho que lo éramos, pero por lo que me dijo tu prima debía ser más explícito. Bendita chispi.',
    },
    {
      date: '7 de junio de 2025',
      title: '¿Dónde me he metido?',
      description: 'Este día fue mi presentación como nuevo miembro de la familia Ortiz. Qué miedo cuando Luis dijo que la prueba que tenía que pasar era que me pegarais todos.',
    },
    {
      date: '24 de julio de 2025',
      title: 'Te amo',
      description: 'No vas a saber como saqué esta foto, soy un ninja. Te amo.',
      image: teAmo,
    },
    {
      date: '5 de agosto de 2025',
      title: 'Os presento a Javi',
      description: 'Nuestra primera foto. "Oye Javi, ¿le pasamos una foto a las del coche?"',
      image: besito,
    },
    {
      date: '13 de septiembre de 2025',
      title: 'Chicoooosss fotoooo',
      description: 'Foto legendaria porque Lola nos dijo que nos la echáramos, la primera casa rural donde no sabía si iba a sobrevivir.',
      image: chalet,
    },
    {
      date: '11 de octubre de 2025',
      title: 'Acoplados',
      description: 'Fuera de la peña pero en la foto. El que puede puede.',
      image: toAcoplaos,
    },
    {
      date: '25 de diciembre de 2025',
      title: 'Navidad',
      description: 'El mejor regalo de Navidad de mi vida eres tú.',
      image: navidad,
    },
  ]

  const toggleItem = (index: number) => {
    setVisibleItems((prev: Set<number>) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div id="timeline" className="timeline-container">
      <h2>Línea Temporal</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <button
              className="timeline-circle"
              onClick={() => toggleItem(index)}
              aria-label={`Toggle ${event.title}`}
              aria-expanded={visibleItems.has(index)}
            />
            {visibleItems.has(index) && (
              <div className="timeline-content">
                <div className="timeline-date">{event.date}</div>
                {event.image && (
                  <img src={event.image} alt={event.title} className="timeline-image" />
                )}
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
