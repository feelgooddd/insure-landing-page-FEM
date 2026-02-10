'use client'

import { useState } from 'react'
import DropdownNav from "./DropdownNav"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white p-4 md:px-8 sticky top-0 z-50 bg-white">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <img src="/images/logo.svg" alt="Insure" className="w-28 h-auto" />
        
        {/* Desktop Nav - hidden on mobile */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><a href="#" className="text-gray-600 uppercase text-sm font-bold hover:text-gray-900">How we work</a></li>
          <li><a href="#" className="text-gray-600 uppercase text-sm font-bold hover:text-gray-900">Blog</a></li>
          <li><a href="#" className="text-gray-600 uppercase text-sm font-bold hover:text-gray-900">Account</a></li>
          <li>
            <a href="#" className="border-2 border-gray-900 px-6 py-2 uppercase text-sm font-bold hover:bg-gray-900 hover:text-white transition-colors">
              View plans
            </a>
          </li>
        </ul>
        
        {/* Mobile Hamburger - hidden on desktop */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50"
        >
          <img 
            src={isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"} 
            alt="Menu" 
            className="w-8 h-8"
          />
        </button>
      </nav>
      
      {/* Mobile Dropdown Nav */}
      {isOpen && <DropdownNav />}
    </header>
  )
}

export default Header