import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Icon } from '@iconify/react'

const Projects = () => {
  const currentProjects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio built with React, TypeScript, and Framer Motion. Features 3D animations and responsive design.",
      tech: [
        { name: "React", icon: "logos:react" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "Framer Motion", icon: "logos:framer" }
      ],
      status: "In Development",
      statusColor: "blue",
      progress: 85
    },
    {
      title: "Learning Management System",
      description: "Full-stack LMS with Django backend and React frontend. Includes video streaming and progress tracking.",
      tech: [
        { name: "Django", icon: "logos:django-icon" },
        { name: "React", icon: "logos:react" },
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "AWS", icon: "logos:aws" }
      ],
      status: "Planning",
      statusColor: "orange",
      progress: 15
    }
  ]

  const featuredProjects = [
    {
      title: "Task Management System",
      description: "Full-stack task management application with real-time updates and collaboration features.",
      tech: [
        { name: "Django", icon: "logos:django-icon" },
        { name: "React", icon: "logos:react" },
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "WebSocket", icon: "simple-icons:socketdotio" }
      ],
      github: "https://github.com/kamaldhitalofficial/task-manager",
      live: null,
      year: "2024"
    },
    {
      title: "Weather App",
      description: "Cross-platform weather application using Flutter with location-based forecasts.",
      tech: [
        { name: "Flutter", icon: "logos:flutter" },
        { name: "Dart", icon: "logos:dart" },
        { name: "REST API", icon: "simple-icons:fastapi" },
        { name: "Material Design", icon: "logos:material-ui" }
      ],
      github: "https://github.com/kamaldhitalofficial/weather-app",
      live: null,
      year: "2024"
    },
    {
      title: "Chess Game AI",
      description: "Chess implementation with AI opponent using minimax algorithm and different difficulty levels.",
      tech: [
        { name: "Python", icon: "logos:python" },
        { name: "Pygame", icon: "simple-icons:pygame" },
        { name: "AI Algorithms", icon: "simple-icons:tensorflow" }
      ],
      github: "https://github.com/kamaldhitalofficial/chess-ai",
      live: null,
      year: "2023"
    },
    {
      title: "DevOps Learning Lab",
      description: "Collection of DevOps practice projects with Docker containers and CI/CD pipelines.",
      tech: [
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "GitHub Actions", icon: "logos:github-actions" },
        { name: "AWS", icon: "logos:aws" },
        { name: "Shell Scripts", icon: "simple-icons:gnubash" }
      ],
      github: "https://github.com/kamaldhitalofficial/devops-lab",
      live: null,
      year: "2023"
    }
  ]

  const getStatusStyles = (statusColor) => {
    const styles = {
      blue: {
        text: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        dot: "bg-blue-400"
      },
      orange: {
        text: "text-orange-400", 
        bg: "bg-orange-500/10",
        border: "border-orange-500/30",
        dot: "bg-orange-400"
      },
      green: {
        text: "text-green-400",
        bg: "bg-green-500/10", 
        border: "border-green-500/30",
        dot: "bg-green-400"
      },
      red: {
        text: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/30", 
        dot: "bg-red-400"
      }
    }
    return styles[statusColor] || styles.blue
  }

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
    <section id="projects" className="py-32 px-16">
      <div className="w-full mx-auto px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Current Projects */}
          <motion.div className="mb-24" variants={itemVariants}>
            <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              CURRENT
            </h2>
            <p className="text-gray-500 font-mono text-sm tracking-wider uppercase mb-16">
              What I'm working on right now
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group perspective-1000"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div 
                    className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg hover:border-gray-700 transition-all duration-300 transform-gpu"
                    style={{
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                      transform: 'translateZ(0)'
                    }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border ${getStatusStyles(project.statusColor).bg} ${getStatusStyles(project.statusColor).border}`}>
                        <div className={`w-2 h-2 rounded-full ${getStatusStyles(project.statusColor).dot} animate-pulse`}></div>
                        <span className={`text-xs font-mono tracking-wider uppercase ${getStatusStyles(project.statusColor).text}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Progress</span>
                        <span className="text-xs font-mono text-gray-400">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1">
                        <motion.div
                          className="bg-primary-500 h-1 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-full hover:bg-gray-700 transition-colors"
                          title={tech.name}
                        >
                          <Icon icon={tech.icon} className="w-4 h-4" />
                          <span className="text-xs font-mono text-gray-400">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants}>
            <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              PROJECTS
            </h2>
            <p className="text-gray-500 font-mono text-sm tracking-wider uppercase mb-16">
              Selected work and experiments
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group perspective-1000"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div 
                    className="border border-gray-800 p-8 rounded-lg hover:border-gray-700 transition-all duration-300 transform-gpu"
                    style={{
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                      transform: 'translateZ(0)'
                    }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <span className="text-xs font-mono text-gray-500 tracking-wider uppercase">
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center space-x-2 bg-gray-900 px-3 py-2 rounded-full hover:bg-gray-800 transition-colors"
                          title={tech.name}
                        >
                          <Icon icon={tech.icon} className="w-4 h-4" />
                          <span className="text-xs font-mono text-gray-500">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors font-mono text-sm tracking-wider uppercase"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors font-mono text-sm tracking-wider uppercase"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="text-center mt-16"
              variants={itemVariants}
            >
              <a
                href="https://github.com/kamaldhitalofficial"
                className="text-gray-500 hover:text-white transition-colors font-mono text-sm tracking-wider uppercase border-b border-gray-600 hover:border-white pb-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Projects
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
