import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import clsx from "clsx"

interface ProjectCardProps {
  project: {
    id: number
    image: string
    title: string
    subtitle: string
    field: string
    projectType: string
    responsibilities: string
    duration: string
    technology: string
  }
  
  className?: string
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="w-full">
    <Card   className={clsx(
    "overflow-hidden hover:shadow-lg text-background transition-shadow",
    className
  )}>

      <div className="aspect-video relative">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-4xl  mb-2">{project.title}</h3>
        <p className="text-sm font-sans text-white mb-4">{project.subtitle}</p>
        <div className="space-y-2 ">
          <div>
            <span className="text-white/80 ">Field:</span> {project.field}
          </div>
          <div>
            <span className="text-white/80 ">Project type:</span> {project.projectType}
          </div>
          <div>
            <span className="text-white/80 ">Responsibilities:</span> {project.responsibilities}
          </div>
          <div>
            <span className="text-white/80 ">Duration:</span> {project.duration}
          </div>
          <div>
            <span className="text-white/80 ">Technology:</span> {project.technology}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        
          <Button className="flex p-6 m-auto bg-black rounded-3xl text-lg hover:text-black hover:bg-white">Click to view case study!</Button>
        
      </CardFooter>
    </Card>
    </Link>
  )
}
