import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="faq-section py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about SwachhOn cleaning products and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-expanded={openIndex === index}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-green-600 font-bold">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 bg-white">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
