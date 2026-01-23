import Image from "next/image"
import { GlitchLogo } from "./glitch-logo"
import { NetworkBackground } from "./network-background"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Animated Network Background */}
      <div className="absolute inset-0">
        <NetworkBackground />
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(188,19,254,0.1)_0%,_transparent_50%)]" />

      {/* Logo */}
      <div className="relative z-10 mb-4">
        <GlitchLogo />
      </div>

      {/* Tagline */}
      <p className="relative z-10 text-muted-foreground text-sm md:text-base text-center mb-8 tracking-wide">
        Onde a lógica da{" "}
        <span className="text-primary neon-text-subtle">programação</span>{" "}
        encontra a arte das{" "}
        <span className="text-foreground">sombras</span>.
      </p>

      {/* Hero Image */}
      <div className="relative z-10 w-full max-w-lg aspect-square flex items-center justify-center">
        {/* Glow behind character */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(188,19,254,0.4)_0%,_rgba(255,0,255,0.1)_30%,_transparent_60%)]" />
        <Image
          src="/images/jheytech-avatar.png"
          alt="JHEYTECH.AI - Desenvolvedora e artista digital"
          width={500}
          height={500}
          className="object-contain relative z-10 drop-shadow-[0_0_40px_rgba(188,19,254,0.6)] scale-110"
          priority
        />
      </div>
    </section>
  )
}
