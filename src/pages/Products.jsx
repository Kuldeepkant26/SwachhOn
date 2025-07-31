import React, { useState, useEffect, useMemo } from 'react'
import '../css/Products.css'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState('grid')
  const [isLoading, setIsLoading] = useState(true)

  // Comprehensive products array with more details
  const products = [
    {
      id: 1, name: 'Phenyl White', category: 'Floor Cleaners', 
      description: 'Premium white phenyl for spotless floor cleaning with fresh fragrance and antibacterial properties.',
      features: ['Antibacterial Protection', 'Long-lasting Fragrance', 'Floor-safe Formula', 'Stain Removal', 'Quick Drying'],
      uses: ['Floor Cleaning', 'Bathroom Cleaning', 'Kitchen Floors', 'Office Spaces'],
      benefits: ['Kills 99.9% Germs', 'Non-toxic Formula', 'Eco-friendly', 'Cost Effective'],
      specifications: { volume: '500ml, 1L, 5L', ph: '7-8', concentration: 'Ready to use' },
      price: 'Starting from ₹50', popular: true
    },
    {
      id: 2, name: 'Phenyl Black', category: 'Floor Cleaners',
      description: 'Heavy-duty black phenyl for tough stains, industrial cleaning and deep sanitization.',
      features: ['Extra Strength Formula', 'Industrial Grade', 'Stain Removal', 'Deep Cleaning', 'Long Protection'],
      uses: ['Industrial Floors', 'Heavy Stains', 'Commercial Spaces', 'Tough Cleaning'],
      benefits: ['Maximum Strength', 'Long-lasting Effect', 'Professional Grade', 'Versatile Use'],
      specifications: { volume: '1L, 5L, 20L', ph: '8-9', concentration: 'Concentrated' },
      price: 'Starting from ₹75', popular: false
    },
    {
      id: 3, name: 'Harpick', category: 'Toilet Cleaners',
      description: 'Advanced toilet bowl cleaner with powerful germ-killing formula and fresh fragrance.',
      features: ['Germ Protection', 'Lime Scale Removal', 'Fresh Mint Scent', 'Thick Formula', 'Easy Application'],
      uses: ['Toilet Bowls', 'Urinals', 'Bathroom Tiles', 'Sink Cleaning'],
      benefits: ['10X Germ Kill', 'Removes Tough Stains', 'Fresh Fragrance', 'Easy to Use'],
      specifications: { volume: '200ml, 500ml, 1L', ph: '2-3', concentration: 'Ready to use' },
      price: 'Starting from ₹65', popular: true
    },
    {
      id: 4, name: 'Calpro', category: 'Specialty Cleaners',
      description: 'Multi-purpose cleaning solution for various surfaces with advanced cleaning technology.',
      features: ['Multi-surface Safe', 'Quick Action', 'Safe Formula', 'Residue Free', 'Pleasant Fragrance'],
      uses: ['Glass Cleaning', 'Metal Surfaces', 'Plastic Items', 'Electronic Devices'],
      benefits: ['Streak-free Cleaning', 'Safe on All Surfaces', 'Quick Drying', 'No Residue'],
      specifications: { volume: '250ml, 500ml', ph: '6-7', concentration: 'Ready to use' },
      price: 'Starting from ₹85', popular: false
    },
    {
      id: 5, name: 'Body Soap Life Boy', category: 'Personal Care',
      description: 'Antibacterial body soap with natural ingredients for complete family protection.',
      features: ['10X Germ Protection', 'Natural Ingredients', 'Moisturizing Formula', 'Family Size', 'Dermatologically Tested'],
      uses: ['Daily Bath', 'Hand Washing', 'Body Cleansing', 'Family Use'],
      benefits: ['Complete Protection', 'Soft Skin', 'Natural Care', 'Long-lasting'],
      specifications: { weight: '75g, 125g, 150g', type: 'Bar Soap', ingredients: 'Natural extracts' },
      price: 'Starting from ₹25', popular: true
    },
    {
      id: 6, name: 'Surf Excel', category: 'Laundry',
      description: 'Premium laundry detergent with advanced stain removal technology for bright clean clothes.',
      features: ['Advanced Stain Removal', 'Color Protection', 'Fresh Fragrance', 'Fabric Care', 'Easy Rinse'],
      uses: ['Machine Wash', 'Hand Wash', 'Tough Stains', 'Daily Laundry'],
      benefits: ['Removes 100 Stains', 'Keeps Colors Bright', 'Gentle on Fabric', 'Long-lasting Freshness'],
      specifications: { weight: '500g, 1kg, 4kg', type: 'Powder/Liquid', formula: 'Concentrated' },
      price: 'Starting from ₹60', popular: true
    },
    {
      id: 7, name: 'Hand Wash Liquid', category: 'Personal Care',
      description: 'Gentle antibacterial hand wash with moisturizing properties and pleasant fragrance.',
      features: ['Antibacterial Action', 'Moisturizing Formula', 'Gentle on Skin', 'Rich Lather', 'Pump Dispenser'],
      uses: ['Hand Cleaning', 'Kitchen Use', 'Bathroom', 'Office Spaces'],
      benefits: ['Soft Hands', 'Germ Protection', 'No Dryness', 'Easy Dispensing'],
      specifications: { volume: '200ml, 500ml, 1L', ph: '5.5-6.5', type: 'Liquid' },
      price: 'Starting from ₹45', popular: false
    },
    {
      id: 8, name: 'Naphthalene Balls', category: 'Pest Control',
      description: 'Effective mothballs for wardrobe protection against insects and moths.',
      features: ['Moth Protection', 'Long-lasting Effect', 'Wardrobe Fresh', 'Easy to Use', 'Safe Formula'],
      uses: ['Wardrobes', 'Storage Areas', 'Closets', 'Drawers'],
      benefits: ['Protects Clothes', 'Prevents Damage', 'Fresh Smell', 'Long Protection'],
      specifications: { weight: '100g, 200g', type: 'Balls', duration: '3-6 months' },
      price: 'Starting from ₹30', popular: false
    },
    {
      id: 9, name: 'Microfiber Mop', category: 'Cleaning Tools',
      description: 'High-quality microfiber mop for efficient and streak-free floor cleaning.',
      features: ['Microfiber Technology', 'Easy Rinse', 'Scratch-free', 'Durable Build', '360° Cleaning'],
      uses: ['Floor Mopping', 'Wet Cleaning', 'Dry Dusting', 'All Floor Types'],
      benefits: ['Superior Absorption', 'Easy Maintenance', 'Long-lasting', 'Effective Cleaning'],
      specifications: { material: 'Microfiber', size: 'Standard', handle: 'Adjustable' },
      price: 'Starting from ₹150', popular: true
    },
    {
      id: 10, name: 'Premium Dustbin', category: 'Cleaning Tools',
      description: 'Durable waste bins with odor control and easy cleaning features.',
      features: ['Odor Control', 'Easy Cleaning', 'Durable Plastic', 'Various Sizes', 'Secure Lid'],
      uses: ['Home Use', 'Office Spaces', 'Kitchen Waste', 'Bathroom'],
      benefits: ['Hygienic Disposal', 'Easy Maintenance', 'Durable Build', 'Space Efficient'],
      specifications: { capacity: '5L, 10L, 20L', material: 'High-grade Plastic', type: 'Pedal/Manual' },
      price: 'Starting from ₹200', popular: false
    },
    {
      id: 11, name: 'Viper Insecticide', category: 'Pest Control',
      description: 'Fast-acting pest control solution for various insects with long-lasting protection.',
      features: ['Fast Action', 'Long Protection', 'Safe for Home', 'Multi-insect Control', 'Easy Spray'],
      uses: ['Flying Insects', 'Crawling Insects', 'Home Protection', 'Garden Use'],
      benefits: ['Immediate Results', 'Safe Formula', 'Long-lasting', 'Easy Application'],
      specifications: { volume: '400ml, 600ml', type: 'Aerosol Spray', active: 'Pyrethrin' },
      price: 'Starting from ₹120', popular: true
    },
    {
      id: 12, name: 'Coconut Broom', category: 'Cleaning Tools',
      description: 'Traditional eco-friendly coconut broom made from natural coconut fiber.',
      features: ['100% Natural', 'Eco-friendly', 'Durable Bristles', 'Traditional Design', 'Biodegradable'],
      uses: ['Floor Sweeping', 'Outdoor Cleaning', 'Garden Cleaning', 'Traditional Cleaning'],
      benefits: ['Environment Friendly', 'Natural Material', 'Cost Effective', 'Long-lasting'],
      specifications: { material: 'Coconut Fiber', length: '4ft, 5ft', handle: 'Wooden' },
      price: 'Starting from ₹80', popular: false
    },
    {
      id: 13, name: 'Multi-purpose Bucket', category: 'Cleaning Tools',
      description: 'Versatile cleaning buckets with comfortable grip handles and measurement marks.',
      features: ['Multiple Sizes', 'Comfortable Grip', 'Measurement Marks', 'Durable Build', 'Stack-able Design'],
      uses: ['Water Storage', 'Cleaning Tasks', 'Mopping', 'Washing'],
      benefits: ['Versatile Use', 'Easy Handling', 'Space Saving', 'Durable Material'],
      specifications: { capacity: '5L, 10L, 15L, 20L', material: 'Virgin Plastic', color: 'Multiple' },
      price: 'Starting from ₹100', popular: true
    },
    {
      id: 14, name: 'Maggi Noodles', category: 'Food Items',
      description: 'Quick and delicious instant noodles with authentic masala flavor.',
      features: ['2-minute Cooking', 'Authentic Taste', 'No Added MSG', 'Family Favorite', 'Easy Preparation'],
      uses: ['Quick Meal', 'Snack Time', 'Emergency Food', 'Kids Meal'],
      benefits: ['Quick Preparation', 'Tasty Meal', 'Convenient', 'Affordable'],
      specifications: { weight: '70g per pack', flavors: 'Masala, Chicken, Vegetable', type: 'Instant Noodles' },
      price: 'Starting from ₹15', popular: true
    },
    {
      id: 15, name: 'Black Phenyl (Commercial)', category: 'Floor Cleaners',
      description: 'Large pack premium black phenyl specially formulated for commercial and industrial use.',
      features: ['Commercial Grade', 'Bulk Pack', 'Economic Value', 'High Concentration', 'Professional Formula'],
      uses: ['Commercial Cleaning', 'Industrial Floors', 'Large Areas', 'Professional Use'],
      benefits: ['Cost Effective', 'Professional Results', 'Long-lasting', 'Bulk Savings'],
      specifications: { volume: '5L, 20L, 50L', concentration: '1:10 Dilution', type: 'Concentrated' },
      price: 'Starting from ₹300', popular: false
    },
    {
      id: 16, name: 'Phenyl Mini Pack', category: 'Floor Cleaners',
      description: 'Convenient small pack phenyl perfect for home use and travel.',
      features: ['Compact Size', 'Travel Friendly', 'Home Perfect', 'Easy Storage', 'Value Pack'],
      uses: ['Home Cleaning', 'Small Areas', 'Travel Use', 'Trial Pack'],
      benefits: ['Space Saving', 'Convenient', 'Affordable', 'Perfect Size'],
      specifications: { volume: '100ml, 250ml', type: 'Ready to use', packaging: 'Bottle' },
      price: 'Starting from ₹25', popular: true
    },
    {
      id: 17, name: 'Cleaning Scraper', category: 'Cleaning Tools',
      description: 'Multi-purpose scraper tool for removing tough stains and adhesive residues.',
      features: ['Sharp Edge', 'Ergonomic Handle', 'Multi-use Tool', 'Durable Build', 'Safe Design'],
      uses: ['Sticker Removal', 'Paint Scraping', 'Adhesive Cleaning', 'Surface Preparation'],
      benefits: ['Versatile Tool', 'Easy Handling', 'Effective Results', 'Long-lasting'],
      specifications: { material: 'Stainless Steel', handle: 'Plastic Grip', blade: 'Replaceable' },
      price: 'Starting from ₹50', popular: false
    },
    {
      id: 18, name: 'Laundry Bar Soap', category: 'Laundry',
      description: 'Traditional laundry bar soap with natural ingredients for hand washing clothes.',
      features: ['Natural Ingredients', 'Hand Wash Safe', 'Tough Stain Removal', 'Fabric Safe', 'Economical'],
      uses: ['Hand Washing', 'Pre-treatment', 'Delicate Fabrics', 'Travel Laundry'],
      benefits: ['Gentle on Hands', 'Effective Cleaning', 'Natural Formula', 'Cost Effective'],
      specifications: { weight: '200g, 500g', type: 'Bar Soap', ingredients: 'Natural oils' },
      price: 'Starting from ₹35', popular: false
    },
    {
      id: 19, name: 'Urinal Deodorizer Cubes', category: 'Specialty Cleaners',
      description: 'Long-lasting deodorizer cubes specially designed for urinal cleaning and freshening.',
      features: ['Long-lasting Action', 'Continuous Freshening', 'Hygiene Protection', 'Easy Application', 'Pleasant Fragrance'],
      uses: ['Urinal Cleaning', 'Odor Control', 'Bathroom Freshening', 'Commercial Toilets'],
      benefits: ['24/7 Freshness', 'Odor Elimination', 'Easy Maintenance', 'Hygienic Solution'],
      specifications: { weight: '100g per cube', duration: '1-2 weeks', fragrance: 'Multiple options' },
      price: 'Starting from ₹40', popular: false
    },
    {
      id: 20, name: 'Heavy Duty Scrubber', category: 'Cleaning Tools',
      description: 'Industrial-grade scrubbing pad for tough cleaning tasks and heavy-duty applications.',
      features: ['Extra Tough', 'Non-scratch Design', 'Long-lasting', 'Ergonomic Grip', 'Multi-surface Safe'],
      uses: ['Heavy Cleaning', 'Industrial Use', 'Kitchen Cleaning', 'Tough Stains'],
      benefits: ['Maximum Cleaning Power', 'Durable Build', 'Safe on Surfaces', 'Professional Grade'],
      specifications: { size: '15cm x 10cm', material: 'Abrasive Foam', thickness: '2cm' },
      price: 'Starting from ₹25', popular: true
    },
    {
      id: 21, name: 'Small Scrubber', category: 'Cleaning Tools',
      description: 'Compact scrubbing pad perfect for delicate surfaces and detailed cleaning tasks.',
      features: ['Gentle Cleaning', 'Compact Size', 'Easy Handling', 'Multi-surface Safe', 'Non-abrasive'],
      uses: ['Delicate Surfaces', 'Kitchen Utensils', 'Glass Cleaning', 'Detail Work'],
      benefits: ['Gentle on Surfaces', 'Easy to Use', 'Precise Cleaning', 'Versatile'],
      specifications: { size: '8cm x 6cm', material: 'Soft Foam', thickness: '1cm' },
      price: 'Starting from ₹15', popular: false
    },
    {
      id: 22, name: 'Toilet Brush', category: 'Cleaning Tools',
      description: 'Essential toilet brush with ergonomic handle for thorough bathroom cleaning.',
      features: ['360° Cleaning', 'Ergonomic Handle', 'Durable Bristles', 'Easy Storage', 'Hygienic Design'],
      uses: ['Toilet Cleaning', 'Bathroom Hygiene', 'Bowl Scrubbing', 'Deep Cleaning'],
      benefits: ['Complete Cleaning', 'Easy Grip', 'Long-lasting', 'Hygienic'],
      specifications: { material: 'Plastic Handle + Nylon Bristles', length: '40cm', head: 'Replaceable' },
      price: 'Starting from ₹45', popular: true
    },
    {
      id: 23, name: 'Room Refresher', category: 'Air Care',
      description: 'Instant room freshener spray for creating pleasant and lasting fragrance.',
      features: ['Instant Freshness', 'Long-lasting Fragrance', 'Multiple Scents', 'Easy Spray', 'Non-toxic'],
      uses: ['Room Freshening', 'Odor Elimination', 'Car Freshening', 'Office Spaces'],
      benefits: ['Immediate Results', 'Pleasant Aroma', 'Safe Formula', 'Convenient'],
      specifications: { volume: '300ml, 500ml', type: 'Aerosol Spray', variants: 'Lavender, Rose, Jasmine' },
      price: 'Starting from ₹95', popular: true
    },
    {
      id: 24, name: 'Air Cleaner', category: 'Air Care',
      description: 'Advanced air purifying solution for eliminating odors and purifying indoor air.',
      features: ['Air Purification', 'Odor Elimination', 'Natural Formula', 'Long-lasting Effect', 'Safe for Home'],
      uses: ['Air Purification', 'Smoke Elimination', 'Pet Odors', 'Kitchen Smells'],
      benefits: ['Clean Air', 'Odor Control', 'Natural Ingredients', 'Family Safe'],
      specifications: { volume: '250ml, 500ml', type: 'Spray/Gel', duration: '2-4 weeks' },
      price: 'Starting from ₹120', popular: false
    },
    {
      id: 25, name: 'Vim Dishwash', category: 'Dishwashing',
      description: 'Powerful dishwashing liquid that cuts through grease and leaves dishes sparkling clean.',
      features: ['Grease Cutting Power', 'Gentle on Hands', 'Lemon Fresh', 'Concentrated Formula', 'Easy Rinse'],
      uses: ['Dishwashing', 'Utensil Cleaning', 'Grease Removal', 'Kitchen Cleaning'],
      benefits: ['Spotless Dishes', 'Gentle Formula', 'Fresh Scent', 'Economic Use'],
      specifications: { volume: '250ml, 500ml, 1L', ph: '6-7', concentration: 'Concentrated' },
      price: 'Starting from ₹35', popular: true
    },
    {
      id: 26, name: 'Acid Cleaner', category: 'Specialty Cleaners',
      description: 'Industrial-strength acid cleaner for removing tough stains and mineral deposits.',
      features: ['Heavy Duty Cleaning', 'Stain Removal', 'Mineral Deposit Removal', 'Professional Grade', 'Fast Action'],
      uses: ['Toilet Cleaning', 'Tile Cleaning', 'Rust Removal', 'Industrial Cleaning'],
      benefits: ['Maximum Strength', 'Effective Results', 'Professional Use', 'Quick Action'],
      specifications: { volume: '500ml, 1L', concentration: 'Dilute before use', type: 'Liquid' },
      price: 'Starting from ₹65', popular: false
    },
    {
      id: 27, name: 'Small Dustbin', category: 'Cleaning Tools',
      description: 'Compact dustbin perfect for small spaces like bathrooms and bedrooms.',
      features: ['Compact Design', 'Space Saving', 'Easy Emptying', 'Odor Control', 'Durable Build'],
      uses: ['Small Spaces', 'Bathroom Waste', 'Bedroom Use', 'Office Desk'],
      benefits: ['Space Efficient', 'Easy Maintenance', 'Hygienic', 'Convenient Size'],
      specifications: { capacity: '3L, 5L', material: 'High-grade Plastic', type: 'Manual/Pedal' },
      price: 'Starting from ₹85', popular: true
    },
    {
      id: 28, name: 'Grass Broom', category: 'Cleaning Tools',
      description: 'Traditional grass broom made from natural grass for outdoor and heavy-duty cleaning.',
      features: ['Natural Material', 'Eco-friendly', 'Outdoor Use', 'Durable Bristles', 'Traditional Design'],
      uses: ['Outdoor Sweeping', 'Garden Cleaning', 'Courtyard Cleaning', 'Heavy Debris'],
      benefits: ['Environment Friendly', 'Strong Bristles', 'Outdoor Durability', 'Natural'],
      specifications: { material: 'Natural Grass', length: '4ft, 4.5ft', handle: 'Wooden' },
      price: 'Starting from ₹70', popular: false
    },
    {
      id: 29, name: 'Small Viper', category: 'Pest Control',
      description: 'Compact insecticide spray for targeted pest control in small areas.',
      features: ['Compact Size', 'Targeted Action', 'Quick Results', 'Easy Application', 'Home Safe'],
      uses: ['Small Areas', 'Targeted Spraying', 'Indoor Use', 'Spot Treatment'],
      benefits: ['Precise Application', 'Effective Control', 'Convenient Size', 'Quick Action'],
      specifications: { volume: '200ml, 300ml', type: 'Aerosol Spray', active: 'Pyrethrin' },
      price: 'Starting from ₹85', popular: false
    },
    {
      id: 30, name: 'Tissue Paper', category: 'Paper Products',
      description: 'Soft and absorbent tissue paper for daily use and personal hygiene.',
      features: ['Soft Texture', 'High Absorption', 'Multi-layered', 'Hygienic', 'Convenient Pack'],
      uses: ['Personal Hygiene', 'Cleaning', 'Kitchen Use', 'General Purpose'],
      benefits: ['Soft Touch', 'Absorbent', 'Hygienic Use', 'Multi-purpose'],
      specifications: { sheets: '100, 200 sheets', layers: '2-ply, 3-ply', size: 'Standard' },
      price: 'Starting from ₹25', popular: true
    },
    {
      id: 31, name: 'Toilet Paper Roll', category: 'Paper Products',
      description: 'Premium quality toilet paper rolls available in bulk packs for family use.',
      features: ['Soft & Strong', 'Multi-layered', 'Bulk Pack', 'Value for Money', 'Hygienic'],
      uses: ['Personal Hygiene', 'Bathroom Use', 'Family Use', 'Commercial Use'],
      benefits: ['Comfortable Use', 'Economic Pack', 'Reliable Quality', 'Family Size'],
      specifications: { sheets: '100-200 per roll', layers: '2-ply', pack: '4, 8, 12 rolls' },
      price: 'Starting from ₹150', popular: true
    },
    {
      id: 32, name: 'Liquid Detergent', category: 'Laundry',
      description: 'Multi-purpose liquid detergent for effective cleaning of various surfaces.',
      features: ['Multi-purpose Use', 'Concentrated Formula', 'Easy Pour', 'Pleasant Fragrance', 'Effective Cleaning'],
      uses: ['Floor Cleaning', 'Surface Cleaning', 'Multi-purpose Cleaning', 'General Cleaning'],
      benefits: ['Versatile Use', 'Easy Application', 'Effective Results', 'Pleasant Scent'],
      specifications: { volume: '500ml, 1L, 2L', ph: '7-8', type: 'Liquid concentrate' },
      price: 'Starting from ₹75', popular: false
    },
    {
      id: 33, name: 'Detergent Powder', category: 'Laundry',
      description: 'Premium detergent powder with advanced cleaning technology for bright clothes.',
      features: ['Advanced Formula', 'Stain Removal', 'Color Protection', 'Fresh Fragrance', 'Machine Safe'],
      uses: ['Machine Wash', 'Hand Wash', 'Tough Stains', 'Daily Laundry'],
      benefits: ['Deep Cleaning', 'Fabric Care', 'Long-lasting Freshness', 'Color Bright'],
      specifications: { weight: '500g, 1kg, 3kg', formula: 'Enzyme-based', type: 'Powder' },
      price: 'Starting from ₹55', popular: true
    },
    {
      id: 34, name: 'Mop Cloth Refill', category: 'Cleaning Tools',
      description: 'High-quality replacement mop cloth with superior absorption and durability.',
      features: ['High Absorption', 'Machine Washable', 'Durable Fabric', 'Easy Attachment', 'Reusable'],
      uses: ['Floor Mopping', 'Wet Cleaning', 'Maintenance', 'Replacement'],
      benefits: ['Superior Absorption', 'Long-lasting', 'Easy Care', 'Cost Effective'],
      specifications: { material: 'Microfiber/Cotton', size: 'Standard fit', washable: 'Machine safe' },
      price: 'Starting from ₹35', popular: false
    }
  ];

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(products.map(product => product.category))];
    return [{ name: 'All Products', value: 'all', count: products.length }, 
            ...cats.map(cat => ({ 
              name: cat, 
              value: cat.toLowerCase().replace(/\s+/g, '-'), 
              count: products.filter(p => p.category === cat).length 
            }))];
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryName = categories.find(cat => cat.value === selectedCategory)?.name;
      filtered = filtered.filter(product => product.category === categoryName);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'popular':
          return b.popular - a.popular;
        default:
          return 0;
      }
    });
    
    return filtered;
  }, [products, selectedCategory, searchTerm, sortBy, categories]);

  // Get related products (same category, excluding current product)
  const getRelatedProducts = (currentProduct) => {
    return products
      .filter(product => 
        product.category === currentProduct.category && 
        product.id !== currentProduct.id
      )
      .slice(0, 4);
  };

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
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-badge">Premium Quality</div>
          <h1 className="hero-title">
            Our <span className="gradient-text">Product Range</span>
          </h1>
          <p className="hero-subtitle">
            Discover our comprehensive collection of premium cleaning solutions, 
            personal care products, and household essentials designed for modern living.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{products.length}+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{categories.length - 1}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="search-filter-section">
        <div className="search-filter-container">
          <div className="search-bar">
            <div className="search-input-wrapper">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search products, features, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              )}
            </div>
          </div>
          
          <div className="filter-controls">
            <div className="sort-control">
              <label htmlFor="sort-select">Sort by:</label>
              <select 
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="name">Name</option>
                <option value="category">Category</option>
                <option value="popular">Popular First</option>
              </select>
            </div>
            
            <div className="view-toggle">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6"/>
                  <line x1="8" y1="12" x2="21" y2="12"/>
                  <line x1="8" y1="18" x2="21" y2="18"/>
                  <line x1="3" y1="6" x2="3.01" y2="6"/>
                  <line x1="3" y1="12" x2="3.01" y2="12"/>
                  <line x1="3" y1="18" x2="3.01" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="categories-container">
          <div className="categories-scroll">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`category-btn ${selectedCategory === category.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="products-container">
          <div className="section-header">
            <h2 className="section-title">
              {selectedCategory === 'all' ? 'All Products' : 
               categories.find(cat => cat.value === selectedCategory)?.name || 'Products'}
            </h2>
            <div className="results-info">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              {searchTerm && ` for "${searchTerm}"`}
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className={`products-grid ${viewMode}`}>
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className={`product-card ${product.popular ? 'popular' : ''}`}
                  onClick={() => setSelectedProduct(product)}
                >
                  {product.popular && <div className="popular-badge">Popular</div>}
                  
                  <div className="product-header">
                    <div className="category-badge">{product.category}</div>
                    <div className="product-price">{product.price}</div>
                  </div>
                  
                  <div className="product-content">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    
                    <div className="product-features">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="feature-tag">{feature}</span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="more-features">+{product.features.length - 3} more</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="product-footer">
                    <button className="view-details-btn">
                      View Details
                      <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal-blur"></div>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-content">
                <div className="product-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <div className="product-info">
                  <h2 className="modal-title">{selectedProduct.name}</h2>
                  <div className="modal-meta">
                    <span className="modal-category">{selectedProduct.category}</span>
                    <span className="modal-price">{selectedProduct.price}</span>
                  </div>
                </div>
              </div>
              <button 
                className="modal-close"
                onClick={() => setSelectedProduct(null)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <div className="product-details">
                <div className="detail-section">
                  <h3 className="detail-title">Description</h3>
                  <p className="detail-content">{selectedProduct.description}</p>
                </div>

                <div className="detail-section">
                  <h3 className="detail-title">Key Features</h3>
                  <div className="features-grid">
                    {selectedProduct.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <svg className="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="detail-section">
                  <h3 className="detail-title">Common Uses</h3>
                  <div className="uses-list">
                    {selectedProduct.uses.map((use, index) => (
                      <span key={index} className="use-tag">{use}</span>
                    ))}
                  </div>
                </div>

                <div className="detail-section">
                  <h3 className="detail-title">Benefits</h3>
                  <div className="benefits-list">
                    {selectedProduct.benefits.map((benefit, index) => (
                      <div key={index} className="benefit-item">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="detail-section">
                  <h3 className="detail-title">Specifications</h3>
                  <div className="specs-grid">
                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Products */}
              {getRelatedProducts(selectedProduct).length > 0 && (
                <div className="related-products">
                  <h3 className="related-title">Related Products</h3>
                  <div className="related-grid">
                    {getRelatedProducts(selectedProduct).map((relatedProduct) => (
                      <div 
                        key={relatedProduct.id}
                        className="related-card"
                        onClick={() => setSelectedProduct(relatedProduct)}
                      >
                        <h4 className="related-name">{relatedProduct.name}</h4>
                        <p className="related-price">{relatedProduct.price}</p>
                        <div className="related-features">
                          {relatedProduct.features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="related-feature">{feature}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-actions">
                <button className="action-btn primary">
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                  Request Quote
                </button>
                <button className="action-btn secondary">
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Contact Us
                </button>
                <button className="action-btn tertiary">
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
