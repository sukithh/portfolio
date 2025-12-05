import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNode, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiCplusplus, SiC } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Skills data with proficiency levels
  const skillsData = [
    { name: 'React', level: 90, icon: FaReact, color: '#61DAFB' },
    { name: 'JavaScript', level: 90, icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', level: 82, icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', level: 80, icon: FaNode, color: '#339933' },
    { name: 'HTML5', level: 95, icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', level: 50, icon: FaCss3Alt, color: '#1572B6' },
    { name: 'python', level: 90, icon: FaPython, color: '#06B6D4' },
    { name: 'MongoDB', level: 75, icon: SiMongodb, color: '#47A248' },
    { name: 'C', level: 78, icon: SiC, color: '#000000' },
    { name: 'Git', level: 85, icon: FaGitAlt, color: '#F05032' },
    { name: 'C++', level: 72, icon: SiCplusplus, color: '#FFCA28' },
    
  ];

  return (
    <section id="skills" className="section-padding relative bg-dark-200/30">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon className="text-2xl" style={{ color: skill.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.level}%</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-dark-300 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  style={{
                    boxShadow: `0 0 10px ${skill.color}40`
                  }}
                />
              </div>

              {/* Circular Progress Alternative (Hidden by default, shown on hover) */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="relative w-24 h-24 mx-auto">
                  <svg className="transform -rotate-90 w-24 h-24">
                    {/* Background Circle */}
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-dark-300"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke={skill.color}
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "251.2 251.2", strokeDashoffset: 251.2 }}
                      animate={inView ? {
                        strokeDashoffset: 251.2 - (251.2 * skill.level) / 100
                      } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      style={{
                        filter: `drop-shadow(0 0 6px ${skill.color})`
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Frontend */}
          <div className="glass-card p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <FaReact className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Frontend</h3>
            <p className="text-gray-400 text-sm">
              Building responsive and interactive user interfaces
            </p>
          </div>

          {/* Backend */}
          <div className="glass-card p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
              <FaNode className="text-3xl text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Backend</h3>
            <p className="text-gray-400 text-sm">
              Creating robust APIs and server-side applications
            </p>
          </div>

          {/* Database */}
          <div className="glass-card p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
              <FaDatabase className="text-3xl text-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Database</h3>
            <p className="text-gray-400 text-sm">
              Designing efficient data structures and queries
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
