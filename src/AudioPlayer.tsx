import { useState, useRef, useEffect } from 'react'
import yaSabes from './assets/ya_sabes.png'
import song from './songs/ya-sabes-letra.mp3'
import './AudioPlayer.css'

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(song)
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const togglePlayPause = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleAudioEnd = () => {
    setIsPlaying(false)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.addEventListener('ended', handleAudioEnd)
    }

    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleAudioEnd)
      }
    }
  }, [])

  return (
    <div id="cancion" className="audio-player-container">
      <h2>Nuestra Canción</h2>
      <p className="audio-player-text">
        Solitario es un artista que me gusta mucho, tanto por su música como por su
        significado. Empezó en la música para evadirse del mundo real en el que,
        para sorpresa de nadie, se sentía solo. Yo me sentía representado en cierto
        modo por él, siempre estaba rodeado de gente pero sentía que no encajaba con
        nadie. Siempre decía que no quería casarme nunca, nunca había encajado realmente
        con una persona. A Solitario le pasaba lo mismo hasta que, por azares del
        destino, encontró a la que él considera el amor de su vida. Este año me ha
        tocado encontrarlo a mí. Ahora sé que sí quería casarme, pero me faltaba
        la persona que me hiciera verlo. Y otra vez los azares del destino hacen que
        Solitario, pudiendo sacar esta canción hace años, la saque ahora. Ya te la
        dediqué una vez, pero lo seguiré haciendo toda la vida.
      </p>
      <img src={yaSabes} alt="Ya sabes" className="audio-player-image" />
      <button
        className="play-pause-button"
        onClick={togglePlayPause}
        aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
    </div>
  )
}

export default AudioPlayer
