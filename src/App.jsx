import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import './App.css';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Mark that navigation has occurred whenever route changes
    window.sessionStorage.setItem('has_navigated', 'true');
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
