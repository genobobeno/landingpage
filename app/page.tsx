'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialSection from '@/components/TestimonialSection'
import InstructorSection from '@/components/InstructorSection'
import SignupForm from '@/components/SignupForm'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ParticlesBackground from '@/components/ParticlesBackground'

const Home: React.FC = () => {
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
    </div>
  )
}

export default Home