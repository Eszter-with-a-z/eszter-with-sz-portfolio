import { notFound } from "next/navigation"
import ProjectHero from "@/components/project-hero"
import ProjectProblem from "@/components/project-problem"
import ProjectProposal from "@/components/project-proposal"
import ProjectProcess from "@/components/project-process"
import ProjectNavigation from "@/components/project-navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const projectsData = {
  "1": {
    id: 1,
    title: "Sustainable Living App",
    subtitle: "Making eco-friendly choices accessible",
    field: "Mobile App Design",
    projectType: "UX/UI Design",
    responsibilities: "User research, wireframing, prototyping, visual design",
    duration: "3 months",
    technology: "Figma, React Native",
    images: [
      "/mobile-app-sustainable-living-1.jpg",
      "/mobile-app-sustainable-living-2.jpg",
      "/mobile-app-sustainable-living-3.jpg",
      "/mobile-app-sustainable-living-4.jpg",
    ],
    problem: {
      col1: "Many people want to live more sustainably but find it overwhelming to know where to start. The abundance of information and conflicting advice makes it difficult for individuals to make informed decisions about their daily choices.",
      col2: "Our research revealed that users needed a personalized, actionable approach to sustainability. They wanted to track their progress, understand their impact, and receive specific recommendations based on their lifestyle and location.",
    },
    proposal: {
      text: [
        "We designed an intuitive mobile application that breaks down sustainable living into manageable daily actions. The app features a personalized dashboard that tracks your environmental impact across categories like transportation, food, energy, and waste.",
        "Key features include a carbon footprint calculator, a community challenge system to stay motivated, and local resources for sustainable shopping and services. The design emphasizes positive reinforcement and celebrates small wins.",
        "The interface uses clear data visualization to help users understand their progress over time. We incorporated gamification elements thoughtfully to encourage consistent engagement without feeling preachy or judgmental.",
      ],
      videoUrl: "/sustainable-app-demo-video.jpg",
      videoCaption: "Interactive prototype showing the onboarding flow and daily challenge feature",
    },
    process: [
      {
        title: "Discovery & Research",
        subtitle: "2 weeks",
        content: [
          {
            type: "text",
            text: "We conducted interviews with 25 participants across different demographics to understand their relationship with sustainability. We also analyzed competing apps and identified gaps in the market.",
          },
          {
            type: "text",
            text: "Key insights: Users want specific, actionable advice rather than general tips. They need positive reinforcement and community support to maintain motivation.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=user-research-interview-notes",
          },
        ],
      },
      {
        title: "Ideation & Wireframing",
        subtitle: "2 weeks",
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=wireframe-sketches-mobile",
          },
          {
            type: "text",
            text: "We explored multiple approaches through rapid sketching and low-fidelity wireframes. The team collaborated in design studios to generate diverse solutions.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=digital-wireframes-screens",
          },
        ],
      },
      {
        title: "Visual Design",
        subtitle: "3 weeks",
        content: [
          {
            type: "text",
            text: "The visual language emphasizes natural, earthy tones while maintaining a modern, clean aesthetic. We created a comprehensive design system for consistency.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=design-system-colors-typography",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=final-ui-screens-mobile",
          },
        ],
      },
      {
        title: "Prototyping",
        subtitle: "2 weeks",
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=interactive-prototype-figma",
          },
          {
            type: "text",
            text: "We built a high-fidelity, interactive prototype in Figma to test the complete user journey from onboarding through daily use.",
          },
          {
            type: "text",
            text: "The prototype included micro-interactions and animations to demonstrate the delightful user experience we envisioned.",
          },
        ],
      },
      {
        title: "Usability Testing",
        subtitle: "2 weeks",
        content: [
          {
            type: "text",
            text: "We conducted moderated usability tests with 15 participants, observing how they interacted with the prototype and gathering feedback on the experience.",
          },
          {
            type: "text",
            text: "Key findings led to refinements in the navigation structure and simplified the onboarding process from 5 steps to 3.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
          },
        ],
      },
    ],
  },
  "2": {
    id: 2,
    title: "Healthcare Dashboard",
    subtitle: "Streamlining patient data management",
    field: "Web Application",
    projectType: "Product Design",
    responsibilities: "User flows, interface design, usability testing",
    duration: "4 months",
    technology: "Sketch, Next.js",
    images: [
      "/healthcare-dashboard-overview.jpg",
      "/healthcare-patient-records.jpg",
      "/healthcare-analytics-view.jpg",
      "/placeholder.svg?height=600&width=800",
    ],
    problem: {
      col1: "Healthcare providers were struggling with fragmented systems that required switching between multiple applications to access patient information. This led to inefficiencies, potential errors, and frustration among medical staff.",
      col2: "Doctors and nurses needed a unified dashboard that could provide quick access to patient records, schedules, and critical alerts. The system had to be intuitive enough for busy healthcare workers to use under pressure.",
    },
    proposal: {
      text: [
        "We designed a comprehensive dashboard that centralizes all patient information in one place. The interface prioritizes critical information and uses clear visual hierarchy to help healthcare workers find what they need quickly.",
        "The dashboard includes customizable widgets, allowing each user to configure their workspace based on their specific role and preferences. Real-time updates and smart notifications ensure that important information is never missed.",
        "We paid special attention to accessibility and compliance with healthcare regulations, ensuring the system could be used by all staff members and met strict security requirements.",
      ],
      videoUrl: "/placeholder.svg?height=400&width=800",
      videoCaption: "Overview of the dashboard interface and key features in action",
    },
    process: [
      {
        title: "Research & Analysis",
        subtitle: "3 weeks",
        content: [
          {
            type: "text",
            text: "We shadowed healthcare workers in clinical settings to understand their daily workflows and pain points. We also analyzed existing systems to identify opportunities for improvement.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=healthcare-research-shadowing",
          },
          {
            type: "text",
            text: "Key insight: Speed and clarity are paramount. Healthcare workers need to access information in seconds, not minutes.",
          },
        ],
      },
      {
        title: "Information Architecture",
        subtitle: "2 weeks",
        content: [
          {
            type: "text",
            text: "We mapped out the entire information structure, conducting card sorting exercises with medical staff to understand their mental models.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=information-architecture-diagram",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=user-flow-diagrams",
          },
        ],
      },
      {
        title: "Interface Design",
        subtitle: "4 weeks",
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=dashboard-design-iterations",
          },
          {
            type: "text",
            text: "We created multiple design iterations, focusing on clean layouts and intuitive navigation. Color coding and iconography help users quickly identify different types of information.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=component-library-medical",
          },
        ],
      },
      {
        title: "Validation & Testing",
        subtitle: "3 weeks",
        content: [
          {
            type: "text",
            text: "We conducted extensive usability testing with doctors, nurses, and administrative staff to validate our design decisions.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-test-results",
          },
          {
            type: "text",
            text: "The testing revealed that our design reduced task completion time by 40% compared to the existing system.",
          },
        ],
      },
    ],
  },
  "3": {
    id: 3,
    title: "E-Learning Platform",
    subtitle: "Engaging educational experiences",
    field: "EdTech",
    projectType: "Full Stack Design",
    responsibilities: "Research, design system, interaction design",
    duration: "6 months",
    technology: "Figma, Vue.js",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    problem: {
      col1: "Traditional e-learning platforms often feel impersonal and fail to maintain student engagement. High dropout rates and low completion rates indicate that current solutions are not meeting learner needs effectively.",
      col2: "Students need an engaging, interactive learning experience that adapts to their pace and learning style. Educators need tools to create compelling content and track student progress effectively.",
    },
    proposal: {
      text: [
        "We created an interactive learning platform that makes education feel more like an engaging experience than a chore. The platform uses adaptive learning technology to personalize content based on individual progress and comprehension.",
        "Students can learn at their own pace with a mix of video lessons, interactive exercises, and collaborative projects. The interface includes progress tracking, achievement badges, and social features to build a sense of community.",
        "For educators, we designed an intuitive course creation tool with templates, media integration, and analytics to understand how students are engaging with their content.",
      ],
      videoUrl: "/placeholder.svg?height=400&width=800",
      videoCaption: "Student experience walkthrough showing interactive lessons and progress tracking",
    },
    process: [
      {
        title: "User Research",
        subtitle: "4 weeks",
        content: [
          {
            type: "text",
            text: "We interviewed students and educators to understand their frustrations with existing e-learning platforms and what would make learning more engaging.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=student-interview-sessions",
          },
          {
            type: "text",
            text: "Key findings: Students want variety in content formats, clear progress indicators, and opportunities for interaction with peers and instructors.",
          },
        ],
      },
      {
        title: "Design System",
        subtitle: "3 weeks",
        content: [
          {
            type: "text",
            text: "We built a comprehensive design system that would support both the student and educator experiences while maintaining consistency across the platform.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=design-system-components-education",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=color-palette-typography-education",
          },
        ],
      },
      {
        title: "Student Experience Design",
        subtitle: "5 weeks",
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=student-dashboard-design",
          },
          {
            type: "text",
            text: "We designed an engaging student interface that makes learning feel rewarding. Interactive elements and clear progress tracking help maintain motivation.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=lesson-interface-interactive",
          },
        ],
      },
      {
        title: "Educator Tools",
        subtitle: "4 weeks",
        content: [
          {
            type: "text",
            text: "We created a powerful yet intuitive course creation tool that allows educators to build engaging content without technical expertise.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=course-builder-interface",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=analytics-dashboard-teacher",
          },
        ],
      },
      {
        title: "Testing & Iteration",
        subtitle: "4 weeks",
        content: [
          {
            type: "text",
            text: "We ran a beta program with a small group of students and teachers, gathering feedback and iterating on the design based on real usage.",
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=beta-testing-feedback",
          },
          {
            type: "text",
            text: "The beta program showed a 60% increase in course completion rates compared to the previous platform.",
          },
        ],
      },
    ],
  },
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }]
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div>
      <Navbar />
      <ProjectHero project={project} />
      <ProjectProblem problem={project.problem} />
      <ProjectProposal proposal={project.proposal} />
      <ProjectProcess process={project.process} />
      <ProjectNavigation currentId={project.id} />
      <Footer />
    </div>
  )
}
