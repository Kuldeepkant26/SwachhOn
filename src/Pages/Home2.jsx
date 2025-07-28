import React from 'react';
import '../Css/Home2.css';

function Home2() {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "99%", label: "Quality Assured" },
    { number: "24/7", label: "Support" }
  ];

  const features = [
    {
      title: "Industrial Solutions",
      description: "Specialized cleaning products for heavy-duty industrial applications with superior performance."
    },
    {
      title: "Commercial Services", 
      description: "Professional cleaning solutions for offices, retail spaces and commercial establishments."
    },
    {
      title: "Bulk Supply",
      description: "Large quantity orders with competitive pricing, fast delivery and reliable supply chain."
    }
  ];

  const products = [
    {
      title: "Industrial Degreasers",
      category: "Heavy Duty",
      features: ["High Performance", "Eco-Friendly", "Cost Effective"],
      price: "₹299/L"
    },
    {
      title: "Floor Cleaners",
      category: "Commercial", 
      features: ["Non-Slip Formula", "Quick Dry", "Pleasant Fragrance"],
      price: "₹199/L"
    },
    {
      title: "Sanitizers",
      category: "Healthcare",
      features: ["99.9% Effective", "Alcohol-Based", "FDA Approved"],
      price: "₹149/L"
    },
    {
      title: "Glass Cleaners",
      category: "Multipurpose",
      features: ["Streak-Free", "Ammonia-Free", "Professional Grade"],
      price: "₹179/L"
    }
  ];

  return (
    <div className="home2">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              Professional Cleaning Solutions
            </div>
            <h1 className="hero-title">
              Premium <span className="text-accent">Cleaning Products</span> for Every Industry
            </h1>
            <p className="hero-description">
              SwachhOn delivers high-quality bulk cleaning products and services to businesses across India. 
              From industrial facilities to commercial spaces, we provide reliable, eco-friendly solutions 
              that meet the highest quality standards.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">
                Get Quote
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </button>
              <button className="btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Now
              </button>
            </div>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose SwachhOn</h2>
            <p className="section-subtitle">
              Trusted by leading businesses for reliable, professional cleaning solutions
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <div className="icon-placeholder"></div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Premium cleaning solutions designed for professional use
            </p>
          </div>
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-header">
                  <div className="product-category">{product.category}</div>
                  <div className="product-price">{product.price}</div>
                </div>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-features">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <button className="product-btn">Add to Quote</button>
              </div>
            ))}
          </div>
          <div className="products-footer">
            <button className="btn-outline">
              Explore More Products
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12,5 19,12 12,19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Contact us today for a customized quote on bulk cleaning solutions for your business
            </p>
            <div className="cta-actions">
              <button className="btn-primary">Request Quote</button>
              <button className="btn-ghost">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home2;
