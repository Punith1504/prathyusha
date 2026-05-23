import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import StressCloud from './components/StressCloud';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import ScrollProgress from './components/ScrollProgress';
import Dashboard from './components/Dashboard';
import './App.css';

function MainLayout() {
  return (
    <div className="app-container">
      <CustomCursor />
      <BackgroundEffects />
      <ScrollProgress />
      <Hero />
      <StressCloud />
      <Services />
      <About />
      <Booking />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
