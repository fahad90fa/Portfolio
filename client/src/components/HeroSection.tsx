import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
  const [contentRef, isContentVisible] = useScrollAnimation<HTMLDivElement>();
  const [imageRef, isImageVisible] = useScrollAnimation<HTMLDivElement>({ delay: 300 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 dark:opacity-30 z-0">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full filter blur-[100px] opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-500 rounded-full filter blur-[100px] opacity-30"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-40 right-40 w-60 h-60 bg-accent-500 rounded-full filter blur-[100px] opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container mx-auto max-w-6xl z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            ref={contentRef}
            className="w-full md:w-1/2"
            initial="hidden"
            animate={isContentVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div className="mb-4" variants={itemVariants}>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary-100 dark:bg-dark-card text-primary-600 dark:text-primary-400">
                Premium Casino Experience
              </span>
            </motion.div>
            
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" variants={itemVariants}>
              <span>Welcome to </span>
              <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-transparent bg-clip-text">PakGame.net</span>
            </motion.h1>
            
            <motion.p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8" variants={itemVariants}>
              Experience the thrill of premium online casino gaming with stunning graphics,
              live dealers, and secure payments. Play from anywhere, anytime.
            </motion.p>
            
            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <motion.a 
                href="https://pakgame.net/register" 
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.a>
              <motion.a 
                href="#projects" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Games
              </motion.a>
            </motion.div>
            
            <motion.div className="flex space-x-4 mt-8" variants={itemVariants}>
              <motion.div 
                className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-lg flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-green-700 dark:text-green-400 font-medium">2,500+ Active Players</span>
              </motion.div>
              <motion.div 
                className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fas fa-trophy text-yellow-500 mr-2"></i>
                <span className="text-sm text-yellow-700 dark:text-yellow-400 font-medium">Daily Jackpots</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            ref={imageRef}
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={isImageVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="relative w-72 h-72 md:w-96 md:h-96 mx-auto"
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-30 blur-xl animate-pulse-slow"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80" 
                  alt="PakGame.net Casino" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -right-4 p-4 bg-white dark:bg-dark-card rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium">247 Support Available</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
