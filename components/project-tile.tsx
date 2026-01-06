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

  return (
    <div
      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        <div className="absolute inset-0 bg-primary text-primary-foreground p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm mb-4">{project.subtitle}</p>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold">Field:</span> {project.field}
              </div>
              <div>
                <span className="font-semibold">Project type:</span> {project.team}
              </div>
              <div>
                <span className="font-semibold">Responsibilities:</span> {project.responsibilities}
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs mb-3">Do you want to know more about the project?</p>
            <Button variant="secondary" size="sm" className="w-full">
              Contact me for a discussion!
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
