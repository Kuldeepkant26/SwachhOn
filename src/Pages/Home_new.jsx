import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useMotionValue, 
  useSpring, 
  useInView
} from 'framer-motion';
import { 
  ArrowRight, 
  Play,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Sparkles,
  Droplets,
  Shield,
  Zap,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowDown,
  Factory,
  Target,
  Heart,
  Leaf,
  Recycle,
  Beaker,
  ChevronRight
} from 'lucide-react';
import '../css/Home.css';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [playVideo, setPlayVideo] = useState(false);
  
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Advanced scroll transforms
  const heroY = useTransform(scrollY, [0, 800], [0, -300]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -500]);
  const particlesY = useTransform(scrollY, [0, 1200], [0, -600]);
  
  // Mouse tracking for magnetic effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for animations
  const heroInView = useInView(heroRef, { threshold: 0.3 });
  const featuresInView = useInView(featuresRef, { threshold: 0.2 });
  const statsInView = useInView(statsRef, { threshold: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { threshold: 0.2 });

  // Data
  const features = [
    {
      icon: Shield,
      title: "Advanced Protection",
      description: "Industrial-grade cleaning solutions with maximum effectiveness against all types of contaminants and bacteria.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      stats: "99.9% effective"
    },
    {
      icon: Droplets,
      title: "Eco-Friendly Formula",
      description: "Biodegradable ingredients that are safe for the environment while maintaining superior cleaning power.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      stats: "100% biodegradable"
    },
    {
      icon: Zap,
      title: "Quick Action",
      description: "Fast-acting formulation that delivers results in minutes, saving time and increasing productivity.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      stats: "30 sec action"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Meets international quality standards and certifications for commercial and industrial use worldwide.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      stats: "ISO certified"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Clients", icon: Users, color: "#667eea" },
    { number: "99.9%", label: "Effectiveness Rate", icon: Award, color: "#f5576c" },
    { number: "24/7", label: "Customer Support", icon: Phone, color: "#43e97b" },
    { number: "50+", label: "Countries Served", icon: Globe, color: "#4facfe" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Facility Manager",
      company: "TechCorp Industries",
      content: "SwachhOn has revolutionized our cleaning operations. The efficiency and eco-friendly nature make it our top choice for all facilities.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b950?w=150&h=150&fit=crop&crop=face",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      name: "Michael Chen",
      position: "Operations Director",
      company: "CleanTech Solutions",
      content: "Outstanding results with every use. Our clients are consistently impressed with the cleanliness standards we achieve using SwachhOn products.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      name: "Emily Rodriguez",
      position: "Sustainability Officer",
      company: "GreenSpace Corp",
      content: "Finally found a cleaning solution that doesn't compromise on environmental responsibility. Highly recommended for sustainable operations!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  const services = [
    {
      icon: Factory,
      title: "Industrial Cleaning",
      description: "Heavy-duty solutions for manufacturing and industrial facilities",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      icon: Target,
      title: "Commercial Solutions",
      description: "Professional cleaning for offices, retail, and commercial spaces",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      icon: Heart,
      title: "Healthcare Grade",
      description: "Medical-grade disinfection for healthcare and sensitive environments",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const heroVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1.2
      }
    }
  };

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -30
    },
    visible: (i) => ({
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        delay: i * 0.2
      }
    })
  };

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotateY: -90
    },
    visible: (i) => ({
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: i * 0.15
      }
    })
  };

  const magneticVariants = {
    rest: { scale: 1, rotateZ: 0 },
    hover: { 
      scale: 1.05, 
      rotateZ: 2,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const cardHoverVariants = {
    rest: { 
      scale: 1, 
      rotateY: 0,
      rotateX: 0,
      z: 0
    },
    hover: { 
      scale: 1.05, 
      rotateY: 5,
      rotateX: 5,
      z: 50,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  return (
    <div ref={containerRef} className="home-container">
      {/* Animated Background */}
      <motion.div 
        className="home-background"
        style={{ y: backgroundY }}
      >
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </motion.div>

      {/* Floating Particles */}
      <motion.div 
        className="floating-particles"
        style={{ y: particlesY }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            <Sparkles size={12} />
          </motion.div>
        ))}
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="hero-section"
        style={{ 
          y: heroY, 
          opacity: heroOpacity,
          scale: heroScale 
        }}
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <div className="hero-content">
          <motion.div
            variants={heroVariants}
            className="hero-text"
          >
            <motion.div
              className="hero-badge"
              initial={{ scale: 0, rotateZ: -180 }}
              animate={{ scale: 1, rotateZ: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Sparkles size={16} />
              <span>Premium Cleaning Solutions</span>
            </motion.div>

            <motion.h1 
              className="hero-title"
              variants={heroVariants}
            >
              Transform Your Space with
              <motion.span 
                className="gradient-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SwachhOn
              </motion.span>
            </motion.h1>

            <motion.p 
              className="hero-description"
              variants={heroVariants}
            >
              Professional-grade bulk cleaning products that deliver unmatched results 
              while maintaining environmental responsibility. Trusted by industries worldwide.
            </motion.p>

            <motion.div 
              className="hero-actions"
              variants={heroVariants}
            >
              <motion.button
                className="cta-primary"
                variants={magneticVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setPlayVideo(true)}
              >
                <Play size={20} />
                <span>Watch Demo</span>
                <div className="button-glow"></div>
              </motion.button>

              <motion.button
                className="cta-secondary"
                variants={magneticVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span>Get Quote</span>
                <ArrowRight size={20} />
                <div className="button-shimmer"></div>
              </motion.button>
            </motion.div>

            <motion.div 
              className="hero-stats"
              variants={heroVariants}
            >
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Satisfied Clients</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Effectiveness Rate</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="hero-image-container">
              <motion.img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80"
                alt="Professional Cleaning"
                className="hero-image"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="image-overlay">
                <motion.button
                  className="play-button"
                  onClick={() => setPlayVideo(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play size={24} />
                </motion.button>
              </div>
            </div>
            
            <motion.div
              className="floating-card"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="card-icon">
                <Shield size={24} />
              </div>
              <div className="card-content">
                <div className="card-title">99.9% Effective</div>
                <div className="card-subtitle">Against all contaminants</div>
              </div>
            </motion.div>
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

      {/* Features Section */}
      <motion.section 
        ref={featuresRef}
        className="features-section"
        variants={containerVariants}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
      >
        <div className="section-container">
          <motion.div 
            className="section-header"
            variants={heroVariants}
          >
            <h2 className="section-title">Why Choose SwachhOn?</h2>
            <p className="section-description">
              Experience the perfect blend of power, safety, and sustainability
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={featureVariants}
                custom={index}
                whileHover={cardHoverVariants.hover}
                initial={cardHoverVariants.rest}
              >
                <div className="feature-card-inner">
                  <motion.div 
                    className="feature-icon"
                    style={{ background: feature.gradient }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon size={28} />
                  </motion.div>
                  
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                    <div className="feature-stats">{feature.stats}</div>
                  </div>
                  
                  <div className="feature-hover-overlay">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        className="stats-section"
        variants={containerVariants}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
      >
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={statsVariants}
                custom={index}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div 
                  className="stat-icon"
                  style={{ color: stat.color }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <stat.icon size={32} />
                </motion.div>
                <motion.div 
                  className="stat-number"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-glow" style={{ background: stat.color }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <motion.section className="services-preview">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Our Solutions</h2>
            <p className="section-description">
              Comprehensive cleaning solutions for every industry
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <service.icon size={32} />
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <button className="service-btn">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        ref={testimonialsRef}
        className="testimonials-section"
        variants={containerVariants}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
      >
        <div className="section-container">
          <motion.div 
            className="section-header"
            variants={heroVariants}
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Trusted by professionals across industries worldwide
            </p>
          </motion.div>

          <div className="testimonials-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -90 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <div 
                  className="testimonial-bg"
                  style={{ background: testimonials[currentTestimonial].gradient }}
                ></div>
                
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <Star size={24} />
                  </div>
                  
                  <p className="testimonial-text">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  
                  <div className="testimonial-rating">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  
                  <div className="testimonial-author">
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name}
                      className="author-avatar"
                    />
                    <div className="author-info">
                      <div className="author-name">{testimonials[currentTestimonial].name}</div>
                      <div className="author-position">
                        {testimonials[currentTestimonial].position} at {testimonials[currentTestimonial].company}
                      </div>
                    </div>
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
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="cta-container">
          <motion.div
            className="cta-content"
            animate={{
              background: [
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <h2 className="cta-title">Ready to Transform Your Cleaning?</h2>
            <p className="cta-description">
              Join thousands of satisfied customers and experience the SwachhOn difference
            </p>
            
            <div className="cta-actions">
              <motion.button
                className="cta-btn primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.button>
              
              <motion.button
                className="cta-btn secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Get Quote</span>
              </motion.button>
            </div>
            
            <div className="cta-contact">
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@swachhon.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Available Worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cursor Follower */}
      <motion.div
        className="cursor-follower"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />

      {/* Video Modal */}
      <AnimatePresence>
        {playVideo && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPlayVideo(false)}
          >
            <motion.div
              className="video-container"
              initial={{ scale: 0.5, rotateX: -90 }}
              animate={{ scale: 1, rotateX: 0 }}
              exit={{ scale: 0.5, rotateX: 90 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="video-close"
                onClick={() => setPlayVideo(false)}
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

      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default Home;
