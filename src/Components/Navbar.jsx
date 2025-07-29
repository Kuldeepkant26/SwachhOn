import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ContactModal from './ContactModal.jsx'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Products',
      href: '/products',
      dropdown: [
        { name: 'Cleaning Solutions', href: '/products/solutions' },
        { name: 'Industrial Equipment', href: '/products/equipment' },
        { name: 'Sanitizers', href: '/products/sanitizers' },
        { name: 'Bulk Supply', href: '/products/bulk' }
      ]
    }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const handleGetQuoteClick = () => {
    setIsContactModalOpen(true)
    setIsMobileMenuOpen(false) // Close mobile menu if open
  }

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Navbar Background Blur Layer */}
      <div className="navbar-blur-bg"></div>
      <div className="navbar-gradient-overlay"></div>

      <div className="navbar-container">
        {/* Logo Section */}
        <motion.div 
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/" className="logo-link">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path 
                  d="M12 2L2 7V12C2 18.5 7 22 12 22C17 22 22 18.5 22 12V7L12 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  fill="currentColor"
                  opacity="0.1"
                />
                <path 
                  d="M8 12L11 15L16 9" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="logo-text">SwachhOn</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="navbar-nav desktop-nav">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className="nav-item-wrapper"
              onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              <motion.a
                href={item.href}
                className="nav-link"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
                {item.dropdown && (
                  <svg className="dropdown-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </motion.a>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === index && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="dropdown-blur-bg"></div>
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <motion.a
                        key={dropIndex}
                        href={dropItem.href}
                        className="dropdown-link"
                        whileHover={{ x: 5, backgroundColor: "rgba(5, 150, 105, 0.1)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {dropItem.name}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="navbar-cta desktop-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button onClick={handleGetQuoteClick} className="cta-button">
            <span>Get Quote</span>
            <svg className="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle mobile menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'hamburger-open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mobile-nav-blur-bg"></div>
            <div className="mobile-nav-content">
              {navItems.map((item, index) => (
                <div key={index} className="mobile-nav-item">
                  <motion.a
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <button
                        className="mobile-dropdown-btn"
                        onClick={(e) => {
                          e.preventDefault()
                          handleDropdownToggle(index)
                        }}
                      >
                        <svg 
                          className={`mobile-dropdown-arrow ${activeDropdown === index ? 'rotated' : ''}`} 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </motion.a>

                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === index && (
                      <motion.div
                        className="mobile-dropdown"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <motion.a
                            key={dropIndex}
                            href={dropItem.href}
                            className="mobile-dropdown-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                            whileHover={{ x: 10 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {dropItem.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTA */}
              <motion.div 
                className="mobile-cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button 
                  onClick={handleGetQuoteClick}
                  className="mobile-cta-button"
                >
                  <span>Get Quote</span>
                  <svg className="mobile-cta-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </motion.nav>
  )
}

export default Navbar