import ProductsPagedCollection from './products-paged-collection';
import {getEnv, getParent, types} from 'mobx-state-tree';
import {flow} from 'mobx';
import SearchStore from './search';

const ProductsStore =
    types
        .model('ProductsStore', {
            collection: types.optional(ProductsPagedCollection, {data: []}),
            search: types.optional(SearchStore, {}),
            isLoading: true,
        })
        .actions(self => ({
            markLoading(loading) {
                self.isLoading = loading
            },
            loadProducts: flow(function* loadProducts() {
                self.markLoading(true);

                try {
                    const data = yield getEnv(self).productsService.fetchProducts();

                    self.updateData(data);
                    self.markLoading(false);
                } catch (error) {
                    getParent(self).error.make(error)
                }
            }),
            updateData(data) {
                self.collection.updateData(data);
            },
            updateWithSearch() {
                self.collection.updatePages(self.filteredData);
            },
        }))
        .views(self => ({
            get list() {
                return self.collection.list
            },
            get pagination() {
                return self.collection.pagination
            },
            get filteredData() {
                const {search: {query}} = self;
                return self.collection.data.filter(product =>
                    product.productName
                        .toLowerCase()
                        .includes(query.toLowerCase())
                );
            }
        }));

export default ProductsStore;
