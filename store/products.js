import {getEnv, types} from "mobx-state-tree";
import SearchStore from "./search";
import ProductsPagedCollection from "./products-paged-collection";

const ProductsStore2 =
    types
        .model('ProductsStore', {
            isLoading: true,
            collection: ProductsPagedCollection,
            search: types.optional(SearchStore, {
                query: ""
            }),
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
                    .catch(err => console.log(err))
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

export default ProductsStore2;
