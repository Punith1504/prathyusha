import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Send } from 'lucide-react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'free_consult',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setIsSubmitted(true), 500);
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-header">
        <h2 className="section-title">Begin Your Journey</h2>
        <p className="section-subtitle">
          Schedule a consultation or reach out with any questions. I'm here to help.
        </p>
      </div>

      <div className="booking-grid">
        <motion.div 
          className="calendar-container glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="calendar-header">
            <h3><Calendar size={20} /> Select a Time</h3>
            <span className="timezone">IST (GMT+5:30)</span>
          </div>
          
          <div className="calendar-mockup">
            {/* Placeholder for Calendly or Acuity embed */}
            <div className="calendar-body">
              <div className="mock-week">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
              </div>
              <div className="mock-days">
                {[12,13,14,15,16, 19,20,21,22,23].map((day, i) => (
                  <div key={i} className={`mock-day ${i === 3 ? 'active' : ''}`}>
                    {day}
                  </div>
                ))}
              </div>
              <div className="mock-times">
                <h4>Available Times on Thu, 15th</h4>
                <div className="time-slots">
                  <button className="time-btn">10:00 AM</button>
                  <button className="time-btn">01:30 PM</button>
                  <button className="time-btn">04:00 PM</button>
                </div>
              </div>
            </div>
            <div className="calendly-note">
              <Clock size={14} /> 45 Minute Consultation
            </div>
          </div>
          
          <div className="contact-info-panel">
            <div className="contact-detail">
              <strong>Phone:</strong> <span>+91 8971531764</span>
            </div>
            <div className="contact-detail">
              <strong>Email:</strong> <a href="mailto:themindlens.connect@gmail.com">themindlens.connect@gmail.com</a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-container glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Send a Message</h3>
          
          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">✨</div>
              <h4>Message Sent Successfully!</h4>
              <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
              <p className="fallback-text">If you don't hear back, you can also reach me directly at <a href="mailto:themindlens.connect@gmail.com">themindlens.connect@gmail.com</a></p>
              <button className="btn-primary" onClick={() => setIsSubmitted(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="How would you like me to call you?" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Where can I reach you?" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">I'm seeking help with</label>
                <select 
                  id="service" 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="free_consult">Free 15-Minute Introductory Consultation</option>
                  <option value="workplace">Workplace Stress & Burnout</option>
                  <option value="couples">Couple Counseling</option>
                  <option value="teens">Teenage & Adolescent Support</option>
                  <option value="parents">Parental Guidance</option>
                  <option value="other">Something Else</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="3" 
                  placeholder="Briefly describe what brings you here..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary submit-btn">
                Send Request <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
        
        <motion.div 
          className="payment-container glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="payment-header">
            <h3>Quick Payment</h3>
            <p>Scan the QR code to make a secure payment via UPI.</p>
          </div>
          <div className="qr-wrapper">
            <img src="/upi_qr.png" alt="UPI Payment QR Code" className="payment-qr" />
          </div>
          <p className="payment-note">For direct bank transfers, please reach out via email.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
