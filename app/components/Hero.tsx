"use client"

import { useEffect, useState } from "react"

const desktopSlides = [
  "/images/image-intro-desktop.jpg",
  "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800",
  "https://images.unsplash.com/photo-1559521783-1d1599583485?w=800",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
]

const mobileSlides = [
  "/images/image-intro-mobile.jpg",
  "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800",
  "https://images.unsplash.com/photo-1559521783-1d1599583485?w=800",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    setCurrent(0)
  }, [isMobile])

  useEffect(() => {
    const slides = isMobile ? mobileSlides : desktopSlides
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isMobile])

  const slides = isMobile ? mobileSlides : desktopSlides

  return (
    <section className="relative bg-[#2d2641] overflow-hidden md:overflow-visible">
      <img
        src="/images/bg-pattern-intro-left-desktop.svg"
        alt=""
        className="absolute top-0 left-0 w-32 md:w-48"
      />

      <img
        src="/images/bg-pattern-intro-right-desktop.svg"
        alt=""
        className="absolute top-0 right-0 w-40 md:w-64"
      />

      <div className="relative z-10 max-w-7xl mx-auto md:grid md:grid-cols-2">
        <div className="px-6 py-20 md:py-32 text-center md:text-left text-white">
          <div className="hidden md:block w-32 h-px bg-white mb-12"></div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Humanizing your insurance.
          </h1>
          <p className="text-lg mb-8 max-w-lg leading-relaxed">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right
            for you. Ensure you and your loved ones are protected.
          </p>
          <button className="border-2 border-white px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-[#2d2641] transition-colors">
            View Plans
          </button>
        </div>

<div className="w-full md:absolute md:right-0 md:top-65 md:w-1/2 md:max-w-xl">
          <div className="relative w-full">
            {/* Ghost image preserves natural dimensions per breakpoint */}
            <picture>
              <source media="(min-width: 768px)" srcSet="/images/image-intro-desktop.jpg" />
              <img
                src="/images/image-intro-mobile.jpg"
                alt=""
                className="w-full invisible"
              />
            </picture>
            {slides.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "scale(1.08)" : "scale(1)",
                  transition: "opacity 1000ms ease, transform 4000ms ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-0 md:h-40"></div>
    </section>
  )
}

export default Hero