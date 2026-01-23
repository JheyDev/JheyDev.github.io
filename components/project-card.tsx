import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  image: string
  description?: string
  category?: string
  tags?: string[]
  demoUrl?: string
  repoUrl?: string
}

export function ProjectCard({ title, image, description, category, tags, demoUrl = "#", repoUrl = "#" }: ProjectCardProps) {
  return (
    <div className="group glass-card rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Category badge */}
        {category && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-primary/80 backdrop-blur-sm rounded text-xs font-medium text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {category}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-sans font-medium text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
            {title}
          </h3>
          {/* Icon buttons */}
          <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={demoUrl}
              title="Ver Projeto"
              className="p-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={repoUrl}
              title="Repositorio"
              className="p-1.5 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors border border-border"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {description}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-muted rounded text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
