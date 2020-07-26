export const API = {
    URL: 'https://raw.githubusercontent.com/traa/apiplp/master',
    makeUrl(end) {
        return `${this.URL}${end}`
    },
};

export const ENDPOINTS = {
    PRODUCTS: '/db.json'
};

