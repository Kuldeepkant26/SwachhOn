import { useEffect } from 'react';

const SEOHead = ({ 
  title = "SwachhOn - Professional Bulk Cleaning Solutions",
  description = "SwachhOn offers premium quality cleaning products, industrial cleaning solutions, and commercial cleaning equipment. Get bulk cleaning supplies for businesses across India.",
  keywords = "SwachhOn, cleaning products, industrial cleaning, commercial cleaning, bulk cleaning supplies",
  url = "https://swachhon.com/",
  image = "https://swachhon.com/public/SwachhOn_icon.png",
  type = "website",
  structuredData = null
}) => {
  
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', url);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:type', type);
    
    // Update Twitter tags
    updateMetaTag('property', 'twitter:title', title);
    updateMetaTag('property', 'twitter:description', description);
    updateMetaTag('property', 'twitter:url', url);
    updateMetaTag('property', 'twitter:image', image);
    
    // Update canonical URL
    updateCanonicalURL(url);
    
    // Add structured data if provided
    if (structuredData) {
      addStructuredData(structuredData);
    }
    
  }, [title, description, keywords, url, image, type, structuredData]);

  const updateMetaTag = (attribute, value, content) => {
    let element = document.querySelector(`meta[${attribute}="${value}"]`);
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attribute, value);
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  };

  const updateCanonicalURL = (url) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  };

  const addStructuredData = (data) => {
    // Remove existing structured data script for this page
    const existingScript = document.querySelector('script[data-page-structured-data]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page-structured-data', 'true');
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  return null; // This component doesn't render anything
};

export default SEOHead;
