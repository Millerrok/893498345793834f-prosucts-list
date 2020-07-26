import ProductsPagedCollection from "./products-paged-collection";
import {getEnv, getParent, types} from "mobx-state-tree";
import SearchStore from "./search";

const ProductsStore =
    types
        .model('ProductsStore', {
            collection: types.optional(ProductsPagedCollection, {}),
            search: types.optional(SearchStore, {
                query: ""
            }),
            isLoading: true,
        })
        .actions(self => ({
            markLoading(loading) {
                self.isLoading = loading
            },
            loadProducts() {
                self.markLoading(true);

                getEnv(self).productsService
                    .fetchProducts()
                    .then(self.updateCollection)
                    .catch((error) => getParent(self).error.make(error))
                    .finally(() => (self.markLoading(false)))
            },
            updateCollection(data) {
                self.collection.updateData(data);
            },
        }))
        .views(self => ({
            get list() {
                const {search: {isEmpty, query}, collection: {data}} = self;

                if (isEmpty) {
                    return data
                }

                return data.filter(product => product.containInProductName(query))
            }
        }));

export default ProductsStore;
