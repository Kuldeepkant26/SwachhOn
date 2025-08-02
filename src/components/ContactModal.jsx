import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import './ContactModal.css'

const ContactModal = ({ isOpen, onClose }) => {
  // Replace "YOUR_FORM_ID" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("xblkayer") // Use your actual form ID here
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission with Formspree
  const onSubmit = async (e) => {
    e.preventDefault()
    
    // Create FormData to include all form fields
    const form = new FormData()
    form.append('name', formData.name)
    form.append('email', formData.email)
    form.append('phone', formData.phone)
    form.append('message', formData.message)
    form.append('subject', `New Contact Form Submission from ${formData.name}`)
    
    // Submit using Formspree's handleSubmit
    await handleSubmit(e)
  }

  // Reset form when modal is closed or form is successfully submitted
  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        onClose()
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      }, 2000)
    }
  }, [state.succeeded, onClose])

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Blurred Background */}
          <div className="contact-modal-blur-bg" />
          
          <motion.div
            className="contact-modal-container"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.175, 0.885, 0.32, 1.275]
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="contact-modal-header">
              <div className="modal-header-content">
                <div className="modal-icon">
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
                <div className="modal-title-section">
                  <h2 className="modal-title">Get Your Quote</h2>
                  <p className="modal-subtitle">
                    Ready to transform your space? Let's discuss your cleaning needs
                  </p>
                </div>
              </div>
              
              <motion.button
                className="modal-close-btn"
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>
            </div>

            {/* Modal Body */}
            <div className="contact-modal-body">
              {state.succeeded ? (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Quote Request Sent!</h3>
                  <p>Thank you for your interest. We'll get back to you within 24 hours with a personalized quote.</p>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={onSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </div>

                    <div className="form-group form-group-full">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                      <ValidationError 
                        prefix="Phone" 
                        field="phone"
                        errors={state.errors}
                      />
                    </div>

                    <div className="form-group form-group-full">
                      <label htmlFor="message" className="form-label">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, timeline, and specific requirements..."
                        rows="4"
                      />
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div className="form-footer">
                    <p className="form-notice">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                    
                    <div className="form-actions">
                      <motion.button
                        type="button"
                        className="btn-secondary"
                        onClick={onClose}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Cancel
                      </motion.button>
                      
                      <motion.button
                        type="submit"
                        className="btn-primary"
                        disabled={state.submitting}
                        whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                        whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                      >
                        {state.submitting ? (
                          <>
                            <div className="loading-spinner" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Get My Quote
                            <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactModal
