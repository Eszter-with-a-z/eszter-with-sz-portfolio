const CLOUDINARY_URL_BASE = "https://res.cloudinary.com/dskrqh0vu/image/upload/q_auto,f_auto/v1767694934"
export interface OtherProject {
    image: string
    title: string
    subtitle: string
    field: string
    team: string
    responsibilities: string
}

export const projectGallery:OtherProject[] = [
  {
    
    image: `${CLOUDINARY_URL_BASE}/other-project_5.png`,
    title: "QR scanner for Material & Automation",
    subtitle: "proposing & creating the QR scanner for an exhibition piece for the Southern Swedish Designer days",
    field: "robotics",
    team: "in a team of 2",
    responsibilities: "technical implementation",
  },
  {
    image: `${CLOUDINARY_URL_BASE}/other-project_6.png`,
    title: "Indigenous Weather Station",
    subtitle: "data physicalization to help indigenous communities predict rain in the era of climate change in collaboration with the Indigenous Climate Observatories and the Lesotho Meteorological Services",
    field: "robotics / data physicalization",
    team: "individual",
    responsibilities: "whole process",
  },
  {
    image: `${CLOUDINARY_URL_BASE}/other-project_4.png`,
    title: "They don't write books about every hero",
    subtitle: "a digital novel about climate change and cultural learning",
    field: "full stack programming",
    team: "individual",
    responsibilities: "programming in Python Flask; JavaScript",
  },
  {
    image: `${CLOUDINARY_URL_BASE}/other-project_1.png`,
    title: "Active Listener",
    subtitle: "experimenting with motion tracking to explore turntaking in conversations",
    field: "ML & Interaction Aesthetics",
    team: "team of 2",
    responsibilities: "coding; testing",
  },
    {
    image: `${CLOUDINARY_URL_BASE}/other-project_3.png`,
    title: "Feedback Pillar",
    subtitle: "user research & concept-proposal for giving feedback in Rosengard Library",
    field: "Service Design",
    team: "group project in a team of 5",
    responsibilities: "user research; prototyping",
  },  
  {
    image: `${CLOUDINARY_URL_BASE}/other-project_7.png`,
    title: "Participatory Design for Dental Innovation",
    subtitle: "designing & conducting 2 participatory design workshops for a dental equipment innovation",
    field: "Participatory Design",
    team: "in a team of 2",
    responsibilities: "UX research; workshop moderation & analysis",
  },
 {
    image: `${CLOUDINARY_URL_BASE}/other-project_8.png`,
    title: "Sanitary points for slums",
    subtitle: `human-centered research and concept-proposal 
    of modular and scalable sanitary points to Kibera, Kenya 
    in collaboration with the Hungarian Maltese Charity Service 
    | Award Winning - 1st at Beton Fesztivál in category "Concrete construction, architecture"`,
    field: "Architecture",
    team: "in a team of 3 (2 architects)",
    responsibilities: "design consulting; graphic design",
  },
  {
    image: `${CLOUDINARY_URL_BASE}/other-project_9.png`,
    title: "Design system variables for an educational app",
    subtitle: "a three-tier variable system for the DS of a financial literacy app",
    field: "UI design",
    team: "individual contribution",
    responsibilities: "create the variable collections",
  },
]