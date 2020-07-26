import {addMiddleware, onSnapshot} from "mobx-state-tree";

import ShopStore from "./shop";
import ProductsRESTClient from "../services/products/environments/rest";
import {actionLogger} from "mst-middlewares";

const initialState = {
    products: {}
};

const productsService = new ProductsRESTClient();
const shopStore = ShopStore.create(initialState, {productsService});

onSnapshot(shopStore, t => {
    console.log(`snapshop:`);
    console.log(t)
});
addMiddleware(shopStore, actionLogger);

export default shopStore;
