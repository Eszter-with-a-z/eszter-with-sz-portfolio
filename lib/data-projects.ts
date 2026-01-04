import type { ProcessStep } from "@/components/project-process"
const CLOUDINARY_PROJECT_URL_BASE = "https://res.cloudinary.com/xx/image/upload/q_auto,f_auto/xx/portfolio/projects"
export const projectsData: Record<
  string,
  {
    id: number
    title: string
    subtitle: string
    field: string
    projectType: string
    responsibilities: string
    duration: string
    technology: string 
    images: string[]
    problem: any
    proposal: any
    process: ProcessStep[]
  }
> = {
  "1": {
    id: 1,
    title: "(Em)powered by AI",
    subtitle: "a conversational agent for creative entrepreneurs’ authentic content creation",
    field: "Human-centered AI",
    projectType: "individual thesis project | passed with distinction",
    responsibilities: "all (user research, analysis, ideation, implementation, testing)",
    duration: "3 months",
    technology: "generative AI (Gemma 3); Python Flask; JS Vanilla",
    images: [
      "/mobile-app-sustainable-living-1.jpg",
      "/mobile-app-sustainable-living-2.jpg",
      "/mobile-app-sustainable-living-3.jpg",
      "/mobile-app-sustainable-living-4.jpg",
    ],
    problem: {
      col1: "“I want AI to do my laundry and dishes so that I can do  art and writing, not for AI to do my art and writing so  that I can do my laundry and dishes.“ (Maciejewska,  2024)",
      col2: `The 4th industrial revolution once again 
      poses the question: are we automating the work we
       want to be liberated from? What work should be 
       replaced by technology (in this case, by AI)? 
       The target group of the project is creative 
       entrepreneurs, such as crafters and digital 
       artists. My thesis asks the question: How might c
       reative entrepreneurs use generative AI to 
        enhance the meaningfulness of their (day-to-day) 
        work?`,
    },
    proposal: {
      text: [
        `a conversational agent for creative workers to brainstorm social media content when their hands are busy `,
        `“Showing the process is important. It’s almost as important as the physical product.”
            “I know it is important to post on social media...but if I want to do it properly, it takes a full-time job.”
            Even when your hobby is your work, it has monotonous phases. `,
        `This project proposes a conversational agent that can help creative entrepreneurs in these monotonous phases progress with the “invisible work” of content creation. 
            It does so by conversing with creative worker either to capture their ideas or to help come up with new ones. The conversation ends with
            1) a visual recommendation based on the context (screenshot, video, photo depending on e.g. the location of the person)
            2) SEO optimized hashtag recommendation for the content.
            (See in the video below)`,
        `This proposal builds on the finding that 
creative entrepreneurs are willing to offload entrepreneurial, rather than the creative tasks in their work to AI. 

This includes content creation for social media which is extremely important, as the creative workers confirm that showing the process behind their products differentiates them from mass-produced alternatives.`,
      ],
      videoUrl: "/sustainable-app-demo-video.jpg",
      videoCaption: "Video: Here, you can see the video prototype showcasing the interaction between an architect student and the conversational agent.",
    },
    process: [
      {
        title: "Academic research",
        subtitle: `Job crafting is a successful coping strategy against the uncertainty introduced by AI.
                    Beyond job crafting, the leading principles for the project are going to be grounded in Human-Centered AI.`,
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
        title: "Empathize: User Research",
        subtitle: `Crafters struggle to ask for the real price of their work due the unrealistic competition with industrialized production due to the “invisible work”.`,
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
        title: "Define: Qualitative Analysis",
        subtitle: `Crafters’ sense of meaningfulness comes from 3 main factors: the sense of creating something; bringing joy to others and artistic self expression.`,
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
        title: "Ideate: Sketching",
        subtitle: `Through sketching, identify 5 distinct design opportunities. 
                    From those, “invisible work” is chosen.`,
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
        title: "Define: Storyboarding",
        subtitle: `The addressed issue is further narrowed down to social media content creation.
                    Through storyboarding, I define the expected behavior of the prototype.`,
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
      {
        title: "Prototyping",
        subtitle: `The prototype is a conversational agent powered by a generative AI model.
                    It prioritizes the principles of usable AI, augmenting human skill, and human-driven decision making.`,
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
      {
        title: "Test: Usability Testing",
        subtitle: `The AI-powered assistant makes content creation more effortless.
                    It must ideate creatively, pick up and build on details from the context of the conversation.
                    Creatives are open for offloading parts of their tasks, but they themselves must do other parts to  preserve authenticity.`,
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