"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, Linkedin } from "lucide-react"

export default function Footer() {
  const [bgImage, setBgImage] = useState(1)

  useEffect(() => {
    // Randomly select image from 1-20
    const randomNum = Math.floor(Math.random() * 20) + 1
    setBgImage(randomNum)
  }, [])

  return (
    <footer id="footer" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(/placeholder.svg?height=600&width=1920&query=analog-film-photography-abstract-${bgImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className="max-w-2xl">
          <a href="#hero" className="inline-block mb-8 hover:opacity-80 transition-opacity">
            <h3 className="text-2xl font-bold">Eszter Kovács</h3>
            <p className="text-sm">Interaction Designer</p>
          </a>

          <div className="space-y-4">
            <a
              href="https://linkedin.com/in/eszterkovacs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Linkedin className="w-5 h-5" />
              <span>Eszter Kovács</span>
            </a>

            <a href="mailto:email@address.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Mail className="w-5 h-5" />
              <span>email@address.com</span>
            </a>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>🇸🇪 +123 345</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>🇭🇺 +123 345</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
