import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Zap,
  Globe,
  Star,
  Shield,
  Droplets,
  Waves,
  Sun,
  MessageCircle
} from 'lucide-react';
import './Navbar.css';
import logo3 from '../assets/logo3.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();
  const navRef = useRef(null);
  
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.85, 0.98]);
  const navBlur = useTransform(scrollY, [0, 100], [10, 25]);
  const logoRotation = useTransform(scrollY, [0, 1000], [0, 360]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Track current time for dynamic effects
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Enhanced scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for advanced effects
  const handleMouseMove = useCallback((e) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    }
  }, [mouseX, mouseY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: Sun,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: Shield,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    { 
      path: '/services', 
      label: 'Services', 
      icon: Droplets,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
  ];

  // Enhanced animation variants
  const linkVariants = {
    initial: { y: 0, scale: 1 },
    hover: { 
      y: -3,
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10,
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: 360,
      scale: 1.2,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      clipPath: "circle(0% at 95% 5%)",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    visible: {
      clipPath: "circle(140% at 95% 5%)",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: 50, rotateY: 90 },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    }
  };

  const magneticVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <motion.nav 
        ref={navRef}
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        style={{ 
          backdropFilter: `blur(${navBlur}px)`,
          background: `rgba(255, 255, 255, ${navOpacity})`
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="nav-container">
          {/* Logo */}
          <Link 
            to="/" 
            className="nav-logo"
            onClick={() => {
              // Mark navigation immediately when logo is clicked
              window.sessionStorage.setItem('has_navigated', 'true');
            }}
          >
            <img 
              src={logo3}
              alt="SwachhOn Logo" 
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-menu">
            {navItems.map((item) => (
              <div 
                key={item.path}
                className="nav-item"
              >
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => {
                    // Mark navigation immediately when any link is clicked
                    window.sessionStorage.setItem('has_navigated', 'true');
                  }}
                >
                  <motion.div
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                    className="nav-link-content"
                  >
                    <motion.div
                      variants={iconVariants}
                      className="nav-link-icon"
                    >
                      <item.icon size={18} />
                    </motion.div>
                    <span>{item.label}</span>
                    {location.pathname === item.path && (
                      <motion.div
                        className="nav-indicator"
                        layoutId="navbar-indicator"
                        style={{ background: item.gradient }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="nav-actions">
            <motion.a
              href="tel:+919058389713"
              className="nav-contact-btn"
              variants={magneticVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Phone size={18} />
              <span>Call Now</span>
              <div className="btn-glow"></div>
            </motion.a>

            <motion.a
              href="https://wa.me/919540912953"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-quote-btn"
              variants={magneticVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
              <div className="btn-shimmer"></div>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="nav-particles">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 2) * 40}%`
              }}
            />
          ))}
        </div>

        {/* Magnetic cursor effect */}
        <motion.div
          className="cursor-magnetic"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            opacity: isHovering ? 0.6 : 0
          }}
          animate={{
            scale: isHovering ? 1 : 0
          }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="mobile-header">
                <div className="mobile-logo">
                  <img 
                    src={logo3}
                    alt="SwachhOn Logo" 
                    className="mobile-logo-image"
                  />
                  <span>SwachhOn</span>
                </div>
                <motion.button
                  className="mobile-close"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="mobile-content">
                <div className="mobile-nav">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      variants={mobileItemVariants}
                      className="mobile-nav-item"
                    >
                      <Link
                        to={item.path}
                        className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                        onClick={() => {
                          setIsOpen(false);
                          // Mark navigation immediately when mobile link is clicked
                          window.sessionStorage.setItem('has_navigated', 'true');
                        }}
                      >
                        <motion.div
                          className="mobile-link-content"
                          whileHover={{ x: 10 }}
                        >
                          <item.icon size={20} className="mobile-link-icon" />
                          <span>{item.label}</span>
                          {location.pathname === item.path && (
                            <motion.div
                              className="mobile-indicator"
                              layoutId="mobile-indicator"
                              style={{ background: item.gradient }}
                            />
                          )}
                        </motion.div>
                      </Link>
                      
                      {item.hasDropdown && (
                        <motion.div
                          className="mobile-dropdown"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className="mobile-dropdown-link"
                              onClick={() => setIsOpen(false)}
                            >
                              <dropdownItem.icon size={16} />
                              <span>{dropdownItem.label}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mobile-actions"
                  variants={mobileItemVariants}
                >
                  <motion.a
                    href="tel:+919058389713"
                    className="mobile-action-btn primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone size={20} />
                    <span>Call Now</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/919540912953"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-action-btn secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </motion.a>
                </motion.div>

                <motion.div
                  className="mobile-footer"
                  variants={mobileItemVariants}
                >
                  <div className="mobile-contact">
                    <div className="contact-item">
                      <MapPin size={16} />
                      <span>123 Business District, City</span>
                    </div>
                    <div className="contact-item">
                      <Mail size={16} />
                      <span>info@swachhon.com</span>
                    </div>
                  </div>
                  
                  <div className="mobile-time">
                    <motion.div
                      className="time-display"
                      animate={{ 
                        boxShadow: [
                          "0 0 10px rgba(102, 126, 234, 0.3)",
                          "0 0 20px rgba(102, 126, 234, 0.6)",
                          "0 0 10px rgba(102, 126, 234, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span>{currentTime.toLocaleTimeString()}</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Particles */}
              <div className="mobile-particles">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="mobile-particle"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  >
                    <Star size={12} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
