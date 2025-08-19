// API Configuration
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    SIGNUP: `${API_BASE_URL}/auth/signup`,
  }
};

// Helper function to get the base API URL
export const getApiBaseUrl = () => API_BASE_URL;

// Helper function to build API URLs
export const buildApiUrl = (endpoint) => `${API_BASE_URL}${endpoint}`;

export default {
  API_ENDPOINTS,
  getApiBaseUrl,
  buildApiUrl
};
