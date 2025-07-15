import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Sparkles,
  Leaf,
  Recycle,
  Globe,
  Shield,
  Zap,
  Heart,
  Target,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Quote,
  ArrowDown
} from 'lucide-react';
import SplashScreen from '../Components/SplashScreen';
import './Home.css';
import simage1 from '../assets/simage1.jpg';
import simage2 from '../assets/simage2.webp';
import simage3 from '../assets/simage3.jpg';
import simage4 from '../assets/simage4.jpg';
import simage5 from '../assets/simage5.webp';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const location = useLocation();

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  // Check if this is a page refresh (not navigation)
  useEffect(() => {
    // Check if user has navigated within the app in this session
    const hasNavigated = window.sessionStorage.getItem('has_navigated');
    
    // Check for actual browser refresh/reload
    const navigationEntries = performance.getEntriesByType('navigation');
    const isPageReload = navigationEntries.length > 0 && 
                        navigationEntries[0].type === 'reload';
    
    // Show splash ONLY if:
    // 1. It's a browser reload/refresh, OR
    // 2. This is the very first visit (no navigation history exists)
    if (isPageReload || !hasNavigated) {
      setShowSplash(true);
    }
    
    // Always mark that we've been to this page (but don't interfere with splash logic)
    if (!hasNavigated && !isPageReload) {
      // Only set this flag if it's the first visit and NOT a reload
      setTimeout(() => {
        window.sessionStorage.setItem('has_navigated', 'true');
      }, 4000); // Wait for splash to complete
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Sample data
  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "100%", label: "Eco-Friendly", icon: Leaf },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "95%", label: "Satisfaction Rate", icon: Star }
  ];

  const features = [
    {
      icon: Recycle,
      title: "Waste Management",
      description: "Comprehensive waste collection and recycling services for residential and commercial properties.",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Solutions",
      description: "Sustainable practices that protect the environment while keeping your spaces clean.",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Fast and efficient service delivery with same-day response for urgent cleaning needs.",
      color: "from-purple-400 to-pink-600"
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "Trusted by thousands with consistent, high-quality cleaning services you can depend on.",
      color: "from-orange-400 to-red-600"
    },
    {
      icon: Globe,
      title: "Wide Coverage",
      description: "Serving multiple cities with expanding coverage to bring cleanliness to every corner.",
      color: "from-teal-400 to-green-600"
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "Building cleaner, healthier communities through dedicated service and social responsibility.",
      color: "from-pink-400 to-rose-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Business Owner",
      content: "SwachhOn transformed our office environment. Their attention to detail and eco-friendly approach is remarkable.",
      rating: 5,
      avatar: simage2
    },
    {
      name: "Michael Chen",
      position: "Residential Customer",
      content: "Exceptional service! They're always on time, professional, and leave our home spotless every single time.",
      rating: 5,
      avatar: simage3
    },
    {
      name: "Emma Davis",
      position: "Property Manager",
      content: "Managing multiple properties is easier with SwachhOn. Their consistency and reliability are unmatched.",
      rating: 5,
      avatar: simage4
    }
  ];

  const services = [
    {
      title: "Residential Cleaning",
      description: "Complete home cleaning solutions",
      image: simage1
    },
    {
      title: "Commercial Services",
      description: "Professional office and business cleaning",
      image: simage3
    },
    {
      title: "Deep Cleaning",
      description: "Thorough sanitization and disinfection",
      image: simage5
    }
  ];

  return (
    <>
      {/* Splash Screen - Only shows on page refresh */}
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
      
      <div className="home-container">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="hero-section"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transform Your Space with
              <span className="gradient-text">SwachhOn</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Experience the future of cleaning with our eco-friendly, professional services.
              We bring cleanliness, health, and sustainability to your doorstep.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <button className="cta-primary">
                <span>Get Started Today</span>
                <ArrowRight size={20} />
                <div className="button-glow"></div>
              </button>
              
              <button className="cta-secondary" onClick={() => setIsVideoModalOpen(true)}>
                <Play size={18} />
                <span>Watch Demo</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-image-container">
              <img
                src={simage1}
                alt="Professional Cleaning Service"
                className="hero-image"
              />
            
            </div>


          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="stats-section"
        initial={{ opacity: 0 }}
        animate={isStatsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)"
                  }}
                >
                  <div className="stat-icon">
                    <Icon size={32} />
                  </div>
                  <motion.div
                    className="stat-number"
                    initial={{ scale: 0 }}
                    animate={isStatsInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="features-section"
        initial={{ opacity: 0 }}
        animate={isFeaturesInView ? { opacity: 1 } : {}}
      >
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Why Choose SwachhOn?</h2>
            <p className="section-description">
              Discover the features that make us the leading choice for professional cleaning services
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`feature-icon bg-gradient-to-r ${feature.color}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <button className="feature-link">
                    Learn More <ArrowRight size={16} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <button className="service-button">
                      View Details <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-description">
              Real feedback from satisfied customers across the country
            </p>
          </div>

          <div className="testimonials-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="quote-icon">
                  <Quote size={32} />
                </div>

                <p className="testimonial-text">
                  "{testimonials[currentTestimonial].content}"
                </p>

                <div className="testimonial-rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>

                <div className="testimonial-author">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="author-avatar"
                  />
                  <div>
                    <div className="author-name">{testimonials[currentTestimonial].name}</div>
                    <div className="author-position">{testimonials[currentTestimonial].position}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonials-nav">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={isCtaInView ? { opacity: 1 } : {}}
      >
        <div className="cta-container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title">Ready to Transform Your Space?</h2>
            <p className="cta-description">
              Join thousands of satisfied customers who trust SwachhOn for their cleaning needs.
              Get started today and experience the difference.
            </p>

            <div className="cta-actions">
              <button className="cta-btn primary">
                <span>Book Now</span>
                <ArrowRight size={20} />
              </button>
              <button className="cta-btn secondary">
                <Phone size={20} />
                <span>Call Us</span>
              </button>
            </div>

            <div className="cta-contact">
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>hello@swachhon.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Available in 50+ Cities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              className="video-container"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="video-close"
                onClick={() => setIsVideoModalOpen(false)}
              >
                ×
              </button>
              <div className="video-placeholder">
                <Play size={64} />
                <p>Demo Video Coming Soon</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
