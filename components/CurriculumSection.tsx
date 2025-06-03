import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Lock, Play } from 'lucide-react'

interface Lesson {
  id: string
  title: string
  duration: string
  isPreview?: boolean
  isLocked?: boolean
  previewUrl?: string
}

interface Module {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

const modules: Module[] = [
    {
        id: 'module-0',
        title: 'Orienting Your Self for a Successful Transition',
        description: 'Setting goals, leveraging your network, hacking your mindset, and red flags during the job search',
        lessons: [
          {
            id: 'lesson-0-1',
            title: 'Declare Your Personal Vision',
            duration: '28 min',
            isLocked: true
          },
          {
            id: 'lesson-0-2',
            title: 'Utilizing All Of Your Resources',
            duration: '31 min',
            isPreview: true,
            previewUrl: 'https://drive.google.com/file/d/12mkAPJ7t308GOSjKwWwVPY2l9xWRj_7b/view?usp=sharing'
          },
          {
            id: 'lesson-0-3',
            title: 'Life Hacks And Reframes',
            duration: '66 min',
            isLocked: true
          },
          {
            id: 'lesson-0-4',
            title: 'Red Flags',
            duration: '58 min',
            isLocked: true
          },
          {
            id: 'lesson-0-5',
            title: 'Intro To AI',
            duration: '41 min',
            isLocked: true
          }
        ]
      },
      {
        id: 'module-1',
        title: 'Four Dimensions of Business Vocabulary',
        description: 'Learn the fundamentals of business language so you can talk-the-talk',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'Business Structure',
            duration: '61 min',
            isLocked: true
          },
          {
            id: 'lesson-1-2',
            title: 'Sales Management',
            duration: '64 min',
            isLocked: true
          },
          {
            id: 'lesson-1-3',
            title: 'Value Propositions',
            duration: '53 min',
            isLocked: true
          },
          {
            id: 'lesson-1-4',
            title: 'Product Management',
            duration: '79 min',
            isPreview: true,
            previewUrl: 'https://drive.google.com/file/d/10uVatOf6MVTytTMqpqcOPxUbvYagdCfE/view?usp=sharing'
          }
        ]
      },
  {
    id: 'module-2',
    title: 'Structural Components of the Four Dimensions',
    description: 'Imagining yourself within the role of your employment',
    lessons: [
      {
        id: 'lesson-2-1',
        title: 'Business Structure',
        duration: '54 min',
        isLocked: true
      },
      {
        id: 'lesson-2-2',
        title: 'Revenue Metrics',
        duration: '48 min',
        isLocked: true
      },
      {
        id: 'lesson-2-3',
        title: 'Productivity Metrics',
        duration: '37 min',
        isLocked: true
      },
      {
        id: 'lesson-2-4',
        title: 'Value Propositions in Product Management',
        duration: '40 min',
        isLocked: true
      }
    ]
  },
  {
    id: 'module-3',
    title: 'Qualitative Aspects and Goal Orientation within the Four Dimensions',
    description: 'Understanding the way employees behave, and how they are measured',
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Company Culture',
        duration: '56 min',
        isLocked: true
      },
      {
        id: 'lesson-3-2',
        title: 'Marketing',
        duration: '46 min',
        isLocked: true
      },
      {
        id: 'lesson-3-3',
        title: 'Productivity Management',
        duration: '54 min',
        isLocked: true
      },
      {
        id: 'lesson-3-4',
        title: 'Agile',
        duration: '46 min',
        isLocked: true
      }
    ]
  }
]

const CurriculumSection: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null)

  const toggleModule = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId)
  }

  return (
    <section className="py-20 bg-[#B3D6B5]" id="curriculum">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-['Ultra'] text-[#4D3072] mb-4">
            Course Curriculum
          </h2>
          <p className="text-lg text-[#4D3072] max-w-2xl mx-auto">
            A comprehensive curriculum designed to help you transition from academia to industry
          </p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((module) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-xl font-['Playfair_Display'] text-[#4D3072]">
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-[#4D3072] transition-transform ${
                    expandedModule === module.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedModule === module.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 border-t border-gray-100">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                        >
                          <div className="flex items-center space-x-3">
                            {lesson.isPreview ? (
                              <Play className="w-5 h-5 text-[#295E37]" />
                            ) : lesson.isLocked ? (
                              <Lock className="w-5 h-5 text-gray-400" />
                            ) : null}
                            <div>
                              <h4 className="text-[#4D3072] font-medium">
                                {lesson.title}
                              </h4>
                              <p className="text-sm text-gray-500">{lesson.duration}</p>
                            </div>
                          </div>
                          {lesson.isPreview ? (
                            <a
                              href={lesson.previewUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#295E37] hover:text-[#4D3072] transition-colors"
                            >
                              Watch Preview
                            </a>
                          ) : lesson.isLocked ? (
                            <a
                              href="https://phd2pro.teachable.com/p/phd2pro"
                              className="text-[#4D3072] hover:text-[#295E37] transition-colors"
                            >
                              Unlock
                            </a>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://phd2pro.teachable.com/p/phd2pro"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-[#4D3072] rounded-full hover:bg-[#3D2052] transition-colors"
          >
            Get Full Access
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default CurriculumSection 