import { useState, useEffect } from 'react'
import './DateCounter.css'

interface TimeUnitProps {
  value: number
  label: string
}

function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="time-unit">
      <div className="time-value">{value}</div>
      <div className="time-label">{label}</div>
    </div>
  )
}

function DateCounter() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const startDate = new Date('2025-05-27T00:00:00')
    const updateTime = () => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()
      const absoluteDiff = Math.abs(diff)

      const years = Math.floor(absoluteDiff / (1000 * 60 * 60 * 24 * 365))
      const months = Math.floor(
        (absoluteDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
      )
      const days = Math.floor(
        (absoluteDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
      )
      const hours = Math.floor(
        (absoluteDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor((absoluteDiff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((absoluteDiff % (1000 * 60)) / 1000)

      setTimeElapsed({ years, months, days, hours, minutes, seconds })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="tiempo" className="date-counter-container">
      <h2>Tiempo Transcurrido</h2>
      <p className="date-counter-subtitle">Desde el 27 de mayo de 2025 hasta que me muera. Qué rápido han pasado los meses.</p>
      <div className="time-units">
        <TimeUnit value={timeElapsed.years} label="Años" />
        <TimeUnit value={timeElapsed.months} label="Meses" />
        <TimeUnit value={timeElapsed.days} label="Días" />
        <TimeUnit value={timeElapsed.hours} label="Horas" />
        <TimeUnit value={timeElapsed.minutes} label="Minutos" />
        <TimeUnit value={timeElapsed.seconds} label="Segundos" />
      </div>
    </div>
  )
}

export default DateCounter
