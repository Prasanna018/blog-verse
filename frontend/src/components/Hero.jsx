import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './ui/AnimatedBackground';
import GlowingButton from './ui/GlowingButton';
import { Link, useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-4"
      >
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Share Your Story
            <br />
            With The World
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl"
        >
          Join our community of writers, thinkers, and storytellers.
          Create, share, and discover amazing content.
        </motion.p>

        <motion.div variants={itemVariants}>
          <GlowingButton

            className="text-xl"
          >
            <Link to='#card' > Explore Blogs</Link>
          </GlowingButton>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl"
        />
      </motion.div>
    </div>
  );
};

export default Hero;