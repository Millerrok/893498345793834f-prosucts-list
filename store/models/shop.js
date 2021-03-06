import {types} from 'mobx-state-tree';
import {detectMobile} from '../../utils';
import ProductsStore from './products';
import ErrorState from './error';

const ShopStore =
    types
        .model('ShopStore', {
            products: types.optional(ProductsStore, {}),
            error: types.optional(ErrorState, {}),
            isLoading: true,
        })
        .views(() => ({
            get isMobile() {
                return detectMobile();
            }
        }))
        .actions((self) => ({
            afterCreate() {
                self.products.loadProducts();
            },
            toggleLoading(isLoading) {
                self.isLoading = typeof isLoading === 'boolean' ? isLoading : !self.isLoading;
            }
        }));

export default ShopStore;
