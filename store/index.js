import ShopStore from "./shop";
import ProductsRESTClient from "../services/products/environments/rest";

const initialState = {
    products: {}
};

const productsService = new ProductsRESTClient();

const shopStore = ShopStore.create(initialState, {productsService});

export default shopStore;
