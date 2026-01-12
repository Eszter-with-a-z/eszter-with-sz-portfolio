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
  <Link href={`/projects/${project.id}`} className="w-full hover:shadow-lg rounded-xl">
    <Card   className={clsx(
    "overflow-hidden h-full justify-between text-background transition-shadow",
    className
    )}>

      <div className="aspect-video relative">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover sticky top-0" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-4xl  mb-2">{project.title}</h3>
        <p className="text-sm font-sans text-white mb-4">{project.subtitle}</p>
        
            <div className=" space-y-3 text-sm">
              <div className="flex justify-between pb-3 border-b-1 border-white/30">
                <span className="font-semibold text-white/70">Field</span>
                <span className="text-white  text-end max-w-[60%]">{project.field}</span>
              </div>
              <div className="flex justify-between pb-3 border-b-1 border-white/30">
                <span className="font-semibold text-white/70">Project type</span>
                <span className="text-white  text-end max-w-[60%]">{project.projectType}</span>
              </div>
              <div className="flex justify-between pb-3 border-b-1 border-white/30">
                <span className="font-semibold text-white/70">Responsibilities</span>
                <span className="text-white text-end max-w-[60%]">{project.responsibilities}</span>
              </div>
              <div className="flex justify-between pb-3 border-b-1 border-white/30">
                <span className="font-semibold text-white/70">Duration</span>
                <span className="text-white text-end max-w-[60%]">{project.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-white/70">Technology</span>
                <span className="text-white text-end max-w-[60%]">{project.technology}</span>
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
