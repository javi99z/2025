import { useState, useEffect } from 'react'
import './TypewriterText.css'

interface TypewriterTextProps {
  text: string
  speed?: number
}

function TypewriterText({ text, speed = 50 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index))
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <div className="typewriter-container">
      <p className="typewriter-text">
        {displayText}
        <span className="cursor" />
      </p>
    </div>
  )
}

export default TypewriterText
