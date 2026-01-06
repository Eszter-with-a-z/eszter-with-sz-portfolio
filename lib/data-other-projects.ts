const CLOUDINARY_URL_BASE = "https://res.cloudinary.com/dskrqh0vu/image/upload/q_auto,f_auto/v1767694934"
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
    
    image: `${CLOUDINARY_URL_BASE}/other-project_5.png`,
    title: "Brand Identity Redesign",
    subtitle: "Complete visual identity overhaul",
    field: "Branding",
    projectType: "Visual Design",
    responsibilities: "Logo design, style guide, brand guidelines",
  },
  {
    image: `${CLOUDINARY_URL_BASE}/other-project_6.png`,
    title: "FinTech Mobile App",
    subtitle: "Personal finance management",
    field: "Mobile",
    projectType: "UX/UI Design",
    responsibilities: "User research, prototyping",
  },
  {
    image: `${CLOUDINARY_URL_BASE}/other-project_4.png`,
    title: "Social Media Platform",
    subtitle: "Community-focused networking",
    field: "Web & Mobile",
    projectType: "Product Design",
    responsibilities: "Information architecture, design",
  },
  {
    image: `${CLOUDINARY_URL_BASE}/other-project_1.png`,
    title: "Restaurant Ordering System",
    subtitle: "Seamless dining experience",
    field: "Web Application",
    projectType: "UX Design",
    responsibilities: "User flows, wireframes",
  },
    {
    image: `${CLOUDINARY_URL_BASE}/other-project_3.png`,
    title: "Restaurant Ordering System",
    subtitle: "Seamless dining experience",
    field: "Web Application",
    projectType: "UX Design",
    responsibilities: "User flows, wireframes",
  },  
  {
    image: `${CLOUDINARY_URL_BASE}/other-project_7.png`,
    title: "Restaurant Ordering System",
    subtitle: "Seamless dining experience",
    field: "Web Application",
    projectType: "UX Design",
    responsibilities: "User flows, wireframes",
  },
 {
    image: `${CLOUDINARY_URL_BASE}/other-project_8.png`,
    title: "Restaurant Ordering System",
    subtitle: "Seamless dining experience",
    field: "Web Application",
    projectType: "UX Design",
    responsibilities: "User flows, wireframes",
  },
  {
    image: `${CLOUDINARY_URL_BASE}/other-project_9.png`,
    title: "Restaurant Ordering System",
    subtitle: "Seamless dining experience",
    field: "Web Application",
    projectType: "UX Design",
    responsibilities: "User flows, wireframes",
  },
]