import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Fixed Social Links */}
      <motion.div 
        className="fixed left-6 bottom-0 z-50 hidden lg:flex flex-col items-center space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        <a href="https://github.com/kamaldhitalofficial" className="text-gray-400 hover:text-primary-500 transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/kamaldhital" className="text-gray-400 hover:text-primary-500 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:kamaldhitalofficial@gmail.com" className="text-gray-400 hover:text-primary-500 transition-colors">
          <Mail size={20} />
        </a>
        <div className="w-px h-24 bg-gray-600"></div>
      </motion.div>

      {/* Fixed Email */}
      <motion.div 
        className="fixed right-6 bottom-0 z-50 hidden lg:flex flex-col items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        <a 
          href="mailto:kamaldhitalofficial@gmail.com" 
          className="text-gray-400 hover:text-primary-500 transition-colors text-sm font-mono vertical-text mb-6"
          style={{ writingMode: 'vertical-rl' }}
        >
          kamaldhitalofficial@gmail.com
        </a>
        <div className="w-px h-24 bg-gray-600"></div>
      </motion.div>
    </div>
  )
}

export default App
