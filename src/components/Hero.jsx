import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import './Hero.css';

const MagneticButton = ({ children, className, href }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.a
      href={href}
      className={className}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.a>
  );
};

const Hero = () => {
  const text = "Navigating Life's Challenges, Together";
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <motion.div 
          className="badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heart size={16} />
          <span>Compassionate Care</span>
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              variants={child}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
              key={index}
            >
              {word === 'Together' ? <span>{word}</span> : word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          G. Prathyusha, MSc in Clinical Psychology. Providing a safe, empathetic, and modern approach to mental wellness and personal growth.
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <MagneticButton href="#booking" className="btn-primary">
            Book a Consultation <ArrowRight size={18} />
          </MagneticButton>
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-image-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="glass-panel image-container">
          <img src="/prathyusha_portrait.png" alt="G. Prathyusha" className="hero-image" />
        </div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
