const CLOUDINARY_URL_BASE = "https://res.cloudinary.com/dskrqh0vu/image/upload/q_auto,f_auto/v1767694934"
export interface OtherProject {
    image: string
    title: string
    subtitle: string
    field: string
    team: string
    responsibilities: string
    cta?:string
    url?:string
}

export const projectGallery:OtherProject[] = [
    {
    image: `${CLOUDINARY_URL_BASE}/other-project_9.png`,
    title: "Design system tokens for an educational app",
    subtitle: "a three-tier variable system for the DS of a financial literacy app",
    field: "UI design",
    team: "individual contribution",
    responsibilities: "create the variable collections",
  },
  {
    image: `${CLOUDINARY_URL_BASE}/other-project_10.png`,
    title: `React Website for a Concert Photographer`,
    subtitle: `Portfolio for a photographer of the underground life of Budapest`,
    field: `UX & frontend`,
    team: `individual`,
    responsibilities: `design & implement website from scratch`,
    cta:`Check out the live website!`,
    url:`https://egyheppem.hu/`
  },
  {
    
    image: `${CLOUDINARY_URL_BASE}/other-project_5.png`,
    title: "QR scanner for Material & Automation",
    subtitle: "creating the QR scanner a project in the Southern Swedish Designer Days",
    field: "robotics",
    team: "in a team of 2",
    responsibilities: "technical implementation",
  },
    {
    image: `${CLOUDINARY_URL_BASE}/other-project_11.png`,
    title: `Wordpress Website for Leadership Coaching`,
    subtitle: `Business site for programs that promote feminine assertivity & leadership`,
    field: `UX & frontend`,
    team: `individual`,
    responsibilities: `design & implement website in Wordpress`,
    cta:`Check out the live website!`,
    url:`https://vanszavad.hu/`
  },
  {
    image: `${CLOUDINARY_URL_BASE}/other-project_6.png`,
    title: "Indigenous Weather Station",
    subtitle: "data physicalization for indigenous communities to adapt to climate change in collaboration with the Lesotho Meteorological Services",
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
    subtitle: `modular sanitary points to Kibera, Kenya 
    in collaboration with the Hungarian Maltese Charity Service 
   `,
    field: "Architecture",
    team: "in a team of 3 (2 architects)",
    responsibilities: "HCD; design consulting; graphic design",
  },

]