import {getEnv, getParent, types} from 'mobx-state-tree';
import {flow} from 'mobx';
import SearchStore from './search';
import PaginationStore from "./pagination";
import ProductStore from "./product";

const ProductsStore =
    types
        .model('ProductsStore', {
            data: types.optional(types.array(ProductStore), []),
            pagination: types.optional(PaginationStore, {}),
            search: types.optional(SearchStore, {}),
        })
        .actions(self => ({
            markLoading(loading) {
                getParent(self).toggleLoading(loading);
            },
            loadProducts: flow(function* loadProducts() {
                self.markLoading(true);

                try {
                    const data = yield getEnv(self).productsService.fetchProducts();

                    self.updateData(data);
                } catch (error) {
                    getParent(self).error.make(error)
                }

                self.markLoading(false);
            }),
            updateData(data) {
                self.data = data;
            },
        }))
        .views(self => ({
            get list() {
                const resultPerPage = self.pagination.resultPerPage;
                const idx = self.pagination.currentPage - 1;

                return self.preparedData.slice(idx, idx + resultPerPage) || [];
            },
            get preparedData() {
                const {search} = self;

                if (search.isEmpty) {
                    return self.data;
                }

                return self.data.filter(product =>
                    product.productName
                        .toLowerCase()
                        .includes(search.query.toLowerCase())
                );
            }
        }));

export default ProductsStore;
