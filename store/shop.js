import {types} from "mobx-state-tree";
import {detectMobile} from "../utils";
import ProductsStore from "./products";
import ErrorState from "./error";

const ShopStore =
    types
        .model('ShopStore', {
            products: ProductsStore,
            error: types.optional(ErrorState, {}),
        })
        .views(() => ({
            get isMobile() {
                return detectMobile();
            }
        }));

export default ShopStore;
