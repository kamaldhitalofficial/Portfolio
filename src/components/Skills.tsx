import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const Skills = () => {
  const skills = [
    { name: "Python", icon: "logos:python" },
    { name: "React", icon: "logos:react" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "Django", icon: "simple-icons:django" },
    { name: "FastAPI", icon: "simple-icons:fastapi" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "Express", icon: "simple-icons:express" },
    { name: "Flutter", icon: "logos:flutter" },
    { name: "HTML5", icon: "logos:html-5" },
    { name: "CSS3", icon: "logos:css-3" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "MongoDB", icon: "logos:mongodb-icon" },
    { name: "MySQL", icon: "logos:mysql-icon" },
    { name: "AWS", icon: "logos:aws" },
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "Git", icon: "logos:git-icon" },
    { name: "GitHub", icon: "mdi:github" },
    { name: "Linux", icon: "logos:linux-tux" },
    { name: "VSCode", icon: "logos:visual-studio-code" },
    { name: "Figma", icon: "logos:figma" },
    { name: "Postman", icon: "logos:postman-icon" },
    { name: "Firebase", icon: "logos:firebase" },
    { name: "Vercel", icon: "simple-icons:vercel" },
    { name: "Netlify", icon: "logos:netlify-icon" },
    { name: "GitHub Actions", icon: "devicon:githubactions" },
    { name: "Notion", icon: "simple-icons:notion" }
  ]

  const learning = [
    { name: "AI/ML", icon: "simple-icons:tensorflow" },
    { name: "Kubernetes", icon: "logos:kubernetes" },
    { name: "Microservices", icon: "material-symbols:apps" },
    { name: "GraphQL", icon: "logos:graphql" },
    { name: "Next.js", icon: "devicon:nextjs" },
    { name: "Terraform", icon: "logos:terraform-icon" },
    { name: "Jenkins", icon: "logos:jenkins" },
    { name: "Redis", icon: "logos:redis" }
  ]

  return (
    <section id="skills" className="py-32 px-16 bg-gray-900/20">
      <div className="w-full mx-auto px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              SKILLS
            </h2>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center gap-3 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <Icon 
                    icon={skill.icon} 
                    className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-xs font-mono text-gray-400 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Learning Section */}
          <div className="mt-32">
            <h3 className="text-2xl font-mono tracking-wider uppercase text-white mb-12">
              Currently Learning
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
              {learning.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center gap-3 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="w-14 h-14 flex items-center justify-center">
                    <Icon 
                      icon={tech.icon} 
                      className="w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-xs font-mono text-gray-400 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
