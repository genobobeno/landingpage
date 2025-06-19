import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface LaunchPopupProps {
  isOpen: boolean
  onClose: () => void
}

const LaunchPopup: React.FC<LaunchPopupProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText('LAUNCH')
    // You could add a toast notification here
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Popup Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.4 
            }}
            className="relative bg-[#ECEDE7] rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 pointer-events-auto"
            >
              <X className="w-5 h-5 text-[#4D3072]" />
            </button>

            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B3D6B5] via-[#ECEDE7] to-[#73A47F]/20 pointer-events-none" />
            
            <div className="relative z-10 p-8">
              {/* Launch badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 15 }}
                className="inline-block bg-gradient-to-r from-[#4D3072] to-[#295E37] text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                🚀 PRODUCT LAUNCH
              </motion.div>

              {/* Main heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl font-['Ultra'] text-[#4D3072] mb-4 leading-tight"
              >
                PhD2Pro is Live!
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-[#4D3072] font-body mb-6 leading-relaxed"
              >
                Transform your academic expertise into industry success with our proven framework.
              </motion.p>

              {/* Discount section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#295E37]/20"
              >
                <div className="text-center">
                  <div className="text-4xl font-['Ultra'] text-[#295E37] mb-2">
                    50% OFF
                  </div>
                  <p className="text-[#4D3072] font-body mb-4">
                    Limited time launch offer
                  </p>
                  
                  {/* Launch code */}
                  <div className="bg-gradient-to-r from-[#295E37] to-[#4D3072] rounded-xl p-4 mb-4">
                    <p className="text-white/80 text-sm font-body mb-2">Use code:</p>
                    <div className="flex items-center justify-center gap-3">
                      <code className="text-2xl font-mono font-bold text-white tracking-wider">
                        LAUNCH
                      </code>
                      <button
                        onClick={copyToClipboard}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-200"
                        title="Copy code"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="space-y-3"
              >
                <motion.a
                  href="https://phd2pro.teachable.com/p/phd2pro"
                  className="block w-full bg-gradient-to-r from-[#295E37] to-[#4D3072] text-white text-center py-4 px-6 rounded-full font-body font-medium text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started Now
                </motion.a>
                <button
                  onClick={handleClose}
                  className="block w-full text-[#4D3072] text-center py-3 px-6 rounded-full font-body hover:bg-[#4D3072]/10 transition-colors duration-300"
                >
                  Maybe Later
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LaunchPopup 