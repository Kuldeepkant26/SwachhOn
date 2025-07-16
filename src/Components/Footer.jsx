import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowRight,
  Award,
  Shield,
  Recycle,
  Clock
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' }
  ];

  const services = [
    { name: 'Industrial Cleaning', href: '/services/industrial' },
    { name: 'Custom Formulations', href: '/services/custom' },
    { name: 'Bulk Supply', href: '/services/bulk' },
    { name: 'Technical Support', href: '/services/support' },
    { name: 'Safety Compliance', href: '/services/safety' },
    { name: 'Equipment Maintenance', href: '/services/maintenance' }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Youtube size={20} />, href: '#', name: 'YouTube' }
  ];

  const certifications = [
    { icon: <Award size={24} />, text: 'ISO 9001:2015' },
    { icon: <Shield size={24} />, text: 'Safety Certified' },
    { icon: <Recycle size={24} />, text: 'Eco-Friendly' },
    { icon: <Globe size={24} />, text: 'Global Standards' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <motion.section 
        className="newsletter-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="newsletter-content" variants={itemVariants}>
            <div className="newsletter-text">
              <h3>Stay Updated with SwachhOn</h3>
              <p>Get the latest news, product updates, and industry insights delivered to your inbox.</p>
            </div>
            <motion.div className="newsletter-form" variants={itemVariants}>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <motion.button 
                  className="newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Footer */}
      <motion.div 
        className="footer-main"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <motion.div className="footer-column company-info" variants={itemVariants}>
              <div className="footer-logo">
                <h2>SwachhOn</h2>
                <div className="logo-tagline">Clean Solutions. Sustainable Future.</div>
              </div>
              <p className="company-description">
                Leading provider of industrial cleaning solutions, committed to delivering 
                innovative, sustainable, and high-performance products that meet the evolving 
                needs of modern industries.
              </p>
              
              {/* Contact Info */}
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={18} />
                  <span>123 Industrial Avenue, Tech City, TC 12345</span>
                </div>
                <div className="contact-item">
                  <Phone size={18} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <span>info@swachhon.com</span>
                </div>
                <div className="contact-item">
                  <Clock size={18} />
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="footer-column" variants={itemVariants}>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a 
                      href={link.href}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div className="footer-column" variants={itemVariants}>
              <h4>Our Services</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.a 
                      href={service.href}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Business Hours & Support */}
            <motion.div className="footer-column" variants={itemVariants}>
              <h4>Business Hours</h4>
              <div className="business-hours">
                <div className="hours-item">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Sunday</span>
                  <span>Emergency Support Only</span>
                </div>
              </div>
              
              <div className="emergency-support">
                <h5>Emergency Support</h5>
                <p>24/7 technical assistance for critical operations</p>
                <motion.a 
                  href="tel:+15551234567" 
                  className="emergency-number"
                  whileHover={{ scale: 1.05 }}
                >
                  +1 (555) 123-4567
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div 
            className="certifications-section"
            variants={itemVariants}
          >
            <h4>Certifications & Standards</h4>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="certification-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <span>{cert.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div 
        className="footer-bottom"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} SwachhOn. All rights reserved.</p>
              <div className="legal-links">
                <motion.a href="/privacy" whileHover={{ color: 'var(--primary-color)' }}>
                  Privacy Policy
                </motion.a>
                <motion.a href="/terms" whileHover={{ color: 'var(--primary-color)' }}>
                  Terms of Service
                </motion.a>
                <motion.a href="/cookies" whileHover={{ color: 'var(--primary-color)' }}>
                  Cookie Policy
                </motion.a>
              </div>
            </div>
            
            <div className="social-links">
              <span>Follow Us:</span>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.name}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
