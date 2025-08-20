import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import projectsData from './data/projects.json';
import { Project } from './types';

function App() {
  const projects: Project[] = projectsData;

  useEffect(() => {
    // Set up reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = () => {
      if (mediaQuery.matches) {
        document.documentElement.style.setProperty('--motion-duration', '0.01s');
      } else {
        document.documentElement.style.removeProperty('--motion-duration');
      }
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200"
    >
      <Header />
      <main>
        <Hero />
        <Projects projects={projects} />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;