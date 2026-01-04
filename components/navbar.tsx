"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-primary transition-colors">
            Projects
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-sm hover:text-primary transition-colors"
          >
            Testimonials
          </button>
          <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
            About me
          </button>
          <Button onClick={() => scrollToSection("footer")} size="sm">
            Contact
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              About me
            </button>
            <Button onClick={() => scrollToSection("footer")} size="sm" className="w-full">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
