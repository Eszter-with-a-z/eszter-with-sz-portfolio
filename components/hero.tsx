"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [bgImage, setBgImage] = useState(1)

  useEffect(() => {
    // Randomly select image from 1-20
    const randomNum = Math.floor(Math.random() * 20) + 1
    setBgImage(randomNum)
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(/placeholder.svg?height=1080&width=1920&query=analog-film-photography-vintage-aesthetic-${bgImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-between gap-12">
        <div className="text-white flex-1">
          <p className="text-lg mb-2">Hi there! I am</p>
          <h1 className="text-6xl font-bold mb-4">Eszter Kovács</h1>
          <p className="text-2xl">- an interaction designer</p>
        </div>

        {/* Dictionary Style Card */}
        <div className="bg-white text-foreground p-8 rounded-lg max-w-md shadow-xl">
          <div className="border-l-4 border-primary pl-4">
            <h2 className="text-2xl font-bold mb-2">Interaction Design</h2>
            <p className="text-sm italic text-muted-foreground mb-3">noun</p>
            <p className="leading-relaxed">Design between humans and computers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
