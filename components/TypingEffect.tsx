'use client'

import { useEffect, useState } from 'react'

interface TypingEffectProps {
  text: string
  delay?: number
  className?: string
  onComplete?: () => void
  startDelay?: number
}

export default function TypingEffect({
  text,
  delay = 100,
  className = '',
  onComplete,
  startDelay = 0,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (startDelay > 0 && !started) {
      const startTimeout = setTimeout(() => {
        setStarted(true)
      }, startDelay)
      return () => clearTimeout(startTimeout)
    } else if (startDelay === 0) {
      setStarted(true)
    }
  }, [startDelay, started])

  useEffect(() => {
    if (!started) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && onComplete) {
      onComplete()
    }
  }, [currentIndex, delay, text, onComplete, started])

  if (!started) {
    return <span className={className}></span>
  }

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-primary-500">|</span>
      )}
    </span>
  )
}
