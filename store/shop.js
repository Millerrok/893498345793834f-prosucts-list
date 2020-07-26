import {types} from "mobx-state-tree";
import {detectMobile} from "../utils";
import ProductsStore from "./products";

const ShopStore =
    types
        .model('ShopStore', {
            products: ProductsStore,
        })
        .views(() => ({
            get isMobile() {
                return detectMobile();
            }
        }));

export default ShopStore;
