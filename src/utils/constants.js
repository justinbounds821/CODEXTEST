const BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.saloanelemagic.ro';

export const API_CONFIG = {
  BASE_URL,
  ENDPOINTS: {
    CUSTOMER_LOGIN: '/api/customers/customerLogin',
    CUSTOMER_CHECK_LOGIN: '/api/customers/checkLogin',
    LOCATIONS: '/api/locations'
  },
  HEADERS: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

export const COLORS = {
  primary: '#ff5a5f',
  secondary: '#4a4a4a',
  success: '#4caf50',
  error: '#f44336',
  warning: '#ff9800',
  background: '#ffffff',
  text: '#333333',
  textSecondary: '#777777',
  border: '#e0e0e0'
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};
