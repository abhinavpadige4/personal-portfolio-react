import { motion } from 'framer-motion'
import { FaCode, FaChartLine, FaLightbulb } from 'react-icons/fa'

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col"
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 sm:py-28">
        <div className="text-center space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
            Hi, I'm Abhinav Padige
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Passionate Full-Stack Developer building innovative web applications with React, Node.js, and modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors transform hover:scale-105">
              View Projects
            </a>
            <a href="#contact" className="border border-primary-500 hover:bg-primary-50 text-primary-600 font-medium px-6 py-3 rounded-lg transition-colors transform hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Animated Icons */}
        <div className="mt-16 flex justify-center space-x-12">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-primary-50 rounded-lg"
          >
            <FaCode className="text-3xl text-primary-500" />
            <p className="mt-2 text-sm text-gray-600">Frontend Development</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-primary-50 rounded-lg"
          >
            <FaChartLine className="text-3xl text-primary-500" />
            <p className="mt-2 text-sm text-gray-600">Problem Solving</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-primary-50 rounded-lg"
          >
            <FaLightbulb className="text-3xl text-primary-500" />
            <p className="mt-2 text-sm text-gray-600">Innovation</p>
          </motion.div>
        </div>
      </section>

      {/* About Me Preview */}
      <section id="about-preview" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                I'm a dedicated software engineer with expertise in building scalable web applications. My journey in technology began with a fascination for how things work, leading me to master both frontend and backend development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I specialize in creating user-centric interfaces with React and Tailwind CSS, while leveraging Node.js and Express for robust backend solutions. My approach combines clean code practices with innovative problem-solving to deliver exceptional user experiences.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AP</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}