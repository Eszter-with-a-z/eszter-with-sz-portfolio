"use client"

import { useEffect, useState, useRef } from "react"

export default function Hero() {
  const [bgImage, setBgImage] = useState(1)
  const [isCardVisible, setIsCardVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Randomly select image from 1-20
    const randomNum = Math.floor(Math.random() * 36) + 1
    setBgImage(randomNum)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setIsCardVisible(true)
      } else {
        setIsCardVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <section id="hero" className="sticky top-0 -z-10 h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dskrqh0vu/image/upload/v1767638432/analog_${bgImage}.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-100 container flex flex-col lg:flex-row mx-auto px-4 flex items-center justify-between gap-12">
        {/* Col 1 */}
        <div className="flex-1 "></div>
        {/* Col 2 =  */}
        <div className="text-white text-center flex-1">
          <p className="text-lg mb-2">Hi there! I am</p>
          <h1 className=" text-6xl font-bold italic mb-4">Eszter <br/> (with SZ)</h1>
          <p className="text-2xl w-100">- an Interaction Designer based in Malmö, Sweden</p>
        </div>

        {/* Dictionary Style Card */}
        <div 
        ref={cardRef}
        className={`
          flex-1 md:justify-end text-white leading-none p-4 rounded-lg max-w-md backdrop-blur-xs
          transition-all duration-500 ease-out ${
            isCardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <div className="border-l-4 border-white pl-4">
            <h2 className="text-2xl font-bold mb-2">Interaction Design </h2>
            <p className="text-sm ">noun  [U]</p>
            <p className="text-sm italic font-bold  mb-3">/subjective definition/</p>
            <p className="leading-none mb-3">designing the interaction between humans and computers; </p>
            <p className="leading-none">the process of bringing the user’s perspective into the development of digital products and services. </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}
