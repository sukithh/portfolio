import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items
  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Certifications', link: '#certifications' },
    { name: 'Contact', link: '#contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.link.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          Sukith
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.link);
              }}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === item.link.substring(1)
                  ? 'text-primary'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.name}
              {activeSection === item.link.substring(1) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                />
              )}
            </a>
          ))}
          
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-white focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden glass-card mt-4"
      >
        <div className="container mx-auto px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.link);
              }}
              className={`block text-sm font-medium ${
                activeSection === item.link.substring(1)
                  ? 'text-primary'
                  : 'text-gray-300'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-medium text-primary"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
