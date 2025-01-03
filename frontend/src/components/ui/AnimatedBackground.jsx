import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const bubbles = Array(6).fill(null);

  return (
    <div className="absolute  inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            background: `radial-gradient(circle, ${index % 2 ? '#4F46E5' : '#6366F1'} 0%, transparent 70%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;