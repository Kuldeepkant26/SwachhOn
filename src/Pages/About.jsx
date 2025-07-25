import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Globe, 
  Leaf, 
  Shield,
  CheckCircle,
  Calendar,
  TrendingUp,
  Briefcase
} from 'lucide-react';
import '../Css/About.css';
import simage1 from '../assets/simage1.jpg';
import simage2 from '../assets/simage2.webp';
import simage3 from '../assets/simage3.jpg';
import simage4 from '../assets/simage4.jpg';
import simage5 from '../assets/simage5.webp';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  const timeline = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'SwachhOn was established with a vision to revolutionize industrial cleaning solutions.'
    },
    {
      year: '2012',
      title: 'Market Expansion',
      description: 'Expanded operations to serve major industrial sectors across the region.'
    },
    {
      year: '2016',
      title: 'Innovation Award',
      description: 'Received recognition for developing eco-friendly industrial cleaning formulations.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched online platform for seamless bulk ordering and supply chain management.'
    },
    {
      year: '2024',
      title: 'Sustainability Leader',
      description: 'Achieved carbon-neutral operations and launched biodegradable product line.'
    }
  ];

  const values = [
    {
      icon: <Shield size={40} />,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous testing to meet the highest industry standards.'
    },
    {
      icon: <Leaf size={40} />,
      title: 'Environmental Responsibility',
      description: 'Committed to sustainable practices and eco-friendly formulations.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Customer First',
      description: 'Your satisfaction and success drive everything we do.'
    },
    {
      icon: <Globe size={40} />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with reliable supply chain solutions.'
    }
  ];

  const achievements = [
    { icon: <Award size={30} />, number: '50+', label: 'Industry Awards' },
    { icon: <Users size={30} />, number: '500+', label: 'Global Clients' },
    { icon: <Globe size={30} />, number: '25+', label: 'Countries Served' },
    { icon: <Briefcase size={30} />, number: '15+', label: 'Years Experience' }
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Chief Executive Officer',
      image: simage2,
      description: '20+ years in chemical engineering and business leadership.'
    },
    {
      name: 'Sarah Chen',
      position: 'Head of R&D',
      image: simage3,
      description: 'Leading innovation in sustainable cleaning technologies.'
    },
    {
      name: 'Michael Johnson',
      position: 'Operations Director',
      image: simage4,
      description: 'Expert in supply chain optimization and logistics.'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Quality Assurance Lead',
      image: simage5,
      description: 'Ensuring the highest standards in product quality and safety.'
    }
  ];

  return (
    <motion.div
      className="about page-transition"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="about-hero bg-pattern">
        <div className="container">
          <motion.div className="about-hero-content" variants={itemVariants}>
            <motion.h1 className="hero-title" variants={itemVariants}>
              About <span className="text-gradient">SwachhOn</span>
            </motion.h1>
            <motion.p className="hero-subtitle" variants={itemVariants}>
              Leading the industry in professional bulk cleaning solutions since 2008. 
              We're committed to excellence, innovation, and sustainability.
            </motion.p>
          </motion.div>
          <motion.div className="about-hero-image" variants={scaleVariants}>
            <img 
              src={simage1} 
              alt="SwachhOn Facility"
              className="hero-img"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section">
        <div className="container">
          <motion.div 
            className="grid grid-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="mission-card" variants={scaleVariants}>
              <div className="card-icon">
                <Target size={50} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide superior bulk cleaning solutions that enhance operational efficiency 
                while maintaining the highest standards of safety and environmental responsibility. 
                We strive to be the trusted partner for industries worldwide.
              </p>
            </motion.div>

            <motion.div className="vision-card" variants={scaleVariants}>
              <div className="card-icon">
                <Eye size={50} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To revolutionize the cleaning industry through innovative, sustainable solutions 
                that set new benchmarks for quality and performance. We envision a cleaner, 
                safer world powered by our cutting-edge technologies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
  

      {/* Company Timeline */}
      <section className="timeline-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              Our Journey
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Milestones that shaped our company's growth and success
            </motion.p>
          </motion.div>

          <motion.div 
            className="timeline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section section bg-pattern">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              Our Core Values
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              The principles that guide our every decision and action
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                variants={scaleVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="value-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
     

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
              Ready to Partner with Industry Leaders?
            </motion.h2>
            <motion.p variants={itemVariants}>
              Join hundreds of satisfied clients who trust SwachhOn for their cleaning needs.
            </motion.p>
            <motion.div 
              className="cta-actions"
              variants={itemVariants}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Partnership
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
