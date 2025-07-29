import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import '../css/Products.css'

// Product images (using placeholder URLs)
const productsHeroImage = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0'
const industrialImage = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0'
const commercialImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0'
const sanitizerImage = 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0'
const equipmentImage = 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0'

const Products = () => {
  const heroRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero-section" ref={heroRef}>
        <motion.div 
          className="products-hero-background"
          style={{ scale, opacity }}
        >
          <img src={productsHeroImage} alt="SwachhOn Products" />
          <div className="products-hero-overlay"></div>
        </motion.div>
        
        <div className="container">
          <div className="products-hero-content">
            <motion.div
              className="products-hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.h1
                className="products-hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Premium Cleaning Products
              </motion.h1>
              
              <motion.p
                className="products-hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Discover our comprehensive range of professional cleaning solutions, 
                from industrial-grade cleaners to eco-friendly sanitizers.
              </motion.p>
              
              <motion.div
                className="products-hero-features"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="hero-feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7V12C2 18.5 7 22 12 22C17 22 22 18.5 22 12V7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Quality Assured</span>
                </div>
                <div className="hero-feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M21 16V8C21 5.79 19.21 4 17 4H7C4.79 4 3 5.79 3 8V16C3 18.21 4.79 20 7 20H17C19.21 20 21 18.21 21 16Z" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Eco-Friendly</span>
                </div>
                <div className="hero-feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M13 10V3L4 14H7V21L16 10H13Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Fast Delivery</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <ProductCategoriesSection />

      {/* Featured Products Section */}
      <FeaturedProductsSection selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* Product Benefits Section */}
      <ProductBenefitsSection />

      {/* Bulk Supply Section */}
      <BulkSupplySection />
    </div>
  )
}

