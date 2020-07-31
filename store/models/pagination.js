import {getParent, types} from 'mobx-state-tree';

const PaginationStore = types
    .model('PaginationStore', {
        resultPerPage: 10,
        currentPage: 1,
        totalPages: 0,
    })
    .views(self => ({
        get pagesCount() {
            const data = getParent(self).preparedData;

            return data && data.length / self.resultPerPage;
        },
        get current() {
            return self.currentPage <= self.pagesCount ? self.currentPage : 1;
        },
    }))
    .actions(self => ({
        updateCurrentPage(value) {
            self.currentPage = value;
        }
    }));

export default PaginationStore;
