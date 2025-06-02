import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4D3072] to-[#295E37] relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#4D3072] to-[#295E37]"
        animate={{
          background: [
            'linear-gradient(45deg, #4D3072, #295E37)',
            'linear-gradient(135deg, #4D3072, #295E37)',
            'linear-gradient(225deg, #4D3072, #295E37)',
            'linear-gradient(315deg, #4D3072, #295E37)',
            'linear-gradient(45deg, #4D3072, #295E37)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-['Ultra'] text-white mb-6">
            Ready to make the leap from PhD to Pro?
          </h2>
          <p className="text-xl text-white/90 font-body max-w-2xl mx-auto mb-8">
            Get access to the course and start building your career on your own terms.
          </p>
          <motion.a
            href="https://phd2pro.teachable.com/p/phd2pro"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-[#4D3072] bg-white rounded-full hover:bg-white/90 transition-colors duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
