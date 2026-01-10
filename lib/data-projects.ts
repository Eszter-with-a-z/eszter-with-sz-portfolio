import type { ProcessStep } from "@/components/project-process"
const CLOUDINARY_PROJECT_URL_BASE = "https://res.cloudinary.com/dskrqh0vu/image/upload/q_auto,f_auto"

export const caseStudies: Record<
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
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_2.jpg`,
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_2.jpg`,
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_10.jpg`,
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_11.jpg`,
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_1.jpg`,
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
      
      videoUrl: "https://res.cloudinary.com/dskrqh0vu/video/upload/v1767639545/project-1-video.mp4",
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
            text: `Since it was my thesis project, I got started with reviewing academic literature.

                  Research suggests that AI above all will replace tasks, not jobs. Therefore, the project draws inspiration from Job Crafting. It is an approach in which the individual increases meaningfulness in their job through tailoring what tasks it entails. The two main methods are simply adding and dropping tasks over time to not only replace the unwanted parts, but to enhance the meaningful ones.

                  Studies also find that even though there are hardly any jobs that are or will be “replaced”, the changes AI introduces in what each job entails is creating a major shift in industries.`,
          },
          {
            type: "text",
            text: `The transition, as in previous industrial revolutions, happens naturally, but it doesn’t mean ideally.
                    The premise of the project is that
                    it needs deliberate, informed and sensitive design to ensure that the shift occurs in a humane way (as opposed to technocratic). 

                    Therefore, human-centered AI principles were central in the project (more in Prototyping).`,
          },          
        ],
      },
      {
        title: "Empathize: User Research",
        subtitle: `Crafters struggle to ask for the real price of their work due the unrealistic competition with industrialized production due to the “invisible work”.`,
        content: [
          {
            type: "image",
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_12.jpg`,
            caption:`Background of the research participants. 
                    “Side hustle” refers to jobs supplementing another job, whereas “part-time” refers to those participants who don’t have any other jobs but don’t do it full-time.`
          },
          {
            type: "text",
            text: `I conducted 7 qualitative interviews with craft entrepreneurs. It was important for me to chose crafters, not digital artists, so that generative AI doesn’t directly interfere with their products (which would be the case with e.g. digital artist or musicians).

                  I used qualitative analysis and created 7 visualizations based in the findings.`,
          },
          {
            type: "text",
            text: `One of these visualizations is shown on the right. Among all the struggles it illustrates, many can be traced back to struggling to advocate for the actual price of their work. It is due to two reasons:

                  (1) unrealistic competition
                  Industrialized mass-production production (from the 1st industrial revolution) and all its working conditions lowered the price unrealistically. 

                  The problem with that is that the only comparable information about products is predominantly the amount it costs (think of a web store and what information they highlight when you browse) instead of e.g. creation process or expected longevity. Therefore, it is natural, that most customers will choose based on the price.

                  (2) invisible work
                  Crafters have to fulfill  all the roles from cleaner, driver,  seller through content creator  and  market  entrepreneur,  analyst , CEO  to  and  bookkeeper without any recognition. 
                  Crafters feel like it is an invisible and overlooked part of their job  that takes up too much of their  time  and  energy.  Many  considered or actually stopped  crafting professionally because of  this phenomenon.`,
          },
          {
            type: "image",
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_3.jpg`,
            caption:`Crafters’ pain points collected. 
                    The position of the elements are arbitrary, the colors  indicate somewhat related issues.`
          },
        ],
      },
      {
        title: "Define: Qualitative Analysis",
        subtitle: `Crafters’ sense of meaningfulness comes from 3 main factors: the sense of creating something; bringing joy to others and artistic self expression.`,
        content: [
          {
            type: "text",
            text: `After identifying the pain points, the central inquiry of the research was to arrive to a definition of meaningfulness - in order to be able to create a tool to enhance it.

                  Drawing upon the insights from the research, I created what I called the Value Wheel.

                  The external circle shows the values the crafters highlighted as reasons why their customers choose their products. In the internal circle, you can find the values that the crafters see in their work.

                  In the center, we arrive to what holds all of them together and what is my understanding of meaningfulness for creative entrepreneurs:
                  the sense of creating something; bringing joy to others and the artistic self expression.

                  I used this illustration as a “compass” to guide my design choices in the ideating and prototyping.`,
          },
          {
            type: "image",
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_4.jpg`,
            caption:"The Value Wheel, another visualization from my qualitative research illustrates the key values of crafters work."
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
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_5.jpg`,
            caption:"The 5 design opportunities."
         },
         {
            type: "text",
            text: `Drawing upon the identified pain points, I used sketching both to illustrate ideas my interviewees imagined and to generate new ones.
            I focused on the action of sketching, as a way to generate knowledge, and identified 5 distinct directions of ideas and design opportuities:
            (A) a design for the (potential) customers - creating some artifacts that promote local crafters and their work;
            (B) for trend analysis from the international community - collecting and organizing knowledge about current  trends, new technologies, events on a global scale to foster the phase of  research and inspiration;
            (D) for the local crafter community - connecting crafters in vicinity and building a community and/or local clientele.`,
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
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_6.jpg`,
            caption:"Visualization from the qualitative research: crafters’ roles connected to social media management"
          },  
          {
            type: "text",
            text: `I opted to narrow down the  scope of the issue that my prototype will address to social media management. 

                  According to my research, it is not only a highly desired task to avoid among creative workers, but as the visualization illustrates, it is also connected to multiple roles crafters must fulfill while  managing their business.`,
          },
          {
            type: "image",
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_7.jpg`,
            caption:"Story board to sketch out the expected interaction and context."
          },         
          {
            type: "text",
            text: `After a couple of iterations, I created the storyboard shown on the right to demonstrate the expected user flow and context of the  prototype. 

                  The idea is to create an artefact powered by AI that engages creative entrepreneurs verbally while they are working on a repetitive part of their project that doesn’t require too much concentration.

                  The goal with using  voice interaction is so that the new technology doesn’t keep them away from their creative work – and since they do it professionally, there is a lot of  monotonicity involved so the worker might have free capacity to engage in a  dialogue. 

                  The prototype, after having a thought-provoking discussion (ideally, the  questions spark new reflections on the human’s half), would come up with  a recommendation for social media content.`,
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
            text: `I used a local AI model (Gemma 3) and a light-weight Flask application to build a high-fidelity prototype quickly to test it with my target audience.

                  I built 2 iterations based on the users’ feedback. The flow charts on the right illustrate how I changed the conversation flow from the first iteration to the second.

                  During the prototyping, I prioritized 3 Human-Centered AI principles:

                  (1) Usable AI
                  The voice input builds on strengths of AI to reduce screen time and enable usability in cases when the artists can’t  use their eyes and hands to interact with the AI.
                  (2) Augmenting human ability   
                  But perhaps more  importantly, it aims to help building a habit and to lower the effort it  takes to post on social media, so that it creates resources for the artists  to augment their skills in what truly matters: in their art or craft.
                  (3) Human-driven decision making  
                  Many tools with a similar purpose automate the whole flow of content  generation from collection to publication. The prototype purposefully focuses on the ideation part of content generation, and leaves the  publication for the human. By doing so, plus asking the crafter  whether the generated content feels authentic to them (last two lines in the second iteration), I hope to keep the human the decision-maker of the  process.`,
          },
          {
            type: "image",
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_8.jpg`,
            caption:"The conversation design of the 1st iteration."
          },
          {
            type: "image",
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_9.jpg`,
            caption:"The conversation design of the 2nd iteration."
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
            text: `Finally, I conducted 5 usability tests: 2 with the 1st prototype, and 3 with the 2nd iteration. The participants were asked to bring a project in which there were in a monotonous phase, e.g. creating sketches, or coloring bigger surfaces. During the test, they were asked to work on their project in a comfortable work environment while conversing with the prototype. Then, we had a retrospective think-aloud session. 
              The outcomes revolved around conversation design, voice, the “character” of the assistant, how it fits into the workflow, and finally, the output that the conversation ends with. 
              The most important findings were that creative workers
              1) found the visual recommendation and hashtags useful, the caption superfluous;`,
          },
          {
            type: "text",
            text: `2) appreciate the details the assistant picks up from the conversation about the context;
              3) were surprised by the creativity of the recommendations and that they were built on details from the conversation; and finally,
              4) agreed that such an assistant can make posting on social media more effortless. The idea of including it in the early phases of the  content generation (reminder, ideation) was appreciated 
              for sparking creativity but leaving space to personalize the content in the later phases to preserve authenticity.`,
          },
                    {
            type: "image",
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639536/project-1_1.jpg`,
            caption:"User testing"
          },
        ],
      },
    ],
  },
  "2": {
    id: 2,
    title: "Reader's Lamp",
    subtitle: "a lamp to challenge the default switch interaction",
    field: "Product Design",
    projectType: "design sprint in teams of 4",
    responsibilities: "user researcher; programmer; tester",
    duration: "1 week",
    technology: "C++; Arduino; Supplyframe PCB Lamp",
    images: [
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639580/project-2_7.png`,
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639580/project-2_10.png`,
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639580/project-2_3.png`,
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639580/project-2_8.png`,
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639580/project-2_4.png`,
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
      videoUrl: "https://res.cloudinary.com/dskrqh0vu/video/upload/v1767639567/project-2-video_2.mp4",
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
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639580/project-2_5.png`,
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
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639580/project-2_6.png`,
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
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639580/project-2_7.png`,
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
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639580/project-2_4.png`,
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
            url: `https://res.cloudinary.com/dskrqh0vu/image/upload/v1767639561/project-2_3.png`,
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
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639672/project-3_8.png`,
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639672/project-3_8.png`,
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639672/project-3_5.png`,
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639672/project-3_4.png`,
      `${CLOUDINARY_PROJECT_URL_BASE}/v1767639672/project-3_6.png`,
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
      
      videoUrl: `https://res.cloudinary.com/dskrqh0vu/video/upload/v1767639663/project-3-video.mp4`,
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
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639672/project-3_11.png`,
            caption:"The decision tree for the cutting mechanism"
          },
        ],
      },
      {
        title: "Prototype Cutting Mechanisms",
        subtitle: "The strength of a pair of scissor blades is sufficient to cut through the reed stem",
        content: [

          {
            type: "text",
            text: `We explored different cutting mechanisms.
            Initially, we prototyped the simplest one which was a pair of blades attached to a servo motor in a scissors-like way (or in our case, an actual pair of scissors). 

            We planned to have it as our first iteration. However, we conducted performance test by cutting actual reed with it and surprisingly, it proved to be sufficiently powerful to cut through the stem. Therefore, we decided to stick to this mechanism.`,
          },
          {
            type: "image",
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639672/project-3_3.png`,
            caption:"Sketches of the prototype"
          },
          {
            type: "image",
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639672/project-3_2.png`,
          },

        ],
      },
      {
        title: "Research Wetland Ecosystems",
        subtitle: "A shift in mindset: Prioritizing the safety of the ecosystem over easing burdens on humans",
        content: [
          {
            type: "image",
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639672/project-3_5.png`,
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
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639672/project-3_6.png`,
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
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639672/project-3_1.png`,
            caption:"Testing by connecting the motors to a phone's camera for the scope of prototyping"
          },
          {
            type: "text",
            text: `Upon realizing that the capacitive sensor is capable of distinguishing non-living entities, plants, and animals, but not precise enough to distinguish reeds from other plants, we brought back the visual recognition idea. We got started with the idea of using an API, however, it can be problematic since a stable internet connection can not be taken for granted in wetlands. 

                    Instead, we propose a local AI model specifically trained to distinguish common reeds from the other members of wetland vegetation. In our prototype, we used image recognition with a Teachable Machines Machine Learning Model.`,
          },
          {
            type: "image",
            url: `${CLOUDINARY_PROJECT_URL_BASE}/v1767639672/project-3_7.png`,
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