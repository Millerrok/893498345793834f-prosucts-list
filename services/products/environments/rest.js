import RESTClient from '../../rest-client';
import {API, ENDPOINTS} from '../../urls';

export default class ProductsRESTClient extends RESTClient {
    fetch = async () => {
        const body = await this.request(API.makeUrl(ENDPOINTS.PRODUCTS));

        return body.pageItems;
    };
}
