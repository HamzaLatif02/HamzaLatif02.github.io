import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "MSc Data Science",
      subtitle: "King's College London",
      description: "Advanced studies in machine learning, statistical modeling, and data analytics"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "First-Class BSc",
      subtitle: "City, University of London",
      description: "Computer Science with distinction in software engineering and algorithms"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Social Media Growth",
      subtitle: "Data-Driven Content Strategy",
      description: "Managed fashion-related pages using analytics for content optimization and audience growth"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center">
                <div className="w-60 h-60 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <span className="text-6xl font-bold">HL</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-center lg:text-left">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate data scientist and machine learning engineer currently pursuing my MSc in Data Science at King's College London. 
                With a First-Class BSc in Computer Science, I combine strong technical foundations with practical experience in 
                software development, machine learning, and data analytics.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My expertise spans from building sophisticated ML models for legal tech applications to developing computer vision systems 
                for deepfake detection. I'm particularly interested in natural language processing, data visualization, 
                and creating AI solutions that have real-world impact.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond technical work, I've managed social media strategies for fashion brands, applying data-driven approaches 
                to content optimization and audience growth, demonstrating my ability to bridge technical skills with business applications.
              </p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                    {achievement.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-primary font-semibold">
                      {achievement.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;