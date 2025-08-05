import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Add business schema markup
  useEffect(() => {
    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SwachhOn",
      "description": "Leading provider of premium cleaning products and solutions for industrial, commercial, and institutional cleaning needs.",
      "url": "https://swachhon.com",
      "logo": "https://swachhon.com/public/SwachhOn_icon.png",
      "image": "https://swachhon.com/public/SwachhOn_icon.png",
      "telephone": "+91-8954535455",
      "email": "swachhonecosolutions@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Business District",
        "addressCountry": "IN"
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00"
      ],
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
              "name": "Industrial Cleaning Products",
              "category": "Cleaning Supplies"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product", 
              "name": "Commercial Cleaning Equipment",
              "category": "Cleaning Equipment"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.instagram.com/swachhon_1/",
        "https://www.linkedin.com/company/swachhon", 
        "https://x.com/swachhon1"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(businessSchema);
    script.id = 'business-schema';
    
    // Remove existing script if any
    const existingScript = document.getElementById('business-schema');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('business-schema');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, []);

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Bulk Supply', href: '/bulk-supply' },
    { name: 'Case Studies', href: '/case-studies' }
  ]

  const productCategories = [
    { name: 'Industrial Cleaners', href: '/products/industrial' },
    { name: 'Commercial Solutions', href: '/products/commercial' },
    { name: 'Sanitizers & Disinfectants', href: '/products/sanitizers' },
    { name: 'Cleaning Equipment', href: '/products/equipment' },
    { name: 'Eco-Friendly Products', href: '/products/eco-friendly' }
  ]

  const supportLinks = [
    { name: 'Contact Support', href: '/support' },
    { name: 'Product Catalog', href: '/catalog' },
    { name: 'Technical Specs', href: '/technical' },
    { name: 'Safety Guidelines', href: '/safety' },
    { name: 'FAQ', href: '/faq' }
  ]

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <motion.div 
              className="footer-section company-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="footer-logo">
                <h3>SwachhOn</h3>
                <div className="logo-tagline">Professional Cleaning Solutions</div>
              </div>
              <p className="company-description">
                Leading provider of premium cleaning products and solutions for industrial, 
                commercial, and institutional cleaning needs. Quality you can trust, 
                results you can see.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>8954-53-54-55</span>
                </div>
                <div className="contact-item">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>swachhonecosolutions@gmail.com</span>
                </div>
                <div className="contact-item">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Clean Street, Business District</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-section-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-section-title">Products</h4>
              <ul className="footer-links">
                {productCategories.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support & Resources */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-section-title">Support</h4>
              <ul className="footer-links">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div 
              className="footer-section newsletter-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-section-title">Stay Updated</h4>
              <p className="newsletter-description">
                Get the latest updates on new products, cleaning tips, and industry insights.
              </p>
              <form className="newsletter-form">
                <div className="newsletter-input-group">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-btn">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
              
              {/* Social Media Links */}
              <div className="social-media">
                <h5 className="social-title">Follow Us</h5>
                <div className="social-links">
                  <a href="https://www.linkedin.com/company/swachhon" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/swachhon1" className="social-link" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/swachhon_1/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.461-3.361-1.236-.914-.776-1.371-1.717-1.371-2.824 0-1.297.5-2.448 1.5-3.452 1-1.005 2.206-1.507 3.617-1.507 1.297 0 2.448.461 3.361 1.236.914.776 1.371 1.717 1.371 2.824 0 1.297-.5 2.448-1.5 3.452-1 1.005-2.206 1.507-3.617 1.507zm7.718-9.042h-2.734V6.005h2.734v1.941z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/918954535455" className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <motion.div 
        className="footer-trust-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="trust-badges">
            <div className="trust-badge">
              <div className="trust-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="trust-content">
                <h6>ISO Certified</h6>
                <p>Quality Management</p>
              </div>
            </div>
            
            <div className="trust-badge">
              <div className="trust-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="trust-content">
                <h6>24/7 Support</h6>
                <p>Customer Service</p>
              </div>
            </div>
            
            <div className="trust-badge">
              <div className="trust-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="trust-content">
                <h6>Eco-Friendly</h6>
                <p>Green Solutions</p>
              </div>
            </div>
            
            <div className="trust-badge">
              <div className="trust-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="trust-content">
                <h6>Fast Delivery</h6>
                <p>Quick Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} SwachhOn. All rights reserved.</p>
            </div>
            <div className="legal-links">
              <a href="/privacy" className="legal-link">Privacy Policy</a>
              <a href="/terms" className="legal-link">Terms of Service</a>
              <a href="/cookies" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
