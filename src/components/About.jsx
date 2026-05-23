import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, HeartPulse } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <motion.div 
          className="about-image-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-panel about-panel">
            <h2 className="section-title text-left">Meet Prathyusha</h2>
            <div className="qualifications">
              <div className="qual-item">
                <Award className="qual-icon" />
                <div>
                  <h4>MSc Clinical Psychology</h4>
                  <p>Advanced degree with specialized clinical training.</p>
                </div>
              </div>
              <div className="qual-item">
                <HeartPulse className="qual-icon" />
                <div>
                  <h4>Empathetic Approach</h4>
                  <p>Therapy tailored to your unique emotional landscape.</p>
                </div>
              </div>
              <div className="qual-item">
                <BookOpen className="qual-icon" />
                <div>
                  <h4>Science-Backed Methods</h4>
                  <p>Integrating modern psychological research with practice.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="about-subtitle">My Philosophy</h3>
          <p className="about-text">
            I believe that seeking help is a profound act of courage. In our sessions, my primary goal is to create a secure, non-judgmental space where you feel genuinely heard and understood.
          </p>
          <p className="about-text">
            Whether you are a high-performing professional struggling with burnout, a couple seeking to reconnect, a teenager navigating the complexities of adolescence, or a parent looking for guidance, my approach is tailored specifically to you.
          </p>
          <p className="about-text">
            By combining evidence-based therapeutic techniques with deep empathy, we will work together to uncover your innate resilience, develop healthy coping mechanisms, and foster meaningful personal growth. Healing is a journey, and you don't have to walk it alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
