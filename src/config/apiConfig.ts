/**
 * API Configuration
 * 
 * Central configuration for all API endpoints with environment support
 */

// Get environment from env vars, default to development
const environment = import.meta.env.REACT_APP_ENVIRONMENT || 'development';

// Environment-specific configurations
const environments = {
  development: {
    hyperdriveBaseUrl: 'https://skq-cx-hyperdrive-bff-scus-api.azurewebsites.net',
    hyundaiBaseUrl: 'http://localhost:8000/api',
  },
  qa: {
    hyperdriveBaseUrl: 'https://qa-hyperdriveapi.crash-cloud.com', 
    hyundaiBaseUrl: 'https://qa-hyundai.crashchampions.com/api',
  },
  production: {
    hyperdriveBaseUrl: 'https://hyperdriveapi.crash-cloud.com',
    hyundaiBaseUrl: 'https://hmawarranty.crashchampions.com/api',
  }
} as const;

// Get current environment config
const currentConfig = environments[environment as keyof typeof environments] || environments.development;

// Allow override via environment variables
export const apiConfig = {
  // HyperDrive API Configuration
  hyperdriveBaseUrl: import.meta.env.REACT_APP_HYPERDRIVE_BASE_URL || currentConfig.hyperdriveBaseUrl,
  
  // Your Laravel API Configuration  
  hyundaiBaseUrl: import.meta.env.REACT_APP_HYUNDAI_BASE_URL || currentConfig.hyundaiBaseUrl,
  
  // Environment info
  environment,
  
  // API Endpoints
  endpoints: {
    // HyperDrive endpoints (direct to HyperDrive API)
    opportunities: '/opportunities',
    appointment: (opportunityId: string) => `/opportunities/${opportunityId}/appointment`,
    
    // Your Laravel endpoints (no leading slash since base URL includes /api)
    sendEmails: 'send-emails',
    hyperdriveAuthenticate: 'hyperdrive/authenticate',
    hyperdriveCreateOpportunity: 'hyperdrive/create-opportunity',
  },
  
  // Default headers for HyperDrive API (matching Laravel working format)
  hyperdriveHeaders: {
    'Content-Type': 'application/json',
    'Accept': 'application/json, application/problem+json', // Match Laravel format
    'Cache-Control': 'no-cache',
    'User-Agent': 'ATE-Hyundai-App/1.0',
    'x-claims': `userId|${import.meta.env.REACT_APP_USER_ID || '10569569'}` // Critical header from Laravel
  }
};

// Helper functions for building URLs
export const buildUrl = {
  // HyperDrive URLs (direct to HyperDrive API)
  opportunities: () => `${apiConfig.hyperdriveBaseUrl}${apiConfig.endpoints.opportunities}`,
  appointment: (opportunityId: string) => `${apiConfig.hyperdriveBaseUrl}${apiConfig.endpoints.appointment(opportunityId)}`,
  
  // Laravel URLs (base URL already includes /api, endpoints have no leading slash)
  sendEmails: () => `${apiConfig.hyundaiBaseUrl}/${apiConfig.endpoints.sendEmails}`,
  hyperdriveAuthenticate: () => `${apiConfig.hyundaiBaseUrl}/${apiConfig.endpoints.hyperdriveAuthenticate}`,
  hyperdriveCreateOpportunity: () => `${apiConfig.hyundaiBaseUrl}/${apiConfig.endpoints.hyperdriveCreateOpportunity}`,
};

// Helper function to get headers with auth
export const getHyperdriveHeaders = (bearerToken: string) => ({
  ...apiConfig.hyperdriveHeaders,
  'Authorization': `Bearer ${bearerToken}`
});

// Debug info
console.log('🔧 API Configuration loaded:', {
  environment: apiConfig.environment,
  hyperdriveBaseUrl: apiConfig.hyperdriveBaseUrl,
  hyundaiBaseUrl: apiConfig.hyundaiBaseUrl
});

export default apiConfig;
