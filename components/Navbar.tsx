import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past navbar
      setScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = ['home', 'features', 'testimonials', 'signup']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false) // Close mobile menu after clicking
    }
  }

  const getNavColor = (section: string) => {
    if (activeSection === section) {
      switch (section) {
        case 'home':
          return 'text-green-dark'
        case 'features':
          return 'text-purple-dark'
        case 'testimonials':
          return 'text-green-medium'
        case 'signup':
          return 'text-green-dark'
        default:
          return 'text-black'
      }
    }
    return 'text-black hover:text-green-dark transition-colors duration-300'
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ECEDE7] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center"
          >
            <Image
              src="/images/PhD2Pro_NavbarLogo.svg"
              alt="PhD2Pro Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('features')}
              className={`font-body ${getNavColor('features')} bg-[#ECEDE7] px-4 py-2 rounded-lg`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`font-body ${getNavColor('testimonials')} bg-[#ECEDE7] px-4 py-2 rounded-lg`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('signup')}
              className={`font-body ${getNavColor('signup')} bg-[#ECEDE7] px-4 py-2 rounded-lg`}
            >
              Contact
            </button>
            <a
              href="https://phd2pro.teachable.com/"
              className="bg-[#295E37] text-white px-6 py-1.5 rounded-full text-lg font-body hover:bg-[#73A47F] transition-colors duration-300"
            >
              Explore The Course
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('features')}
              className={`block w-full text-left font-body ${getNavColor('features')} bg-[#ECEDE7] px-4 py-2 rounded-lg`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`block w-full text-left font-body ${getNavColor('testimonials')} bg-[#ECEDE7] px-4 py-2 rounded-lg`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('signup')}
              className={`block w-full text-left font-body ${getNavColor('signup')} bg-[#ECEDE7] px-4 py-2 rounded-lg`}
            >
              Contact
            </button>
            <a
              href="https://phd2pro.teachable.com/p/phd2pro"
              className="block w-full text-center bg-[#295E37] text-white px-6 py-2 rounded-full text-lg font-body hover:bg-[#73A47F] transition-colors duration-300"
            >
              Explore The Course
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 