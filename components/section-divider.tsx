"use client"

import { useState } from "react"

interface SectionDividerProps {
  activeSection: "tech" | "art"
  onSectionChange: (section: "tech" | "art") => void
}

export function SectionDivider({ activeSection, onSectionChange }: SectionDividerProps) {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 py-8 px-4">
      <button
        onClick={() => onSectionChange("tech")}
        className={`text-sm md:text-lg font-sans font-bold tracking-wider transition-all duration-300 ${
          activeSection === "tech"
            ? "text-primary neon-text-subtle"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        O CÉREBRO (TECH)
      </button>

      <div className="flex-1 max-w-xs neon-line" />

      <button
        onClick={() => onSectionChange("art")}
        className={`text-sm md:text-lg font-sans font-bold tracking-wider transition-all duration-300 ${
          activeSection === "art"
            ? "text-primary neon-text-subtle"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        A ALMA (ART)
      </button>

      {/* Neon Cursor Icon */}
      <div className="hidden md:block neon-pulse">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary"
        >
          <path
            d="M5 3L19 12L12 13L9 20L5 3Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  )
}
