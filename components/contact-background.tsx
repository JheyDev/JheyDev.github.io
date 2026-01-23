"use client"

import { useEffect, useRef } from "react"

export function ContactBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Waves animation
    interface Wave {
      y: number
      amplitude: number
      frequency: number
      speed: number
      offset: number
      color: string
    }

    const waves: Wave[] = [
      { y: 0.3, amplitude: 20, frequency: 0.01, speed: 0.02, offset: 0, color: "rgba(188, 19, 254, 0.05)" },
      { y: 0.5, amplitude: 30, frequency: 0.008, speed: 0.015, offset: 0, color: "rgba(188, 19, 254, 0.03)" },
      { y: 0.7, amplitude: 25, frequency: 0.012, speed: 0.025, offset: 0, color: "rgba(255, 0, 255, 0.03)" },
    ]

    // Floating particles
    interface Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      alpha: number
    }

    const particles: Particle[] = []
    const particleCount = 30

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      waves.forEach((wave) => {
        wave.offset += wave.speed
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)

        for (let x = 0; x <= canvas.width; x += 5) {
          const y = canvas.height * wave.y + Math.sin(x * wave.frequency + wave.offset) * wave.amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()
        ctx.fillStyle = wave.color
        ctx.fill()
      })

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(188, 19, 254, ${p.alpha})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
    </div>
  )
}
