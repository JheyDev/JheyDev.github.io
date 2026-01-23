"use client"

import { useEffect, useRef } from "react"

export function ToolsBackground() {
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

    // Hexagon grid pattern
    const hexSize = 40
    const hexagons: { x: number; y: number; pulse: number; speed: number }[] = []

    const createHexGrid = () => {
      hexagons.length = 0
      const cols = Math.ceil(canvas.width / (hexSize * 1.5)) + 2
      const rows = Math.ceil(canvas.height / (hexSize * Math.sqrt(3))) + 2

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * hexSize * 1.5
          const y = row * hexSize * Math.sqrt(3) + (col % 2 === 1 ? (hexSize * Math.sqrt(3)) / 2 : 0)
          hexagons.push({
            x,
            y,
            pulse: Math.random() * Math.PI * 2,
            speed: 0.01 + Math.random() * 0.02,
          })
        }
      }
    }
    createHexGrid()

    const drawHexagon = (x: number, y: number, size: number, alpha: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6
        const px = x + size * Math.cos(angle)
        const py = y + size * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(px, py)
        } else {
          ctx.lineTo(px, py)
        }
      }
      ctx.closePath()
      ctx.strokeStyle = `rgba(188, 19, 254, ${alpha * 0.15})`
      ctx.lineWidth = 1
      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      hexagons.forEach((hex) => {
        hex.pulse += hex.speed
        const alpha = 0.3 + Math.sin(hex.pulse) * 0.3
        drawHexagon(hex.x, hex.y, hexSize * 0.9, alpha)
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  )
}
