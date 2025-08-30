import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AuthModal from './AuthModal.jsx'
import UserProfileButton from './UserProfileButton.jsx'
import { useAuth } from '../contexts/AuthContext.jsx'
import logo3 from '../assets/logo3.png'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { isAuthenticated, loading } = useAuth()

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

  const handleSignInClick = () => {
    setIsAuthModalOpen(true)
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
            <img 
              src={logo3} 
              alt="SwachhOn Logo" 
              className="logo-image"
            />
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

        {/* Authentication Section */}
        <div className="navbar-auth desktop-auth">
          {loading ? (
            <div className="auth-loading">
              <div className="spinner-small"></div>
            </div>
          ) : isAuthenticated ? (
            <UserProfileButton />
          ) : (
            <motion.button 
              onClick={handleSignInClick} 
              className="signin-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Sign In</span>
              <svg className="signin-arrow" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.293 2.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L12.586 10H5a1 1 0 110-2h7.586L10.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          )}
        </div>

        {/* Mobile Menu Controls - Profile Button + Hamburger Menu */}
        <div className="mobile-menu-controls">
          {/* Mobile Authentication - appears with hamburger menu */}
          <div className="mobile-auth-inline">
            {loading ? (
              <div className="auth-loading mobile-inline">
                <div className="spinner-small"></div>
              </div>
            ) : isAuthenticated ? (
              <UserProfileButton />
            ) : null}
          </div>

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

              {/* Mobile Authentication */}
              <div className="mobile-auth">
                {loading ? (
                  <div className="auth-loading mobile">
                    <div className="spinner-small"></div>
                    <span>Loading...</span>
                  </div>
                ) : !isAuthenticated ? (
                  <motion.button 
                    onClick={handleSignInClick}
                    className="mobile-signin-button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Sign In</span>
                    <svg className="mobile-signin-arrow" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.293 2.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L12.586 10H5a1 1 0 110-2h7.586L10.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Authentication Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode="login"
      />
    </motion.nav>
  )
}

export default Navbar