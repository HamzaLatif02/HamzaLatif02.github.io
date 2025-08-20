import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useSmooth } from '../hooks/useSmooth';

const Footer: React.FC = () => {
  const { scrollToSection } = useSmooth();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/latif-hamza/',
      label: 'LinkedIn'
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/HamzaLatif02',
      label: 'GitHub'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:lhamza1020@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                HL
              </div>
              <span className="text-xl font-semibold">Hamza Latif</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Data Scientist & ML Engineer passionate about turning complex data into clear, 
              actionable insights. Currently pursuing MSc in Data Science at King's College London.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-primary transition-colors duration-200 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-primary transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:lhamza1020@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors duration-200"
              >
                <Mail size={18} />
                <span>lhamza1020@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/latif-hamza/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors duration-200"
              >
                <Linkedin size={18} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
            
            {/* Download CV */}
            <a
              href="/HamzaLatif_CV.pdf"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Hamza Latif. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors duration-200 group"
                aria-label="Back to top"
              >
                <ArrowUp size={16} className="group-hover:transform group-hover:-translate-y-1 transition-transform duration-200" />
                <span className="text-sm">Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;