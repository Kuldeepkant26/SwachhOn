import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of cleaning products does SwachhOn offer?",
      answer: "SwachhOn offers a comprehensive range of professional cleaning products including floor cleaners (Phenyl White and Black), toilet cleaners (Harpick), specialty cleaners (Calpro), disinfectants, sanitizers, and bulk cleaning supplies for commercial and industrial use."
    },
    {
      question: "Are SwachhOn products suitable for commercial and industrial use?",
      answer: "Yes, all SwachhOn products are specifically designed for commercial and industrial applications. Our products are formulated to handle heavy-duty cleaning requirements while maintaining safety standards for professional environments."
    },
    {
      question: "How can I place a bulk order for cleaning products?",
      answer: "You can place bulk orders by contacting us directly through our contact form, phone, or email. We offer customized pricing for bulk orders and can accommodate specific requirements for businesses across India."
    },
    {
      question: "What makes SwachhOn products different from other cleaning products?",
      answer: "SwachhOn products are formulated with advanced cleaning technology, offering superior germ protection, eco-friendly formulas, and cost-effective solutions. We focus on professional-grade quality with proven antibacterial properties."
    },
    {
      question: "Do you provide delivery services across India?",
      answer: "Yes, SwachhOn provides delivery services across India. We ensure safe and timely delivery of our cleaning products to commercial and industrial customers nationwide."
    },
    {
      question: "Are SwachhOn products eco-friendly and safe?",
      answer: "Yes, our products are formulated with eco-friendly ingredients and follow safety standards. They are safe for regular use in commercial environments while being effective against germs and bacteria."
    },
    {
      question: "Can I get customized cleaning solutions for my business?",
      answer: "Absolutely! SwachhOn offers customized cleaning solutions based on your specific business needs. Contact us to discuss your requirements and we'll provide tailored recommendations."
    },
    {
      question: "What is the shelf life of SwachhOn cleaning products?",
      answer: "Our cleaning products have a shelf life of 2-3 years when stored properly in cool, dry conditions. Each product comes with proper labeling indicating manufacturing and expiry dates."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Add structured data to page
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqStructuredData);
    script.id = 'faq-structured-data';
    
    // Remove existing script if any
    const existingScript = document.getElementById('faq-structured-data');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('faq-structured-data');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Get answers to common questions about SwachhOn cleaning products and services</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'expanded' : ''}`}>
              <button
                onClick={() => toggleFAQ(index)}
                className={`faq-question-button ${openIndex === index ? 'active' : ''}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="faq-question-text">
                  {faq.question}
                </h3>
                <span className={`faq-toggle-icon ${openIndex === index ? 'active' : ''}`}>
                  +
                </span>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`faq-answer ${openIndex === index ? 'open' : 'closed'}`}
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden'
                }}
              >
                <div className="faq-answer-content">
                  <p className="faq-answer-text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
