import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar_new';
import Footer from './Components/Footer';
import Home2 from './Pages/Home2';
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
          <Route path="/" element={<Home2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </AnimatePresence>
      <Footer />
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
