import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Laptop, Users, Sparkles, Baby } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 'software',
    title: 'Software Employees',
    icon: <Laptop size={32} />,
    color: 'var(--color-sage)',
    description: 'Specialized support for high-performance professionals dealing with burnout, workplace stress, and maintaining work-life harmony.'
  },
  {
    id: 'couples',
    title: 'Couple Counseling',
    icon: <Users size={32} />,
    color: 'var(--color-peach)',
    description: 'Empathetic guidance for partners seeking relationship counseling, communication improvement, and conflict resolution.'
  },
  {
    id: 'teens',
    title: 'Teenagers & Adolescents',
    icon: <Sparkles size={32} />,
    color: 'var(--color-lavender)',
    description: 'A safe space for youth navigating academic pressure, identity formation, and complex social challenges.'
  },
  {
    id: 'parents',
    title: 'Parental Guidance',
    icon: <Baby size={32} />,
    color: 'var(--color-cream)',
    description: 'Compassionate support and practical strategies for adults seeking parenting guidance and child-rearing support.'
  }
];

const TiltCard = ({ service, index }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="service-card-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div 
        className="service-card glass-panel"
        style={{ transform: "translateZ(30px)" }}
      >
        <div 
          className="icon-wrapper"
          style={{ backgroundColor: service.color }}
        >
          {service.icon}
        </div>
        <h3 className="service-title">{service.title}</h3>
        <div className="service-content">
          <p>{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="services-section" id="services">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ perspective: 1000 }}
      >
        <h2 className="section-title">Specialized Care</h2>
        <p className="section-subtitle">
          Tailored therapeutic approaches designed specifically for your unique life stage and challenges.
        </p>
      </motion.div>

      <div className="services-grid" style={{ perspective: 1000 }}>
        {services.map((service, index) => (
          <TiltCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
