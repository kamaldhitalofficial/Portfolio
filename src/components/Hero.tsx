import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden py-32 px-16">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="w-full mx-auto px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left side - Details */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-primary-500 font-mono text-sm mb-4 tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              KAMAL<br/>
              <span className="text-gray-700">DHITAL</span>
            </motion.h1>
            
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg text-gray-400 font-mono tracking-wider uppercase mb-2">
                Full Stack Developer
              </p>
              <p className="text-lg text-gray-400 font-mono tracking-wider uppercase">
                DevOps Engineer
              </p>
            </motion.div>
            
            <motion.p
              className="text-base text-gray-500 max-w-xl mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Computer Science student from Kathmandu, Nepal. 
              Building scalable applications with Python, React, and modern DevOps practices.
            </motion.p>
            
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#projects" 
                className="text-white hover:text-primary-500 transition-colors font-mono text-sm tracking-wider uppercase border-b border-gray-600 hover:border-primary-500 pb-1"
              >
                View Work
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-primary-500 transition-colors font-mono text-sm tracking-wider uppercase border-b border-gray-600 hover:border-primary-500 pb-1"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Photo */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center overflow-hidden">
                {/* Placeholder for photo - replace with actual image */}
                <div className="text-8xl opacity-30">👨‍💻</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-500/5 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-xs font-mono tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-500 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
