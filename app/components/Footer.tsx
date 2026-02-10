const Footer = () => {
  return (
    <footer className="relative bg-gray-100 pt-20 pb-12 px-6 overflow-hidden">
      {/* Top decorative pattern */}
      <img 
        src="/images/bg-pattern-footer-desktop.svg" 
        alt="" 
        className="absolute top-0 left-0 w-64"
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Logo and social icons - centered on mobile, split on desktop */}
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center pb-8 mb-8 border-b border-gray-300">
          <img 
            src="/images/logo.svg" 
            alt="Insure" 
            className="w-28 h-auto mb-8 md:mb-0"
          />
          
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="/images/icon-facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="/images/icon-twitter.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="/images/icon-pinterest.svg" alt="Pinterest" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="/images/icon-instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Footer links grid */}
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Our Company */}
          <div>
            <h3 className="text-gray-400 uppercase tracking-wider text-sm font-bold mb-6">
              Our Company
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">How we work</a></li>
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">Why Insure?</a></li>
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">Check price</a></li>
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">Reviews</a></li>
            </ul>
          </div>
          
          {/* Help Me */}
          <div>
            <h3 className="text-gray-400 uppercase tracking-wider text-sm font-bold mb-6">
              Help Me
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">FAQ</a></li>
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">Terms of use</a></li>
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">Privacy policy</a></li>
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">Cookies</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-gray-400 uppercase tracking-wider text-sm font-bold mb-6">
              Contact
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">Sales</a></li>
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">Support</a></li>
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">Live chat</a></li>
            </ul>
          </div>
          
          {/* Others */}
          <div>
            <h3 className="text-gray-400 uppercase tracking-wider text-sm font-bold mb-6">
              Others
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">Careers</a></li>
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">Press</a></li>
              <li><a href="#" className="text-gray-700 uppercase text-sm font-bold hover:underline">Licenses</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer