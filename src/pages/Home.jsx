import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import ContactModal from '../components/ContactModal.jsx'
import SEOHead from '../components/SEOHead.jsx'
import FAQ from '../components/FAQ.jsx'
import '../css/Home.css'
import heroSectionImage from '../assets/heroSectionImage.png'

// Cleaning product images
const CleaningImage1 = 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0';
const CleaningImage2 = 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0';
const CleaningImage3 = 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0';

// Industrial and commercial cleaning images
const Home1 = 'https://res.cloudinary.com/dcxik41sw/image/upload/v1753885644/pexels-photo-10557898_dzqcfl.jpg';
const Home2 = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0';

const Home4 = 'https://images.unsplash.com/photo-1523496922380-91d5afba98a3?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0';

const BulkSupplyImage = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0';

// Dashboard Assets (using placeholder images for cleaning industry)
const DashboardSS2 = 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0';
const DashboardSS4 = 'https://images.unsplash.com/photo-1607176596596-3a2bd2d6b2b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0';

const Home = ({ showAnimation = false }) => {
  const heroRef = useRef(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleGetQuoteClick = () => {
    setIsContactModalOpen(true)
  }

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SwachhOn",
    "description": "Professional cleaning solutions and bulk cleaning products for commercial and industrial use in India.",
    "url": "https://swachhon.com",
    "image": "https://swachhon.com/public/SwachhOn_icon.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "serviceArea": {
      "@type": "Place",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Products and Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Industrial Cleaning Products"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "Commercial Cleaning Equipment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "Bulk Cleaning Supplies"
          }
        }
      ]
    }
  };

  return (
    <div className="home">
      <SEOHead 
        title="SwachhOn - Professional Bulk Cleaning Solutions | Commercial & Industrial Cleaning Products"
        description="SwachhOn offers premium quality cleaning products, industrial cleaning solutions, and commercial cleaning equipment. Get bulk cleaning supplies for businesses across India. Contact us for customized cleaning solutions."
        keywords="SwachhOn, cleaning products, industrial cleaning, commercial cleaning, bulk cleaning supplies, cleaning equipment, professional cleaning solutions, cleaning company India, cleaning services, hygiene products, sanitizers, disinfectants"
        url="https://swachhon.com/"
        structuredData={homeStructuredData}
      />
      {/* Hero Section - Creative Agency Style */}
      <section className="hero-section" ref={heroRef}>
        <div className="container">
          <div className="hero-layout">
            {/* Left Content */}
            <div className="hero-text-content">
              <motion.h1
                className="hero-main-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Professional Cleaning
                <br />
                Solutions for Your
                <br />
                Business Needs
              </motion.h1>

              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                SwachhOn delivers premium quality cleaning products
                <br />
                and appliances. From industrial solutions to commercial
                <br />
                cleaning equipment - we've got you covered.
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="hero-btn primary" onClick={handleGetQuoteClick}>
                  Get Quote
                </button>
                <a href="/products" className="hero-btn secondary">
                  View Products
                </a>
              </motion.div>

              <motion.div
                className="hero-stats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">
                    cleaning
                    <br />
                    products
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">
                    satisfied
                    <br />
                    customers
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">
                    quality
                    <br />
                    guarantee
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Professional Image with Floating Services */}
            <div className="hero-visual-content">
              <motion.div
                className="hero-image-container floating-image"
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -20, 0]
                }}
                transition={{ 
                  opacity: { duration: 1, delay: 0.5 },
                  x: { duration: 1, delay: 0.5 },
                  y: { 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
              >
                {/* Main Professional Image */}
                <div className="professional-image">
                  <img 
                    src={heroSectionImage}
                    alt="Professional Cleaning Equipment" 
                  />
                </div>

                {/* Floating Service Badges - Hidden on mobile */}
                <motion.div
                  className="service-badge badge-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="badge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 11L12 15L16 11" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Industrial Cleaners</span>
                </motion.div>

                <motion.div
                  className="service-badge badge-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="badge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M19.4 15A1.65 1.65 0 0 0 21 13.35A1.65 1.65 0 0 0 19.4 11.65L18.75 12.3A7 7 0 0 1 12 19A7 7 0 0 1 5.25 12.3L4.6 11.65A1.65 1.65 0 0 0 3 13.35A1.65 1.65 0 0 0 4.6 15L5.25 14.35A7 7 0 0 0 12 21A7 7 0 0 0 18.75 14.35L19.4 15Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Sanitizers</span>
                </motion.div>

                <motion.div
                  className="service-badge badge-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="badge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Quality Assured</span>
                </motion.div>

                {/* Background Gradient Orbs */}
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
              </motion.div>

              {/* Mobile-specific badges container - Only visible on small screens */}
              <motion.div
                className="mobile-badges-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="mobile-service-badge">
                  <div className="mobile-badge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 11L12 15L16 11" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Industrial</span>
                </div>
                <div className="mobile-service-badge">
                  <div className="mobile-badge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M19.4 15A1.65 1.65 0 0 0 21 13.35A1.65 1.65 0 0 0 19.4 11.65L18.75 12.3A7 7 0 0 1 12 19A7 7 0 0 1 5.25 12.3L4.6 11.65A1.65 1.65 0 0 0 3 13.35A1.65 1.65 0 0 0 4.6 15L5.25 14.35A7 7 0 0 0 12 21A7 7 0 0 0 18.75 14.35L19.4 15Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Sanitizers</span>
                </div>
                <div className="mobile-service-badge">
                  <div className="mobile-badge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Quality</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence & Innovation Section */}
      <ExcellenceInnovationSection />

      {/* Marine Excellence Section */}
      <MarineExcellenceSection />

      {/* Distinction in Detail Section */}
      <DistinctionSection />

      {/* Fleet Gallery Section */}
      <FleetGallerySection />

      {/* Dashboard Showcase Section */}
      <DashboardShowcaseSection />

      {/* FAQ Section for better SEO */}
      <FAQ />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
}

// Excellence & Innovation Component (adapted for cleaning industry)
const ExcellenceInnovationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="excellence-innovation-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Why Choose SwachhOn</h2>
          <p className="section-description">
            Trusted by leading businesses for reliable, professional cleaning solutions
          </p>
        </motion.div>
        <div className="excellence-layout">
          {/* Image Side - Left */}
          <motion.div
            className="excellence-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="excellence-image-wrapper">
              <img
                src={Home1}
                alt="Comprehensive cleaning management services"
                className="excellence-img"
              />
              <div className="excellence-badge">
                <span className="badge-text">Expert</span>
                <span className="badge-subtext">Service</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            className="excellence-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="excellence-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Industry Leader
            </motion.div>

            <motion.h3
              className="excellence-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Industrial Solutions
            </motion.h3>

            <motion.p
              className="excellence-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Specialized cleaning products for heavy-duty industrial applications with superior performance.
            </motion.p>

            <motion.div
              className="excellence-highlights"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="highlight-item">
                <div className="highlight-content">
                  <h4>Heavy-Duty Solutions</h4>
                  <p>Industrial grade cleaning products for toughest challenges</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-content">
                  <h4>Eco-Friendly Formulas</h4>
                  <p>Environmentally safe products with powerful results</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-content">
                  <h4>Expert Support</h4>
                  <p>Professional consultation and technical assistance</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="excellence-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a href="/about" className="excellence-link">
                Learn More →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Marine Excellence Component (adapted for cleaning industry)
const MarineExcellenceSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="marine-excellence-section" ref={sectionRef}>
      <div className="container">
        <div className="marine-excellence-layout">
          {/* Image Side - Left */}
          <motion.div
            className="marine-excellence-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="marine-image-wrapper">
              <img
                src={Home2}
                alt="Commercial cleaning services"
                className="marine-excellence-img"
              />
              <div className="marine-image-overlay">
                <div className="marine-overlay-content">
                  <span className="marine-overlay-text">Commercial Services</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            className="marine-excellence-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="marine-excellence-title">Commercial Services</h2>

            <motion.p
              className="marine-excellence-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional cleaning solutions for offices, retail spaces and commercial establishments. With over 15 years of experience in the cleaning industry, we've developed partnerships with leading businesses to provide reliable, effective cleaning solutions tailored to your specific needs.
            </motion.p>

            <motion.div
              className="marine-excellence-features"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="marine-feature-item">
                <div className="marine-feature-number">15+</div>
                <div className="marine-feature-text">Years Experience</div>
              </div>
              <div className="marine-feature-item">
                <div className="marine-feature-number">Custom</div>
                <div className="marine-feature-text">Solutions</div>
              </div>
              <div className="marine-feature-item">
                <div className="marine-feature-number">Professional</div>
                <div className="marine-feature-text">Service</div>
              </div>
            </motion.div>

            <motion.div
              className="marine-excellence-link"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="/services" className="marine-discover-link">
                View Services →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Distinction in Detail Component (adapted for cleaning industry)
const DistinctionSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="distinction-section" ref={sectionRef}>
      <div className="container">
        <div className="distinction-layout">
          {/* Content Side */}
          <motion.div
            className="distinction-content"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="distinction-title">Bulk Supply</h2>

            <motion.p
              className="distinction-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Large quantity orders with competitive pricing, fast delivery and reliable supply chain. SwachhOn provides bulk cleaning products to businesses across India, ensuring consistent quality and timely delivery to meet your operational needs.
            </motion.p>

            <motion.div
              className="distinction-features"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="feature-item">
                <div className="feature-number">Competitive</div>
                <div className="feature-text">Pricing</div>
              </div>
              <div className="feature-item">
                <div className="feature-number">Fast</div>
                <div className="feature-text">Delivery</div>
              </div>
              <div className="feature-item">
                <div className="feature-number">Reliable</div>
                <div className="feature-text">Supply Chain</div>
              </div>
            </motion.div>

            <motion.div
              className="distinction-link"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="/bulk-supply" className="discover-link">
                Get Bulk Quote →
              </a>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="distinction-image"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="image-wrapper">
              <img
                src={BulkSupplyImage}
                alt="Bulk supply and logistics"
                className="distinction-img"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <span className="overlay-text">Bulk Supply Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Fleet Gallery Component (adapted for cleaning products)
const FleetGallerySection = () => {
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10%", "10%"]
  );

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const products = [
    {
      src: CleaningImage1,
      title: "Floor Care Solutions",
      subtitle: "Professional floor cleaning and maintenance products for all surface types",
      badge: "Best Seller"
    },
    {
      src: CleaningImage2,
      title: "Surface Sanitizers",
      subtitle: "Hospital-grade disinfectants for comprehensive surface sanitization",
      badge: "Medical Grade"
    },
    {
      src: CleaningImage3,
      title: "Industrial Degreasers",
      subtitle: "Heavy-duty degreasers for manufacturing and automotive industries",
      badge: "Industrial Strength"
    },
    {
      src: Home4,
      title: "Glass & Window Cleaners",
      subtitle: "Streak-free cleaning solutions for commercial and residential use",
      badge: "Streak-Free"
    },
    {
      src: Home2,
      title: "Carpet & Upholstery Care",
      subtitle: "Specialized products for deep cleaning and stain removal",
      badge: "Deep Clean"
    }
  ];

  return (
    <section className="fleet-gallery-section" ref={galleryRef}>
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>Premium cleaning solutions designed for professional use.</p>
      </div>
      <motion.div
        className="horizontal-scroll-container"
        style={isMobile ? {} : { x }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30
        }}
      >
        {products.map((product, i) => (
          <div key={i} className="gallery-item">
            <img src={product.src} alt={product.title} />
            <div className="gallery-overlay">
              <div className="gallery-overlay-content">
                <h3 className="gallery-overlay-title">{product.title}</h3>
                <p className="gallery-overlay-subtitle">{product.subtitle}</p>
                <span className="gallery-overlay-badge">{product.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

// Dashboard Showcase Component (adapted for cleaning industry)
const DashboardShowcaseSection = () => {
  const dashboardVideoRef = useRef(null);

  return (
  <></>
  );
};

export default Home
