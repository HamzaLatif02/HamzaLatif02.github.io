import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, FileText } from 'lucide-react';
import { Project } from '../types';

interface ProjectCarouselProps {
  projects: Project[];
  activeFilter: string;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, activeFilter }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  }, [filteredProjects.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isPaused && filteredProjects.length > 1) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, isPaused, nextSlide, filteredProjects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  if (filteredProjects.length === 0) {
    return <div className="text-center py-16 text-gray-500">No projects found for this filter.</div>;
  }

  const currentProject = filteredProjects[currentIndex];

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div
        className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentProject.id}-${currentIndex}`}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            {/* Project Image */}
            <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                    {currentProject.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {currentProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {currentProject.summary}
                  </p>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {currentProject.links.live && (
                    <a
                      href={currentProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {currentProject.links.code && (
                    <a
                      href={currentProject.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {currentProject.links.caseStudy && (
                    <a
                      href={currentProject.links.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <FileText size={16} />
                      Case Study
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {filteredProjects.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {filteredProjects.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Auto-play controls */}
        {filteredProjects.length > 1 && (
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all duration-200 backdrop-blur-sm text-sm"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCarousel;