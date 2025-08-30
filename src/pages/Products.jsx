import React, { useState, useEffect } from 'react'
import SEOHead from '../components/SEOHead.jsx'
import '../css/Products.css'
import fenylImage from '../assets/fenyl.jpeg'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // New streamlined products array
  const products = [
    {
      id: 1,
      name: 'Toilet Paper',
      description: 'Premium quality toilet paper for daily hygiene needs. Soft, strong and absorbent.',
      image: 'https://media.istockphoto.com/id/499224059/photo/stack-of-white-tissue-paper-rolls.jpg?s=612x612&w=0&k=20&c=XbyIuH6U20OiPUUJoFVRj70y5YHdgyoHRS3VA4HMEKk=',
      price: '₹120'
    },
    {
      id: 2,
      name: 'Phenyl',
      description: 'Professional grade floor cleaner with antibacterial properties and fresh fragrance.',
      image: fenylImage,
      price: '₹85'
    },
    {
      id: 3,
      name: 'Naphthalene Balls',
      description: 'Effective pest control solution for wardrobes and storage areas.',
      image: 'https://m.media-amazon.com/images/I/91A+VhoVOOL._UF1000,1000_QL80_.jpg',
      price: '₹45'
    },
    {
      id: 4,
      name: 'Glass Cleaner',
      description: 'Streak-free glass cleaner for windows, mirrors and glass surfaces.',
      image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/glass-cleaner-blue-window-Ka5MvJA-600.jpg',
      price: '₹95'
    },
    {
      id: 5,
      name: 'Floor Cleaner',
      description: 'Multi-surface floor cleaner that removes dirt and leaves a pleasant fragrance.',
      image: 'https://static1.industrybuying.com/products/cleaning/cleaning-liquid-essentials/floor-cleaner/CLE.FLO.520723967_1744355431050.webp',
      price: '₹110'
    },
    {
      id: 6,
      name: 'Toilet Cleaner Liquid',
      description: 'Powerful toilet bowl cleaner that removes stains and kills germs effectively.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/YE/MN/BT/43237466/5-litre-liquid-toilet-cleaner-500x500.jpg',
      price: '₹75'
    },
    {
      id: 7,
      name: 'Dishwashing Liquid/Gel',
      description: 'Concentrated dishwashing liquid that cuts through grease and food residue.',
      image: 'https://static.toiimg.com/thumb/imgsize-26678,msid-94375025,width-375,height-210,resizemode-75/94375025.jpg',
      price: '₹65'
    },
    {
      id: 8,
      name: 'Hand Wash Liquid',
      description: 'Gentle antibacterial hand wash with moisturizing properties.',
      image: 'https://cdn-hdpdh.nitrocdn.com/GLCzYrmHglbxeYeEihoIBIFJWEIIjKfR/assets/images/optimized/rev-721af13/yeserchem.com/wp-content/uploads/2023/10/Hand_soap_liquid_with_different_color-1024x683.webp',
      price: '₹55'
    },
    {
      id: 9,
      name: 'Detergent Powder',
      description: 'High-quality laundry detergent powder for effective stain removal.',
      image: 'https://m.media-amazon.com/images/I/611YVgHi3LL._UF1000,1000_QL80_.jpg',
      price: '₹180'
    },
    {
      id: 10,
      name: 'Detergent Liquid',
      description: 'Liquid detergent for both hand wash and machine wash applications.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/12/368888459/UE/NP/CD/461372/liquid-detergent-concentrate-sush-l-high-foam-8x.png',
      price: '₹150'
    },
    {
      id: 11,
      name: 'Bleaching Powder',
      description: 'Industrial grade bleaching powder for disinfection and whitening.',
      image: 'https://images.meesho.com/images/products/458014519/fprp7_512.webp?width=512',
      price: '₹90'
    },
    {
      id: 12,
      name: 'Air Freshener Spray',
      description: 'Instant air freshener spray with long-lasting fragrance.',
      image: 'https://dm.cms.aldi.cx/is/image/prod1amer/product/jpg/scaleWidth/500/bef9e419-f39b-42be-936b-2f0b754b1a79/Gain%20Original%20Air%20Effects%20Air%20Freshener%20Spray%208.8%20fl%20oz',
      price: '₹125'
    },
    {
      id: 13,
      name: 'Room Freshener Gel/Cubes',
      description: 'Long-lasting room freshener in gel and cube form for continuous fragrance.',
      image: 'https://absorbia.in/cdn/shop/products/51FoIykwEhL_09078c0b-2bd5-47e3-879b-dfe21984aa87.jpg?v=1688770972',
      price: '₹80'
    },
    {
      id: 14,
      name: 'Scrub Pads / Steel Wool',
      description: 'Heavy-duty scrub pads and steel wool for tough cleaning tasks.',
      image: 'https://www.jiomart.com/images/product/original/rvc6r8kds8/tamsa-prime-sponge-scrub-pad-sponge-pads-sponge-and-green-scrubber-scrub-pads-pack-of-6-product-images-orvc6r8kds8-p606950367-0-202401200229.png?im=Resize=(420,420)',
      price: '₹35'
    },
    {
      id: 15,
      name: 'Garbage Bags',
      description: 'Strong and durable garbage bags available in various sizes.',
      image: 'https://buysupplies.in/cdn/shop/products/GarbageBagss_1200x1200.jpg?v=1618388639',
      price: '₹140'
    }
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Close modal on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProduct) {
        setSelectedProduct(null);
      }
    };
    
    if (selectedProduct) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  if (isLoading) {
    return (
      <div className="products-loading">
        <div className="loading-spinner"></div>
        <p>Loading Premium Products...</p>
      </div>
    );
  }

  return (
    <div className="products-page">
      <SEOHead 
        title="SwachhOn Products - Professional Cleaning Solutions"
        description="Browse our comprehensive range of professional cleaning products including floor cleaners, toilet cleaners, disinfectants, and household essentials."
        keywords="SwachhOn products, cleaning products, phenyl, toilet cleaner, floor cleaner, dishwashing liquid, detergent, air freshener"
        url="https://swachhon.com/products"
      />
      
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Premium Products</h1>
          <p className="hero-subtitle">
            Discover our comprehensive collection of high-quality cleaning solutions and household essentials.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-wrapper">
            <div className="search-input-container">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="products-container">
          {filteredProducts.length === 0 && searchTerm ? (
            <div className="no-results">
              <h3>No products found</h3>
              <p>Try searching for something else or clear your search.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                  />
                </div>
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </section>      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedProduct.name}</h2>
              <button 
                className="modal-close"
                onClick={() => setSelectedProduct(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-image-container">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="modal-image"
                />
              </div>
              <div className="modal-content">
                <div className="modal-description">
                  <h3>Product Description</h3>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className="modal-price">
                  <span className="price-label">Price:</span>
                  <span className="price-value">{selectedProduct.price}</span>
                </div>
                <div className="modal-actions">
                  <button className="btn-primary">Add to Cart</button>
                  <button className="btn-secondary">Contact for Bulk Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
