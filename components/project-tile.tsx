"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProjectTileProps {
  project: {
    image: string
    title: string
    subtitle: string
    field: string
    team: string
    responsibilities: string
  }
}

export default function ProjectTile({ project }: ProjectTileProps) {
  const [isHovered, setIsHovered] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div id="other-projects"
      className="relative aspect-square overflow-hidden rounded-lg cursor-default group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      {!isHovered ? (
        <>
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h4 className="text-white text-xl font-bold">{project.title}</h4>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-accent text-primary-foreground p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm mb-4 sm:mb-3">{project.subtitle}</p>
            <div className="space-y-2 sm:space-y-1 text-sm">
              <div>
                <span className="text-white/80">field:</span> {project.field}
              </div>
              <div>
                <span className="text-white/80">project type:</span> {project.team}
              </div>
              <div>
                <span className="text-white/80">responsibilities:</span> {project.responsibilities}
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs mb-1 text-center">Sounds interesting?</p>
            <Button
              onClick={()=> scrollToSection('footer')}
              variant="secondary" size="sm" className="w-full rounded-4xl">
              Contact me for a discussion!
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
