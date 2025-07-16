import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Sparkles, Droplets, Globe } from 'lucide-react';
import logo3 from '../assets/logo3.png';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Ensure minimum display time of 3 seconds
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
      // Hide splash screen after minimum time
      setTimeout(() => {
        setShowSplash(false);
        onComplete();
      }, 1200);
    }, 3000);

    return () => clearTimeout(minTimer);
  }, [onComplete]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.8 } // Increased from 0.5s
    },
    exit: { 
      opacity: 0,
      scale: 1.1,
      transition: { duration: 1.2, ease: "easeInOut" } // Increased from 0.8s to 1.2s
    }
  };

  const logoVariants = {
    initial: { 
      scale: 0.8, 
      opacity: 0,
      rotateY: -180
    },
    animate: { 
      scale: 1, 
      opacity: 1,
      rotateY: 0,
      transition: { 
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const textVariants = {
    initial: { 
      y: 30, 
      opacity: 0 
    },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: { 
      width: `100%`,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const floatingIcons = [
    { Icon: Leaf, delay: 0.5, x: -50, y: -30 },
    { Icon: Sparkles, delay: 0.7, x: 60, y: -40 },
    { Icon: Droplets, delay: 0.9, x: -40, y: 50 },
    { Icon: Globe, delay: 1.1, x: 70, y: 40 }
  ];

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="splash-screen"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Animated Background */}
          <div className="splash-background">
            <div className="bg-gradient-1"></div>
            <div className="bg-gradient-2"></div>
            <div className="bg-gradient-3"></div>
          </div>

          {/* Floating Particles */}
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${50 + Math.random() * 50}%`
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="splash-content">
            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                className="floating-icon"
                variants={iconVariants}
                initial="initial"
                animate={{
                  scale: 1,
                  rotate: 0,
                  y: [y, y - 10, y],
                  rotateZ: [0, 10, -10, 0]
                }}
                style={{ x, y }}
                transition={{
                  scale: { duration: 0.6, ease: "easeOut", delay },
                  rotate: { duration: 0.6, ease: "easeOut", delay },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay + 2 },
                  rotateZ: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay + 2 }
                }}
              >
                <Icon size={24} />
              </motion.div>
            ))}

            {/* Logo Section */}
            <motion.div
              className="logo-container"
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <div className="logo-wrapper">
                <motion.div
                  className="logo-glow"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img src={logo3} alt="SwachhOn Logo" className="splash-logo" />
              </div>
            </motion.div>

            {/* Brand Text */}
            <motion.div
              className="brand-text"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <h1>SwachhOn</h1>
              <p>Cleaning Excellence, Environmental Care</p>
            </motion.div>
          </div>

          {/* Bottom Wave */}
          <motion.div
            className="wave-container"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <svg viewBox="0 0 1200 120" className="wave">
              <path
                d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
                fill="url(#waveGradient)"
              />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
                  <stop offset="50%" stopColor="rgba(52, 211, 153, 0.5)" />
                  <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
