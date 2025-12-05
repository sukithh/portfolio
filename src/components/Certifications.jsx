import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronLeft, FaChevronRight, FaAward } from 'react-icons/fa';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef(null);

  // Certifications data
  const certifications = [
    {
      title: 'Tata crucible campus quiz',
      issuer: 'Internshala',
      date: '12th Nov, 2025',
      image: '/cert-1.jpg',
      credentialUrl: '/cert-1.jpg'
    },
    {
      title: 'Python programming with Linux',
      issuer: 'Ethnotech Academic Solutions - EWIT',
      date: '15th Feb, 2025',
      image: '/cert-2.jpg',
      credentialUrl: '/cert-2.jpg'
    },
    {
      title: 'Python programming with Linux (Part 2)',
      issuer: 'Ethnotech Academic Solutions - EWIT',
      date: '4th July, 2025',
      image: '/cert-3.jpg',
      credentialUrl: '/cert-3.jpg'
    },
    
  ];

  // Scroll functions
  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 350;
    
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="certifications" className="section-padding relative bg-dark-200/30">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary/40 transition-all duration-300 hidden md:flex"
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary/40 transition-all duration-300 hidden md:flex"
          >
            <FaChevronRight className="text-white text-xl" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card min-w-[320px] md:min-w-[350px] snap-center overflow-hidden group cursor-pointer"
                whileHover={{ y: -10 }}
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Award Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-neon-blue">
                    <FaAward className="text-white text-xl" />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent opacity-60"></div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    Issued: {cert.date}
                  </p>

                  {/* View Credential Button */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 px-4 text-center border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    View Credential
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">3</div>
            <div className="text-gray-400 text-sm">Certifications</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">1</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">0</div>
            <div className="text-gray-400 text-sm">Experience</div>
          </div>
         
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
