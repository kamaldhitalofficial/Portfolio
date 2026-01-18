import { motion } from 'framer-motion'

const About = () => {
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
    <section id="about" className="py-32 px-16">
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
            ABOUT
          </motion.h2>
          <motion.p
            className="text-gray-500 font-mono text-sm tracking-wider uppercase mb-16"
            variants={itemVariants}
          >
            Who I am and what I do
          </motion.p>
          
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Computer Science student from Nepal, passionate about building things with code. 
                  I love exploring new technologies and turning ideas into reality.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  My journey started with curiosity about how websites work and evolved into 
                  a deep passion for full-stack development, AI, and cloud technologies.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-mono tracking-wider uppercase text-white">Currently</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start space-x-3">
                    <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span>Building modern web applications with React and Django</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span>Learning cloud technologies and DevOps practices</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                    <span>Exploring AI and machine learning applications</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-gray-800 p-6 rounded-lg">
                  <div className="text-xs font-mono text-gray-500 tracking-wider uppercase mb-2">Location</div>
                  <div className="text-white font-medium">Nepal</div>
                </div>
                
                <div className="border border-gray-800 p-6 rounded-lg">
                  <div className="text-xs font-mono text-gray-500 tracking-wider uppercase mb-2">Education</div>
                  <div className="text-white font-medium">Computer Science</div>
                </div>
                
                <div className="border border-gray-800 p-6 rounded-lg">
                  <div className="text-xs font-mono text-gray-500 tracking-wider uppercase mb-2">Focus</div>
                  <div className="text-white font-medium">Full-Stack Dev</div>
                </div>
                
                <div className="border border-gray-800 p-6 rounded-lg">
                  <div className="text-xs font-mono text-gray-500 tracking-wider uppercase mb-2">Status</div>
                  <div className="text-white font-medium">Available</div>
                </div>
              </div>
              
              <div className="border border-gray-800 p-6 rounded-lg">
                <div className="text-xs font-mono text-gray-500 tracking-wider uppercase mb-4">Contact</div>
                <div className="space-y-2">
                  <div className="text-white">kamaldhitalofficial@gmail.com</div>
                  <div className="text-gray-400">Open for opportunities and collaborations</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
