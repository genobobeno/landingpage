import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

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
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-6">
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
              href="#signup"
              className="bg-[#295E37] text-white px-6 py-1.5 rounded-full text-lg font-body hover:bg-[#73A47F] transition-colors duration-300"
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