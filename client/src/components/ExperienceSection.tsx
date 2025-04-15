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
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 transform md:translate-x-[-50%]"></div>
          
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
                className="absolute left-0 md:left-0 top-8 w-8 h-8 rounded-full bg-white dark:bg-dark-card border-4 ${exp.color}"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              />
              
              {/* All items on the right side */}
              <div className="md:w-full md:pl-12 md:text-left order-1">
                <motion.div 
                  className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg card-animation mt-4 md:mt-0 ml-8"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="inline-block px-3 py-1 bg-secondary-100 dark:bg-dark-surface text-secondary-600 dark:text-secondary-400 text-sm font-medium rounded-full mb-4">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">{exp.company}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
