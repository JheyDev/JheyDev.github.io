"use client"

import { useState } from "react"
import { ProjectCard } from "./project-card"

const techCategories = [
  { id: "all", label: "Todos" },
  { id: "automacao", label: "Automação" },
  { id: "dashboards", label: "Dashboards" },
  { id: "ia", label: "Inteligência Artificial" },
  { id: "websites", label: "Websites" },
]

const techProjects = [
  {
    title: "Dashboard Analytics Pro",
    image: "/images/tech-dashboard.jpg",
    description: "Painel de métricas em tempo real com visualizações interativas",
    category: "dashboards",
    tags: ["React", "Chart.js", "API"],
  },
  {
    title: "FlowBot Automação",
    image: "/images/tech-automation.jpg",
    description: "Sistema de automação de workflows para e-commerce",
    category: "automacao",
    tags: ["Node.js", "Zapier", "Webhooks"],
  },
  {
    title: "ShadowAI Assistant",
    image: "/images/tech-ai-bot.jpg",
    description: "Chatbot inteligente com personalidade gótica customizada",
    category: "ia",
    tags: ["OpenAI", "LangChain", "Next.js"],
  },
  {
    title: "Portfolio Dark Mode",
    image: "/images/tech-website.jpg",
    description: "Template de portfolio com estética cyberpunk",
    category: "websites",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
]

export function TechSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all" 
    ? techProjects 
    : techProjects.filter(p => p.category === activeFilter)

  return (
    <div className="space-y-6">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {techCategories.map((cat) => (
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
            category={techCategories.find(c => c.id === project.category)?.label}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  )
}
