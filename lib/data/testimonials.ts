
export interface Testimonial {
    id: number
    text: string
    name: string
    title: string
    bold?: string[]
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "[She] listens carefully to the different voices that might  appear in her work. She makes considered judgements, is a team player and communicates well.",
    name: "Lizette",
    title: "my professor & client for my project “Indigenous Weather Station”",
    bold:[
      "listens carefully to the different voices",
      "team player and communicates well"
    ]
  },
  {
    id: 2,
    text: `In our time working together, I’ve seen 
    Eszter demonstrate a great ability to engage with 
    different complex design challenges. She approaches 
    problems with curiosity and  willingness to explore, 
    making her a valuable contributor to projects. In her 
    IOIO work with external research projects, she proved 
    herself to be independent and reliable asset conducting 
    workshops and driving user centric processes.`,
    name: "Johannes",
    title: "head of IOIO lab",
    bold: [
      "complex design challenges",
      "curiosity and willingness to explore",
      "valuable contributor",
      "independent and reliable asset",
      "driving user centric processes",
    ],
  },
  {
    id:3,
    text: `I have witnessed first-hand her exceptional growth a
    nd innate talents in this domain. Eszter is deeply reflective 
    and thoughtful designer who is committed  to continuous 
    learning.[...] It is rare to find a junior service designer
     who already exhibits skills characteristic of medior and, in 
     some areas, even senior-level professionals.`,
    name: "Laci",
    title: "CEO of Meet Prespectives Ltd.",
    bold:[
      "innate talents in this domain",
      "deeply reflective and thoughtful",
      "exhibits skills characteristic of medior",
      "senior-level professionals"
    ]
  },
]