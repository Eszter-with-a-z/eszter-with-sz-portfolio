export interface OtherProject {
    image: string
    title: string
    subtitle: string
    field: string
    projectType: string
    responsibilities: string
}

export const projectGallery:OtherProject[] = [
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