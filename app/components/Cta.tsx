const Cta = () => {
  return (
    <section className="px-6 py-20">
      <div className="relative max-w-6xl mx-auto bg-[#2d2641] px-12 py-16 md:px-20 md:py-20 overflow-hidden">
        <img 
          src="/images/bg-pattern-how-we-work-desktop.svg" 
          alt="" 
          className="absolute top-0 right-0 h-full"
        />
        
        {/* Content */}
        <div className="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-0 md:max-w-md leading-tight text-white">
            Find out more about how we work
          </h2>
          <button className="border-2 text-white border-white px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-[#2d2641] transition-colors">
            How we work
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cta