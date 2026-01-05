"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ProjectHeroProps {
  project: {
    title: string
    subtitle: string
    field: string
    projectType: string
    responsibilities: string
    duration: string
    technology: string
    images: string[]
  }
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return

      const heroTop = heroRef.current.offsetTop
      const heroHeight = heroRef.current.offsetHeight
      const scrollY = window.scrollY - heroTop

      const progress = Math.max(0, Math.min(scrollY / heroHeight, 1))
      setScrollProgress(progress)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getImageStyle = (index: number) => {
    // Each image takes 20% of the scroll journey to appear, with 5% overlap
    const appearStart = index * 0.15
    const appearEnd = appearStart + 0.2
    const exitStart = 0.6
    const exitEnd = 1.0

    let opacity = 0
    let translateY = 0

    // Appearing phase
    if (scrollProgress >= appearStart && scrollProgress < appearEnd) {
      opacity = (scrollProgress - appearStart) / 0.2
    } else if (scrollProgress >= appearEnd && scrollProgress < exitStart) {
      opacity = 1
    } else if (scrollProgress >= exitStart) {
      opacity = Math.max(0, 1 - (scrollProgress - exitStart) / 0.4)
      const speed = 1 + index * 0.3
      translateY = -((scrollProgress - exitStart) / 0.4) * 600 * speed
    }

    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      transition: "opacity 0.1s linear",
    }
  }

  return (
    <section ref={heroRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 bg-background/95 backdrop-blur-sm p-8 rounded-lg border">
              <h1 className="text-5xl font-bold text-balance">{project.title}</h1>
              <p className="text-xl text-muted-foreground text-pretty">{project.subtitle}</p>

              <div className="space-y-3 pt-6">
                <div>
                  <span className="font-semibold">Field:</span> {project.field}
                </div>
                <div>
                  <span className="font-semibold">Project type:</span> {project.projectType}
                </div>
                <div>
                  <span className="font-semibold">Responsibilities:</span> {project.responsibilities}
                </div>
                <div>
                  <span className="font-semibold">Duration:</span> {project.duration}
                </div>
                <div>
                  <span className="font-semibold">Technology:</span> {project.technology}
                </div>
              </div>
            </div>

            <div className="relative h-[600px]">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    ...getImageStyle(index),
                    top: `${index * 80}px`,
                    left: `${index % 2 === 0 ? "0" : "35%"}`,
                    zIndex: index + 1,
                  }}
                >
                  <div className="relative w-72 h-72 rounded-lg overflow-hidden shadow-2xl border-4 border-background">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
