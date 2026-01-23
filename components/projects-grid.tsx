"use client"

import { useState } from "react"
import { SectionDivider } from "./section-divider"
import { TechSection } from "./tech-section"
import { ArtSection } from "./art-section"
import { PortfolioBackground } from "./portfolio-background"

export function ProjectsGrid() {
  const [activeSection, setActiveSection] = useState<"tech" | "art">("tech")

  return (
    <section id="portfolio" className="relative px-4 py-16">
      {/* Animated background */}
      <div className="absolute inset-0">
        <PortfolioBackground />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionDivider
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <div className="mt-8">
          {activeSection === "tech" ? <TechSection /> : <ArtSection />}
        </div>
      </div>
    </section>
  )
}
