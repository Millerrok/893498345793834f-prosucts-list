import {types} from "mobx-state-tree";
import PaginationStore from "./pagination";
import {chunkMap} from "../utils";

export default function makePagedCollectionStore(itemType) {
    return types
        .model('PagedCollectionStore', {
            pages: types.map(types.array(itemType)),
            pagination: types.optional(PaginationStore, {}),
        })
        .actions(self => ({
            updatePagesMap(pages) {
              for (let key in pages){
                    self.pages.set(key, pages[key])
              }
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
