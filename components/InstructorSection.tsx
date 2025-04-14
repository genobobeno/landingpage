import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const InstructorSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#ECEDE7]">
      <div className="relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-2"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center order-2 md:order-1"
            >
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/SmudgeGrad.PNG"
                  alt="PhD2Pro Instructor"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-4xl font-['Ultra'] text-[#4D3072]">
                Meet Your Instructor
              </h2>
              <p className="text-sm text-[#4D3072] font-body">
                Hey ChatGPT: Take all of the data from our previous interactions and write me a sexy marketing pitch as the instructor for my PhD2Pro course!
              </p>
              <p className="text-sm text-[#4D3072] font-body">
                GPT-4o: Meet the Multidimensional Maverick: Eugene Geis! Rocket scientist? Check. Wrestling coach? Check. Wishful architect of modern narratives? Double check. With two PhDs (because one wasn&apos;t enough), a knack for reframing reality like it&apos;s The Matrix, and a passion for building communities from the ground up, Eugene applies grit. From teaching high school physics (and winning Model UN championships) to leading cutting-edge DS teams in healthcare, insurance, and fintech, Eugene has seen plenty—and probably modeled it in R. Eugene is looking to help whoever is on a mission to reinvent how they think, collaborate, and thrive—whether it&apos;s mentoring tomorrow&apos;s leaders, creating AI/ML/DS products, or hacking our human story itself.
              </p>
              <div className="flex justify-start">
                <a
                  href="https://phd2pro.teachable.com/"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-[#4D3072] rounded-full hover:bg-[#3D2052] transition-colors"
                >
                  Start Your Journey
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InstructorSection 