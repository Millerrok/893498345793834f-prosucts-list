import {RESTClient} from "../../../utils";

const API = {
    URL: 'https://raw.githubusercontent.com/traa/apiplp/master',
    makeUrl(end) {
        return `${this.URL}${end}`
    },
};

const ENDPOINTS = {
    PRODUCTS: '/db.json'
};

export default class ProductsRESTClient extends RESTClient {
    fetchProducts = async () => {
        const body = await this.request(API.makeUrl(ENDPOINTS.PRODUCTS));
        console.log('fetched');
        return body.pageItems;
    };
}
