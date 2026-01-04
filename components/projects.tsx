import ProjectCard from "./project-card"
import ProjectTile from "./project-tile"

const caseStudies = [
  {
    id: 1,
    image: "/mobile-app-interface-design.jpg",
    title: "Sustainable Living App",
    subtitle: "Making eco-friendly choices accessible",
    field: "Mobile App Design",
    projectType: "UX/UI Design",
    responsibilities: "User research, wireframing, prototyping, visual design",
    duration: "3 months",
    technology: "Figma, React Native",
  },
  {
    id: 2,
    image: "/healthcare-dashboard-design.jpg",
    title: "Healthcare Dashboard",
    subtitle: "Streamlining patient data management",
    field: "Web Application",
    projectType: "Product Design",
    responsibilities: "User flows, interface design, usability testing",
    duration: "4 months",
    technology: "Sketch, Next.js",
  },
  {
    id: 3,
    image: "/education-platform-interface.jpg",
    title: "E-Learning Platform",
    subtitle: "Engaging educational experiences",
    field: "EdTech",
    projectType: "Full Stack Design",
    responsibilities: "Research, design system, interaction design",
    duration: "6 months",
    technology: "Figma, Vue.js",
  },
]

const projectGallery = [
  {
    image: "/branding-design-project.jpg",
    title: "Brand Identity Redesign",
    subtitle: "Complete visual identity overhaul",
    field: "Branding",
    projectType: "Visual Design",
    responsibilities: "Logo design, style guide, brand guidelines",
  },
  {
    image: "/fintech-mobile-app.jpg",
    title: "FinTech Mobile App",
    subtitle: "Personal finance management",
    field: "Mobile",
    projectType: "UX/UI Design",
    responsibilities: "User research, prototyping",
  },
  {
    image: "/social-media-platform.jpg",
    title: "Social Media Platform",
    subtitle: "Community-focused networking",
    field: "Web & Mobile",
    projectType: "Product Design",
    responsibilities: "Information architecture, design",
  },
  {
    image: "/restaurant-ordering-system.jpg",
    title: "Restaurant Ordering System",
    subtitle: "Seamless dining experience",
    field: "Web Application",
    projectType: "UX Design",
    responsibilities: "User flows, wireframes",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>

        {/* Case Studies */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold mb-8">Case studies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Project Gallery */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Project Gallery</h3>
            <p className="text-muted-foreground">Hover/tap for more!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectGallery.map((project, index) => (
              <ProjectTile key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
