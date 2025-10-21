"use client"

import { useState } from "react"
import { Mail, MessageCircle, Instagram, Facebook, Menu, X } from "lucide-react"
import ContactButton from "@/components/contact-button"
import About from "@/components/about"
import Services from "@/components/services"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "about", label: "Acerca de" },
    { id: "experience", label: "Experiencias" },
    { id: "services", label: "Servicios" },
    { id: "contact", label: "Contacto" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Estela Paniagua
              </h1>
              <p className="text-xs text-muted-foreground">Abogada | Asesoría Legal</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Social Links Desktop */}
            <div className="hidden md:flex gap-2">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors text-accent hover:text-accent"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors text-accent hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors text-accent hover:text-accent"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:estela@example.com"
                className="p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors text-accent hover:text-accent"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-2 px-4 pt-2">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="mailto:estela@example.com"
                  className="p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="min-h-screen">
        {activeSection === "about" && <About />}
        {activeSection === "experience" && (
          <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-balance">Experiencias</h2>
            <div className="space-y-8">
              <div className="p-8 bg-card rounded-xl border border-border hover:border-accent/50 transition-all hover:shadow-lg wood-accent">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Más de 10 años de experiencia</h3>
                    <p className="text-muted-foreground">
                      Trabajando en casos complejos de derecho civil, mercantil y laboral con resultados exitosos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-card rounded-xl border border-border hover:border-accent/50 transition-all hover:shadow-lg wood-accent">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">500+ clientes satisfechos</h3>
                    <p className="text-muted-foreground">
                      He ayudado a cientos de clientes a resolver sus problemas legales de manera efectiva.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-card rounded-xl border border-border hover:border-accent/50 transition-all hover:shadow-lg wood-accent">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Dedicación 100% profesional</h3>
                    <p className="text-muted-foreground">
                      Cada caso recibe mi atención completa y compromiso con los mejores resultados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeSection === "services" && <Services />}
        {activeSection === "contact" && (
          <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-balance">Ponte en contacto</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Estoy disponible para consultas y asesoramiento legal. Elige tu medio de contacto preferido.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactButton
                icon={MessageCircle}
                label="WhatsApp"
                href="https://wa.me/1234567890"
                description="Mensaje directo"
              />
              <ContactButton
                icon={Mail}
                label="Email"
                href="mailto:estela@example.com"
                description="estela@example.com"
              />
              <ContactButton
                icon={Instagram}
                label="Instagram"
                href="https://instagram.com"
                description="@estela.paniagua"
              />
              <ContactButton
                icon={Facebook}
                label="Facebook"
                href="https://facebook.com"
                description="Estela Paniagua"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
