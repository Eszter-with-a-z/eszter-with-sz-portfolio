"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useMemo } from "react"
import { useIsDesktop } from "@/hooks/use-is-dektop"

interface ProjectHeroProps {
  project: {
    id: number
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

  const isDesktop = useIsDesktop()


 const pseudoRandom = (index: number) => {
  const x = Math.sin(index * 9999) * 10000
  return x - Math.floor(x)
}


const easeInOut = (t: number) =>
  t < 0.5
    ? 2 * t * t
    : 1 - Math.pow(-2 * t + 2, 2) / 2

// --- DARKENING ---
const outroMath = (v: number) => Math.max(0, Math.min(1, v))

const outroProgress = outroMath((scrollProgress - 0.80) / 0.20)
const outroEase = useMemo(() => {
  const p = Math.max(0, Math.min(1, (scrollProgress - 0.8) / 0.2))
  return easeInOut(p)
}, [scrollProgress])


const getImageTransform = (index: number) => {
  const rand = pseudoRandom(index)

  // --- SPEED (random but controlled) ---
  const baseSpeed = isDesktop ? 0.35 : 0.45
  const speedVariance = isDesktop ? 0.25 : 0.4
  const speed = baseSpeed + rand * speedVariance

  // --- ENTRY / EXIT DISTANCE ---
  const startY = isDesktop
    ? 420 + rand * 120   // desktop: enters sooner
    : 700 + rand * 220   // mobile: dramatic

  const endY = isDesktop
    ? -520 - rand * 160  // desktop: slower exit
    : -900 - rand * 280

  // --- EASING ---
  const eased = easeInOut(scrollProgress)




  const translateY =
    startY + (endY - startY) * eased * speed

  // --- OPACITY ---
  let opacity = 1
  const fadeInEnd = isDesktop ? 0.05 : 0.08
  const fadeOutStart = isDesktop ? 0.95 : 0.92

  if (scrollProgress < fadeInEnd) {
    opacity = scrollProgress / fadeInEnd
  } else if (scrollProgress > fadeOutStart) {
    opacity = (1 - scrollProgress) / (1 - fadeOutStart)
  }

  return {
    transform: `translateY(${translateY}px)`,
    opacity:1,
  }
}


  

  return (
    
    <section 
    ref={heroRef} 
    className="relative h-[300vh] overscroll-none"
      style={{
        "--project-color": `var(--project-${project.id})`,
      } as React.CSSProperties}>

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden overflow-x-hidden overflow-y-hidden 
      bg-[color:var(--project-color)] ">
        <div
          className="relative inset-0 flex flex-col items-center justify-center z-20 text-center px-6"
          style={{
            opacity: 1 - outroEase,
          }}
        >

          <h1 className="text-white text-5xl  lg:text-7xl font-bold mb-4 text-balance">{project.title}</h1>
          <p className="text-white/90 text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl">{project.subtitle}</p>

          <div className=" bg-background/95 backdrop-blur-sm p-8 rounded-2xl border shadow-xl max-w-2xl">
            <div className=" space-y-3 text-sm">
              <div className="flex justify-between pb-3 border-b-1">
                <span className="font-semibold">Field</span>
                <span className="text-muted-foreground">{project.field}</span>
              </div>
              <div className="flex justify-between pb-3 border-b-1">
                <span className="font-semibold">Project type</span>
                <span className="text-muted-foreground">{project.projectType}</span>
              </div>
              <div className="flex justify-between pb-3 border-b-1">
                <span className="font-semibold">Responsibilities</span>
                <span className="text-muted-foreground text-end max-w-[50%]">{project.responsibilities}</span>
              </div>
              <div className="flex justify-between pb-3 border-b-1">
                <span className="font-semibold">Duration</span>
                <span className="text-muted-foreground">{project.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Technology</span>
                <span className="text-muted-foreground text-end max-w-[50%]">{project.technology}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-100">
          {project.images.map((image, index) => {
            const positions = [
              { top: "18%", left: "4%", width: 220, height: 320 },
              { top: "22%", right: "6%", width: 250, height: 350 },
              { bottom: "28%", left: "8%", width: 230, height: 330 },
              { bottom: "12%", right: "4%", width: 210, height: 300 },
            ]


            const pos = positions[index] || positions[0]

            const imageWidth = isDesktop
              ? pos.width
              : Math.min(pos.width, window.innerWidth * 0.85)

            const imageHeight = imageWidth * (pos.height / pos.width)

            const style = getImageTransform(index)

            return (
              <div
                key={index}
                className="absolute max-w-[90vw]"
                style={{
                  ...style,
                  ...pos,
                }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20
                    w-[180px] h-[260px]
                    sm:w-[220px] sm:h-[320px]
                    lg:w-auto lg:h-auto "
                  style={{
                  width: imageWidth,
                  height: imageHeight,
                }}

                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} ${index + 1}`}
                    fill
                    className="object-cover bg-background"
                    
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div
          className="absolute inset-0 z-30 pointer-events-none bg-black"
          style={{
            opacity: outroEase * 0.5,
          }}
        />

      </div>
    </section>
  )
}
