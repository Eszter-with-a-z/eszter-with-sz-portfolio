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

      const rect = heroRef.current.getBoundingClientRect()
      const totalScroll = rect.height - window.innerHeight
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll)
      setScrollProgress(scrolled / totalScroll)

    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

 
const easeInOut = (t: number) =>
  t < 0.5
    ? 2 * t * t
    : 1 - Math.pow(-2 * t + 2, 2) / 2

const getImageTransform = (index: number) => {
  // Different speed per image
  const speed = 0.4 + Math.pow(index + 1, 1.2) * 0.15


  // Image starts below viewport and ends above
  const startY = 500
  const endY = -700

  const easedProgress = easeInOut(scrollProgress)

  const translateY =
    startY + (endY - startY) * easedProgress * speed

  // Fade only at start & end
  let opacity = 1
  if (scrollProgress < 0.15) {
    opacity = scrollProgress / 0.15
  } else if (scrollProgress > 0.85) {
    opacity = (1 - scrollProgress) / 0.15
  }

  return {
    transform: `translateY(${translateY}px)`,
    opacity,
  }
}

  

  return (
    <section ref={heroRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-muted/30">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-balance">{project.title}</h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl">{project.subtitle}</p>

          <div className="bg-background/95 backdrop-blur-sm p-8 rounded-2xl border shadow-xl max-w-2xl">
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 justify-between">
                <span className="font-semibold">Field:</span>
                <span className="text-muted-foreground">{project.field}</span>
              </div>
              <div className="flex gap-2 justify-between">
                <span className="font-semibold">Project type:</span>
                <span className="text-muted-foreground">{project.projectType}</span>
              </div>
              <div className="flex gap-2 justify-between">
                <span className="font-semibold">Responsibilities:</span>
                <span className="text-muted-foreground">{project.responsibilities}</span>
              </div>
              <div className="flex gap-2 justify-between">
                <span className="font-semibold">Duration:</span>
                <span className="text-muted-foreground">{project.duration}</span>
              </div>
              <div className="flex gap-2 justify-between">
                <span className="font-semibold">Technology:</span>
                <span className="text-muted-foreground">{project.technology}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-100">
          {project.images.map((image, index) => {
            const positions = [
              { top: "15%", left: "8%", width: 280, height: 400 },
              { top: "25%", right: "10%", width: 320, height: 420 },
              { bottom: "18%", left: "12%", width: 300, height: 380 },
              { bottom: "15%", right: "15%", width: 260, height: 360 },
            ]

            const pos = positions[index] || positions[0]
            const style = getImageTransform(index)

            return (
              <div
                key={index}
                className="absolute "
                style={{
                  ...style,
                  ...pos,
                }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                  style={{
                    width: pos.width,
                    height: pos.height,
                  }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
