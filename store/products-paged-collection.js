import ProductStore from "./product";
import {types} from "mobx-state-tree";
import PaginationStore from "./pagination";
import {chunkMap} from "../utils";

const updateMapByObject = (map, obj) => {
    for (let [key, value] of obj) {
        map.set(key, value)
    }
};

const ProductsPagedCollection = types
    .model('PagedCollectionStore', {
        pagination: types.optional(PaginationStore, {}),
        pages: types.map(types.array(ProductStore)),
    })
    .actions(self => ({
        updatePagesMap(pages) {
            updateMapByObject(self.pages, pages)
        },
        updateData(data) {
            const pagesMap = chunkMap(data, self.pagination.resultPerPage);

            self.updatePagesMap(pagesMap);
            self.pagination.updateTotalPages(self.pages.size);
        }
    }))
    .views(self => ({
        get data() {
            return self.pages.get(self.pagination.currentPage) || [];
        }
    }));

export default ProductsPagedCollection;
