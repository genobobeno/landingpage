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
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-[#4D3072]">
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
                I am the first generation in my family to go to college, and my parents were very blue collar. Before I began my PhD, I taught middle school science. 
                I loved it, but I realized that I wanted to know more and so I pursued grad school. Six years later with a PhD in 
                <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.101.042501" className="text-[#295E37] underline hover:text-[#4D3072] transition-colors duration-300">experimental particle physics</a>, I went back to teaching science in a high school. 
                My imposter syndrome was so bad that those 6 years changed little-to-nothing. Five years later, my post-grad uncertainty was not getting much better. 
                I was so unsure of my path that I completely rearranged my plans and went back to grad school <b>AGAIN</b> for a <a href="https://arxiv.org/abs/1912.12755" className="text-[#295E37] underline hover:text-[#4D3072] transition-colors duration-300">second PhD</a>. 
                But this time, I was determined to change everything. It has been about 15 years since that decision to change my life. I have been a ditch digger, a teacher, a teaching assistant, 
                a research consultant, a wrestling coach, a debate coach, a predictive risk modeler, a tech manager, a fintech marketing executive, a bioinformatician, and an AI 
                product manager. I have received countless hours of business coaching and have made more miscalculations than I care to admit. In the last few years, I put months of thought
                into this course, and I am excited to share it with you. Why? Because if I could go back in time and teach my 28yo self a few lessons, 90 percent of that content is
                in this course. You are not going to find all of this information at a cheaper price anywhere else on the internet. I made it cheap on purpose. This is about helping
                people like you to leapfrog the 15-20 years I spent figuring most of this out. The material is designed for anyone along the spectrum from (A) having some graduate training 
                with strong uncertainties about how to begin your job search, through (B) post-grads who are already a year or more into their first job. 
                <a href="https://phd2pro.teachable.com">Check out the entire 20-plus hours of business education here</a>.</p>
              <div className="flex flex-wrap gap-4 justify-start">
                <a
                  href="https://phd2pro.teachable.com/"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-[#4D3072] rounded-full hover:bg-[#3D2052] transition-colors"
                >
                  Start The Course!
                </a>
                <a
                  href="https://eugenegeis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-[#4D3072] bg-transparent border-2 border-[#4D3072] rounded-full hover:bg-[#4D3072] hover:text-white transition-colors"
                >
                  More About Eugene
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