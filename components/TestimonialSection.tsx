import React from 'react'
import { motion } from 'framer-motion'

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: "Kevin H.",
      title: "Biostatistics PhD Student",
      quote: "It was mostly the Vision element that helped me get clarity on what I actually wanted to do next. Targeting the jobs was easy after that."
    },
    {
      name: "Reddit User",
      title: "Paranoid Prof Exiting Stage Left",
      quote: "This course made me rethink how I talked about my expertise. Industry folks want the skill list, not the domain lit review."
    },
    {
      name: "Nikola C.",
      title: "New Employee @ IBM",
      quote: "We didn't focus on interview prep at all, but I felt so much more fluent in the communication style of industry that the interviews became so much smoother and I became so much more confident."
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
    <section className="py-20 bg-[#B3D6B5]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Ultra'] text-[#4D3072] mb-6">
            What Jobseekers Are Saying
          </h2>
          <p className="text-xl text-[#4D3072] font-body max-w-2xl mx-auto">
            Hear from PhDs who&apos;ve successfully transitioned to industry roles
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col transform group-hover:scale-[1.02]">
                <div className="flex-1">
                  <p className="text-black font-body italic text-lg mb-6 group-hover:text-[#4D3072] transition-colors duration-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="border-t border-[#ECEDE7] pt-4 group-hover:border-[#4D3072]/20 transition-colors duration-300">
                  <p className="font-['Ultra'] text-[#295E37] text-xl group-hover:text-[#4D3072] transition-colors duration-300">
                    {t.name}
                  </p>
                  <p className="text-black font-body group-hover:text-[#4D3072]/80 transition-colors duration-300">
                    {t.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialSection
