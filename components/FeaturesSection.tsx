import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Demystifying Business Vernacular",
      description: "Finally understand 'BizSpeak'! This product uniquely breaks down business language and context, from fundamental terms to the nuances of corporate communication, giving academics the essential linguistic fluency for private sector success.",
      image: "/images/PhD2Pro_Teaching.PNG"
    },
    {
      title: "Bridging Culture Chasm",
      description: "Unlike typical training, this product directly addresses the dramatic cultural shift from academia to the corporate world. Learn to navigate differences in values, priorities (like 'Results over Effort'), and mindsets, enabling a smoother and more rewarding transition.",
      image: "/images/PhD2Pro_Winning.PNG"
    },
    {
      title: "Quantifying Scholarly Impact",
      description: "Stop struggling to translate academic achievements into business value. This course provides practical frameworks for creating and measuring 'Value', a crucial element that empowers you to demonstrate your worth in tangible terms.",
      image: "/images/PhD2Pro_Graduation.PNG"
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20 bg-[#ECEDE7]">
      <div className="relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-['Ultra'] text-[#295E37] mb-6">
              What You&apos;ll Get
            </h2>
            <p className="text-xl text-[#295E37] font-body max-w-2xl mx-auto">
              Our comprehensive program provides the mindset and skills you need to successfully transition from academia to industry.
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-[#ECEDE7] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-['Ultra'] mb-2">{feature.title}</h3>
                    <p className="font-body opacity-90 group-hover:opacity-100 transition-opacity duration-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
