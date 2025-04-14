import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#ECEDE7] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#295E37]/10 to-[#4D3072]/10" />
      <div className="relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="pill">Instant access • 100% online • No BS</div>
              <h1 className="text-4xl md:text-5xl font-['Ultra'] text-[#4D3072] leading-tight">
              Make Your Graduate Training Work for You
              </h1>
              <p className="text-xl text-[#4D3072] font-body">
              PhD2Pro is the course that transforms academic expertise into industry-ready clarity. 
              Build the confidence, communication, and career strategy you were never taught.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://phd2pro.teachable.com/"
                  className="bg-[#295E37] text-white px-8 py-3 rounded-full text-lg font-body hover:bg-[#73A47F] transition-colors duration-300 text-center"
                >
                  Get Started
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#signup"
                  className="bg-[#ECEDE7] border-2 border-[#295E37] text-[#295E37] px-8 py-3 rounded-full text-lg font-body hover:bg-[#295E37]/10 transition-colors duration-300 text-center"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-full max-w-lg aspect-[6/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/PhD2Pro_StudySuccess.PNG"
                  alt="PhD2Pro Success Story"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="border-2 border-[#295E37] absolute -bottom-6 -right-6 bg-[#ECEDE7] p-4 rounded-xl shadow-lg"
              >
                <p className="text-sm font-body text-[#295E37]">Join the PhDs who transformed their careers</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
