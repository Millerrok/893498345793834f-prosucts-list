import {chunkMap, updateMapByObject} from "../utils";
import PaginationStore from "./pagination";
import {types} from "mobx-state-tree";

export default function makePagedCollectionStore(itemType) {
    return types
        .model('PagedCollectionStore', {
            pagination: types.optional(PaginationStore, {}),
            pages: types.map(types.array(itemType)),
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
}
