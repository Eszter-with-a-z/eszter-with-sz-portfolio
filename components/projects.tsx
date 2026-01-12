import ProjectCard from "./project-card"
import ProjectTile from "./project-tile"
import { projectGallery } from "@/lib/data/other-projects"
import { caseStudies } from "@/lib/data/projects"



export default function Projects() {
  return (
    <section id="projects" className="mt-100  py-18 bg-background">
      <div className=" container mx-auto px-6">
        <h2 className=" text-4xl font-bold text-center mb-16">Projects</h2>

        {/* Case Studies */}
        <div className="mb-24">
          <h4 className="text-center text-2xl font-semibold mb-8">Case Studies</h4>
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(caseStudies).map((project) => (
              <ProjectCard 
              key={project.id} 
              className={` z-10 
                ${project.id === 1 ? "bg-project-1" : ""}
                ${project.id === 2 ? "bg-project-2" : ""}
                ${project.id === 3 ? "bg-project-3" : ""}
              `}
            
              project={{
               ...project,
               image: project.coverImage,
                }} />
            ))}
          </div>
        </div>

        {/* Project Gallery */}
        <div>
          <div className="mb-8  text-center ">
            <h3 className="text-2xl font-semibold mb-2">Other Projects</h3>
            <p className="text-muted-foreground">Hover/tap for more!</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectGallery.map((project, index) => (
              <ProjectTile key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
