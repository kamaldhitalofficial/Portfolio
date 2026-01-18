import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="contact" className="py-32 px-16">
      <div className="w-full mx-auto px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
            variants={itemVariants}
          >
            CONTACT
          </motion.h2>
          <motion.p
            className="text-gray-500 font-mono text-sm tracking-wider uppercase mb-16"
            variants={itemVariants}
          >
            Let's work together
          </motion.p>
          
          <div className="grid lg:grid-cols-2 gap-24">
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm always interested in new opportunities, collaborations, and interesting projects. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-colors">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-white" size={24} />
                    <div>
                      <div className="text-xs font-mono text-gray-500 tracking-wider uppercase mb-1">Email</div>
                      <a 
                        href="mailto:kamaldhitalofficial@gmail.com"
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        kamaldhitalofficial@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-colors">
                  <div className="flex items-center space-x-4">
                    <Github className="text-white" size={24} />
                    <div>
                      <div className="text-xs font-mono text-gray-500 tracking-wider uppercase mb-1">GitHub</div>
                      <a 
                        href="https://github.com/kamaldhitalofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        github.com/kamaldhitalofficial
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-colors">
                  <div className="flex items-center space-x-4">
                    <Linkedin className="text-white" size={24} />
                    <div>
                      <div className="text-xs font-mono text-gray-500 tracking-wider uppercase mb-1">LinkedIn</div>
                      <a 
                        href="https://linkedin.com/in/kamaldhitalofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        linkedin.com/in/kamaldhitalofficial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="space-y-6">
                <h3 className="text-lg font-mono tracking-wider uppercase text-white">What I'm Looking For</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start space-x-3">
                    <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span>Full-stack development opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span>Open source collaborations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span>Learning and mentorship opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span>Interesting project discussions</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-800 p-6 rounded-lg">
                <div className="text-xs font-mono text-gray-500 tracking-wider uppercase mb-4">Response Time</div>
                <div className="text-white mb-2">Usually within 24 hours</div>
                <div className="text-gray-400 text-sm">I check my email regularly and try to respond as quickly as possible.</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
