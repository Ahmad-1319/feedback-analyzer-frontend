const getApiBaseUrl = () => {
    let url = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    
    // If it's a browser environment and protocol is missing, it's likely a config error
    // Browsers treat "example.com" as a relative path. We must ensure it's absolute.
    if (typeof window !== 'undefined' && !url.startsWith('http')) {
        console.warn(`[WARN] NEXT_PUBLIC_API_URL ("${url}") is missing protocol. Prepending https://`);
        url = `https://${url}`;
    }

    // Sanitize: Remove trailing slash
    return url.endsWith('/') ? url.slice(0, -1) : url;
};

const API_BASE_URL = getApiBaseUrl();

if (typeof window !== 'undefined') {
    console.log(`[DEBUG] API BASE URL: ${API_BASE_URL}`);
}

export const API_ENDPOINTS = {
    AUTH: {
        SIGNUP: `${API_BASE_URL}/auth/signup`,
        LOGIN: `${API_BASE_URL}/auth/login`,
        ME: `${API_BASE_URL}/auth/me`,
    },
    ANALYZE: {
        TEXT: `${API_BASE_URL}/analyze/text`,
        UPLOAD: `${API_BASE_URL}/analyze/upload`,
        CHAT: `${API_BASE_URL}/analyze/chat`,
        QUICK_SENTIMENT: `${API_BASE_URL}/analyze/quick-sentiment`,
    },
    ANALYTICS: {
        SUMMARY: `${API_BASE_URL}/analytics/summary`,
        HISTORY: `${API_BASE_URL}/analytics/history`,
        THEMES: `${API_BASE_URL}/analytics/themes`,
        RECOMMENDATIONS: `${API_BASE_URL}/analytics/recommendations`,
        STATS: `${API_BASE_URL}/analytics/stats`,
    },
} as const;

export { API_BASE_URL };
