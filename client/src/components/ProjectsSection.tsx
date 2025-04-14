import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-dark-surface">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-underline mx-auto"></div>
          <p className="section-subtitle">
            A showcase of my recent development work, featuring web applications, AI integrations, and other exciting projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg card-animation"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 ${project.categoryColor} text-white text-xs rounded-full`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={`${project.id}-${techIndex}`}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.liveUrl && (
                    <motion.a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 font-medium flex items-center"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span>Visit Website</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
                  
                  {project.githubUrl && (
                    <motion.a 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium flex items-center"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span>Source Code</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
