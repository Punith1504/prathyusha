import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Thermometer, ArrowRight } from 'lucide-react';
import './StressCloud.css';

const initialStressors = [
  { id: 1, text: 'Deadlines', color: 'var(--color-peach)', size: 80, top: '10%', left: '10%' },
  { id: 2, text: 'Arguments', color: 'var(--color-lavender)', size: 90, top: '35%', left: '5%' },
  { id: 3, text: 'Exams', color: 'var(--color-sage)', size: 75, top: '65%', left: '15%' },
  { id: 4, text: 'Burnout', color: 'var(--color-peach-dark)', size: 100, top: '20%', left: '60%' },
  { id: 5, text: 'Parenting', color: 'var(--color-sage-dark)', size: 85, top: '55%', left: '55%' },
  { id: 6, text: 'Finances', color: 'var(--color-lavender-dark)', size: 80, top: '75%', left: '40%' },
  { id: 7, text: 'Social Media', color: 'var(--color-peach)', size: 70, top: '10%', left: '40%' },
  { id: 8, text: 'Expectations', color: 'var(--color-sage)', size: 90, top: '40%', left: '75%' },
];

const StressCloud = () => {
  const [stressors, setStressors] = useState(initialStressors);
  const [poppedCount, setPoppedCount] = useState(0);

  const handlePop = (id) => {
    setStressors(stressors.filter(s => s.id !== id));
    setPoppedCount(prev => prev + 1);
  };

  const getTemperatureMessage = () => {
    if (poppedCount === 0) return "Click on the stressors that weigh on you today.";
    if (poppedCount <= 2) return "It's completely normal to feel a little pressure. You're doing great.";
    if (poppedCount <= 5) return "Your stress level is building up. It might be time to take a breath and talk it out.";
    return "You're carrying a lot right now. Remember, it's okay to ask for help navigating these challenges.";
  };

  const getRecommendation = () => {
    if (poppedCount === 0) return null;
    if (poppedCount <= 3) return "Recommendation: A free 15-minute consultation to learn basic coping strategies.";
    if (poppedCount <= 6) return "Recommendation: Consider 2-3 sessions to unpack these specific stressors.";
    return "Recommendation: A full counseling plan could be highly beneficial for your current burnout level.";
  };

  const progressPercentage = (poppedCount / initialStressors.length) * 100;

  return (
    <section className="stress-cloud-section" id="interactive">
      <div className="stress-cloud-container glass-panel">
        <div className="cloud-header">
          <h2 className="section-title">Stress Temperature</h2>
          <p className="section-subtitle">
            What's on your mind? Tap the bubbles that represent your current stressors to check your temperature.
          </p>
        </div>

        <div className="cloud-area">
          <AnimatePresence>
            {stressors.map((stressor) => (
              <motion.div
                key={stressor.id}
                className="bubble"
                onClick={() => handlePop(stressor.id)}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -15, 0],
                  x: [0, 10, -10, 0]
                }}
                exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                transition={{ 
                  duration: 0.4, 
                  exit: { duration: 0.3 },
                  y: { repeat: Infinity, duration: 3 + Math.random() * 2, ease: "easeInOut" },
                  x: { repeat: Infinity, duration: 4 + Math.random() * 2, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.05 }}
                style={{
                  backgroundColor: stressor.color,
                  width: stressor.size,
                  height: stressor.size,
                  top: stressor.top,
                  left: stressor.left,
                }}
              >
                {stressor.text}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {stressors.length === 0 && (
            <motion.div 
              className="all-clear"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="clear-icon">☁️</div>
              <h3>You've cleared the cloud</h3>
              <p>Acknowledging your stressors is the first step.</p>
            </motion.div>
          )}
        </div>

        <div className="temperature-reading">
          <div className="reading-content">
            <Thermometer className="thermometer-icon" size={28} />
            <div className="reading-text">
              <p>{getTemperatureMessage()}</p>
              {poppedCount > 0 && <p className="recommendation-text">{getRecommendation()}</p>}
            </div>
          </div>
          
          <div className="meter-container">
            <div className="meter-bar">
              <motion.div 
                className="meter-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  backgroundColor: poppedCount > 5 ? 'var(--color-peach-dark)' : poppedCount > 2 ? 'var(--color-sage-dark)' : 'var(--color-sage)'
                }}
              />
            </div>
            <div className="meter-labels">
              <span>Low</span>
              <span>Moderate</span>
              <span>High</span>
            </div>
          </div>
          
          {poppedCount > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <a href="#booking" className="btn-primary small-btn">
                Book Recommended Consultation <ArrowRight size={16} />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StressCloud;
