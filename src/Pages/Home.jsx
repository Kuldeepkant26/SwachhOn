import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  AnimatePresence, 
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
import '../Css/Home.css';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);
  
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Simplified intersection observers - only trigger once for performance
  const heroInView = useInView(heroRef, { threshold: 0.2, once: true });
  const featuresInView = useInView(featuresRef, { threshold: 0.1, once: true });
  const statsInView = useInView(statsRef, { threshold: 0.2, once: true });
  const testimonialsInView = useInView(testimonialsRef, { threshold: 0.1, once: true });

  // Data
  const features = [
    {
      icon: Shield,
      title: "Advanced Protection",
      description: "Industrial-grade cleaning solutions with maximum effectiveness against all types of contaminants and bacteria.",
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
      stats: "99.9% effective"
    },
    {
      icon: Droplets,
      title: "Eco-Friendly Formula",
      description: "Biodegradable ingredients that are safe for the environment while maintaining superior cleaning power.",
      gradient: "linear-gradient(135deg, #34d399 0%, #059669 100%)",
      stats: "100% biodegradable"
    },
    {
      icon: Zap,
      title: "Quick Action",
      description: "Fast-acting formulation that delivers results in minutes, saving time and increasing productivity.",
      gradient: "linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)",
      stats: "30 sec action"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Meets international quality standards and certifications for commercial and industrial use worldwide.",
      gradient: "linear-gradient(135deg, #a7f3d0 0%, #34d399 100%)",
      stats: "ISO certified"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Clients", icon: Users, color: "#3b82f6" }, // Blue
    { number: "99.9%", label: "Effectiveness Rate", icon: Award, color: "#f59e0b" }, // Orange  
    { number: "24/7", label: "Customer Support", icon: Phone, color: "#8b5cf6" }, // Purple
    { number: "50+", label: "Countries Served", icon: Globe, color: "#10b981" } // Green
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Facility Manager",
      company: "TechCorp Industries",
      content: "SwachhOn has revolutionized our cleaning operations. The efficiency and eco-friendly nature make it our top choice for all facilities.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b950?w=150&h=150&fit=crop&crop=face",
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)"
    },
    {
      name: "Michael Chen",
      position: "Operations Director",
      company: "CleanTech Solutions",
      content: "Outstanding results with every use. Our clients are consistently impressed with the cleanliness standards we achieve using SwachhOn products.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      gradient: "linear-gradient(135deg, #34d399 0%, #059669 100%)"
    },
    {
      name: "Emily Rodriguez",
      position: "Sustainability Officer",
      company: "GreenSpace Corp",
      content: "Finally found a cleaning solution that doesn't compromise on environmental responsibility. Highly recommended for sustainable operations!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      gradient: "linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)"
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

  // Simplified animation variants for better performance
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const simpleScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="home-container">
      {/* Simplified Background - Static Orbs */}
      <div className="home-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Hero Section - Removed heavy scroll transforms */}
      <motion.section 
        ref={heroRef}
        className="hero-section"
        variants={staggerContainer}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <div className="hero-content">
          <motion.div
            variants={fadeInUp}
            className="hero-text"
          >
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Premium Cleaning Solutions</span>
            </div>

            <motion.h1 
              className="hero-title"
              variants={fadeInUp}
            >
              Transform Your Space with
              <span className="gradient-text">
                SwachhOn
              </span>
            </motion.h1>

            <motion.p 
              className="hero-description"
              variants={fadeInUp}
            >
              Professional-grade bulk cleaning products that deliver unmatched results 
              while maintaining environmental responsibility. Trusted by industries worldwide.
            </motion.p>

            <motion.div 
              className="hero-actions"
              variants={fadeInUp}
            >
              <button
                className="cta-primary"
                onClick={() => setPlayVideo(true)}
              >
                <Play size={20} />
                <span>Watch Demo</span>
              </button>

              <button className="cta-secondary">
                <span>Get Quote</span>
                <ArrowRight size={20} />
                <div className="button-shimmer"></div>
              </button>
            </motion.div>

            <motion.div 
              className="hero-stats"
              variants={fadeInUp}
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
            variants={fadeInUp}
          >
            <div className="hero-image-container">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80"
                alt="Professional Cleaning"
                className="hero-image"
              />
              <div className="image-overlay">
                <button
                  className="play-button"
                  onClick={() => setPlayVideo(true)}
                >
                  <Play size={24} />
                </button>
              </div>
            </div>
            
            <div className="floating-card">
              <div className="card-icon">
                <Shield size={24} />
              </div>
              <div className="card-content">
                <div className="card-title">99.9% Effective</div>
                <div className="card-subtitle">Against all contaminants</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <ArrowDown size={24} />
        </div>
      </motion.section>

      {/* Features Section - Simplified animations */}
      <motion.section 
        ref={featuresRef}
        className="features-section"
        variants={staggerContainer}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
      >
        <div className="section-container">
          <motion.div 
            className="section-header"
            variants={fadeInUp}
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
                variants={fadeInUp}
              >
                <div className="feature-card-inner">
                  <div 
                    className="feature-icon"
                    style={{ background: feature.gradient }}
                  >
                    <feature.icon size={28} />
                  </div>
                  
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

      {/* Stats Section - Simplified animations */}
      <motion.section 
        ref={statsRef}
        className="stats-section"
        variants={staggerContainer}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
      >
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={simpleScale}
              >
                <div 
                  className="stat-icon"
                  style={{ color: stat.color }}
                >
                  <stat.icon size={32} />
                </div>
                <div 
                  className="stat-number"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-glow" style={{ background: stat.color }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Preview - Simplified animations */}
      <section className="services-preview">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
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
      </section>

      {/* Testimonials Section - Simplified animations */}
      <motion.section 
        ref={testimonialsRef}
        className="testimonials-section"
        variants={staggerContainer}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
      >
        <div className="section-container">
          <motion.div 
            className="section-header"
            variants={fadeInUp}
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
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
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
        transition={{ duration: 0.8 }}
      >
        <div className="cta-container">
          <div className="cta-content">
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
          </div>
        </div>
      </motion.section>

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
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
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
    </div>
  );
};

export default Home;
