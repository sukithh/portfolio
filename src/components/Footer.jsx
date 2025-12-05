import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/sukithh', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sukith-m-jain-b79407384', label: 'LinkedIn' },
    { icon: FaInstagram, url: 'https://www.instagram.com/sukithh/', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-dark-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Sukith</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
             A Full-Stack Architect and Cloud Enthusiast, I specialize in building and deploying scalable, resilient, and high-performance end-to-end applications.  
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-white hover:from-primary/40 hover:to-secondary/40 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Sukith. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Precision and purpose <FaHeart className="text-red-500 animate-pulse" /> 
          </p>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
    </footer>
  );
};

export default Footer;
