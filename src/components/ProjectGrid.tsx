import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Project } from '../types';

interface ProjectGridProps {
  projects: Project[];
  activeFilter: string;
  onProjectClick: (index: number) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, activeFilter, onProjectClick }) => {
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Quick Browse
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() => onProjectClick(index)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary font-semibold text-sm">
                  {project.year}
                </span>
                <div className="flex gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h4>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.summary}
              </p>
              
              <div className="flex gap-2 flex-wrap">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white rounded text-xs hover:bg-blue-700 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={12} />
                    Live
                  </a>
                )}
                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-white rounded text-xs hover:bg-gray-700 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={12} />
                    Code
                  </a>
                )}
                {project.links.caseStudy && (
                  <a
                    href={project.links.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FileText size={12} />
                    Study
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;