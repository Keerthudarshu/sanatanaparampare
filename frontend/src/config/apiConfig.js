/**
 * Centralized API configuration for the frontend.
 * This handles environment variables and provides fallbacks to ensure
 * the application can always reach the backend.
 */

// Supported prefixes are defined in vite.config.mjs (VITE_ and REACT_APP_)
const API_BASE = import.meta.env.VITE_API_URL ||
    import.meta.env.REACT_APP_API_URL ||
    'https://56.228.81.193';

// Ensure there is no trailing slash in the API_BASE
const cleanApiBase = API_BASE.endsWith('/') ? API_BASE.slice(0, -1) : API_BASE;

const BASE_URL = "http://56.228.81.193:8080/api";
export default BASE_URL;
