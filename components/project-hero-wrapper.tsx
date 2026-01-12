"use client"
import dynamic from "next/dynamic"
import { caseStudies } from "@/lib/data/projects"

const ProjectHeroClient = dynamic(
  () => import("./project-hero"),
  { ssr: false }
)

type Project = (typeof caseStudies)[keyof typeof caseStudies]

interface ProjectHeroWrapperProps {
  project: Project
}

export default function ProjectHeroWrapper({
  project,
}: ProjectHeroWrapperProps) {
  return <ProjectHeroClient project={project} />
}
