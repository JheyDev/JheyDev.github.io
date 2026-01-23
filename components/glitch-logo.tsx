"use client"

import { useState, useEffect } from "react"

export function GlitchLogo() {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 300)
      }
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <h1
      className={`text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-wider neon-text ${
        isGlitching ? "glitch" : ""
      }`}
    >
      <span className="text-foreground">JHEYTECH</span>
      <span className="text-primary">.AI</span>
    </h1>
  )
}
