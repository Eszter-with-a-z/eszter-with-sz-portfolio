export interface Testimonial {
    id: number
    text: string
    name: string
    title: string
    styles?: any
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "[She] listens carefully to the different voices that might  appear in her work. She makes considered judgements, is a team player and communicates well.",
    name: "Lizette",
    title: "my professor & client for my project “Indigenous Weather Station”",
    styles:[ 
      { phrase: "listens carefully to the different voices", bold: true },
      { phrase: "team player and communicates well", bold: true },
    ],
    
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
    styles:[ 
      { phrase: "complex design challenges", bold: true },
      { phrase: "curiosity and willingness to explore", bold: true },
      { phrase: "valuable contributor", bold: true },
      { phrase: "independent and reliable", bold: true },
      { phrase: "driving user centric processes", bold: true },
    ],
  },
  {
    id:3,
    text: `I have witnessed first-hand her exceptional growth 
    and innate talents in this domain. Eszter is deeply reflective 
    and thoughtful designer who is committed  to continuous 
    learning.[...] It is rare to find a junior service designer
     who already exhibits skills characteristic of medior and, in 
     some areas, even senior-level professionals.`,
    name: "Laci",
    title: "CEO of Meet Prespectives Ltd.",
    styles: [
      {phrase:"innate talents in this domain", bold: true},
      {phrase:"deeply reflective and thoughtful", bold: true},
      {phrase:"exhibits skills characteristic of medior", bold: true},
      {phrase:"senior-level professionals", bold: true}     
    ]

  },
]