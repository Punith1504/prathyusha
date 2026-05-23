import React from 'react';
import { motion } from 'framer-motion';
import './BackgroundEffects.css';

const BackgroundEffects = () => {
  return (
    <div className="bg-effects-container">
      <motion.div 
        className="bg-blob blob-sage"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="bg-blob blob-peach"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="bg-blob blob-lavender"
        animate={{
          x: [0, 50, -100, 0],
          y: [0, -100, 50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
