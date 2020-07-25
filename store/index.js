import {addMiddleware, onSnapshot} from "mobx-state-tree";
import {actionLogger} from "mst-middlewares";
import ShopStore from "./shop";
import ProductsRESTClient from "../services/products/environments/rest";

const initialState = {
    products: {}
};

const productsService = new ProductsRESTClient();

const shopStore = ShopStore.create(initialState, {productsService});
addMiddleware(shopStore, actionLogger);
onSnapshot(shopStore, t => {
    console.log(`snapshop:`);
    console.log(t)
});

export default shopStore;
