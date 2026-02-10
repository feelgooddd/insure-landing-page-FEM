const DropdownNav = () => {
  return (
    <div className="fixed inset-0 top-[62px] bg-[#2d2641] z-40 md:hidden">
      {/* Decorative pattern at bottom */}
      <img 
        src="/images/bg-pattern-mobile-nav.svg" 
        alt="" 
        className="absolute bottom-0 left-0 w-full"
      />
      
      {/* Navigation links */}
      <nav className="relative z-10 flex flex-col items-center pt-12 px-6 text-white">
        <ul className="w-full max-w-sm space-y-8 text-center">
          <li>
            <a href="#" className="text-xl uppercase tracking-wide hover:opacity-80">
              How we work
            </a>
          </li>
          <li>
            <a href="#" className="text-xl uppercase tracking-wide hover:opacity-80">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-xl uppercase tracking-wide hover:opacity-80">
              Account
            </a>
          </li>
          <li className="pt-4">
            <a 
              href="#" 
              className="block w-full border-2 border-white px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-[#2d2641] transition-colors"
            >
              View plans
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default DropdownNav