import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/hero-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { StickyNavbar } from "@/components/sticky-navbar"
import { ToolsSection } from "@/components/tools-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen neon-cursor">
      <CustomCursor />
      <StickyNavbar />
      <HeroSection />
      <ProjectsGrid />
      <ToolsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-border/50">
        <div className="neon-line max-w-xs mx-auto mb-6" />
        <p className="text-xs text-muted-foreground">
          &copy; 2026 <span className="text-primary">JHEYTECH.AI</span> — Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Onde a logica da programacao encontra a arte das sombras.
        </p>
      </footer>
    </main>
  )
}
