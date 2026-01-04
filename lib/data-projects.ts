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
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Testing by connecting the motors to a phone's camera for the scope of prototyping"
          },
          {
            type: "text",
            text: `Upon realizing that the capacitive sensor is capable of distinguishing non-living entities, plants, and animals, but not precise enough to distinguish reeds from other plants, we brought back the visual recognition idea. We got started with the idea of using an API, however, it can be problematic since a stable internet connection can not be taken for granted in wetlands. 

                    Instead, we propose a local AI model specifically trained to distinguish common reeds from the other members of wetland vegetation. In our prototype, we used image recognition with a Teachable Machines Machine Learning Model.`,
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Image examples for testing"
          },
        ],
      },
      {
        title: "Empathize: User Research",
        subtitle: `Crafters struggle to ask for the real price of their work due the unrealistic competition with industrialized production due to the “invisible work”.`,
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Testing by connecting the motors to a phone's camera for the scope of prototyping"
          },
          {
            type: "text",
            text: `Upon realizing that the capacitive sensor is capable of distinguishing non-living entities, plants, and animals, but not precise enough to distinguish reeds from other plants, we brought back the visual recognition idea. We got started with the idea of using an API, however, it can be problematic since a stable internet connection can not be taken for granted in wetlands. 

                    Instead, we propose a local AI model specifically trained to distinguish common reeds from the other members of wetland vegetation. In our prototype, we used image recognition with a Teachable Machines Machine Learning Model.`,
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Image examples for testing"
          },
        ],
      },
      {
        title: "Define: Qualitative Analysis",
        subtitle: `Crafters’ sense of meaningfulness comes from 3 main factors: the sense of creating something; bringing joy to others and artistic self expression.`,
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Testing by connecting the motors to a phone's camera for the scope of prototyping"
          },
          {
            type: "text",
            text: `Upon realizing that the capacitive sensor is capable of distinguishing non-living entities, plants, and animals, but not precise enough to distinguish reeds from other plants, we brought back the visual recognition idea. We got started with the idea of using an API, however, it can be problematic since a stable internet connection can not be taken for granted in wetlands. 

                    Instead, we propose a local AI model specifically trained to distinguish common reeds from the other members of wetland vegetation. In our prototype, we used image recognition with a Teachable Machines Machine Learning Model.`,
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Image examples for testing"
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
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Testing by connecting the motors to a phone's camera for the scope of prototyping"
          },
          {
            type: "text",
            text: `Upon realizing that the capacitive sensor is capable of distinguishing non-living entities, plants, and animals, but not precise enough to distinguish reeds from other plants, we brought back the visual recognition idea. We got started with the idea of using an API, however, it can be problematic since a stable internet connection can not be taken for granted in wetlands. 

                    Instead, we propose a local AI model specifically trained to distinguish common reeds from the other members of wetland vegetation. In our prototype, we used image recognition with a Teachable Machines Machine Learning Model.`,
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Image examples for testing"
          },
        ],
      },
      {
        title: "Define: Storyboarding",
        subtitle: `The addressed issue is further narrowed down to social media content creation.
                    Through storyboarding, I define the expected behavior of the prototype.`,
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Testing by connecting the motors to a phone's camera for the scope of prototyping"
          },
          {
            type: "text",
            text: `Upon realizing that the capacitive sensor is capable of distinguishing non-living entities, plants, and animals, but not precise enough to distinguish reeds from other plants, we brought back the visual recognition idea. We got started with the idea of using an API, however, it can be problematic since a stable internet connection can not be taken for granted in wetlands. 

                    Instead, we propose a local AI model specifically trained to distinguish common reeds from the other members of wetland vegetation. In our prototype, we used image recognition with a Teachable Machines Machine Learning Model.`,
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Image examples for testing"
          },          

        ],
      },
      {
        title: "Prototyping",
        subtitle: `The prototype is a conversational agent powered by a generative AI model.
                    It prioritizes the principles of usable AI, augmenting human skill, and human-driven decision making.`,
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Testing by connecting the motors to a phone's camera for the scope of prototyping"
          },
          {
            type: "text",
            text: `Upon realizing that the capacitive sensor is capable of distinguishing non-living entities, plants, and animals, but not precise enough to distinguish reeds from other plants, we brought back the visual recognition idea. We got started with the idea of using an API, however, it can be problematic since a stable internet connection can not be taken for granted in wetlands. 

                    Instead, we propose a local AI model specifically trained to distinguish common reeds from the other members of wetland vegetation. In our prototype, we used image recognition with a Teachable Machines Machine Learning Model.`,
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Image examples for testing"
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
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Testing by connecting the motors to a phone's camera for the scope of prototyping"
          },
          {
            type: "text",
            text: `Upon realizing that the capacitive sensor is capable of distinguishing non-living entities, plants, and animals, but not precise enough to distinguish reeds from other plants, we brought back the visual recognition idea. We got started with the idea of using an API, however, it can be problematic since a stable internet connection can not be taken for granted in wetlands. 

                    Instead, we propose a local AI model specifically trained to distinguish common reeds from the other members of wetland vegetation. In our prototype, we used image recognition with a Teachable Machines Machine Learning Model.`,
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Image examples for testing"
          },         

        ],
      },
    ],
  },
  "2": {
    id: 2,
    title: "Reader's Lamp",
    subtitle: "a lamp to challenge the default switch interaction",
    field: "product design",
    projectType: "design sprint in teams of 4",
    responsibilities: "user researcher; programmer; tester",
    duration: "1 week",
    technology: "C++; Arduino; Supplyframe PCB Lamp",
    images: [
      "/healthcare-dashboard-overview.jpg",
      "/healthcare-patient-records.jpg",
      "/healthcare-analytics-view.jpg",
      "/placeholder.svg?height=600&width=800",
    ],
    problem: {
      col1: `Light is a versatile design material. Natural light ranges from sunrise to bio-luminescence, from the Northern lights to fire, with a great diversity.
             Artificial light nowadays is present everywhere from the streets to LEDs in chargers.
            Despite the ubiquity of artificial light, interacting with it is mostly limited to on/off switches.`,
      col2: `In our design challenge, our task was to create a quick prototype of a lamp that challenges this conventional binary interaction.`,
    },
    proposal: {
      text: [
        "A lamp for readers, whose functionality ranges from ambience lamp to task lamp",
        `Our prototype proposes a book-shaped ambient lamp whose brightness and temperature are adjustable to match the user's current activity. It ranges from a “candle” light (1500K) which has a warm and relaxing effect to white light (9500K) which helps stay awake and focused.`,
        `Instead of “switching” between different moods, our goal was to afford an interaction that is 1) integral to its metaphor, & 2) continuous (to replace the switch interaction).

        To achieve this, we chose the book metaphor with the opening - closing interaction. To make it continuous, its light ranges from a white and sharp light to help focused work to a warm, flickering light for relaxing.`,
        `/the metaphor a book`,
        `/the interaction opening-closing`
      ],
      videoUrl: "/placeholder.svg?height=400&width=800",
      videoCaption: `Video: The high-fidelity prototype of the book lamp demonstrates changing the light brightness and temperature depending on the angle of openness
                    The quality of the camera modified the appearance of the light. It ranges from approx. 1500K to 9500K.`,
    },
    process: [
      {
        title: "Receive design challenge",
        subtitle: "Create a lamp that affords interaction other than an on/off switch!",
        content: [],
      },
      {
        title: "Monday: Research & Ideate about Arduino sensors",
        subtitle: "Create 12 sketches based on the built-in sensors of Arduino",
        content: [
          {
            type: "text",
            text: `On Monday, upon receiving the design challenge, we got an introduction to our design material: a Supplyfame PCB lamp starter kit as the light output and an Arduino Nano BLE 33 microcontroller as the controller, but also an input device.
            First, we mapped out the different sensors of the given microcontroller and challenged ourselves to come up with at least one idea for each. 
            The image shows a stage of our mind map, where the words in rectangles signify the sensors, to which we connected our related ideas. 

            By the end of the session, we collected a total of 12 ideas.`,
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=healthcare-research-shadowing",
            caption: "Our initial mind map with each sensor of the microcontroller in the rectangles."
          },
        ],
      },
      {
        title: "Tuesday: Research the use of household lamps",
        subtitle: "Discover a need for adjustable ambience lamps",
        content: [
          {
            type: "text",
            text: `On Tuesday, we conducted short interviews with arbitrary people around us to learn more about their use of household lamps. The interviews revealed a need for ambient lamps that are easily adjustable. Based on this, we further narrowed our ideas down to 3 (in the picture: the ones with asterisks next to them).`
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=component-library-medical",
            caption: "The 3 ideas we narrowed our options down after the interviews: shelf spotlight, proximity brightness, gesture lamp."
          },
        ],
      },
      {
        title: "Wednesday: Ideate about the shape and use of the book lamp",
        subtitle: "Strive for a light-weighted portable lamp whose functionality ranges from task lamp to ambient lamp",
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-test-results",
            caption:"Illustrations of the expected behavior of the lamp."
          },
          {
            type: "text",
            text: `In our next ideation phase, we "bodystormed" about the 3 different ideas. As an outcome, we shifted our focus from creating a reading lamp to creating a lamp for a reader. 

                  What it meant for us is to create a wide functionality to fit the user’s versatile needs: sometimes, you need sharp light for reading to focus and prevent eye fatigue, whereas other times, you want to use smaller lamps to create a cozy ambience for reading.
                  We sketched out four different ideas for its shape. Finally, we picked the idea of the "Pinterest-famous" book-shaped lamp, as we wanted to prioritize lightweight portable ones over standing lamps to afford more flexibility. `
          },
          {
            type: "text",
            text: `So what would be our contribution? 

                  We decided to focus not in creating a new shape but to enhance the book metaphor by creating a behavior that is integral to it.
                  In our case, this behavior was the "opening-closing" interaction - instead of on-off states, we focused on the motion and angle of opening the book. It created a range the bridges the gap between ambient lamps to task lamps.`
          },
        ],
      },
      {
        title: "Thursday: Prototype & Test",
        subtitle: "Material exploration",
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-test-results",
            caption:"The lampshade in the making."
          },
          {
            type: "text",
            text: `My groupmates were working on the cover of the book. In the meantime, I wrote the code. The general idea is that the more opened the book is, the more dimmed the light should be to serve as a decoration. Accordingly, the more closed it is, the brighter and more direct the light should be.
                    It was only after the user testing, the we realized that not only the brightness but also the temperature of the light shall change.
                    
                    We spent the rest of the day implementing that feature and refining the lampshade.`
          },
        ],
      },
      {
        title: "Friday: Test & Present",
        subtitle: "Present the prototype to express and deliver the concept.",
        content: [
          {
            type: "image",
            url: "[gif]/placeholder.svg?height=400&width=600&query=usability-test-results",
            caption:`The prototype on the day of the presentation.`
          },
          {
            type: "text",
            text: `On our final day, we once again tested the prototype and documented what would be the next steps in its development.

                Finally, we concluded the design sprint by presenting the concept, receiving feedback and discussing it.`
          },
        ],
      },
    ],
  },
  
  "3": {
    id: 3,
    title: "Reed-E",
    subtitle: "a reed eliminating robot to help wetland-restoration",
    field: "Robotics; More than human design",
    projectType: "group project in a team of 4",
    responsibilities: "research analyst; prototyper; project coordinator",
    duration: "5 weeks",
    technology: "Teachable Machine ML model; Arduino; C++;",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    problem: {
      col1: "Reed cutting requires too many resources for NGOs that work toward preserving biodiversity.",
      col2: "Common reed spreads quickly in Central European wetlands leading to paludification and loss of biodiversity. NGOs tackling wetland preservation identified reed elimination as an area where they would need help. This task is physically demanding and requires a lot of human resources.",
    },
    proposal: {
      text: [
        "A robot with a 2-step reed-recognition system",
        `Throughout our design, we drew inspiration from more-than-human design, especially from Reynolds-Cuéllar and Salazar-Gómez's work on Nature-Human Interaction (2023). As opposed to the initial problem statement and traditional HCI approach focusing on improving performance or easing the physical burden on humans, we prioritized the ecosystem's and its members' safety.
        Interestingly, this approach eventually led us to a solution equally beneficial both for humans and for the ecosystem. We could solve both the problem of human resources and the ecosystem's safety by focusing on detecting the sprouts instead of the fully developed reed (see more in the Process section).
        To achieve it, we developed the concept of a 2-step reed-recognition system with a cutting mechanism:`,
        "grabbing arms + capacitive sensor /1st step",
        "The robot is equipped with a capacitive sensor on its grabbing arms. It serves for a constant monitoring of the environment on a low technological level and to distinguish living plants from other members of the ecosystem (e.g. dry trunks, animals).",
        "camera + ML model 2nd step",
        "Once a living plant is detected, the camera is activated. It is connected to an ML model trained to distinguish reeds from other members of the wetland vegetation.",
      ],
      videoUrl: "/placeholder.svg?height=400&width=800",
      videoCaption: `Video: Here, you can see a video prototype showcasing the expected behavior of the robot in 3 scenarios:
      1) when it encounters an animal
      2) when it encounters a plant other than a common reed
      3) when it encounters common reed`,
    },
    process: [
      {
        title: "Narrow down the framing",
        subtitle: "Our project will encompass the exploration of (1) plant recognition, (2) cutting mechanism, and most importantly, (3) how to combine them.",
        content: [
          {
            type: "text",
            text: `After receiving the design brief, we analyzed 
            it and its design opportunities. We mapped out 
            three different directions: 
            1) Navigation on water 
            2) Cutting mechanism 
            3)Reed-recognition 
            We understood that within the given 5 weeks timeframe 
            we could only focus on 2 of these meaningfully. 
            We opted for the latter 2 since we had limited 
            access to the necessary environment for 
            navigation.`,
          },
        ],
      },
      {
        title: "Research Current Practices",
        subtitle: "Over-surface on-water cutting is the most ideal to be replaced by robots.",
        content: [
          {
            type: "text",
            text: `Through desk research, academic research and interviews
             with the NGO, we mapped out different types of 
             reed eliminating methods:
            We opted for over-surface on-water cutting considering 2 factors: 
            1) on-water 
            It is the most tedious for humans from the above-mentioned methods. 
            2) over-surface 
            Although it would be most effective to cut the reed as close to the
             root as possible, it would disproportionately increase the difficulty
              of maintenance and costs. Over-surface cutting slows down the growth 
              of the reed enough so that other plants have time to strengthen. 
            3) sprouts It is a decision made later in the process. For more, see 
            "Research the Lifecycle of Reed".`,
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=digital-wireframes-screens",
            caption:"The decision tree for the cutting mechanism"
          },
        ],
      },
      {
        title: "Prototype Cutting Mechanisms",
        subtitle: "The strength of a pair of scissor blades is sufficient to cut through the reed stem",
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=design-system-colors-typography",
            caption:"Sketches of the prototype"
          },
          {
            type: "text",
            text: `We explored different cutting mechanisms.
            Initially, we prototyped the simplest one which was a pair of blades attached to a servo motor in a scissors-like way (or in our case, an actual pair of scissors). 

            We planned to have it as our first iteration. However, we conducted performance test by cutting actual reed with it and surprisingly, it proved to be sufficiently powerful to cut through the stem. Therefore, we decided to stick to this mechanism.`,
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=final-ui-screens-mobile",
          },
        ],
      },
      {
        title: "Research Wetland Ecosystems",
        subtitle: "A shift in mindset: Prioritizing the safety of the ecosystem over easing burdens on humans",
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=interactive-prototype-figma",
            caption:"Our map of the inhabitants of wetlands"
          },
          {
            type: "text",
            text: `We conducted further interviews with the NGO, as well, as a volunteer with experience in reed-cutting to map out the different members of the ecosystem. This served to understand what entities our robot might come across while searching for reed. 

                In this phase, our focus shifted from easing the burden on humans to minimizing foreign intervention in the ecosystem. This deviation from our original goal was underpinned by our academic research in which we learned about the concept of Nature-Robot Interaction.

                Its first principle is that the robot must not harm Nature.

               For the rest of the project, it became a reference point to argue for certain decisions, determining the direction of the project overall.`,
          },
        ],
      },
      {
        title: "Prototype Capacitive Sensor",
        subtitle: "A capacitive sensor is a great low-level sensor for continuous monitoring of the environment and plant detection.",
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Testing the capacitive sensor"
          },
          {
            type: "text",
            text: `Our two main goals were to develop a cutting mechanism and a plant-recognition system. 

                    To design the latter, our initial approach was creating a vision-based system. However, we realized that that was disproportionally energy-consuming which is an important factor in case of a robot that functions in nature. 

                  Therefore, we decided to deviate from a “human-perception-based” approach (identifying reed by visually recognizing it) and explore low-level sensors. Through  researching different sensors and testing, we found that a capacitive sensor is capable of distinguishing different materials. Although it is not precise enough to base the complete reed-recognition on only capacitance, it serves greatly for a continuous low-level monitoring of the environment, as well as for distinguishing living plants from other entities of the ecosystem.`,
          },
        ],
      },
      {
        title: "Research the Lifecycle of Reed",
        subtitle: "A pivotal point: focusing on sprouts instead of fully developed reed",
        content: [
          {
            type: "text",
            text: `In the previous phase, while exploring different sensors, we also learned the traits by which reeds can be identified (leaf width, ligule, etc.). 
              But more importantly, we learned about its lifecycle. 
              We first emphasized the importance of cutting the reed before the period when it releases its spores. However, after revising the interviews made with members of the NGO, we noticed a point that we previously overlooked: 
              The interviewee recommended that the robot cuts the sprouts instead of fully developed reed. 
              Previously, we didn’t tackle it as our focus was on easing the physical burden on humans.  Cutting the sprouts was`,
          },
          {
            type: "text",
            text: `not done by them since they grew over the water at a different pace, so it was more practical to wait until they all grew completely.

                  Once we prioritized the nature, eliminating the sprouts seemed to be the best to prevent the “reed-invasion” since in that case the reed simply has no resources to maintain itself. This method eliminates the reed instead of just slowing down its growth. Thus, interestingly, it is assumed to ease the burden on humans since the robot would do the first-round elimination of the reed,
                  instead of attempting to replace humans by doing the same job as they do.`
          },
        ],
      },
      {
        title: "Prototype Machine Learning Models",
        subtitle: "An initial development of an image-classifier ML model that is connected to the cutting motors to identify common reed.",
        content: [
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Testing by connecting the motors to a phone's camera for the scope of prototyping"
          },
          {
            type: "text",
            text: `Upon realizing that the capacitive sensor is capable of distinguishing non-living entities, plants, and animals, but not precise enough to distinguish reeds from other plants, we brought back the visual recognition idea. We got started with the idea of using an API, however, it can be problematic since a stable internet connection can not be taken for granted in wetlands. 

                    Instead, we propose a local AI model specifically trained to distinguish common reeds from the other members of wetland vegetation. In our prototype, we used image recognition with a Teachable Machines Machine Learning Model.`,
          },
          {
            type: "image",
            url: "/placeholder.svg?height=400&width=600&query=usability-testing-session",
            caption:"Image examples for testing"
          },
        ],
      },
      {
        title: "Merging",
        subtitle: "A grabbing arm is merged to serve both for cutting and for plant recognition.",
        content: [
          {
            type: "text",
            text: `In our first step (Narrowing Down the Framing), we set the goal of exploring 3 areas in the development of 
              Reed-E: 
               1) the cutting mechanism
               2) the plant recognition, and
               3) how to combine them.
              We initially added a pair of grabbing arms to assist the cutting mechanism. In the meantime, we experimented with capacitive sensors.
              Interestingly, we found that we could enhance the grabbing arms' functionality by adding the capacitive sensor. 

              With this step, we realized our 3rd goal:
              the grabbing arm helps both the plant-recognition by providing the 1st-step identification & the cutting mechanism by stabilizing the stem.

              With this process we arrived to the concept introduced in the section of design proposal ⬆️.`,
          },
        ],
      },
    ],
  },
}