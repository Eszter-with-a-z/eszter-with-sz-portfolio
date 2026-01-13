import { notFound } from "next/navigation"
import { caseStudies } from "@/lib/data/projects"
import ProjectHero from "@/components/project-hero-wrapper"
import ProjectProblem from "@/components/project-problem"
import ProjectProposal from "@/components/project-proposal"
import ProjectProcess from "@/components/project-process"
import ProjectNavigation from "@/components/project-navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"



export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }]
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const project = caseStudies[id as keyof typeof caseStudies]

  if (!project) {
    notFound()
  }

  return (
    <div>
      <Navbar />
      <ProjectHero project={project} />
      <ProjectProblem problem={project.problem} />
      <ProjectProposal id={project.id} proposal={project.proposal} />
      <ProjectProcess process={project.process} />
      <ProjectNavigation currentId={project.id} />
      <Footer />
    </div>
  )
}
