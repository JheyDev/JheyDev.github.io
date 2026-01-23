"use client"

import React from "react"

import { Linkedin, Github, Mail, MessageCircle, Send } from "lucide-react"
import { useState } from "react"
import { ContactBackground } from "./contact-background"

const socialLinks = [
  { 
    icon: Linkedin, 
    href: "#", 
    label: "LinkedIn",
    color: "hover:text-[#0077B5]",
    description: "Conecte-se profissionalmente"
  },
  { 
    icon: Github, 
    href: "#", 
    label: "GitHub",
    color: "hover:text-[#fff]",
    description: "Veja meus repositorios"
  },
  { 
    icon: Mail, 
    href: "mailto:contato@jheytech.ai", 
    label: "Email",
    color: "hover:text-[#EA4335]",
    description: "contato@jheytech.ai"
  },
  { 
    icon: MessageCircle, 
    href: "#", 
    label: "WhatsApp",
    color: "hover:text-[#25D366]",
    description: "Mensagem direta"
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contato" className="relative px-4 py-16">
      {/* Animated background */}
      <div className="absolute inset-0">
        <ContactBackground />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-2">
            Vamos <span className="text-primary neon-text-subtle">Conversar</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Entre em contato para projetos, colaboracoes ou apenas para trocar uma ideia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-sans font-bold text-foreground mb-6">
              Redes Sociais
            </h3>
            <div className="grid gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`glass-card rounded-lg p-4 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] group ${social.color}`}
                >
                  <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/20 transition-colors">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-medium text-foreground block">{social.label}</span>
                    <span className="text-xs text-muted-foreground">{social.description}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-lg p-6">
            <h3 className="text-lg font-sans font-bold text-foreground mb-6">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(188,19,254,0.3)] hover:shadow-[0_0_30px_rgba(188,19,254,0.5)]"
              >
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
