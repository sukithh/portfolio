import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaPython, FaDatabase, FaDownload, FaEnvelope } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';

const Hero = () => {
  // Floating icons data
  const floatingIcons = [
    { Icon: FaReact, delay: 0, position: 'top-20 left-10' },
    { Icon: SiJavascript, delay: 0.2, position: 'top-40 right-20' },
    { Icon: FaNode, delay: 0.4, position: 'bottom-32 left-20' },
    { Icon: SiTailwindcss, delay: 0.6, position: 'bottom-20 right-32' },
    { Icon: FaPython, delay: 0.8, position: 'top-32 right-40' },
    { Icon: FaDatabase, delay: 1, position: 'bottom-40 left-40' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100 opacity-50"></div>
      
      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute hidden lg:block ${item.position}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 3,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.Icon className="text-4xl text-primary opacity-50" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary text-lg font-medium mb-4"
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">Sukith</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
            >
              Frontend Developer | Web Enthusiast
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg mb-8 max-w-xl"
            >
              I have strong passion for building meaningful,real world solutions through technology.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="/resume.pdf"
                download
                className="neon-button flex items-center gap-2"
              >
                <FaDownload />
                View Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FaEnvelope className="inline mr-2" />
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-primary opacity-50 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border-2 border-secondary opacity-30"></div>
                
                {/* Placeholder Image */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Sukith"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
