import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Since this is client-side only, we'll just show a success message
      setIsSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Interested in collaboration, have a project in mind, or just want to discuss data science? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  <span className="text-green-800 dark:text-green-300">
                    Thank you for your message! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-0 ${
                      errors.name
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:border-primary'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {errors.name}
                    </div>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-0 ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:border-primary'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-0 resize-none ${
                      errors.message
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:border-primary'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="Tell me about your project, collaboration idea, or just say hello..."
                  />
                  {errors.message && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm always excited to discuss new opportunities in data science, machine learning, 
                  or software development. Whether you have a project in mind, want to collaborate, 
                  or just want to connect with a fellow data enthusiast, don't hesitate to reach out.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:lhamza1020@gmail.com"
                  className="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-200">
                    <Mail className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">lhamza1020@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/latif-hamza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-200">
                    <Linkedin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                    <p className="text-gray-600 dark:text-gray-300">Connect with me professionally</p>
                  </div>
                </a>
              </div>

              <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Response Time
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  I typically respond to messages within 24-48 hours. For urgent matters, 
                  feel free to reach out via LinkedIn for faster response.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;