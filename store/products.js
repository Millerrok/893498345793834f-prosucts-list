import ProductsPagedCollection from "./products-paged-collection";
import {getEnv, getParent, types} from "mobx-state-tree";

const ProductsStore =
    types
        .model('ProductsStore', {
            collection: types.optional(ProductsPagedCollection, {data: []}),
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
                return self.collection.list
            } ,
            get search() {
                return self.collection.search
            }
        }));

export default ProductsStore;
