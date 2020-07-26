import {types} from "mobx-state-tree";
import {detectMobile} from "../utils";
import ProductsStore2 from "./products";

const ShopStore =
    types
        .model('ShopStore', {
            products: ProductsStore2,
        })
        .views(() => ({
            get isMobile() {
                return detectMobile();
            }
        }));

export default ShopStore;
