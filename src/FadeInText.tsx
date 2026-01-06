import { useState, useEffect } from 'react'
import './FadeInText.css'

interface FadeInTextProps {
  text: string
  delay?: number
}

function FadeInText({ text, delay = 50 }: FadeInTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className="fadein-container">
      <p className={`fadein-text ${isVisible ? 'visible' : ''}`}>
        {text}
      </p>
    </div>
  )
}

export default FadeInText
