import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillGroups = [
    {
      category: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 }
      ]
    },
    {
      category: "Data Science & ML",
      skills: [
        { name: "scikit-learn", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 85 },
        { name: "NLP", level: 90 },
        { name: "Neural Networks", level: 85 }
      ]
    },
    {
      category: "Visualization",
      skills: [
        { name: "Tableau", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "D3.js", level: 75 }
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "Data Pipelines", level: 85 },
        { name: "Git", level: 90 },
        { name: "Linux", level: 85 },
        { name: "VS Code", level: 95 }
      ]
    },
    {
      category: "Creative",
      skills: [
        { name: "Adobe Photoshop", level: 80 },
        { name: "Final Cut Pro", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning data science, machine learning, software development, 
            and creative technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: groupIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {group.category}
              </h3>
              
              <div className="space-y-6">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: (groupIndex * 0.1) + (skillIndex * 0.05) 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.2, 
                          delay: (groupIndex * 0.1) + (skillIndex * 0.05) + 0.3,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Pandas', 'NumPy', 'Jupyter', 'Docker', 'AWS', 'REST APIs',
              'Statistical Analysis', 'Data Mining', 'Feature Engineering',
              'Model Deployment', 'A/B Testing', 'Time Series Analysis'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;