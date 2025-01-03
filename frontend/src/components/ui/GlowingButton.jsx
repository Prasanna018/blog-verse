import React from 'react';
import { motion } from 'framer-motion';

const GlowingButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 25px rgba(79, 70, 229, 0.5)'
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-8 py-4 bg-gradient-to-r from-primary to-secondary 
        text-white rounded-full text-lg font-semibold 
        shadow-lg transition-all duration-300
        overflow-hidden ${className}
      `}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {children}
    </motion.button>
  );
};

export default GlowingButton;