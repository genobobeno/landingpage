'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialSection from '@/components/TestimonialSection'
import InstructorSection from '@/components/InstructorSection'
import SignupForm from '@/components/SignupForm'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ParticlesBackground from '@/components/ParticlesBackground'
import CurriculumSection from '@/components/CurriculumSection'
import LaunchPopup from '@/components/LaunchPopup'

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <ParticlesBackground />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <section id="home" className="w-full">
            <HeroSection />
          </section>
          <section id="curriculum" className="w-full">
            <CurriculumSection />
          </section>
          <section id="features" className="w-full">
            <FeaturesSection />
          </section>
          <section id="testimonials" className="w-full">
            <TestimonialSection />
          </section>
          <section id="instructor" className="w-full">
            <InstructorSection />
          </section>
          <section id="signup" className="w-full">
            <SignupForm />
          </section>
          <CTASection />
          <Footer />
        </main>
      </div>
      
      {/* Launch Popup */}
      <LaunchPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  )
}

export default Home