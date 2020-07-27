import {chunkMap, updateMapByObject} from '../../utils';
import PaginationStore from './pagination';
import {types} from 'mobx-state-tree';

export default (itemType) => (
    types
        .model('PagedCollectionStore', {
            pagination: types.optional(PaginationStore, {}),
            pages: types.map(types.array(itemType)),
            data: types.frozen([])
        })
        .actions(self => ({
            updatePagesMap(pages) {
                self.pages.clear();
                updateMapByObject(self.pages, pages)
            },
            updatePages(newData) {
                const pagesMap = chunkMap(newData, self.pagination.resultPerPage);
                self.updatePagesMap(pagesMap);
                self.pagination.updateTotalPages(self.pages.size);
            },
            updateData(data) {
                self.data = data;
                self.updatePages(self.data);
            }
        }))
        .views(self => ({
            get list() {
                return self.pages.get(self.pagination.currentPage) || [];
            }
        }))
);

