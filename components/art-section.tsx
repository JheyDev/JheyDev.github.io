"use client"

import { useState } from "react"
import { ProjectCard } from "./project-card"

const artCategories = [
  { id: "all", label: "Todos" },
  { id: "logotipos", label: "Logotipos" },
  { id: "produtos", label: "Produtos" },
  { id: "ilustracoes", label: "Ilustrações" },
]

const artProjects = [
  {
    title: "Logo NeonTech",
    image: "/images/art-logo-neon.jpg",
    description: "Identidade visual futurista com elementos de circuito e neon",
    category: "logotipos",
    tags: ["Branding", "Neon", "Tech"],
  },
  {
    title: "Logo Gothic Skull",
    image: "/images/art-logo-gothic.jpg",
    description: "Logo dark para marca de streetwear alternativo",
    category: "logotipos",
    tags: ["Dark", "Skull", "Fashion"],
  },
  {
    title: "Caveiras Florais",
    image: "/images/art-skull.jpg",
    description: "Arte digital combinando morte e vida em harmonia gótica",
    category: "ilustracoes",
    tags: ["Gothic", "Floral", "Digital Art"],
  },
  {
    title: "Cartões Premium Dark",
    image: "/images/art-product-card.jpg",
    description: "Design de cartões de visita com acabamento premium",
    category: "produtos",
    tags: ["Print", "Business Card", "Premium"],
  },
  {
    title: "Packaging Luxo Noir",
    image: "/images/art-product-box.jpg",
    description: "Embalagem de luxo com estética minimalista escura",
    category: "produtos",
    tags: ["Packaging", "Luxury", "Minimal"],
  },
  {
    title: "A Bruxa Digital",
    image: "/images/art-illustration-witch.jpg",
    description: "Ilustração de fantasia sombria com elementos mágicos",
    category: "ilustracoes",
    tags: ["Fantasy", "Magic", "Character"],
  },
  {
    title: "Templos Noturnos",
    image: "/images/art-temple.jpg",
    description: "Concept art de ambientes misteriosos e ancestrais",
    category: "ilustracoes",
    tags: ["Environment", "Mystery", "Concept Art"],
  },
  {
    title: "Ruínas Místicas",
    image: "/images/art-ruins.jpg",
    description: "Paisagem sombria com figura solitária entre ruínas",
    category: "ilustracoes",
    tags: ["Landscape", "Dark Fantasy", "Atmosphere"],
  },
]

export function ArtSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all" 
    ? artProjects 
    : artProjects.filter(p => p.category === activeFilter)

  return (
    <div className="space-y-6">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {artCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              activeFilter === cat.id
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(188,19,254,0.4)]"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            category={artCategories.find(c => c.id === project.category)?.label}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  )
}
