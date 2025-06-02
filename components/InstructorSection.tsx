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
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
  <a
    href="https://linkedin.com/in/eugenegeis"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-[#4D3072] transition-colors duration-300"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </a>
  <a
    href="https://x.com/eugenegeis"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-[#4D3072] transition-colors duration-300"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
    </svg>
  </a>
  <a
    href="https://github.com/genobobeno"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-[#4D3072] transition-colors duration-300"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
    </svg>
  </a>
</div>
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
                <a href="https://phd2pro.teachable.com/p/phd2pro">Check out the entire 20-plus hours of business education here</a>.</p>
              <div className="flex flex-wrap gap-4 justify-start">
                <a
                  href="https://phd2pro.teachable.com/p/phd2pro"
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