import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Factory, 
  Truck, 
  Shield, 
  Zap, 
  Droplets, 
  Recycle, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Clock,
  MapPin,
  Star,
  Users,
  Award,
  Wrench,
  Beaker,
  Package
} from 'lucide-react';
import '../Css/Services.css';
import simage1 from '../assets/simage1.jpg';
import simage2 from '../assets/simage2.webp';
import simage3 from '../assets/simage3.jpg';
import simage4 from '../assets/simage4.jpg';
import simage5 from '../assets/simage5.webp';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const services = [
    {
      icon: <Factory size={50} />,
      title: 'Industrial Cleaning Solutions',
      description: 'Heavy-duty cleaning products for manufacturing, automotive, and industrial facilities.',
      features: [
        'High-performance degreasers',
        'Heavy machinery cleaners',
        'Industrial floor cleaners',
        'Equipment maintenance solutions'
      ],
      image: simage1
    },
    {
      icon: <Truck size={50} />,
      title: 'Bulk Supply & Logistics',
      description: 'Reliable bulk delivery services with flexible scheduling and inventory management.',
      features: [
        'Scheduled bulk deliveries',
        'Inventory management systems',
        'Emergency supply services',
        'Custom packaging options'
      ],
      image: simage2
    },
    {
      icon: <Beaker size={50} />,
      title: 'Custom Formulations',
      description: 'Tailored cleaning solutions developed specifically for your industry requirements.',
      features: [
        'Industry-specific formulations',
        'R&D consultation',
        'Product testing & validation',
        'Ongoing technical support'
      ],
      image: simage3
    },
    {
      icon: <Shield size={50} />,
      title: 'Safety & Compliance',
      description: 'Comprehensive safety protocols and regulatory compliance support.',
      features: [
        'Safety data sheets (SDS)',
        'Regulatory compliance consulting',
        'Training programs',
        'Environmental impact assessments'
      ],
      image: simage4
    },
    {
      icon: <Wrench size={50} />,
      title: 'Technical Support',
      description: '24/7 technical assistance and maintenance support for optimal performance.',
      features: [
        '24/7 technical helpline',
        'On-site consultations',
        'Equipment maintenance',
        'Performance optimization'
      ],
      image: simage5
    },
    {
      icon: <Recycle size={50} />,
      title: 'Sustainable Solutions',
      description: 'Eco-friendly cleaning products that minimize environmental impact.',
      features: [
        'Biodegradable formulations',
        'Reduced carbon footprint',
        'Waste reduction programs',
        'Green certification support'
      ],
      image: simage1
    }
  ];

  const industries = [
    {
      icon: <Factory size={40} />,
      title: 'Manufacturing',
      description: 'Heavy-duty cleaning for production facilities and equipment.'
    },
    {
      icon: <Truck size={40} />,
      title: 'Automotive',
      description: 'Specialized cleaners for vehicle manufacturing and maintenance.'
    },
    {
      icon: <Package size={40} />,
      title: 'Food Processing',
      description: 'Food-safe cleaning solutions for processing facilities.'
    },
    {
      icon: <Droplets size={40} />,
      title: 'Healthcare',
      description: 'Medical-grade disinfectants and sanitizers.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Energy & Utilities',
      description: 'Cleaning solutions for power plants and utility infrastructure.'
    },
    {
      icon: <Users size={40} />,
      title: 'Hospitality',
      description: 'Commercial cleaning products for hotels and restaurants.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We assess your specific cleaning requirements and challenges.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Custom formulation and product selection tailored to your needs.'
    },
    {
      step: '03',
      title: 'Testing & Validation',
      description: 'Rigorous testing to ensure optimal performance and safety.'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Seamless integration with training and ongoing support.'
    }
  ];

  return (
    <motion.div
      className="services page-transition"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="services-hero bg-pattern">
        <div className="container">
          <motion.div className="services-hero-content" variants={itemVariants}>
            <motion.h1 className="hero-title" variants={itemVariants}>
              Comprehensive <span className="text-gradient">Cleaning Services</span>
            </motion.h1>
            <motion.p className="hero-subtitle" variants={itemVariants}>
              From industrial-grade solutions to custom formulations, we deliver 
              comprehensive cleaning services tailored to your industry needs.
            </motion.p>
            <motion.div className="hero-actions" variants={itemVariants}>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started <ArrowRight size={20} />
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Catalog
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              Our Services
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Complete solutions for all your industrial cleaning needs
            </motion.p>
          </motion.div>

          <motion.div 
            className="services-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="services-list">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`service-item ${activeService === index ? 'active' : ''}`}
                  variants={itemVariants}
                  onClick={() => setActiveService(index)}
                  whileHover={{ x: 10 }}
                >
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="service-info">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="service-details"
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="service-image">
                <img src={services[activeService].image} alt={services[activeService].title} />
              </div>
              <div className="service-content">
                <h3>{services[activeService].title}</h3>
                <p>{services[activeService].description}</p>
                <ul className="service-features">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-primary">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="industries-section section bg-pattern">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              Industries We Serve
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Specialized solutions for diverse industrial sectors
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="industry-card"
                variants={scaleVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="industry-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {industry.icon}
                </motion.div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              Our Process
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              A systematic approach to delivering the perfect cleaning solution
            </motion.p>
          </motion.div>

          <motion.div 
            className="process-steps"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                className="process-step"
                variants={scaleVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="step-number">{process.step}</div>
                <div className="step-content">
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="step-connector">
                    <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section bg-pattern">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              Why Choose Our Services?
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="feature-highlight" variants={scaleVariants}>
              <Clock size={40} />
              <h3>24/7 Support</h3>
              <p>Round-the-clock technical assistance and emergency response</p>
            </motion.div>

            <motion.div className="feature-highlight" variants={scaleVariants}>
              <Award size={40} />
              <h3>Certified Quality</h3>
              <p>ISO certified products meeting international quality standards</p>
            </motion.div>

            <motion.div className="feature-highlight" variants={scaleVariants}>
              <MapPin size={40} />
              <h3>Global Reach</h3>
              <p>Reliable supply chain serving clients across multiple continents</p>
            </motion.div>

            <motion.div className="feature-highlight" variants={scaleVariants}>
              <Star size={40} />
              <h3>Custom Solutions</h3>
              <p>Tailored formulations designed specifically for your requirements</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants}>
              Ready to Optimize Your Cleaning Operations?
            </motion.h2>
            <motion.p variants={itemVariants}>
              Contact our experts today to discuss your specific requirements and get a customized solution.
            </motion.p>
            <motion.div 
              className="cta-actions"
              variants={itemVariants}
            >
              <motion.div className="contact-info">
                <div className="contact-item">
                  <Phone size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <Mail size={20} />
                  <span>services@swachhon.com</span>
                </div>
              </motion.div>
              <motion.button
                className="btn-primary large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
