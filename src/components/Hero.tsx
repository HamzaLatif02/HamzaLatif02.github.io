import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useSmooth } from '../hooks/useSmooth';

const Hero: React.FC = () => {
  const { scrollToSection } = useSmooth();

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/latif-hamza/',
      label: 'LinkedIn'
    },
    {
      icon: <Github size={24} />,
      href: 'https://github.com/HamzaLatif02',
      label: 'GitHub'
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:lhamza1020@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            <span className="block mb-2">Data Science & ML</span>
            <span className="block text-primary text-4xl sm:text-5xl lg:text-6xl font-normal">
              turning complex data into clear decisions
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            MSc in Data Science at King's College London. First-Class BSc in Computer Science. 
            Transforming data challenges into intelligent solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              View Projects
            </button>
            <a
              href="/HamzaLatif_CV.pdf"
              className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-200 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        onClick={() => scrollToSection('projects')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 animate-bounce"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;