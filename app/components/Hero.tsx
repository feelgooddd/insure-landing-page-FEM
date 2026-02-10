const Hero = () => {
  return (
    <section className="relative bg-[#2d2641] overflow-hidden md:overflow-visible">
      {/* Top-left decorative pattern */}
      <img 
        src="/images/bg-pattern-intro-left-desktop.svg" 
        alt="" 
        className="absolute top-0 left-0 w-32 md:w-48"
      />
      
      {/* Top-right decorative pattern */}
      <img 
        src="/images/bg-pattern-intro-right-desktop.svg" 
        alt="" 
        className="absolute top-0 right-0 w-40 md:w-64"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Text content */}
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
        
        <div className="md:absolute md:right-0 md:top-65 md:w-1/2 md:max-w-xl">
          <img 
            src="/images/image-intro-desktop.jpg" 
            alt="" 
            className="w-full"
          />
        </div>
      </div>
      
      {/* Spacer for overflowing image on desktop */}
      <div className="h-0 md:h-40"></div>
    </section>
  )
}

export default Hero