// Product Categories Component
const ProductCategoriesSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const categories = [
    {
      title: "Industrial Cleaners",
      description: "Heavy-duty cleaning solutions for industrial applications and manufacturing facilities.",
      image: industrialImage,
      features: ["Heavy-duty formulation", "Industrial grade", "Bulk available", "Custom solutions"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 11L12 15L16 11" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Commercial Solutions",
      description: "Professional cleaning products designed for offices, retail spaces, and commercial buildings.",
      image: commercialImage,
      features: ["Office-friendly", "Multi-surface", "Professional grade", "Cost-effective"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M21 16V8C21 5.79 19.21 4 17 4H7C4.79 4 3 5.79 3 8V16C3 18.21 4.79 20 7 20H17C19.21 20 21 18.21 21 16Z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Sanitizers & Disinfectants",
      description: "Advanced sanitizing solutions for maintaining hygiene and preventing contamination.",
      image: sanitizerImage,
      features: ["99.9% effective", "Fast-acting", "Safe formulation", "Various formats"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M19.4 15A1.65 1.65 0 0 0 21 13.35A1.65 1.65 0 0 0 19.4 11.65L18.75 12.3A7 7 0 0 1 12 19A7 7 0 0 1 5.25 12.3L4.6 11.65A1.65 1.65 0 0 0 3 13.35A1.65 1.65 0 0 0 4.6 15L5.25 14.35A7 7 0 0 0 12 21A7 7 0 0 0 18.75 14.35L19.4 15Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Cleaning Equipment",
      description: "Professional cleaning equipment and tools for efficient and effective cleaning operations.",
      image: equipmentImage,
      features: ["Professional tools", "Durable build", "Ergonomic design", "Easy maintenance"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M14.7 6.3C16.1 7.7 16.1 9.9 14.7 11.3L5.1 20.9C4.7 21.3 4.1 21.3 3.7 20.9C3.3 20.5 3.3 19.9 3.7 19.5L13.3 9.9C14.7 8.5 14.7 6.3 13.3 4.9C11.9 3.5 9.7 3.5 8.3 4.9L4.9 8.3C4.5 8.7 3.9 8.7 3.5 8.3C3.1 7.9 3.1 7.3 3.5 6.9L6.9 3.5C9.1 1.3 12.5 1.3 14.7 3.5C16.9 5.7 16.9 9.1 14.7 11.3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ]

  return (
    <section className="product-categories-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Product Categories</h2>
          <p className="section-description">
            Comprehensive cleaning solutions for every industry and application
          </p>
        </motion.div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="category-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="category-image">
                <img src={category.image} alt={category.title} />
                <div className="category-overlay">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                </div>
              </div>
              
              <div className="category-content">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                
                <div className="category-features">
                  {category.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <motion.button 
                  className="category-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Products
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured Products Component
const FeaturedProductsSection = ({ selectedCategory, setSelectedCategory }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const filterCategories = [
    { id: 'all', name: 'All Products' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'sanitizers', name: 'Sanitizers' },
    { id: 'equipment', name: 'Equipment' }
  ]

  const products = [
    {
      id: 1,
      name: "HeavyDuty Pro Cleaner",
      category: "industrial",
      price: "$89.99",
      rating: 4.8,
      image: industrialImage,
      features: ["Industrial Grade", "Concentrated Formula", "Multi-Surface"],
      description: "Professional-grade industrial cleaner for heavy-duty applications."
    },
    {
      id: 2,
      name: "Office Clean Plus",
      category: "commercial",
      price: "$34.99",
      rating: 4.6,
      image: commercialImage,
      features: ["Office-Friendly", "Non-Toxic", "Quick-Dry"],
      description: "Perfect cleaning solution for offices and commercial spaces."
    },
    {
      id: 3,
      name: "SafeGuard Sanitizer",
      category: "sanitizers",
      price: "$24.99",
      rating: 4.9,
      image: sanitizerImage,
      features: ["99.9% Effective", "Alcohol-Based", "Fast-Acting"],
      description: "Advanced sanitizer for maximum protection against germs."
    },
    {
      id: 4,
      name: "ProClean Equipment Kit",
      category: "equipment",
      price: "$149.99",
      rating: 4.7,
      image: equipmentImage,
      features: ["Professional Tools", "Durable", "Complete Kit"],
      description: "Complete cleaning equipment kit for professional use."
    },
    {
      id: 5,
      name: "EcoClean Industrial",
      category: "industrial",
      price: "$67.99",
      rating: 4.5,
      image: industrialImage,
      features: ["Eco-Friendly", "Biodegradable", "Industrial Strength"],
      description: "Environmentally friendly industrial cleaning solution."
    },
    {
      id: 6,
      name: "UltraShine Commercial",
      category: "commercial",
      price: "$29.99",
      rating: 4.4,
      image: commercialImage,
      features: ["Streak-Free", "Multi-Surface", "Pleasant Scent"],
      description: "Premium commercial cleaner for superior results."
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <section className="featured-products-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Products</h2>
          <p className="section-description">
            Discover our most popular and effective cleaning solutions
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="product-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filterCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="products-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-badge">
                    <span className="rating">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {product.rating}
                    </span>
                  </div>
                </div>

                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-features">
                    {product.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="product-feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="product-footer">
                    <div className="product-price">{product.price}</div>
                    <motion.button 
                      className="add-to-cart-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

// Product Benefits Component
const ProductBenefitsSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7V12C2 18.5 7 22 12 22C17 22 22 18.5 22 12V7L12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Quality Guaranteed",
      description: "All products undergo rigorous testing to ensure maximum effectiveness and safety."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M21 16V8C21 5.79 19.21 4 17 4H7C4.79 4 3 5.79 3 8V16C3 18.21 4.79 20 7 20H17C19.21 20 21 18.21 21 16Z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Eco-Friendly Formula",
      description: "Environmentally responsible products that don't compromise on cleaning power."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M13 10V3L4 14H7V21L16 10H13Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Fast & Effective",
      description: "Quick-acting formulations that deliver superior results in minimal time."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5C14.8 6.2 14.5 6 14.2 5.8L13 3H11L9.8 5.8C9.5 6 9.2 6.2 9 6.5L3 7V9L9 9.5C9.2 9.8 9.5 10 9.8 10.2L11 13H13L14.2 10.2C14.5 10 14.8 9.8 15 9.5L21 9Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Cost-Effective",
      description: "Concentrated formulas provide exceptional value and reduce overall cleaning costs."
    }
  ]

  return (
    <section className="product-benefits-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Why Choose Our Products</h2>
          <p className="section-description">
            Experience the difference with our premium cleaning solutions
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Bulk Supply Component
const BulkSupplySection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="bulk-supply-section" ref={sectionRef}>
      <div className="container">
        <div className="bulk-supply-layout">
          <motion.div
            className="bulk-supply-content"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bulk-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bulk Supply
            </motion.div>

            <motion.h2
              className="bulk-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Volume Discounts Available
            </motion.h2>

            <motion.p
              className="bulk-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Save more with our bulk supply options. Perfect for large facilities, 
              cleaning companies, and businesses with high-volume needs. Custom 
              packaging and delivery solutions available.
            </motion.p>

            <motion.div
              className="bulk-features"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bulk-feature">
                <div className="bulk-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V22" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 10L12 6L16 10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="bulk-feature-content">
                  <h4>Volume Discounts</h4>
                  <p>Up to 30% savings on bulk orders</p>
                </div>
              </div>

              <div className="bulk-feature">
                <div className="bulk-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M1 3H5L7 13H17L21 5H9" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="9" cy="20" r="1" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="bulk-feature-content">
                  <h4>Custom Packaging</h4>
                  <p>Tailored packaging solutions</p>
                </div>
              </div>

              <div className="bulk-feature">
                <div className="bulk-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M13 10V3L4 14H7V21L16 10H13Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="bulk-feature-content">
                  <h4>Fast Delivery</h4>
                  <p>Reliable logistics and delivery</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bulk-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="bulk-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Bulk Quote
              </motion.button>
              <motion.button 
                className="bulk-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Catalog
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="bulk-supply-image"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bulk-image-wrapper">
              <img src={productsHeroImage} alt="Bulk Supply" />
              <div className="bulk-image-badge">
                <span className="badge-text">30%</span>
                <span className="badge-subtext">Bulk Savings</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Products
