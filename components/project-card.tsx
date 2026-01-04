import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

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
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
        <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>
        <div className="space-y-2 text-sm">
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
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/projects/${project.id}`} className="w-full">
          <Button className="w-full">Click for more!</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
