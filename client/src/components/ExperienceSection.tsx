import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-underline mx-auto"></div>
          <p className="section-subtitle">
            My journey in web development, AI integration, and professional growth over the years.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-4 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="relative flex flex-col md:flex-row mb-16 timeline-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-0 md:left-0 top-8 w-8 h-8 rounded-full bg-white dark:bg-dark-card border-4 border-primary-500 timeline-dot"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              />
              
              {/* Right side content */}
              <div className="ml-12 md:ml-16 w-full">
                <motion.div 
                  className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg card-animation transform hover:scale-105 transition-transform duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col space-y-3">
                    <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-dark-surface text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full w-fit">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">{exp.company}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </div>
                  <motion.div 
                    className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg card-animation mt-4 md:mt-0 transform hover:scale-105 transition-transform duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col space-y-3">
                      <span className="inline-block px-4 py-1.5 bg-secondary-100 dark:bg-dark-surface text-secondary-600 dark:text-secondary-400 text-sm font-medium rounded-full w-fit">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">{exp.company}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
