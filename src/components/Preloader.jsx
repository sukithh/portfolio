import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-300"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Logo/Text */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold gradient-text mb-4">S</h1>
        </motion.div>
        
        {/* Loading Spinner */}
        <div className="loader mx-auto"></div>
        
        {/* Loading Text */}
        <motion.p
          className="mt-6 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading Experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
