import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import SEOHead from '../components/SEOHead.jsx'
import '../css/About.css'

// Import images (using placeholder URLs for now)
const aboutHeroImage = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0'
const teamImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0'
const facilityImage = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0'
const missionImage = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0'

const About = () => {
  const heroRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About SwachhOn - Professional Cleaning Solutions Company",
    "description": "Learn about SwachhOn's mission to provide professional cleaning solutions, our expertise in industrial and commercial cleaning products, and our commitment to quality.",
    "url": "https://swachhon.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "SwachhOn",
      "description": "SwachhOn is a leading provider of professional cleaning solutions, specializing in bulk cleaning products for commercial and industrial applications.",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="about-page">
      <SEOHead 
        title="About SwachhOn - Professional Cleaning Solutions Company | Our Story"
        description="Learn about SwachhOn's mission to provide professional cleaning solutions, our expertise in industrial and commercial cleaning products, and our commitment to quality and innovation in India."
        keywords="About SwachhOn, cleaning company, professional cleaning solutions, industrial cleaning expertise, commercial cleaning, cleaning products manufacturer, cleaning company India"
        url="https://swachhon.com/about"
        structuredData={aboutStructuredData}
      />
      {/* Hero Section */}
      <section className="about-hero-section" ref={heroRef}>
        <motion.div 
          className="about-hero-background"
          style={{ scale, opacity }}
        >
          <img src={aboutHeroImage} alt="About SwachhOn" />
          <div className="about-hero-overlay"></div>
        </motion.div>
        
        <div className="container">
          <div className="about-hero-content">
            <motion.div
              className="about-hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.h1
                className="about-hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                About SwachhOn
              </motion.h1>
              
              <motion.p
                className="about-hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Leading the cleaning industry with innovative solutions, 
                premium quality products, and unwavering commitment to excellence.
              </motion.p>
              
              <motion.div
                className="about-hero-stats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="hero-stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Satisfied Clients</div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Products</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <OurStorySection />

      {/* Mission & Vision Section */}
      <MissionVisionSection />

      {/* Team Section */}
      <TeamSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Certifications Section */}
      <CertificationsSection />
    </div>
  )
}

// Our Story Component
const OurStorySection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="our-story-section" ref={sectionRef}>
      <div className="container">
        <div className="our-story-layout">
          <motion.div
            className="our-story-content"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="story-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Journey
            </motion.div>

            <motion.h2
              className="story-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Building Excellence Since 2008
            </motion.h2>

            <motion.p
              className="story-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              SwachhOn began with a simple vision: to revolutionize the cleaning industry 
              through innovative solutions and uncompromising quality. What started as a 
              small venture has grown into a leading provider of professional cleaning 
              products and services.
            </motion.p>

            <motion.p
              className="story-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Over the years, we've built strong partnerships with businesses across 
              various industries, earning their trust through consistent delivery of 
              high-quality products and exceptional service. Our commitment to innovation 
              and sustainability has positioned us as an industry leader.
            </motion.p>

            <motion.div
              className="story-highlights"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="highlight-item">
                <div className="highlight-year">2008</div>
                <div className="highlight-text">Company Founded</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-year">2015</div>
                <div className="highlight-text">ISO Certification</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-year">2020</div>
                <div className="highlight-text">50K+ Customers</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="our-story-image"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="story-image-wrapper">
              <img src={facilityImage} alt="SwachhOn Facility" />
              <div className="story-image-badge">
                <span className="badge-text">15+</span>
                <span className="badge-subtext">Years Strong</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Mission & Vision Component
const MissionVisionSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="mission-vision-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Mission & Vision</h2>
          <p className="section-description">
            Driving the future of professional cleaning with innovation and excellence
          </p>
        </motion.div>

        <div className="mission-vision-layout">
          <motion.div
            className="mission-vision-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mission-image-wrapper">
              <img src={missionImage} alt="Our Mission" />
              <div className="mission-overlay">
                <div className="mission-overlay-content">
                  <span className="overlay-text">Excellence in Every Drop</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mission-vision-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mission-item">
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7V12C2 18.5 7 22 12 22C17 22 22 18.5 22 12V7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="mission-content">
                <h3>Our Mission</h3>
                <p>
                  To provide innovative, eco-friendly cleaning solutions that exceed 
                  customer expectations while contributing to a cleaner, healthier world. 
                  We strive to be the trusted partner for businesses seeking reliable, 
                  high-quality cleaning products and services.
                </p>
              </div>
            </div>

            <div className="mission-item">
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="mission-content">
                <h3>Our Vision</h3>
                <p>
                  To be the global leader in sustainable cleaning solutions, recognized 
                  for our commitment to innovation, quality, and environmental stewardship. 
                  We envision a future where every cleaning need is met with products 
                  that are both effective and environmentally responsible.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Team Section Component
const TeamSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="team-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-description">
            Passionate professionals dedicated to delivering excellence
          </p>
        </motion.div>

        <div className="team-layout">
          <motion.div
            className="team-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={teamImage} alt="SwachhOn Team" />
            <div className="team-overlay">
              <div className="team-stats">
                <div className="team-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="team-stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Years Combined Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="team-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3>Expert Team, Exceptional Results</h3>
            <p>
              Our team consists of experienced professionals, from chemists and 
              product developers to customer service specialists and logistics experts. 
              Each member brings unique expertise and passion for delivering the 
              highest quality cleaning solutions.
            </p>
            
            <div className="team-features">
              <div className="team-feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M16 21V19C16 17.9 15.1 17 14 17H10C8.9 17 8 17.9 8 19V21" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="11" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1L15.09 8.26L22 9L17 14.74L18.18 22L12 18.77L5.82 22L7 14.74L2 9L8.91 8.26L12 1Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Industry Experts</h4>
                  <p>Decades of combined experience in cleaning technology</p>
                </div>
              </div>

              <div className="team-feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7V12C2 18.5 7 22 12 22C17 22 22 18.5 22 12V7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Quality Focused</h4>
                  <p>Committed to delivering excellence in every product</p>
                </div>
              </div>

              <div className="team-feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M17 21V13H7V21" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Innovation Driven</h4>
                  <p>Continuously developing new solutions for modern challenges</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Values Section Component
const ValuesSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7V12C2 18.5 7 22 12 22C17 22 22 18.5 22 12V7L12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Quality Excellence",
      description: "We never compromise on quality, ensuring every product meets the highest standards of performance and reliability."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Innovation",
      description: "Continuously developing cutting-edge solutions to meet evolving cleaning challenges and customer needs."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M21 16V8C21 5.79 19.21 4 17 4H7C4.79 4 3 5.79 3 8V16C3 18.21 4.79 20 7 20H17C19.21 20 21 18.21 21 16Z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Sustainability",
      description: "Committed to environmental responsibility through eco-friendly formulations and sustainable business practices."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M17 21V13H7V21" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Customer Focus",
      description: "Building lasting partnerships by understanding and exceeding customer expectations in every interaction."
    }
  ]

  return (
    <section className="values-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-description">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="value-icon">
                {value.icon}
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Certifications Section Component
const CertificationsSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management System" },
    { name: "ISO 14001:2015", description: "Environmental Management" },
    { name: "OHSAS 18001", description: "Occupational Health & Safety" },
    { name: "GMP Certified", description: "Good Manufacturing Practice" }
  ]

  return (
    <section className="certifications-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Certifications & Standards</h2>
          <p className="section-description">
            Recognized for excellence in quality, safety, and environmental management
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="cert-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.77L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
                </svg>
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-description">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
