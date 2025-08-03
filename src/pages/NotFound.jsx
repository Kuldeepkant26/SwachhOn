import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

const NotFound = () => {
  return (
    <div className="not-found-page min-h-screen flex items-center justify-center bg-gray-50">
      <SEOHead 
        title="Page Not Found | SwachhOn - Professional Cleaning Solutions"
        description="The page you're looking for doesn't exist. Explore SwachhOn's professional cleaning products and solutions for commercial and industrial use."
        url="https://swachhon.com/404"
      />
      
      <div className="text-center max-w-lg mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-green-600">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist. Let's get you back to our cleaning solutions.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            Back to Home
          </Link>
          
          <div className="flex justify-center space-x-4 mt-6">
            <Link 
              to="/products" 
              className="text-green-600 hover:text-green-700 font-medium"
            >
              View Products
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              to="/about" 
              className="text-green-600 hover:text-green-700 font-medium"
            >
              About Us
            </Link>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Looking for Cleaning Products?
          </h3>
          <p className="text-gray-600 mb-4">
            Explore our range of professional cleaning solutions
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Floor Cleaners & Disinfectants</li>
            <li>• Industrial Cleaning Solutions</li>
            <li>• Commercial Cleaning Equipment</li>
            <li>• Bulk Cleaning Supplies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
